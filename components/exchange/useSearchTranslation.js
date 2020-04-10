import { useRouter } from 'next/router'
import { useEffect, useReducer } from 'react'
import fetch from 'isomorphic-unfetch'
import { SERVERLESS_WORD_LOOKUP_URL } from '../../utils/api-config'

const fetchTranslation = (word, from, to) => {
  const body = {
    word: encodeURI(word),
    from: encodeURI(from),
    to: encodeURI(to)
  }

  const url = SERVERLESS_WORD_LOOKUP_URL

  return fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json())
}

const useSearchTranslation = () => {
  const router = useRouter()
  const { search = '', language = 'en' } = router.query
  const languageTo = language === 'en' ? 'fr' : 'en'

  const reducer = (state, action) => {
    switch (action.type) {
      case 'error': {
        return {
          ...state,
          status: 'rejected',
          error: action.error
        }
      }
      case 'success': {
        return {
          ...state,
          status: 'resolved',
          translation: action.translation
        }
      }
      case 'searching': {
        return {
          ...state,
          status: 'pending'
        }
      }
      case 'no_query': {
        return {
          status: 'idle',
          translation: null,
          error: null
        }
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    status: 'idle',
    translation: null,
    error: null
  })

  useEffect(() => {
    if (!search) {
      return dispatch({ type: 'no_query' })
    }

    let cancelled = false

    dispatch({ type: 'searching' })

    fetchTranslation(search, language, languageTo)
      .then(
        translation => cancelled || dispatch({ type: 'success', translation })
      )
      .catch(error => cancelled || dispatch({ type: 'error', error }))

    return () => {
      cancelled = true
    }
  }, [search, language])

  return state
}

export default useSearchTranslation

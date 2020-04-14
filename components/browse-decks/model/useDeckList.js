import { useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'
import DeckList from './DeckList'
import Deck from '../../deck/model/Deck'

const deckListReducer = (state, action) => {
  if (state.status === 'adding' && action.type !== 'success') {
    return state
  }

  switch (action.type) {
    case 'update': {
      return {
        ...state,
        status: 'loaded',
        decks: action.decks
      }
    }
    case 'add_deck': {
      return {
        ...state,
        status: 'adding'
      }
    }
    case 'success': {
      return {
        ...state,
        status: 'loaded'
      }
    }
    case 'error': {
      return {
        ...state,
        status: 'rejected',
        error: action.error
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const useDeckList = uid => {
  const router = useRouter()
  const [state, dispatch] = useReducer(deckListReducer, {
    status: 'preloaded',
    decks: null,
    error: null
  })

  useEffect(() => {
    DeckList.get(dispatch, uid)
  }, [uid])

  const createDeck = () => {
    dispatch({ type: 'add_deck' })

    Deck.create(uid)
      .then(id => {
        router.push(
          `/edit-deck?id=${id}&cameFrom=${'create'}&browseContext=${'repeat'}`
        )

        dispatch({ type: 'success' })
      })
      .catch(error => dispatch({ type: 'error', error }))
  }

  return { ...state, createDeck }
}

export default useDeckList

import { useReducer, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { firebaseContext } from '../FireBaseAuthProvider'
import { db } from '../../utils/firebase-config'

const useEditDeck = () => {
  const editDeckReducer = (state, action) => {
    switch (action.type) {
      case 'error': {
        return {
          ...state,
          status: 'rejected',
          error: action.error
        }
      }
      case 'fetch': {
        return {
          ...state,
          status: 'fetching'
        }
      }
      case 'success': {
        switch (state.status) {
          case 'fetching': {
            return {
              ...state,
              status: 'resolved',
              deck: action.deck
            }
          }
          case 'uploading': {
            return {
              ...state,
              status: 'resolved',
              edited: false
            }
          }
          default: {
            return {
              ...state
            }
          }
        }
      }
      case 'submit_changes': {
        return {
          ...state,
          status: 'uploading'
        }
      }
      case 'local_update': {
        return {
          ...state,
          edited: true,
          deck: action.updateFn(state.deck)
        }
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
  }

  const router = useRouter()
  const { id } = router.query

  const fbContext = useContext(firebaseContext)

  const [state, dispatch] = useReducer(editDeckReducer, {
    status: 'start',
    deck: null,
    error: null,
    edited: false
  })

  useEffect(() => {
    let cancelled = false

    dispatch({ type: 'fetch' })

    db.collection('decks')
      .doc(id)
      .get()
      .then(doc => {
        if (cancelled) return
        if (!doc.exists) {
          throw new Error(
            'The deck could not be found. Try going back to your decks, and trying this action again.'
          )
        }

        dispatch({ type: 'success', deck: doc.data() })
      })
      .catch(error => cancelled || dispatch({ type: 'error', error }))

    return () => {
      cancelled = true
    }
  }, [id])

  const updateName = newName =>
    dispatch({
      type: 'local_update',
      updateFn: oldDeck => ({ ...oldDeck, name: newName })
    })

  const updateCard = index => (field, newValue) =>
    dispatch({
      type: 'local_update',
      updateFn: oldDeck => {
        const newCards = oldDeck.cards.map((card, i) =>
          i !== index ? card : { ...card, [field]: newValue }
        )
        return { ...oldDeck, cards: newCards }
      }
    })

  const addCard = () =>
    dispatch({
      type: 'local_update',
      updateFn: oldDeck => ({
        ...oldDeck,
        cards: [...oldDeck.cards, { original: '', translation: '' }]
      })
    })

  const removeCard = index => () =>
    dispatch({
      type: 'local_update',
      updateFn: oldDeck => ({
        ...oldDeck,
        cards: oldDeck.cards.filter((_el, i) => i !== index)
      })
    })

  const submitChanges = () => {
    dispatch({ type: 'submit_changes' })

    db.collection('decks')
      .doc(id)
      .set(state.deck)
      .then(() => {
        dispatch({ type: 'success' })
      })
      .catch(error => dispatch({ type: 'error', error }))
  }

  const removeDeck = () => {
    dispatch({ type: 'submit_changes' })

    db.collection('decks')
      .doc(id)
      .delete()
      .then(() => {
        router.push('/repeat')
      })
      .catch(error => dispatch({ type: 'error', error }))
  }
  return {
    status: state.status,
    deck: state.deck,
    error: state.error,
    edited: state.edited,
    updateName,
    updateCard,
    addCard,
    submitChanges,
    id,
    removeCard,
    removeDeck,
    uid: fbContext.user && fbContext.user.uid
  }
}

export default useEditDeck

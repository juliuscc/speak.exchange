import { useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'
import firebase from 'firebase/app'
import { db } from '../../../utils/firebase-config'
import DeckList from './DeckList'

const DeckListReducer = (state, action) => {
  if (state.status === 'adding') {
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
  const [state, dispatch] = useReducer(DeckListReducer, {
    status: 'preloaded',
    decks: null,
    error: null
  })

  useEffect(() => {
    DeckList.get(dispatch, uid)
  }, [uid])

  const createDeck = () => {
    dispatch({ type: 'add_deck' })

    db.collection('decks')
      .add({
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        name: 'Untitled Deck',
        cards: []
      })
      .then(docRef => router.push(`/edit-deck?id=${docRef.id}`))
      .catch(error => dispatch({ type: 'error', error }))
  }

  return { ...state, createDeck }
}

export default useDeckList

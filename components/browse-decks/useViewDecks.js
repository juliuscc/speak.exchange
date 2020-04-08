import { useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'
import firebase from 'firebase/app'
import { db } from '../../utils/firebase-config'

const viewDecksReducer = (state, action) => {
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

const useViewDecks = uid => {
  const router = useRouter()
  const [state, dispatch] = useReducer(viewDecksReducer, {
    status: 'preloaded',
    decks: null,
    error: null
  })

  useEffect(() => {
    const query = uid
      ? db.collection('decks').where('uid', '==', uid)
      : db.collection('decks')

    return query.onSnapshot(
      { includeMetadataChanges: true },
      querySnapshot => {
        if (querySnapshot.metadata.hasPendingWrites) return

        const decks = {}
        querySnapshot.forEach(doc => {
          decks[doc.id] = doc.data()
        })

        dispatch({ type: 'update', decks })
      },
      error => dispatch({ type: 'error', error })
    )
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

export default useViewDecks

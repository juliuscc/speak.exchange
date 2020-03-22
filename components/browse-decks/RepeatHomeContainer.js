import React, { useState, useEffect, useContext } from 'react'
import { db } from '../../utils/firebaseConfig'
import { firebaseContext } from '../FireBaseAuthProvider'
import RepeatHome from './RepeatHome'

const Deck = ({ userId }) => {
  const [decks, setDecks] = useState({})

  useEffect(
    () =>
      db
        .collection('decks')
        .where('uid', '==', userId)
        .onSnapshot(querySnapshot => {
          const deckObject = {}
          querySnapshot.forEach(doc => {
            deckObject[doc.id] = doc.data()
          })
          setDecks(deckObject)
        }),

    [userId]
  )

  return <RepeatHome decks={decks} />
}

export default () => {
  const fbContext = useContext(firebaseContext)
  if (fbContext.user) {
    return <Deck userId={fbContext.user.uid} />
  }
  return <div>Please log in</div>
}

import React, { useState, useEffect, useContext } from 'react'
import { db } from '../utils/firebaseConfig'
import { firebaseContext } from './FireBaseAuthProvider'
import RepeatHome from '../presentational/RepeatHome'

const Deck = ({ userId }) => {
  const [name, setDeckName] = useState('')

  const [decks, setDecks] = useState({})

  const setDeckNameState = event => setDeckName(event.target.value)
  const submit = () => {
    const deck = {
      uid: userId,
      deckName: name,
      words: []
    }
    db.collection('decks').add(deck)
    setDeckName('')
  }

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

    [userId, name]
  )

  return (
    <>
      <RepeatHome
        deckNames={decks}
        value={name}
        changeFunction={setDeckNameState}
        submitFunction={submit}
      />
    </>
  )
}

export default () => {
  const fbContext = useContext(firebaseContext)
  if (fbContext.user) {
    return <Deck userId={fbContext.user.uid} />
  }
  return <div>Please log in</div>
}

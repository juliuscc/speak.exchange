import { db } from '../../../utils/firebase-config'

export default class DeckList {}

DeckList.get = (cb, uid) => {
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

      cb({ type: 'update', decks })
    },
    error => cb({ type: 'error', error })
  )
}

import firebase from 'firebase/app'
import { db } from '../../../utils/firebase-config'

export default class Deck {
  constructor(name, cards, uid, createdAt) {
    this.name = name
    this.cards = cards
    this.uid = uid
    this.createdAt = createdAt
  }

  // Local updates
  updateName(newName) {
    return new Deck(newName, this.cards, this.uid, this.createdAt)
  }

  updateCard(cardIndex, field, newValue) {
    const newCards = this.cards.map((card, i) =>
      i !== cardIndex ? card : { ...card, [field]: newValue }
    )
    return new Deck(this.name, newCards, this.uid, this.createdAt)
  }

  addCard() {
    const newCards = [...this.cards, { original: '', translation: '' }]
    return new Deck(this.name, newCards, this.uid, this.createdAt)
  }

  removeCard(cardIndex) {
    const newCards = this.cards.filter((_el, i) => i !== cardIndex)
    return new Deck(this.name, newCards, this.uid, this.createdAt)
  }

  // Remote updates
  submitChanges(id) {
    const deck = {
      name: this.name,
      cards: this.cards,
      uid: this.uid,
      createdAt: this.createdAt
    }

    return db
      .collection('decks')
      .doc(id)
      .set(deck)
      .then(() => deck)
  }

  copy(uid) {
    const deck = {
      name: `Copy of ${this.name}`,
      cards: this.cards,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }

    return db
      .collection('decks')
      .add(deck)
      .then(docRef => docRef.id)
  }
}

// Static CRUD methods
Deck.create = uid =>
  db
    .collection('decks')
    .add({
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      name: 'Untitled Deck',
      cards: []
    })
    .then(docRef => docRef.id)

Deck.get = id =>
  db
    .collection('decks')
    .doc(id)
    .get()
    .then(doc => {
      if (!doc.exists) {
        throw new Error(
          'The deck could not be found. Try going back to your decks, and trying this action again.'
        )
      }

      const { name, cards, uid, createdAt } = doc.data()
      return new Deck(name, cards, uid, createdAt)
    })

Deck.delete = id =>
  db
    .collection('decks')
    .doc(id)
    .delete()

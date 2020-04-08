import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyD9mEsaJxi64CMJVEg__Xix5XLPCzAGX8c',
  authDomain: 'speak-exhange.firebaseapp.com',
  databaseURL: 'https://speak-exhange.firebaseio.com',
  projectId: 'speak-exhange',
  storageBucket: 'speak-exhange.appspot.com',
  messagingSenderId: '943318203535',
  appId: '1:943318203535:web:17f1f8ed1ed2c9773cc4fa'
}

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app()

export const firebaseAppAuth = firebaseApp.auth()
export const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
}

export const db = firebase.firestore()

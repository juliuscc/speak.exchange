import React from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import config from '../utils/firebaseConfig'

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app()
const firebaseAppAuth = firebaseApp.auth()

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
}

export const firebaseContext = React.createContext()

export const FireBaseAuthProvider = withFirebaseAuth({
  providers,
  firebaseAppAuth
})(({ children, ...rest }) => (
  <firebaseContext.Provider value={rest}>{children}</firebaseContext.Provider>
))

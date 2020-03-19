import React from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import 'firebase/auth'

import { firebaseAppAuth, providers } from '../utils/firebaseConfig'

export const firebaseContext = React.createContext()

export const FireBaseAuthProvider = withFirebaseAuth({
  providers,
  firebaseAppAuth
})(({ children, ...rest }) => (
  <firebaseContext.Provider value={rest}>{children}</firebaseContext.Provider>
))

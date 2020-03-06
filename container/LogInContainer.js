import { useState } from 'react'
import { firebaseContext } from './FireBaseAuthProvider'
import LogIn from '../presentational/LogIn'

export default () => {
  const [visible, setVisible] = useState(false)

  return (
    <firebaseContext.Consumer>
      {context => (
        <LogIn
          popUpVisible={visible}
          togglePopUpVisible={() => setVisible(v => !v)}
          user={context.user}
          signIn={context.signInWithGoogle}
          signOut={context.signOut}
        />
      )}
    </firebaseContext.Consumer>
  )
}

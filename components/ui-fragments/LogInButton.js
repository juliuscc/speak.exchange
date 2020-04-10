import { useContext } from 'react'
import styled from 'styled-components'
import { firebaseContext } from '../FireBaseAuthProvider'
import useToggle from '../../utils/useToggle'

const LogInWrapper = styled.div`
  padding-right: 30px;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  align-items: center;
`

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.text};
  z-index: 3;
`

const ProfileImage = styled.img`
  width: 40px;
  border-radius: 50%;
  font-weight: 600;
  place-self: center;
  cursor: pointer;
`
const PopUpBox = styled.span`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  width: 200px;
  background-color: ${({ theme }) => theme.colors.black};
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 25px 0;
  position: absolute;
  top: 70px;
  right: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ProfileName = styled.span`
  border: none;
  padding-top: 10px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-weight: 600;
`

const SignOut = styled.button`
  border: none;
  display: grid;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: 15px;
  font-weight: 600;
  width: 50%;
  align-items: center;
  margin-top: 20px;
  padding: 5px 0;
`
const SignIn = styled.button`
  border: none;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`
const PopUp = ({ photoUrl, displayName, signOut }) => {
  const [visible, toggleVisible] = useToggle(false)

  return (
    <>
      <UserProfile>
        <ProfileImage
          src={photoUrl}
          alt="profile picture"
          onClick={toggleVisible}
        />
        <PopUpBox visible={visible}>
          <ProfileImage src={photoUrl} />
          <ProfileName> {displayName} </ProfileName>

          <SignOut onClick={signOut}>Log Out</SignOut>
        </PopUpBox>
      </UserProfile>
    </>
  )
}

export default () => {
  const { user, signInWithGoogle, signOut } = useContext(firebaseContext)

  return (
    <LogInWrapper>
      {user ? (
        <>
          <PopUp
            photoUrl={user.photoURL}
            displayName={user.displayName}
            signOut={signOut}
          />
        </>
      ) : (
        <SignIn onClick={signInWithGoogle}>Log in</SignIn>
      )}
    </LogInWrapper>
  )
}

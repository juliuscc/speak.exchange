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
  z-index: 1;
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
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.black};
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 10px 0;
  position: absolute;
  top: 70px;
  right: 30px;
  display: grid;
  grid-template-rows: auto auto auto auto;
`

const ProfileName = styled.span`
  border: none;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-weight: 600;
`
const ButtonWrapper = styled.div`
  display: Grid;
  grid-template-columns: auto auto;
`

const MyProfile = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-weight: 600;
`

const Settings = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-weight: 600;
`
const SignOut = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: 15px;
  font-weight: 600;
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
          <ButtonWrapper>
            <MyProfile>MyProfile</MyProfile>
            <Settings>Settings</Settings>
          </ButtonWrapper>
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

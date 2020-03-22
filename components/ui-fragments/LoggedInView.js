import { useContext, cloneElement, Children } from 'react'
import styled from 'styled-components'
import { firebaseContext } from '../FireBaseAuthProvider'
import Container from './Container'

const MessageWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 50px 0;
  text-align: center;

  * {
    font-weight: 600;
  }
`

export default ({ children }) => {
  const child = Children.only(children)

  const fbContext = useContext(firebaseContext)
  if (fbContext.user) {
    return cloneElement(child, { user: fbContext.user })
  }
  return (
    <MessageWrapper>
      <Container>
        You have to be logged in to view this. Please log in with the button on
        the top right corner.
      </Container>
    </MessageWrapper>
  )
}

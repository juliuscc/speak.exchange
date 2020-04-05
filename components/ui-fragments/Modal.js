import styled, { keyframes } from 'styled-components'
import { Close } from 'styled-icons/remix-line/Close'
import { IconButton } from './Button'

const floatIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Shadow = styled.div`
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.3);
`

const ModalContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 10vh;
  padding: 0 20px;
`

const Modal = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  position: relative;

  animation: ${floatIn} 0.3s;
`

const Header = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
`

const HeaderTitle = styled.h2`
  font-size: 16px;
  margin: 0px;
  font-family: ${({ theme }) => theme.fonts.text};
  flex: 1;
`

const Button = styled(IconButton)`
  background: none;
  border: none;
  padding: 0;
  width: auto;
  height: auto;

  svg {
    color: ${({ theme }) => theme.colors.black};
    width: 24px;
  }
`

const Content = styled.div`
  padding: 16px;
  overflow-y: auto;

  strong {
    font-weight: 600;
  }

  > * {
    margin-top: 0;
  }
`

export default ({ children, title, toggleVisible }) => (
  <Shadow onClick={toggleVisible}>
    <ModalContainer onClick={e => e.stopPropagation()}>
      <Modal>
        <Header>
          <HeaderTitle>{title}</HeaderTitle>
          <Button
            icon={Close}
            onClick={toggleVisible}
            title="Close Modal"
            aria-label="Close Modal"
          />
        </Header>
        <Content>{children}</Content>
      </Modal>
    </ModalContainer>
  </Shadow>
)

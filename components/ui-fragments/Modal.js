import styled, { keyframes } from 'styled-components'
import { Close } from 'styled-icons/remix-line/Close'
import { IconButton } from './Button'
import screenSizes from '../../utils/screen-sizes'

const fiveDeckBoxesWide = 930

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
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
`

const ModalContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 10vh;
  padding: 0 20px;
`

const ModalContainerFlexible = styled.div`
  width: auto;
  max-width: ${fiveDeckBoxesWide}px;
  margin: 0 auto;
  margin-top: 10vh;
  padding: 0 20px;
  max-height: calc(90vh - 20px);
  display: block;

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    margin-top: 5vh;
    overflow: auto;
  }
`

const Modal = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  position: relative;

  animation: ${floatIn} 0.3s;
`

const ModalFlexible = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: calc(90vh - 20px);

  animation: ${floatIn} 0.3s;
`

const Header = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  z-index: 100;
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

const ContentFlexible = styled.div`
  overflow-y: auto;
  overflow: auto;
  display: flex;
  flex-direction: column;

  strong {
    font-weight: 600;
  }

  > * {
    margin-top: 0;
  }
`

export default ({ children, title, toggleVisible, flexible }) => (
  <Shadow onClick={toggleVisible}>
    {flexible ? (
      <ModalContainerFlexible onClick={e => e.stopPropagation()}>
        <ModalFlexible>
          <Header>
            <HeaderTitle>{title}</HeaderTitle>
            <Button
              icon={Close}
              onClick={toggleVisible}
              title="Close Modal"
              aria-label="Close Modal"
            />
          </Header>
          <ContentFlexible>{children}</ContentFlexible>
        </ModalFlexible>
      </ModalContainerFlexible>
    ) : (
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
    )}
  </Shadow>
)

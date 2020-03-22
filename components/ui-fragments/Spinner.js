import styled, { keyframes } from 'styled-components'

export const SpinnerContainer = styled.div`
  position: relative;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  border: 10px solid ${({ theme }) => theme.colors.focusBackground};
  border-radius: 50%;
  border-top: 10px solid ${({ theme }) => theme.colors.primary};
  width: 70px;
  height: 70px;
  animation: ${rotate} 1s linear infinite;
  position: absolute;
  top: 70px;
  left: calc(50% - 35px);
  filter: drop-shadow(0px 0px 10px #ddd);
`

export default Spinner

export const RelativeSpinner = styled(Spinner)`
  position: relative;
  top: 0;
  left: 0;
`

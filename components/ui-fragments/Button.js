import styled from 'styled-components'

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  padding: 0 20px;
  border: 1px ${({ theme }) => theme.colors.border};
  border-style: solid;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  height: 43.5px;
  font-size: 14px;

  :hover:not(:disabled) {
    opacity: 0.5;
  }

  :disabled {
    background: ${({ theme }) => theme.colors.primaryMutedInactive};
    cursor: not-allowed;
  }

  :focus {
    outline: none;
    box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.colors.border};
  }
`

const FixedSizeButton = styled(Button)`
  width: 43.5px;
  padding: 0%;
`

export const DangerButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.danger};
`

export const BlackButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.black};
`

export const HollowButton = styled(Button)`
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};

  :hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    opacity: 1;
  }
`

const StyledIcon = styled.svg`
  color: ${({ theme }) => theme.colors.white};
  width: 20px;
`

export const IconButton = ({ icon, ...rest }) => (
  <FixedSizeButton {...rest}>
    <StyledIcon as={icon} />
  </FixedSizeButton>
)

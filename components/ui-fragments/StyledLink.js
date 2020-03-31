import styled from 'styled-components'
import screenSizes from '../../utils/screen-sizes'

const StyledLink = styled.a`
  text-decoration: none;
  margin: 20px;
  align-items: center;
  display: flex;

  flex-direction: column;
  opacity: ${({ active, theme }) =>
    active ? 1 : theme.transparencies.inactive};

  :hover {
    opacity: 1;
  }

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    align-items: start;
    margin: 0px;
  }
`
export default StyledLink

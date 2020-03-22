import styled from 'styled-components'
import { transparentize } from 'polished'

const DeckBox = styled.a`
  display: flex;
  flex: 0 0 auto;
  width: 150px;
  height: 150px;
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border-style: ${props => (props.hollow ? 'dashed' : 'none')};
  border-color: ${({ theme }) => theme.colors.primaryMuted};
  border-width: 4px;
  background-color: ${props =>
    props.hollow
      ? transparentize(1, props.theme.colors.primaryMuted)
      : props.theme.colors.primaryMuted};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 30px;
  font-weight: 600;
  color: ${props =>
    props.hollow ? props.theme.colors.primaryMuted : props.theme.colors.white};
  text-decoration: none;
  cursor: pointer;

  :hover {
    background-color: ${props =>
      props.hollow
        ? transparentize(0.8, props.theme.colors.primaryMuted)
        : props.theme.colors.primaryMuted};
  }

  :disabled {
    cursor: not-allowed;
  }
`

export default DeckBox

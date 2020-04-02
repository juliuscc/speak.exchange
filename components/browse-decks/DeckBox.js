import { forwardRef } from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { Edit as EditIcon } from 'styled-icons/material/Edit'
import { Play } from 'styled-icons/foundation/Play'
import Link from 'next/link'
import { RelativeSpinner } from '../ui-fragments/Spinner'

const DeckBox = styled.a`
  position: relative;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  width: 150px;
  height: 150px;
  padding: 10px;
  padding-bottom: 20px;
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
  font-size: 20px;
  font-weight: 600;
  text-align: center;
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

const ActionWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 5px;
`

const ActionButton = styled.button`
  position: relative;

  margin: 0;
  border-radius: 10px;
  border: none;
  padding: 5px;
  background-color: transparent;
  color: ${props => props.theme.colors.white};

  :hover {
    background-color: ${props => props.theme.colors.highlighted};
  }

  :hover > div {
    visibility: visible;
  }
`

const ToolTip = styled.div`
  position: absolute;
  top: -15px;
  width: 20px;
  height: 20px;
  visibility: hidden;
`
const StyledEditIcon = styled(EditIcon)`
  color: ${({ theme }) => theme.colors.white};
  width: 20px;
`
const StyledPlay = styled(Play)`
  color: ${({ theme }) => theme.colors.white};
  width: 20px;
`

export const HollowDeckBox = ({ loading, onClick }) => (
  <DeckBox hollow as="button" onClick={onClick} disabled={loading}>
    {loading ? <RelativeSpinner /> : '+'}
  </DeckBox>
)

export const Edit = ({ id }) => {
  return (
    <Link href={`/edit-deck?id=${id}`}>
      <ActionButton>
        <ToolTip>Edit</ToolTip>
        <StyledEditIcon />
      </ActionButton>
    </Link>
  )
}

export default forwardRef(
  ({ children, onClick, hollow, href, id, edit }, ref) => {
    return (
      <DeckBox href={href} ref={ref} onClick={onClick} hollow={hollow}>
        <div>{children}</div>
        <ActionWrapper>
          {edit ? <Edit id={id} /> : null}
          {/* Add link to run test here */}
          {/* <Link href={`/test-deck?id=${id}`}> */}
          <ActionButton>
            <ToolTip>Run</ToolTip>
            <StyledPlay />
          </ActionButton>
          {/* </Link> */}
        </ActionWrapper>
      </DeckBox>
    )
  }
)

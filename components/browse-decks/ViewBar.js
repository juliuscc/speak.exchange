import styled from 'styled-components'
import { withRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'
import { HelpCircle } from 'styled-icons/boxicons-regular/HelpCircle'
import { Edit } from 'styled-icons/material/Edit'
import { Play } from 'styled-icons/foundation/Play'
import { Button } from '../ui-fragments/Button'
import useToggle from '../../utils/useToggle'
import Modal from '../ui-fragments/Modal'
import screenSizes from '../../utils/screen-sizes'

const barHeight = 80

const ViewBarBox = styled.div`
  width: 100%;
  height: ${barHeight}px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.focusBackground};
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    height: ${barHeight * 2 - 20}px;
    flex-direction: column;
  }
`

const LinkWrapper = styled.div`
  display: flex;
  height: ${barHeight}px;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const ViewLink = styled.a`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 15px;
  height: 100%;
  padding: 0 20px;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.lightgrey : null};
  font-weight: ${({ active }) => (active ? '600' : '300')};
  flex-direction: column;
  opacity: ${({ active, theme }) =>
    active ? 1 : theme.transparencies.inactive};

  :hover {
    opacity: 1;
  }
`

const HelpWrapper = styled.div`
  padding: 0 20px;
  height: ${barHeight}px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 100%;
    margin-top: -20px;
  }
`

const HelpButton = styled(Button)`
  width: 100%;
`

const Help = styled(HelpCircle)`
  height: 20px; /* The exact height of the text */
  margin-left: 5px;
`

const TextIcon = styled.svg`
  color: ${({ theme }) => theme.colors.white};
  width: 20px;
  height: 20px;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 5px;
  box-sizing: content-box;
`

const ViewBar = ({ router: { pathname } }) => {
  const [showHelp, toggleShowHelp] = useToggle()
  return (
    <ViewBarBox>
      <LinkWrapper>
        <Link href="/repeat">
          <ViewLink active={pathname === '/repeat'}>My Decks</ViewLink>
        </Link>

        <Link href="/all-decks">
          <ViewLink active={pathname === '/all-decks'}>
            Browse Community Decks
          </ViewLink>
        </Link>
      </LinkWrapper>
      <HelpWrapper>
        <HelpButton onClick={toggleShowHelp}>
          Help
          <Help />
        </HelpButton>
      </HelpWrapper>
      {showHelp && (
        <Modal title="How to use speak.repeat" toggleVisible={toggleShowHelp}>
          <p>
            Use different decks for different word translations you want to
            memorize and practise in the future.
          </p>
          <p>
            Click the <TextIcon as={Edit} /> icon to <strong>edit</strong> your
            deck or the <TextIcon as={Play} /> icon to <strong>run</strong> the
            words in that deck and practice, flipping them one by one, like you
            would with flashcards.
          </p>
        </Modal>
      )}
    </ViewBarBox>
  )
}

export default withRouter(ViewBar)

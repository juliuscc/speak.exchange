import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { CheckboxChecked } from 'styled-icons/icomoon/CheckboxChecked'
import { Error } from 'styled-icons/boxicons-solid/Error'
import { BlackButton } from '../ui-fragments/Button'
import DeckBox from '../browse-decks/DeckBox'
import { DeckListsContext } from '../DeckListsContextProvider'
import LoggedInView from '../ui-fragments/LoggedInView'
import Modal from '../ui-fragments/Modal'
import screenSizes from '../../utils/screen-sizes'
import { RelativeSpinner } from '../ui-fragments/Spinner'
import Deck from '../deck/model/Deck'

const ModalContentContainer = styled.div`
  overflow-y: scroll;
`

const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex: 1;
  // overflow-y: scroll;
  margin: 16px 16px 0 16px;

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    display: block;
    justify-content: center;
    align-items: center;

    a {
      width: 100%;
    }
  }
`

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  bottom: 0;
  margin: 16px;

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    background-color: ${({ theme }) => theme.colors.white};
    align-items: center;
    justify-content: center;
    // padding-top: 10px;
    > button {
      width: 80%;
    }
  }
`

const ModalIcon = styled.svg`
  color: ${({ theme }) => theme.colors.white};
  width: 30px;
`

const DeckResponseContainer = styled.div`
  position: relative;
  top: 10px;
`

const DeckBoxContainer = ({ deck, id, card }) => {
  const [status, setStatus] = useState('init')

  const appendCard = () => {
    setStatus('loading')

    new Deck(deck.name, deck.cards, deck.uid, deck.createdAt)
      .appendCard(card)
      .submitChanges(id)
      .then(() => setStatus('added'))
      .catch(() => setStatus('error'))
  }

  if (status === 'loading') {
    return (
      <DeckBox id={id} noRun>
        <RelativeSpinner />
      </DeckBox>
    )
  }

  if (status === 'added') {
    return (
      <DeckBox id={id} noRun>
        <DeckResponseContainer>
          <ModalIcon as={CheckboxChecked} />
          <p>Added to {deck.name}!</p>
        </DeckResponseContainer>
      </DeckBox>
    )
  }

  if (status === 'error') {
    return (
      <DeckBox id={id} noRun>
        <DeckResponseContainer>
          <ModalIcon as={Error} />
          <p>Something went wrong. Refresh the page and try again.</p>
        </DeckResponseContainer>
      </DeckBox>
    )
  }

  return (
    <DeckBox id={id} onClick={appendCard} noRun>
      {deck.name}
    </DeckBox>
  )
}

export default ({ to, from, deckModalVisible, toggleDeckModalVisible }) => {
  const { userDecks } = useContext(DeckListsContext)

  return (
    <>
      {deckModalVisible && (
        <Modal
          title={`Choose a deck to add the card "${to.trim()}"`}
          toggleVisible={toggleDeckModalVisible}
          flexible
        >
          <LoggedInView>
            <>
              <ModalContentContainer>
                <ModalContent>
                  {Object.entries(userDecks.decks).map(([id, deck]) => (
                    <DeckBoxContainer
                      key={id}
                      deck={deck}
                      id={id}
                      card={{ original: to.trim(), translation: from.trim() }}
                    />
                  ))}
                </ModalContent>
              </ModalContentContainer>
              <ModalFooter>
                <BlackButton type="button" onClick={toggleDeckModalVisible}>
                  Done
                </BlackButton>
              </ModalFooter>
            </>
          </LoggedInView>
        </Modal>
      )}
    </>
  )
}

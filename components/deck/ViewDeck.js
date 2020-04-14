import styled from 'styled-components'
import Link from 'next/link'
import Container from '../ui-fragments/Container'
import WordCard from './WordCard'
import { Button, DangerButton, BlackButton } from '../ui-fragments/Button'
import screenSizes from '../../utils/screen-sizes'
import Modal from '../ui-fragments/Modal'
import useToggle from '../../utils/useToggle'

const Background = styled.fieldset`
  background-color: ${({ theme }) => theme.colors.focusBackground};
  border: none;
  padding: 0;
  margin: 0;

  :disabled {
    opacity: 0.5;
  }
`

const TitleBar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  align-items: center;

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    flex-direction: column;
  }
`

const DeckName = styled.h1`
  min-width: 0;
  font-weight: 800;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
    flex: 1;
    font-size: 18px;
  }
`

const ButtonsWrapper = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;

  & > button {
    margin-left: 10px;
    margin-top: 10px;
  }

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 0;
    width: 100%;

    & > button {
      width: 100%;
      margin-left: 0;
    }
  }
`

const WordsWrapper = styled.div`
  padding-bottom: 50px;
`

const AlignRight = styled.div`
  display: flex;
  justify-content: flex-end;

  > button {
    margin-left: 10px;
  }
`

export default ({
  name,
  cards,
  id,
  deleteDeck,
  user,
  copyDeck,
  browseContext
}) => {
  const [deleteModalVisible, toggleDeleteModalVisible] = useToggle()

  return (
    <Background>
      <Container>
        <TitleBar>
          <DeckName>{name}</DeckName>
          <ButtonsWrapper>
            {user === 'same' ? (
              <Link
                key={id}
                href={`/edit-deck?id=${id}&cameFrom=view-deck&browseContext=${browseContext}`}
              >
                <Button type="button">Edit deck</Button>
              </Link>
            ) : (
              <Button
                type="button"
                onClick={copyDeck}
                disabled={user === 'none'}
              >
                Copy deck
              </Button>
            )}
            <Link
              href={`/run-deck?id=${id}&cameFrom=view-deck&browseContext=${browseContext}`}
            >
              <Button type="button">Run deck</Button>
            </Link>
            <Link href={`/${browseContext}`}>
              <BlackButton type="button">Go back</BlackButton>
            </Link>
            {user === 'same' && (
              <>
                <DangerButton type="button" onClick={toggleDeleteModalVisible}>
                  Delete
                </DangerButton>
                {deleteModalVisible && (
                  <Modal
                    title="Are you absolutely sure?"
                    toggleVisible={toggleDeleteModalVisible}
                  >
                    <p>
                      Do you really want to delete the <strong>{name}</strong>{' '}
                      deck? This action cannot be undone.
                    </p>
                    <AlignRight>
                      <BlackButton
                        type="button"
                        onClick={toggleDeleteModalVisible}
                      >
                        Cancel
                      </BlackButton>
                      <DangerButton type="button" onClick={deleteDeck}>
                        Delete
                      </DangerButton>
                    </AlignRight>
                  </Modal>
                )}
              </>
            )}
          </ButtonsWrapper>
        </TitleBar>
        <WordsWrapper>
          {cards.map((card, i) => (
            <WordCard key={i} card={card}>
              Test
            </WordCard>
          ))}
        </WordsWrapper>
      </Container>
    </Background>
  )
}

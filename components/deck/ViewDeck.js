import styled from 'styled-components'
import Link from 'next/link'
import Container from '../ui-fragments/Container'
import WordCard from './WordCard'
import { Button, DangerButton } from '../ui-fragments/Button'
import screenSizes from '../../utils/screen-sizes'

const Background = styled.fieldset`
  background-color: ${({ theme }) => theme.colors.focusBackground};
  width: 100%;
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
`

const DeckName = styled.h1`
  min-width: 0;
  font-weight: 800;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
    flex: 1;
  }
`

const ButtonsWrapper = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;

  & > * {
    margin-left: 10px;
  }
`

const WordsWrapper = styled.div`
  padding-bottom: 50px;
`

export default ({ name, cards, id, removeDeck, uid, deck, copyDeck }) => (
  <Background>
    <Container>
      <TitleBar>
        <DeckName>{name}</DeckName>
        <ButtonsWrapper>
          {uid === deck.uid ? (
            <Link key={id} href={`/edit-deck?id=${id}`}>
              <Button type="button">Edit deck</Button>
            </Link>
          ) : (
            <Button type="button" onClick={copyDeck} disabled={uid === null}>
              Copy deck
            </Button>
          )}

          <Link href={`/run-deck?id=${id}`}>
            <Button type="button">Run deck</Button>
          </Link>
          {uid === deck.uid ? (
            <>
              <Link href="/repeat">
                <Button type="button" cancel>
                  Go back
                </Button>
              </Link>
              <DangerButton type="button" onClick={removeDeck}>
                Delete
              </DangerButton>
            </>
          ) : (
            <Link href="/all-decks">
              <Button type="button" cancel>
                Go back
              </Button>
            </Link>
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

import styled from 'styled-components'
import { useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import screenSizes from '../../utils/screen-sizes'
import { Button, BlackButton } from '../ui-fragments/Button'
import Container from '../ui-fragments/Container'
import useToggle from '../../utils/useToggle'

const EmptyDeck = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
    flex-direction: column;
  }
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0px;
  text-align: center;
  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: 18px;
  }
`

const FlipCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const FlipCard = styled.div`
  background-color: transparent;
  width: 500px;
  height: 300px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  perspective: 1000px;
  margin-bottom: 20px;
  border-radius: 10px;

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 100%;
    height: 200px;
  }
`

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.4s;
  transform-style: preserve-3d;
  transform: ${props => (props.flip ? 'rotateY(180deg)' : null)};
`

const FlipCardFront = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: ${({ theme }) => theme.colors.focusBackground};
  color: ${({ theme }) => theme.colors.primaryHighlighted};
  font-size: 40px;
  transform: rotateY(0deg);
  border-radius: 10px;

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: 20px;
    overflow: hidden;
  }
`
const FlipCardBack = styled(FlipCardFront)`
  background-color: ${({ theme }) => theme.colors.primaryHighlighted};
  color: ${({ theme }) => theme.colors.white};
  transform: rotateY(180deg);
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 100%;
    flex-direction: column;
    & > button {
      width: 100%;
      margin: 0;
      margin-top: 10px;
    }
  }
`

const FlipCardButtons = styled.div`
  display: flex;
  flex-direction: row;
`

const EditButton = styled(Button)`
  width: 150px;
  margin-top: 20px;
  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 100px;
  }
`

const StyledButton = styled(Button)`
  background-color: ${props => props.theme.colors.primary};
  width: ${props => (props.flipButton ? '200px' : 'auto')};
  margin: 0 5px;
  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: ${props => (props.flipButton ? '100px' : 'auto')};
  }
`

const SwitchButton = styled(Button)`
  width: 170px;
`
const CardStatus = styled.div`
  padding: 20px 0;
`

const FastClicks = styled(BlackButton)`
  touch-action: manipulation;
`

export default ({ name, cards, id, cameFrom, browseContext, user }) => {
  const [wordState, setWordState] = useState({ index: 0, flip: false })
  const [originalWordFront, setOriginalWordFront] = useToggle()

  const next = () =>
    setWordState(({ index }) =>
      index < cards.length - 1
        ? { index: index + 1, flip: false }
        : { index: 0, flip: false }
    )

  const back = () =>
    setWordState(({ index }) =>
      index === 0
        ? { index: cards.length - 1, flip: false }
        : { index: index - 1, flip: false }
    )

  if (cards.length === 0) {
    return (
      <Container>
        <TitleWrapper>
          <Title>{name}</Title>
          <BlackButton onClick={() => Router.back()}>Done</BlackButton>
        </TitleWrapper>
        <EmptyDeck>
          Uh oh! This deck is empty. {''}
          {user === 'same' ? (
            <>
              Add cards by editing the deck
              <Link
                key={id}
                href={`/edit-deck?id=${id}&cameFrom=browse&browseContext=${browseContext}`}
              >
                <EditButton type="Edit">Edit deck</EditButton>
              </Link>
            </>
          ) : null}
        </EmptyDeck>
      </Container>
    )
  }

  return (
    <Container>
      <TitleWrapper>
        <Title>{name}</Title>
        <ButtonsWrapper>
          <SwitchButton
            onClick={setOriginalWordFront}
            title="Switch order of words"
            aria-label="Switch order of words"
          >
            {originalWordFront ? 'Definition > Term' : 'Term > Definition'}
          </SwitchButton>

          <StyledButton
            disabled={wordState.index === 0}
            onClick={() =>
              setWordState(({ flip }) => ({
                index: 0,
                flip
              }))
            }
          >
            Restart
          </StyledButton>
          <Link
            href={
              cameFrom === 'view-deck'
                ? `/${cameFrom}?id=${id}&browseContext=${browseContext}`
                : `/${browseContext}`
            }
          >
            <BlackButton type="button">Done</BlackButton>
          </Link>
        </ButtonsWrapper>
      </TitleWrapper>
      <FlipCardWrapper>
        <FlipCard key={wordState.index}>
          <FlipCardInner flip={wordState.flip}>
            {originalWordFront ? (
              <>
                <FlipCardFront>{cards[wordState.index].original}</FlipCardFront>
                <FlipCardBack>
                  {cards[wordState.index].translation}
                </FlipCardBack>
              </>
            ) : (
              <>
                <FlipCardFront>
                  {cards[wordState.index].translation}
                </FlipCardFront>
                <FlipCardBack> {cards[wordState.index].original}</FlipCardBack>
              </>
            )}
          </FlipCardInner>
        </FlipCard>
        <FlipCardButtons>
          <FastClicks disabled={wordState.index === 0} onClick={back}>
            Back
          </FastClicks>
          <StyledButton
            flipButton
            onClick={() =>
              setWordState(({ index, flip }) => ({
                index,
                flip: !flip
              }))
            }
          >
            Flip
          </StyledButton>
          <FastClicks
            disabled={wordState.index + 1 === cards.length}
            onClick={next}
          >
            Next
          </FastClicks>
        </FlipCardButtons>
        <CardStatus>{`${wordState.index + 1}/${cards.length}`}</CardStatus>
      </FlipCardWrapper>
    </Container>
  )
}

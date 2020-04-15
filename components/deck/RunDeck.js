import styled from 'styled-components'
import { useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import screenSizes from '../../utils/screen-sizes'
import { Button, BlackButton } from '../ui-fragments/Button'
import Container from '../ui-fragments/Container'

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

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
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
    width: 300px;
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
const FlipCardBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: ${({ theme }) => theme.colors.primaryHighlighted};
  color: ${({ theme }) => theme.colors.white};
  font-size: 40px;
  transform: rotateY(180deg);
  border-radius: 10px;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;

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

const EditButton = styled(Button)`
  width: 150px;
  margin-top: 20px;
  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 100px;
  }
`

const FlipCardButtons = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledButton = styled(Button)`
  background-color: ${props => props.theme.colors.primary};
  width: ${props => (props.flipButton ? '200px' : 'auto')};
  margin: 0 5px;
  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: ${props => (props.flipButton ? '100px' : 'auto')};
  }
`
const CardStatus = styled.div`
  padding: 20px 0;
`

export default ({ name, cards, id, cameFrom, browseContext }) => {
  const [wordState, setWordState] = useState({ index: 0, flip: false })

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
          This deck is empty. Add cards by editing the deck.
          <Link key={id} href={`/edit-deck?id=${id}`}>
            <EditButton type="Edit">Edit deck</EditButton>
          </Link>
        </EmptyDeck>
      </Container>
    )
  }

  return (
    <Container>
      <TitleWrapper>
        <Title>{name}</Title>
        <ButtonsWrapper>
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
            <FlipCardFront> {cards[wordState.index].original}</FlipCardFront>
            <FlipCardBack> {cards[wordState.index].translation}</FlipCardBack>
          </FlipCardInner>
        </FlipCard>
        <FlipCardButtons>
          <BlackButton disabled={wordState.index === 0} onClick={back}>
            Back
          </BlackButton>
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
          <BlackButton
            disabled={wordState.index + 1 === cards.length}
            onClick={next}
          >
            Next
          </BlackButton>
        </FlipCardButtons>
        <CardStatus>{`${wordState.index + 1}/${cards.length}`}</CardStatus>
      </FlipCardWrapper>
    </Container>
  )
}

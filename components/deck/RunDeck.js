import styled from 'styled-components'
import { useState } from 'react'
import Router from 'next/router'
import { Button } from '../ui-fragments/Button'
import ErrorBox from '../ui-fragments/ErrorBox'
import Container from '../ui-fragments/Container'

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0px;
  text-align: center;
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
`

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
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
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background-color: ${({ theme }) => theme.colors.focusBackground};
  color: ${({ theme }) => theme.colors.primaryHighlighted};
  font-size: 40px;
  border-radius: 10px;
`
const FlipCardBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background-color: ${({ theme }) => theme.colors.primaryHighlighted};
  color: ${({ theme }) => theme.colors.white};
  font-size: 40px;
  transform: rotateY(180deg);
  border-radius: 10px;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledButton = styled(Button)`
  background-color: ${props =>
    !props.flipButton ? props.theme.colors.black : props.theme.colors.primary};
  width: ${props => (props.flipButton ? '200px' : '100px')};
  margin: 5px;
`

export default ({ name, cards }) => {
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
          <StyledButton onClick={() => Router.back()}>Done</StyledButton>
        </TitleWrapper>
        <ErrorBox>
          This deck is empty. Add cards to this deck to run it.
        </ErrorBox>
      </Container>
    )
  }
  return (
    <Container>
      <TitleWrapper>
        <Title>{name}</Title>
        <StyledButton onClick={() => Router.back()}>Done</StyledButton>
      </TitleWrapper>
      <FlipCardWrapper>
        <FlipCard key={wordState.index}>
          <FlipCardInner flip={wordState.flip}>
            <FlipCardFront> {cards[wordState.index].original}</FlipCardFront>
            <FlipCardBack> {cards[wordState.index].translation}</FlipCardBack>
          </FlipCardInner>
        </FlipCard>
        <ButtonWrapper>
          <StyledButton onClick={back}>Back</StyledButton>
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
          <StyledButton onClick={next}>Next</StyledButton>
        </ButtonWrapper>
      </FlipCardWrapper>
    </Container>
  )
}

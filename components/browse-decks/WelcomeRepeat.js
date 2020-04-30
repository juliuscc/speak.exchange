import Link from 'next/link'
import styled from 'styled-components'
import { PlusSquare } from 'styled-icons/boxicons-solid/PlusSquare'
import Container from '../ui-fragments/Container'
import { Button, HollowButton } from '../ui-fragments/Button'
import screenSizes from '../../utils/screen-sizes'

const WelcomeHeader = styled.h1`
  color: ${({ theme }) => theme.colors.primaryHighlighted};
  text-align: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    button {
      width: 100%;
    }
  }
`

const TextIcon = styled.svg`
  color: ${({ theme }) => theme.colors.white};
  height: 40px;
  display: inline-block;
  margin-left: 10px;

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    height: 30px;
  }
`

const CreateDeck = styled(Button)`
  font-size: 20px;
  height: auto;
  padding: 10px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  span {
    flex: 1;
  }

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: 16px;
    padding: 10px 20px;
  }
`

const SharedDecks = styled(HollowButton)`
  font-size: 15px;
  border: 1px solid;
  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: 14px;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const WelcomeGraphic = styled.img`
  max-height: 35vh;
  height: 40vw;
  margin-top: 22px;
`

export default ({ createDeck }) => (
  <Container>
    <ImageWrapper>
      <WelcomeGraphic src="/wordcloud.png" />
    </ImageWrapper>
    <WelcomeHeader>Huh, no decks?</WelcomeHeader>
    <ButtonWrapper>
      <CreateDeck onClick={createDeck}>
        <span>Click here to create your first deck!</span>
        <TextIcon as={PlusSquare} />
      </CreateDeck>
      <Link href="/all-decks">
        <SharedDecks>Or click here to view decks shared by others</SharedDecks>
      </Link>
    </ButtonWrapper>
  </Container>
)

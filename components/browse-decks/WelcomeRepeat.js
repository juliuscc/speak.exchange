import styled from 'styled-components'

const WelcomeContainer = styled.div`
  display: inline;
`

const WelcomeHeader = styled.h1`
  color: ${({ theme }) => theme.colors.primaryHighlighted};
  text-align: center;
`

const WelcomeText = styled.p`
  font-size: 18px;
  display: inline-block;
`

export default () => (
  <WelcomeContainer>
    <WelcomeHeader>Welcome to speak.repeat!</WelcomeHeader>
    <WelcomeText />
    <WelcomeText>
      <strong>To get started,</strong> start by clicking the plus icon to create
      a new deck of words
    </WelcomeText>
    <WelcomeText>
      Use different decks for different word translations you want to memorize
      and practise in the future.
    </WelcomeText>
    <WelcomeText>
      Click the Pencil icon to <strong>edit</strong> your deck or the play icon
      to <strong>run</strong> the words in that deck and practice, flipping them
      one by one, like you would with flashcards
    </WelcomeText>
  </WelcomeContainer>
)

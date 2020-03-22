import styled from 'styled-components'
import Link from 'next/link'
import Container from '../ui-fragments/Container'
import WordCardEdit from './WordCardEdit'
import { Button } from '../ui-fragments/Button'
import { Input } from '../ui-fragments/Input'
import screenSizes from '../../utils/screen-sizes'

const Background = styled.fieldset`
  background-color: ${({ theme }) => theme.colors.focusBackground};
  width: 100%;
  border: none;

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

const DeckName = styled(Input)`
  min-width: 0;

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

const HollowWordCard = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  border-style: dashed;
  border-color: ${({ theme }) => theme.colors.white};
  border-width: 4px;
  background: none;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 100px;
  color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  margin-top: 20px;
  cursor: pointer;
`

export default ({
  name,
  updateName,
  cards,
  updateCardWithIndex,
  addCard,
  submitChanges,
  edited,
  loading
}) => (
  <Background disabled={loading}>
    <Container>
      <TitleBar>
        <DeckName
          type="text"
          placeholder="Enter a name for you new deck"
          onChange={e => updateName(e.target.value)}
          value={name}
        />
        <ButtonsWrapper>
          <Button type="button" onClick={submitChanges} disabled={!edited}>
            Save changes
          </Button>
          <Link href="/repeat">
            <Button type="button" cancel>
              Cancel
            </Button>
          </Link>
        </ButtonsWrapper>
      </TitleBar>
      <WordsWrapper>
        {cards.map((card, i) => (
          <WordCardEdit
            key={i}
            card={card}
            setCardWithField={updateCardWithIndex(i)}
          />
        ))}

        <HollowWordCard onClick={addCard}>+</HollowWordCard>
      </WordsWrapper>
    </Container>
  </Background>
)

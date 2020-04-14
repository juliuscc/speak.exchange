import styled from 'styled-components'
import { transparentize } from 'polished'
import Link from 'next/link'
import Container from '../ui-fragments/Container'
import WordCardEdit from './WordCardEdit'
import { Button, BlackButton } from '../ui-fragments/Button'
import { Input } from '../ui-fragments/Input'
import screenSizes from '../../utils/screen-sizes'
import useToggle from '../../utils/useToggle'

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

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    flex-direction: column;
  }
`

const DeckName = styled(Input)`
  min-width: 0;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
    flex: 1;
  }
  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 100%;
    font-size: 18px;
  }
`

const ButtonsWrapper = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;

  & > * {
    margin-left: 10px;
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
      margin-top: 10px;
    }
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
  background: ${({ theme }) => transparentize(1, theme.colors.white)};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 100px;
  color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  margin-top: 20px;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => transparentize(0.8, theme.colors.white)};
  }
`

export default ({
  id,
  name,
  updateName,
  cards,
  updateCardWithIndex,
  addCard,
  submitChanges,
  edited,
  loading,
  removeCardWithIndex,
  cancelEdit,
  cameFrom,
  browseContext
}) => {
  // Show the user an option to save once if the deck is newly created.
  const [allowOneSave, toggleAllowOneSave] = useToggle(cameFrom === 'create')
  const oneSave = () => (allowOneSave ? toggleAllowOneSave() : undefined)

  return (
    <Background disabled={loading}>
      <Container>
        <TitleBar>
          <DeckName
            type="text"
            placeholder="Enter a name for your deck"
            title="Deck Name"
            onChange={e => updateName(e.target.value)}
            value={name}
          />
          <ButtonsWrapper>
            <Button
              type="button"
              onClick={() => {
                oneSave()
                submitChanges()
              }}
              disabled={!edited && !allowOneSave}
            >
              {edited || allowOneSave
                ? 'Save changes'
                : 'All changes are saved'}
            </Button>
            {cameFrom !== 'create' && (
              <Link
                href={
                  cameFrom === 'browse'
                    ? `/${browseContext}`
                    : `/${cameFrom}?id=${id}&browseContext=${browseContext}`
                }
              >
                <BlackButton type="button" onClick={cancelEdit}>
                  Cancel
                </BlackButton>
              </Link>
            )}
          </ButtonsWrapper>
        </TitleBar>
        <WordsWrapper>
          {cards.map((card, i) => (
            <WordCardEdit
              key={i}
              card={card}
              setCardWithField={updateCardWithIndex(i)}
              removeCard={removeCardWithIndex(i)}
            />
          ))}

          <HollowWordCard onClick={addCard}>+</HollowWordCard>
        </WordsWrapper>
      </Container>
    </Background>
  )
}

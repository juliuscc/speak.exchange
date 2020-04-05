import styled from 'styled-components'
import { DeleteBin } from 'styled-icons/remix-line/DeleteBin'

import { IconButton } from '../ui-fragments/Button'

const WordCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.primaryMuted};
  padding: 20px;
  margin-top: 20px;
  position: relative;

  :hover > form > input {
    background-color: ${({ theme }) => theme.colors.focusBackground};
  }
`
const InputWrapper = styled.form``

const Word = styled.input`
  text-align: center;
  border-style: none;
  width: 250px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`

const Button = styled(IconButton)`
  position: absolute;
  background-color: white;
  border: none;
  padding: 0;
  right: 10px;
  top: 10px;
  width: auto;
  height: auto;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Seperator = styled.hr`
  width: 300px;
  height: 10px;
  border: 0.5px solid ${({ theme }) => theme.colors.border};
`

export default ({ card, setCardWithField, removeCard }) => {
  return (
    <WordCard>
      <Button
        icon={DeleteBin}
        onClick={removeCard}
        title="Delete card"
        aria-label="Delete card"
      />
      <InputWrapper>
        <Word
          type="text"
          placeholder="Original word"
          title="Original word"
          value={card.original}
          onChange={e => setCardWithField('original', e.target.value)}
        />
      </InputWrapper>
      <Seperator />
      <InputWrapper>
        <Word
          type="text"
          placeholder="Translation"
          title="Translation"
          value={card.translation}
          onChange={e => setCardWithField('translation', e.target.value)}
        />
      </InputWrapper>
    </WordCard>
  )
}

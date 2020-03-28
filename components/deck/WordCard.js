import styled from 'styled-components'

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
  color: ${({ theme }) => theme.colors.blac};
  padding: 20px;
  margin-top: 20px;
`

const Word = styled.div`
  text-align: center;
  border-style: none;
  width: 250px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`

const Seperator = styled.hr`
  width: 300px;
  height: 10px;
  border: 0.5px solid ${({ theme }) => theme.colors.border};
`

export default ({ card }) => {
  return (
    <WordCard>
      <Word>{card.original ? card.original : 'Original Word'}</Word>
      <Seperator />
      <Word>{card.translation ? card.translation : 'Translation'}</Word>
    </WordCard>
  )
}

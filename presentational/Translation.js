import styled from 'styled-components'
import TitleBar from './fragments/TitleBar'

const TranslationResultContainer = styled.div`
  width: 100%;
  padding-bottom: 40px;
`
const Translations = styled.div`
  display: grid;
  grid-template-columns: 90px 770px;
  margin: 0 0 0px 0;
  grid-row-gap: 15px;
`
const WordClass = styled.span`
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 600;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primaryMuted};
  text-align: right;
  margin-right: 10px;
  align-self: center;
`
const TranslationContainer = styled.div`
  display: grid;
  background: ${({ colored, theme }) =>
    colored ? theme.colors.focusBackground : theme.colors.white};
  border-radius: 5px;
  grid-template-columns: 170px 250px auto;
  padding: 15px 15px 15px 0;
`
const OriginalWord = styled.h2`
  overflow-wrap: normal;
  padding: 10px;
  align-self: center;
  font-size: 18px;
`
const TranslatedWord = styled.span`
  font-family: ${({ theme }) => theme.fonts.text};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryHighlighted};
  overflow-wrap: normal;
  align-self: center;
  font-size: 25px;
`
const ExampleContainer = styled.div`
  overflow-wrap: normal;
  align-self: center;
`
const Example = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  opacity: 70%;
`

const ResultRow = ({ from, toType, to, example, index }) => (
  <>
    <WordClass>{toType}</WordClass>
    <TranslationContainer colored={index % 2 === 0}>
      <OriginalWord>{from}</OriginalWord>
      <TranslatedWord>{to}</TranslatedWord>
      <ExampleContainer>
        <Example>{example.from}</Example>
        <Example>{example.to}</Example>
      </ExampleContainer>
    </TranslationContainer>
  </>
)

const TranslationResult = ({
  translationResult: { word, translations: translationForms }
}) => (
  <>
    {translationForms.length === 0 && word !== '' ? (
      <TitleBar>No translation found for {word}.</TitleBar>
    ) : (
      <TranslationResultContainer>
        <TitleBar>{word}</TitleBar>
        <Translations>
          {translationForms
            .map(({ translations }) => translations)
            .flat()
            .map(({ from, toType, to, example }, index) => (
              <ResultRow
                from={from}
                toType={toType}
                to={to}
                example={example}
                key={index}
                index={index}
              />
            ))}
        </Translations>
      </TranslationResultContainer>
    )}
  </>
)

export default TranslationResult

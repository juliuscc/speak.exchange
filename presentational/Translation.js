import styled from 'styled-components'

const TitleBar = styled.div``
const Translations = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`
const WordClass = styled.h2`
  color: ${({ theme }) => theme.colors.primaryMuted};
`
const OriginalWord = styled.h3`
  font-weight: 600;
`
const TranslatedWord = styled.h1`
  color: ${({ theme }) => theme.colors.primaryHighlighted};
`
const Example = styled.div``

const ResultRow = ({ from, toType, to, example }) => (
  <>
    <WordClass>{toType}</WordClass>
    <OriginalWord>{from}</OriginalWord>
    <TranslatedWord>{to}</TranslatedWord>
    <Example>
      <div>{example.from}</div>
      <div>{example.to}</div>
    </Example>
  </>
)

const TranslationResult = ({
  translationResult: { word, translations: translationForms }
}) => (
  <>
    {translationForms.length === 0 && word !== '' ? (
      <TitleBar>No translation found for {word}.</TitleBar>
    ) : (
      <>
        <TitleBar>{word}</TitleBar>
        <Translations>
          {translationForms.map(({ translations }) =>
            translations.map(({ from, toType, to, example }, index) => (
              <ResultRow
                from={from}
                toType={toType}
                to={to}
                example={example}
                key={index}
              />
            ))
          )}
        </Translations>
      </>
    )}
  </>
)

export default TranslationResult

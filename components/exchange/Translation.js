import styled from 'styled-components'
import screenSizes from '../../utils/screen-sizes'
import useSearchTranslation from './useSearchTranslation'
import Container from '../ui-fragments/Container'
import ErrorBox from '../ui-fragments/ErrorBox'
import Spinner from '../ui-fragments/Spinner'

const wordClassWidth = '50px'

const LoadingOverlay = styled.div`
  opacity: ${({ loading, theme }) =>
    loading ? theme.transparencies.inactive : 1};
`

const WelcomeText = styled.h1`
  color: ${({ theme }) => theme.colors.primaryHighlighted};
  text-align: center;
`

const Translations = styled.div`
  display: grid;
  grid-template-columns: ${wordClassWidth} auto;
  margin-bottom: 20px;
  grid-row-gap: 15px;
  position: relative;
  width: calc(100% + ${wordClassWidth});
  left: -${wordClassWidth};

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 100%;
    left: 0;
  }
`

const TitleBar = styled.h1`
  color: ${({ theme }) => theme.colors.primaryHighlighted};
  grid-column: 2 / -1;
  margin-bottom: 0;
`

const WordClass = styled.span`
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 600;
  font-size: 18px;
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
  grid-template-columns: 2fr 4fr;
  grid-column-gap: 10px;
  padding: 15px;

  @media screen and (min-width: ${screenSizes.smallPhone.max}) {
    grid-template-columns: 2fr 3fr;
  }
`

const WordContainer = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-auto-flow: row;
  align-content: center;

  @media screen and (min-width: ${screenSizes.smallPhone.max}) {
    grid-auto-flow: column;
  }
`

const OriginalWord = styled.h2`
  align-self: center;
  font-size: 18px;
  margin: 0;
`

const TranslatedWord = styled.span`
  font-family: ${({ theme }) => theme.fonts.text};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryHighlighted};
  align-self: center;
  font-size: 18px;

  @media screen and (min-width: ${screenSizes.smallPhone.max}) {
    font-size: 22px;
  }
`

const ExampleContainer = styled.div`
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
      <WordContainer>
        <OriginalWord>{from}</OriginalWord>
        <TranslatedWord>{to}</TranslatedWord>
      </WordContainer>
      <ExampleContainer>
        <Example>{example.from}</Example>
        <Example>{example.to}</Example>
      </ExampleContainer>
    </TranslationContainer>
  </>
)

const TranslationResult = ({
  translationResult: { word, translations: translationForms },
  loading
}) => (
  <>
    <LoadingOverlay loading={loading}>
      {translationForms.length === 0 && word !== '' ? (
        <TitleBar>No translation found for {word}.</TitleBar>
      ) : (
        <Translations>
          <TitleBar>{word}</TitleBar>
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
      )}
    </LoadingOverlay>
    {loading && <Spinner />}
  </>
)

export default () => {
  const { status, translation, error } = useSearchTranslation()

  return (
    <Container>
      {(() => {
        if (status === 'idle') {
          return <WelcomeText>Welcome to speak.exchange!</WelcomeText>
        }
        if (status === 'pending') {
          return translation ? (
            <TranslationResult translationResult={translation} loading />
          ) : (
            <Spinner />
          )
        }
        if (status === 'resolved') {
          return <TranslationResult translationResult={translation} />
        }

        // eslint-disable-next-line no-console
        console.error(error)

        return (
          <ErrorBox>
            There was an error with fetching the translation. Please refresh the
            page.
          </ErrorBox>
        )
      })()}
    </Container>
  )
}
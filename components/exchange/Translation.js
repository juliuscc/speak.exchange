import Head from 'next/head'
import styled from 'styled-components'
import screenSizes from '../../utils/screen-sizes'
import useSearchTranslation from './useSearchTranslation'
import Container from '../ui-fragments/Container'
import ErrorBox from '../ui-fragments/ErrorBox'
import Spinner from '../ui-fragments/Spinner'

const wordClassWidth = '50px'

const LoadingOverlay = styled.div`
  opacity: ${({ isLoading, theme }) =>
    isLoading ? theme.transparencies.inactive : 1};
`

const WelcomeText = styled.h1`
  color: ${({ theme }) => theme.colors.primaryHighlighted};
  text-align: center;
`

const Translations = styled.div`
  display: grid;
  grid-template-columns: none;
  margin-bottom: 20px;
  grid-row-gap: 15px;
  position: relative;
  width: 100%;
  left: 0;

  @media screen and (min-width: ${screenSizes.smallPhone.max}) {
    width: calc(100% + ${wordClassWidth});
    left: -${wordClassWidth};
    grid-template-columns: ${wordClassWidth} auto;
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
  display: none;

  @media screen and (min-width: ${screenSizes.smallPhone.max}) {
    display: block;
  }
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
    grid-template-columns: 1fr 2fr;
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

const ResultRow = ({ from, toType, to, example, index }) => {
  // eslint-disable-next-line no-control-regex
  const trimmedFrom = from.replace(/[^\x00-\x7F]/g, '')
  // eslint-disable-next-line no-control-regex
  const trimmedTo = to.replace(/[^\x00-\x7F]/g, '')

  return (
    <>
      <WordClass>{toType}</WordClass>
      <TranslationContainer colored={index % 2 === 0}>
        <WordContainer>
          <OriginalWord>{trimmedFrom}</OriginalWord>
          <TranslatedWord>{trimmedTo}</TranslatedWord>
        </WordContainer>
        <ExampleContainer>
          <Example>{example.from}</Example>
          <Example>{example.to}</Example>
        </ExampleContainer>
      </TranslationContainer>
    </>
  )
}

const TranslationResult = ({
  translationResult: { word, translations: translationForms },
  isLoading
}) => (
  <>
    <LoadingOverlay isLoading={isLoading}>
      {translationForms.length === 0 && word !== '' ? (
        <ErrorBox>
          <Head>
            <title key="title">Uh oh là là... | Speak Exchange</title>
          </Head>
          We couldn&apos;t find a translation for your search term. Be sure to
          check for any typos and that the word you&apos;re looking for exists!
        </ErrorBox>
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
    {isLoading && <Spinner />}
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
            <TranslationResult translationResult={translation} isLoading />
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
            <Head>
              <title key="title">Uh oh là là... | Speak Exchange</title>
            </Head>
            There was an error with fetching the translation. Try refreshing the
            page.
          </ErrorBox>
        )
      })()}
    </Container>
  )
}

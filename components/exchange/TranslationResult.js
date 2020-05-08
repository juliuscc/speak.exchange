import { MessageSquareAdd } from 'styled-icons/boxicons-solid/MessageSquareAdd'
import Head from 'next/head'
import styled from 'styled-components'
import screenSizes from '../../utils/screen-sizes'
import ErrorBox from '../ui-fragments/ErrorBox'
import Spinner from '../ui-fragments/Spinner'
import { IconButton } from '../ui-fragments/Button'
import useToggle from '../../utils/useToggle'
import AddToDeckModal from './AddToDeckModal'

const wordClassWidth = '50px'

const LoadingOverlay = styled.div`
  opacity: ${({ isLoading, theme }) =>
    isLoading ? theme.transparencies.inactive : 1};
`

const Translations = styled.div`
  display: grid;
  margin-bottom: 20px;
  grid-row-gap: 15px;
  position: relative;

  width: calc(100% + ${wordClassWidth});
  left: -${wordClassWidth};
  grid-template-columns: ${wordClassWidth} auto;

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 100%;
    left: 0;
    grid-template-columns: none;
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
  margin-bottom: 5px;
  align-self: center;
  display: block;

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    display: none;
  }
`

const SearchResult = styled.div`
  position: relative;
`

const TranslationContainer = styled.div`
  display: grid;
  background: ${({ colored, theme }) =>
    colored ? theme.colors.focusBackground : theme.colors.white};
  border-radius: 5px;
  grid-template-rows: auto auto;
  grid-template-columns: auto;
  grid-column-gap: 10px;
  padding: 15px;
  box-sizing: border-box;
  border-bottom-style: solid;
  border-width: thick;
  border-color: transparent;

  @media screen and (min-width: ${screenSizes.smallPhone.max}) {
    grid-template-columns: 2fr 3fr;
  }
`

const AddToDeckContainer = styled.div`
  &:hover ~ div {
    border-bottom-style: solid;
    border-width: thick;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  :hover {
    opacity: 50%;
  }

  &:hover > div {
    visibility: visible;
  }
`

const AddToDeckIcon = styled(IconButton)`
  width: 30px;
  height: 30px;
  padding: 0;
  border-radius: 5px;
  position: absolute;
  bottom: 6px;
  right: 5px;
`

const ToolTip = styled.div`
  position: absolute;
  bottom: 12.5px;
  right: 40px;
  height: 20px;
  visibility: hidden;
`

const WordContainer = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 1fr 1fr;

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

const HeaderTitle = styled.p`
  align-self: center;
  font-size: 14px;
  font-weight: 600;
  margin: 0px;

  @media screen and (min-width: ${screenSizes.smallPhone.max}) {
    margin: 0 0 0 10px;
  }
`

const HeaderTitleExample = styled.p`
  align-self: center;
  font-size: 14px;
  margin: 0;
  font-weight: 600;
  display: none;

  @media screen and (min-width: ${screenSizes.smallPhone.max}) {
    display: block;
  }
`

const HeaderTitleType = styled.p`
  align-self: center;
  font-size: 14px;
  margin: 0 10px 0 0;
  font-weight: 600;
  text-align: right;
  display: block;

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    display: none;
  }
`

const HeaderGrid = styled.div`
  display: grid;
  border-radius: 5px;
  grid-template-columns: auto;
  grid-column-gap: 10px;

  @media screen and (min-width: ${screenSizes.smallPhone.max}) {
    grid-template-columns: 2fr 3fr;
  }
`

const ResultRow = ({ from, toType, to, example, index }) => {
  const [deckModalVisible, toggleDeckModalVisible] = useToggle()
  // eslint-disable-next-line no-control-regex
  const trimmedFrom = from.replace('\u21D2', '')
  // eslint-disable-next-line no-control-regex
  const trimmedTo = to.replace('\u21D2', '')

  return (
    <>
      <WordClass>{toType}</WordClass>
      <SearchResult>
        <AddToDeckContainer>
          <ToolTip> Add word to deck</ToolTip>
          <AddToDeckIcon
            onClick={toggleDeckModalVisible}
            icon={MessageSquareAdd}
            aria-label="Add word to deck"
          />
        </AddToDeckContainer>

        <AddToDeckModal
          to={trimmedTo}
          from={trimmedFrom}
          deckModalVisible={deckModalVisible}
          toggleDeckModalVisible={toggleDeckModalVisible}
        />

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
      </SearchResult>
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
          <HeaderTitleType>Type</HeaderTitleType>
          <HeaderGrid>
            <WordContainer>
              <HeaderTitle>Original word</HeaderTitle>
              <HeaderTitle>Translation</HeaderTitle>
            </WordContainer>
            <HeaderTitleExample>Example</HeaderTitleExample>
          </HeaderGrid>
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

export default TranslationResult

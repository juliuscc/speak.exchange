import Head from 'next/head'
import BrowseDecks from './BrowseDecks'
import LoggedInView from '../ui-fragments/LoggedInView'
import useViewDecks from './useViewDecks'
import Spinner, { SpinnerContainer } from '../ui-fragments/Spinner'
import ErrorBox from '../ui-fragments/ErrorBox'

const Decks = ({ user: { uid } }) => {
  const { status, decks, error, createDeck } = useViewDecks(uid)

  if (status === 'preloaded' || status === 'adding')
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  if (status === 'loaded')
    return <BrowseDecks decks={decks} createDeck={createDeck} addDeck />

  // eslint-disable-next-line no-console
  console.error(error)

  return (
    <ErrorBox>
      <Head>
        <title key="title">Oops! | Speak Repeat</title>
      </Head>
      There was an error with fetching your decks. Please refresh the page.
    </ErrorBox>
  )
}

export default () => (
  <LoggedInView>
    <Decks />
  </LoggedInView>
)

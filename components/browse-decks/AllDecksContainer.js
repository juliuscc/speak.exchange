import Head from 'next/head'
import BrowseDecks from './BrowseDecks'
import useViewDecks from './useViewDecks'
import Spinner, { SpinnerContainer } from '../ui-fragments/Spinner'
import ErrorBox from '../ui-fragments/ErrorBox'

const Decks = () => {
  const { status, decks, error } = useViewDecks()

  if (status === 'preloaded' || status === 'adding')
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  if (status === 'loaded') return <BrowseDecks decks={decks} />

  // eslint-disable-next-line no-console
  console.error(error)

  return (
    <ErrorBox>
      <Head>
        <title key="title">Oops! | Speak Repeat</title>
      </Head>
      There was an error with fetching decks. Please refresh the page.
    </ErrorBox>
  )
}

export default Decks

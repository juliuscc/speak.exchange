import Head from 'next/head'

import useViewDecks from './useViewDecks'
import Spinner, { SpinnerContainer } from '../ui-fragments/Spinner'
import ErrorBox from '../ui-fragments/ErrorBox'

export default Presentational => ({ user: { uid } = {} }) => {
  const { status, decks, error, createDeck } = useViewDecks(uid)

  if (status === 'preloaded' || status === 'adding')
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  if (status === 'loaded')
    return <Presentational decks={decks} createDeck={createDeck} addDeck />

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

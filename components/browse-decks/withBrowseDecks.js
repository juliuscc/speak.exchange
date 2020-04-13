import Head from 'next/head'
import { useContext } from 'react'
import Spinner, { SpinnerContainer } from '../ui-fragments/Spinner'
import ErrorBox from '../ui-fragments/ErrorBox'
import { DeckListsContext } from '../DeckListsContextProvider'

export default (Presentational, { canAddDeck }) => ({ user: { uid } = {} }) => {
  const { communityDecks, userDecks } = useContext(DeckListsContext)
  const { status, decks, error, createDeck } = uid ? userDecks : communityDecks

  if (status === 'preloaded' || status === 'adding')
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  if (status === 'loaded')
    return (
      <Presentational
        decks={decks}
        createDeck={createDeck}
        canAddDeck={canAddDeck}
      />
    )

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

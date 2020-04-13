import Head from 'next/head'
import { useContext } from 'react'
import Spinner, { SpinnerContainer } from '../ui-fragments/Spinner'
import ErrorBox from '../ui-fragments/ErrorBox'
import { DeckContext } from '../DeckContextProvider'

export default (Presentational, createTitle) => () => {
  const {
    state: { status, deck, error, currentId, user },
    localActions: { updateName, updateCard, addCard, removeCard, cancelEdit },
    actions: { submitChanges, deleteDeck, copyDeck }
  } = useContext(DeckContext)

  if (
    status === 'empty' ||
    status === 'fetching' ||
    status === 'copying' ||
    status === 'deleting'
  ) {
    return (
      <SpinnerContainer>
        <Head>
          <title key="title">{createTitle()} | Speak Repeat</title>
        </Head>
        <Spinner />
      </SpinnerContainer>
    )
  }
  if (status === 'resolved' || status === 'edited') {
    return (
      <>
        <Head>
          <title key="title">{createTitle(deck.name)} | Speak Repeat</title>
        </Head>
        <Presentational
          name={deck.name}
          cards={deck.cards}
          cancelEdit={cancelEdit}
          updateName={updateName}
          updateCardWithIndex={updateCard}
          addCard={addCard}
          submitChanges={submitChanges}
          edited={status === 'edited'}
          id={currentId}
          removeCardWithIndex={removeCard}
          deleteDeck={deleteDeck}
          user={user}
          copyDeck={copyDeck}
        />
      </>
    )
  }
  if (status === 'uploading') {
    return (
      <SpinnerContainer>
        <Head>
          <title key="title">{createTitle(deck.name)} | Speak Repeat</title>
        </Head>
        <Presentational
          name={deck.name}
          cards={deck.cards}
          cancelEdit={cancelEdit}
          updateName={updateName}
          updateCardWithIndex={updateCard}
          addCard={addCard}
          submitChanges={submitChanges}
          edited={status === 'edited'}
          loading
          id={currentId}
          removeCardWithIndex={removeCard}
          deleteDeck={deleteDeck}
          user={user}
          copyDeck={copyDeck}
        />
        <Spinner />
      </SpinnerContainer>
    )
  }

  // eslint-disable-next-line no-console
  console.error(error)

  return (
    <ErrorBox>
      <Head>
        <title key="title">Oops! | Speak Repeat</title>
      </Head>
      {(error && error.message) ||
        'Something went wrong. Try going back to your decks or refreshing the page after a while.'}
    </ErrorBox>
  )
}

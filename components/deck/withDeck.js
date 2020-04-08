import Head from 'next/head'
import styled from 'styled-components'
import useEditDeck from './useEditDeck'
import Spinner from '../ui-fragments/Spinner'
import ErrorBox from '../ui-fragments/ErrorBox'

const SpinnerContainer = styled.div`
  position: relative;
`

export default (Presentational, createTitle) => () => {
  const {
    status,
    deck,
    error,
    edited,
    updateName,
    updateCard,
    addCard,
    submitChanges,
    id,
    removeCard,
    removeDeck,
    uid,
    copyDeck
  } = useEditDeck()

  if (status === 'start' || status === 'fetching') {
    return (
      <SpinnerContainer>
        <Head>
          <title key="title">{createTitle()} | Speak Repeat</title>
        </Head>
        <Spinner />
      </SpinnerContainer>
    )
  }
  if (status === 'resolved') {
    return (
      <>
        <Head>
          <title key="title">{createTitle(deck.name)} | Speak Repeat</title>
        </Head>
        <Presentational
          name={deck.name}
          cards={deck.cards}
          updateName={updateName}
          updateCardWithIndex={updateCard}
          addCard={addCard}
          submitChanges={submitChanges}
          edited={edited}
          id={id}
          removeCardWithIndex={removeCard}
          removeDeck={removeDeck}
          uid={uid}
          deck={deck}
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
          updateName={updateName}
          updateCardWithIndex={updateCard}
          addCard={addCard}
          submitChanges={submitChanges}
          edited={edited}
          loading
          id={id}
          removeCardWithIndex={removeCard}
          removeDeck={removeDeck}
          uid={uid}
          deck={deck}
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

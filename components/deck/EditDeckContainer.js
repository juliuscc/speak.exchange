import styled from 'styled-components'
import EditDeck from './EditDeck'
import useEditDeck from './useEditDeck'
import Spinner from '../ui-fragments/Spinner'
import ErrorBox from '../ui-fragments/ErrorBox'

const SpinnerContainer = styled.div`
  position: relative;
`

export default () => {
  const {
    status,
    deck,
    error,
    edited,
    updateName,
    updateCard,
    addCard,
    submitChanges
  } = useEditDeck()

  if (status === 'start' || status === 'fetching') {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  }
  if (status === 'resolved') {
    return (
      <EditDeck
        name={deck.name}
        cards={deck.cards}
        updateName={updateName}
        updateCardWithIndex={updateCard}
        addCard={addCard}
        submitChanges={submitChanges}
        edited={edited}
      />
    )
  }
  if (status === 'uploading') {
    return (
      <SpinnerContainer>
        <EditDeck
          name={deck.name}
          cards={deck.cards}
          updateName={updateName}
          updateCardWithIndex={updateCard}
          addCard={addCard}
          submitChanges={submitChanges}
          edited={edited}
          loading
        />
        <Spinner />
      </SpinnerContainer>
    )
  }

  // eslint-disable-next-line no-console
  console.error(error)

  return (
    <ErrorBox>
      {(error && error.message) ||
        'Something went wrong. Try going back to your decks or refreshing the page after a while.'}
    </ErrorBox>
  )
}

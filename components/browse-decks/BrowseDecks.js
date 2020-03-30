import styled from 'styled-components'
import React from 'react'
import Link from 'next/link'
import DeckSearch from './DeckSearch'
import DeckBox from './DeckBox'
import { RelativeSpinner } from '../ui-fragments/Spinner'

const DeckView = styled.div`
  height: 100vh;
  display: flex;
`

const DeckWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
`

const AddDeck = ({ loading, onClick }) => (
  <DeckBox hollow as="button" onClick={onClick} disabled={loading}>
    {loading ? <RelativeSpinner /> : '+'}
  </DeckBox>
)

export default ({ decks, createDeck, addDeck }) => (
  <>
    <DeckView>
      <DeckSearch />
      <DeckWrapper>
        {addDeck ? <AddDeck onClick={createDeck} /> : null}

        {Object.entries(decks).map(([id, deck]) => (
          <Link key={id} href={`/view-deck?id=${id}`}>
            <DeckBox key={id}>{deck.name}</DeckBox>
          </Link>
        ))}
      </DeckWrapper>
    </DeckView>
  </>
)

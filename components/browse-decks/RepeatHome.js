import styled from 'styled-components'
import React from 'react'
import Link from 'next/link'
import DeckSearch from './DeckSearch'
import AddDeck from './AddDeck'
import DeckBox from './DeckBox'

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

export default ({ decks, createDeck }) => (
  <>
    <DeckView>
      <DeckSearch />
      <DeckWrapper>
        <AddDeck onClick={createDeck} />
        {Object.entries(decks).map(([id, deck]) => (
          <Link key={id} href={`/edit-deck?id=${id}`}>
            <DeckBox key={id}>{deck.name}</DeckBox>
          </Link>
        ))}
      </DeckWrapper>
    </DeckView>
  </>
)

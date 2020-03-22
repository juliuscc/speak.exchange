import styled from 'styled-components'
import React from 'react'
import Link from 'next/link'
import DeckSearch from './DeckSearch'
import ViewBar from './ViewBar'

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

const DeckBox = styled.a`
  display: flex;
  flex: 0 0 auto;
  width: 150px;
  height: 150px;
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border-style: ${props => (props.hollow ? 'dashed' : 'none')};
  border-color: ${({ theme }) => theme.colors.primaryMuted};
  border-width: 4px;
  background-color: ${props =>
    props.hollow ? props.theme.colors.white : props.theme.colors.primaryMuted};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 30px;
  font-weight: 600;
  color: ${props =>
    props.hollow ? props.theme.colors.primaryMuted : props.theme.colors.white};
  text-decoration: none;
  cursor: pointer;
`

export default ({ decks }) => (
  <>
    <ViewBar />
    <DeckView>
      <DeckSearch />
      <DeckWrapper>
        <Link href="/editDeck">
          <DeckBox hollow>+</DeckBox>
        </Link>
        {Object.entries(decks).map(([id, deck]) => (
          <Link key={id} href={`/edit-deck?id=${id}`}>
            <DeckBox key={id}>{deck.name}</DeckBox>
          </Link>
        ))}
      </DeckWrapper>
    </DeckView>
  </>
)

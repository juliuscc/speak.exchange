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

const DeckBox = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 150px;
  height: 150px;
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryMuted};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme.fonts.white};
`
const StyledLink = styled.a`
  text-decoration: none;
  opacity: ${({ active, theme }) =>
    active ? 1 : theme.transparencies.inactive};

  :hover {
    opacity: 1;
  }
`

export default ({ deckNames, value, changeFunction, submitFunction }) => (
  <>
    <ViewBar />
    <DeckView>
      <DeckSearch />
      <DeckWrapper>
        <DeckBox>
          <form>
            <input
              type="text"
              placeholder="Name of deck"
              onChange={changeFunction}
              value={value}
            />
          </form>
          <button
            onClick={submitFunction}
            type="button"
            disabled={value === ''}
          >
            Create deck
          </button>

          <Link href="/editDeck">+</Link>
        </DeckBox>
        {Object.entries(deckNames).map(([id, deck]) => (
          <DeckBox key={id}>
            <Link href="/">
              <StyledLink>{deck.deckName}</StyledLink>
            </Link>
          </DeckBox>
        ))}
      </DeckWrapper>
    </DeckView>
  </>
)

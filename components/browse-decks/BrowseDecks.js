import styled from 'styled-components'
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import DeckSearch from './DeckSearch'
import DeckBox, { HollowDeckBox } from './DeckBox'
import screenSizes from '../../utils/screen-sizes'
import { firebaseContext } from '../FireBaseAuthProvider'
import WelcomeRepeat from './WelcomeRepeat'

const DeckView = styled.div`
  display: flex;

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    flex-direction: column;
  }
`

const DeckWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: ${props => (props.noDecks ? 'column' : 'row')};
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: ${props => (props.noDecks ? 'center' : 'flex-start')};
  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
`

export default ({ decks, createDeck, canAddDeck, browseContext }) => {
  const fbContext = useContext(firebaseContext)
  const { uid } = fbContext.user || {}

  const [sortType, setSortType] = useState({ type: 'date', order: 1 })

  const [searchWord, setSearchWord] = useState('')

  const sortFunction = obj => {
    if (obj.type === 'alphabetical') {
      return (a, b) => {
        if (a[1].name.toLowerCase() > b[1].name.toLowerCase()) {
          return obj.order
        }
        if (a[1].name.toLowerCase() < b[1].name.toLowerCase()) {
          return -obj.order
        }
        return 0
      }
    }
    return (a, b) => {
      if (a[1].createdAt.toDate() > b[1].createdAt.toDate()) {
        return obj.order
      }
      if (a[1].createdAt.toDate() < b[1].createdAt.toDate()) {
        return -obj.order
      }
      return 0
    }
  }

  if (canAddDeck && Object.keys(decks).length === 0)
    return <WelcomeRepeat createDeck={createDeck} />

  return (
    <DeckView>
      <DeckSearch
        sortType={sortType}
        setSortType={setSortType}
        searchWord={searchWord}
        setSearchWord={setSearchWord}
      />
      <DeckWrapper noDecks={Object.keys(decks).length === 0}>
        <>
          {canAddDeck ? (
            <HollowDeckBox
              onClick={createDeck}
              noDecks={Object.keys(decks).length === 0}
            />
          ) : null}
          {Object.entries(decks)
            .sort(sortFunction(sortType))
            .filter(deck => {
              const regex = new RegExp(searchWord, 'gi')
              return deck[1].name.match(regex)
            })
            .map(([id, deck]) => (
              <Link
                key={id}
                href={`/view-deck?id=${id}&cameFrom=${'browse'}&browseContext=${browseContext}`}
                passHref
              >
                <DeckBox
                  id={id}
                  edit={uid === deck.uid}
                  browseContext={browseContext}
                >
                  {deck.name}
                </DeckBox>
              </Link>
            ))}
        </>
      </DeckWrapper>
    </DeckView>
  )
}

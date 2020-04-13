import styled from 'styled-components'
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import DeckSearch from './DeckSearch'
import DeckBox, { HollowDeckBox } from './DeckBox'
import screenSizes from '../../utils/screen-sizes'
import { firebaseContext } from '../FireBaseAuthProvider'

const DeckView = styled.div`
  height: 100vh;
  display: flex;

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    flex-direction: column;
  }
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

export default ({ decks, createDeck, canAddDeck }) => {
  const fbContext = useContext(firebaseContext)
  const { uid } = fbContext.user || {}

  const [sortType, setSortType] = useState({ type: 'date', order: 1 })

  const [searchWord, setSearchWord] = useState('')

  const sortFunction = obj => {
    if (obj.type === 'alphabetical') {
      return (a, b) => {
        if (a[1].name > b[1].name) {
          return obj.order
        }
        if (a[1].name < b[1].name) {
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

  return (
    <DeckView>
      <DeckSearch
        sortType={sortType}
        setSortType={setSortType}
        searchWord={searchWord}
        setSearchWord={setSearchWord}
      />
      <DeckWrapper>
        {canAddDeck ? <HollowDeckBox onClick={createDeck} /> : null}
        {Object.entries(decks)
          .sort(sortFunction(sortType))
          .filter(deck => {
            const regex = new RegExp(searchWord, 'gi')
            return deck[1].name.match(regex)
          })
          .map(([id, deck]) => (
            <Link key={id} href={`/view-deck?id=${id}`} passHref>
              <DeckBox id={id} edit={uid === deck.uid}>
                {deck.name}
              </DeckBox>
            </Link>
          ))}
      </DeckWrapper>
    </DeckView>
  )
}

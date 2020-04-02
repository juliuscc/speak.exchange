import styled from 'styled-components'
import React, { useContext } from 'react'
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

export default ({ decks, createDeck, addDeck }) => {
  const fbContext = useContext(firebaseContext)
  const { uid } = fbContext.user

  return (
    <DeckView>
      <DeckSearch />
      <DeckWrapper>
        {addDeck ? <HollowDeckBox onClick={createDeck} /> : null}
        {Object.entries(decks).map(([id, deck]) => (
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

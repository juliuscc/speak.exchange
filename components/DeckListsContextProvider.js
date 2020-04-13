import { createContext, useContext } from 'react'
import { firebaseContext } from './FireBaseAuthProvider'
import useDeckList from './browse-decks/model/useDeckList'

export const DeckListsContext = createContext()

const DeckListsContextProvider = ({ children }) => {
  const fbContext = useContext(firebaseContext)
  const uid = fbContext.user?.uid

  const communityDecks = useDeckList()
  const userDecks = useDeckList(uid)

  return (
    <DeckListsContext.Provider value={{ communityDecks, userDecks }}>
      {children}
    </DeckListsContext.Provider>
  )
}

export default DeckListsContextProvider

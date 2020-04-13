import { createContext } from 'react'
import useDeckManager from './deck/model/useDeckManager'

export const DeckContext = createContext()

const DeckContextProvider = ({ children }) => {
  const { state, localActions, actions } = useDeckManager()

  return (
    <DeckContext.Provider value={{ state, localActions, actions }}>
      {children}
    </DeckContext.Provider>
  )
}

export default DeckContextProvider

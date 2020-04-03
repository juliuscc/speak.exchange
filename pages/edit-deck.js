import Navbar from '../components/ui-fragments/Navbar'
import EditDeck from '../components/deck/EditDeck'
import deckHOC from '../components/deck/withDeck'

const EditDeckContainer = () =>
  deckHOC(EditDeck, deckName => (deckName ? `Edit: ${deckName}` : 'Edit Deck'))

const Deck = () => (
  <>
    <Navbar />
    <EditDeckContainer />
  </>
)

export default Deck

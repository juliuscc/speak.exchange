import Navbar from '../components/ui-fragments/Navbar'
import EditDeck from '../components/deck/EditDeck'
import deckHOC from '../components/deck/withDeck'

const EditDeckContainer = () => deckHOC(EditDeck)

const Deck = () => (
  <>
    <Navbar />
    <EditDeckContainer />
  </>
)

export default Deck

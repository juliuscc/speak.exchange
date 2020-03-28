import Navbar from '../components/ui-fragments/Navbar'
import ViewDeck from '../components/deck/ViewDeck'
import deckHOC from '../components/deck/withDeck'

const ViewDeckContainer = () => deckHOC(ViewDeck)

const Deck = () => (
  <>
    <Navbar />
    <ViewDeckContainer />
  </>
)

export default Deck

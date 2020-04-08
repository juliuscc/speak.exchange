import Navbar from '../components/ui-fragments/Navbar'
import ViewDeck from '../components/deck/ViewDeck'
import deckHOC from '../components/deck/withDeck'

const ViewDeckContainer = deckHOC(ViewDeck, deckName => deckName || 'View Deck')

const Deck = () => (
  <>
    <Navbar />
    <main>
      <ViewDeckContainer />
    </main>
  </>
)

export default Deck

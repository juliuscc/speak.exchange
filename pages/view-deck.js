import Navbar from '../components/ui-fragments/Navbar'
import ViewDeck from '../components/deck/ViewDeck'
import withDeck from '../components/deck/withDeck'

const ViewDeckContainer = withDeck(
  ViewDeck,
  deckName => deckName || 'View Deck'
)

const Deck = () => (
  <>
    <Navbar />
    <main>
      <ViewDeckContainer />
    </main>
  </>
)

export default Deck

import Navbar from '../components/ui-fragments/Navbar'
import EditDeck from '../components/deck/EditDeck'
import withDeck from '../components/deck/withDeck'

const EditDeckContainer = withDeck(EditDeck, deckName =>
  deckName ? `Edit: ${deckName}` : 'Edit Deck'
)

const Deck = () => (
  <>
    <Navbar />
    <main>
      <EditDeckContainer />
    </main>
  </>
)

export default Deck

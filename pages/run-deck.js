import Navbar from '../components/ui-fragments/Navbar'
import RunDeck from '../components/deck/RunDeck'
import withDeck from '../components/deck/withDeck'
import ViewBar from '../components/browse-decks/ViewBar'

const RunDeckContainer = withDeck(RunDeck, deckName =>
  deckName ? `Run Test: ${deckName}` : 'Run Test'
)

const Run = () => (
  <>
    <Navbar />
    <ViewBar />
    <main>
      <RunDeckContainer />
    </main>
  </>
)

export default Run

import Head from 'next/head'
import Navbar from '../components/ui-fragments/Navbar'
import ViewBar from '../components/browse-decks/ViewBar'
import BrowseDecks from '../components/browse-decks/BrowseDecks'
import withBrowseDecks from '../components/browse-decks/withBrowseDecks'

const AllDecksContainer = withBrowseDecks(
  BrowseDecks,
  { canAddDeck: false },
  deckName => deckName || 'Community Decks'
)

const Repeat = () => (
  <>
    <Head>
      <title key="title">Browse Community Decks | Speak Repeat</title>
    </Head>
    <Navbar />
    <ViewBar />
    <main>
      <AllDecksContainer />
    </main>
  </>
)

export default Repeat

import Head from 'next/head'
import Navbar from '../components/ui-fragments/Navbar'
import ViewBar from '../components/browse-decks/ViewBar'
import withBrowseDecks from '../components/browse-decks/withBrowseDecks'
import BrowseDecks from '../components/browse-decks/BrowseDecks'
import LoggedInView from '../components/ui-fragments/LoggedInView'

const MyDecksContainer = withBrowseDecks(BrowseDecks, { addDeck: true })

const Repeat = () => (
  <>
    <Head>
      <title key="title">Speak Repeat</title>
    </Head>
    <Navbar />
    <ViewBar />
    <main>
      <LoggedInView>
        <MyDecksContainer />
      </LoggedInView>
    </main>
  </>
)

export default Repeat

import Head from 'next/head'
import Navbar from '../components/ui-fragments/Navbar'
import AllDecksContainer from '../components/browse-decks/AllDecksContainer'
import ViewBar from '../components/browse-decks/ViewBar'

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

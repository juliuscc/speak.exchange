import Head from 'next/head'
import Navbar from '../components/ui-fragments/Navbar'
import MyDecksContainer from '../components/browse-decks/MyDecksContainer'
import ViewBar from '../components/browse-decks/ViewBar'

const Repeat = () => (
  <>
    <Head>
      <title key="title">Speak Repeat</title>
    </Head>
    <Navbar />
    <ViewBar />
    <main>
      <MyDecksContainer />
    </main>
  </>
)

export default Repeat

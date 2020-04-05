import Navbar from '../components/ui-fragments/Navbar'
import Search from '../components/exchange/SearchExchange'
import Translation from '../components/exchange/Translation'

const Home = () => (
  <>
    <Navbar />
    <main>
      <Search />
      <Translation />
    </main>
  </>
)

export default Home

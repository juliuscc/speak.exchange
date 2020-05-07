import Navbar from '../components/ui-fragments/Navbar'
import withSearch from '../components/exchange/withSearch'
import SearchBar from '../components/exchange/SearchBar'
import withTranslation from '../components/exchange/withTranslation'
import TranslationResult from '../components/exchange/TranslationResult'

const Search = withSearch(SearchBar)
const Translation = withTranslation(TranslationResult)

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

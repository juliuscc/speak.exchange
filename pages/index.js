import { useState } from 'react'
import Navbar from '../presentational/Navbar'
import Search from '../container/SearchExchange'
import Exchange from '../container/Exchange'

const Home = () => {
  const [loadingTranslation, setLoadingTranslation] = useState(false)
  const [translationResult, setTranslationResult] = useState({})

  return (
    <>
      <Navbar />
      <Search
        setLoadingTranslation={setLoadingTranslation}
        setTranslationResult={setTranslationResult}
      />
      <Exchange
        loadingTranslation={loadingTranslation}
        translationResult={translationResult}
      />
    </>
  )
}

export default Home

import styled, { keyframes } from 'styled-components'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { fetchTranslation } from '../utils/fetchers'
import Container from '../presentational/fragments/Container'
import Translation from '../presentational/Translation'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #3498db;
  width: 70px;
  height: 70px;
  animation: ${rotate} 1s linear infinite;
  margin: 50px auto;
`

export default () => {
  const router = useRouter()
  const { search, language } = router.query
  const languageTo = language === 'en' ? 'fr' : 'en'

  const [loading, setLoading] = useState(false)
  const [translation, setTranslation] = useState(null)

  useEffect(() => {
    if (!search) {
      return setTranslation(null)
    }

    let cancelled = false

    setLoading(true)

    fetchTranslation(search, language, languageTo).then(response => {
      if (cancelled) return
      setLoading(false)
      setTranslation(response)
    })

    return () => {
      cancelled = true
    }
  }, [search])

  return (
    <Container>
      {(() => {
        if ((!loading && !translation) || search === '') {
          return <div>Welcome to speak.exchange!</div>
        }
        if (loading || !translation) {
          return <Spinner />
        }
        return <Translation translationResult={translation} />
      })()}
    </Container>
  )
}

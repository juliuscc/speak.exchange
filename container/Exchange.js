import styled, { keyframes } from 'styled-components'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { fetchTranslation } from '../utils/fetchers'
import Container from '../presentational/fragments/Container'
import TitleBar from '../presentational/fragments/TitleBar'
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
  border-top: 10px solid ${({ theme }) => theme.colors.primary};
  width: 70px;
  height: 70px;
  animation: ${rotate} 1s linear infinite;
  margin: 50px auto;
`

export default () => {
  const router = useRouter()
  const { search = '', language = 'en' } = router.query
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
  }, [search, language])

  return (
    <Container>
      {(() => {
        if (!loading && !translation) {
          return <TitleBar>Welcome to speak.exchange!</TitleBar>
        }
        if (loading || !translation) {
          return <Spinner />
        }
        return <Translation translationResult={translation} />
      })()}
    </Container>
  )
}

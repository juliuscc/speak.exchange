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
  const { search } = router.query

  const [loading, setLoading] = useState(true)
  const [translation, setTranslation] = useState(undefined)

  useEffect(() => {
    let cancelled = false

    setLoading(true)

    fetchTranslation(search, 'en', 'fr').then(response => {
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
      {loading || !translation ? (
        <Spinner />
      ) : (
        <Translation translationResult={translation} />
      )}
    </Container>
  )
}

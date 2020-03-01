import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { fetchTranslation } from '../utils/fetchers'
import Container from '../presentational/fragments/Container'

const Bold = styled.span`
  font-weight: bold;
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
      <h1>Exchange</h1>
      <div>
        <Bold>Loading:</Bold> {loading.toString()}
      </div>
      <p>
        <Bold>Result:</Bold>
      </p>
      <div>{JSON.stringify(translation)}</div>
    </Container>
  )
}

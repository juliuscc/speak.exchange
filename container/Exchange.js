import styled, { keyframes } from 'styled-components'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { fetchTranslation } from '../utils/fetchers'
import Container from '../presentational/fragments/Container'
import Translation from '../presentational/Translation'
import SearchHistory from '../presentational/SearchHistory'

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
const ExchangeGrid = styled.div`
  display: grid;
  grid-template-columns: auto 900px auto;
  grid-column-gap: 20px;
  justify-items: center;
  // justify-content: center; // potential style option
`
const LogoContainer = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const LogoImage = styled.img`
  padding: 20px;
`
const LogoTextLeft = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
  justify-self: end;
  align-self: flex-start;
`
const LogoTextRight = styled.h1`
  color: ${({ theme }) => theme.colors.primaryMuted};
  font-size: 50px;
  justify-self: start;
  align-self: flex-end;
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
  }, [search, language])

  return (
    <Container>
      <ExchangeGrid>
        <SearchHistory />
        {(() => {
          if ((!loading && !translation) || search === '') {
            return (
              <LogoContainer>
                <LogoTextLeft logoSide="left">speak</LogoTextLeft>
                {/* <div /> */}
                <LogoImage
                  src="/images/logo.png"
                  alt="Welcome to speak.exchange!"
                  width="250"
                  height="250"
                />
                {/* <div /> */}
                <LogoTextRight logoSide="right">exchange</LogoTextRight>
              </LogoContainer>
            )
          }
          if (loading || !translation) {
            return <Spinner />
          }
          return (
            <>
              <Translation translationResult={translation} />
            </>
          )
        })()}
        <SearchHistory />
      </ExchangeGrid>
    </Container>
  )
}

import styled from 'styled-components'
import Container from '../presentational/fragments/Container'

const Bold = styled.span`
  font-weight: bold;
`

export default ({ loadingTranslation, translationResult }) => (
  <Container>
    <h1>Exchange</h1>
    <div>
      <Bold>Loading:</Bold> {loadingTranslation.toString()}
    </div>
    <p>
      <Bold>Result:</Bold>
    </p>
    <div>{JSON.stringify(translationResult)}</div>
  </Container>
)

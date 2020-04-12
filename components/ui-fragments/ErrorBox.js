import styled from 'styled-components'
import screenSizes from '../../utils/screen-sizes'

const ErrorBox = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  max-width: 500px;
  padding: 30px 20px;
  border: solid 1px ${({ theme }) => theme.colors.danger};
  background: ${({ theme }) => theme.colors.dangerMuted};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.primary};

  h1 {
    margin-top: 0;
    line-height: 1;
  }

  p {
    margin-bottom: 0;
  }

  @media screen and (max-width: ${screenSizes.tablet.max}) {
    h1 {
      font-size: 25px;
    }

    p {
      font-size: 14px;
    }
  }
`

export default ({ children }) => (
  <ErrorBox>
    <h1>Uh oh là là...</h1>
    <p>{children}</p>
  </ErrorBox>
)

import styled from 'styled-components'
import screenSizes from '../../utils/screen-sizes'

const Container = styled.div`
  width: 80%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
    width: 85%;
  }

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 100%;
  }
`

export default Container

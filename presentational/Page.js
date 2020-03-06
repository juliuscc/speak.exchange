import styled, { ThemeProvider } from 'styled-components'
import theme from '../utils/theme'
import Meta from './Meta'
import { FireBaseAuthProvider } from '../container/FireBaseAuthProvider'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const FlexContent = styled.div`
  flex: 1;
`

const Page = ({ children }) => (
  <FireBaseAuthProvider>
    <ThemeProvider theme={theme}>
      <>
        <PageWrapper>
          <Meta />
          <FlexContent>{children}</FlexContent>
        </PageWrapper>
      </>
    </ThemeProvider>
  </FireBaseAuthProvider>
)

export default Page

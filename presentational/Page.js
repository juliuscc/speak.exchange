import styled, { ThemeProvider } from 'styled-components'
import theme from '../utils/theme'
import Meta from './Meta'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const FlexContent = styled.div`
  flex: 1;
`

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <PageWrapper>
        <Meta />
        <FlexContent>{children}</FlexContent>
      </PageWrapper>
    </>
  </ThemeProvider>
)

export default Page

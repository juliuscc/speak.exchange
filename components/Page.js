import Router from 'next/router'
import NProgress from 'nprogress'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../utils/theme'
import Meta from './Meta'
import { FireBaseAuthProvider } from './FireBaseAuthProvider'
import DeckListsContextProvider from './DeckListsContextProvider'
import DeckContextProvider from './DeckContextProvider'

// NProgress is a third party presentational component
Router.events.on('routeChangeStart', nextUrl => {
  // Make sure that the progress bar is not shown when only query params
  // change.
  const currentPath = Router.route
  const nextPath = nextUrl.includes('?')
    ? nextUrl.substring(0, nextUrl.indexOf('?'))
    : nextUrl

  if (currentPath !== nextPath) NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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
    <DeckListsContextProvider>
      <DeckContextProvider>
        <ThemeProvider theme={theme}>
          <>
            <PageWrapper>
              <Meta />
              <FlexContent>{children}</FlexContent>
            </PageWrapper>
          </>
        </ThemeProvider>
      </DeckContextProvider>
    </DeckListsContextProvider>
  </FireBaseAuthProvider>
)

export default Page

import App, { Container } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import Page from '../components/Page'

const GlobalStyle = createGlobalStyle`
	::selection {
		background: ${props =>
      props.theme.colors.selection}; /* WebKit/Blink Browsers */
	}
	
	::-moz-selection {
		background: ${props => props.theme.colors.selection}; /* Gecko Browsers */
	}
	
	html,
	body,
	#__next {
		height: 100%;
	}
	
	body {
		margin: 0;
		background-color: ${props => props.theme.colors.white};
		color: ${props => props.theme.colors.text};
		/* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
		font-family: ${({ theme }) => theme.fonts.text};
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: ${({ theme }) => theme.fonts.title};
		font-weight: 800;
	}

	p {
		line-height: 1.75;
		font-size: 16px;
		font-weight: 300;
	}
	
	* {
		box-sizing:border-box;
	}
`

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Page>
          <GlobalStyle />
          <Component {...pageProps} />
        </Page>
      </Container>
    )
  }
}

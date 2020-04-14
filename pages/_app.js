import App from 'next/app'
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
		font-family: ${({ theme }) => theme.fonts.text};
	}

	h1 {
		font-family: ${({ theme }) => theme.fonts.title};
		font-weight: 800;
	}

	h2 {
		font-family: ${({ theme }) => theme.fonts.title};
		font-weight: 600;
	}

	h3, h4, h5, h6 {
		font-family: ${({ theme }) => theme.fonts.text};
		font-weight: 600;
	}

	p {
		line-height: 1.75;
		font-size: 16px;
	}
	
	a, button {
		transition: all 0.2s;

		:hover {
			cursor: pointer;
		}
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
      <Page>
        <GlobalStyle />
        <Component {...pageProps} />
      </Page>
    )
  }
}

import Head from 'next/head'
import { fontNames } from '../utils/theme'

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title key="title">Speak Exchange</title>
    <link
      href={`https://fonts.googleapis.com/css?family=${fontNames.text.replace(
        ' ',
        '+'
      )}:300,600,700|${fontNames.title.replace(' ', '+')}:600,800`}
      rel="stylesheet"
    />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <link rel="stylesheet" type="text/css" href="/nprogress.css" />
  </Head>
)

export default Meta

import Head from 'next/head'
import useSearchTranslation from './useSearchTranslation'
import Container from '../ui-fragments/Container'
import Welcome from './Welcome'
import Spinner from '../ui-fragments/Spinner'
import ErrorBox from '../ui-fragments/ErrorBox'

export default Presentational => () => {
  const { status, translation, error } = useSearchTranslation()

  return (
    <Container>
      {(() => {
        if (status === 'idle') {
          return <Welcome />
        }
        if (status === 'pending') {
          return translation ? (
            <Presentational translationResult={translation} isLoading />
          ) : (
            <Spinner />
          )
        }
        if (status === 'resolved') {
          return <Presentational translationResult={translation} />
        }

        // eslint-disable-next-line no-console
        console.error(error)

        return (
          <ErrorBox>
            <Head>
              <title key="title">Uh oh là là... | Speak Exchange</title>
            </Head>
            There was an error with fetching the translation. Try refreshing the
            page.
          </ErrorBox>
        )
      })()}
    </Container>
  )
}

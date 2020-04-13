import Head from 'next/head'
import React from 'react'
import { withRouter } from 'next/router'
import SearchBar from './SearchBar'
import debounce from '../../utils/debounce'

class SearchExchange extends React.Component {
  constructor(props) {
    super(props)

    const { router } = props
    this.inputRef = React.createRef()

    this.debouncedURLUpdate = debounce(() => {
      const { translationQuery, language } = this.state

      router.push(
        `/?search=${translationQuery}&language=${language ? 'fr' : 'en'}`
      )
    }, 300)

    this.state = { translationQuery: '', language: true }
  }

  componentDidMount() {
    const { router } = this.props
    this.setState({
      translationQuery: router.query.search || '',
      language: router.query.language === 'fr'
    })
    if (this.inputRef.current) {
      this.inputRef.current.focus()
    }
  }

  handleChange = event => {
    this.setState(
      { translationQuery: event.target.value },
      this.debouncedURLUpdate
    )
  }

  languageChange = () => {
    this.setState(
      prevState => ({
        language: !prevState.language
      }),
      this.debouncedURLUpdate
    )
  }

  triggerSearch = () => {
    const { router } = this.props

    const { translationQuery, language } = this.state

    router.push(`/?search=${translationQuery}`)
    router.push(
      `/?search=${translationQuery}&language=${language ? 'fr' : 'en'}`
    )
  }

  addSpecialCharacter = char => () => {
    this.setState(
      prevState => ({
        translationQuery: prevState.translationQuery + char
      }),
      this.debouncedURLUpdate
    )

    this.inputRef.current.focus()
  }

  render = () => {
    const { translationQuery, language } = this.state
    return (
      <>
        <Head>
          <title key="title">
            {translationQuery && `${translationQuery} | `}Speak Exchange
          </title>
        </Head>
        <SearchBar
          language={language}
          onLanguageChange={this.languageChange}
          translationQuery={translationQuery}
          onTranslationQueryChange={this.handleChange}
          triggerSearch={this.triggerSearch}
          addSpecialCharacter={this.addSpecialCharacter}
          inputRef={this.inputRef}
        />
      </>
    )
  }
}

export default withRouter(SearchExchange)
import React from 'react'
import { withRouter } from 'next/router'
import SearchBar from '../presentational/SearchBar'
import debounce from '../utils/debounce'

class SearchExchange extends React.Component {
  constructor(props) {
    super(props)

    const { router } = props

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
    this.setState({ translationQuery: router.query.search })
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

  render = () => {
    const { translationQuery, language } = this.state
    return (
      <>
        <SearchBar
          language={language}
          onLanguageChange={this.languageChange}
          translationQuery={translationQuery}
          onTranslationQueryChange={this.handleChange}
          triggerSearch={this.debouncedURLUpdate}
        />
      </>
    )
  }
}

export default withRouter(SearchExchange)

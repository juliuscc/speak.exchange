import React from 'react'
import fetch from 'isomorphic-unfetch'
import SearchBar from '../presentational/SearchBar'
import debounce from '../utils/debounce'
import { SERVERLESS_WORD_LOOKUP_URL } from '../utils/apiConfig'

class SearchExchange extends React.Component {
  constructor(props) {
    super(props)

    this.debouncedSearch = debounce(() => this.onSearch(), 300)

    this.state = { translationQuery: '' }
  }

  onSearch() {
    const { setLoadingTranslation, setTranslationResult } = this.props

    if (this.cancelCallback) this.cancelCallback()
    let doCancel = false

    setLoadingTranslation(true)

    this.searchWord()
      .then(result => {
        if (doCancel) return
        setTranslationResult(result)
        setLoadingTranslation(false)
      })
      .catch(err => {
        if (doCancel) return
        throw err
      })

    this.cancelCallback = () => {
      doCancel = true
    }
  }

  handleChange = event => {
    this.setState(
      { translationQuery: event.target.value },
      this.debouncedSearch
    )
  }

  searchWord() {
    const { setLoadingTranslation } = this.props
    const { translationQuery } = this.state

    setLoadingTranslation(true)

    const body = {
      word: translationQuery,
      from: 'en',
      to: 'fr'
    }

    const url = SERVERLESS_WORD_LOOKUP_URL

    return fetch(url, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(response => response.json())
  }

  render = () => {
    const { translationQuery } = this.state
    return (
      <SearchBar
        translationQuery={translationQuery}
        onTranslationQueryChange={this.handleChange}
      />
    )
  }
}

export default SearchExchange

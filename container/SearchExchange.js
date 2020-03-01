import React from 'react'
import { withRouter } from 'next/router'
import SearchBar from '../presentational/SearchBar'
import debounce from '../utils/debounce'

class SearchExchange extends React.Component {
  constructor(props) {
    super(props)

    const { router } = props

    this.debouncedURLUpdate = debounce(() => {
      const { translationQuery } = this.state
      router.push(`/?search=${translationQuery}`)
    }, 300)

    this.state = { translationQuery: '' }
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

export default withRouter(SearchExchange)

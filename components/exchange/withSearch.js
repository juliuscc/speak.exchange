import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import Router from 'next/router'
import debounce from '../../utils/debounce'

// Synchronizes the url with the state
const debouncedURLUpdate = debounce(translationState => {
  const { translationQuery, language } = translationState

  Router.push(`/?search=${translationQuery}&language=${language}`)
}, 300)

const withSearch = Presentational => () => {
  const [translationState, setTranslationState] = useState({
    translationQuery: '',
    language: 'en'
  })

  const inputRef = useRef()

  // State mutations
  const languageChange = () =>
    setTranslationState(({ translationQuery, language: previousLanguage }) => {
      const newTranslationState = {
        translationQuery,
        language: previousLanguage === 'en' ? 'fr' : 'en'
      }

      debouncedURLUpdate(newTranslationState)
      return newTranslationState
    })

  const handleQueryChange = event => {
    const translationQuery = event.target.value

    setTranslationState(({ language }) => {
      const newTranslationState = { language, translationQuery }

      debouncedURLUpdate(newTranslationState)
      return newTranslationState
    })
  }

  const addSpecialCharacter = char => () => {
    setTranslationState(({ language, translationQuery }) => {
      const newTranslationState = {
        language,
        translationQuery: translationQuery + char
      }

      debouncedURLUpdate(newTranslationState)
      inputRef.current.focus()
      return newTranslationState
    })
  }

  // Forces a reload of the search results
  const triggerSearch = () => {
    const { translationQuery, language } = translationState

    Router.push(`/?search=${translationQuery}`)
    Router.push(
      `/?search=${translationQuery}&language=${language ? 'fr' : 'en'}`
    )
  }

  // Only run after first render
  useEffect(() => {
    /**
     * Next router.query is empty on the first (and second but not third?)
     * render. We could either update the state on a second render, or we could
     * use document.location. Any solution is a hack :shrug:
     * */

    // eslint-disable-next-line no-undef
    const queryParams = new URL(document.location).searchParams

    setTranslationState({
      translationQuery: queryParams.get('search') || '',
      language: queryParams.get('language') || 'en'
    })

    inputRef.current.focus()
  }, [])

  const { translationQuery, language } = translationState

  return (
    <>
      <Head>
        <title key="title">
          {translationQuery && `${translationQuery} | `}Speak Exchange
        </title>
      </Head>
      <Presentational
        language={language}
        onLanguageChange={languageChange}
        translationQuery={translationQuery}
        onTranslationQueryChange={handleQueryChange}
        triggerSearch={triggerSearch}
        addSpecialCharacter={addSpecialCharacter}
        inputRef={inputRef}
      />
    </>
  )
}

export default withSearch

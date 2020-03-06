import fetch from 'isomorphic-unfetch'
import { onlyResolvesLast } from 'awesome-only-resolves-last-promise/dist'
import { SERVERLESS_WORD_LOOKUP_URL } from './apiConfig'

/* eslint-disable import/prefer-default-export */
export const fetchTranslation = onlyResolvesLast((word, from, to) => {
  const body = { word, from, to }

  const url = SERVERLESS_WORD_LOOKUP_URL

  return fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json())
})
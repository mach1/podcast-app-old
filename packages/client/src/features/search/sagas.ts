import { takeLatest, put } from 'redux-saga/effects'

import { searchSuccess } from './actions'
import { Result, SEARCH, SearchAction } from './types'

interface SearchResponse {
  resultCount: number
  results: Result[]
}

const DEFAULT_PARAMS = {
  media: 'podcast'
}

function* search(action: SearchAction) {
  const params = {
    ...DEFAULT_PARAMS,
    ...action.payload
  }
  const query = new URLSearchParams(params).toString()
  const data: SearchResponse = yield fetch(
    `http://localhost:8080/api/search?${query}`
  ).then((response) => response.json())
  yield put(searchSuccess(data.results))
}

export default function* watchSearch() {
  yield takeLatest(SEARCH, search)
}

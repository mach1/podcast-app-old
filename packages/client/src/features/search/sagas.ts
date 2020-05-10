import { takeLatest, put, call } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/core'

import http from '../../common/api'
import { searchSuccess, lookUpSuccess } from './actions'
import { Result, SEARCH, LOOK_UP, SearchAction } from './types'

interface SearchResponse {
  resultCount: number
  results: Result[]
}

const DEFAULT_PARAMS = {
  media: 'podcast'
}

function* search(action: SearchAction): SagaIterator {
  const params = {
    ...DEFAULT_PARAMS,
    ...action.payload
  }
  const query = new URLSearchParams(params).toString()
  const response = yield call(http, `http://localhost:8080/api/search?${query}`)
  const data: SearchResponse = response.parsedBody
  yield put(searchSuccess(data.results))
}

export function* watchSearch(): SagaIterator {
  yield takeLatest(SEARCH, search)
}

function* lookUp(action: SearchAction): SagaIterator {
  const params = {
    ...DEFAULT_PARAMS,
    ...action.payload
  }
  const query = new URLSearchParams(params).toString()
  const response = yield call(http, `http://localhost:8080/api/lookup?${query}`)
  const data: SearchResponse = response.parsedBody
  yield put(lookUpSuccess(data.results))
}

export function* watchLookUp(): SagaIterator {
  yield takeLatest(LOOK_UP, lookUp)
}

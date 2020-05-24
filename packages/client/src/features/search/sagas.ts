import { takeEvery, put, call } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/core'

import http from '../../common/api'
import { searchSuccess, lookUpSuccess } from './actions'
import { Result, SEARCH, LOOK_UP, SearchAction, LookUpAction } from './types'
import { fetchFeed } from '../feed/actions'

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
  yield takeEvery(SEARCH, search)
}

function* lookUp(action: LookUpAction): SagaIterator {
  const params = {
    ...DEFAULT_PARAMS,
    id: '' + action.payload.id
  }
  const query = new URLSearchParams(params).toString()
  const response = yield call(http, `http://localhost:8080/api/lookup?${query}`)
  const data: SearchResponse = response.parsedBody
  const collection = data.results.find(
    ({ collectionId }) => collectionId === +params.id
  )
  yield put(lookUpSuccess(data.results))

  if (collection) {
    yield put(fetchFeed(collection.collectionId, collection.feedUrl))
  }
}

export function* watchLookUp(): SagaIterator {
  yield takeEvery(LOOK_UP, lookUp)
}

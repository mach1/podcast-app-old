import { takeLatest, put, call } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/core'

import http from '../../common/api'
import { FETCH_FEED, FeedResponse, FetchFeedAction } from './types'
import { fetchFeedSuccess } from './actions'

function* fetchFeed(action: FetchFeedAction): SagaIterator {
  const {
    payload: { id, url }
  } = action
  const params = {
    url
  }
  const query = new URLSearchParams(params).toString()

  const response = yield call(http, `http://localhost:8080/api/feed?${query}`)
  const data: FeedResponse = response.parsedBody
  yield put(fetchFeedSuccess(id, data))
}

export function* watchFetchFeed(): SagaIterator {
  yield takeLatest(FETCH_FEED, fetchFeed)
}

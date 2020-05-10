import { takeLatest, put } from 'redux-saga/effects'

import { FETCH_FEED, FeedResponse, FetchFeedAction } from './types'
import { fetchFeedSuccess } from './actions'

function* fetchFeed(action: FetchFeedAction) {
  const {
    payload: { id, url }
  } = action
  const params = {
    url
  }
  const query = new URLSearchParams(params).toString()

  const data: FeedResponse = yield fetch(
    `http://localhost:8080/api/feed?${query}`
  ).then((response) => response.json())
  console.log(data)
  yield put(fetchFeedSuccess(id, data))
}

export default function* watchFetchFeed() {
  yield takeLatest(FETCH_FEED, fetchFeed)
}

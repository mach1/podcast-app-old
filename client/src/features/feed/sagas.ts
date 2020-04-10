import { takeLatest } from 'redux-saga/effects'

import { FETCH_FEED, FeedResponse, FetchFeedAction } from './types'

function * fetchFeed (action: FetchFeedAction) {
  const { payload: { url } } = action
  const data: FeedResponse = yield fetch(url).then(response => response.text())
  console.log(data)

}

export default function * watchFetchFeed () {
  yield takeLatest(FETCH_FEED, fetchFeed)
}
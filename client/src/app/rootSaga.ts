import { fork } from 'redux-saga/effects'

import searchSagas from '../features/search/sagas'
import feedSagas from '../features/feed/sagas'

export default function * rootSaga () {
  yield fork(searchSagas)
  yield fork(feedSagas)
}
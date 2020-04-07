import { fork } from 'redux-saga/effects'

import searchSagas from '../features/search/sagas.ts'

export default function * rootSaga () {
  yield fork(searchSagas)
}
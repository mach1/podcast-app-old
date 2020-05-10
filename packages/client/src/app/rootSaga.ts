import { spawn, all, call } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/core'

import * as searchSagas from '../features/search/sagas'
import * as feedSagas from '../features/feed/sagas'

export default function* rootSaga(): SagaIterator {
  const allSagas = [searchSagas, feedSagas]
    .map((sagaObject) => Object.values(sagaObject))
    .flat()

  yield all(
    allSagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}

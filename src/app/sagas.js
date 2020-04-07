import { takeLatest, put } from 'redux-saga/effects'

function * increment () {
  const data = yield fetch('https://itunes.apple.com/search?media=podcast&term=puhata', { mode: 'no-cors' })
  console.log(data)
}

export default function * rootSaga () {
  yield takeLatest('counter/increment', increment)
}
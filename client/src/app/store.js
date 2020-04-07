import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'

import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  middleware: [sagaMiddleware],
  reducer: rootReducer
})

sagaMiddleware.run(rootSaga)
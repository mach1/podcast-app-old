import { combineReducers } from 'redux'

import search from '../features/search/reducer'

const rootReducer = combineReducers({
  search
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>

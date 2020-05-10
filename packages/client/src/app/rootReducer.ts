import { combineReducers } from 'redux'

import search from '../features/search/reducer'
import feed from '../features/feed/reducer'

const rootReducer = combineReducers({
  search,
  feed
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>

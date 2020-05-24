import { combineReducers } from 'redux'

import search from '../features/search/reducer'
import feed from '../features/feed/reducer'
import player from '../features/player/reducer'

const rootReducer = combineReducers({
  search,
  feed,
  player
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>

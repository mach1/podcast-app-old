import { FeedActionTypes, FeedState, FETCH_FEED_SUCCESS } from './types'

const initialState: FeedState = {}

export default (state = initialState, action: FeedActionTypes): FeedState => {
  switch (action.type) {
    case FETCH_FEED_SUCCESS:
      return {
        ...state,
        [action.payload.id]: action.payload.results
      }
    default:
      return state
  }
}

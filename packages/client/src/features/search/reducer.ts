import {
  SEARCH,
  SEARCH_SUCCESS,
  LOOK_UP_SUCCESS,
  SearchActionTypes,
  SearchState
} from './types'

const initialState: SearchState = {
  results: []
}

const search = (
  state = initialState,
  action: SearchActionTypes
): SearchState => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        results: []
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        results: [...state.results, ...action.payload]
      }
    case LOOK_UP_SUCCESS:
      return {
        ...state,
        results: [...state.results, ...action.payload]
      }
    default:
      return state
  }
}

export default search

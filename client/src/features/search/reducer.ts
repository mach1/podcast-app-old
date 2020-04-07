import { SEARCH_SUCCESS, SearchActionTypes, SearchState } from './types'

const initialState: SearchState = {
  results: []
}

const search = (state = initialState, action: SearchActionTypes): SearchState => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        results: action.payload
      }
    default:
      return state 
  }
}

export default search
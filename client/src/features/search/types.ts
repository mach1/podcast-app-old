export const SEARCH = 'SEARCH'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'

export interface SearchState {
  results: Result[]
}

export interface Result {
  artistName: string,
  collectionName: string
}

export interface SearchAction {
  type: typeof SEARCH,
  payload: Record<string, string>
}

export interface SeachSuccessAction {
  type: typeof SEARCH_SUCCESS,
  payload: Result[]
}

export type SearchActionTypes = SearchAction | SeachSuccessAction
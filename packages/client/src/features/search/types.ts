export const SEARCH = 'SEARCH'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const LOOK_UP = 'LOOK_UP'
export const LOOK_UP_SUCCESS = 'LOOK_UP_SUCCESS'

export interface SearchState {
  results: Result[]
}

export interface SearchParams {
  term: string
}

export interface LookUpParams {
  id: number
}

export interface Result {
  artistName: string
  collectionId: number
  collectionName: string
  artworkUrl600: string
  feedUrl: string
}

export interface SearchAction {
  type: typeof SEARCH
  payload: SearchParams
}

export interface SeachSuccessAction {
  type: typeof SEARCH_SUCCESS
  payload: Result[]
}

export interface LookUpAction {
  type: typeof LOOK_UP
  payload: LookUpParams
}

export interface LookUpSuccessAction {
  type: typeof LOOK_UP_SUCCESS
  payload: Result[]
}

export type SearchActionTypes =
  | SearchAction
  | SeachSuccessAction
  | LookUpAction
  | LookUpSuccessAction

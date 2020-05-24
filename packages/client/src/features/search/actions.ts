import {
  Result,
  SEARCH,
  SEARCH_SUCCESS,
  LOOK_UP,
  LOOK_UP_SUCCESS,
  SearchActionTypes,
  SearchParams,
  LookUpParams
} from './types'

export const search = (params: SearchParams): SearchActionTypes => ({
  type: SEARCH,
  payload: params
})

export const searchSuccess = (results: Result[]): SearchActionTypes => ({
  type: SEARCH_SUCCESS,
  payload: results
})

export const lookUp = (params: LookUpParams): SearchActionTypes => ({
  type: LOOK_UP,
  payload: params
})

export const lookUpSuccess = (results: Result[]): SearchActionTypes => ({
  type: LOOK_UP_SUCCESS,
  payload: results
})

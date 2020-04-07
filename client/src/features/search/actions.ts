import { Result, SEARCH, SEARCH_SUCCESS, SearchActionTypes } from './types'

export const search = (params: Record<string, string>): SearchActionTypes => ({
  type: SEARCH,
  payload: params
})

export const searchSuccess = (results: Result[]): SearchActionTypes => ({
  type: SEARCH_SUCCESS,
  payload: results
})
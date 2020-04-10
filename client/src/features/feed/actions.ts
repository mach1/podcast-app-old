import { FETCH_FEED, FeedActionTypes } from './types'

export const fetchFeed = (url: string): FeedActionTypes => ({
  type: FETCH_FEED,
  payload: {
    url
  }
})
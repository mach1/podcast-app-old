import {
  FETCH_FEED,
  FETCH_FEED_SUCCESS,
  FeedActionTypes,
  FeedResponse
} from './types'

export const fetchFeed = (id: number, url: string): FeedActionTypes => ({
  type: FETCH_FEED,
  payload: {
    id,
    url
  }
})

export const fetchFeedSuccess = (
  id: number,
  results: FeedResponse
): FeedActionTypes => ({
  type: FETCH_FEED_SUCCESS,
  payload: {
    id,
    results
  }
})

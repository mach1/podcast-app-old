export const FETCH_FEED = 'FETCH_FEED'
export const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS'

export type FeedResponse = Array<FeedItem>

export interface FeedItem {
  title: string
  link: string
}

export interface FeedState {
  [id: number]: FeedResponse
}

export interface FetchFeedAction {
  type: typeof FETCH_FEED
  payload: {
    id: number
    url: string
  }
}

export interface FetchFeedSuccessAction {
  type: typeof FETCH_FEED_SUCCESS
  payload: {
    id: number
    results: FeedResponse
  }
}

export type FeedActionTypes = FetchFeedAction | FetchFeedSuccessAction

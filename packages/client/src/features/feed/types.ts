export const FETCH_FEED = 'FETCH_FEED'
export const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS'

export interface FeedResponse {
  meta: {
    title: string
    description: string
    image: string
    author: string
  }
  items: Array<FeedItem>
}

export interface FeedItem {
  title: string
  link: string
  description: string
  date: string
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

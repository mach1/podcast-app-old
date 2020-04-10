export const FETCH_FEED = 'FETCH_FEED'

export interface FeedResponse {

}

export interface FetchFeedAction {
  type: typeof FETCH_FEED
  payload: {
    url: string
  }
}

export type FeedActionTypes = FetchFeedAction
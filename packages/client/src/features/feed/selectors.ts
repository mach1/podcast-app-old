import { createSelector } from 'reselect'

import { RootState } from '../../app/rootReducer'

import type { FeedState } from './types'

export const getFeedItems = (state: RootState): FeedState => state.feed

type ById = {
  id: number
}

const getId = (state: RootState, { id }: ById): number => id

export const getFeedById = createSelector(
  getId,
  getFeedItems,
  (id: number, feedItems: FeedState) => feedItems[id]
)

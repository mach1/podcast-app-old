import { createSelector } from 'reselect'
import { RootState } from '../../app/rootReducer'

import type { PlayerState } from './types'

export const getPlayerState = (state: RootState): PlayerState => state.player

export const getPlayerItem = createSelector(getPlayerState, ({ item }) => item)

export const getIsPlaying = createSelector(
  getPlayerState,
  ({ playing }) => playing
)

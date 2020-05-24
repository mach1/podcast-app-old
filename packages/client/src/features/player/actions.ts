import { PLAY, TOGGLE_PLAYING, PlayerActionTypes } from './types'
import { FeedItem } from '../feed/types'

export const play = (item: FeedItem): PlayerActionTypes => ({
  type: PLAY,
  payload: {
    item
  }
})

export const togglePlaying = (): PlayerActionTypes => ({
  type: TOGGLE_PLAYING
})

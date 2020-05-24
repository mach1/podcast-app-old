import { FeedItem } from '../feed/types'
export const PLAY = 'PLAY'
export const TOGGLE_PLAYING = 'TOGGLE_PLAYING'

export interface PlayAction {
  type: typeof PLAY
  payload: { item: FeedItem }
}

export interface TogglePlayingAction {
  type: typeof TOGGLE_PLAYING
}

export interface PlayerState {
  item: FeedItem | null
  playing: boolean
}

export type PlayerActionTypes = PlayAction | TogglePlayingAction

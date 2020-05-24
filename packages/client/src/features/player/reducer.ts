import { PlayerActionTypes, PlayerState, PLAY, TOGGLE_PLAYING } from './types'

const initialState = {
  item: null,
  playing: false
}

export default (
  state = initialState,
  action: PlayerActionTypes
): PlayerState => {
  switch (action.type) {
    case PLAY:
      return {
        ...state,
        item: action.payload.item,
        playing: true
      }
    case TOGGLE_PLAYING:
      return {
        ...state,
        playing: !state.playing
      }
    default:
      return state
  }
}

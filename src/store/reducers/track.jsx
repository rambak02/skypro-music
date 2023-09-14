import {
  SET_CURRENT_TRACK,
  NEXT_TRACK,
  PREV_TRACK,
  TOGGLE_SHUFFLED,
} from '../actions/types/track.js'

const initialState = {
  track: null,
  shuffled: false,
  shuffledPlaylist: [],
  playing: false,
}
export default function trackReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_TRACK: {
      const { track } = action.payload; 
      return {
        ...state,
        currentTrack: track,
        currentTrackId: track.id,
        playing: true, 
      };
    }

    case NEXT_TRACK: {
      const { id } = action.payload
      return {
        ...state,
        [id]: {
         
        },
      }
    }
    case PREV_TRACK: {
    }
    case TOGGLE_SHUFFLED: {
    }

    default:
        return state
  }
}

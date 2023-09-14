import { SET_CURRENT_TRACK, NEXT_TRACK, PREV_TRACK, TOGGLE_SHUFFLED } from "../types/track";

export const setCurTrack = (track) => ({
    type: SET_CURRENT_TRACK,
    payload: {
     track
    }
  });
  
export const nextTrack = (track) => ({
    type: NEXT_TRACK,
    payload: {
    track
    }
})
export const prevTrack = (track) => ({
    type: PREV_TRACK,
    payload: {
        track
    }
})
export const toggleShuffled = (track) => ({
    type: TOGGLE_SHUFFLED,
    payload: {
        id: track.id
    }
})
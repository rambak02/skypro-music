import { Track } from '../Track/Track'

import {
  StyledCenterBlockContent,
  StyledContentPlaylist,
} from './Tracklist.styled'

export function Tracklist({track, setCurrentTrack, currentTrack, setIsPlaying}) {
  return (
    <StyledCenterBlockContent>
      <StyledContentPlaylist>
            <Track  setIsPlaying={setIsPlaying} key={track.id} track={track} setCurrentTrack={setCurrentTrack} currentTrack={currentTrack}/>
      </StyledContentPlaylist>
    </StyledCenterBlockContent>
  )
}

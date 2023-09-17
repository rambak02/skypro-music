import { Track } from '../Track/Track'

import {
  StyledCenterBlockContent,
  StyledContentPlaylist,
} from './Tracklist.styled'

export function Tracklist({track, setCurrentTrack, currentTrack, setIsPlaying, isPlaying}) {
  return (
    <StyledCenterBlockContent>
      <StyledContentPlaylist>
            <Track  setIsPlaying={setIsPlaying} key={track.id} track={track} setCurrentTrack={setCurrentTrack} currentTrack={currentTrack} isPlaying={isPlaying}/>
      </StyledContentPlaylist>
    </StyledCenterBlockContent>
  )
}

import { Track } from '../Track/Track'

import {
  StyledCenterBlockContent,
  StyledContentPlaylist,
} from './Tracklist.styled'

export function Tracklist({track, setCurrentTrack, currentTrack}) {
  return (
    <StyledCenterBlockContent>
      <StyledContentPlaylist>
            <Track key={track.id} track={track} setCurrentTrack={setCurrentTrack} currentTrack={currentTrack}/>
      </StyledContentPlaylist>
    </StyledCenterBlockContent>
  )
}

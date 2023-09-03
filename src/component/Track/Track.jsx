import { useDispatch } from 'react-redux'
import { setCurTrack } from '../../store/actions/creators/track'
import {
  StyledPlaylistItem,
  StyledPlaylistTrack,
} from '../Playlist/Playlist.styled'
import {
  StyledTrackTitles,
  StyledTrackTitleImage,
  StyledTrackTitleSvg,
  StyledTrackTitleLink,
  StyledTrackTitleSpan,
  StyledTrackAuthor,
  StyledTrackAuthorLink,
  StyledTrackAlbum,
  StyledTrackAlbumLink,
  StyledTrackTimeSvg,
  StyledTrackTimeText,
} from '../Track/Track.styled.jsx'
import { useEffect } from 'react'
export function formatTime(trackTime) {
  const minutes = Math.floor(trackTime / 60)
  const seconds = trackTime % 60
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds
  return minutes + ' : ' + formattedSeconds
}

export function Track({ track, setCurrentTrack, setIsPlaying, isPlaying, currentTrack }) {
  const dispatch = useDispatch()
  const handleTrackClick = () => {
    dispatch(setCurTrack(track))
    if (currentTrack && currentTrack.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  }
  useEffect(() => {
    setIsPlaying(isPlaying)
  }, [isPlaying])
  return (
    <StyledPlaylistItem onClick={handleTrackClick}>
      <StyledPlaylistTrack>
        <StyledTrackTitles>
          <StyledTrackTitleImage>
            <StyledTrackTitleSvg alt="music" $isPlaying={currentTrack && (currentTrack.id === track.id) && isPlaying}>
              <use xlinkHref={currentTrack && currentTrack.id === track.id ? "img/icon/sprite.svg#icon-circle" : "img/icon/sprite.svg#icon-note"}></use>
            </StyledTrackTitleSvg>
          </StyledTrackTitleImage>
          <div>
            <StyledTrackTitleLink href="http://">
              {track.name}
              <StyledTrackTitleSpan> {track.titleSpan}</StyledTrackTitleSpan>
            </StyledTrackTitleLink>
          </div>
        </StyledTrackTitles>
        <StyledTrackAuthor>
          <StyledTrackAuthorLink href="http://">
            {track.author}
          </StyledTrackAuthorLink>
        </StyledTrackAuthor>
        <StyledTrackAlbum>
          <StyledTrackAlbumLink href="http://">
            {' '}
            {track.album}
          </StyledTrackAlbumLink>
        </StyledTrackAlbum>
        <div>
          <StyledTrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </StyledTrackTimeSvg>
          <StyledTrackTimeText>
            {formatTime(track.duration_in_seconds)}
          </StyledTrackTimeText>
        </div>
      </StyledPlaylistTrack>
    </StyledPlaylistItem>
  )
}

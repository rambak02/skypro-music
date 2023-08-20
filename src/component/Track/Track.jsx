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

export function formatTime(trackTime) {
  const minutes = Math.floor(trackTime / 60);
  const seconds = trackTime % 60;
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
  return minutes + ' : ' + formattedSeconds;
}
export function Track({ track, setCurrentTrack, setIsPlaying}) {
  const handleTrackClick = () => {
    setCurrentTrack(track);
    setIsPlaying(true);
  
  };
  return (
    <StyledPlaylistItem onClick={handleTrackClick
     }  >
      <StyledPlaylistTrack >
        <StyledTrackTitles>
          <StyledTrackTitleImage>
            <StyledTrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
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
          <StyledTrackTimeText>{ formatTime(track.duration_in_seconds) }</StyledTrackTimeText>
        </div>
      </StyledPlaylistTrack>
    </StyledPlaylistItem>
  )
}

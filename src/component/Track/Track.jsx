import { StyledPlaylistItem, StyledPlaylistTrack} from "../Playlist/Playlist.styled";
import { StyledTrackTitles, StyledTrackTitleImage, StyledTrackTitleSvg, StyledTrackTitleLink, StyledTrackTitleSpan, StyledTrackAuthor, StyledTrackAuthorLink, StyledTrackAlbum, StyledTrackAlbumLink, StyledTrackTimeSvg, StyledTrackTimeText} from "../Track/Track.styled.jsx"

export function Track ({track}) {
    return ( 
       
         <StyledPlaylistItem>
    <StyledPlaylistTrack>
        <StyledTrackTitles>
            <StyledTrackTitleImage>
                <StyledTrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </StyledTrackTitleSvg>
            </StyledTrackTitleImage>
            <div>
                <StyledTrackTitleLink  href="http://">{track.title}<StyledTrackTitleSpan>    {track.titleSpan}</StyledTrackTitleSpan></StyledTrackTitleLink>
            </div>
        </StyledTrackTitles>
        <StyledTrackAuthor>
            <StyledTrackAuthorLink href="http://">{track.author}</StyledTrackAuthorLink>
        </StyledTrackAuthor>
        <StyledTrackAlbum>
            <StyledTrackAlbumLink  href="http://"> {track.album}</StyledTrackAlbumLink>
        </StyledTrackAlbum>
        <div>
            <StyledTrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </StyledTrackTimeSvg>
            <StyledTrackTimeText>{track.time}</StyledTrackTimeText>
        </div>
    </StyledPlaylistTrack>
   </StyledPlaylistItem>
    ) 
}
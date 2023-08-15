import {
  StyledBar,
  StyledBarContent,
  StyledBarPlayer,
  StyledBarPlayerBlock,
  StyledBarPlayerProgress,
  StyledBarVolumeBlock,
  StyledBarVolumeContent,
  StyledButtonNext,
  StyledButtonNextSvg,
  StyledButtonPlay,
  StyledButtonPlaySvg,
  StyledButtonPrev,
  StyledButtonPrevSvg,
  StyledButtonRepeat,
  StyledButtonRepeatSvg,
  StyledButtonShuffle,
  StyledButtonShuffleSvg,
  StyledPlayTrack,
  StyledPlayTrackAlbum,
  StyledPlayTrackAlbumLink,
  StyledPlayTrackAuthor,
  StyledPlayTrackAuthorLink,
  StyledPlayTrackContainer,
  StyledPlayTrackImage,
  StyledPlayTrackLikeDis,
  StyledPlayTrackSvg,
  StyledPlayerControls,
  StyledTrackDislike,
  StyledTrackDislikeSvg,
  StyledTrackLike,
  StyledTrackLikeSvg,
  StyledVolumeImage,
  StyledVolumeProgress,
  StyledVolumeProgressLine,
  StyledVolumeSvg,
} from './AudioPLayer.styled'
export function AudioPlayer({ currentTrack }) {
  return (
    <StyledBar>
      <StyledBarContent>
        <StyledBarPlayerProgress></StyledBarPlayerProgress>
        <StyledBarPlayerBlock>
          <StyledBarPlayer>
            <StyledPlayerControls>
              <StyledButtonPrev>
                <StyledButtonPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </StyledButtonPrevSvg>
              </StyledButtonPrev>
              <StyledButtonPlay className="_btn">
                <StyledButtonPlaySvg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </StyledButtonPlaySvg>
              </StyledButtonPlay>
              <StyledButtonNext>
                <StyledButtonNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </StyledButtonNextSvg>
              </StyledButtonNext>
              <StyledButtonRepeat className=" _btn-icon">
                <StyledButtonRepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </StyledButtonRepeatSvg>
              </StyledButtonRepeat>
              <StyledButtonShuffle className=" _btn-icon">
                <StyledButtonShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </StyledButtonShuffleSvg>
              </StyledButtonShuffle>
            </StyledPlayerControls>

            <StyledPlayTrack>
              <StyledPlayTrackContainer>
                <StyledPlayTrackImage>
                  <StyledPlayTrackSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledPlayTrackSvg>
                </StyledPlayTrackImage>
                <StyledPlayTrackAuthor>
                  <StyledPlayTrackAuthorLink href="http://">
                    {' '}
                    {currentTrack.name}
                  </StyledPlayTrackAuthorLink>
                </StyledPlayTrackAuthor>
                <StyledPlayTrackAlbum>
                  <StyledPlayTrackAlbumLink href="http://">
                    {currentTrack.author}
                  </StyledPlayTrackAlbumLink>
                </StyledPlayTrackAlbum>
              </StyledPlayTrackContainer>

              <StyledPlayTrackLikeDis>
                <StyledTrackLike className=" _btn-icon">
                  <StyledTrackLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </StyledTrackLikeSvg>
                </StyledTrackLike>
                <StyledTrackDislike className=" _btn-icon">
                  <StyledTrackDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </StyledTrackDislikeSvg>
                </StyledTrackDislike>
              </StyledPlayTrackLikeDis>
            </StyledPlayTrack>
          </StyledBarPlayer>
          <StyledBarVolumeBlock>
            <StyledBarVolumeContent>
              <StyledVolumeImage>
                <StyledVolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </StyledVolumeSvg>
              </StyledVolumeImage>
              <StyledVolumeProgress className=" _btn">
                <StyledVolumeProgressLine
                  className=" _btn"
                  type="range"
                  name="range"
                />
              </StyledVolumeProgress>
            </StyledBarVolumeContent>
          </StyledBarVolumeBlock>
        </StyledBarPlayerBlock>
      </StyledBarContent>
    </StyledBar>
  )
}

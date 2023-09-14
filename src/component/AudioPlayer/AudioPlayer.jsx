import { useEffect, useRef } from 'react'
import ProgressBar from './ProgressBar'
import {
  StyledBar,
  StyledBarContent,
  StyledBarPlayer,
  StyledBarPlayerBlock,
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
  StyledAudio,
} from './AudioPLayer.styled'

export function AudioPlayer({
  music,
  setCurrentTrack,
  currentTrack,
  isPlaying,
  setIsPlaying,
  isRepeat,
  setIsRepeat,
  setCurrentTime,
  currentTime,
  volume,
  setVolume,
}) {
  const audioRef = useRef(null)

  const handleStart = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const handleStop = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const handleProgressBarChange = (newTime) => {
    setCurrentTime(newTime)
    audioRef.current.currentTime = newTime
  }
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value
    setVolume(newVolume)
    audioRef.current.volume = newVolume
  }

  useEffect(() => {
    const audioElement = audioRef.current

    if (audioElement) {
      audioElement.addEventListener('timeupdate', handleTimeUpdate)

      return () => {
        audioElement.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }
  }, [audioRef])

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime
    setCurrentTime(currentTime)
  }
  const handleRepeat = () => {
    audioRef.current.loop = !isRepeat
    setIsRepeat(!isRepeat)
  }
 const handleNextTrack = () => {
  const currentId = music.findIndex(track => track.id === currentTrack.id);
  const nextId = currentId + 1;
  const nextTrack = music[nextId];
  if (nextTrack) {
    setCurrentTrack(nextTrack)
    handleStart
  }
 }
 const handlePrevTrack = () => {
  const currentId = music.findIndex(track => track.id === currentTrack.id);
  const prevId = currentId - 1;
  const prevTrack = music[prevId];
  if (prevTrack) {
    setCurrentTrack(prevTrack)
    handleStart
  }
 }
  const togglePlay = isPlaying ? handleStop : handleStart
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }, [currentTrack])
  return (
    <>
      <StyledAudio controls ref={audioRef}>
        <source src={currentTrack.track_file} type="audio/mpeg" />
      </StyledAudio>
      <StyledBar>
        <StyledBarContent>
          <ProgressBar
            audioRef={audioRef}
            currentTime={currentTime}
            setCurrentTime={handleProgressBarChange}
          ></ProgressBar>
          <StyledBarPlayerBlock>
            <StyledBarPlayer>
              <StyledPlayerControls>
                <StyledButtonPrev onClick={handlePrevTrack}>
                  <StyledButtonPrevSvg alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  </StyledButtonPrevSvg>
                </StyledButtonPrev>
                <StyledButtonPlay className="_btn" onClick={togglePlay}>
                  <StyledButtonPlaySvg alt="play">
                    <use
                      xlinkHref={
                        isPlaying
                          ? 'img/icon/sprite.svg#icon-pause'
                          : 'img/icon/sprite.svg#icon-play'
                      }
                    ></use>
                  </StyledButtonPlaySvg>
                </StyledButtonPlay>
                <StyledButtonNext onClick={handleNextTrack}>
                  <StyledButtonNextSvg alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </StyledButtonNextSvg>
                </StyledButtonNext>
                <StyledButtonRepeat
                  className=" _btn-icon"
                  onClick={handleRepeat}
                >
                  <StyledButtonRepeatSvg alt="repeat">
                    <use
                      xlinkHref={
                        isRepeat
                          ? 'img/icon/sprite.svg#icon-repeat--active'
                          : 'img/icon/sprite.svg#icon-repeat'
                      }
                    ></use>
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
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleVolumeChange}
                    name="range"
                  />
                </StyledVolumeProgress>
              </StyledBarVolumeContent>
            </StyledBarVolumeBlock>
          </StyledBarPlayerBlock>
        </StyledBarContent>
      </StyledBar>
    </>
  )
}

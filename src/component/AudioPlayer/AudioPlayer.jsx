import { useEffect, useRef, useState } from 'react'
import ProgressBar from './ProgressBar'
import {
  nextTrack,
  prevTrack,
  toggleShuffled,
} from '../../store/actions/creators/track'
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
import { useDispatch } from 'react-redux'

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
  const dispatch = useDispatch()
  const audioRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [shuffledTracks, setShuffledTracks] = useState([])
  const [shuffledIndex, setShuffledIndex] = useState(0)
  const [shuffleTrackEnable, setShuffleTrackEnable] = useState(false)
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
    if (shuffleTrackEnable) {
      if (shuffledIndex < shuffledTracks.length - 1) {
        setShuffledIndex(shuffledIndex + 1)
      } else {
        // Если достигнут конец массива перемешанных треков, начинаем сначала
        setShuffledIndex(0)
      }
      const nextMusic = shuffledTracks[shuffledIndex]
      setCurrentTrack(nextMusic)
      dispatch(nextTrack(nextMusic))
    } else {
      // Если Shuffle выключен
      const currentId = music.findIndex((track) => track.id === currentTrack.id)
      const nextId = currentId + 1
      let nextMusic = music[nextId]
      if (nextMusic) {
        setCurrentTrack(nextMusic)
        dispatch(nextTrack(nextMusic))
      }
    }
    // Запускаем воспроизведение следующего трека
    handleStart()
  }

  const shuffleTracks = () => {
    const shuffledMusic = [...music]
    for (let i = shuffledMusic.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledMusic[i], shuffledMusic[j]] = [
        shuffledMusic[j],
        shuffledMusic[i],
      ]
    }
    return shuffledMusic
  }
  useEffect(() => {
    if (shuffleTrackEnable) {
      const newShuffledTracks = shuffleTracks()
      setShuffledTracks(newShuffledTracks)
      setShuffledIndex(0)
    } else {
      setShuffledTracks([])
    }
  }, [shuffleTrackEnable])
  const handleShuffle = () => {
    if (!shuffleTrackEnable) {
      setShuffleTrackEnable(true)
      const newShuffledTracks = shuffleTracks(music)
      setShuffledTracks(newShuffledTracks)
      setShuffledIndex(0)
      dispatch(toggleShuffled(newShuffledTracks, true))
    } else {
      setShuffleTrackEnable(false)
      setShuffledTracks([])
      dispatch(toggleShuffled([], false))
    }
  }
  const handlePrevTrack = () => {
    if (shuffleTrackEnable) {
      const prevIndex = (currentIndex - 1) % music.length
      setCurrentIndex(nextIndex)
      if (shuffledTracks.length > 0) {
        if (shuffledIndex < shuffledTracks.length - 1) {
          setShuffledIndex(shuffledIndex - 1)
        } else {
          setShuffledIndex(0)
        }
        const prevMusic = shuffledTracks[shuffledIndex]
        setCurrentTrack(prevMusic)
        dispatch(prevTrack(prevMusic))
      } else {
        const prevMusic = music[prevIndex]
        setCurrentTrack(prevMusic)
        dispatch(prevTrack(prevMusic))
      }
    } else {
      const currentId = music.findIndex((track) => track.id === currentTrack.id)
      const prevId = currentId - 1
      let prevMusic = music[prevId]
      if (prevMusic) {
        setCurrentTrack(prevMusic)
        dispatch(prevTrack(prevMusic))
        handleStart
        setIsPlaying(true)
      } else {
        prevMusic = music[music.length - 1]
        setCurrentTrack(prevMusic)
        dispatch(prevTrack(prevMusic))
        handleStart
        setIsPlaying(true)
      }
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
                <StyledButtonShuffle
                  className=" _btn-icon"
                  onClick={handleShuffle}
                >
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

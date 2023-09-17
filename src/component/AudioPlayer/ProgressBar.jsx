import { StyledProgressInput, StyledProgressTime } from './ProgressBar.styled'
import { formatTime } from '../Track/Track'

export default function ProgressBar({
  currentTime,
  setCurrentTime,
  audioRef,
}) {
  const durationS = audioRef.current ? Math.floor(audioRef.current.duration) : 0
  return (
    <>
      <StyledProgressTime>
        {formatTime(Math.floor(currentTime))}/{formatTime(durationS)}{' '}
      </StyledProgressTime>
      <StyledProgressInput
        onChange={(event) => setCurrentTime(event.target.value)}
        type="range"
        min={0}
        max={durationS.toString()}
        value={currentTime}
        step={0.01}
        $color="#B672FF"
      />
    </>
  )
}

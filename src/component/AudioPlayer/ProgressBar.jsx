import { StyledProgressInput, StyledProgressTime } from './ProgressBar.styled'
import { formatTime } from '../Track/Track'

export default function ProgressBar({ duration, currentTime, setCurrentTime }) {
  return (
    <>
      <StyledProgressTime>
        {formatTime(Math.floor(currentTime))}/{formatTime(duration)}{' '}
      </StyledProgressTime>
      <StyledProgressInput
        onChange={(event) => setCurrentTime(event.target.value)}
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        $color="#B672FF"
      />
    </>
  )
}

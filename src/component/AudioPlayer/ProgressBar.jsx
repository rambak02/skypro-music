
import { StyledProgressInput } from "./ProgressBar.styled";

export default function ProgressBar({duration, currentTime, setCurrentTime}) {
    
    return (
      <StyledProgressInput
      onChange={(event) => setCurrentTime(event.target.value)}
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        $color="#B672FF"
      />
    );
  }
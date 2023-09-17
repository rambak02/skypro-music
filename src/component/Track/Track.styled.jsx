import { styled, keyframes, css } from 'styled-components'
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.4;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`

const pulsatingStyles = css`
  animation: ${pulseAnimation} 1s infinite;
  fill: #B672FF;
`

export const StyledTrackTitles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 447px;
`
export const StyledTrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
`
export const StyledTrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
  ${(props) => props.$isPlaying && pulsatingStyles};
`
export const StyledTrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`
export const StyledTrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`
export const StyledTrackAuthor = styled.div`
  width: 321px;
  display: flex;
  justify-content: flex-start;
`
export const StyledTrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`
export const StyledTrackAlbum = styled.div`
  width: 245px;
  margin-right: 30px;
`
export const StyledTrackAlbumLink = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`
export const StyledTrackTimeSvg = styled.div`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`
export const StyledTrackTimeText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`

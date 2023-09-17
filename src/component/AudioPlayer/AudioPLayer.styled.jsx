import { styled, css } from 'styled-components'

export const StyledAudio = styled.audio`
  display: none;
`

export const StyledBar = styled.div`
  z-index: 99;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`
export const StyledBarContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const StyledBarPlayerBlock = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const StyledPlayerControls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
`
export const StyledBarPlayer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
const buttonMixin = css`
  padding: 5px;
  display: flex;
  align-items: center;
`
export const StyledButtonPrev = styled.div`
  ${buttonMixin}
  margin-right: 23px;
`
export const StyledButtonPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
  cursor: pointer;
  fill: #d9d9d9;
  stroke: #d9d9d9;
  &:hover {
    stroke: #696969;
    fill: #696969;
  }
  &:active {
    stroke: #d9d9d9;
    fill: #d9d9d9;
  }
`
export const StyledButtonPlay = styled.div`
  ${buttonMixin}
  margin-right: 23px;
`
export const StyledButtonPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
  &:hover {
    fill: #696969;
  }
  &:active {
    fill: #d9d9d9;
  }
`
export const StyledButtonNext = styled.div`
  ${buttonMixin};
  margin-right: 28px;
  fill: #a53939;
`
export const StyledButtonNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: #d9d9d9;
  stroke: #d9d9d9;
  cursor: pointer;
  &:hover {
    stroke: #696969;
    fill: #696969;
  }
  &:active {
    stroke: #d9d9d9;
    fill: #d9d9d9;
  }
`
export const StyledButtonRepeat = styled.div`
  ${buttonMixin};
  margin-right: 24px;
`
export const StyledButtonRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const StyledButtonRepeatSvgActive = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #ffffff;
`

export const StyledButtonShuffle = styled.div`
  ${buttonMixin};
  display: flex;
  align-items: center;
`
export const StyledButtonShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const StyledPlayTrack = styled.div`
  display: flex;
  flex-direction: row;
`
export const StyledPlayTrackContainer = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  align-items: center;
`
export const StyledPlayTrackImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-area: image;
`
export const StyledPlayTrackSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`

export const StyledPlayTrackAuthor = styled.div`
  grid-area: author;
  width: 120px;
`
export const StyledPlayTrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`
export const StyledPlayTrackAlbum = styled.div`
  grid-area: album;
  min-width: 49px;
`
export const StyledPlayTrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`
export const StyledPlayTrackLikeDis = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
`
export const StyledTrackLike = styled.div`
  padding: 5px;
`
export const StyledTrackDislike = styled.div`
  padding: 5px;
  margin-left: 28.5px;
`
export const StyledTrackLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const StyledTrackDislikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`
export const StyledBarVolumeBlock = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`
export const StyledBarVolumeContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`
export const StyledVolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`
export const StyledVolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`
export const StyledVolumeProgress = styled.div`
  display: flex;
  width: 109px;
`

export const StyledVolumeProgressLine = styled.input`
--progress-color: white;
--progress-bg-color: #2e2e2e;
overflow: hidden;
    height: 5px;
  width: 109px
  &::-webkit-slider-runnable-track {
    position: relative;
    height: var(--progress-height);
    background: var(--progress-bg-color);
  }
  &::-webkit-slider-thumb {
    --thumb-height: 1px;
    --thumb-width: 1px;
    position: relative;
    -webkit-appearance: none;
    width: var(--thumb-width, var(--thumb-height));
    box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
      100vmax var(--progress-color);
  }

  &::-webkit-slider-runnable-track {
    background: var(--progress-bg-color);
  }

  /* FF */
  &::-moz-range-track {
    width: 100%;
    height: var(--progress-height);
    background: var(--progress-bg-color);
    border: none;
    border-radius: 0px;
  }
  &::-moz-range-thumb {
    border: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: transparent;
  }
  &::-moz-range-progress {
    background-color: var(--progress-color);
    height: var(--progress-height);
  }

`

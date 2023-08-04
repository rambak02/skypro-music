import styled, { css } from "styled-components"
import { mainMixin } from "../component/NavMenu/NavMenu.styled"

export const StyledMain = styled.div`
flex: 1 1 auto;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

export const StyledMainCenterBlock = styled.div`
 ${mainMixin}
 width: auto;
 flex-grow: 3;
 padding: 20px 40px 20px 111px;
 flex-direction: column;
`
export const StyledCenterBlockH2 = styled.h2`
font-style: normal;
        font-weight: 400;
        font-size: 64px;
        line-height: 72px;
        letter-spacing: -0.8px;
        margin-bottom: 45px;
`
export const StyledContentTitle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-bottom: 24px;
`
const playlistTitleColMixin = css`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color: #696969;
text-transform: uppercase;
`
export const StyledPlaylistTitleCol1 = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color: #696969;
text-transform: uppercase;
width: 447px;
`
export const StyledPlaylistTitleCol2 = styled(StyledPlaylistTitleCol1)`
width: 321px;
`
export const StyledPlaylistTitleCol3 = styled(StyledPlaylistTitleCol1)`
width: 245px;
`
export const StyledPlaylistTitleCol4 = styled(StyledPlaylistTitleCol1)`
width: 60px;
text-align: end;
`
export const StyledPlaylistTitleSvg = styled.svg`
width: 12px;
height: 12px;
fill: transparent;
stroke: #696969;
`
export const StyledWrapper = styled.div`
width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #383838;
`
export const StyledContainer = styled.div`
max-width: 1920px;
height: 100vh;
margin: 0 auto;
position: relative;
background-color: #181818;
`
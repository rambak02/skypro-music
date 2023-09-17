import React, { Fragment } from 'react'

import { NavMenu } from '../../component/NavMenu/NavMenu'
import { Search } from '../../component/Search/Search'
import { Sidebar } from '../../component/Sidebar/Sidebar'
import { Tracklist } from '../../component/Tracklist/Tracklist'

import SkeletonCardTracklist from '../../component/SkeletonCard/SkeletonCard'
import { Dropdown } from '../../component/Dropdown/Dropdown'
import {
  StyledMainCenterBlock,
  StyledCenterBlockH2,
  StyledWrapper,
  StyledContainer,
  StyledContentTitle,
  StyledPlaylistTitleCol1,
  StyledPlaylistTitleCol2,
  StyledPlaylistTitleCol3,
  StyledPlaylistTitleCol4,
  StyledPlaylistTitleSvg,
  StyledMain,
} from '../../styled/styled'
import { StyledGetTrackError } from './MainPage.styled'
import { GlobalStyle } from '../../styled/global'

export const Main = ({
  music,
  getTracksError,
  loading,
  setCurrentTrack,
  setIsPlaying,
  onLogoutButtonClick,
  isPlaying,
  currentTrack,
}) => {
  return (
    <Fragment>
      <GlobalStyle />

      <StyledWrapper>
        <StyledContainer>
          <StyledMain>
            <NavMenu onLogoutButtonClick={onLogoutButtonClick} />
            <StyledMainCenterBlock>
              <Search />
              <StyledCenterBlockH2>Треки</StyledCenterBlockH2>
              <Dropdown />
              <StyledContentTitle>
                <StyledPlaylistTitleCol1>Трек</StyledPlaylistTitleCol1>
                <StyledPlaylistTitleCol2>ИСПОЛНИТЕЛЬ</StyledPlaylistTitleCol2>
                <StyledPlaylistTitleCol3>АЛЬБОМ</StyledPlaylistTitleCol3>
                <StyledPlaylistTitleCol4>
                  <StyledPlaylistTitleSvg alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                  </StyledPlaylistTitleSvg>
                </StyledPlaylistTitleCol4>
              </StyledContentTitle>

              {getTracksError ? (
                <StyledGetTrackError>{getTracksError}</StyledGetTrackError>
              ) : (
                (loading &&
                  music.map((track) => {
                    return (
                      <Tracklist
                        key={track.id}
                        track={track}
                        setCurrentTrack={setCurrentTrack}
                        setIsPlaying={setIsPlaying}
                        isPlaying={isPlaying}
                        currentTrack={currentTrack}
                      />
                    )
                  })) || <SkeletonCardTracklist />
              )}
            </StyledMainCenterBlock>
            <Sidebar loading={loading} />
          </StyledMain>
        </StyledContainer>
      </StyledWrapper>
    </Fragment>
  )
}

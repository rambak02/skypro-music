import React, { Fragment } from 'react'

import { AudioPlayer } from '../../component/AudioPlayer/AudioPlayer'
import { NavMenu } from '../../component/NavMenu/NavMenu'
import { Search } from '../../component/Search/Search'
import { Sidebar } from '../../component/Sidebar/Sidebar'
import { Tracklist } from '../../component/Tracklist/Tracklist'
import { musicData } from '../../constants'

import SkeletonCardTracklist, {
  SkeletonCardAudioPlayer,
} from '../../component/SkeletonCard/SkeletonCard'
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
import { GlobalStyle } from '../../styled/global'

import { useState, useEffect } from 'react'

export const Main = () => {
  const [music, setMusic] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setMusic([musicData[2]])
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <Fragment>
      <GlobalStyle />

      <StyledWrapper>
        <StyledContainer>
          <StyledMain>
            <NavMenu />
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

              {(!loading &&
                music.map((list, index) => {
                  return <Tracklist key={index} list={list} />
                })) || <SkeletonCardTracklist />}
            </StyledMainCenterBlock>
            <Sidebar loading={loading} />
          </StyledMain>
          {(!loading &&
            musicData
              .find((section) => section.section === 'AudioPlaylist')
              .audios.map((audio, index) => (
                <AudioPlayer
                  key={index}
                  title={audio.title}
                  author={audio.author}
                />
              ))) || <SkeletonCardAudioPlayer />}
        </StyledContainer>
      </StyledWrapper>
    </Fragment>
  )
}

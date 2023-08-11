import { Playlist } from '../Playlist/Playlist'
import { SidebarPersonal } from '../SidebarPersonal/SidebarPersonal'
import { musicData } from '../../constants'
import { SkeletonCardPlaylist } from '../SkeletonCard/SkeletonCard'
import {
  StyledMainSidebar,
  StyledSidebarBlock,
  StyledSidebarList,
} from './Sidebar.styled'

export function Sidebar({ loading }) {
  return (
    <StyledMainSidebar>
      <SidebarPersonal personalName="Sergey.Ivanov" />
      <StyledSidebarBlock>
        <StyledSidebarList>
          {(!loading &&
            musicData
              .find((section) => section.section === 'Sidebar')
              .playlists.map((playlist) => (
                <Playlist
                  id={playlist.id}
                  key={playlist.id}
                  imgUrl={playlist.imgUrl}
                  alt={playlist.alt}
                />
              ))) || <SkeletonCardPlaylist />}
        </StyledSidebarList>
      </StyledSidebarBlock>
    </StyledMainSidebar>
  )
}

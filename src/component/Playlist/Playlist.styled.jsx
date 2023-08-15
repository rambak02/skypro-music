import { styled } from 'styled-components'

export const StyledPlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`
export const StyledPlaylistTrack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const StyledSidebarItem = styled.div`
  width: 250px;
  height: 150px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`
export const StyledSidebarLink = styled.a`
  width: 100%;
  height: 100%;
`
export const StyledSidebarImage = styled.img`
  width: 100%;
  height: auto;
`

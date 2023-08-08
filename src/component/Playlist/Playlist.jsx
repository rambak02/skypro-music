import 'react-loading-skeleton/dist/skeleton.css'
import { StyledSidebarImage, StyledSidebarLink, StyledSidebarItem } from './Playlist.styled'


export function Playlist({imgUrl, alt}) {
    return ( 
                <StyledSidebarItem>
                    <StyledSidebarLink  href="#">
                        <StyledSidebarImage  src= {imgUrl} alt={alt} />
                    </StyledSidebarLink>
                </StyledSidebarItem>
    )}
import 'react-loading-skeleton/dist/skeleton.css'
import { StyledSidebarImage, StyledSidebarItem } from './Playlist.styled'
import { Link } from 'react-router-dom'

export function Playlist({imgUrl, alt, id}) {
    return ( 
                <StyledSidebarItem>
                   
                    <Link  to={`/category/${id}`}>
                    
                        <StyledSidebarImage  src= {imgUrl} alt={alt} />
                      
                    </Link>
                  
                </StyledSidebarItem>
    )}
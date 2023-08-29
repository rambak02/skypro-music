import {
  StyledSidebarAvatar,
  StyledSidebarPersonal,
  StyledSidebarUsername,
} from './SidebarPersonal.styled'
import { UserContext } from '../../contexts/Context'

export function SidebarPersonal() {
  return (
    <StyledSidebarPersonal>
      <UserContext.Consumer>
        {(user) =><StyledSidebarUsername>{user}</StyledSidebarUsername> }
      
      </UserContext.Consumer>
      <StyledSidebarAvatar></StyledSidebarAvatar>
    </StyledSidebarPersonal>
  )
}

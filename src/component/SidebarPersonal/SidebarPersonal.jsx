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
        {(context) =><StyledSidebarUsername>{context.localUser}</StyledSidebarUsername> }
      
      </UserContext.Consumer>
      <StyledSidebarAvatar></StyledSidebarAvatar>
    </StyledSidebarPersonal>
  )
}

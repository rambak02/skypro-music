import { StyledSidebarAvatar, StyledSidebarPersonal, StyledSidebarPersonalName } from "./SidebarPersonal.styled"


export function SidebarPersonal({personalName}) {
    return (
        <StyledSidebarPersonal>
        <StyledSidebarPersonalName>{personalName}</StyledSidebarPersonalName>
        <StyledSidebarAvatar>
            
        </StyledSidebarAvatar>
    </StyledSidebarPersonal>
    )
}
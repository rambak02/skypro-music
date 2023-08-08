import { useState } from "react";
import { StyledBurgerLine, StyledLogoImage, StyledMainNav, StyledMenuItem, StyledMenuLink, StyledMenuList, StyledNavBurger, StyledNavLogo, StyledNavMenu } from "./NavMenu.styled";


export function NavMenu() {
    const [visible, setVisible] = useState(false);
    
    const toggleVisibility = () => setVisible(!visible)
    return ( 
        <StyledMainNav>
        <StyledNavLogo>
            <StyledLogoImage src="img/logo.png" alt="logo"/>
        </StyledNavLogo>
        <StyledNavBurger onClick={toggleVisibility} >
            <StyledBurgerLine></StyledBurgerLine>
            <StyledBurgerLine></StyledBurgerLine>
            <StyledBurgerLine></StyledBurgerLine>
        </StyledNavBurger>
        {visible && ( <StyledNavMenu>
            <StyledMenuList>
                <StyledMenuItem ><StyledMenuLink href="http://">Главное</StyledMenuLink></StyledMenuItem>
                <StyledMenuItem><StyledMenuLink href="http://">Мой плейлист</StyledMenuLink></StyledMenuItem>
                <StyledMenuItem><StyledMenuLink href="http://">Войти</StyledMenuLink></StyledMenuItem>
            </StyledMenuList>
        </StyledNavMenu>)}
       
    </StyledMainNav>
        );
    }
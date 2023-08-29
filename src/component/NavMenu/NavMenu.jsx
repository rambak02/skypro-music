import { useState } from 'react'
import {
  StyledBurgerLine,
  StyledLogoImage,
  StyledMainNav,
  StyledMenuItem,
  StyledMenuLink,
  StyledMenuList,
  StyledNavBurger,
  StyledNavLogo,
  StyledNavMenu,
} from './NavMenu.styled'
import { Link } from 'react-router-dom'

export function NavMenu({onLogoutButtonClick}) {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => setVisible(!visible)
  return (
    <StyledMainNav>
      <StyledNavLogo>
        <StyledLogoImage src="img/logo.png" alt="logo" />
      </StyledNavLogo>
      <StyledNavBurger onClick={toggleVisibility}>
        <StyledBurgerLine></StyledBurgerLine>
        <StyledBurgerLine></StyledBurgerLine>
        <StyledBurgerLine></StyledBurgerLine>
      </StyledNavBurger>
      {visible && (
        <StyledNavMenu>
          <StyledMenuList>
            <StyledMenuItem>
              <StyledMenuLink href="http://"> Главное</StyledMenuLink>
            </StyledMenuItem>
            <StyledMenuItem>
              <Link to="/favorites">
                <StyledMenuLink href="http://">Мой плейлист </StyledMenuLink>
              </Link>
            </StyledMenuItem>
            <StyledMenuItem>
              <Link to="/login">
                <StyledMenuLink onClick={onLogoutButtonClick} >Выйти</StyledMenuLink>
              </Link>
            </StyledMenuItem>
          </StyledMenuList>
        </StyledNavMenu>
      )}
    </StyledMainNav>
  )
}

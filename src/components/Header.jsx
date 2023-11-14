import { HeaderContainer, Icon, Logo } from "./Header.styles";

import logo from '../assets/images/logo.png'


export function Header () {
  return (
    <HeaderContainer>
      <Logo src={logo} />
      
      <Icon />
    </HeaderContainer>
  )
}
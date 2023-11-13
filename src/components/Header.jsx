import { HeaderContainer, Icon, LinkItem, LinkList, Logo } from "./Header.styles";

import logo from '../assets/images/logo.png'


export function Header () {
  return (
    <HeaderContainer>
      <Logo src={logo} />

      <LinkList>
        <LinkItem>Sobre nós</LinkItem>
        <LinkItem>Comece por aqui</LinkItem>
        <LinkItem>Cultos</LinkItem>
        <LinkItem>Células</LinkItem>
      </LinkList>

      <Icon />
    </HeaderContainer>
  )
}
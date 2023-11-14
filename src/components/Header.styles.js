import styled, { css } from "styled-components";
import { List } from "@phosphor-icons/react";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 8px;

  background-color: ${({ theme }) => theme.colors.surface.background};
  
  @media only screen and (min-width: 700px) {
    padding: 1.8rem 2.5rem;
    position: fixed;
    width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(15px);
    z-index: 100000;
  }
`

export const Logo = styled.img`
  width: 100px;
`

export const Icon = styled(List).attrs((({ theme }) => ({
  size: theme.fontSize.lg
})))`
  color: white;

  @media only screen and (min-width: 700px) {
    display: none;
  }
`

export const LinkList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  
  list-style: none;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`

export const LinkItem = styled.li`
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.surface.tertiary};
  }

  ${({theme}) => css`
    font-family: ${theme.fontFamily};
    font-weight: 500;
    font-size: ${theme.fontSize.md}px;
    color: ${theme.colors.text.primary};
  `}
`
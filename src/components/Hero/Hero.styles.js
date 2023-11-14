import styled, { css } from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  padding: 48px 24px;

  height: 100vh;

  background-color: ${({ theme }) => theme.colors.surface.background};
`

export const HeroImageContainer = styled.div``

export const HeroImage1 = styled.img`
  border-radius: 20px;
  position: absolute;
  left: auto;
  top: 25%;
  right: 30%;
  bottom: 0%;
  width: 40%;
  z-index: 1;

  &:hover {
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5)
  }

  @media only screen and (min-width: 700px) {
    width: 30%;
    right: 35%;
  }
`

export const HeroImage2 = styled.img`
  border-radius: 20px;
  position: absolute;
  left: 5%;
  top: 20%;
  right: auto;
  bottom: 0%;
  width: 40%;

  &:hover {
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 1)
  }

  @media only screen and (min-width: 700px) {
    width: 30%;
    left: 10%;
  }
`

export const HeroImage3 = styled.img`
  border-radius: 20px;
  position: absolute;
  left: auto;
  top: 20%;
  right: 5%;
  bottom: 0%;
  width: 40%;

  &:hover {
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 1)
  }

  @media only screen and (min-width: 700px) {
    width: 30%;
    right: 10%;
  }
`

export const HeroText = styled.h1`
  max-width: 500px;
  
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.fontSize.xlg}px;
    font-weight: 700;
    color: ${theme.colors.text.primary};
  `}

`
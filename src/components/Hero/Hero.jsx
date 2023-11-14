import { HeroContainer, HeroImage1, HeroImage2, HeroImage3, HeroImageContainer, HeroText } from "./Hero.styles";

import pastor from '../../assets/images/pastor.jpg'
import maximo from '../../assets/images/maximo.jpg'
import pastora from '../../assets/images/pastora.jpg'

export function Hero () {
  return (
    <HeroContainer>
      <HeroImageContainer>
        <HeroImage1 src={pastor} alt="Foto do pastor pregando" />
        <HeroImage2 src={maximo} alt="Foto do ministro de louvor cantando" />

        <HeroImage3 src={pastora} alt="Foto da pastora pregando" />
      </HeroImageContainer>

    </HeroContainer>
  )
}
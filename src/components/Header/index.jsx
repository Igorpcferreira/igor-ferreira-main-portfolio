import React from 'react';
import { Container, LogoArea, SocialLinksAndThemeButtonArea, Flag } from "./styles";
import BrazilFlagIcon from "../../assets/images/brasil.png";
import USFlagIcon from "../../assets/images/eua.png";
import { ProfileName } from "../profileData/ProfileName";
import { SocialLinks } from "../linksIcons/SocialLinks";
import { ThemeButton } from "../buttons/themeButton";
import { Menu } from "../Menu";
import { useLanguage } from '../../contexts/languageContext';

export const Header = ({ hiddenHeaderSocialLinks, hiddenHeaderLogo }) => {
  const { changeLanguage } = useLanguage();

  return (
    <Container>
      <LogoArea to="/">{!hiddenHeaderLogo && <ProfileName />}</LogoArea>

      <Menu />

      <SocialLinksAndThemeButtonArea>
        {!hiddenHeaderSocialLinks && <SocialLinks size={"1.5rem"} />}
        <ThemeButton size={"1.5rem"} />
        <Flag>
          <img
            src={BrazilFlagIcon}
            alt="Brazil Flag"
            onClick={() => changeLanguage('pt_BR')}
          />
          <img
            src={USFlagIcon}
            alt="US Flag"
            onClick={() => changeLanguage('en_US')}
          />
        </Flag>
      </SocialLinksAndThemeButtonArea>
    </Container>
  );
};
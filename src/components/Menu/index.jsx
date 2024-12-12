import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconResponsiveMenuArea, Nav } from "./styles";
import { CgMenu, CgCloseO } from "react-icons/cg";
import { useLanguage } from "../../contexts/languageContext";

export const Menu = () => {
  const [responsiveMenuIsSelected, setResponsiveMenuIsSelected] =
    useState(false);

  const {language} = useLanguage();

  return (
    <>
      <IconResponsiveMenuArea
        responsiveMenuIsSelected={responsiveMenuIsSelected}
        onClick={() => setResponsiveMenuIsSelected(!responsiveMenuIsSelected)}
      >
        {responsiveMenuIsSelected ? <CgCloseO /> : <CgMenu />}
      </IconResponsiveMenuArea>

      <Nav responsiveMenuIsSelected={responsiveMenuIsSelected}>
        <ul>
          <li>
            <NavLink to="/">{language === 'pt_BR' ? 'INÍCIO' : 'HOME' }</NavLink>
          </li>
          <li>
            <NavLink to="/sobre">{language === 'pt_BR' ? 'SOBRE' : 'ABOUT' }</NavLink>
          </li>
          <li>
            <NavLink to="/skills">{language === 'pt_BR' ? 'HABILIDADES' : 'SKILLS' }</NavLink>
          </li>
          <li>
            <NavLink to="/projetos">{language === 'pt_BR' ? 'PROJETOS' : 'PROJECTS' }</NavLink>
          </li>
          <li>
            <NavLink to="/contato">{language === 'pt_BR' ? 'CONTATO' : 'CONTACT' }</NavLink>
          </li>
        </ul>
      </Nav>
    </>
  );
};

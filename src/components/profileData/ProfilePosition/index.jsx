import React from 'react';
import { Position } from "./styles";
import { useLanguage } from '../../../contexts/languageContext';

export const ProfilePosition = () => {
  const { language } = useLanguage();

  const getPositionText = () => {
    if (language === 'pt_BR') {
      return 'Desenvolvedor FullStack | Engenheiro de Software';
    }
    return 'FullStack Developer | Software Engineer';
  };

  return (
    <Position layoutId="profile-position" transition={{ duration: 0.7 }}>
      {getPositionText()}
    </Position>
  );
};
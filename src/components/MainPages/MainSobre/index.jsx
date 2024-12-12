import React from 'react';
import { Container, ContainerData, ImageAndLinks, HelloMessage, TextAndButton } from './styles';
import { ProfileImage } from '../../profileData/ProfileImage';
import { SocialLinks } from '../../linksIcons/SocialLinks';
import { PrimaryButton } from '../../buttons/PrimaryButton';
import { useLanguage } from '../../../contexts/languageContext';

export const MainSobre = () => {
  const { language } = useLanguage();

  const getText = () => {
    if (language === 'pt_BR') {
      return (
        <>
          Bem-vindo ao meu portfólio, um espaço curado onde apresento meu trabalho mais
          recente e compartilho insights sobre minha jornada na tecnologia.
          <br />
          <br />
          Com mais de 3 anos de experiência, sou especializado em Desenvolvimento FullStack,
          combinando expertise técnica com uma paixão por criar soluções inovadoras e impactantes.
          Guiado por uma mentalidade de crescimento, valorizo aprender com os outros e enfrentar 
          novos desafios. Minha habilidade em resolver problemas complexos com abordagens criativas 
          reflete meu compromisso em entregar resultados excepcionais em cada projeto que realizo.
          <br />
          <br />
          Para uma visão completa do meu histórico profissional e acadêmico, sinta-se à vontade para
          baixar meu currículo completo pelo link abaixo.
        </>
      );
    }
    return (
      <>
        Welcome to my portfolio, a curated space where I showcase my most
        recent work and share insights about my journey in technology.
        <br />
        <br />
        With over 3 years of experience, I specialize in FullStack Development,
        combining technical expertise with a passion for creating innovative and
        impactful solutions. Driven by a growth mindset, I thrive on learning from
        others and embracing new challenges. My ability to solve complex problems
        with creative approaches underscores my commitment to delivering outstanding
        results in every project I undertake.
        <br />
        <br />
        For a comprehensive view of my professional background and academic
        achievements, please feel free to download my complete resume
        available via the link below.
      </>
    );
  };

  return (
    <Container>
      <ContainerData>
        <ImageAndLinks
          initial={{ x: -5, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <ProfileImage />
          <SocialLinks size={'1.5rem'} />
        </ImageAndLinks>

        <HelloMessage
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3>{language === 'pt_BR' ? 'Olá!😁' : 'Hi!😁' }</h3>
          <p></p>
        </HelloMessage>

        <TextAndButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p>{getText()}</p>

          <a
            href={language === 'pt_BR' 
              ? "https://docs.google.com/document/d/1M0dQTpPBWDKO_Ms-1iTL9KGluk16zu9h8zd_EKJp0GI/edit?tab=t.0" 
              : "https://docs.google.com/document/d/19q7po8umRVir0K4nmJFz1Sx-y4pvt_UC0ImK-vxN0aQ/edit?usp=sharing"}
            target="_blank"
          >
            <PrimaryButton>{language === 'pt_BR' ? 'Currículo' : 'Resume' }</PrimaryButton>
          </a>
        </TextAndButton>
      </ContainerData>
    </Container>
  );
};
import { Container } from './styles';
import { useLanguage } from '../../contexts/languageContext';

export const Footer = () => {
  const { language } = useLanguage();
  return (
    <Container>
      <p>
        {language === 'pt_BR'
          ? 'Desenvolvido por 👉 '
          : 'Developed by 👉 '}
        <a href="https://www.linkedin.com/in/igor-cferreira/" target="_blank">
          Igor Ferreira
        </a>
      </p>
    </Container>
  );
};

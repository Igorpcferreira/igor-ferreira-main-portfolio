import { Container } from "./styles";
import { SocialIconLink } from "../SocialIconLink";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const SocialLinks = ({ size }) => {
  return (
    <Container layoutId="social-links-together" transition={{ duration: 0.7 }}>
      <SocialIconLink href={"https://www.linkedin.com/in/igor-cferreira/"}>
        <FaLinkedin size={size} />
      </SocialIconLink>
      <SocialIconLink href={"https://github.com/Igorpcferreira"}>
        <FaGithub size={size} />
      </SocialIconLink>
    </Container>
  );
};

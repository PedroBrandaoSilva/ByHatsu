import { Container, Socials, IconLink, Title, Email } from "./style";
import { FaInstagram, FaTiktok } from "react-icons/fa";

function Contact() {
  return (
    <Container>

        <Title>
            Visite nossas redes sociais
        </Title>
      

      <Socials>
        <IconLink
          href="https://www.instagram.com/byhatsu/"
          target="_blank"
        >
          <FaInstagram />
        </IconLink>

        <IconLink
          href="https://www.tiktok.com/@byhatsu"
          target="_blank"
        >
          <FaTiktok />
        </IconLink>
      </Socials>
      <Email href="mailto:byhatsu.br@gmail.com" target="_blank">
        byhatsu.br@gmail.com
      </Email>
    </Container>
  );
}

export default Contact;
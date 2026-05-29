import { Container, Socials, IconLink, Title } from "./style";
import { FaInstagram, FaTiktok } from "react-icons/fa";

function Contact() {
  return (
    <Container>

        <Title>
            Visite nossas redes sociais
        </Title>
      

      <Socials>
        <IconLink
          href="#"
          target="_blank"
        >
          <FaInstagram />
        </IconLink>

        <IconLink
          href="#"
          target="_blank"
        >
          <FaTiktok />
        </IconLink>
      </Socials>
    </Container>
  );
}

export default Contact;
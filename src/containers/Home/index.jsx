import Header from "../../components/Header";
import { Container, Content, Video } from "./styles";
import About from "../../components/About/About";
import SwiperComp from "../../components/SwiperComp";
import Contact from "../../components/Contact";



function Home() {


  return (
    <Container>
      <Header />
      <Video autoPlay loop muted
        src="https://res.cloudinary.com/dfozzfg3u/video/upload/v1778118474/07f82425-86c3-4abb-be0b-48dff9052fb5_hxnepi.mov"></Video>
      <Content>
        <About />
        <SwiperComp/>
      </Content>
      <Contact />

    </Container>

  )
}

export default Home;

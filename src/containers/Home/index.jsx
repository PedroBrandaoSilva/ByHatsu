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
        src="https://drive.google.com/file/d/1c1MumUUSN9KO7zc_j9mq529Vt1Lv8kup/view?usp=drive_link"></Video>
      <Content>
        <About />
        <SwiperComp/>
      </Content>
      <Contact />

    </Container>

  )
}

export default Home;

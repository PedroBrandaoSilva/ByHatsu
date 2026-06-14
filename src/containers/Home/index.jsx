import Header from "../../components/Header";
import { Container, Content, Video } from "./styles";
import About from "../../components/About/About";
import SwiperComp from "../../components/SwiperComp";
import Contact from "../../components/Contact";



function Home() {


  return (
    <Container>
      <Header />
      <Video autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        controls={false}
        disablePictureInPicture
        src="https://res.cloudinary.com/dfozzfg3u/video/upload/v1781444069/Home_faryp2.mp4"></Video>
      <Content>
        <About />
        <SwiperComp />
      </Content>
      <Contact />

    </Container>

  )
}

export default Home;

import { useState, useMemo } from "react";
import Header from "../../components/Header";
import Feedbacks from "../../components/Feedbacks"
import {Container, Content, Video } from "./styles";
import About from "../../components/About/About";

function Home() {
  

  return (
    <Container>
      <Header/>
      {/* <Video autoPlay loop muted
      src="https://res.cloudinary.com/dfozzfg3u/video/upload/v1778118474/07f82425-86c3-4abb-be0b-48dff9052fb5_hxnepi.mov"></Video> */}
      <Content>
        <About/>
        <Feedbacks/>
        
      </Content>
     
    </Container>
      
  )
}

export default Home;

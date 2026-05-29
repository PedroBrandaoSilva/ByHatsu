import { Container, Title } from "./style";
import { useState, useEffect } from "react";

// carroussel documents
import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {images} from "../../assets/works";
import { Swiper, SwiperSlide } from "swiper/react";
// carroussel documents

function SwiperComp() {

  const [slideperview, setSlideperview] = useState(2);


  useEffect(() => {
    function handleResize(){
      if (window.innerWidth < 767){
        setSlideperview(1);
      }else if (window.innerWidth < 1279){
        setSlideperview(2);
      }else{
        setSlideperview(3);
      }
    }


    handleResize()

    window.addEventListener("resize", handleResize)
    
    return() => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])


  return (
    <Container>

        <Title>
          Nossos Trabalhos
        </Title>
      
        <Swiper
          spaceBetween={10}
          slidesPerView={slideperview}
          pagination={{clickable: true}}
          navigation
          loop={true}
          autoplay={{delay: 3000}}
          className="swiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img 
              src={img} 
              alt="Slider" 
              className="slider-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>

    </Container>

  )
}

export default SwiperComp;

import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 30px auto;
    padding: 20px;
    border-radius: 15px;


    .swiper{
        width: 100%;
        .swiper-button-next,
        .swiper-button-prev {
            color: #fff;
            

            

            &:hover{
                color:#5512a1
            }

            
            
        }

        .swiper-pagination {
            color:#fff


            
        }
        .swiper-pagination-bullet {
            background: #fff;
            opacity: 1;
        }

        .swiper-pagination-bullet-active {
            background: #5512a1;
        }


        
    }

    img.slider-image {
        width: 100%;
        height: 800px;
        object-fit: cover;
        border-radius: 50px;



        @media (max-width: 600px){
            width: 100%;
            height: 700px
        }
    }


    
`

export const Title = styled.h2`
    color: #fff;
    font-size: 40px;
    text-align: center;
    margin-bottom: 10rem;

    @media (max-width: 1279px) {
        font-size: 35px;
        margin-bottom: 7rem;
    }
    @media (max-width: 620px) {
        font-size: 32px;
        margin-bottom: 7rem;
    }
    @media (max-width: 560px) {
        font-size: 26px;
        margin-bottom: 5rem;
    }
`  



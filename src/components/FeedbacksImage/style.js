import styled from "styled-components";

export const Container = styled.div`
    
`
export const Title = styled.div`
    margin: 10rem auto 0;
    width: 60%;

    h2 {
        font-size: 30px;
        color: #fff;
        text-align: center;
    }

    @media (max-width: 567px) {
        width: 80%;

        h2 {
            font-size: 20px;
        }
    }
`
export const ImagesContainers = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin: 5rem auto;
    
    @media (max-width: 567px) {
        grid-template-columns: 1fr;
        
    }

    img {
    width: 100%;
    border-radius: 20px;
    transition: all 0.4s ease;
    }

    
    &:hover img {
        filter: blur(4px);
        opacity: 0.5;
    }

    img:hover {
        filter: blur(0);
        opacity: 1;
        transform: scale(1.05);
        z-index: 2;
    }

    @media (max-width: 567px) {
        &:hover img {
            filter: blur(0);
            opacity: 1;
        }

        img:hover {
            transform: scale(1);
            z-index: 2;
        }
    }
    
`

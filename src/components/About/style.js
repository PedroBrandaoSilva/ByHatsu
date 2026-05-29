import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 10rem auto 20rem;
    gap: 20px;
    color: #fff;

    @media (max-width: 814px) {
        width:100%;
        margin: 1rem 0 10rem 
    }
`

export const Title = styled.h2`
    font-size: 40px;
    background-color: #5512a1;
    width: 100%;
    margin: 0 auto 5rem;
    border-radius: 40px;

    @media (max-width: 1275px) {
       margin-bottom: 5rem;
        
    }

    @media (max-width: 970px) {
        font-size: 30px;
        margin-bottom: 3rem;
    }
    
    @media (max-width: 560px) {
        font-size: 24px;
    }
    @media (max-width: 420px) {
        font-size: 14px;
    }

`

export const Content = styled.p`
    font-size: 30px;

    @media (max-width: 1275px) {
        font-size: 26px;
        
    }
    @media (max-width: 970px) {
        font-size: 24px;
    }
    @media (max-width: 800px) {
        font-size: 22px;
    }
    
    @media (max-width: 632px) {
        font-size: 20px;
    }
    @media (max-width: 590px) {
        font-size: 18px;
    }
`

export const ImagesContainer = styled.div`


`


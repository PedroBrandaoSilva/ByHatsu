import styled from "styled-components";

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    text-align: center;
    color: #fff;

    @media (max-width: 320px) {
        grid-template-columns: 1fr;
    }
`
export const Card = styled.div`
    border-radius: 15px;
    padding: 15px;
`
export const ImageCard = styled.img`
    max-width: 100%;
    height: 350px;
    border-radius: 10px;

    @media (max-width: 320px) {
        width: 100%;
    }
`
export const Price = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #2df60a;
    
`
export const Title = styled.h2``
export const SubTitle = styled.h3``
export const Description = styled.p``
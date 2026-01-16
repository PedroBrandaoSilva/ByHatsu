import styled from "styled-components";

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    text-align: center;
`
export const Card = styled.div`
    background-color: #fff;
    border-radius: 15px;
    padding: 15px;
`
export const ImageCard = styled.img`
    max-width: 200px;
    height: 200px;
    border-radius: 10px;
`
export const Title = styled.h2``
export const SubTitle = styled.h3``
export const Description = styled.p``
import styled from "styled-components";

export const Container = styled.div`
    
`
export const Title = styled.h2`
    font-size: 30px;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
`
export const ImagesContainers = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin: 8rem auto;
    
    @media (max-width: 567px) {
        grid-template-columns: 1fr;
    }

    img {
        width:100%;
        border-radius: 20px;
    }
    
`

import styled, {keyframes} from 'styled-components'

// \\animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
// \\animatios />
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
export const Content = styled.div`
    width: 50%;
    background-color: #303031;
    border: 1px solid #fff;
    margin-bottom: 1rem;


    @media (max-width: 750px) {
        width: 80%;
    }

`
export const Title = styled.h2`
    color: #fff;
    margin: 6rem auto 3rem;
`
export const ButtonQuestion = styled.button`
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    width: 100%;
    padding: 1rem;
    position: relative;
    cursor: pointer;
    transition: opacity 0.6s ease;

    &:hover {
        opacity: 0.4;
        border: 2px solid #fff;
    }
    
    svg {
        color: #fff;
        font-size: 25px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0.1rem;
        
    }
    `
export const Answer = styled.p`
    color: #efc908;
    padding: 0.8rem;
    text-align: left;
    animation: ${fadeIn} 0.8s ease;
`



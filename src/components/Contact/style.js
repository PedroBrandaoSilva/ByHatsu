import styled from "styled-components";


export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 10px 0;
    background-color: #242323

    
`
export const Title = styled.h3`
    font-size: 24px;
    color: #fff;
    text-align: center;

    @media (max-width: 621px) {
        font-size: 20px;
    }
`



export const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const IconLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  background: #111;
  color: #fff;
  transition: 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    border-color: #5512a1;
    box-shadow: 0 0 10px #5512a1;
  }
`;
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Modal = styled.div`
  position: relative;
  max-width: 600px;
  width: 90%;
  @media (max-width: 739px) {
    max-width: 400px;
  }
  @media (max-width: 483px) {
    max-width: 300px;
  }
  
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 12px;

  @media (max-width: 739px) {
    width: 80%;
    display: block; 
    margin: 0 auto;
  }
  @media (max-width: 483px) {
    width: 80%;
  }
  `;

export const Close = styled.button`
  position: absolute;
  top: -30px;
  right: 0;
  background: none;
  border: none;
  color: #fff;
  font-size: 26px;
  cursor: pointer;
`;

export const Arrow = styled.button`
  position: absolute;
  top: 50%;
  ${props => props.left ? "left: -40px" : "right: -40px"};
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 40px;
  color: #fff;
  cursor: pointer;

  @media (max-width: 739px) {
    ${props => props.left ? "left: -20px" : "right: -20px"};
  }
  @media (max-width: 483px) {
    ${props => props.left ? "left: 0" : "right: 0"};
  }
`;
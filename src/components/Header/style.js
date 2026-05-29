import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #242323;
  position: fixed;
  width: 100%;
  height: 4rem;
  top: 0;
  z-index: 1000;
`;

export const Image = styled.img`
  max-width: 70px;
  margin-left: 1rem;
  position: fixed;
  cursor: pointer;
  transition: all 0.6s ease;

  @media (max-width: 850px) {
    position: static;
    margin-left: 0;
  }

  &:hover{
    transform: translateY(5px) scale(1.2);
  }

  &:active{
    transform: rotate(50deg)
  }

  
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 auto;
  gap: 60px;


  li {
    padding: 1px;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    
    a{
      position: relative;
      text-decoration: none;
      color: #fff;
      font-size: 17px;
      

      &:hover {
        color: #5512a1;
        
      }

      &::after {
      content: "";
      width: 0;
      height: 2px;
      background-color: #5512a1;
      position: absolute;
      left: 0;
      bottom: -2px;
      transition: 0.2s ease-in ;

      }

      &:hover::after {
        width: 100%;
      }

      
    }

    

    

  }
  

  @media (max-width: 800px) {
  position: absolute;
  top: 4rem;
  right: 50%;
  width: 100%;
  transform: translateX(50%);
  background-color: #303031;
  flex-direction: column;

  gap: 8px;
  padding: 16px;
  margin-right: 0;

  max-height: ${({ $isOpen }) =>
    $isOpen ? "calc(100vh - 70px)" : "0"};

  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};

  visibility: ${({ $isOpen }) =>
    $isOpen ? "visible" : "hidden"};

  pointer-events: ${({ $isOpen }) =>
    $isOpen ? "auto" : "none"};

  overflow-y: auto;
  overflow-x: hidden;

  transition:
    max-height 0.6s ease,
    opacity 0.4s ease,
    visibility 0s linear ${({ $isOpen }) =>
    $isOpen ? "0s" : "0.8s"};


    li {
    background-color: rgba(255, 255, 255, 0.08);
    text-align: center;
    padding: 14px;
    border-radius: 6px;
  }

  li:hover {
    background-color: rgba(255, 255, 255, 0.18);
  }
}


`;



export const Burger = styled.div`
  display: none;
  width: 36px;
  height: 26px;
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 5px;
    transition: 0.35s ease;
    right: 1rem;
  }

  span:nth-child(1) {
    top: ${({ $isOpen }) => ($isOpen ? "11px" : "0")};
    background-color: ${({ $isOpen }) => ($isOpen ? "#e81f1f" : "#fff")};
    transform: ${({ $isOpen }) =>
    $isOpen ? "rotate(45deg)" : "rotate(0)"};
  }
  
  span:nth-child(2) {
    top: 11px;
    opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
  }

  span:nth-child(3) {
    top: ${({ $isOpen }) => ($isOpen ? "11px" : "22px")};
    background-color: ${({ $isOpen }) => ($isOpen ? "#e81f1f" : "#fff")};
    transform: ${({ $isOpen }) =>
    $isOpen ? "rotate(-45deg)" : "rotate(0)"};
    
  }

  @media (max-width: 800px) {
    display: block;
  }
`;

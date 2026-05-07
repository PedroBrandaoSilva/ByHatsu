import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: #303031;
  position: relative;
`;

export const Image = styled.img`
  max-width: 100px;
  margin-left: 2rem;

  @media (max-width: 645px) {
    margin-left: 0;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  margin-right: 50%;
  transform: translateX(50%);
  display: flex;
  gap: 30px;


  li {
    padding: 1px;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    
    a{
      text-decoration: none;
      color: #fff;
      font-size: 16px;
    }
  }
  

  @media (max-width: 645px) {
  position: absolute;
  top: 100px;
  right: 50%;
  width: 100%;
  background-color: #2d116b;
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
    right: 2rem;
  }

  span:nth-child(1) {
    top: ${({ $isOpen }) => ($isOpen ? "11px" : "0")};
    transform: ${({ $isOpen }) =>
    $isOpen ? "rotate(45deg)" : "rotate(0)"};
  }

  span:nth-child(2) {
    top: 11px;
    opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
  }

  span:nth-child(3) {
    top: ${({ $isOpen }) => ($isOpen ? "11px" : "22px")};
    transform: ${({ $isOpen }) =>
    $isOpen ? "rotate(-45deg)" : "rotate(0)"};
  }

  @media (max-width: 645px) {
    display: block;
  }
`;

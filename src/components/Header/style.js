import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2d116b;
  padding: 15px;
  position: relative;
`;

export const Image = styled.img`
  max-width: 120px;
  margin-left: 10rem;

  @media (max-width: 645px) {
    margin-left: 0;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  margin-right: 5rem;

  li {
    padding: 10px;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }
  

  @media (max-width: 645px) {
  position: absolute;
  top: 60px;
  right: 0;
  width: 50%;
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
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 35px;
    height: 4px;
    background-color: #fff;
    border-radius: 5px;
  }

  @media (max-width: 645px) {
    display: flex;
  }
`;

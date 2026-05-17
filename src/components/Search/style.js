import styled from "styled-components";



export const InputSearch = styled.input`
    width: 50%;
    padding: 10px;
    margin: 20px 0;
    font-size: 20px;
    border-radius: 15px;
    border: 1px solid #111;

    @media (max-width: 741px) {
        width: 80%; 
        margin-top: 10px;
    }
    @media (max-width: 361px) {
        font-size: 13px;
        margin: 20px 0;
    }
    @media (max-width: 320px) {
        font-size: 13px;
        margin: 50px 0 20px;
    }
`

export const Select = styled.select`
    border: none;
    margin-left: 1rem;
    padding: 10px;
    border-radius: 15px;
    background-color: #242323;
    color: #fff;
    cursor: pointer;
    
    @media (max-width: 361px) {
        padding: 5px;
        font-size: 13px;
        
    }
    @media (max-width: 320px) {
        padding: 6px;
        font-size: 10px;
        width: 40%;
    }
    
    
    
`
export const Option = styled.option`
  background: #181818;
  color: #fff;
 
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-top: 2rem;

    @media (max-width: 741px) {
        flex-direction: column;
        width: 100%;
    }

`
export const SelectContainer = styled.div`
    
`
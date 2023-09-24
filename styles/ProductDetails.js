import { styled } from "styled-components";

export const DetailsStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 3rem 0 5rem 0;
    img {
        width: 40%;
    }
`;

export const ProductInfo = styled.div`
    color: #FFF6E0;
    width: 40%;
    button{
        font-size: 1rem;
        font-weight: 300;
        padding: 0.5rem;
        cursor: pointer;
    }
`;

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0rem;
    
    button{
        background: transparent;
        border: none;
        display: flex;
        font-size: 1.5rem;
    }
    
    p{
        text-align: center;
    }

    span{
        color: #D8D9DA;
    }
    
    svg{
        color: #D8D9DA;
        cursor: pointer;
    }
`;

export const Buy = styled.button`
    width: 100%;
    font-weight: 500;
      background-color: #61677A;
    color: #fff;
    font-size: 1.2rem;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.5s;

    &:hover {
        color: #222;
        background-color: #D8D9DA;
    }
`
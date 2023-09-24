import { styled } from "styled-components";

export const Logo = styled.p`
  font-size: 1.5rem;
  margin: 0;
    text-decoration:none;
    color: #E8F1F5;
    font-family: 'Gloock', serif;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
export const NavStyles = styled.div`
    a{
        text-decoration:none;
        color: #E8F1F5;

    }
    color: #E8F1F5;
    min-height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    a{
        font-size: 1.2rem;
    }
`;

export const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  width:40%;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavLink = styled.li`
  font-size: 1.2rem;
  cursor: pointer;
  color: #E8F1F5;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.5rem;
  }
`; 

export const NavItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    div{
        margin-left: 3rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h3{
        font-size: 1rem;
        padding: 0.25rem;
        color: #E8F1F5;
    }
    svg{
        color: #E8F1F5;
        font-size: 1.2rem;
        cursor: pointer;
    }
    span{
        background: #ff2626;
        border-radius: 50%;
        color: white;
        position: absolute;
        width: 1.1rem;
        height: 1.1rem;
        font-size: 0.75rem;
        top: -20%;
        right: -10%;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;

    }
`;
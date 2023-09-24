import styled from "styled-components";

const { motion } = require('framer-motion');

export const CartWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  `;
  
  export const CartStyle = styled(motion.div)`
  background: var(--primary);
  width: 30%;
  padding: 1rem 3rem;
  overflow-y: scroll;
  position: relative;
`;

export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 1.5rem;
  margin: 1.5rem 0rem;
  color: #222;
  img {
    width: 6rem;
  }
`;

export const CardInfo = styled(motion.div)`
  width: 50%;
  div {
    display: flex;
    justify-content: space-between;
    color: #222;
  }
`;

export const EmptyStyle = styled(motion.div)`
  /* For the empty cart */
  position: absolute;
  top: 0;
  /*  */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
  svg {
    font-size: 6rem;
    color: var(--secondary);
  }
`;

export const Checkout = styled(motion.div)`
  h3{
    font-size: 1.2rem;
  }
  button {
    background: #D8D9DA;
    padding: 0.5rem 1rem;
    width: 100%;
    // color: #222;
    margin-top: 2rem;
    // background-color: #61677A;
    color: #fff;
    font-size: 1.2rem;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  
    &:hover {
        color: #999;
      background-color: #D8D9DA;
    }
  }
`;

export const Cards = styled(motion.div)``;
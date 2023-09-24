import { styled } from "styled-components";

export const FAQContainer = styled.div`
margin: auto;
width: 60%;
color: #fff;
padding: 20px;
border-radius: 10px;
font-weight: 200;
`;

export const FAQItem = styled.div`
margin-bottom: 20px;
text-align: left;
`;

export const Question = styled.p`
text-align: center;
  font-size: 1.2rem;
  margin: 0;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;

  &:hover {
      color: #aaa;
  }
`;

export const Answer = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  font-weight:100;
  display: ${props => (props.open ? 'block' : 'none')};
`;
import styled from 'styled-components';

export const TestimonialContainer = styled.div`
color: #fff;
max-width: 600px;
margin: 0 auto;
padding: 5rem 0;
height: 40vh;
display: flex;
flex-direction: column;
justify-items: space-between;
text-align: center;
`;

export const TestimonialText = styled.p`
font-size: 1.2rem;
`;

export const TestimonialAuthor = styled.p`
font-size: 1rem;
font-weight: bold;
margin-top: 10px;
`;

export const SliderControls = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
`;

export const SlideButton = styled.button`
transition: color 0.3s;

&:hover {
  border-radius: 100%;
  color: #aaa;
}
background: none;
border: none;
cursor: pointer;
padding: 10px;
font-size: 1.2rem;
margin: 0 10px;
`;
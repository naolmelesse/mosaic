import React, { useState } from 'react';
import styled from 'styled-components';
import { GrNext, GrPrevious } from "react-icons/gr";

const TestimonialContainer = styled.div`
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

const TestimonialText = styled.p`
  font-size: 1.2rem;
`;

const TestimonialAuthor = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 10px;
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  `;
  
  const SlideButton = styled.button`
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

const testimonials = [
  {
    text: 'I love the art on this website! Such a great collection.',
    author: 'John Doe',
  },
  {
    text: 'MOSAIC is my go-to place for discovering new artists and artworks.',
    author: 'Jane Smith',
  },
  {
    text: 'The purchasing process is so smooth and secure. I\'m a happy customer.',
    author: 'Alice Johnson',
  },
  // Add more testimonials here
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <TestimonialContainer>
      <TestimonialText>{testimonials[currentSlide].text}</TestimonialText>
      <TestimonialAuthor>- {testimonials[currentSlide].author}</TestimonialAuthor>
      <SliderControls>
        <SlideButton onClick={prevSlide}><GrPrevious/></SlideButton>
        <SlideButton onClick={nextSlide}><GrNext/></SlideButton>
      </SliderControls>
    </TestimonialContainer>
  );
};

export default TestimonialSlider;

import React, { useState } from 'react';
import { TestimonialText, TestimonialContainer, TestimonialAuthor, SliderControls, SlideButton } from '@/styles/Testimonial';
import { GrNext, GrPrevious } from "react-icons/gr";



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
      <h2 align="center">Testimonials</h2>
      <br />
      <br />
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

import React from 'react';
import styled from 'styled-components';

const LandingContainer = styled.div`
background-blend-mode: normal;
  background-image: url('/young-woman-who-is-posing-covered-with-black-paint.jpg');s
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  margin-bottom: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`;

const BrandName = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: 'Gloock', serif;
  font-weight:200;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const CallToAction = styled.button`
  background-color: #61677A;
  color: #fff;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
      color: #222;
    background-color: #D8D9DA;
  }
`;

export default function LandingPage(){
  return (
    <LandingContainer>
      <BrandName>MOSAIC</BrandName>
      <Description>Your Destination for Artistic Inspiration</Description>
      <CallToAction>Explore Artworks</CallToAction>
    </LandingContainer>
  );
};


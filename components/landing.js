import React from 'react';
import { LandingContainer, BrandName, Description, CallToAction } from '@/styles/Landing';



export default function LandingPage(){
  return (
    <LandingContainer>
      <BrandName>MOSAIC</BrandName>
      <Description>Your Destination for Artistic Inspiration</Description>
      <CallToAction>Explore Artworks</CallToAction>
    </LandingContainer>
  );
};


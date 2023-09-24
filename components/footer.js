import styled from 'styled-components';
import { SlSocialFacebook, SlSocialInstagram, SlSocialPintarest, SlSocialTwitter } from "react-icons/sl";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const CopyrightText = styled.p`
  margin: 1rem 0 0.5rem 0;
  font-size: 0.8rem;
`;

const SocialLinks = styled.div`
  margin-top: 10px;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.2rem;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const AdditionalLinks = styled.div`
  margin-top: 20px;
`;

const AdditionalLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;

  transition: 0.3s;

  &:hover {
      color: #aaa;
  }
`;

export default function Footer(){
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="#"><SlSocialPintarest/></SocialLink>
        <SocialLink href="#"><SlSocialInstagram/></SocialLink>
        <SocialLink href="#"><SlSocialFacebook/></SocialLink>
        <SocialLink href="#"><SlSocialTwitter/></SocialLink>
      </SocialLinks>
      <AdditionalLinks>
        <AdditionalLink href="#">Terms of Service</AdditionalLink>
        <AdditionalLink href="#">Privacy Policy</AdditionalLink>
        {/* Add more additional links as needed */}
      </AdditionalLinks>
      <CopyrightText>&copy; 2023 MOSAIC. All rights reserved.</CopyrightText>
    </FooterContainer>
  );
};


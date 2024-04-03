'use client';

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.medium} 0;
  text-align: center;
`;

const FooterNav = styled.nav`
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

const FooterLink = styled.a`
  margin: 0 ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;

const SocialLinks = styled.div`
  margin: ${({ theme }) => theme.spacing.medium} 0;

  a {
    margin: 0 ${({ theme }) => theme.spacing.small};
    color: ${({ theme }) => theme.colors.textSecondary};
    &:hover {
      color: ${({ theme }) => theme.colors.hover};
    }
  }
`;

const CopyRightText = styled.p`
  margin-top: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterNav>
        <FooterLink href="#">Home</FooterLink>
        <FooterLink href="#">About Us</FooterLink>
        <FooterLink href="#">Services</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterNav>
      <SocialLinks>
        {/* Update these links to point to your social media profiles */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </SocialLinks>
      <CopyRightText>© {new Date().getFullYear()} CryptoConduit. All rights reserved.</CopyRightText>
    </FooterContainer>
  );
};

export default Footer;

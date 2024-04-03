import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from '../apolloClient';
import { ThemeProvider } from 'styled-components';
import theme from '../assets/styles/theme';
import Navbar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import styled from 'styled-components';

const apolloClient = createApolloClient();

// Styled component for the main content
const MainContent = styled.main`
  text-align: center; // Center-align all content
`;

// Styled component for the main heading
const MainHeading = styled.h1`
  margin-bottom: 20px; // Add margin at the bottom for spacing
`;

export default function HomePage() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <div className="container">
          <Navbar />
          <MainContent>
            <MainHeading>Welcome to Crypto Conduit</MainHeading> {/* Apply the styled component */}
            <p>Your one-stop hub for all things crypto.</p>
            {/* Clerk components to show sign-in/sign-out button */}
            <SignedIn>
              <p>You are signed in!</p>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <p>You are signed out. Please sign in!</p>
              <UserButton />
            </SignedOut>
          </MainContent>
          <Footer />
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
}

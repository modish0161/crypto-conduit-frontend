// pages/index.tsx
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from '../apolloClient';
import { ThemeProvider } from 'styled-components';
import theme from '../assets/styles/theme';
import Navbar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const apolloClient = createApolloClient();

export default function HomePage() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <div className="container">
          <Navbar />
          <main>
            <h1>Welcome to Crypto Conduit</h1>
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
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
}

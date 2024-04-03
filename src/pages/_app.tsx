// _app.tsx
import { ClerkProvider } from '@clerk/nextjs';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyles';
import theme from '../assets/styles/theme';
import { createApolloClient } from '../apolloClient';
import type { AppProps } from 'next/app';
import Header from '../components/common/Header';

const apolloClient = createApolloClient();

// Ensure your Clerk Frontend API is specified in your environment variables
const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ClerkProvider frontendApi={clerkFrontendApi}>
            <ApolloProvider client={apolloClient}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Header /> {/* This is rendered on every page */}
                    <Component {...pageProps} />
                </ThemeProvider>
            </ApolloProvider>
        </ClerkProvider>
    );
}

export default MyApp;

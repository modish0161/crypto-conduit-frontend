import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from '../apolloClient';
import { ThemeProvider } from 'styled-components';
import theme from '../assets/styles/theme';
import { Input, Button, CardTitle, CardHeader, CardContent, Card } from '../components/user-interface';
import { ResponsiveLine } from "@nivo/line";

import FlagIcon from '../components/icons/FlagIcon';
import SettingsIcon from '../components/icons/SettingsIcon';
import UsersIcon from '../components/icons/UsersIcon';

const apolloClient = createApolloClient();

export default function HomePage() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <div className="bg-black text-white min-h-screen">
          <nav className="sticky top-0 bg-[#1a1a1a] py-4 px-8 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <FlagIcon className="text-pink-600 h-8 w-8" />
              <Input placeholder="Search Cryptocurrency" type="search" />
            </div>
            <div className="flex items-center space-x-4">
              <UsersIcon className="text-pink-600 h-6 w-6" />
              <SettingsIcon className="text-pink-600 h-6 w-6" />
              <Button>Toggle Dark/Light</Button>
            </div>
          </nav>
          <header className="text-center py-12">
            <h1 className="text-3xl font-bold mb-4">Welcome to Crypto Conduit</h1>
            <Button>Get Started</Button>
          </header>
          <section className="px-8 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Bitcoin Tracker</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Implement LineChart component here */}
                </CardContent>
              </Card>
              {/* Repeat for other cards */}
            </div>
          </section>
          <section className="px-8 py-4">
            {/* Implement TimeseriesChart component here */}
          </section>
          <footer className="bg-[#1a1a1a] py-8 text-center">
            <p>Crypto Conduit © 2023. All rights reserved.</p>
          </footer>
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
}

// Add definitions for FlagIcon, SettingsIcon, UsersIcon, LineChart, and TimeseriesChart as necessary.

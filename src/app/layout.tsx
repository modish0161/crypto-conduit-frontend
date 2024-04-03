// layout.tsx
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react';
import Head from 'next/head';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <ClerkProvider>
      <>
        <Head>
          <title>{title}</title>
          {/* Other head elements like meta tags can be included here */}
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    </ClerkProvider>
  );
};

export default Layout;

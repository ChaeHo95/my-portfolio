import type { Metadata } from 'next';
import React, { ReactNode } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Roboto } from 'next/font/google';
import ClientThemeProvider from '@/components/ClientThemeProvider';
import '@/assets/styles/index.css';
import Header from '@/components/Haeder';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'My Portfolio Site',
  description: 'A portfolio showcasing my projects, skills, and experiences.',
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-locator-target="webstorm">
      <body className={roboto.variable} id={'root'}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppRouterCacheProvider>
            <ClientThemeProvider>
              <Header />
              {children}
              <Footer />
            </ClientThemeProvider>
          </AppRouterCacheProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

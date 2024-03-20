import './globals.css'
import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mr. Heinrich Portfolio',
  description: 'Mr. Heinrich Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo-16.png" />
        {/* Add other meta tags if needed */}
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        {/* Include Inter font */}
        <style>{inter.styles}</style>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './assets/styles/globals.css';
import TailwindSizeDisplay from './components/TailwindBreakPoints';
import Header from './components/Header';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Mark Donatelli | Front-End Developer Portfolio',
  description:
    "I'm Mark Donatelli, a skilled front-end developer specializing in creating modern, responsive websites using React, Next.js, Vue, and Nuxt.js. Check out my projects and get in touch!",
  openGraph: {
    title: 'Mark Donatelli | Front-End Developer Portfolio',
    description:
      'Explore my portfolio showcasing responsive web apps, animations, and cutting-edge front-end development projects.',
    url: 'https://www.markwdonatelli.com',
    siteName: 'Mark Donatelli Portfolio',
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} dark:bg-custom-gradient-dark bg-custom-gradient-light bg-no-repeat antialiased`}
      >
        <Header />
        {children} <TailwindSizeDisplay />
      </body>
    </html>
  );
}

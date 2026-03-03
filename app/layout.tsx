import type { Metadata } from 'next';
import { ThemeProvider } from '@/context/ThemeContext';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Tarun Singh – Senior Fullstack Engineer',
  description:
    'Portfolio of Tarun Singh – Senior Fullstack Engineer specialising in Node.js, NestJS, microservices, IoT, fintech, and AI-powered backends.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=IM+Fell+English:ital@0;1&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

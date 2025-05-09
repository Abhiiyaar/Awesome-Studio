import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

// Suppress hydration warnings
const originalConsoleError = console.error;
if (typeof window !== 'undefined') {
  console.error = (...args) => {
    if (args[0]?.includes?.('Warning: Text content did not match') || 
        args[0]?.includes?.('Warning: Prop `className` did not match') ||
        args[0]?.includes?.('Warning: Extra attributes from the server')) {
      return;
    }
    originalConsoleError(...args);
  };
}

const font = Plus_Jakarta_Sans({
  weight : '400',
  subsets : ['latin']
})

export const metadata: Metadata = {
  title: "Awesome Studio",
  description: "A full-service digital innovation partner ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}


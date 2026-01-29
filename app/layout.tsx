import type { Metadata } from 'next';
import { Inter, VT323, Caveat, Bitcount_Single } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

const bitcount = Bitcount_Single({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bitcount',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Keerthana A R',
  description: 'cyberpunk inspired developer portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${vt323.variable} ${caveat.variable} ${bitcount.variable} antialiased bg-background text-foreground lowercase`}>
        {children}
      </body>
    </html>
  );
}

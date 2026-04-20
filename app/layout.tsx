import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import Background from '../ui/Background';
import Sidebar from "@/components/Sidebar/Sidebar"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tablo | 4.D',
  description: 'Tablo třídy 4.D - OA a SOŠL Opava',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body>
        <Background />
        <Sidebar />
        <div className="app-content">
          {children}
        </div>
      </body>
    </html>
  );
}
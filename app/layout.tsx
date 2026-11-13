import type { Metadata } from 'next';
import './global.css';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Web Teknologi - UIA',
  description: 'Pembelajaran Web Teknologi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
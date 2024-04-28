import ExitModal from '@/components/modals/exit-modal';
import HeartsModal from '@/components/modals/hearts-modal';
import PracticeModal from '@/components/modals/practice-modal';
import { Toaster } from '@/components/ui/sonner';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GetLingo',
  description: 'Learn, practice and master new languages.',
  icons: [
    {
      url: '/mascot.svg',
      href: '/mascot.svg',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={font.className}>
          <Toaster />
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

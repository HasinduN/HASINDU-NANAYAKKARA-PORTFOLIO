import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal portfolio built with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" enableSystem={true}>
          <Navbar />
          <main className="min-h-screen px-6 py-4 bg-white text-black dark:bg-gray-900 dark:text-white">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
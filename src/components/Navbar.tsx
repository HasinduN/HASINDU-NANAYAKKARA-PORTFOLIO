'use client';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 px-6 py-4 flex justify-between">
      <div className="font-bold">HASINDU</div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="px-2 py-1 border rounded"
        >
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </div>
    </nav>
  );
}
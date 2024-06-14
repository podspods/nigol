'use client';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { ThemeProvider, useTheme } from 'next-themes';
import Image from 'next/image';

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <ThemeProvider attribute='class'>
        <h1>Nigol</h1>
        <h1>{theme}</h1>
        <h1 className='text-3xl font-bold underline'>Bonjour, Next.js!</h1>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          Basculer le thèmez
        </button>
        <Input label='Username'/>
        <Input label='Email'/>
        <Input label='Password'/>
        <Button>bouton neuf</Button>
      </ThemeProvider>
    </>
  );
}

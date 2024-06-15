'use client';
import Button from '@/components/Button';
import Input from '@/components/Input';
import SubscribeBox from '@/containers/SubscribeBox';
import { ThemeProvider, useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <h1>Nigol</h1>
      <h1>{theme}</h1>
      <ul>
        <li>
          <Link href={'/login'}>login</Link>
        </li>
        <li>
          <Link href={'/logout'}>logout</Link>
        </li>
        <li>
          <Link href={'/profile'}>profile</Link>
        </li>
        <li>
          <Link href={'/signup'}>signup</Link>
        </li>
        <li>
          <Link href={'/verifyEmail'}>verifyEmail</Link>
        </li>
      </ul>

      <Button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Basculer en {theme === 'dark' ? 'light' : 'dark'}
      </Button>
      
  
      <Button 
      className='w-full bg-blue'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Basculer en {theme === 'dark' ? 'light' : 'dark'}
      </Button>
      
  
    </>
  );
}

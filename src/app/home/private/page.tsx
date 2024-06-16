'use client';
import { api, route } from '@/common/api';
import Button from '@/components/Button';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export type HomePrivateProps = {};
export default function HomePrivate({ ...props }: HomePrivateProps) {

  const router = useRouter();


  const handleClick = async () => {
    try {
      const response = await axios.get(api.account.logout);
      console.log(' logout success ==>', response.data);
      toast.error('logout success');
      router.push(route.home.public);
    } catch (error: any) {
      console.log(' Logout fail ==>', error.message);
      toast.error(error.message);
    }
  };
  return (
    <>
      <p>HomePrivate</p>
      <Button onClick={handleClick}>Logout</Button>
      <Link href={route.account.profile} >Profile</Link>
    </>
  );
}

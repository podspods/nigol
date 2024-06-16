'use client';

import { api, route } from '@/common/api';
import { User } from '@/common/typedef';
import SubscribeBox from '@/containers/SubscribeBox';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Signup() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignup = async (user: User) => {

    console.log(' onSignup==>',16 );
    
    try {
      setLoading(true);
      const response = await axios.post(api.account.signup, user);
      console.log(' onSignup success ==>', response.data);
      router.push(route.account.login);
    } catch (error: any) {
      console.log(' onSignup fail ==>', error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
    
  };

  return (
    <div className='flex flex-col justify-center items-center p-10'>
      <h1>{loading ? 'processing' : 'SignUp'}</h1> <br />
      <SubscribeBox onSignup={handleSignup} />
      <p className="text-center text-sm text-gray-500">
        Already subscribe ? &nbsp;
        <a className="underline" href={route.account.login}>Login here</a>
      </p>
    </div>
  );
}

'use client';
import { api, route } from '@/common/api';
import ActivateBox from '@/containers/ActivateBox';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import { useState } from 'react';

export default function ActivateAccount() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleActivate = async (email: string) => {
    setLoading(true);
    try {
      setLoading(true);
      console.log(' onst handleActivate = async (email: string) => {==>');
      
      const response = await axios.post(api.account.activate, {email : email});
      return NextResponse.json({
        message: 'activation sent successfully',
        success: true
      });
      router.push(route.home.public);
    } catch (error: any) {
      console.log(
        'handleActivate catch  ==>',
        error.response.status,
        error.message
      );
      return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>ActivateAccount</h1>
      <h1>{loading ? 'processing ... ' : ''}</h1> <br />
      <ActivateBox onActivate={handleActivate} />
    </>
  );
}

'use client';

import { api, route } from '@/common/api';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function VerifyEmail() {
  const [token, setToken] = useState<String>('');
  const [verified, setVerified] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const verifyUserEmail = async () => {
    {
      try {
                          
        const status = await axios.post(api.account.verifyEmail, { token });
        setVerified(true);
      } catch (error: any) {
        setError(true);
        
      }
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
}, []);


  useEffect(() => {
    if (token?.length > 0) {
      verifyUserEmail();
    }
  }, [token]);


return (
  <>
  <h1> verify e-mail</h1>
  <h2>token [{token ? token : 'no-token'}]</h2>

  {verified && (
    <div>

      <h2>email verified</h2>
      <Link href={route.account.login}> Loging </Link>
    </div>
  )}
  
  {error && (
    <div>

      <h2>email error</h2>
      <Link href={route.account.signup}>Signup</Link>
    </div>
  )}
  
  </>
)

}

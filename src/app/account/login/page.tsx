'use client';
import { api, route } from '@/common/api';
import { User } from '@/common/typedef';
import Label from '@/components/Label';
import LoginBox from '@/containers/LoginBox';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const [message, setMessage] = useState<string>('');
  const [errorCcount, setErrorCount] = useState<number>(0);
  const [isAccountNotActivated, setIsAccountNotActivated] =
    useState<boolean>(false);

  const router = useRouter();

  const handleCheck = async (user: User) => {
    setMessage('Processing....');
    try {
      const response = await axios.post(api.account.login, user);
      console.log('handleCheck ==>', response.status);

      
    } catch (error: any) {
      switch (error.response.status) {
        case 200: {
          console.log('handleCheck status 200==>', error.response.status);
          console.log(' login success ==>', error.response.data);
          router.push(route.home.private);
          setMessage('');
          break;
        }
        case 401: {
          console.log('handleCheck =status 401=>', error.response.status);
          setMessage('Unauthorized: Invalid username or password.');
          setErrorCount((prevCount) => prevCount + 1);
        }
        case 403: {
          console.log('handleCheck status 403==>', error.response.status);
          setMessage('Unauthorized: user not activated yet.');
          setIsAccountNotActivated(true);
          setErrorCount((prevCount) => prevCount + 1);
        }
        default: {
          console.log('handleCheck default==>', error.response.status);
          setMessage('An unexpected error occurred.');
          setErrorCount((prevCount) => prevCount + 1);
        }
      }
    } finally {
      setMessage('');
    }
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center p-10'>
        <Label value={message} />
        {isAccountNotActivated && (
          <p className='text-center text-sm text-gray-500'>
            resend activation ?{' '}
            <a className='underline' href={route.account.activate}>
              yes please
            </a>
          </p>
        )}
        <LoginBox onCheck={handleCheck} errorCount={errorCcount} />
        <p className='text-center text-sm text-gray-500'>
          Already subscribe yet ? &nbsp;
          <a className='underline' href={route.account.signup}>
            Signup
          </a>
        </p>
      </div>
    </>
  );
}

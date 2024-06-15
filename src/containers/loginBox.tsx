'use client';
import { User } from '@/common/typedef';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { isPasswordComplex, isUsernameValide } from '@/helpers/helpers';
import { faAt, faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { ChangeEvent, ChangeEventHandler, useRef, useState } from 'react';

export type LoginBoxProps = {};
export default function LoginBox({ ...props }: LoginBoxProps) {
  const [isGrayed, setGrayed] = useState<boolean>(true);
  const [subscriber, setSubscriber] = useState<User>({
    username: '',
    email: '',
    password: '',
    usernameError: true,
    passwordError: true,
    emailError: true
  });
  const newErrors: { [key: string]: boolean } = {};

    // ---------------------------------------------------------------------------
  const emailChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newUser: User = subscriber;
    if (! event.target.validity.valid ) {
      newUser = { ...subscriber, email: '', emailError: true };
    } else {
      newUser = {
        ...subscriber,
        email: event.target.value,
        emailError: false
      };
    }
    setSubscriber(newUser);
    const newGrayeg: boolean =
      (newUser.emailError as boolean) ||
      (newUser.passwordError as boolean);
    setGrayed(newGrayeg);
  };
  // ---------------------------------------------------------------------------
  const passwordChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newUser: User = subscriber;
    if (!event.target.value ) {
      newUser = { ...subscriber, password: '', passwordError: true };
    } else {
      newUser = {
        ...subscriber,
        password: event.target.value,
        passwordError: false
      };
    }
    setSubscriber(newUser);
    const newGrayeg: boolean =
      (newUser.emailError as boolean) ||
      (newUser.passwordError as boolean);
    setGrayed(newGrayeg);
  };

  // ---------------------------------------------------------------------------
  const handleClick = () => {
    console.log('email:', subscriber.email);
    console.log('Password:', subscriber.password);
    // todo    check data base 
  };
  // ---------------------------------------------------------------------------
  return (
    <>
      <div className='Zborder min-w-96 flex flex-col justify-center items-center p-1'>
        <p className='text-center text-lg font-medium'>Start now</p>

        <Input
          label='Email'
          type='email'
          className='Zborder 0 w-64 m-1'
          onChange={emailChange}
          hasError={subscriber.emailError}
          icon={faAt}
        />
        <Input
          label='password'
          type='password'
          className='Zborder 0 w-64 m-1'
          onChange={passwordChange}
          hasError={subscriber.passwordError}
          icon={faEye}
        />
        <Button
          isGrayed={isGrayed}
          className='text-orange m-0 w-64'
          onClick={handleClick}>
          Login
        </Button>

        <p className='text-center text-sm text-gray-500'>
          Already subscribe yet ? &nbsp;
          <a className='underline' href='/signup'>
          Signup
          </a>
        </p>
      </div>
    </>
  );
}

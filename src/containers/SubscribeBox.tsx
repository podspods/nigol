'use client';
import { User } from '@/common/typedef';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { isPasswordComplex, isUsernameValide } from '@/helpers/helpers';
import { faAt, faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { ChangeEvent, ChangeEventHandler, useRef, useState } from 'react';

export type SubscribeBoxProps = {};
export default function SubscribeBox({ ...props }: SubscribeBoxProps) {
 
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

  const UsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newUser: User = subscriber;
    if (! isUsernameValide(event.target.value)) {
      newUser = { ...subscriber, username: '', usernameError: true };
    } else {
      newUser = {
        ...subscriber,
        username: event.target.value,
        usernameError: false
      };
    }
    setSubscriber(newUser);
    const newGrayeg: boolean =
      (newUser.emailError as boolean) ||
      (newUser.usernameError as boolean) ||
      (newUser.passwordError as boolean);
    setGrayed(newGrayeg);
  };
  // ---------------------------------------------------------------------------
  const emailChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newUser: User = subscriber;
    if (event.target.value && !event.target.validity.valid) {
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
      (newUser.usernameError as boolean) ||
      (newUser.passwordError as boolean);
    setGrayed(newGrayeg);
  };
  // ---------------------------------------------------------------------------
  const passwordChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newUser: User = subscriber;
    if (event.target.value && !isPasswordComplex(event.target.value)) {
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
      (newUser.usernameError as boolean) ||
      (newUser.passwordError as boolean);
    setGrayed(newGrayeg);
  };

  // ---------------------------------------------------------------------------
  const handleClick = () => {
    console.log('username:', subscriber.username);
    console.log('email:', subscriber.email);
    console.log('Password:', subscriber.password);
  };
  // ---------------------------------------------------------------------------
  return (
    <>
      <div className='Zborder min-w-96 flex flex-col justify-center items-center p-1'>
      <p className='text-center text-lg font-medium'>
              Subscribe now
            </p>
      <Input
          label='username'
          className='Zborder 0 w-64 m-1'
          onChange={UsernameChange}
          hasError={subscriber.usernameError}
          icon={faUser}
        />
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
          Subscribe
        </Button>

        <p className="text-center text-sm text-gray-500">
        Already subscribe ? &nbsp;
        <a className="underline" href="/login">Login here</a>
      </p>
      </div>
    </>
  );
}

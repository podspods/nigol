'use client';
import { User } from '@/common/typedef';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';
import { isPasswordComplex, isUsernameValide } from '@/helpers/helpers';
import { faAt, faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState
} from 'react';

export type LoginBoxProps = {
  onActivate: (email: string) => void;
};
export default function ActivateBox({ ...props }: LoginBoxProps) {
  const [subscriber, setSubscriber] = useState<User>({
    username: '',
    email: '',
    password: '',
    usernameError: true,
    passwordError: true,
    emailError: true
  });

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
    const newDisabled: boolean = newUser.emailError as boolean;
  };
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  const handleClick = () => {
    console.log('email:', subscriber.email);
    if (subscriber.email) props.onActivate(subscriber.email);
    // todo    check data base
  };
  // ---------------------------------------------------------------------------
  return (
    <>
      <div className='bg-gray-light  min-w-96 flex flex-col justify-center items-center p-1 rounded'>
        <p className='text-center text-lg font-medium'>Start now</p>

        <Input
          label='Email'
          type='email'
          className='Zborder 0 w-64 m-1'
          onChange={emailChange}
          hasError={subscriber.emailError}
          icon={faAt}
        />

        <Button
          disabled={subscriber.emailError}
          className='text-orange m-0 w-64'
          onClick={handleClick}>
          Sens activation by e-mail
        </Button>
      </div>
    </>
  );
}

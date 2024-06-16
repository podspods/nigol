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
  onCheck: (user: User) => void;
  errorCount?: number;
};
export default function LoginBox({ ...props }: LoginBoxProps) {
  const [message, setMessage] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const [subscriber, setSubscriber] = useState<User>({
    username: '',
    email: '',
    password: '',
    usernameError: true,
    passwordError: true,
    emailError: true
  });

  useEffect(() => {
    if (props.errorCount ===0) setMessage('');
    else setMessage('Login Error');
  }, [props.errorCount]);

  // ---------------------------------------------------------------------------
  const emailChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (message !== '') setMessage('');
    let newUser: User = subscriber;
    if (event.target.value === '') {
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
      (newUser.emailError as boolean) || (newUser.passwordError as boolean);
    setDisabled(newGrayeg);
  };
  // ---------------------------------------------------------------------------
  const passwordChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (message !== '') setMessage('');

    let newUser: User = subscriber;
    if (!event.target.value) {
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
      (newUser.emailError as boolean) || (newUser.passwordError as boolean);
    setDisabled(newGrayeg);
  };

  // ---------------------------------------------------------------------------
  const handleClick = () => {
    console.log('handleClick ==>', 62);

    if (!disabled) {
      console.log('email:', subscriber.email);
      console.log('Password:', subscriber.password);
      props.onCheck(subscriber);
    }
    // todo    check data base
  };
  // ---------------------------------------------------------------------------
  return (
    <>
      <div className='bg-gray-light  min-w-96 flex flex-col justify-center items-center p-1 rounded'>
        <p className='text-center text-lg font-medium'>Start now</p>

        <Label value={message} />
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
          disabled={disabled}
          className='text-orange m-0 w-64'
          onClick={handleClick}>
          Login
        </Button>

       
      </div>
    </>
  )
}

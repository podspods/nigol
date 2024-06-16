'use client';

import { User } from '@/common/typedef';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';
import { ChangeEvent, useEffect, useState } from 'react';

import Image from 'next/image';
export type ProfileBoxProps = {
  profile?: User;
  onSave? : (user: User) => void
};
export default function ProfileBox({ ...props }: ProfileBoxProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (props.profile)
      setUser(props.profile);
  }, [props.profile]);

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newUser = { ...user, username: event.target.value };
    setUser(newUser);
  };
const handleSaveClick = () =>{
  if (props.onSave && user)  
    props.onSave (user)
}
  return (
    <>
      <div className='w-full flex justify-center Zborder '>
        <div className='w-half Zborder flex-wrap flex m-auto'>
          <div className='w-32 p-10 '>
            <Image
              width={30}
              height={30}
              src='https://picsum.photos/200/300'
              alt='https://picsum.photos/200/300'
              // layout='fill'
              // objectFit='cover'
            />
          </div>
        </div>
        <div className='w-half Zborder flex  flex-col m-auto'>
          <p>ProfileBox</p>

          <Label value={user ? user.email : 'email'} />
          <Input
            label='username'
            value={user?.username}
            onChange={handleUsernameChange}
          />
          <Input label='Password' />

          <Button onClick={handleSaveClick}>saveprofile </Button>
        </div>
      </div>
    </>
  );
}

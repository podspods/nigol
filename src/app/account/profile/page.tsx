'use client';
import { api, route } from '@/common/api';
import { User } from '@/common/typedef';
import Button from '@/components/Button';
import ProfileBox from '@/containers/ProfileBox';
import { isUsernameValide } from '@/helpers/helpers';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export type ProfileProps = {};
export default function Profile({ ...props }: ProfileProps) {
  const router = useRouter();

  const [dataProfile, setDataProfile] = useState<User>();
  const [loading, setLoading] = useState<boolean>(false);

  const getUserProfile = async () => {
    const result = await axios.get(api.account.profile);
    console.log(' getUserProfile==>', result.data);

    const newUser: User = {
      email: result.data.data.email,
      username: result.data.data.username
    };
    setDataProfile(newUser);
  };
  try {
  } catch (error: any) {
    console.log(' getUserProfile fail ==>', error.message);
    toast.error(error.message);
  }

  useEffect(() => {
    getUserProfile();
  }, []);

  const handleSaveProfile = async (user: User) => {
    setLoading(true);
    try {
      console.log('isUsernameValide(user.username||  ==>',isUsernameValide(user.username|| '') );
      
      if (isUsernameValide(user.username|| '')){

        const response = await axios.post(api.account.updateUser, user);
      }


    } catch (error: any) {
      console.log(' handleSaveProfile fail ==>', error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }

  };

  const handleLogoutClick = async () => {
    try {
      const response = await axios.get(api.account.logout);
      router.push(route.home.public);
    } catch (error: any) {
      console.log(' Logout fail ==>', error.message);
      toast.error(error.message);
    }
  };

  return (
    <>
      <p>Profile</p>
      <div className='max-w-screen-sm flex justify-center items-center bg-purple m-auto Zborder overflow-auto'>
        <ProfileBox profile={dataProfile} onSave={handleSaveProfile} />
      </div>
      <Button onClick={handleLogoutClick}>logout</Button>
    </>
  );
}

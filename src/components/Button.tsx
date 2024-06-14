import { Children } from 'react';

type ButtonProps = {
  children : React.ReactNode 

}

export default function Button({children}:ButtonProps ) {
  return (
    <>
      <button className='bg-transparent font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded'>
        {children}
      </button>
    </>
  );
}

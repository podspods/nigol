import { uniqueId } from '@/helpers/helpers';
import { ChangeEvent } from 'react';

export type InputProps = {
  label :string,
  onChange?:(value:string) => void 
  id?: string,
  placeholder?:string
  type?:string
};
export default function Input({ id=uniqueId(),label, placeholder=label,type='text', ...props }: InputProps) {

  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {

      props.onChange (event.target.value)

  }
  
  return (
    <>

      <label
        htmlFor={id}
        className='relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'>
        <input
          type={type}
          id={id}
          className='h-10 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0'
          placeholder={placeholder}
          onChange={props.onChange? handleChange : ()=>null } 
        />

        <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
          {label}
        </span>
      </label>
    </>
  );
}


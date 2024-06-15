import { uniqueId } from '@/helpers/helpers';
import { ChangeEvent } from 'react';

export type InputProps = React.ButtonHTMLAttributes<HTMLInputElement> & {
  label: string;
  onChange?: (value: string) => void;
  ref:
};
export default function Input({ id = uniqueId(), ...props }: InputProps) {
  const className =
    'py-6 px-4 h-10 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0' +
    ' ' +
    props.className;
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange ? props.onChange(event.target.value) : null;
  };

  return (
    <>
      <input
        ref={props.ref}
        id={id}
        className={className}
        onChange={props.onChange ? handleChange : () => null}
        placeholder={props.label}
      />
    </>
  );
}

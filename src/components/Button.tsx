import { useTheme } from 'next-themes';
import { Children } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  isGrayed?: boolean;
};

export default function Button({
  children,
  isGrayed = false,
  ...props
}: ButtonProps) {
  const { theme } = useTheme();
  const cursorType = isGrayed ? 'cursor-not-allowed' : 'cursor-pointer';
  const className =
    'bg-transparent font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded p-10 m-1' +
    ' ' +
    props.className +
    ' ' +
    cursorType;

  return (
    <>
      <button {...props} className={className}>
        {children}
      </button>
    </>
  );
}

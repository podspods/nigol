type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};
export default function Button({
  children,
  ...props
}: ButtonProps) {
  return (
    <>
      <button {...props}  
      className='bg-transparent focus:ring active:text-indigo-500 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded p-10 m-1 disabled:cursor-not-allowed  button-click-effect'  >
        {children}
      </button>
    </>
  );
}

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
      className='bg-transparent font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded p-10 m-1 disabled:cursor-not-allowed'  >
        {children}
      </button>
    </>
  );
}

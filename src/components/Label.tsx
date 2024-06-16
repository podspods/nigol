type LabelProps = React.ButtonHTMLAttributes<HTMLInputElement> & {};
export default function Label({ value, ...props }: LabelProps) {
  const bgColor = value === '' ? 'opacity-0' : 'bg-pink';
  const className = 'rounded font-semibold  p-1 m-1 ' + bgColor;
  return (
    <>
      <input {...props} type='text' readOnly className={className} value={value} />
    </>
  );
}

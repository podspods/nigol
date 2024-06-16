import Button from '@/components/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';

export type ProfileBoxProps = {};
export default function ProfileBox({ ...props }: ProfileBoxProps) {
  return (
    <>
      <div className='w-full flex justify-center Zborder '>
        <div className='w-half Zborder flex-wrap flex m-auto'>
          <div className="w-full p-10 " style={{ width: '100%'}}>
            <span style={{margin: 'auto'}}>toto</span>
          </div>
        </div>
        <div className='w-half Zborder flex  flex-col m-auto'>
          <p>ProfileBox</p>

          <Label value={'email'} />
          <Input label='Username' />
          <Input label='Password' />

          <Button>see profile </Button>
          <Button>logout</Button>
        </div>
      </div>
    </>
  );
}

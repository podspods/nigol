import ProfileBox from '@/containers/ProfileBox'

export type ProfileProps = {

}
export default function Profile({...props}: ProfileProps) {
  return (
    <>
    <p>Profile</p>
    <div 
    className="max-w-screen-sm flex justify-center items-center bg-purple m-auto Zborder overflow-auto" 
    >
    <ProfileBox />
    </div>
    </>
  )
}
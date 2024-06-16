import Login from '@/app/account/login/page'

export type HomePublicProps = {

}
export default function HomePublic({...props}: HomePublicProps) {
  return (
    <>
    <p>HomePublic  </p>
   < Login />
    </>
  )
}
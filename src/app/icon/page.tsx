import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCoffee } from "@fortawesome/free-solid-svg-icons";


export type pageProps = {};
export default function Icones({ ...props }: pageProps) {

  return (
    <>
      <label>faCoffee</label>
      <FontAwesomeIcon icon={faCoffee} className='w-8 h-8 text-green' />
      <FontAwesomeIcon icon={faCheck} className='w-8 h-8 text-blue bg-blue'/>
      <FontAwesomeIcon icon={faCheck} className='w-8 h-8 text-opacity-100'/>
      <FontAwesomeIcon icon={faCheck} className='h-10 w-10 bg-orange'/>
      

    </>
  );
}


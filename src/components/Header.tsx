import mainBanner from '../assets/common/mainBanner.png';
import { useEffect, useState } from 'react';

const Header = ({heading} : {heading:string}) =>{
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsLoaded(true);
      }, 0);
  
      return () => clearTimeout(timeout);
    }, []);
  

    return (
        <div className={`w-full relative transition-opacity duration-[1.5s] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <img className='w-full min-h-[150px]' src={mainBanner} alt="" />
            <div className="absolute w-full top-[50%]"><h1 className="text-center text-white">{heading}</h1></div>
        </div>
    )
}

export default Header
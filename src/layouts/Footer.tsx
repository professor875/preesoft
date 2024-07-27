import footerImg from '../assets/common/footerImg.png';
import Page from './Page';
import preesoftLogo from '../assets/common/preesoftLogo.png'
import Call from '../components/svg/Call';

import { useState, useEffect } from 'react';
import Phone from '../components/svg/Phone';
import Location from '../components/svg/Location';

import Facebook from '../components/svg/Facebook.tsx';
import Linkedin from '../components/svg/Linkedin.tsx';
import Instagram from '../components/svg/Instagram.tsx';
import Twitter from '../components/svg/Twitter.tsx';


function Footer(){

    const [backgroundSize, setBackgroundSize] = useState<string>('cover');

    useEffect(() => {
        const handleResize = () => {
          // Adjust background size based on window width
          if (window.innerWidth <= 900) {
            setBackgroundSize('');
          } else {
            setBackgroundSize('100%');
          }
        };
    
        // Call handleResize initially
        handleResize();
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Remove event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
    <>
        <div className="w-full bg-center bg-no-repeat relative top-12" style={{backgroundImage: `url(${footerImg})`, backgroundSize: backgroundSize,}}>
            <Page>
                <div className="flex flex-col md:flex-row gap-y-6 justify-start items-center py-6 lg:py-12 px-8">
                    <div className=" max-w-[545px] space-y-4">
                        <h2 className="font-semibold">We are Ready to Help You</h2>
                        <p className="p1 font-[500]">It's time to make your business more successful with our professional IT solutions. Contact us today to find out how your company can benefit from our services.</p>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <button className='px-7 py-3 rounded-md text-[16px] font-semibold bg-white'>Get a Question</button>
                    </div>
                </div>
            </Page>

        </div>
        <div className=" bg-primary w-full">
            <Page>
                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 pt-16 lg:20 text-white font-[300] gap-y-6 md:px-10">
                    <div className="col-span-3 flex flex-col items-center gap-y-4 lg:-mt-4">
                        <img src={preesoftLogo} alt="preesoftLogo" />
                        <p className="text-justify">Preesoft Pvt Ltd truly believes in customer satisfaction. Share your burden with us, we will provide you quality services. Trust us, you will have unbreakable bond with Preesoft Pvt Ltd.</p>
                    </div>

                    <div className="md:ml-14 col-span-3 space-y-4">
                        <h3 className='text-secondary font-[500] text-[20px]'>Helpful Links</h3>

                        <ul className='text-[16px] space-y-2'>
                            <li className='hover:text-yellow transition-all duration-300'>About Us</li>
                            <li className='hover:text-yellow transition-all duration-300'>Blogs</li>
                            <li className='hover:text-yellow transition-all duration-300'>Jobs</li>
                            <li className='hover:text-yellow transition-all duration-300'>Send Resume</li>
                        </ul>
                    </div>

                    <div className="col-span-3 space-y-4">
                        <h3 className='text-secondary font-[500]'>Contact Us</h3>
                        <ul className='text-[16px] space-y-4'>
                            <li className='hover:text-yellow transition-all duration-300 flex gap-x-2'><Call /> 04237870398</li>
                            <li className='hover:text-yellow transition-all duration-300 flex gap-x-2'><Phone /> +92306-0115446</li>
                            <li className='hover:text-yellow transition-all duration-300 flex gap-x-2'><Phone /> +1 929 483 1368</li>
                        </ul>
                    </div>

                    <div className="md:ml-14 lg:ml-0 col-span-3 space-y-4">
                        <h3 className='text-secondary font-[500]'>Emails</h3>
                        <ul className='text-[16px] space-y-4'>
                            <li className='hover:text-yellow transition-all duration-300'><span className="text-yellow">Inquiry:</span> hello@preesoft.com</li>
                            <li className='hover:text-yellow transition-all duration-300'><span className="text-yellow">Resume:</span> careers@preesoft.com</li>
                            <li className='hover:text-yellow transition-all duration-300'><span className="text-yellow">Quotation: </span>sales@preesoft.com</li>
                        </ul>
                    </div>
                </div>

                <hr className='w-full border border-[#4B4B4B] my-10'/>
                
                <h3 className='text-secondary font-[500] px-12'>Addresses</h3>

                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 pt-6 lg:20 text-white font-[300] gap-10 md:px-10">
                    <ul className='col-span-3 text-[16px] space-y-4'>
                        <li className='hover:text-yellow transition-all duration-300 flex gap-x-2 items-start break-words'><span className="min-w-4"><Location /></span><span className="text-yellow">Pakistan:</span> 163 Block F, Johar Town Lahore</li>
                    </ul>

                    <ul className='col-span-3 text-[16px] space-y-4'>
                        <li className='hover:text-yellow transition-all duration-300 flex gap-x-2 items-start break-words'><span className="min-w-4"><Location /></span><span className="text-yellow">Canada:</span> 5006 Rosebush Rd, Mississauga L5M5M4, Canada</li>
                    </ul>

                    <ul className='col-span-3 text-[16px] space-y-4'>
                        <li className='hover:text-yellow transition-all duration-300 flex gap-x-2 items-start break-words'><span className="min-w-4"><Location /></span><span className="text-yellow">USA Office:</span> 366 N Broadway, New York 11753</li>
                    </ul>

                    <ul className='col-span-3 text-[16px] space-y-4'>
                        <li className='hover:text-yellow transition-all duration-300 flex gap-x-2 items-start break-words'><span className="min-w-4"><Location /></span><span className="text-yellow">South Africa:</span>Building B, Top Floor 9 Armitage Road Bird Sanctuary Pietermaritzburg, South Africa</li>
                    </ul>
                </div>

                <hr className='w-full border border-[#4B4B4B] my-6'/>

                <div className="flex flex-col gap-2 lg:flex-row justify-between items-center md:px-10 text-white">
                    <p className="font-[300]">Copyright © 2024 | Preesoft Pvt Ltd</p>

                    <span className="text-[15px] flex items-center">About Us <hr className=' mx-2 h-12 sm:h-5 w-0 border border-[#4B4B4B]'/> Terms & Condition <hr className=' mx-2 h-12 sm:h-5 w-0 border border-[#4B4B4B]'/> Privacy Policy</span>

                    <div className="flex items-center gap-x-2">
                        <Facebook />
                        <Linkedin />
                        <Instagram />
                        <Twitter />
                    </div>
                </div>

            </Page>
        </div>
    </>
    )
}

export default Footer
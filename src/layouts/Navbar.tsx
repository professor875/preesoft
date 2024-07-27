import NavLink from "./NavLink";
import NavDropdown from "./NavDropdown";
import preesoftLogo from "../assets/common/preesoftLogo.png";
import Page from "./Page";
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
import DropdownSvg from "@/src/components/svg/DropedownSvg.tsx";

const Navbar = () => {

    const location = useLocation();
    const navLinks = [
        {
            label: "Home",
            path: '/',
            type: 'link'
        },
        {
            label: 'Services',
            type: 'dropdown',
            items: [
                {
                    label: 'Web Development',
                    path: '/web-development'
                },
                {
                    label: 'Desktop Application',
                    path: '/desktop-applications',
                },
                {
                    label: 'App Development',
                    path: '/app-development',
                },
                {
                    label: 'Graphic Designing',
                    path: '/graphic-design',
                },
                {
                    label: 'Digital Marketing',
                    path: '/digital-marketing',
                }
            ]
        },
        {
            label: 'Product',
            path: '/products',
            type: 'link'
        },
        {
            label: 'Hosting',
            path: '/hosting',
            type: 'link'
        },
        {
            label: 'Portfolio',
            type: 'dropdown',
            items: [
                {
                    label: 'Website',
                    path: '/websites'
                },
                {
                    label: 'Mobile Application',
                    path: '/apps',
                }
            ]
        },
        {
            label: 'About Us',
            type: 'dropdown',
            items: [
                {
                    label: 'Our Team',
                    path: '/our-team'
                },
                {
                    label: 'Our Clients',
                    path: '/our-clients',
                }
            ]
        },
        {
            label: 'Contact Us',
            path: '/contact-us',
            type: 'link'
        },
        {
            label: 'Get a Question',
            path: '/get-a-question',
            type: 'button'
        }
    ];

    const [nav, setNav] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState('')


    const activateDropdown = (name: string) => {
        setActiveDropdown((prev) => {
            if (prev === name) {
                return '';
            }else {
                return name;
            }
        })
    }


    return (
        <>
            {/*mobile nav*/}
            <div onClick={() => setNav(false)}
                 className={`bg-black/30 absolute inset-0 z-20 ${nav ? '' : 'hidden'}`}></div>
            <div
                className={`px-6 py-4 absolute bg-primary h-full w-[90%] right-0 bottom-0 z-30 transition-all ${nav ? '' : 'hidden'}`}>
                <div onClick={() => setNav(false)}
                     className="relative float-end md:hidden border cursor-pointer h-[30px] w-[30px] border-secondary">
                    <div
                        className="w-[60%] absolute left-[5.5px] top-3 border-[1.2px] rounded-full border-secondary rotate-45"></div>
                    <div
                        className="w-[60%] absolute left-[5.5px] top-3 border-[1.2px] rounded-full border-secondary -rotate-45"></div>
                </div>

                <div className="flex flex-col mt-16 text-white gap-y-3">
                    {navLinks.map((link, index) => (
                        <>
                            {link.type === 'link' && <span key={index} onClick={() => setNav(false)}>
                              <Link to={`${link.path}`}>
                                <div className={`text-sm hover:text-secondary h-full leading-[30px] transition-all duration-200 ${location.pathname == link.path? 'text-secondary' : ''}`}>{link.label}</div>
                              </Link>
                            </span>}
                            {link.type === 'dropdown' &&
                              <div key={index}>
                                <div
                                     onClick={() => activateDropdown(link.label)}
                                     className="flex justify-between items-center cursor-pointer group py-1">
                                  <p
                                    className={`text-sm group-hover:text-secondary transition-all duration-300 ${activeDropdown === link.label && 'text-secondary'}`}>{link.label}</p>
                                  <span className={`${activeDropdown === link.label ? 'rotate-180' : ''}`}>
                                     <DropdownSvg active={activeDropdown === link.label}/>
                                  </span>
                                </div>

                                <ul
                                  className={`flex flex-col ml-4 space-y-1 ${activeDropdown === link.label ? '' : 'hidden'}`}>
                                    {link.items?.map((item, index) => (
                                            <li key={index} className="group" onClick={() => setNav(false)}>
                                                <Link to={item.path}>
                                                    <div className={`flex items-center gap-2`}>
                                                        <span className="-rotate-90"><DropdownSvg
                                                            active={location.pathname === item.path}/></span>
                                                        <p className={`text-sm group-hover:text-secondary transition-all duration-300
                                                    ${location.pathname === item.path ? 'text-secondary' : 'text-white'}`}>
                                                            {item.label}
                                                        </p>
                                                    </div>
                                                </Link>
                                            </li>
                                    ))}
                                </ul>
                              </div>
                            }
                        </>
                    ))}
                </div>
            </div>

            {/*nav*/}
            <nav className="bg-primary text-white nvmd:sticky navmd:top-0 w-full z-10">
                <Page
                    className="flex items-center justify-between w-full gap-x-8 max-w-[1600px] h-[60px] md:h-[75px] py-4">
                    <Link className={'h-full'} to={'/'}><img className="h-full" src={preesoftLogo}
                                                             alt='preesoft'/></Link>
                    {/*Mobile Nav hamburger*/}
                    <div onClick={() => setNav(true)}
                         className="navmd:hidden border cursor-pointer h-[30px] w-[30px] border-secondary p-[6px] flex flex-col gap-y-1 justify-between items-center ">
                        <div className="w-full border-[1.2px] rounded-full border-secondary"></div>
                        <div className="w-full border-[1.2px] rounded-full border-secondary"></div>
                        <div className="w-full border-[1.2px] rounded-full border-secondary"></div>
                    </div>


                    {/*Desktop Nav*/}
                    <div className="hidden navmd:inline-flex w-full max-w-[850px] justify-between gap-x-4 items-center">
                        {navLinks.map((link, index) => (
                            <>
                                {link.type === 'link' && <NavLink key={index} link={link}/>}
                                {link.type === 'dropdown' && <NavDropdown key={index} menu={link}/>}
                                {link.type === 'button' &&
                                  <Link to={`${link.path}`}
                                        className="px-5 py-2 bg-secondary hover:bg-yellow hover:text-black transition-all duration-300">{link.label}</Link>
                                }
                            </>
                        ))}
                    </div>
                </Page>
            </nav>
        </>
    );
}

export default Navbar;
import NavLink from "./NavLink";
import DropdownSvg from "../components/svg/DropedownSvg";
import {useLocation} from "react-router-dom";

interface SubMenuItem {
    label: string;
    path: string;
    type: string;
}

interface Menu {
    label: string;
    type: string;
    items: SubMenuItem[];
}


function NavDropdown({menu}: {menu: Menu}){
    const location = useLocation()
    let active = false;
    menu.items.map((item) => (
        <>
            {item.path == location.pathname ? active = true : false}
        </>
    ))

    return (
        <div className="relative z-[12] group">
            <div className={`${active ? 'text-secondary' : 'white'} leading-[60px] group-hover:text-secondary pointer text-[15px] transition-all duration-300 flex items-center gap-x-1`}>{menu.label}<DropdownSvg active={active} /></div>
            <div className=" absolute hidden transition-all duration-300 group-hover:inline top-14 p-4 min-w-[200px] bg-primary border-t border-secondary">
                <ul className="space-y-6 text-[15px] cursor-pointer">
                    {menu.items.map((item, index) => (
                        <NavLink className={'h-auto'} key={index} link={item} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NavDropdown;
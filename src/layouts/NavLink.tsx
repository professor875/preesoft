import {Link, useLocation} from "react-router-dom";

interface Link {
    label: string;
    path: string;
    type: string;
}

const NavLink = ({link, className} : {link: Link, className?: string}) => {
    const location = useLocation();

    return (
        <Link to={`${link.path}`}>
            <div className={`text-sm md:text-[15px] hover:text-secondary h-full leading-[60px] transition-all duration-200 ${className} ${location.pathname == link.path? 'text-secondary' : ''}`}>{link.label}</div>
        </Link>
    );
}

export default NavLink;
import {ReactNode} from "react";

const Page = ({children, className}: {children: ReactNode, className?: string}) => {

    return (
        <div className={`max-w-[1220px] px-6 py-2 mx-auto ${className}`}>{children}</div>
    );
}

export default Page

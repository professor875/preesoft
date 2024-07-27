import { ReactNode } from "react";

const Card1 = ({img, heading, children} : {img:string, children:ReactNode, heading:string}) =>{
    return (
        <div className="p-3 border-t-2 transition-all duration-300 shadow-2xl shadow-[#e7e8e9] hover:shadow-[#afaeae] hover: hover:border-secondary flex flex-col items-center gap-y-6 rounded-lg">
            <img src={img} className='h-24' alt={img} />
            <h3 className='text-center text-blue'>{heading}</h3>
            <p className="break-words w-full text-justify">{children}</p>
        </div>

    )

}
export default Card1;
import { ReactNode } from "react"

const HostingCard1 = ({img, heading, children, border} : {img:string, heading:string, children:ReactNode, border?:string}) =>{
    return (
        <div className={`col-span-4 flex p-3 rounded-lg flex-col justify-center items-center gap-y-3 max-w-[350px] ${border == 'border' ? 'shadow-sm hover:shadow-xl transition-all duration-300 shadow-gray-300' : ''}`}>
            <img className="max-w-[90px]" src={img} alt={'img'} />
            <h3 className="font-semibold text-center">{heading}</h3>
            <p className="font-[400] text-center">{children}</p>
        </div>
    )
}

export default HostingCard1
import { ReactNode } from "react"

const Card2 = ({img, heading, children} : {img:string, heading:string, children:ReactNode}) =>{
    return (
        <div className="col-span-4 flex flex-col md:flex-row justify-center items-center md:items-start px-[16px] md:px-[28px] py-[17px] lg:max-w-[350px] gap-x-4">
            <div className="max-w-10px">
                <img className='px-24 md:px-0 md:max-w-[60px]' src={img} alt={img} />
            </div>
            <div className="space-y-3">
                <h3 className="text-center md:text-start">{heading}</h3>
                <p className="text-[15px] leading-[24px] text-center md:text-start">{children}</p>
            </div>
        </div>
    )
}
export default Card2
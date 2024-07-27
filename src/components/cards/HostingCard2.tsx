import { ReactNode } from "react"

const HostingCard2 = ({label, heading, children, price, shadow, shades} : {label?:string, heading:string, children:ReactNode, price:string, shadow?:boolean, shades?:boolean}) =>{
    return (
        <div className={`hover:shadow-xl hover:shadow-gray-300 transition-all duration-300 md:max-w-[330px] col-span-12 md:col-span-4 rounded-lg ${shades? 'bg-yellow' : 'bg-white'} p-2 pb-10 border-t-4 border-secondary overflow-hidden ${shades? 'bg-gradient-to-t from-secondary' : ''}`}>
            <div className="flex w-full justify-end">
                <div className={`bg-secondary text-center w-[200px] py-1 text-[15px] text-white rotate-45 relative top-6 left-16   ${shadow ? 'shadow-sm shadow-black' : ''} ${label ? 'inline-block' : 'opacity-0' }`}>{label}</div>
            </div>

            <h1 className={`text-secondary text-center ${label ? '' : 'mt-6'} ${shades? 'text-white':''}`}>{heading}</h1>
            <h2 className="text-black text-center">Plan</h2>

            <div className="flex justify-center my-2 md:my-6">
                <span className="mt-4 text-[20px] font-semibold">$</span><h1 className="text-[40px] md:text-[60px] font-semibold">{price}</h1>
            </div>

            <ul className={`text-[15px] md:text-[18px] px-4   ${shades? 'text-white':'text-black'}`}>
                {children}
            </ul>
        </div>
    )
}

export default HostingCard2
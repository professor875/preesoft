import { ReactNode } from "react"

const ProductCard1 = ({img, heading, children, className, order, directionClass, description1, description2, span} :
                      {img:string, heading:string, children?:ReactNode, className?:string, order?:string, directionClass?:string, description1?:string, description2?:string, span?:string}) => {
    return (
        <>
        <div className={`flex flex-col-reverse md:flex-row justify-around items-center gap-2 ${directionClass}`}>
            <div className={` md:max-w-[550px] ${order}`}>
                <img src={img} alt="img" />
            </div>
            <div className=" order-1 gap-y-6 lg:gap-y-10 flex flex-col items-center sm:min-w-[370px]">
                <h2 className={`font-[500] text-blue text-center ${className}`}>{heading}</h2>
                <p className="text-justify max-w-[500px]">{children}
                    {description1}
                    <a href={'#'} className="text-secondary hover:text-black transition-all duration-300">{span}</a>4
                    {description2}
                </p>
            </div>
        </div>
        </>
    )
}

export default ProductCard1
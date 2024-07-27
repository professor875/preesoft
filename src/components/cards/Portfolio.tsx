const Portfolio = ({img, heading, className} : {img:string, heading:string, className?:string}) =>
{
    return (
        <div className={`cursor-pointer w-full p-6 col-span-4 relative group/websites max-w-[300px] md:max-w-full ${className}`}>
            <img src={img} alt={'img'} />
            <div className=" p-3 gap-y-2 flex flex-col justify-center items-center absolute top-10 bottom-10 left-10 right-10 bg-gradient-to-t from-yellow bg-secondary transition-all duration-700 opacity-0 group-hover/websites:opacity-100 transform group-hover/websites:scale-125 rounded-lg">
                <h3 className="font-[500] text-center text-primary">{heading}</h3>
                <button className="px-4 py-2 border-2 border-white text-white font-semibold text-[12px] bg-transparent">View Project</button>
            </div>
        </div>
    )
}

export default Portfolio
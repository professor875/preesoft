import Location from "../svg/Location.tsx";
import Phone from "../svg/Phone.tsx";

const AddressCard = ({heading, address, phone, } : {heading: string, address: string, phone: string}) => {
    return (
        <div
            className={`max-w-[300px] mx-auto p-2 rounded-xl border border-gray-200 min-h-[280px] flex flex-col gap-y-2 justify-between items-center col-span-3`}>
            <div className="w-full flex flex-col gap-y-2 items-center">
                <h3 className='font-semibold'>{heading}</h3>
                <Location color={true}/>
                <p className="p1 text-center">{address}</p>
            </div>
            <div className="flex flex-col items-center gap-y-2">
                <Phone color={true}/>
                <p className="p1 text-center">{phone}</p>
            </div>
        </div>
    )
}

export default AddressCard;
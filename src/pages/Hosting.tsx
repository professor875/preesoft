import Page from "../layouts/Page";
// images
import Hosting1 from '../assets/hosting/hosting1.webp'
import Hosting2 from '../assets/hosting/hosting2.webp'
import Hosting3 from '../assets/hosting/hosting3.webp'
import Hosting4 from '../assets/hosting/hosting4.webp'
import Hosting5 from '../assets/hosting/hosting5.webp'
import Hosting6 from '../assets/hosting/hosting6.webp'
import Hosting7 from '../assets/hosting/hosting7.webp'
import Hosting8 from '../assets/hosting/hosting8.webp'
import Hosting9 from '../assets/hosting/hosting9.webp'
import Hosting10 from '../assets/hosting/hosting10.webp'

//cards
import HostingCard1 from "../components/cards/HostingCard1";
import HostingCard2 from "../components/cards/HostingCard2";

const Hosting = () => {

    const whyChooseOurHostings = [
        {
            img: Hosting4,
            heading: 'Choose Domain',
            description: 'Find your dream domain name that matches your brand.',
        }, {
            img: Hosting5,
            heading: 'Choose Hosting Plan',
            description: 'Find your dream domain name that matches your brand.',
        }, {
            img: Hosting6,
            heading: 'Place Order',
            description: 'Find your dream domain name that matches your brand.',
        }, {
            img: Hosting7,
            heading: 'Choose Domain',
            description: 'Find your dream domain name that matches your brand.',
        }, {
            img: Hosting8,
            heading: 'Choose Hosting Plan',
            description: 'Find your dream domain name that matches your brand.',
        }, {
            img: Hosting9,
            heading: 'Place Order',
            description: 'Find your dream domain name that matches your brand.',
        },
    ]

    const basicPricingPlan = ['2GB Web Space', '10GB Bandwidth', '1 Basic Domain', '10 Sub Domain', '10 Email Accounts', 'Webmail Access', 'Cpanel Access']

    const professionalPricingPlan = ['5GB Web Space', '25GB Bandwidth', '1 Basic Domain', '20 Sub Domain', '10 Email Accounts', 'Webmail Access', 'Cpanel Access']

    const ultimatePricingPlan = ['10GB Web Space', '50GB Bandwidth', '1 Basic Domain', 'Unlimited Sub Domain', 'Unlimited Email Accounts', 'Webmail Access', 'Cpanel Access']

    const hostingCards = [
        {
            img: Hosting1,
            heading: 'Choose Domain',
            description: 'Find your dream domain name that matches your brand.',
        },
        {
            img: Hosting2,
            heading: 'Choose Hosting Plan',
            description: 'Find your dream domain name that matches your brand.',
        },
        {
            img: Hosting3,
            heading: 'Place Order',
            description: 'Find your dream domain name that matches your brand.',
        }
    ]

    return (
        <>
            <div className="w-full bg-[#1B2125] p-2 md:p-16 lg:p-32 flex justify-center items-end">
                <Page className="w-full flex justify-start">
                    <div className="flex flex-col text-white max-w-[550px] gap-y-4 items-center">
                        <h2 className="text-center">Most Popular And Affordable! Web Hosting & Domains</h2>
                        <p className="p1 font-[300] text-center px-9">Our best web hosting is fast, secure, reliable and
                            have <span
                                className="text-secondary hover:text-white transition-all duration-300 cursor-pointer">customer support</span> that
                            can completely support you.</p>
                        <p className="p1 font-[300] text-center px-9">We’ve managed hundreds of websites ourselves over
                            our careers. Large, small, and everything in between. We offer great hosting at a great
                            price.</p>
                        <button className="px-7 py-3 bg-secondary font-[600] text-[14px] rounded-md w-fit">See Plans
                        </button>
                    </div>
                </Page>
            </div>

            <Page className="py-4 md:py-8 flex flex-col items-center">
                <h1 className='text-center my-4 lg:my-8'>How It Works?</h1>

                <div className="flex flex-col md:flex-row justify-between items-center">
                    {hostingCards.map((card, index) => (
                        <div key={index}>
                            <div className={`hidden ${index == 0 ? 'md:hidden' : 'md:inline-flex'} max-w-[80px] h-1 w-full border-2 border-dashed border-secondary my-auto`}></div>
                            <HostingCard1 heading={card.heading} img={card.img}>{card.description}</HostingCard1>
                        </div>
                    ))}
                </div>

                <h2 className='text-center mt-6 md:mt-10'>Why Choose Our Hosting</h2>

                <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6">
                    {whyChooseOurHostings.map((object, index) => (
                        <HostingCard1 key={index} border="border" heading={object.heading}
                                      img={object.img}>{object.description}</HostingCard1>
                    ))}
                </div>
            </Page>
            {/*pricing plan section */}
            <div className="w-full p-[20px] md:p-[30px] bg-[#EDEDED] my-4 md:my-8">
                <h2 className='text-center my-4 md:my-10'>Pricing Plans</h2>
                <Page className="grid grid-cols-12 gap-x-4 gap-y-8 my-8 w-full">
                    <HostingCard2 heading="Basic" price="40">
                        {basicPricingPlan.map((value, index) => (
                            <li key={index}
                                className={`border-gray-200 w-full text-center p-2 ${professionalPricingPlan.length === index + 1 ? 'border-none' : 'border-b'}`}>{value}</li>
                        ))}
                    </HostingCard2>
                    <HostingCard2 heading="Professional" price="80" label="POPULAR" shadow={true} shades={true}>
                        {professionalPricingPlan.map((value, index) => (
                            <li key={index}
                                className={` border-gray-200 w-full text-center p-2 ${professionalPricingPlan.length === index + 1 ? 'border-none' : 'border-b'}`}>{value}</li>
                        ))}
                    </HostingCard2>
                    <HostingCard2 heading="Ultimate" price="100" label="25% OFF">
                        {ultimatePricingPlan.map((value, index) => (
                            <li key={index}
                                className={` border-gray-200 w-full text-center p-2 ${ultimatePricingPlan.length === index + 1 ? 'border-none' : 'border-b'}`}>{value}</li>
                        ))}
                    </HostingCard2>
                </Page>
            </div>

            <Page className="py-2 flex flex-col items-center">
                <h2 className='text-center mt-4 md:mt-10'>What We Have Pride In</h2>

                <div className="flex justify-center items-center w-full mt-4 md:mt-10">
                    <div
                        className={`col-span-4 flex p-3 rounded-lg flex-col justify-center items-center gap-y-3 max-w-[820px]`}>
                        <img className="max-w-[90px]" src={Hosting10} alt='img' />
                        <h3 className="font-semibold text-center">Professional It Services</h3>
                        <p className="font-[400] text-center">Professionalism is the thing we never
                            compromise for. We always tend to deliver more than what is expected. <span
                                className="text-secondary hover:text-black transition-all duration-300 cursor-pointer">Preesoft</span> heads
                            towards most trending Technologies. We research and keep our knowledge up to date to provide
                            most suitable and latest services to our clients.</p>
                    </div>
                </div>
            </Page>
        </>
    )
}

export default Hosting
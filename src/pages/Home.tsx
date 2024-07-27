
import Page from '../layouts/Page.tsx';
import mainBanner from '../assets/home/mainBanner.png';

// what we do - we do it well 
import webDevelopment from '../assets/home/card/webDevelopment.webp';
import desktopApplication from '../assets/home/card/desktopApplication.webp';
import appDevelopment from '../assets/home/card/appDevelopment.webp';
import graphicDesign from '../assets/home/card/graphicDesign.webp';
import digitalMarketing from '../assets/home/card/digitalMarketing.webp';
import hosting from '../assets/home/card/hosting.webp';

// marquee images
import html from '../assets/home/marquee/html.png';
import react from '../assets/home/marquee/react.png';
import vue from '../assets/home/marquee/vueJs.png';
import wordpress from '../assets/home/marquee/wordpress.png';
import tailwind from '../assets/home/marquee/tailwind.png';
import php from '../assets/home/marquee/php.png';
import nodejs from '../assets/home/marquee/nodejs.png';
import photoshop from '../assets/home/marquee/photoshop.png';
import js from '../assets/home/marquee/js.png';
import illustrator from '../assets/home/marquee/illustrator.png';
import blockchain from '../assets/home/marquee/blockchain.png';
import laravel from '../assets/home/marquee/laravel.png';
import ios from '../assets/home/marquee/ios.png';
import woocommerce from '../assets/home/marquee/woocommerce.png';
import android from '../assets/home/marquee/android.png';
import elementor from '../assets/home/marquee/elementor.png';
import figma from '../assets/home/marquee/figma.png';
import bootstrap from '../assets/home/marquee/bootstrap.png';

import Marquee from 'react-fast-marquee';

// cards 
import Card1 from '../components/cards/Card1.tsx';
import Card2 from '../components/cards/Card2.tsx';
import ProductCard1 from '../components/cards/ProductCard1.tsx';

// Our Products
import Product1 from '../assets/product/product1.webp';
import Product2 from '../assets/product/product2.webp';

// why choose us
import setting from '../assets/home/chooseUs/setting.webp';
import women from '../assets/home/chooseUs/women.webp';
import rocket from '../assets/home/chooseUs/rocket.webp';
import light from '../assets/home/chooseUs/light.webp';
import like from '../assets/home/chooseUs/like.webp';
import team from '../assets/home/chooseUs/team.webp';
import {useEffect} from "react";


function Home() {

    const services = [
        {
            img: webDevelopment,
            heading: 'Web Development' ,
            description: 'Whenever a person wants information regarding something specifically, the very first thing they do is to checkout website. If user finds website appealing and well designed, a trust is built-up in searcher’s mind.',
        },{
            img: desktopApplication,
            heading: 'Desktop Application',
            description: 'In this era, software is involved in everything and everywhere. To develop software exactly according to customer requirements, software development process must have to be followed. Preesoft team mainly focuses.',
        },{
            img: appDevelopment,
            heading: 'App Development',
            description: 'These days not even a single person is without cell phone. Either IPhone or android, everyone is using tons of applications according to their interests and needs. As cannot always carry laptops along with us all the time so.',
        },{
            img: graphicDesign,
            heading: 'Graphic Designing',
            description: 'Good presentation is always a basic tool of attention grabbing. To engage user’s attention, attractive design should be produced. Whenever we think of an organization or firm, we tend to automatically.',
        },{
            img: digitalMarketing,
            heading: 'Digital Marketing',
            description: 'Many Marketing strategies and techniques are used to access more and more customers. Now a days digital marketing is main stream. As it is lot easier to communicate with desired audience directly. There are many ways.',
        },{
            img: hosting,
            heading: 'Hosting',
            description: 'Web hosting provided by us is fast, reliable and with 99% uptime garauntee. Our services are safe and secure with 24/7 dedicated support system. You can safely rely on Preesoft as we are tried and trusted super fast shared hosting website service provider.',
        },
    ]

    const languagesLogos = [html, react, vue, wordpress, tailwind, php, nodejs, blockchain, js, photoshop, illustrator, laravel, ios, woocommerce, android, elementor, figma, bootstrap]

    const whyChooseUs = [
        {
            img: setting,
            heading: 'High Quality Hardware',
            description: 'We use top-notch hardware to ensure high standard services.',
        },{
            img: women,
            heading: 'Dedicated 24\\7 Support',
            description: 'We deliver 24/7 tech support to our customers, so that they do not face any issue.',
        },{
            img: rocket,
            heading: 'Agile & Working Style',
            description: 'We follow agile methodology to work fast and effeciently.',
        },{
            img: light,
            heading: 'Latest Technology',
            description: 'We use latest software standards, tools, platforms, frameworks and technologies.',
        },{
            img: like,
            heading: 'High Level of Usability',
            description: 'We always develop user friendly apps allowing users to easily operate the app.',
        },{
            img: team,
            heading: 'Collaborative Consultancy',
            description: 'We are dedicated to provide you full friendly environment to help you achieve what you needed.',
        },
    ]

    const ourProducts = [
        {
            img: Product1,
            heading: 'Point Of Sale (POS)',
            description: 'If you are a retailer and planning to have a computerized system for transactions against customers owned your goods. We will provide you highly functional system that will ease out payments in response of your items. The system will handle smallest details related to selling items, returning items, discounts and cancelling order.',
        },
        {
            img: Product2,
            heading: 'School Management System',
            description: 'Almost in every school all process became computerized. Attendance system to fee submission system computerized systems are used. We have developed a whole school management system that covers each and every aspect related to student records, quiz / assignments records, school branches management, online fee challan and many other features.',
        }
    ]

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        particlesJS.load('particles-js', '/node_modules/particles.js/demo/particles.json', function() {
        });
    }, []);
    return (
        <>
            <div className=" bg-[#1B2125] relative max-h-[700px]">
                <div id={'particles-js'} className={'absolute inset-0'}></div>
                <Page className='px-0 lg:px-6 h-full'>
                    <div
                        className="h-full md:py-20 my-auto bg-no-repeat bg-bottom lg:bg-[85%] flex flex-col md:flex-row items-center justify-center md:justify-between bg-none">
                        <div className="z-10 flex flex-col p-6 lg:px-0 text-white gap-y-4">
                            <h1><span
                                className='text-yellow'>We Offer</span> <br/> <span>Web Development</span></h1>
                            <p className="p1 max-w-[500px]">We help build and manage a team of
                                world-class developers to bring your vision to life</p>
                            <a href={'#main'} className='cursor-pointer w-fit px-5 py-2 bg-transparent border border-white text-[15px] font-[450]'>Explore
                                More</a>
                        </div>

                        <div className="">
                            <img className='max-w-[500px] w-full' src={mainBanner} alt="mainBanner"/>
                        </div>
                    </div>
                </Page>
            </div>

            <Page className='px-[10px] pt-5 pb-20'>
                <div className='flex flex-col items-center justify-center py-8 gap-y-4'>
                    <h2 className=' text-[22px] md:text-[26px] lg:text-[32px] font-semibold'><span className='text-secondary'>What We Do</span> <span className='text-primary'>- We Do It Well</span></h2>
                    <p className="text-primary max-w-[820px] text-center">Our Professionals’ have lots of experience in Web & App Development, Designing & Marketing. We will take your business to the Next Level.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    { services.map((service, index) => (
                        <Card1 key={index} heading={service.heading} img={service.img}>{service.description}</Card1>
                    ))}
                    </div>
            </Page>

            <div className="bg-[#F5F4F5] py-12 space-y-12">
                <h1 className="text-blue font-semibold text-center">We Work On</h1>
                <Marquee speed={180} className="w-full">
                    <div className="flex gap-x-[300px]">
                        {languagesLogos.map((logo, index) => (
                            <img
                                className={`px-4 flex-shrink-0 ${ index == 0 ? 'ml-[300px]' : ''}`}
                                key={index}
                                src={logo}
                                alt="logo"
                            />
                        ))}
                    </div>
                </Marquee>
            </div>

            <Page className='py-[30px] md:py-[45px] px-12'>
                <h2 className='font-semibold text-center'>Our Products</h2>

                <div className=" flex flex-col mt-8 md:mt-14 gap-y-8">
                    {ourProducts.map((ourProduct, index) => (
                        <ProductCard1 key={index} directionClass={`${index % 2 != 0 ? 'md:flex-row-reverse' : ''}`} img={ourProduct.img} heading={ourProduct.heading}>{ourProduct.description}</ProductCard1>
                    ))}
                    <div className="flex justify-center w-full">
                        <button className='px-6 py-2 bg-secondary text-white text-[15px] rounded-[3px]'>All Products</button>
                    </div>
                </div>
            </Page>

            <div className="w-full py-8 md:py-[42px] bg-primary text-white">
                <Page className='space-y-6'>
                    <h2 className="font-bold text-center">Why Choose Us</h2>

                    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
                        {whyChooseUs.map((object, index) => (
                            <Card2 key={index} img={object.img} heading={object.heading}>{object.description}</Card2>
                        ))}
                    </div>
                </Page>
            </div>
        </>
    )
}

export default Home

import Page from '../layouts/Page.tsx';

// images
import App1 from '../assets/apps/BhookLagi.webp';
import App2 from '../assets/apps/SMS.webp';
import App3 from '../assets/apps/Koidia.webp';
import App4 from '../assets/apps/ITW-tax.webp';
import App5 from '../assets/apps/The-Boulevard-Now.webp';
import App6 from '../assets/apps/We-plot.webp';
import App7 from '../assets/apps/Eccly-App.webp';
import App8 from '../assets/apps/Eko-PriJAva.webp';
import App9 from '../assets/apps/Bright-Vision.webp';
import App10 from '../assets/apps/MechMobil-1.webp';
import App11 from '../assets/apps/Sifa-e-lock.webp';
import App12 from '../assets/apps/Snabb.webp';
import App13 from '../assets/apps/Helper.png';
import App14 from '../assets/apps/Little-Nudge.webp';
import App15 from '../assets/apps/LuckOnLive.webp';
import App16 from '../assets/apps/Epic-Wallpaper.webp';
import App17 from '../assets/apps/ezelogs.webp';

//cards
import Header from '../components/Header.tsx';
import Portfolio from '../components/cards/Portfolio.tsx';

const Apps = () => {
    const mobileApplications = [
        {
            heading: 'BhookLagi',
            img: App1,
        },{
            heading: 'sms',
            img: App2,
        },{
            heading: 'Koidia',
            img: App3,
        },{
            heading: 'ITW tax',
            img: App4,
        },{
            heading: 'The-Boulevard-Now',
            img: App5,
        },{
            heading: 'We Plot',
            img: App6,
        },{
            heading: 'Eccly App',
            img: App7,
        },{
            heading: 'Eko PrijAva',
            img: App8,
        },{
            heading: 'Bright Vision',
            img: App9,
        },{
            heading: 'MechMobile',
            img: App10,
        },{
            heading: 'Sifa e-lock',
            img: App11,
        },{
            heading: 'Snabb',
            img: App12,
        },{
            heading: 'Helper',
            img: App13,
        },{
            heading: 'Little Nudge',
            img: App14,
        },{
            heading: 'LuckOnLive',
            img: App15,
        },{
            heading: 'Epic Wallpaper',
            img: App16,
        },{
            heading: 'Ezelogs',
            img: App17,
        }
    ]

    return (
        <>
        <Header heading='Apps Portfolio' />
            <Page className='max-w-[1400px] flex justify-center'>
                <div className=" grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-16 mx-auto">
                    {mobileApplications.map((mobileApplication, index) => (
                        <Portfolio key={index} className='md:max-w-[300px]' heading={mobileApplication.heading} img={mobileApplication.img} />
                    ))}
                </div>
            </Page>
        </>
    )
}

export default Apps

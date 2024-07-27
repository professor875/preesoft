
import Page from '../layouts/Page.tsx';

// images
import Website1 from '../assets/websites/website1.webp';
import Website2 from '../assets/websites/website2.webp';
import Website3 from '../assets/websites/website3.webp';
import Website4 from '../assets/websites/website4.webp';
import Website5 from '../assets/websites/website5.webp';
import Website6 from '../assets/websites/website6.webp';
import Website7 from '../assets/websites/website7.webp';
import Website8 from '../assets/websites/website8.webp';
import Website9 from '../assets/websites/website9.webp';
import Website10 from '../assets/websites/website10.webp';
import Website11 from '../assets/websites/website11.webp';
import Website12 from '../assets/websites/website12.webp';
import Website13 from '../assets/websites/website13.webp';
import Website14 from '../assets/websites/website14.webp';
import Website15 from '../assets/websites/website15.webp';
import Website16 from '../assets/websites/website16.webp';
import Website17 from '../assets/websites/website17.webp';
import Website18 from '../assets/websites/website18.webp';

//cards
import Header from '../components/Header.tsx';
import Portfolio from '../components/cards/Portfolio.tsx';

function Websites() {
    const websites = [
        {
            heading: 'iRedhawk',
            img: Website1,
        },{
            heading: 'Preestore',
            img: Website2,
        },{
            heading: 'Global Tax Solutions',
            img: Website3,
        },{
            heading: 'Ezlogs',
            img: Website4,
        },{
            heading: 'IPEL',
            img: Website5,
        },{
            heading: 'The Boulevard',
            img: Website6,
        },{
            heading: 'Mechmobil',
            img: Website7,
        },{
            heading: 'KashZway',
            img: Website8,
        },{
            heading: 'Dar-e-Arqam',
            img: Website9,
        },{
            heading: 'Krazerz',
            img: Website10,
        },{
            heading: 'American Research',
            img: Website11,
        },{
            heading: 'Qrishi Network',
            img: Website12,
        },{
            heading: 'Cinemoon Films',
            img: Website13,
        },{
            heading: 'Kids Play Bus',
            img: Website14,
        },{
            heading: 'Mj Engineering',
            img: Website15,
        },{
            heading: 'Xtreme-ID',
            img: Website16,
        },{
            heading: 'Tibb Aur Tabeeb',
            img: Website17,
        },{
            heading: 'Cleaner Search',
            img: Website18,
        },
    ]

    return (
        <>
        <Header heading='Web Portfolio' />
            <Page className='max-w-[1400px] flex justify-center'>
                <div className=" grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 mx-auto">
                    {websites.map((website, index) => (
                        <Portfolio key={index} heading={website.heading} img={website.img} />
                    ))}
                </div>
            </Page>
        

        </>
    )
}

export default Websites

import Page from '../layouts/Page.tsx';

// images
import Digital1 from '../assets/product/digital1.webp';
import Digital2 from '../assets/product/digital2.webp';
import Digital3 from '../assets/product/digital3.webp';

//cars
import ProductCard1 from '../components/cards/ProductCard1.tsx';
import Header from '../components/Header.tsx';

const DigitalMarketing = () => {
    const digitalMarketing = [
        {
            img: Digital1,
            heading: 'Social Media Marketing',
            description: 'To represent yourself as an outstanding organization / brand your logo have to be unique and specific. Preesoft designer’s will design best logos for you',
        },
        {
            img: Digital2,
            heading: 'Search Engine Optimization (SEO)',
            description: 'Many organizations prefer brochure as a promotional strategy. To make your brochure attractive and full of information we have best designing team who will design winning informative brochure for you.',
        },
        {
            img: Digital3,
            heading: 'SMS Marketing',
            description: 'For sake of advertisement of your product/ organization, we will provide you high-end professionally designed attractive flyers for your promotional activity.',
        },
    ]

    return (
        <>
        <Header heading='Digital Marketing' />

        <Page className='pt-[40px]'>
            <p className="text-justify">Many marketing strategies and techniques are used to access more and more customers. Now a days digital marketing is main stream. As it is lot easier to communicate with desired audience directly. There are many ways to do digital marketing and SEO is commonly used now days. If you want us to make you in the top of the search Preesoft will help you to optimize your content in best way. SMS advertisement and email advertisement are the main sources for direct commercial communication between organization and customers for brand awareness. Preesoft will give you this support to convince your customers for loyalty of yours towards them.</p>
        </Page>

        <Page className='px-12'>
            <div className=" flex flex-col mt-8 md:mt-14 gap-y-2">
                {digitalMarketing.map((item, index) => (
                    <ProductCard1 key={index} directionClass={`${index % 2 != 0 ? 'md:flex-row-reverse' : ''}`} img={item.img} heading={item.heading}>{item.description}</ProductCard1>
                ))}
            </div>
        </Page>
        </>
    )
}

export default DigitalMarketing

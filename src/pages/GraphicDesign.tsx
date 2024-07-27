import Page from '../layouts/Page.tsx';

// images
import Graphic1 from '../assets/product/graphic1.webp';
import Graphic2 from '../assets/product/graphic2.webp';
import Graphic3 from '../assets/product/graphic3.webp';
import Graphic4 from '../assets/product/graphic4.webp';

//cars
import ProductCard1 from '../components/cards/ProductCard1.tsx';
import Header from '../components/Header.tsx';

function GraphicDesign() {
    const graphicDesign = [
        {
            img: Graphic1,
            heading: 'Logo Designing',
            description: 'To represent yourself as an outstanding organization / brand your logo have to be unique and specific. Preesoft designer’s will design best logos for you',
        },
        {
            img: Graphic2,
            heading: 'Broucher Designing',
            description: 'Many organizations prefer brochure as a promotional strategy. To make your brochure attractive and full of information we have best designing team who will design winning informative brochure for you.',
        },
        {
            img: Graphic3,
            heading: 'Flyers Designing',
            description: 'For sake of advertisement of your product/ organization, we will provide you high-end professionally designed attractive flyers for your promotional activity.',
        },
        {
            img: Graphic4,
            heading: 'Vcard Designing',
            description: 'If you want to share your organization’s contact information with very little content, go for Vcard. Preesoft will design professionally detailed vcard for you so you can attain a quick overview of your business / organization by user.',
        },
    ]

    return (
        <>
        <Header heading='Graphic Design' />

        <Page className='pt-[40px]'>
            <p className="text-justify">In this era, software is involved in everything and everywhere. To develop software exactly according to customer requirements, software development process must have to be followed. Preesoft team mainly focuses on high-end solutions and select best solution among all for accuracy. We assure best customized software depending on perceived needs. Our Software development team follows innovative approaches to manage and produce high quality products. As high quality in our priority, we go through detailed process of planning , designing , programming and testing to deliver excellent product in committed duration.</p>
        </Page>

        <Page className='px-12'>
            <div className=" flex flex-col mt-8 md:mt-14 gap-y-2">
                {graphicDesign.map((design, index) => (
                    <ProductCard1 key={index} directionClass={`${index % 2 != 0 ? 'md:flex-row-reverse' : ''}`} img={design.img} heading={design.heading}>{design.description}</ProductCard1>
                ))}
            </div>
        </Page>


        </>
    )
}

export default GraphicDesign

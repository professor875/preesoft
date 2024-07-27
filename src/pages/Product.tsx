import Page from '../layouts/Page.tsx';

// images
import Product1 from '../assets/product/product1.webp';
import Product2 from '../assets/product/product2.webp';
import Product3 from '../assets/product/product3.webp';
import Product4 from '../assets/product/product4.webp';
import Product5 from '../assets/product/product5.webp';

//cars
import ProductCard1 from '../components/cards/ProductCard1.tsx';
import Header from '../components/Header.tsx';


const Product = () => {
    const products = [
        {
            img: Product1,
            heading: 'Point Of Sale (POS)',
            description1: 'If you are a retailer and planning to have a ',
            span: 'Computerized System for Transactions',
            description2: 'against customers owned your goods. We will provide you highly functional system that will ease out payments in response of your items. The system will handle smallest details related to selling items, returning items, discounts and cancelling order.',
        },
        {
            img: Product2,
            heading: 'School Management System',
            description1: 'Almost in every school all process became computerized. Attendance system to fee submission system computerized systems are used. We have developed a whole ',
            span: 'School Management System',
            description2: 'that covers each and every aspect related to student records, quiz / assignments records, school branches management, online fee challan and many other features.',
        },
        {
            img: Product3,
            heading: 'Installment Management System',
            description1: 'Installment program is one of the integrated program for the management of operations by ',
            span: 'Installments and Repayment',
            description2: ' installments and the issuance of promissory notes.',
        },
        {
            img: Product4,
            heading: 'School Management System',
            description1: 'If you are running a huge business you may need',
            span: ' Inventory Management System ',
            description2: 'for the sake to manage each and every item stock. Preesoft will provide you a good solution for your inventory taking care of every little detail of items i.e. what is in stock currently? what is going to end soon? is there any damaged items? etc.',
        },
        {
            img: Product5,
            heading: 'Food Order Booking',
            description1: 'Installment program is one of the integrated program for the management of operations by ',
            span: 'installments and repayment installments',
            description2: 'and the issuance of promissory notes.4',
        }
    ]

    return (
        <>
        <Header heading='Products' />

        <Page className='pt-[40px]'>
            <p className="text-justify">In this era, software is involved in everything and everywhere. To develop software exactly according to customer requirements, software development process must have to be followed. Preesoft team mainly focuses on high-end solutions and select best solution among all for accuracy. We assure best customized software depending on perceived needs. Our software development team follows innovative approaches to manage and produce high quality products. As high quality is our priority, we go through detailed process of planning , designing , programming and testing to deliver excellent product in committed duration.</p>
        </Page>

        <Page className='px-12'>
            <div className=" flex flex-col mt-8 md:mt-14 gap-y-2">
                {products.map((product, index) => (
                    <ProductCard1 description1={product.description1} description2={product.description2} span={product.span} key={index} directionClass={`${index % 2 != 0 ? 'md:flex-row-reverse' : ''}`} img={product.img} heading={product.heading} />
                ))}
            </div>
        </Page>


        </>
    )
}

export default Product

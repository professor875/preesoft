
import Page from '../layouts/Page.tsx';
import Header from '../components/Header.tsx';
// images
import WebDevelopment1 from '../assets/webDevelopment/webDevelopment1.webp';
import WebDevelopment2 from '../assets/webDevelopment/webDevelopment2.webp';
import WebDevelopment3 from '../assets/webDevelopment/webDevelopment3.webp';
//cars
import ProductCard1 from '../components/cards/ProductCard1.tsx';

function webDevelopment() {
    const webDevelopmentServices = [
        {
            img: WebDevelopment1,
            heading: 'Web Designing',
            description1: 'Our cohesive team of web designers guarantees to provide a top-quality interface and web graphic designs. Utilizing the latest tools. Hence, maintaining the highest degree of distinction. We provide up-to-mark appearance designs & layouts. They are user-friendly, aesthetically pleasing, and on top meeting up with all the requirements. While designing a website, our main focus is keeping an eye on user aspects. We are fully awakening to the varying needs of users accessing through different platforms like Mobile or Desktop. Preesoft’s methodology behind coping up with different target audiences mainly includes the usage of ',
            spanText: 'Responsive and Adaptive designs.',
            description2: 'Responsive design enables us to make dynamically moving content. On the other hand, In Adaptive designs, the content is made to remain fixed in various sizes as per the screen. Our team of web designers is completely cognizant of the necessary integration between appearance and functionality. Hence maintaining speed, ranking & searchability.',
        },
        {
            img: WebDevelopment2,
            heading: 'WordPress',
            description1: 'WordPress adds a professional look to any website. Preesoft Pvt Ltd having all the required expertise. Ensures to provide development & customization in WordPress. Which can be used for blogging, media ',
            spanText: 'Galleries & Online Stores',
            description2: ' WordPress can be used far beyond blogging. With its plugin directory & ample themes, WordPress can be molded into numerous usages. Our team of experts has deep knowledge of WordPress development. Including the languages that WordPress uses such as HTML, CSS, PHP, and MySQL. WordPress is believed to be evolving all the time, but we are successfully catering to all the updates. Intense knowledge in 3 principal components is helping us a great deal in building success stories in the field of WordPress. These include WordPress core, Themes & Plugins. We hold perfection in dealing with system crashes. In addition to that, we keep a close eye on potential security concerns.',
        },
        {
            img: WebDevelopment3,
            heading: 'E-Commerce',
            description1: 'Business traditions are changing at a tremendous pace. Traditional Businesses are getting replaced by online ones. Preesoft helps you out in creating ',
            spanText: 'E-commerce websites.',
            description2: ' Share your ideas with us and we promise to transform them into realities. The world of E-Commerce has moved a great deal ahead of its early days when it was done through calls and emails. E-commerce websites are leading the whole business these days. E-commerce websites provide you the ease by which buying & selling products and services can be acquired from a single portal. Huge transactions are being done within seconds through these websites without having to compromise on the security issues. Our professionals, perfectly set up all kinds of E-commerce websites. Which include: Business to Business Website, Business to Consumer Website, Consumer to Consumer Website, Consumer to Business Website. Our experts are fully aware of the legal policies behind setting an E-Commerce website. Which include two mandatory regulations GDPR and CCPA. Some other basic policies such as Privacy Policy, Terms, and Conditions & Disclaimers are also set up by us. Preesoft is the ultimate destination for all those looking to excel in the E-Commerce world.',
        }
    ]

    return (
        <>
        <Header heading='Web Development' />

        <Page className='pt-[40px]'>
            <p className="text-justify">In pursuit of some information, the first thing that clicks the aspirant is to search for that particular information on a website. The next big thing for him/her is to check for the authenticity of the source.  A general approach for this very purpose is to analyze the professionalism, design & structure of the website. Gaining that trust is the ultimate aim of any website. And is heavily dependent on web developer skills. Preesoft Pvt Ltd holds top-notch skills in web development. Our team is exemplary in developing static & dynamic websites, e-commerce websites, management, and various other systems are convincingly developed by Preesoft Pvt Ltd. We deploy up-to-date frameworks of PHP including Laravel, Codelgniter, Cake PHP, PHP MVC, etc. Web development varies from developing a single static page comprising of plain text to complex web applications and network services. Preesoft Pvt Ltd experts have got it all covered. Our front-end developers are fully aware of the requirements of various Business and relevant websites. We are completely mindful of changing techniques and challenges in coping up with a wide variety of users. A team of front-end developers at Preesoft Pvt Ltd has a strong grip on all required capabilities including Web development languages CSS, HTML, and JavaScript. Our back-end developers sort out the accurate logic behind building static and dynamic websites. Databases, scripting, and website architecture are thoroughly managed here at Preesoft Pvt Ltd. Preesoft’s team of back-end developers firmly holds the knowledge of API (REST & SOAP), Server, Database & Cache, and Web development languages. Above all Preesoft Pvt Ltd is client-focused & customer-centric in providing all the web development services and solutions. Innovation, Dedication and Customer assistance is our ultimate objective.</p>
        </Page>
        <Page className='px-8 xl:px-16'>
            <div className=" flex flex-col md:mt-14 gap-y-8">
                {webDevelopmentServices.map((service, index) => (
                    <ProductCard1 className='pt-0 lg:px-2' key={index} img={service.img} directionClass={`${index % 2 == 0 ? 'md:flex-row-reverse' : ''}`} heading={service.heading}> {service.description1} <span className="text-secondary hover:text-black transition-all duration-300">{service.spanText}</span> {service.description2}</ProductCard1>
                ))}

            </div>
        </Page>
        </>
    )
}

export default webDevelopment

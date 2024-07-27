import Page from '../layouts/Page.tsx';

import Header from '../components/Header.tsx';
import AddressCard from "../components/cards/AddressCard.tsx";
import ContactForm from "../components/ContactForm.tsx";
import Facebook from "../components/svg/Facebook.tsx";
import Linkedin from "../components/svg/Linkedin.tsx";
import Instagram from "../components/svg/Instagram.tsx";
import Twitter from "../components/svg/Twitter.tsx";

const ContactUs = () => {

    const addresses = [
        {
            country : 'pakistan',
            address : '163 Block F, Johar Town Lahore',
            phone : '04237870398'
        },
        {
            country : 'Canada',
            address : '5006 Rosebush Rd, Mississauga L5M5M4, Canada',
            phone : '+1 (647) 282-8655'
        },
        {
            country : 'USA',
            address: '366 N Broadway, New York 11753',
            phone: '+1 929 483 1368'
        },
        {
            country : 'South Africa',
            address: 'Building B, Top Floor 9 Armitage Road Bird Sanctuary Pietermaritzburg, South Africa',
            phone: '+27 76 647 6228'
        }
    ];

    return (
        <>
        <Header heading='Contact Us' />

        <Page className='grid grid-cols-6 lg:grid-cols-12 mt-24 gap-y-16'>
            <div className="col-span-6 space-y-4">
                <h2>Contact Details</h2>
                <p className="p1">If you have any queries or suggestions, we would love to hear from you!</p>

                <h2>Emails:</h2>

                <p className="p1"><span className="font-[500]">Inquiry:</span>hello@preesoft.com</p>
                <p className="p1"><span className="font-[500]">Resume:</span>hello@preesoft.com</p>
                <p className="p1"><span className="font-[500]">Quotation:</span>hello@preesoft.com</p>

                <h2>Working Hours:</h2>

                <div className="grid grid-cols-2">
                    <p className="p1">Monday - Friday:</p>
                    <p className="p1">9:00 AM - 6:00PM</p>

                    <p className="p1">Saturday - Sunday</p>
                    <p className="p1 text-secondary">Closed</p>
                </div>

                <h2>Social Links</h2>

                <div className="flex items-center justify between gap-4">
                    <a href="#"><Facebook/></a>
                    <a href="#"><Linkedin/></a>
                    <a href="#"><Instagram/></a>
                    <a href="#"><Twitter/></a>
                </div>


            </div>

            <div className="col-span-6 space-y-4">
                <h2>Get In Touch</h2>
                <ContactForm />
            </div>

        </Page>
            <Page className='my-12 space-y-8'>
                <h2 className='text-center'>Addresses</h2>

                <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-3">
                    {addresses.map((address, index) => (
                        <AddressCard
                            key={index}
                            heading={address.country}
                            address={address.address}
                            phone={address.phone}
                        />
                    ))}
                </div>

            </Page>


        </>
    )
}

export default ContactUs

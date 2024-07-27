import Header from '../components/Header.tsx';
import client1 from '../assets/aboutUs/client1.png';
import client2 from '../assets/aboutUs/client2.png';
import client3 from '../assets/aboutUs/client3.png';
import client4 from '../assets/aboutUs/client4.png';
import client5 from '../assets/aboutUs/client5.png';
import client6 from '../assets/aboutUs/client6.png';
import client7 from '../assets/aboutUs/client7.png';
import client8 from '../assets/aboutUs/client8.png';
import Page from '../layouts/Page.tsx';


const OurClients = () => {
    const ourClients = [client1, client2, client3, client4, client5, client6, client7, client8]
    return (
        <>
            <Header heading='Our Clients' />

            <Page className="max-w-[1600px] grid justify-items-center gap-4 grid-cols-2 md:grid-cols-4">
                {ourClients.map((img, index) => (
                    <div key={index} className="max-w-[300px]">
                        <img src={img} alt="img"/>
                    </div>
                ))}
            </Page>
        </>
    )
}

export default OurClients

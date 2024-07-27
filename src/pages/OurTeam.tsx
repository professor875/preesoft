import Header from '../components/Header.tsx';
import ourTeam1 from '../assets/aboutUs/ourTeam1.png';
import ourTeam2 from '../assets/aboutUs/ourTeam2.png';
import ourTeam3 from '../assets/aboutUs/ourTeam3.jpeg';
import ourTeam4 from '../assets/aboutUs/ourTeam4.png';
import Page from '../layouts/Page.tsx';
import Facebook from "../components/svg/Facebook.tsx";
import Linkedin from "../components/svg/Linkedin.tsx";
import Instagram from "../components/svg/Instagram.tsx";
import Twitter from "../components/svg/Twitter.tsx";

const OurTeam = () => {
    const ourTeam = [
        {
            img: ourTeam2,
            name: 'Irfan Khan',
            title: 'Business Development Manager (USA)',
        },{
            img:   ourTeam3,
            name: 'Mubashir Khan',
            title: 'Chief Technology Officer (CTO)',
        },{
            img:   ourTeam4,
            name: 'Abdulah',
            title: 'Project Manager',
        }
    ]
    return (
        <>
            <Header heading='Our Team' />
            
            <Page className="flex justify-center items-center w-full my-16 lg:my-24">
                <div className="flex flex-col justify-center items-center">
                    <div
                        className="max-h-[150px] md:max-h-[450px] max-w-[150px] md:max-w-[450px] overflow-hidden bg-center bg-no-repeat rounded-full my-3">
                        <img src={ourTeam1} alt=""/>
                    </div>
                    <h3 className="font-semibold text-center">Abdul Majeed Shehzad</h3>
                    <p className="text-sm md:text-lg font-[300] tracking-[10px] text-center">Founder & CEO</p>
                    <hr className=" my-5 border-2 w-32  border-secondary"/>
                    <div className="flex items-center justify between gap-4">
                        <a href="#"><Facebook/></a>
                        <a href="#"><Linkedin/></a>
                        <a href="#"><Instagram/></a>
                        <a href="#"><Twitter/></a>
                    </div>
                </div>
            </Page>
            <Page
                className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center max-w-[1800px] gap-y-6 md:gap-y-16">
                {ourTeam.map((member, index) => (
                    <div key={index} className={`flex flex-col justify-center items-center max-w-[500px] mx-auto`}>
                        <div
                            className="max-h-[150px] md:max-h-[200px] max-w-[150px] md:max-w-[200px] overflow-hidden bg-center bg-no-repeat rounded-full my-3">
                            <img src={member.img} alt="img"/>
                        </div>
                        <h3 className="font-semibold text-center">{member.name}</h3>
                        <p className="text-sm md:text-lg font-[300] tracking-[10px] text-center">{member.title}</p>
                        <hr className=" my-5 border-2 w-32  border-secondary"/>
                    </div>
                ))}

            </Page>


        </>
    )
}

export default OurTeam

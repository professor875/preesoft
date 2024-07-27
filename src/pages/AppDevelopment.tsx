import Page from '../layouts/Page.tsx';

// images
import AppDevelopment1 from '../assets/product/appDevelopment1.webp';
import AppDevelopment2 from '../assets/product/appDevelopment2.webp';

import Header from '../components/Header.tsx';

const AppDevelopment = () => {
    return (
        <>
        <Header heading='App Development' />

        <Page className='pt-[40px]'>
            <p className="text-justify">These days not even a single person is without cell phone. Either iPhone or android, everyone is using tons of applications according to their interests and needs. As cannot always carry laptops along with us all the time so many additional features are introduced in mobile phones. From calculator, alarm to appointments now a days everything is done by mobile apps. Preesoft is highly qualified to create superb quality of applications according to person’s need. Preesoft have already development many App products such as Tutor, Fusion Net, Tourist Trends and many more which are liked and used by number of people. Preesoft App development professional team uses updated and latest of Android studio 3.0 platform to build application having great efficiency, also provide customized APIs. On the other hand, for iPhone users, Preesoft gives top-notch quality of IOS according to users taste and need.</p>
        </Page>

        <Page className='px-12'>
            <div className="flex flex-col mt-8 ">
                <div className="flex flex-col md:flex-row items-start justify-around gap-8">
                    <div className={`gap-y-6 lg:gap-y-10 flex flex-col items-center xl:pt-24 sm:min-w-[370px]`}>
                        <h2 className="text-blue text-center">Android Development</h2>
                        <p className="text-justify max-w-[500px]">These day’s large number of people use android mobile phones as these are convenient to all of them. Nearly every person tries to sort out daily tasks (appointments, food order, buying, hotel bookings etc) by using cell phones. Preesoft develop outstanding android Apps and customized APIs using latest android studio 3.0 framework to provide you most efficient application to match your requirements.</p>
                    </div>
                    <div className={`max-w-[380px]`}>
                        <img className='w-full' src={AppDevelopment1} alt="home2" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-start justify-around gap-8">
                    <div className={`max-w-[380px]`}>
                        <img className='' src={AppDevelopment2} alt="home2" />
                    </div>
                    <div className={`gap-y-6 lg:gap-y-10 flex flex-col items-center xl:pt-24 sm:min-w-[370px]`}>
                        <h2 className="text-blue text-center">IOS Development</h2>
                        <p className="text-justify max-w-[500px]">IPhone lovers are obsessed with their mobile phones, so they want to do almost everything using their gadgets by few clicks. Preesoft’s IOS professional team develop top quality IOS Apps having user friendly and attractive UI with excellent functionalities and app extensions fulfilling all your requirements at its best.</p>
                    </div>
                    
                </div>
            </div>
        </Page>

        </>
    )
}

export default AppDevelopment

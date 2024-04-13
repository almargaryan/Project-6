import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Business from "./components/Business";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Client from "./components/Client";

function App() {

    // const styles = {
    //     boxWidth: "xl:max-w-[1280px] w-full",
    //
    //     heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    //     paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
    //
    //     flexCenter: "flex justify-center items-center",
    //     flexStart: "flex justify-center items-start",
    //
    //     paddingX: "sm:px-16 px-6",
    //     paddingY: "sm:py-16 py-6",
    //     padding: "sm:px-16 px-6 sm:py-12 py-4",
    //
    //     marginX: "sm:mx-16 mx-6",
    //     marginY: "sm:my-16 my-6",
    // };

    return (
        <div className="bg-primary w-full overflow-hidden">
                <div className={`xl:max-w-[1280px] w-full`}>
                    <Navbar />
                </div>

            <div className={`bg-primary flex justify-center items-start`}>
                <div className={`xl:max-w-[1280px] w-full`}>
                    <Hero />
                </div>
            </div>

            <div className={`bg-primary px-36 lg:px-32 md:px-24 sm:px-20 ss:px-12 xs:px-6 flex justify-center items-center`}>
                <div className={`xl:max-w-[1280px] w-full`}>
                    <Stats />
                    <Business />
                    <Billing />
                    <CardDeal />
                    <Testimonials />
                    <Client/>
                    <CTA />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
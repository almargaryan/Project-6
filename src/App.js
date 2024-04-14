import React from 'react';
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics";
import Business from "./components/Business";
import Billing from "./components/Billing";
import Card from "./components/Card";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";
import Footer from "./components/Footer";
import Client from "./components/Client";
import Home from "./components/Home";

function App() {

    return (
        <div className="bg-primary w-full">
                <div className={`w-full`}>
                    <Navbar/>
                </div>

            <div className={`bg-primary flex justify-center items-start`}>
                <div className={`w-full`}>
                    <Home/>
                </div>
            </div>

            <div className={`bg-primary flex justify-center items-center`}>
                <div className={`w-full px-36 lg:px-32 md:px-24 sm:px-20 ss:px-12 xs:px-6`}>
                    <Statistics/>
                    <Business/>
                    <Billing/>
                    <Card/>
                    <AboutUs/>
                    <Client/>
                    <Service/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;
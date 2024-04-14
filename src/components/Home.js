import React from 'react';
import {arrowUp, discount, robot} from "../assets/image";

function Home(props) {
    return (
        <div id="home" className="flex md:flex-row flex-col sm:py-22 py-6">
            <div className="flex-1 flex justify-center items-start flex-col px-36 lg:px-32 md:px-24 sm:px-20 ss:px-12 xs:px-6">
                <div className="absolute z-[1] w-[15%] h-[50%] white_light left-0" />
                <div className="flex items-center py-1 px-3 rounded-[10px] mb-2 bg-discount">
                    <img src={discount} alt="" className="w-[30px] h-[32px]" />
                    <p className="font-normal text-dimWhite text-[18px] ml-2">
                        <span className="text-white">20%</span> DISCOUNT FOR{" "}
                        <span className="text-white">1 MONTH</span> ACCOUNT
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-semibold ss:text-[78px] text-[58px] text-white">
                        The Next <br className="sm:block hidden" />{" "}
                        <span className="text_color">Generation</span>{" "}
                    </h1>
                    <div className="sm:flex hidden md:mr-4 mr-0">
                        <div className={`flex justify-center items-center w-[140px] h-[140px] rounded-full bg_get_started p-[2px] cursor-pointer`}>
                            <div className={`flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                                <div className={`flex justify-center items-start flex-row`}>
                                    <p className="font-medium text-[18px] ">
                                        <span className="text_color">Get</span>
                                    </p>
                                    <img src={arrowUp} alt="" className="w-[23px] h-[23px] mt-0.5 ml-1" />
                                </div>

                                <p className="font-medium text-[18px]">
                                    <span className="text_color">Started</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="font-semibold ss:text-[70px] text-[52px] text-white w-full">
                    Payment Method.
                </h1>
                <p className="font-normal text-dimWhite text-[18px] max-w-[490px] mt-8">
                    Our team of experts uses a methodology to identify the credit cards
                    most likely to fit your needs. We examine annual percentage rates,
                    annual fees.
                </p>
            </div>

            <div className="flex-1 flex justify-center items-center relative mt-20 md:mt-0">
                <img src={robot} alt="" className="w-[100%] h-[100%] relative z-[5]" />
                <div className="absolute z-[0] w-[60%] h-[45%] top-0 pink_light" />
                <div className="absolute z-[0] w-[70%] h-[50%] right-25 bottom-45 blue_light" />
            </div>

            <div className="sm:hidden flex justify-center items-center">
                <div className={`flex justify-center items-center w-[140px] h-[140px] rounded-full bg_get_started p-[2px] cursor-pointer`}>
                    <div className={`flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                        <div className={`flex justify-center items-start flex-row`}>
                            <p className="font-medium text-[18px]">
                                <span className="text_color">Get</span>
                            </p>
                            <img src={arrowUp} alt="" className="w-[23px] h-[23px] mt-0.5 ml-1" />
                        </div>

                        <p className="font-medium text-[18px]">
                            <span className="text_color">Started</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
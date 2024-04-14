import React from 'react';
import { apple, bill, google } from "../assets/image";


function Billing(props) {

    return (
        <div id="features" className={`flex md:flex-row flex-col-reverse sm:py-16 py-6`}>
            <div className={`flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative`}>
                <img src={bill} alt="" className="w-[100%] h-[100%] relative z-[5]" />
                <div className="absolute z-[3] -left-60 top-0 w-[50%] h-[80%] rounded-full blue_light2" />
                <div className="absolute z-[0] w-[70%] h-[50%] -left-1/2 bottom-0 rounded-full pink_light" />
            </div>

            <div className={`flex-1 flex justify-center items-start flex-col`}>
                <h2 className={`font-semibold xs:text-[48px] text-[40px] text-white w-full`}>
                    Easily control your <br className="sm:block hidden" /> billing &
                    invoicing
                </h2>
                <p className={`font-normal text-dimWhite text-[18px] max-w-[490px] mt-5`}>
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
                    aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
                    placerat.
                </p>

                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                    <a href={"https://www.apple.com/app-store/"}>
                        <img src={apple} alt="" className="w-[130px] h-[45px] mr-5" />
                    </a>
                    <a href={"https://play.google.com/"}>
                        <img src={google} alt="" className="w-[145px] h-[45px]" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Billing;
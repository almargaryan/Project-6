import React from 'react';

function Service(props) {

    return (
        <div className={`flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg_service rounded-[20px] shadow`}>
            <div className="flex-1 flex flex-col">
                <h2 className={`font-semibold xs:text-[48px] text-[40px] text-white w-full`}>Let’s try our service now!</h2>
                <p className={`font-normal text-dimWhite text-[18px] max-w-[490px] mt-5`}>
                    Everything you need to accept card payments and grow your business
                    anywhere on the planet.
                </p>
            </div>

            <div className={`flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                <button type="button" className={`py-4 px-6 font-medium text-[18px] text-primary bg_get_started rounded-[10px] outline-none mt-10`}>
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default Service;
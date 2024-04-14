import React from 'react';
import { send, shield, star } from "../assets/image";

function Business(props) {
    const features = [
        {
            id: "feature-1",
            icon: star,
            title: "Rewards",
            content:
                "The best credit cards offer some tantalizing combinations of promotions and prizes",
        },
        {
            id: "feature-2",
            icon: shield,
            title: "100% Secured",
            content:
                "We take proactive steps make sure your information and transactions are secure.",
        },
        {
            id: "feature-3",
            icon: send,
            title: "Balance Transfer",
            content:
                "A balance transfer credit card can save you a lot of money in interest charges.",
        },
    ];

    const FeatureCard = ({ icon, title, content, index }) => (
        <div className={`flex flex-row p-5 rounded-[20px] ${index !== features.length - 1 ? "mb-5" : "mb-0"} feature-card`}>
            <div className={`w-[65px] h-[65px] rounded-full flex justify-center items-center bg-dimBlue`}>
                <img src={icon} alt="" className="w-[50%] h-[50%]" />
            </div>
            <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-semibold text-white text-[20px]">
                    {title}
                </h4>
                <p className="font-normal text-dimWhite text-[15px]">
                    {content}
                </p>
            </div>
        </div>
    );

    return (
            <div id="solution" className={`flex md:flex-row flex-col sm:py-15 py-5`}>
                <div className={`flex-1 flex justify-center items-start flex-col`}>
                    <h2 className={`font-semibold xs:text-[45px] text-[40px] text-white w-full`}>
                        You do the business, <br className="sm:block hidden" /> we’ll handle
                        the money.
                    </h2>
                    <p className={`font-normal text-dimWhite text-[18px] max-w-[490px] mt-5`}>
                        With the right credit card, you can improve your financial life by
                        building credit, earning rewards and saving money. But with hundreds
                        of credit cards on the market.
                    </p>

                    <button type="button" className={`py-4 px-6 font-medium text-[18px] text-primary bg_get_started rounded-[10px] outline-none mt-10`}>
                        Get Started
                    </button>
                </div>

                <div className={`flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col`}>
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.id} {...feature} index={index} />
                    ))}
                </div>
            </div>
    );
}

export default Business;

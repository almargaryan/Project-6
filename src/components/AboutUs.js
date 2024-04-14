import React from 'react';
import { people01, people02, people03, quotes} from "../assets/image";


function AboutUs(props) {

    const feedback = [
        {
            id: "feedback-1",
            content:
                "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
            name: "Herman Jensen",
            title: "Founder & Leader",
            img: people01,
        },
        {
            id: "feedback-2",
            content:
                "Money makes your life easier. If you're lucky to have it, you're lucky.",
            name: "Steve Mark",
            title: "Founder & Leader",
            img: people02,
        },
        {
            id: "feedback-3",
            content:
                "It is usually people in the money business, finance, and international trade that are really rich.",
            name: "Kenn Gallagher",
            title: "Founder & Leader",
            img: people03,
        },
    ];

    const FeedbackCard = ({ content, name, title, img }) => (
        <div className="flex justify-between flex-col px-10 py-10 rounded-[20px]  max-w-[390px] md:mr-10 sm:mr-5 mr-0 my-5 feedback">
            <img src={quotes} alt="" className="w-[42px] h-[28px]" />
            <p className="font-normal text-[18px] text-white my-10">
                {content}
            </p>

            <div className="flex flex-row">
                <img src={img} alt="" className="w-[48px] h-[48px] rounded-full" />
                <div className="flex flex-col ml-4">
                    <h4 className="font-semibold text-[20px] text-white">
                        {name}
                    </h4>
                    <p className="font-normal text-[15px] text-dimWhite">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <div id={"about us"} className={`sm:py-16 py-6 flex justify-center items-center} flex-col relative `}>
            <div className="absolute z-[0] w-[15%] h-[60%] right-[-7%] rounded-full blue_light2 bottom-40" />

            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h2 className={`font-semibold xs:text-[48px] text-[40px] text-white w-full`}>
                    What People are <br className="sm:block hidden" /> saying about us
                </h2>
                <div className="w-full md:mt-0 mt-6">
                    <p className={`font-normal text-dimWhite text-[18px] text-left max-w-[450px]`}>
                        Everything you need to accept card payments and grow your business
                        anywhere on the planet.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
                {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
            </div>
        </div>
    );
}

export default AboutUs;
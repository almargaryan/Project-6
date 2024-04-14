import React from 'react';
import { card } from "../assets/image";

function Card(props) {

    return (
        <section className={`flex md:flex-row flex-col sm:py-16 py-6`}>
            <div className={`flex-1 flex justify-center items-start flex-col`}>
                <h2 className={`font-semibold xs:text-[48px] text-[40px] text-white w-ful`}>
                    Find a better card deal <br className="sm:block hidden"/> in few easy
                    steps.
                </h2>
                <p className={`font-normal text-dimWhite text-[18px] max-w-[490px] mt-5`}>
                    Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
                    aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                </p>

                <button type="button" className={`py-4 px-6 font-medium text-[18px] text-primary bg_get_started rounded-[10px] outline-none mt-10`}>
                    Get Started
                </button>
            </div>

            <div className={`flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
                <img src={card} alt="" className="w-[100%] h-[100%]" />
            </div>
        </section>
    );
}

export default Card;
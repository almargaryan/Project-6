import React from 'react';

function Statistics(props) {

    const stats = [
        {
            id: "stats-1",
            title: "User Active",
            value: "3800+",
        },
        {
            id: "stats-2",
            title: "Trusted by Company",
            value: "230+",
        },
        {
            id: "stats-3",
            title: "Transaction",
            value: "$230M+",
        },
    ];
    return (
        <div className={`flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6`}>
            {stats.map((stat) => (
                <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-5`} >
                    <h4 className="font-semibold xs:text-[40px] text-[30px] text-white">
                        {stat.value}
                    </h4>
                    <p className="font-normal xs:text-[20px] text-[15px] text_color uppercase ml-5">
                        {stat.title}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Statistics;
import React from 'react';
import {airbnb, binance, coinbase, dropbox} from "../assets/image";


function Client(props) {

    const clients = [
        {
            id: "client-1",
            logo: airbnb,
        },
        {
            id: "client-2",
            logo: binance,
        },
        {
            id: "client-3",
            logo: coinbase,
        },
        {
            id: "client-4",
            logo: dropbox,
        },
    ];

    return (
        <div className={`flex justify-center items-center my-4`}>
            <div className={`flex justify-center items-center flex-wrap w-full`}>
                {clients.map((client) => (
                    <div key={client.id} className={`flex-1 flex justify-center items-center sm:min-w-[200px] min-w-[100px] m-5`}>
                        <img src={client.logo} alt="" className="sm:w-[200px] w-[100px]" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Client;
import React, {useEffect, useState} from 'react';
import { close, logo, menu } from "../assets/image";

function Navbar(props) {
    const [active, setActive] = useState("Home");
    const [show, setShow] = useState(false);

    const handleActive = (title) => {
        setActive(title);
        if (show) {
            setShow(false);
        }
    };

    const Items = ({ title, handleActive, active }) => (
        <li
            className={`font-normal cursor-pointer text-[18px] ${
                active === title ? "text-white" : "text-dimWhite"
            }`}
            onClick={() => handleActive(title)}
        >
            <a className={`pl-8`} href={`#${title.toLowerCase()}`}>{title}</a>
        </li>
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex items-center justify-between px-36 lg:px-32 md:px-24 sm:px-20 ss:px-12 xs:px-6 py-8">
            <img src={logo} alt="" className="w-[140px] h-[36px]" />

            <ul className="list-none md:flex hidden justify-end items-center flex-1">
                <Items title="Home" handleActive={handleActive} active={active} />
                <Items title="About Us" handleActive={handleActive} active={active} />
                <Items title="Features" handleActive={handleActive} active={active} />
                <Items title="Solution" handleActive={handleActive} active={active} />
            </ul>

            <div className="md:hidden flex flex-1 justify-end items-center">
                <img
                    src={show ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setShow(!show)}
                />

                <div
                    className={`${
                        !show ? "hidden" : "flex"
                    } bg-neutral-900 absolute top-20 right-0 sm:mx-20 ss:mx-12 xs:mx-6 py-8 pr-8 my-2 min-w-[140px] rounded-2xl navbar`}
                >
                    <ul className="list-none flex flex-col justify-between flex-1">
                        <Items title="Home" handleActive={handleActive} active={active} />
                        <Items title="About Us" handleActive={handleActive} active={active} />
                        <Items title="Features" handleActive={handleActive} active={active} />
                        <Items title="Solution" handleActive={handleActive} active={active} />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

import React from 'react';
import {facebook, instagram, linkedin, twitter, logo} from "../assets/image";


function Footer(props) {

    const footerLinks = [
        {
            title: "Useful Links",
            links: [
                {
                    name: "Content",
                    link: "https://www.hoobank.com/content/",
                },
                {
                    name: "How it Works",
                    link: "https://www.hoobank.com/how-it-works/",
                },
                {
                    name: "Create",
                    link: "https://www.hoobank.com/create/",
                },
                {
                    name: "Explore",
                    link: "https://www.hoobank.com/explore/",
                },
                {
                    name: "Terms & Services",
                    link: "https://www.hoobank.com/terms-and-services/",
                },
            ],
        },
        {
            title: "Community",
            links: [
                {
                    name: "Help Center",
                    link: "https://www.hoobank.com/help-center/",
                },
                {
                    name: "Partners",
                    link: "https://www.hoobank.com/partners/",
                },
                {
                    name: "Suggestions",
                    link: "https://www.hoobank.com/suggestions/",
                },
                {
                    name: "Blog",
                    link: "https://www.hoobank.com/blog/",
                },
                {
                    name: "Newsletters",
                    link: "https://www.hoobank.com/newsletters/",
                },
            ],
        },
        {
            title: "Partner",
            links: [
                {
                    name: "Our Partner",
                    link: "https://www.hoobank.com/our-partner/",
                },
                {
                    name: "Become a Partner",
                    link: "https://www.hoobank.com/become-a-partner/",
                },
            ],
        },
    ];

    const socialMedia = [
        {
            id: "social-media-1",
            icon: instagram,
            link: "https://www.instagram.com/",
        },
        {
            id: "social-media-2",
            icon: facebook,
            link: "https://www.facebook.com/",
        },
        {
            id: "social-media-3",
            icon: twitter,
            link: "https://www.twitter.com/",
        },
        {
            id: "social-media-4",
            icon: linkedin,
            link: "https://www.linkedin.com/",
        },
    ];

    return (
        <section className={`flex justify-center items-center sm:py-16 py-6 flex-col`}>
            <div className={`flex justify-center items-start md:flex-row flex-col mb-10 w-full`}>
                <div className="flex-[1] flex flex-col justify-start mr-10">
                    <img
                        src={logo}
                        alt="hoobank"
                        className="w-[300px] h-[80px] object-contain"
                    />
                    <p className={`font-normal text-dimWhite text-[18px] mt-4 max-w-[320px]`}>
                        A new way to make the payments easy, reliable and secure.
                    </p>
                </div>

                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                    {footerLinks.map((footerLink) => (
                        <div key={footerLink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                            <h4 className="font-medium text-[18px] text-white">
                                {footerLink.title}
                            </h4>
                            <ul className="list-none mt-4">
                                {footerLink.links.map((link, index) => (
                                    <li
                                        key={link.name}
                                        className={`font-normal text-[16px] text-dimWhite cursor-pointer ${
                                            index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                                        }`}
                                    >
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-dimWhite">
                <p className="font-normal text-center text-[18px] text-white">
                    Copyright Ⓒ 2022 HooBank. All Rights Reserved.
                </p>

                <div className="flex flex-row md:mt-0 mt-5">
                    {socialMedia.map((social, index) => (
                        <a href={social.link}>
                            <img
                                key={social.id}
                                src={social.icon}
                                alt={social.id}
                                className={`w-[25px] h-[25px] ${
                                    index !== socialMedia.length - 1 ? "mr-5" : "mr-0"
                                }`}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Footer;
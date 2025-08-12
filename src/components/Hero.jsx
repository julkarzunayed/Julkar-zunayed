import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import GitHub from "../assets/social-icons/github.png";
import LinkedIn from "../assets/social-icons/linkedin.png";
import Facebook from "../assets/social-icons/facebook.png";
import WhatsApp from "../assets/social-icons/whatsapp.png";
import "../styles/glowingButton.css"
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { GoLinkExternal } from 'react-icons/go';
import profileBlue from "../assets/profile/profile_by_canva_blue-shadow.png"


const words = [
    "Web Developer",
    "IT Support Specialist",
    "MERN Stack Development",
    "Creative Problem Solver",
    "Electrical Engineer",
];

const socialLinks = [
    {
        name: "GitHub",
        image: GitHub,
        link: "https://github.com/julkarzunayed",
    },
    {
        name: "LinkedIn",
        image: LinkedIn,
        link: "https://www.linkedin.com/in/julkarzunayed",
    },
    {
        name: "Facebook",
        image: Facebook,
        link: "https://www.facebook.com/julkarzunayed",
    },
    {
        name: "WhatsApp",
        image: WhatsApp,
        link: "https://wa.me/+8801747782169",
    },
];

const Hero = () => {
    return (
        <section className=' min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>

            <div className="container mx-auto flex gap-10 flex-col-reverse lg:flex-row py-20 *: *:flex-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    {/* Name section */}
                    <h1 className="text-5xl  lg:text-7xl text-center lg:text-left font-bold leading-tight inline-block">
                        <span className="font-black">
                            Hello!
                        </span>
                        <br />
                        <span className="">
                            I&apos;m
                        </span>
                        {' '}
                        <span className='gradient-text'>
                            Julkarnain Zunayed
                        </span>

                    </h1>
                    <div className="border  text-xl border-[#60a5fa50] rounded-xl  font-bold py-2 px-6 min-w-sm lg:min-w-2xs bg-blue-500/10 my-7">
                        <Typewriter
                            words={words}
                            loop={false}
                            cursor={true}
                            cursorBlinking={false}
                        />
                    </div>
                    {/* Social Links */}
                    <div className="relative mb-8 sm:mb-12 max-w-xl flex gap-5">
                        {
                            socialLinks?.map((link, index) =>
                                <a
                                    key={index}
                                    target='_blank'
                                    href={link.link}>
                                    <img
                                        className='w-10  transform hover:scale-110 transition duration-400 logo-drop-shadow'
                                        src={link.image}
                                        alt={link.name} />
                                </a>
                            )
                        }
                    </div>
                    {/* Action button ------Resume----button */}
                    <div className="flex gap-6">
                        <button className="btn-glowing flex gap-2 items-center active:scale-y-105 after:bg-[#333333]">
                            More Ifo <GoLinkExternal />
                        </button>
                        <a
                            href="/resume-demo.pdf"
                            download={"Resume of Julkarnain Zunayed"}
                            >
                            <button className="btn-glowing flex gap-2 items-center after:bg-[#ffffff50]">
                                Get Resume <IoCloudDownloadOutline />
                            </button>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <figure className=''>
                        <img className='rounded-full border-4 border-blue-900 max-w-sm logo-drop-shadow' src={profileBlue || 'https://placehold.co/550x550/0f1629/ff7800.png?text=Julkarnain+Zunayed'} alt="" />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Hero;
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';


const words = [
    "Web Developer",
    "IT Support Specialist",
    "Learning MERN Stack Development",
    "Creative Problem Solver",
    "Entrepreneur",
];

const Hero = () => {
    return (
        <div className='border min-h-screen'>

            <div className="">
                <div className="">
                    {/* Name section */}
                    <h1 className="text-[72px] font-bold leading-tight inline-block">
                        <span className="font-black">
                            Hello!
                        </span>
                        <br />
                        <span className="">
                            I&apos;m
                        </span>
                        {' '}
                        <span className='gradient-text'>
                            Julkarnain
                            <br />
                            Zunayed
                        </span>

                    </h1>
                    <div className="border w-fit text-xl border-[#60a5fa50] rounded-xl  font-bold py-2 px-4 min-w-2xs bg-blue-500/10 mt-5">
                        <Typewriter
                            words={words}
                            loop={false}
                            cursor={true}
                            cursorBlinking={false}
                        />
                    </div>
                </div>
                <div className=""></div>
            </div>
        </div>
    );
};

export default Hero;
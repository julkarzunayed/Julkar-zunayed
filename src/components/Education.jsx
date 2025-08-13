import { Icon } from '@iconify/react/dist/iconify.js';


import React from 'react';
import gif from "../assets/academic_background.gif"

const educationData = [
    {
        degree: 'Diploma-In Engineering (Electrical)',
        institute: 'Barishal Polytechnic Institute, Barishal',
        startData: '2022',
        endDate: '',
        greatType: 'CGPA',
        result: '',
        icon: "fa:university",
    },
    {
        degree: 'Higher Secondary Certificate (HSC)',
        institute: 'Nalchity Islamia Fazil Madrasah, Nalchiy',
        startData: '2019',
        endDate: '2021',
        greatType: 'GPA',
        result: '4.79',
        icon: 'lucide:school'
    },
]

const Education = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            {/* <Icon className='' icon="skill-icons:vite-dark" width="256" height="256" />
            <Icon icon="skill-icons:react-dark" width="256" height="256" /> */}
            {/* <Icon icon="skill-icons:tailwindcss-dark" width="256" height="256" /> */}
            <div className="container">
                <div className="flex justify-center">
                    <img src={gif} alt="" className="w-40" />
                </div>
                <h1 className="gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-black  p-5">
                    Academic Education
                </h1>
                <h6 className="mb-10 font-semibold text-gray-400 text-lg italic text-center">
                    &quot; Learning new Technologies and skills &quot;
                </h6>
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-5">
                    {
                        educationData?.map((degree, index) =>
                            <div key={index} className="bg-gradient-to-r from-emerald-400/60 via-cyan-500/50 to-indigo-500/50 rounded-xl p-[3px]">
                                <div className="p-3 sm:p-5   bg-[#0f1629] rounded-[10px] space-y-2">
                                    <p className=""></p>
                                    <div className="flex items-center gap-2 text-lg font-bold">
                                        <Icon icon="ix:certificate" className='text-emerald-400 text-2xl'/>
                                        <h3 className="">
                                            {degree?.degree}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-lg">
                                        <Icon icon={degree.icon} color='cyan' />
                                        <h6 className="">
                                            {degree?.institute}
                                        </h6>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-400 text-lg">
                                        <Icon icon="mdi:calendar-outline" />
                                        <span className="">
                                            {degree?.endDate === '' ? `${degree.startData + ' - ' + 'Present'}` : `${degree.endDate}`}
                                        </span>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Education;


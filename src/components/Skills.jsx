
import React from 'react';
// const frontend = import.meta.glob("../assets/skills-logo/frontend/*.png", { eager: true })
// const frontendLogos = Object.values(frontend).map(img => img.default);

import { Code2, Wrench, Database, Layout, Cpu, Cloud, Icon } from "lucide-react";
import { Icon as IconIfy } from '@iconify/react/dist/iconify.js';

const SkillCard = ({ icon: Icon, title, color, skills }) => {
    return (
        <div className="border-2 border-blue-800/ bg-blue-800/  p-4 sm:p-5 md:p-6 rounded-2xl bg-gray-800/50 border-cyan-500/10 hover:bg-gray-800/80 transition-all duration-300" style={{
            boxShadow: 'inset 2px 2px 4px #50505050,inset -2px -2px 4px #00ffff30'
        }}>
            <div className="flex items-center gap-2">
                <Icon className={`w-8 h-8 ${color}`} />
                <h4 className="text-white font-semibold text-xl">
                    {title}
                </h4>
            </div>
            <div className="flex  gap-3 flex-wrap mt-5 ">
                {/* <Icon icon="skill-icons:vite-light" width="256" height="256" /> */}
                {
                    skills?.map((skill, index) =>
                        <IconIfy key={index} icon={skill?.icon} style={{
                            ...skill?.style,
                            boxShadow: 'inset 4px 4px 6px #00000050,inset -4px -4px 6px #ffffff30'
                        }} className='w-20 h-20 bg-gray-700/50 hover:scale-105 hover:bg-gray-700 text-gray-100 border border-gray-600/60 p-2.5 rounded-lg' />
                    )
                }
                {/* <img key={``} src={``} alt="" className="max-h-16 bg-gray-700/50 hover:bg-gray-700 text-gray-100 border-gray-600" /> */}
            </div>
        </div>
    )

}



const Skills = () => {
    const skillsData = [
        {
            icon: Code2,
            title: 'Frontend Development',
            color: 'text-blue-400',
            skills: [
                { icon: "logos:react" },
                { icon: "logos:vitejs" },
                { icon: "logos:react-router" },
                { icon: "logos:daisyui-icon" },
                { icon: "logos:tailwindcss-icon" },
                { icon: "logos:javascript" },
                { icon: "logos:css-3" },
                { icon: "logos:html-5" },
            ]
        },
        {
            icon: Database,
            title: 'Backend Development',
            color: 'text-green-400',
            skills: [
                { icon: "logos:nodejs-icon" },
                { icon: "simple-icons:express", style: { color: "#fff" } },
                { icon: "logos:javascript" },
                { icon: "logos:mongodb-icon" },
                { icon: "logos:jwt-icon" },
                { icon: "logos:firebase-icon" },
            ]
        },
        {
            icon: Layout,
            title: 'UI/UX',
            color: 'text-purple-400',
            skills: [
                { icon: "logos:figma" },
                { icon: "logos:adobe-photoshop" },
            ]
        },
        {
            icon: Cloud,
            title: 'Claud & DevOps',
            color: 'text-orange-400',
            skills: [
                { icon: "logos:firebase-icon" },
                { icon: "skill-icons:vercel-dark" },
                { icon: "logos:netlify-icon" },
                { icon: "logos:git-icon" },
                { icon: "logos:github-icon" },
            ]
        },
        {
            icon: Cpu,
            title: 'Tools & Technologies',
            color: 'text-pink-400',
            skills: [
                { icon: "logos:visual-studio-code" },
                { icon: "logos:npm-icon" },
                { icon: "logos:chrome" },
            ]
        },
        {
            icon: Wrench,
            title: 'Technical Skills',
            color: 'text-blue-400',
            skills: [
                { icon: "streamline-cyber-color:programming-bug-2" },
                { icon: "streamline-pixel:coding-apps-websites-programming-bug" },
                { icon: "line-md:cog-loop" },
                { icon: "flat-color-icons:electronics" },
                { icon: "file-icons:electron", style: { color: "#00d8ff" } },
            ]
        },
    ]
    return (
        <div className='min-h-screen flex items-center justify-center border border-blue-700/10 '>
            <div className="container mx-auto my-10">
                <h1 className="gradient-text text-5xl md:text-6xl lg:text-7xl text-center font-black  p-5">
                    My Skills
                </h1>
                <h6 className="mb-10 font-semibold text-gray-400 text-lg italic text-center">
                    &quot; Learning new Technologies and skills &quot;
                </h6>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

                    {
                        skillsData?.map((category, index) =>
                            <SkillCard
                                key={index}
                                icon={category.icon}
                                title={category.title}
                                color={category.color}
                                skills={category.skills}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;
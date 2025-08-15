import React from 'react';


const ProjectCard = ({ project }) => {
    // const [hovered, setHovered] = useState(false);
    // console.log(project)
    // const handleCardHover = () => {
    //     console.log('mouse-in')
    // }
    return (
        <div
            // onMouseEnter={() => setHovered(true)}
            // onMouseLeave={() => setHovered(false)}
            className="border border-slate-800 rounded-2xl max-w-[360px] group mx-auto">
            <div className="group-hover:scale-110 transition-all group-hover:bg-slate-800/70 rounded-2xl duration-500 p-4 sm:p-4 md:p-5 lg:p-6 flex flex-col h-full ">
                {/* Image Section */}
                <figure
                    style={{
                        backgroundImage: `linear-gradient(to bottom, #00000010, #00000050), url(${project?.image})`
                    }}
                    className={`h-52 bg-cover  group-hover:bg-bottom transition-all ease-in-out duration-1000 rounded-xl  shadow-lg shadow-cyan-400/30 backdrop-blur-xs`}>

                </figure>
                {/* Image Section
                <div className="md:w-1/2 overflow-hidden rounded-lg">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div> */}

                {/* ---------Content ------------*/}
                <div className="mt-3 flex flex-col flex-1 ">
                    <div className="">
                        <h4 className='font-bold text-xl group-hover:text-cyan-500 text-slate-300 transition-colors delay-75 duration-300'>
                            {project?.title}
                        </h4>
                        <div className="flex justify-between font-semibold my-3">
                            <span className="text-blue-400">
                                Web App
                            </span>
                            <span className="text-slate-500">
                                {project?.date}
                            </span>
                        </div>
                        <div className="flex gap-1.5 flex-wrap border-l-4 border-blue-500 pl-3">
                            {
                                project?.tags?.map((tag, index) =>
                                    <span
                                        key={index}
                                        className="bg-gradient-to-r  from-blue-500 via-purple-5 to-purple-500 bg-center hover:bg-[length:200%_200%] rounded-full py-0 px-3 flex items-center gap-0.5">
                                        <Icon icon={`${tag?.icon}`} />{tag?.text}
                                    </span>
                                )
                            }
                        </div>
                    </div>
                    <div className="flex-1">

                    </div>
                    {/* -------links and buttons--------- */}
                    <div className=" mt-5 flex justify-between items-center">
                        <button className="bg-gradient-to-r py-2 px-4 rounded-lg font-bold from-blue-500 via-purple-5 to-purple-500 bg-center">
                            Details
                        </button>
                        <div className="flex gap-2">
                            <a href={project?.links?.github} target='_blank'>
                                <div className="bg-gradient-to-r p-[2px] rounded-[8px]  from-blue-500 via-purple-5 to-purple-500 bg-center">
                                    <div className="bg-slate-800 px-3 py-2 rounded-md">
                                        <Icon icon="line-md:github-loop" width="22" height="22" />
                                    </div>
                                </div>
                            </a>
                            <a href={project?.links?.liveLink} target='_blank'>
                                <div className="bg-gradient-to-r p-[2px] rounded-[8px]  from-blue-500 via-purple-5 to-purple-500 bg-center">
                                    <div className="bg-slate-800 px-3 py-2 rounded-md">
                                        <Icon icon="iconamoon:link-external-bold" width="22" height="22" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import fluentTalk from "../assets/projects/fluent-talk-full-home.JPG";
import scholarlyLink from "../assets/projects/scholarly-link-full-home-page-01.JPG";
import passionCircles from "../assets/projects/passion-ciorle-full-home-page-01.JPG";

import { Icon } from '@iconify/react/dist/iconify.js';

const projectData = [
    {
        title: "ScholarlyLinks: Scholarship Management",
        date: "Jun, 2025",
        tags: [
            { text: 'React', icon: 'logos:react' },
            { text: 'Vite', icon: 'logos:vitejs' },
            { text: 'TailwindCSS', icon: 'devicon:tailwindcss' },
            // { text: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
            { text: 'ExpressJS', icon: 'devicon:express' },
            { text: 'MongoDB', icon: 'devicon:mongodb' },
            { text: 'Firebase', icon: 'logos:firebase-icon' },
            { text: 'JWT', icon: 'logos:jwt-icon' },
        ],
        image: scholarlyLink,
        details: '',
        links: {
            github: 'https://github.com/julkarzunayed/scholarly-links-client',
            liveLink: 'https://scholarly-link-auth.web.app',
        }
    },
    {
        title: "FluentTalk: Online Language Tutor Platform",
        date: "May, 2025",
        tags: [
            { text: 'React', icon: 'logos:react' },
            { text: 'Vite', icon: 'logos:vitejs' },
            { text: 'TailwindCSS', icon: 'devicon:tailwindcss' },
            // { text: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
            { text: 'ExpressJS', icon: 'devicon:express' },
            // { text: 'MongoDB', icon: 'devicon:mongodb' },
            // { text: 'Firebase', icon: 'logos:firebase-icon' },
            // { text: 'JWT', icon: 'logos:jwt-icon' },
        ],
        image: fluentTalk,
        details: '',
        links: {
            github: 'https://github.com/julkarzunayed/fluent-talk-client',
            liveLink: 'https://fluent-talk-auth.firebaseapp.com/',
        }
    },
    {
        title: "PassionCircle: Event Management",
        date: "April, 2025",
        tags: [
            { text: 'React', icon: 'logos:react' },
            { text: 'Vite', icon: 'logos:vitejs' },
            { text: 'TailwindCSS', icon: 'devicon:tailwindcss' },
            // { text: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
            { text: 'ExpressJS', icon: 'devicon:express' },
            { text: 'MongoDB', icon: 'devicon:mongodb' },
            { text: 'Firebase', icon: 'logos:firebase-icon' },
            // { text: 'JWT', icon: 'logos:jwt-icon' },
        ],
        image: passionCircles,
        details: '',
        links: {
            github: 'https://github.com/julkarzunayed/passion-circles-client',
            liveLink: 'https://passion-circles-auth.web.app/',
        }
    },
]


const Projects = () => {
    return (
        <section className='min-h-screen flex items-center justify-center border border-blue-700/10 '>
            <div className="container mx-auto my-10">
                <h1 className="gradient-text text-4xl md:text-5xl lg:text-6xl text-center font-black  p-5">
                    Projects Developed by Me
                </h1>
                <h6 className="mb-10 font-semibold text-gray-400 text-lg italic text-center">
                    &quot; Learning new Technologies and skills &quot;
                </h6>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {
                        projectData?.map((project, index) =>
                            <ProjectCard
                                key={index}
                                project={project}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;
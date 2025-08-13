import React from 'react';
import { animateScroll, scroller } from 'react-scroll';

import {
    FaHome,
    FaLaptopCode,
    FaUser,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
    FaEnvelope, // Icon for Connect
} from "react-icons/fa";
import { Link, NavLink } from 'react-router';
import useActiveSection from '../hooks/useActiveSection';

const navLinks = [
    { id: "hero", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    // {
    //     id: "experience",
    //     icon: FaBriefcase,
    //     text: "Experience",
    //     path: "/experience",
    // },

    {
        id: "education",
        icon: FaGraduationCap,
        text: "Education",
        path: "/education",
    },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" }, // Added Connect
];

const NavBar = () => {
    const sectionIds = ['hero', 'skills', 'education', 'projects', 'contact'];
    const activeSection = useActiveSection(sectionIds)
    console.log(activeSection)
    return (
        <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto">
            <div className='p-[2px] rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x'>
                <div className="">
                    <nav className="bg-gray-900/90 backdrop-blur-md rounded-full px-6 py-2.5">
                        <div className="flex gap-1">
                            {navLinks.map(({ id, icon: Icon, text, }) => (

                                <NavLink
                                    key={id}
                                    to={id}
                                    // smooth={true}
                                    // duration={500}
                                    onClick={() => scroller.scrollTo(`${id}`, {
                                        smooth: 'easeInOutQuint',
                                        offset: -50,
                                        // containerId: id,
                                    })}
                                    style={{ textDecoration: 'none', color: 'white' }}
                                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:bg-white/10 text-white`}
                                >
                                    <Icon className='text-base' />
                                    <span className="hidden md:inline">
                                        {text}
                                    </span>
                                </NavLink>
                            ))}

                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
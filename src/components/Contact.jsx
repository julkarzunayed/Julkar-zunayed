import React from 'react';


import GitHub from "../assets/social-icons/github.png";
import LinkedIn from "../assets/social-icons/linkedin.png";
import Facebook from "../assets/social-icons/facebook.png";
import WhatsApp from "../assets/social-icons/whatsapp.png";
import { Icon } from '@iconify/react/dist/iconify.js';
import Swal from 'sweetalert2';

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

const contactData = [
    {
        icon: 'humbleicons:mail',
        title: 'Email',
        contact: 'zunayedjulkar@gmail.com',
        color: ''
    },
    {
        icon: 'lucide:phone',
        title: 'Phone',
        contact: '+8801747-782169',
        color: ''
    },
    {
        icon: 'tdesign:location',
        title: 'Location',
        contact: 'Zip-8420, Nalchity, Jhalokathy, Bangaldesh.',
        color: ''
    },
]

const Contact = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;

        const data = {
            name,
            email,
            subject,
            message
        };

        Swal.fire({
            icon: 'info',
            title: "Your Message has been sent!",
            background: '#303030',
            color: '#ffffff'
            // showClass: {
            //     popup: `
            //         animate__animated
            //         animate__fadeInUp
            //         animate__faster
            //         `
            // },
            // hideClass: {
            //     popup: `
            //         animate__animated
            //         animate__fadeOutDown
            //         animate__faster
            //         `
            // }
        });

    };

    return (
        <div className='min-h-screen flex items-center justify-center py-16'>
            <div className="container flex flex-col gap-10 lg:flex-row *: *:flex-1">
                {/* Contact Content---------------- */}
                <div className="">
                    <div className="">
                        <h3 className="text-3xl font-bold text-blue-500">
                            Get in Touch
                        </h3>
                        <p className="text-slate-200 my-3 mb-8">Wanna work together or Have a question ? Drop a message!</p>
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
                        <div className="">
                            {
                                contactData?.map((contact, index) =>
                                    <div key={index} className="flex gap-2 mt-5">
                                        <div className={`p-3 bg-purple-500/10 flex items-center justify-center rounded-lg`}>
                                            <Icon icon={contact?.icon} className='w-6 h-6 text-purple-500/80' />
                                        </div>
                                        <div className="">
                                            <h5 className="font-semibold text-lg">
                                                {contact?.title}
                                            </h5>
                                            <p className="text-gray-400">
                                                {contact?.contact}
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                {/* Send message Form */}
                <div className="p-8 bg-white/5 rounded-xl max-w-2xl mx-auto w-full">
                    <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 *:w-full *:px-4 *:py-3 *:rounded-lg *:bg-white/5 *:border *:border-gray-700 *:focus:border-blue-500 *:focus:outline-none *:transition-colors">
                        <input required type="text" name='name' placeholder="Your Name" className="" />
                        <input required type="text" name='email' placeholder="Your Email" className="" />
                        <input required type="text" name='subject' placeholder="Subject" className="" />
                        <textarea required className="" name='message' placeholder="Your Message"></textarea>
                        <button role='submit' className="bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-lg flex items-center gap-3 justify-center">
                            Send Message <Icon icon="tabler:send" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
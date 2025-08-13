// import React, { useEffect, useRef, useState } from 'react';

// const useActiveSection = (sectionIds, options = {}) => {
//     const [activeSection, serActiveSection] = useState(sectionIds[0]);
//     const observer = useRef(null);

//     useEffect(() => {
//         observer.current = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     serActiveSection(entry.target.id);
//                 }
//             });
//         }, {
//             rootMargin: '-30% 0px -30% 0px',
//             threshold: 0.5,
//             ...options,
//         });

//         return () => {
//             if (observer.current) {
//                 observer.current.disconnect();
//             }
//         };

//     }, [sectionIds, options]);
//     return activeSection;
// };

// export default useActiveSection;


import { useEffect, useState, useRef } from 'react';

const useActiveSection = (sectionIds, options = {}) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0]);
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            rootMargin: '-30% 0px -30% 0px', // Adjusts the viewport a bit
            threshold: 0.5, // Fires when 50% of the element is visible
            ...options,
        });

        sectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                observer.current.observe(section);
            }
        });

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [sectionIds, options]);

    return activeSection;
};

export default useActiveSection;

import { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(card,
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, delay: (index + 1) * 0.3,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        end: 'bottom 60%',
                        toggleActions: 'play none none reverse',
                    }
                }
            );
        });
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 2 }
        )
    }, []);

    return (
        <section id="work" className='app-showcase' ref={sectionRef}>
            <div className='w-full'>
                <div className="showcaselayout">
                    {/* left */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src="/images/project1.png" alt="Ryde" />
                        </div>
                        <div className="text-content">
                            <h2>Lorem ipsum dolor sit amet consectetur !</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores molestiae sunt ipsum eligendi exercitationem illo quae! Natus tempora quas alias?</p>
                        </div>
                    </div>
                    {/* right */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="..." />
                            </div>
                            <h2>Library Management System</h2>

                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/project3.png" alt="..." />
                            </div>
                            <h2>Startup Showacase</h2>

                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Showcase
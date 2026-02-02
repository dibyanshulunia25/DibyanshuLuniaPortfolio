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
                            <img src="/images/project1.png" alt="CycloSell" />
                        </div>
                        <div className="text-content">
                            <h2>CycloSell, Perfect Choice for wholesellers to display their stock</h2>
                            <p>This is a full stack cycle showcase website designed for B2B startups. This website allows business owners (Cycle Wholesellers) to show the cycles they have and can get orders online with no physical visit.</p>
                        </div>
                    </div>
                    {/* right */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Airbnd" />
                            </div>
                            <h2>Airbnd(Airbnb clone)</h2>

                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/project3.png" alt="Ecom king" />
                            </div>
                            <h2>FOREVER (Ecom King)</h2>

                        </div>
                    </div>

                </div>
                <div className="first-project-wrapper w-full mt-4 " ref={project1Ref}>
                    <div className='image-wrapper'>
                        <img src="/images/project4.png" alt="InterviewMate" />
                    </div>
                    <div className="text-content">
                        <h2>InterviewMate, Perfect Choice for Interview Preparation</h2>
                        <p>This is a full stack interview preparation platform designed for students and professionals. This website allows users to practice for interviews with AI-powered mock interviews and get personalized feedback.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase
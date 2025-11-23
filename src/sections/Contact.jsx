import React, { useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import ContactExperience from '../components/ContactExperience'

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData(() => ({
            name: '',
            email: '',
            message: '',
        }))
    }

    return (
        <section id="contact" className='flex-center section-padding mb-10'>
            <div className="w-full h-full md:px-10 px-5 text-center">
                <TitleHeader title="Get In Touch With Me" sub='📞 Contact Information' />
                <div className="mt-16 grid-12-cols">
                    {/* contact form left side */}
                    <div className="xl:col-span-5">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form className="w-full text-left" onSubmit={handleSubmit}>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    className="mb-6"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your.email@example.com"
                                    required
                                    className="mb-6"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your message"
                                    rows={5}
                                    required
                                    className="mb-6"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <button type="submit" className='w-full'>
                                    <div className="cta-button group">
                                        <div className="bg-circle" />
                                        <p className='text'>Send Message</p>
                                        <div className='arrow-wrapper'>
                                            <img src="/images/arrow-down.svg" alt="arrow" />
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* contact info right side */}
                    <div className="xl:col-span-7 min-h-96">
                        <div className='w-full h-full bg-[#87ddde] hover:cursor-grab rounded-3xl overflow-hidden'>
                            <ContactExperience />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

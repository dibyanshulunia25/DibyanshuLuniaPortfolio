import { navLinks } from '../constants'

const Navbar = () => {
    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const isScrolled = window.scrollY > 10;
    //         setScrolled(isScrolled);
    //     }
    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [])

    return (
        <header className="navbar">
            <div className="inner">
                <a href="#hero" className="logo">Dibyanshu Lunia</a>
                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className='group'>
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className='underline'></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Get in Touch</span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default Navbar
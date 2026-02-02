import Hero from './sections/Hero'
import Showcase from './sections/Showcase'
import Navbar from './components/Navbar'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import TechStackSection from './sections/TechStackSection'
import { TestimonialSection } from './sections/TestimonialSection'
import { Contact } from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Showcase />
            <LogoSection />
            <FeatureCards />
            <ExperienceSection />
            <TechStackSection />
            {/* <TestimonialSection /> */}
            <Contact />
            <Footer />
        </>
    )
}

export default App
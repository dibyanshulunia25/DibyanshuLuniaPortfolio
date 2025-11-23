import Hero from './sections/Hero'
import Showcase from './sections/Showcase'
import Navbar from './components/Navbar'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import TechStackSection from './sections/TechStackSection'

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
        </>
    )
}

export default App
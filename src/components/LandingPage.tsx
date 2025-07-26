import { motion } from 'framer-motion'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className="landing-page">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </motion.div>
        </div>
    )
}

export default LandingPage 
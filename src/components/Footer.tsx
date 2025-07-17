import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp, Twitter, Instagram } from 'lucide-react'
import { useState, useEffect } from 'react'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const [showBackToTop, setShowBackToTop] = useState(false)

    // Handle smooth scrolling for navigation links
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    // Show/hide back to top button based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="footer">
            <div className="footer-content">
                <motion.div
                    className="footer-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h3>Anand Tiwari</h3>
                    <p>Full-Stack Developer & Software Engineer</p>
                    <p className="footer-description">
                        Passionate about creating innovative web solutions and building scalable applications.
                    </p>
                </motion.div>

                <motion.div
                    className="footer-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <h4>Quick Links</h4>
                    <ul>
                        <li><button onClick={() => scrollToSection('home')} className="footer-link">Home</button></li>
                        <li><button onClick={() => scrollToSection('about')} className="footer-link">About</button></li>
                        <li><button onClick={() => scrollToSection('skills')} className="footer-link">Skills</button></li>
                        <li><button onClick={() => scrollToSection('projects')} className="footer-link">Projects</button></li>
                        <li><button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button></li>
                    </ul>
                </motion.div>

                <motion.div
                    className="footer-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h4>Connect</h4>
                    <div className="social-links">
                        <a
                            href="https://github.com/Anand15154"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit GitHub profile"
                            className="social-link"
                        >
                            <Github size={20} />
                            <span className="social-tooltip">GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/anand-tiwari-4286b4226"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit LinkedIn profile"
                            className="social-link"
                        >
                            <Linkedin size={20} />
                            <span className="social-tooltip">LinkedIn</span>
                        </a>
                        <a
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Twitter profile"
                            className="social-link"
                        >
                            <Twitter size={20} />
                            <span className="social-tooltip">Twitter</span>
                        </a>
                        <a
                            href="https://instagram.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Instagram profile"
                            className="social-link"
                        >
                            <Instagram size={20} />
                            <span className="social-tooltip">Instagram</span>
                        </a>
                        <a
                            href="mailto:anand.tiwari@example.com"
                            aria-label="Send email"
                            className="social-link"
                        >
                            <Mail size={20} />
                            <span className="social-tooltip">Email</span>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="footer-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <h4>Newsletter</h4>
                    <p>Stay updated with my latest projects and insights.</p>
                    <div className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="newsletter-input"
                            aria-label="Email address for newsletter"
                        />
                        <button className="newsletter-button" aria-label="Subscribe to newsletter">
                            Subscribe
                        </button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="footer-bottom"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <p>
                    © {currentYear} Anand Tiwari SDE-1 @ INFINITE LOCUS.
                </p>
                <div className="footer-bottom-links">
                    <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
                    <span className="separator">•</span>
                    <a href="/terms" className="footer-bottom-link">Terms of Service</a>
                </div>
            </motion.div>

            {/* Back to Top Button */}
            <motion.button
                className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: showBackToTop ? 1 : 0,
                    scale: showBackToTop ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                aria-label="Back to top"
            >
                <ArrowUp size={20} />
            </motion.button>
        </footer>
    )
}

export default Footer 
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp, Twitter, Instagram, ExternalLink, Heart } from 'lucide-react'
import { useState, useEffect } from 'react'
import './Footer.css'
import { LINKS } from '../links'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const [showBackToTop, setShowBackToTop] = useState(false)
    const [email, setEmail] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [isSubscribing, setIsSubscribing] = useState(false)

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

    // Handle newsletter subscription
    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email || isSubscribing) return

        setIsSubscribing(true)

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1000))
            setIsSubscribed(true)
            setEmail('')
            // Reset after 3 seconds
            setTimeout(() => setIsSubscribed(false), 3000)
        } catch (error) {
            console.error('Newsletter subscription failed:', error)
        } finally {
            setIsSubscribing(false)
        }
    }

    // Social link variants for staggered animation
    const socialLinkVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    }

    // Footer section variants
    const footerSectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <footer className="footer">
            <div className="footer-content">
                <motion.div
                    className="footer-section"
                    variants={footerSectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <div className="footer-brand">
                        <h3>Anand Tiwari</h3>
                        <div className="brand-badge">SDE-1 @ INFINITE LOCUS</div>
                    </div>
                    <p className="footer-description">
                        Passionate Full-Stack Developer crafting innovative web solutions and building scalable applications with modern technologies.
                    </p>
                    <div className="footer-stats">
                        <div className="stat">
                            <span className="stat-number">3+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="footer-section"
                    variants={footerSectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <h4>Quick Navigation</h4>
                    <ul className="footer-nav">
                        <li><button onClick={() => scrollToSection('home')} className="footer-link">Home</button></li>
                        <li><button onClick={() => scrollToSection('about')} className="footer-link">About</button></li>
                        <li><button onClick={() => scrollToSection('skills')} className="footer-link">Skills</button></li>
                        <li><button onClick={() => scrollToSection('projects')} className="footer-link">Projects</button></li>
                        <li><button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button></li>
                    </ul>
                </motion.div>

                <motion.div
                    className="footer-section"
                    variants={footerSectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <h4>Connect & Collaborate</h4>
                    <div className="social-links">
                        {[
                            { icon: Github, href: LINKS.github, label: 'GitHub', color: '#333' },
                            { icon: Linkedin, href: LINKS.linkedin, label: 'LinkedIn', color: '#0077b5' },
                            { icon: Twitter, href: LINKS.twitter, label: 'Twitter', color: '#1da1f2' },
                            { icon: Instagram, href: LINKS.instagram, label: 'Instagram', color: '#e4405f' },
                            { icon: Mail, href: LINKS.mailto, label: 'Email', color: '#ea4335' }
                        ].map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit ${social.label} profile`}
                                className="social-link"
                                variants={socialLinkVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index}
                                whileHover={{
                                    scale: 1.1,
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <social.icon size={20} />
                                <span className="social-tooltip">{social.label}</span>
                                <ExternalLink size={12} className="external-icon" />
                            </motion.a>
                        ))}
                    </div>
                    <div className='margin-top-100px'>
                        <motion.div
                            className="footer-section newsletter-section"
                            variants={footerSectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <h4>Stay Updated</h4>
                            <p>Get notified about my latest projects, tech insights, and career updates.</p>
                            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                                <div className="input-group">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="newsletter-input"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        aria-label="Email address for newsletter"
                                        required
                                    />
                                    <motion.button
                                        type="submit"
                                        className="newsletter-button"
                                        aria-label="Subscribe to newsletter"
                                        disabled={isSubscribing}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                                    </motion.button>
                                </div>
                                {isSubscribed && (
                                    <motion.div
                                        className="success-message"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        <Heart size={16} />
                                        <span>Successfully subscribed!</span>
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </motion.div>


            </div>

            <motion.div
                className="footer-bottom"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="footer-bottom-content">
                    <p className="copyright">
                        © {currentYear} Anand Tiwari
                    </p>
                    <div className="footer-bottom-links">
                        <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
                        <span className="separator">•</span>
                        <a href="/terms" className="footer-bottom-link">Terms of Service</a>
                        <span className="separator">•</span>
                        <a href="/sitemap" className="footer-bottom-link">Sitemap</a>
                    </div>
                </div>
            </motion.div>

            {/* Enhanced Back to Top Button */}
            <motion.button
                className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: showBackToTop ? 1 : 0,
                    scale: showBackToTop ? 1 : 0
                }}
                whileHover={{
                    scale: 1.1,
                    y: -3,
                    transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                aria-label="Back to top"
            >
                <ArrowUp size={20} />
            </motion.button>
        </footer>
    )
}

export default Footer 
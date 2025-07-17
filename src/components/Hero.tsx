import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, Code, Sparkles } from 'lucide-react'
import './Hero.css'

const Hero = () => {
    const socialLinks = [
        { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' }
    ]

    const skills = ["React", "Node.js", "TypeScript", "Python", "AWS", "Docker"]

    return (
        <section id="home" className="hero">
            {/* Animated background elements */}
            <motion.div
                className="bg-element"
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    width: '100px',
                    height: '100px',
                    background: 'rgba(255, 215, 0, 0.1)',
                    borderRadius: '50%',
                    zIndex: 1
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="bg-element"
                style={{
                    position: 'absolute',
                    top: '60%',
                    right: '15%',
                    width: '150px',
                    height: '150px',
                    background: 'rgba(102, 126, 234, 0.1)',
                    borderRadius: '50%',
                    zIndex: 1
                }}
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.7, 0.4]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="greeting-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'rgba(255, 255, 255, 0.1)',
                            padding: '0.5rem 1rem',
                            borderRadius: '25px',
                            marginBottom: '1rem',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                    >
                        <Sparkles size={16} color="#ffd700" />
                        <span style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 500 }}>
                            Available for opportunities
                        </span>
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Hi, I'm <span className="highlight">Anand Tiwari</span>
                    </motion.h1>

                    <motion.h2
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Full-Stack Developer & Software Engineer
                    </motion.h2>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        I craft exceptional digital experiences with clean code and innovative solutions.
                        Passionate about building scalable applications that make a difference.
                    </motion.p>

                    <motion.div
                        className="skills-preview"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        style={{
                            display: 'flex',
                            gap: '0.5rem',
                            marginBottom: '2rem',
                            flexWrap: 'wrap'
                        }}
                    >
                        {skills.map((skill, index) => (
                            <motion.span
                                key={skill}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '15px',
                                    fontSize: '0.85rem',
                                    color: '#ffffff',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    backdropFilter: 'blur(10px)'
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <a href="#projects" className="primary-button">
                            <Code size={20} />
                            View My Work
                        </a>
                        <a href="/resume.pdf" className="secondary-button" download>
                            <Download size={20} />
                            Download Resume
                        </a>
                    </motion.div>

                    <motion.div
                        className="social-links"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                            >
                                <link.icon size={24} />
                                <span className="sr-only">{link.label}</span>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <div className="floating-card">
                        <div className="code-line">const developer = {`{`}</div>
                        <div className="code-line indent">name: "Anand Tiwari",</div>
                        <div className="code-line indent">role: "Full-Stack Developer",</div>
                        <div className="code-line indent">location: "Remote",</div>
                        <div className="code-line indent">skills: [</div>
                        <div className="code-line indent indent">"React", "Node.js", "TypeScript",</div>
                        <div className="code-line indent indent">"Python", "AWS", "Docker"</div>
                        <div className="code-line indent">],</div>
                        <div className="code-line indent">passion: "Building amazing apps",</div>
                        <div className="code-line indent">status: "Available for opportunities"</div>
                        <div className="code-line">{`}`}</div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero 
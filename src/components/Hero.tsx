import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, Code, Sparkles } from 'lucide-react'
import './Hero.css'
import { LINKS } from '../links'

const Hero = () => {
    const socialLinks = [
        { icon: Github, href: LINKS.github, label: 'GitHub' },
        { icon: Linkedin, href: LINKS.linkedin, label: 'LinkedIn' },
        { icon: Mail, href: LINKS.mailto, label: 'Email' }
    ]

    const frontendSkills = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Shopify", "HTML/CSS"]
    const backendSkills = ["Node.js", "Express.js", "Golang", "PostgreSQL", "MongoDB", "AWS"]

    // Bubble configuration
    const bubbles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        size: Math.random() * 40 + 20,
        delay: Math.random() * 2,
        duration: Math.random() * 8 + 12,
        x: Math.random() * 100,
        y: Math.random() * 100
    }))

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
                    background: 'var(--accent-primary)',
                    opacity: 0.1,
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
                    background: 'var(--accent-secondary)',
                    opacity: 0.1,
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

            {/* Animated Bubbles */}
            {bubbles.map((bubble) => (
                <motion.div
                    key={bubble.id}
                    className="bubble"
                    style={{
                        position: 'absolute',
                        left: `${bubble.x}%`,
                        bottom: '-50px',
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                        background: 'radial-gradient(circle at 30% 30%, var(--bubble-primary), var(--bubble-secondary))',
                        borderRadius: '50%',
                        border: '1px solid var(--bubble-border)',
                        zIndex: 2,
                        pointerEvents: 'none'
                    }}
                    animate={{
                        y: [0, -window.innerHeight - 100],
                        x: [0, Math.random() * 200 - 100],
                        scale: [1, 1.1, 0.9, 1.2, 0],
                        opacity: [0, 0.7, 0.9, 0.7, 0]
                    }}
                    transition={{
                        delay: bubble.delay,
                        duration: bubble.duration,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    whileHover={{
                        scale: 1.2,
                        opacity: 0
                    }}
                />
            ))}

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
                            background: 'var(--social-bg)',
                            padding: '0.5rem 1rem',
                            borderRadius: '25px',
                            marginBottom: '1rem',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--social-border)'
                        }}
                    >
                        <Sparkles size={16} color="var(--accent-primary)" />
                        <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 500 }}>
                            Available for opportunities
                        </span>
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <span style={{ color: '#fff' }}>Hi, I'm</span> <span className="highlight">Anand Tiwari</span>
                    </motion.h1>

                    <motion.h2
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Full-Stack Developer & Software Engineer
                    </motion.h2>


                    <motion.div
                        className="skills-section"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        style={{
                            marginBottom: '2rem'
                        }}
                    >
                        {/* Frontend Skills */}
                        <motion.div
                            className="skill-category"
                            style={{
                                marginBottom: '1rem'
                            }}
                        >
                            <motion.h3
                                style={{
                                    color: 'var(--accent-primary)',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    marginBottom: '0.5rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                Frontend Technologies
                            </motion.h3>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {frontendSkills.map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1))',
                                            padding: '0.4rem 0.8rem',
                                            borderRadius: '20px',
                                            fontSize: '0.8rem',
                                            color: 'var(--text-primary)',
                                            border: '1px solid rgba(59, 130, 246, 0.3)',
                                            backdropFilter: 'blur(10px)',
                                            fontWeight: 500,
                                            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.1)'
                                        }}
                                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            y: [0, -8, 0],
                                            rotate: [0, 2, -2, 0]
                                        }}
                                        transition={{
                                            delay: 0.9 + index * 0.1,
                                            duration: 0.6,
                                            y: {
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatType: "reverse",
                                                ease: "easeInOut"
                                            },
                                            rotate: {
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            y: -5,
                                            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.2)'
                                        }}
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Backend Skills */}
                        <motion.div
                            className="skill-category"
                        >
                            <motion.h3
                                style={{
                                    color: 'var(--accent-secondary)',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    marginBottom: '0.5rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.1, duration: 0.5 }}
                            >
                                Backend Technologies
                            </motion.h3>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {backendSkills.map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(147, 51, 234, 0.1))',
                                            padding: '0.4rem 0.8rem',
                                            borderRadius: '20px',
                                            fontSize: '0.8rem',
                                            color: 'var(--text-primary)',
                                            border: '1px solid rgba(147, 51, 234, 0.3)',
                                            backdropFilter: 'blur(10px)',
                                            fontWeight: 500,
                                            boxShadow: '0 4px 15px rgba(147, 51, 234, 0.1)'
                                        }}
                                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            y: [0, -8, 0],
                                            rotate: [0, -2, 2, 0]
                                        }}
                                        transition={{
                                            delay: 1.2 + index * 0.1,
                                            duration: 0.6,
                                            y: {
                                                duration: 2.5,
                                                repeat: Infinity,
                                                repeatType: "reverse",
                                                ease: "easeInOut"
                                            },
                                            rotate: {
                                                duration: 3.5,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            y: -5,
                                            boxShadow: '0 8px 25px rgba(147, 51, 234, 0.2)'
                                        }}
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="hero-buttons margin-left-100px"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                    >
                        <a href="#projects" className="primary-button">
                            <Code size={20} />
                            View My Work
                        </a>
                        <a href="/resume.pdf" className="primary-button" download>
                            <Download size={20} />
                            Download Resume
                        </a>
                    </motion.div>

                    <motion.div
                        className="social-links"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 0.8 }}
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
                                transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
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
                        <div className="code-line indent">status: "Available"</div>
                        <div className="code-line">{`}`}</div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero 
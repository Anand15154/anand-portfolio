import { motion } from 'framer-motion'
import { User, Code, Lightbulb, Target } from 'lucide-react'
import './About.css'

const About = () => {
    const features = [
        {
            icon: Code,
            title: 'Clean Code',
            description: 'Writing maintainable, scalable, and well-documented code that stands the test of time.'
        },
        {
            icon: Lightbulb,
            title: 'Problem Solver',
            description: 'Approaching complex challenges with innovative solutions and creative thinking.'
        },
        {
            icon: Target,
            title: 'User-Focused',
            description: 'Creating intuitive experiences that users love and businesses value.'
        },
        {
            icon: User,
            title: 'Team Player',
            description: 'Collaborating effectively with cross-functional teams to deliver exceptional results.'
        }
    ]

    return (
        <section id="about" className="section about">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            I'm a full-stack software engineer with expertise in modern web development
                            technologies including React, Node.js, TypeScript, and cloud platforms.
                            I specialize in building scalable, performant applications with clean architecture
                            and best practices.
                        </p>
                        <p>
                            My technical stack includes frontend frameworks (React, Vue.js), backend
                            technologies (Node.js, Express, Golang), databases (MongoDB, PostgreSQL),
                            and DevOps tools (Docker, AWS, CI/CD). I'm passionate about writing
                            maintainable code and implementing robust testing strategies.
                        </p>
                        <p>
                            I follow agile development methodologies and have experience with microservices
                            architecture, RESTful APIs, and modern deployment practices. My focus is on
                            creating efficient, scalable solutions that solve real-world problems.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-stats"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="stat-item">
                            <div className="stat-number">1+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Happy Clients</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Client Satisfaction</div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="features-grid"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="feature-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="feature-icon">
                                <feature.icon size={32} />
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default About 
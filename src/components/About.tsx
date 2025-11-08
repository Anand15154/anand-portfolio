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
                            I am a Software Development Engineer specializing in enterprise-grade full-stack development with deep expertise in modern JavaScript ecosystems, Adobe Experience Manager (AEM), and scalable microservices architecture. I architect and deliver production-ready solutions leveraging React.js, Node.js, TypeScript, and enterprise content management platforms.
                        </p>
                        <p>
                            My technical proficiency encompasses frontend engineering (React 18+, Redux Toolkit, RTK Query, React Query, TypeScript), backend development (Node.js, Express.js, RESTful APIs, OSGi Services), enterprise CMS (AEM Sling Models, HTL, Content Fragments, Dispatcher), and database systems (MongoDB, PostgreSQL, JCR). I implement industry-standard DevOps practices utilizing CI/CD pipelines, Docker containerization, and automated deployment workflows.
                        </p>
                        <p>
                            I specialize in performance optimization, system design (HLD/LLD), Role-Based Access Control (RBAC) implementation, component-based architecture, and microservices integration. My approach emphasizes code quality, maintainability, and adherence to SOLID principles, consistently achieving measurable performance improvements and production-grade deliverables.
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
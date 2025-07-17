import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Calendar, Users, Star } from 'lucide-react'
import { useState, useMemo } from 'react'
import Opten from '../assets/Opten.png'
import Royal from '../assets/Royal.png'
import Scout from '../assets/Scout.png'
import './Projects.css'
import { LINKS } from '../links'

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All')

    const projects = [
        {
            title: 'Opten Power',
            description: 'A unified B2B platform designed for Indian businesses aiming to go net-zero, offering streamlined access to renewable energy financing, simplified energy procurement, and tailored clean energy solutions. Our platform helps organizations overcome funding barriers, navigate complex contracts, and manage their sustainability goals—all in one place.',
            technologies: ['React', 'TypeScript', 'FastAPI', 'MySQL', 'Docker', 'Azure', 'Google APIs'],
            image: Opten,
            github: LINKS.github + '/open-project',
            live: 'http://3.0.57.2:5173/customer-portal/dashboard',
            category: 'B2B Platform',
            featured: true,
            year: '2024',
            teamSize: '8',
            rating: 4.8
        },
        {
            title: 'Royal Enfield GT Cup 2025',
            description: 'I developed a responsive and interactive website for the Royal Enfield Continental GT Cup 2025 using Adobe Experience Manager (AEM), integrated with core HTML, CSS, and JavaScript to deliver a rich user experience. The platform features AEM integration for content structuring and templating, custom frontend development with hand-coded interactive elements, fully responsive design with seamless cross-device navigation, registration and eligibility modules with user-friendly flows.',
            technologies: ['AEM', 'HTML', 'CSS', 'JavaScript', 'Adobe Analytics'],
            image: Royal,
            github: LINKS.github + '/re-motor-sport',
            live: 'https://www.royalenfield.com/in/en/gt-cup-2025/',
            category: 'Sports & Entertainment',
            featured: true,
            year: '2024',
            teamSize: '4',
            rating: 4.9
        },
        {
            title: 'Scout-Surface Solutions',
            description: 'A comprehensive scouting and talent management platform for sports organizations. Features include player profiles, performance analytics, recruitment workflows, and team management tools.',
            technologies: ['React.js', 'TypeScript', 'Golang', 'MySQL', 'MongoDB', 'Docker', 'AWS'],
            image: Scout,
            github: LINKS.github + '/scout',
            live: 'https://scout-platform.vercel.app',
            category: 'B2C Platform',
            featured: false,
            year: '2023',
            teamSize: '6',
            rating: 4.7
        },
        {
            title: 'AI Chat Assistant',
            description: 'An intelligent chatbot powered by OpenAI API, featuring natural language processing and context-aware conversations with advanced features like sentiment analysis and multi-language support.',
            technologies: ['React', 'OpenAI API', 'Node.js', 'Express', 'Socket.io', 'Redis'],
            image: '/project3.jpg',
            github: LINKS.github + '/ai-chatbot',
            live: 'https://ai-chatbot.vercel.app',
            category: 'AI/ML',
            featured: false,
            year: '2023',
            teamSize: '3',
            rating: 4.6
        },
        {
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website showcasing my skills, projects, and professional experience with smooth animations and interactive elements.',
            technologies: ['React', 'TypeScript', 'Framer Motion', 'CSS3', 'Vite'],
            image: '/project4.jpg',
            github: LINKS.github + '/portfolio',
            live: 'https://anand-tiwari.vercel.app',
            category: 'Frontend',
            featured: false,
            year: '2024',
            teamSize: '1',
            rating: 4.8
        },
        {
            title: 'Weather Dashboard',
            description: 'A weather application with real-time data, interactive maps, and detailed forecasts for multiple locations with advanced weather analytics.',
            technologies: ['React', 'OpenWeather API', 'Chart.js', 'Leaflet', 'CSS3', 'Redux'],
            image: '/project5.jpg',
            github: LINKS.github + '/weather-dashboard',
            live: 'https://weather-dashboard.vercel.app',
            category: 'API Integration',
            featured: false,
            year: '2023',
            teamSize: '2',
            rating: 4.5
        },
    ]

    const categories = ['All', ...new Set(projects.map(project => project.category))]

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return projects
        return projects.filter(project => project.category === activeFilter)
    }, [activeFilter])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -50,
            scale: 0.9,
            transition: {
                duration: 0.3
            }
        }
    }

    return (
        <section id="projects" className="section projects">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="projects-header">
                    <motion.p
                        className="projects-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        My Work
                    </motion.p>
                    <motion.h2
                        className="projects-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        className="projects-description"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Explore my latest projects showcasing innovative solutions, modern technologies, and creative problem-solving approaches.
                    </motion.p>
                </div>

                <motion.div
                    className="projects-filter"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            className={`filter-button ${activeFilter === category ? 'active' : ''}`}
                            onClick={() => setActiveFilter(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={activeFilter}
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, _index) => (
                            <motion.div
                                key={project.title}
                                className={`project-card ${project.featured ? 'featured' : ''}`}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                whileHover={{ y: -10 }}
                                layout
                            >
                                <div className="project-image">
                                    {project.image && typeof project.image === 'string' && project.image.startsWith('/') ? (
                                        <img src={project.image} alt={project.title} />
                                    ) : project.image ? (
                                        <img src={project.image} alt={project.title} />
                                    ) : (
                                        <div className="project-placeholder">
                                            {project.title}
                                        </div>
                                    )}
                                    <div className="project-overlay">
                                        <div className="project-links">
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Github size={20} />
                                            </motion.a>
                                            <motion.a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                                whileHover={{ scale: 1.1, rotate: -5 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <ExternalLink size={20} />
                                            </motion.a>
                                        </div>
                                    </div>
                                    <div className="project-category">{project.category}</div>
                                </div>

                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-technologies">
                                        {project.technologies.map((tech) => (
                                            <motion.span
                                                key={tech}
                                                className="technology-tag"
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>

                                    <div className="project-stats">
                                        <div className="project-stat">
                                            <Calendar className="project-stat-icon" size={16} />
                                            <span>{project.year}</span>
                                        </div>
                                        <div className="project-stat">
                                            <Users className="project-stat-icon" size={16} />
                                            <span>{project.teamSize} members</span>
                                        </div>
                                        <div className="project-stat">
                                            <Star className="project-stat-icon" size={16} />
                                            <span>{project.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    className="projects-cta"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.a
                        href={LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Projects
                        <ExternalLink size={20} />
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Projects 
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Opten from '../assets/Opten.png'
import Royal from '../assets/Royal.png'
import Scout from '../assets/Scout.png'
import './Projects.css'
import { LINKS } from '../links'

const Projects = () => {
    const projects = [
        {
            title: 'Opten Power',
            description: 'A unified B2B platform designed for Indian businesses aiming to go net-zero, offering streamlined access to renewable energy financing, simplified energy procurement, and tailored clean energy solutions. Our platform helps organizations overcome funding barriers, navigate complex contracts, and manage their sustainability goals—all in one place.',
            technologies: ['React', 'TypeScript', 'FastAPI', 'MySQL', 'Docker', 'Azure', 'Google APIs'],
            image: Opten,
            github: LINKS.github + '/open-project',
            live: 'http://3.0.57.2:5173/customer-portal/dashboard',
            category: 'B2B Platform'
        },
        {
            title: 'Royal Enfield GT Cup 2025',
            description: 'I developed a responsive and interactive website for the Royal Enfield Continental GT Cup 2025 using Adobe Experience Manager (AEM), integrated with core HTML, CSS, and JavaScript to deliver a rich user experience. The platform features AEM integration for content structuring and templating, custom frontend development with hand-coded interactive elements, fully responsive design with seamless cross-device navigation, registration and eligibility modules with user-friendly flows.',
            technologies: ['AEM', 'HTML', 'CSS', 'JavaScript', 'Adobe Analytics'],
            image: Royal,
            github: LINKS.github + '/re-motor-sport',
            live: 'https://www.royalenfield.com/in/en/gt-cup-2025/',
            category: 'Sports & Entertainment'
        },
        {
            title: 'Scout-Surface Solutions',
            description: 'A comprehensive scouting and talent management platform for sports organizations. Features include player profiles, performance analytics, recruitment workflows, and team management tools.',
            technologies: ['React.js', 'TypeScript', 'Golang', 'MySQL', 'MongoDB', 'Docker', 'AWS'],
            image: Scout,
            github: LINKS.github + '/scout',
            live: 'https://scout-platform.vercel.app',
            category: 'B2C Platform'
        },
        {
            title: 'AI Chat Assistant',
            description: 'An intelligent chatbot powered by OpenAI API, featuring natural language processing and context-aware conversations.',
            technologies: ['React', 'OpenAI API', 'Node.js', 'Express', 'Socket.io'],
            image: '/project3.jpg',
            github: LINKS.github + '/ai-chatbot',
            live: 'https://ai-chatbot.vercel.app',
            category: 'AI/ML'
        },
        {
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website showcasing my skills, projects, and professional experience with smooth animations.',
            technologies: ['React', 'TypeScript', 'Framer Motion', 'CSS3', 'Vite'],
            image: '/project4.jpg',
            github: LINKS.github + '/portfolio',
            live: 'https://anand-tiwari.vercel.app',
            category: 'Frontend'
        },
        {
            title: 'Weather Dashboard',
            description: 'A weather application with real-time data, interactive maps, and detailed forecasts for multiple locations.',
            technologies: ['React', 'OpenWeather API', 'Chart.js', 'Leaflet', 'CSS3'],
            image: '/project5.jpg',
            github: LINKS.github + '/weather-dashboard',
            live: 'https://weather-dashboard.vercel.app',
            category: 'API Integration'
        },

    ]

    return (
        <section id="projects" className="section projects">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">Featured Projects</h2>


                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="project-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
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
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Github size={20} />
                                        </motion.a>
                                        <motion.a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                            whileHover={{ scale: 1.1 }}
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
                                        <span key={tech} className="technology-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="projects-cta"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >

                </motion.div>
            </motion.div>
        </section>
    )
}

export default Projects 
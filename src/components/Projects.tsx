import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Calendar, Users, Star } from 'lucide-react'
import { useState, useMemo } from 'react'
import Opten from '../assets/Opten.png'
import Royal from '../assets/Royal.png'
import Scout from '../assets/Scout.png'
import Hyue from '../assets/Hyue.png'
import FlyingFlea from '../assets/ff-product.jpg'
import Feable from '../assets/Ecom.png'
import Rokmex from '../assets/Rocmax.png'
import './Projects.css'
import { LINKS } from '../links'

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All')
    const [hoveredProject, setHoveredProject] = useState<string | null>(null)

    const projects = [

        {
            title: 'Flying Flea',
            company: 'Royal Enfield',
            description: 'The Flying Flea is Royal Enfield\'s new sub - brand for its electric two- wheelers, drawing inspiration from a 1940s military motorcycle designed for air - dropping.The brand will offer lightweight, city - focused electric bikes with a focus on agility and urban mobility.The first model, the Flying Flea C6("C" for Classic), is a tech - laden prototype featuring a TFT display, Qualcomm processor, lean - sensitive ABS, and multiple riding modes, with a planned launch in 2026.',
            technologies: ['AEM', 'JavaScript', 'CSS', 'HTML', 'Adobe Analytics', 'Adobe Target', 'Adobe Experience Manager'],
            image: FlyingFlea,
            github: 'https://flyingflea.royalenfield.com/us/en/ff-homepage/?v=12',
            live: 'https://flyingflea.royalenfield.com/us/en/ff-homepage/?v=12',
            category: 'Sports & Entertainment',
            featured: true,
            year: '2025',
            teamSize: '10',
            rating: 4.9
        },
        {
            title: 'Opten Power',
            company: 'Opten Power',
            description: 'A unified B2B platform designed for Indian businesses aiming to go net-zero, offering streamlined access to renewable energy financing, simplified energy procurement, and tailored clean energy solutions. Our platform helps organizations overcome funding barriers, navigate complex contracts, and manage their sustainability goals—all in one place.',
            technologies: ['React', 'TypeScript', 'FastAPI', 'MySQL', 'Docker', 'Azure', 'Google APIs'],
            image: Opten,
            github: 'https://github.com/anand-kumar-singh/opten-power',
            live: 'https://app.optenpower.com/customer-portal/login',
            category: 'B2B Platform',
            featured: true,
            year: '2025',
            teamSize: '5',
            rating: 4.8
        },
        {
            title: 'Royal Enfield GT Cup 2025',
            company: 'Royal Enfield',
            description: 'I developed a responsive and interactive website for the Royal Enfield Continental GT Cup 2025 using Adobe Experience Manager (AEM), integrated with core HTML, CSS, and JavaScript to deliver a rich user experience. The platform features AEM integration for content structuring and templating, custom frontend development with hand-coded interactive elements, fully responsive design with seamless cross-device navigation, registration and eligibility modules with user-friendly flows.',
            technologies: ['AEM', 'HTML', 'CSS', 'JavaScript', 'Adobe Analytics'],
            image: Royal,
            github: 'https://www.royalenfield.com/in/en/gt-cup-2025/',
            live: 'https://www.royalenfield.com/in/en/gt-cup-2025/',
            category: 'Sports & Entertainment',
            featured: true,
            year: '2025',
            teamSize: '5',
            rating: 4.9
        },
        {
            title: 'Scout-Surface Solutions',
            company: 'Scout Platform',
            description: 'A comprehensive scouting and talent management platform for sports organizations. Features include player profiles, performance analytics, recruitment workflows, and team management tools.',
            technologies: ['React.js', 'TypeScript', 'Golang', 'MySQL', 'MongoDB', 'Docker', 'AWS'],
            image: Scout,
            github: LINKS.github + '/scout',
            live: 'https://mysat.app/admin/login',
            category: 'B2C Platform',
            featured: false,
            year: '2025',
            teamSize: '12',
            rating: 4.7
        },


        {
            title: 'Hyue',
            company: 'Hyue',
            description: 'Hyu is a platform that allows you to create and share your own AI agents. It is a platform that allows you to create and share your own AI agents.',
            technologies: ['React', 'TypeScript', 'FastAPI', 'MySQL', 'Docker', 'Azure', 'Google APIs'],
            image: Hyue,
            github: 'https://hyue.in',
            live: 'https://hyue.in',
            category: 'B2C Platform',
            featured: true,
            year: '2025',
            teamSize: '2',
            rating: 4.9
        },
        {
            title: 'Fable Street',
            company: 'Fable Street',
            description: 'Fable Street is a platform that allows you to create and share your own AI agents. It is a platform that allows you to create and share your own AI agents.',
            technologies: ['React', 'TypeScript', 'FastAPI', 'MySQL', 'Docker', 'Azure', 'Google APIs'],
            image: Feable,
            github: 'https://eshop.site.guru/',
            live: 'https://eshop.site.guru/',
            category: 'E-commerce',
            featured: true,
            year: '2024',
            teamSize: '7',
            rating: 4.9
        },
        {
            title: 'Rokmex',
            company: 'Rokmex Biocare',
            description: 'Rokmex Biocare, established in 2021, is a leading Pharmaceutical company with over 300 Products and a network of 500+ distributors across India. Our state-of-the-art manufacturing plant, compliant with EU PICS and UKMHRA GMP standards, ensures top-quality products, reliable stock availability, and competitive pricing. Committed to innovation and quality, we aim to become a global healthcare leader while upholding integrity, ethics, and dedication to customer satisfaction.',
            technologies: ['React', 'TypeScript', 'FastAPI', 'MySQL', 'Docker', 'Azure', 'Google APIs'],
            image: Rokmex,
            github: 'https://rokmex.site.guru/?mode=dev',
            live: 'https://rokmex.site.guru/?mode=dev',
            category: 'B2B Platform',
            featured: false,
            year: '2024',
            teamSize: '5',
            rating: 4.9
        }



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
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    }

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.9,
            rotateX: 15
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        },
        exit: {
            opacity: 0,
            y: -60,
            scale: 0.9,
            rotateX: -15,
            transition: {
                duration: 0.4
            }
        }
    }

    const imageVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    }

    const linkVariants = {
        hidden: {
            y: 30,
            scale: 0.8,
            opacity: 0
        },
        visible: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
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
                            whileHover={{
                                scale: 1.05,
                                y: -2
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
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
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.title}
                                className={`project-card ${project.featured ? 'featured' : ''}`}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                whileHover={{
                                    y: -15,
                                    transition: { duration: 0.3 }
                                }}
                                onHoverStart={() => setHoveredProject(project.title)}
                                onHoverEnd={() => setHoveredProject(null)}
                                layout
                                style={{
                                    zIndex: hoveredProject === project.title ? 10 : 1
                                }}
                            >
                                <motion.div
                                    className="project-image"
                                    variants={imageVariants}
                                    whileHover="hover"
                                >
                                    {project.image && typeof project.image === 'string' && project.image.startsWith('/') ? (
                                        <img src={project.image} alt={project.title} />
                                    ) : project.image ? (
                                        <img src={project.image} alt={project.title} />
                                    ) : (
                                        <div className="project-placeholder">
                                            {project.title}
                                        </div>
                                    )}

                                    <motion.div
                                        className="project-overlay"
                                        variants={overlayVariants}
                                        initial="hidden"
                                        whileHover="visible"
                                    >
                                        <motion.div
                                            className="project-links"
                                            variants={linkVariants}
                                            initial="hidden"
                                            whileHover="visible"
                                        >
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                                whileHover={{
                                                    scale: 1.2,
                                                    rotate: 8,
                                                    y: -5
                                                }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Github size={22} />
                                            </motion.a>
                                            <motion.a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                                whileHover={{
                                                    scale: 1.2,
                                                    rotate: -8,
                                                    y: -5
                                                }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ExternalLink size={22} />
                                            </motion.a>
                                        </motion.div>
                                    </motion.div>

                                    <motion.div
                                        className="project-category"
                                        whileHover={{
                                            scale: 1.1,
                                            y: -3
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {project.category}
                                    </motion.div>
                                </motion.div>

                                <div className="project-content">
                                    <motion.h3
                                        className="project-title"
                                        whileHover={{
                                            x: 8,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <motion.p
                                        className="project-company"
                                        whileHover={{
                                            x: 8,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        {project.company}
                                    </motion.p>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-technologies">
                                        {project.technologies.map((tech, techIndex) => (
                                            <motion.span
                                                key={tech}
                                                className="technology-tag"
                                                whileHover={{
                                                    scale: 1.1,
                                                    y: -4,
                                                    transition: { duration: 0.3 }
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    delay: techIndex * 0.1,
                                                    duration: 0.4
                                                }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>

                                    <div className="project-stats">
                                        <motion.div
                                            className="project-stat"
                                            whileHover={{
                                                y: -2,
                                                scale: 1.05,
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            <Calendar className="project-stat-icon" size={16} />
                                            <span>{project.year}</span>
                                        </motion.div>
                                        <motion.div
                                            className="project-stat"
                                            whileHover={{
                                                y: -2,
                                                scale: 1.05,
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            <Users className="project-stat-icon" size={16} />
                                            <span>{project.teamSize} members</span>
                                        </motion.div>
                                        <motion.div
                                            className="project-stat"
                                            whileHover={{
                                                y: -2,
                                                scale: 1.05,
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            <Star className="project-stat-icon" size={16} />
                                            <span>{project.rating}</span>
                                        </motion.div>
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
                        whileHover={{
                            scale: 1.05,
                            y: -3,
                            transition: { duration: 0.3 }
                        }}
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
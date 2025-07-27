import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Code, Star } from 'lucide-react'
import Hero from './Hero'
import './Home.css'

const Home = () => {
    const galleryItems = [
        {
            id: 1,
            title: 'Modern Web App',
            category: 'Frontend',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
            description: 'React-based modern web application with TypeScript',
            technologies: ['React', 'TypeScript', 'Tailwind'],
            link: '#',
            github: '#',
            featured: true
        },
        {
            id: 2,
            title: 'API Integration',
            category: 'Backend',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
            description: 'RESTful API with Node.js and Express',
            technologies: ['Node.js', 'Express', 'MongoDB'],
            link: '#',
            github: '#',
            featured: false
        },
        {
            id: 3,
            title: 'Mobile App',
            category: 'Mobile',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
            description: 'Cross-platform mobile application',
            technologies: ['React Native', 'TypeScript', 'Firebase'],
            link: '#',
            github: '#',
            featured: true
        },
        {
            id: 4,
            title: 'Dashboard UI',
            category: 'UI/UX',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
            description: 'Analytics dashboard with modern design',
            technologies: ['Vue.js', 'D3.js', 'SCSS'],
            link: '#',
            github: '#',
            featured: false
        },
        {
            id: 5,
            title: 'E-commerce Platform',
            category: 'Full-Stack',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
            description: 'Complete e-commerce solution',
            technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
            link: '#',
            github: '#',
            featured: true
        },
        {
            id: 6,
            title: 'AI Chat Bot',
            category: 'AI/ML',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
            description: 'Intelligent chatbot with NLP',
            technologies: ['Python', 'TensorFlow', 'OpenAI'],
            link: '#',
            github: '#',
            featured: false
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
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
        <div className="home-page">
            <Hero />

            {/* Gallery Fragment Section */}
            <section className="gallery-section">
                <motion.div
                    className="gallery-container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div
                        className="gallery-header"
                        variants={itemVariants}
                    >
                        <h2 className="gallery-title">Featured Work</h2>
                        <p className="gallery-subtitle">
                            A collection of my latest projects and creative work
                        </p>
                    </motion.div>

                    <motion.div
                        className="gallery-grid"
                        variants={containerVariants}
                    >
                        {galleryItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className={`gallery-item ${item.featured ? 'featured' : ''}`}
                                variants={itemVariants}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="gallery-item-image">
                                    <img src={item.image} alt={item.title} />
                                    <div className="gallery-item-overlay">
                                        <div className="gallery-item-actions">
                                            <motion.a
                                                href={item.link}
                                                className="gallery-action-btn"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Eye size={16} />
                                            </motion.a>
                                            <motion.a
                                                href={item.github}
                                                className="gallery-action-btn"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Github size={16} />
                                            </motion.a>
                                        </div>
                                    </div>
                                    {item.featured && (
                                        <div className="featured-badge">
                                            <Star size={12} />
                                            <span>Featured</span>
                                        </div>
                                    )}
                                </div>

                                <div className="gallery-item-content">
                                    <div className="gallery-item-category">
                                        {item.category}
                                    </div>
                                    <h3 className="gallery-item-title">{item.title}</h3>
                                    <p className="gallery-item-description">
                                        {item.description}
                                    </p>
                                    <div className="gallery-item-technologies">
                                        {item.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="gallery-cta"
                        variants={itemVariants}
                    >
                        <motion.a
                            href="#projects"
                            className="gallery-cta-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Code size={20} />
                            View All Projects
                        </motion.a>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    )
}

export default Home 
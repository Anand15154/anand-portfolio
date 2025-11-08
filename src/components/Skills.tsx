import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo } from 'react'
import {
    Code,
    Database,
    Cloud,
    GitBranch,
    Zap,
    Globe,
    Server,
    Smartphone,
    Palette,
    Shield,
    Award,
    TrendingUp,
    Clock,
    Star,

} from 'lucide-react'
import './Skills.css'
import Certificate from './Certificate'

interface Skill {
    name: string
    level: number
    icon: any
    years: number
    description: string
    certifications?: string[]
    lastUsed: string
}

interface SkillCategory {
    category: string
    icon: any
    color: string
    skills: Skill[]
}

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('Frontend Development')
    const [sortBy, setSortBy] = useState<'level' | 'name' | 'years'>('level')
    const [showCertifications, setShowCertifications] = useState(false)

    const skillCategories: SkillCategory[] = [
        {
            category: 'Frontend Development',
            icon: Globe,
            color: '#3B82F6',
            skills: [
                {
                    name: 'AEM',
                    level: 85,
                    icon: Code,
                    years: 1,
                    description: 'Adobe Experience Manager (AEM) - Building and managing enterprise-level content management solutions, component development with HTL/Sightly, Sling models, OSGi bundles, and AEM workflows. Experience with AEM Sites, Assets, and Forms for creating scalable digital experiences',
                    lastUsed: '2025'
                },
                {
                    name: 'React',
                    level: 95,
                    icon: Code,
                    years: 1,
                    description: 'Expert in building scalable Single Page Applications (SPAs) and complex user interfaces using React. Proficient in React Hooks (useState, useEffect, useContext, useReducer, custom hooks), Context API for state management, React Router for navigation, and modern patterns like component composition, higher-order components, and render props. Experience with performance optimization techniques including React.memo, useMemo, useCallback, code splitting, and lazy loading. Skilled in managing component lifecycle, handling side effects, and implementing responsive, accessible web applications',
                    certifications: ['Meta React Certification'],
                    lastUsed: '2025'
                },
                {
                    name: 'Next.js',
                    level: 85,
                    icon: Code,
                    years: 1,
                    description: 'Proficient in Next.js for building full-stack React applications with server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR). Experience with App Router and Pages Router, API routes, middleware, dynamic routing, image optimization, and built-in CSS support. Skilled in implementing authentication, data fetching strategies (getServerSideProps, getStaticProps, getStaticPaths), and optimizing performance with automatic code splitting, prefetching, and edge functions. Knowledgeable in deployment strategies on Vercel and other platforms',
                    lastUsed: '2025'
                },
                {
                    name: 'TypeScript',
                    level: 90,
                    icon: Code,
                    years: 1,
                    description: 'Proficient in TypeScript for building type-safe applications with strong typing, interfaces, and type inference. Skilled in advanced TypeScript features including generics, utility types (Partial, Pick, Omit, Record), conditional types, and mapped types. Experience with TypeScript configuration, strict mode, and integrating TypeScript with React, Node.js, and modern build tools. Knowledgeable in type definitions, declaration files, and maintaining type safety across large codebases',
                    lastUsed: '2025'
                },
                {
                    name: 'JavaScript',
                    level: 92,
                    icon: Code,
                    years: 1,
                    description: 'Expert in modern JavaScript (ES6+) including arrow functions, destructuring, spread/rest operators, template literals, and modules. Proficient in asynchronous programming with Promises, async/await, and handling async operations. Skilled in advanced JavaScript concepts like closures, hoisting, event loop, prototypal inheritance, and functional programming patterns. Experience with modern JavaScript features including optional chaining, nullish coalescing, and working with arrays, objects, and built-in methods',
                    lastUsed: '2025'
                },
                {
                    name: 'HTML/CSS',
                    level: 88,
                    icon: Code,
                    years: 1,
                    description: 'Proficient in writing semantic HTML5 markup with proper document structure, accessibility attributes, and SEO best practices. Expert in CSS including Flexbox and CSS Grid for complex layouts, CSS custom properties (variables), animations, transitions, and transforms. Skilled in responsive design using media queries, mobile-first approach, and creating adaptive layouts that work across all devices. Experience with modern CSS features like container queries, CSS modules, and preprocessors like Sass/SCSS',
                    lastUsed: '2025'
                }
            ]
        },
        {
            category: 'Backend Development',
            icon: Server,
            color: '#10B981',
            skills: [
                {
                    name: 'Node.js',
                    level: 88,
                    icon: Server,
                    years: 1,
                    description: 'Proficient in Node.js for building scalable server-side applications and APIs. Skilled in working with the Node.js runtime, event-driven architecture, and non-blocking I/O operations. Experience with npm package management, file system operations, streams, buffers, and working with environment variables. Knowledgeable in performance optimization, error handling, debugging, and building RESTful APIs with Express.js integration',
                    lastUsed: '2025'
                },
                {
                    name: 'Express.js',
                    level: 85,
                    icon: Server,
                    years: 1,
                    description: 'Experienced in Express.js for building robust web applications and RESTful APIs. Skilled in middleware implementation, routing, request/response handling, and error handling. Proficient in integrating with databases, authentication middleware (JWT, sessions), file uploads, and working with various Express extensions. Knowledgeable in security best practices, CORS configuration, and deploying Express applications to production environments',
                    lastUsed: '2025'
                },
                {
                    name: 'PostgreSQL',
                    level: 80,
                    icon: Database,
                    years: 1,
                    description: 'Proficient in PostgreSQL for designing and managing relational databases with complex queries, joins, and transactions. Skilled in database schema design, creating indexes for performance optimization, and writing efficient SQL queries. Experience with database migrations, stored procedures, triggers, and maintaining data integrity with constraints and foreign keys. Knowledgeable in query optimization, database normalization, and working with PostgreSQL extensions',
                    lastUsed: '2025'
                },
                {
                    name: 'MongoDB',
                    level: 78,
                    icon: Database,
                    years: 1,
                    description: 'Experienced in MongoDB for building scalable NoSQL database solutions with flexible document-based data models. Skilled in writing complex queries, aggregation pipelines, and performing CRUD operations efficiently. Proficient in schema design, indexing strategies, and optimizing database performance. Knowledgeable in MongoDB Atlas cloud services, data modeling, and integrating MongoDB with Node.js applications using Mongoose ODM',
                    lastUsed: '2025'
                },
                {
                    name: 'REST APIs',
                    level: 90,
                    icon: Zap,
                    years: 1,
                    description: 'Expert in designing and developing RESTful APIs following REST principles and best practices. Skilled in creating scalable API architectures with proper HTTP methods (GET, POST, PUT, DELETE, PATCH), status codes, and resource naming conventions. Proficient in API documentation using tools like Swagger/OpenAPI, implementing authentication and authorization, rate limiting, and error handling. Experience with API versioning, pagination, filtering, and building APIs that integrate seamlessly with frontend applications',
                    lastUsed: '2025'
                }
            ]
        },
        {
            category: 'Mobile Development',
            icon: Smartphone,
            color: '#8B5CF6',
            skills: [
                {
                    name: 'React Native',
                    level: 82,
                    icon: Code,
                    years: 1,
                    description: 'Proficient in React Native for building cross-platform mobile applications for iOS and Android with a single codebase. Skilled in using React Native components, navigation libraries (React Navigation), state management, and accessing native device features. Experience with styling mobile applications, handling platform-specific code, and integrating third-party libraries. Knowledgeable in app deployment, performance optimization, and building responsive mobile user interfaces',
                    lastUsed: '2025'
                },
            ]
        },

        {
            category: 'DevOps & Tools',
            icon: Cloud,
            color: '#F59E0B',
            skills: [
                {
                    name: 'Git',
                    level: 85,
                    icon: GitBranch,
                    years: 1,
                    description: 'Expert in Git version control for managing code repositories and collaborating with development teams. Skilled in Git workflows including feature branches, pull requests, merge strategies, and resolving conflicts. Proficient in advanced Git commands, rebasing, stashing, tagging, and maintaining clean commit history. Experience with GitHub, GitLab, and Bitbucket for code hosting, code reviews, and managing collaborative development workflows',
                    lastUsed: '2025'
                },
                {
                    name: 'Docker',
                    level: 75,
                    icon: Cloud,
                    years: 1,
                    description: 'Experienced in Docker for containerizing applications and creating consistent development and production environments. Skilled in writing Dockerfiles, building Docker images, managing containers, and working with Docker Compose for multi-container applications. Proficient in container orchestration basics, volume management, and networking. Knowledgeable in best practices for optimizing Docker images and deploying containerized applications',
                    lastUsed: '2025'
                },
                {
                    name: 'AWS',
                    level: 70,
                    icon: Cloud,
                    years: 1,
                    description: 'Proficient in Amazon Web Services (AWS) for cloud infrastructure and deploying scalable applications. Skilled in core AWS services including EC2, S3, Lambda for serverless computing, and IAM for security management. Experience with AWS services for databases (RDS), content delivery (CloudFront), and monitoring (CloudWatch). Knowledgeable in AWS deployment strategies, serverless architecture patterns, and basic cloud infrastructure management',
                    lastUsed: '2025'
                },
                {
                    name: 'Adobe Cloud',
                    level: 75,
                    icon: Cloud,
                    years: 1,
                    description: 'Adobe Creative Cloud and Experience Cloud services for enterprise solutions, cloud-based workflows, and integrated Adobe ecosystem management',
                    lastUsed: '2025'
                },
                {
                    name: 'CI/CD',
                    level: 72,
                    icon: Zap,
                    years: 1,
                    description: 'Experienced in Continuous Integration and Continuous Deployment (CI/CD) pipelines for automating software delivery processes. Skilled in setting up automated testing, building, and deployment workflows using tools like GitHub Actions, GitLab CI, or Jenkins. Proficient in configuring deployment pipelines, environment management, and ensuring code quality through automated checks. Knowledgeable in DevOps best practices for streamlining development workflows and reducing manual deployment errors',
                    lastUsed: '2025'
                },
            ]
        },
        {
            category: 'Design & UX',
            icon: Palette,
            color: '#06B6D4',
            skills: [
                {
                    name: 'UI/UX Design',
                    level: 75,
                    icon: Palette,
                    years: 1,
                    description: 'Proficient in UI/UX design principles focusing on creating intuitive, user-centered interfaces that enhance user experience. Skilled in wireframing, prototyping, user research, and usability testing. Experience with design systems, color theory, typography, and creating accessible designs that follow WCAG guidelines. Knowledgeable in translating design concepts into functional web and mobile interfaces while maintaining design consistency',
                    lastUsed: '2025'
                },
                {
                    name: 'Figma',
                    level: 70,
                    icon: Palette,
                    years: 1,
                    description: 'Skilled in Figma for collaborative design work, creating high-fidelity prototypes, and designing user interfaces. Proficient in using Figma features including components, auto-layout, design systems, and interactive prototyping. Experience with collaborative design workflows, sharing designs with stakeholders, and creating design specifications for developers. Knowledgeable in using Figma plugins and maintaining design consistency across projects',
                    lastUsed: '2025'
                }
            ]
        }
    ]

    const filteredAndSortedSkills = useMemo(() => {
        let allSkills = skillCategories.flatMap(cat =>
            cat.skills.map(skill => ({ ...skill, category: cat.category, categoryColor: cat.color }))
        )

        if (selectedCategory !== 'all') {
            allSkills = allSkills.filter(skill => skill.category === selectedCategory)
        }

        return allSkills.sort((a, b) => {
            switch (sortBy) {
                case 'level':
                    return b.level - a.level
                case 'name':
                    return a.name.localeCompare(b.name)
                case 'years':
                    return b.years - a.years
                default:
                    return 0
            }
        })
    }, [selectedCategory, sortBy])

    const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)
    const avgProficiency = 100
    const totalYears = 1

    return (
        <section id="skills" className="section skills">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">Skills & Expertise</h2>
                <p className="section-subtitle">
                    A comprehensive overview of my technical skills, experience, and proficiency levels across different domains
                </p>

                {/* Filters and Controls */}
                <motion.div
                    className="skills-controls"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="category-filters">
                        <button
                            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                            onClick={() => setSelectedCategory('all')}
                        >
                            All Skills
                        </button>
                        {skillCategories.map(category => (
                            <button
                                key={category.category}
                                className={`filter-btn ${selectedCategory === category.category ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category.category)}
                                style={{ '--category-color': category.color } as any}
                            >
                                <category.icon size={16} />
                                {category.category}
                            </button>
                        ))}
                    </div>

                    <div className="sort-controls">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as any)}
                            className="sort-select"
                        >
                            <option value="level">Sort by Level</option>
                            <option value="name">Sort by Name</option>
                            <option value="years">Sort by Experience</option>
                        </select>
                    </div>
                </motion.div>

                {/* Skills Grid */}
                <div className="skills-container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory}
                            className="skills-grid"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {filteredAndSortedSkills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="skill-item"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    whileHover={{
                                        scale: 1.02,
                                        y: -5,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <div className="skill-header">
                                        <div className="skill-info">
                                            <div className="skill-icon" style={{ color: skill.categoryColor }}>
                                                <skill.icon size={20} />
                                            </div>
                                            <div className="skill-details">
                                                <span className="skill-name">{skill.name}</span>
                                                <span className="skill-category">{skill.category}</span>
                                            </div>
                                        </div>
                                        <div className="skill-level-info">
                                            <span className="skill-level" style={{ color: '#3B82F6' }}>
                                                Advanced
                                            </span>
                                        </div>
                                    </div>

                                    <div className="skill-description">
                                        {skill.description}
                                    </div>

                                    <div className="skill-meta">
                                        <div className="skill-experience">
                                            <Clock size={14} />
                                            <span>{skill.years} years</span>
                                        </div>
                                        <div className="skill-last-used">
                                            <TrendingUp size={14} />
                                            <span>Last used: {skill.lastUsed}</span>
                                        </div>
                                    </div>

                                    {showCertifications && skill.certifications && skill.certifications.length > 0 && (
                                        <div className="skill-certifications">
                                            <Award size={14} />
                                            <span>{skill.certifications.join(', ')}</span>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Enhanced Summary */}
                <motion.div
                    className="skills-summary"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="summary-header">
                        <h3>Skills Overview</h3>
                        <button
                            className="certifications-toggle"
                            onClick={() => setShowCertifications(!showCertifications)}
                        >
                            <Award size={16} />
                            {showCertifications ? 'Hide' : 'Show'} Certifications
                        </button>
                    </div>

                    <div className="summary-stats">
                        <div className="stat-item">
                            <div className="stat-icon">
                                <Code size={24} />
                            </div>
                            <div className="stat-number">{totalSkills}+</div>
                            <div className="stat-label">Technologies</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon">
                                <Clock size={24} />
                            </div>
                            <div className="stat-number">{totalYears}+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon">
                                <Star size={24} />
                            </div>
                            <div className="stat-number">{avgProficiency}%</div>
                            <div className="stat-label">Avg. Proficiency</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon">
                                <Shield size={24} />
                            </div>
                            <div className="stat-number">{skillCategories.length}</div>
                            <div className="stat-label">Categories</div>
                        </div>
                    </div>

                    <div className="expertise-highlights">
                        <h4>Areas of Expertise</h4>
                        <div className="expertise-tags">
                            {skillCategories.flatMap(cat => cat.skills)
                                .filter(skill => skill.level >= 85)
                                .slice(0, 6)
                                .map(skill => (
                                    <span key={skill.name} className="expertise-tag">
                                        {skill.name}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                </motion.div>

                {/* Certificate Section */}
                <motion.div
                    className="certificate-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    viewport={{ once: true }}
                >
                    <div className="certificate-header">
                        <h3>Certifications & Achievements</h3>
                        <p>Professional certifications and recognition for my work</p>
                    </div>

                    <div className="certificate-container">
                        <Certificate />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Skills 
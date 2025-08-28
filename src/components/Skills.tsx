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
    Cpu,

    Smartphone,

    Palette,
    Shield,
    Award,
    TrendingUp,
    Clock,
    Star
} from 'lucide-react'
import './Skills.css'

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
    const [selectedCategory, setSelectedCategory] = useState<string>('all')
    const [sortBy, setSortBy] = useState<'level' | 'name' | 'years'>('level')
    const [showCertifications, setShowCertifications] = useState(false)

    const skillCategories: SkillCategory[] = [
        {
            category: 'Frontend Development',
            icon: Globe,
            color: '#3B82F6',
            skills: [
                {
                    name: 'React',
                    level: 95,
                    icon: Code,
                    years: 1,
                    description: 'Building scalable SPAs with hooks, context, and modern patterns',
                    certifications: ['Meta React Certification'],
                    lastUsed: '2025'
                },
                {
                    name: 'TypeScript',
                    level: 90,
                    icon: Code,
                    years: 1,
                    description: 'Type-safe development with advanced generics and utility types',
                    lastUsed: '2025'
                },
                {
                    name: 'JavaScript',
                    level: 92,
                    icon: Code,
                    years: 1,
                    description: 'ES6+, async programming, and modern JavaScript patterns',
                    lastUsed: '2025'
                },
                {
                    name: 'HTML/CSS',
                    level: 88,
                    icon: Code,
                    years: 1,
                    description: 'Semantic HTML, CSS Grid, Flexbox, and responsive design',
                    lastUsed: '2025'
                },
                {
                    name: 'Next.js',
                    level: 85,
                    icon: Code,
                    years: 1,
                    description: 'Full-stack React framework with SSR and SSG',
                    lastUsed: '2025'
                },
                {
                    name: 'AEM',
                    level: 80,
                    icon: Code,
                    years: 1,
                    description: 'AEM (Adobe Experience Manager) for frontend services',
                    lastUsed: '2025'
                },
                {
                    name: 'Vue.js',
                    level: 80,
                    icon: Code,
                    years: 1,
                    description: 'Progressive JavaScript framework with Composition API',
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
                    description: 'Server-side JavaScript with Express and performance optimization',
                    lastUsed: '2025'
                },
                {
                    name: 'Express.js',
                    level: 85,
                    icon: Server,
                    years: 1,
                    description: 'Fast, unopinionated web framework for Node.js',
                    lastUsed: '2025'
                },
                {
                    name: 'Golang',
                    level: 75,
                    icon: Cpu,
                    years: 1,
                    description: 'High-performance systems programming and microservices',
                    lastUsed: '2025'
                },
                {
                    name: 'PostgreSQL',
                    level: 80,
                    icon: Database,
                    years: 1,
                    description: 'Advanced SQL, indexing, and database optimization',
                    lastUsed: '2025'
                },
                {
                    name: 'MongoDB',
                    level: 78,
                    icon: Database,
                    years: 1,
                    description: 'NoSQL database with aggregation pipelines and indexing',
                    lastUsed: '2025'
                },
                {
                    name: 'REST APIs',
                    level: 90,
                    icon: Zap,
                    years: 1,
                    description: 'Designing scalable RESTful APIs with proper documentation',
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
                    description: 'Cross-platform mobile development with native performance',
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
                    description: 'Version control, branching strategies, and collaboration',
                    lastUsed: '2025'
                },
                {
                    name: 'Docker',
                    level: 75,
                    icon: Cloud,
                    years: 1,
                    description: 'Containerization and microservices deployment',
                    lastUsed: '2025'
                },
                {
                    name: 'AWS',
                    level: 70,
                    icon: Cloud,
                    years: 1,
                    description: 'Cloud infrastructure and serverless architecture',
                    lastUsed: '2025'
                },
                {
                    name: 'CI/CD',
                    level: 72,
                    icon: Zap,
                    years: 1,
                    description: 'Automated deployment pipelines and DevOps practices',
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
                    description: 'User-centered design principles and prototyping',
                    lastUsed: '2025'
                },
                {
                    name: 'Figma',
                    level: 70,
                    icon: Palette,
                    years: 1,
                    description: 'Collaborative design and prototyping tool',
                    lastUsed: '2025'
                }
            ]
        }
    ]

    const getSkillLevelColor = (level: number) => {
        if (level >= 90) return '#10B981'
        if (level >= 80) return '#3B82F6'
        if (level >= 70) return '#F59E0B'
        return '#EF4444'
    }

    const getSkillLevelText = (level: number) => {
        if (level >= 90) return 'Expert'
        if (level >= 80) return 'Advanced'
        if (level >= 70) return 'Intermediate'
        return 'Beginner'
    }

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
    const avgProficiency = Math.round(
        skillCategories.flatMap(cat => cat.skills).reduce((acc, skill) => acc + skill.level, 0) /
        skillCategories.flatMap(cat => cat.skills).length
    )
    const totalYears = skillCategories.flatMap(cat => cat.skills).reduce((acc, skill) => acc + skill.years, 0)

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
                                            <span
                                                className="skill-level"
                                                style={{ color: getSkillLevelColor(skill.level) }}
                                            >
                                                {getSkillLevelText(skill.level)}
                                            </span>
                                            <span className="skill-percentage">{skill.level}%</span>
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

                                    <div className="skill-bar">
                                        <motion.div
                                            className="skill-progress"
                                            style={{
                                                background: `linear-gradient(90deg, ${skill.categoryColor}, ${getSkillLevelColor(skill.level)})`
                                            }}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{
                                                duration: 1.2,
                                                delay: index * 0.05 + 0.3,
                                                ease: "easeOut"
                                            }}
                                        />
                                    </div>
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
            </motion.div>
        </section>
    )
}

export default Skills 
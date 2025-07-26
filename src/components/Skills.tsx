import { motion } from 'framer-motion'
import {
    Code,
    Database,
    Cloud,
    GitBranch,
    Zap,
    Globe,
    Server,
    Cpu,
    Monitor,
    FileCode,
    FileText,
    Layers,
    Box,
    Package,
    Terminal,
    Settings,
    Shield,
    Activity
} from 'lucide-react'
import './Skills.css'

const Skills = () => {
    const skillCategories = [
        {
            category: 'Frontend Development',
            icon: Globe,
            color: '#3B82F6',
            skills: [
                { name: 'React', level: 95, icon: FileCode, color: '#61DAFB' },
                { name: 'TypeScript', level: 90, icon: FileText, color: '#3178C6' },
                { name: 'JavaScript', level: 92, icon: Code, color: '#F7DF1E' },
                { name: 'HTML/CSS', level: 88, icon: Layers, color: '#E34F26' },
                { name: 'Next.js', level: 85, icon: Box, color: '#000000' },
                { name: 'Vue.js', level: 80, icon: Package, color: '#4FC08D' }
            ]
        },
        {
            category: 'Backend Development',
            icon: Server,
            color: '#10B981',
            skills: [
                { name: 'Node.js', level: 88, icon: Terminal, color: '#339933' },
                { name: 'Express.js', level: 85, icon: Server, color: '#000000' },
                { name: 'Golang', level: 75, icon: Cpu, color: '#00ADD8' },
                { name: 'PostgreSQL', level: 80, icon: Database, color: '#336791' },
                { name: 'MongoDB', level: 78, icon: Database, color: '#47A248' },
                { name: 'REST APIs', level: 90, icon: Zap, color: '#FF6B6B' }
            ]
        },
        {
            category: 'DevOps & Tools',
            icon: Cloud,
            color: '#F59E0B',
            skills: [
                { name: 'Git', level: 85, icon: GitBranch, color: '#F05032' },
                { name: 'Docker', level: 75, icon: Cloud, color: '#2496ED' },
                { name: 'AWS', level: 70, icon: Cloud, color: '#FF9900' },
                { name: 'CI/CD', level: 72, icon: Activity, color: '#FF6B6B' },
                { name: 'Linux', level: 80, icon: Monitor, color: '#FCC624' },
                { name: 'Nginx', level: 65, icon: Settings, color: '#009639' }
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
                    A comprehensive overview of my technical skills and proficiency levels across different domains
                </p>

                <div className="skills-grid">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            className="skill-category"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="category-header">
                                <div className="category-icon" style={{ color: category.color }}>
                                    <category.icon size={28} />
                                </div>
                                <h3 className="category-title">{category.category}</h3>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        className="skill-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: (categoryIndex * 0.15) + (skillIndex * 0.08)
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                            scale: 1.02,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <div className="skill-header">
                                            <div className="skill-info">
                                                <div className="skill-icon" style={{ color: skill.color }}>
                                                    <skill.icon size={20} />
                                                </div>
                                                <span className="skill-name">{skill.name}</span>
                                            </div>
                                            <div className="skill-level-info">
                                                <span
                                                    className="skill-level"
                                                    style={{ color: getSkillLevelColor(skill.level) }}
                                                >
                                                    {getSkillLevelText(skill.level)}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="skill-icons-grid">
                                            {Array.from({ length: Math.floor(skill.level / 10) }, (_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="skill-icon-dot"
                                                    style={{ backgroundColor: skill.color }}
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    whileInView={{ scale: 1, opacity: 1 }}
                                                    transition={{
                                                        duration: 0.3,
                                                        delay: (categoryIndex * 0.15) + (skillIndex * 0.08) + (i * 0.05),
                                                        ease: "easeOut"
                                                    }}
                                                    viewport={{ once: true }}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="skills-summary"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="summary-stats">
                        <div className="stat-item">
                            <div className="stat-number">12+</div>
                            <div className="stat-label">Technologies</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">3</div>
                            <div className="stat-label">Categories</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">82%</div>
                            <div className="stat-label">Avg. Proficiency</div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Skills 
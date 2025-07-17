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
    Monitor
} from 'lucide-react'
import './Skills.css'

const Skills = () => {
    const skillCategories = [
        {
            category: 'Frontend Development',
            icon: Globe,
            color: '#3B82F6',
            skills: [
                { name: 'React', level: 95, icon: Code },
                { name: 'TypeScript', level: 90, icon: Code },
                { name: 'JavaScript', level: 92, icon: Code },
                { name: 'HTML/CSS', level: 88, icon: Code },
                { name: 'Next.js', level: 85, icon: Code },
                { name: 'Vue.js', level: 80, icon: Code }
            ]
        },
        {
            category: 'Backend Development',
            icon: Server,
            color: '#10B981',
            skills: [
                { name: 'Node.js', level: 88, icon: Server },
                { name: 'Express.js', level: 85, icon: Server },
                { name: 'Golang', level: 75, icon: Cpu },
                { name: 'PostgreSQL', level: 80, icon: Database },
                { name: 'MongoDB', level: 78, icon: Database },
                { name: 'REST APIs', level: 90, icon: Zap }
            ]
        },
        {
            category: 'DevOps & Tools',
            icon: Cloud,
            color: '#F59E0B',
            skills: [
                { name: 'Git', level: 85, icon: GitBranch },
                { name: 'Docker', level: 75, icon: Cloud },
                { name: 'AWS', level: 70, icon: Cloud },
                { name: 'CI/CD', level: 72, icon: Zap },
                { name: 'Linux', level: 80, icon: Monitor },
                { name: 'Nginx', level: 65, icon: Server }
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
                                                <div className="skill-icon">
                                                    <skill.icon size={16} />
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
                                                <span className="skill-percentage">{skill.level}%</span>
                                            </div>
                                        </div>

                                        <div className="skill-bar">
                                            <motion.div
                                                className="skill-progress"
                                                style={{
                                                    background: `linear-gradient(90deg, ${category.color}, ${getSkillLevelColor(skill.level)})`
                                                }}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{
                                                    duration: 1.2,
                                                    delay: (categoryIndex * 0.15) + (skillIndex * 0.08) + 0.3,
                                                    ease: "easeOut"
                                                }}
                                                viewport={{ once: true }}
                                            />
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
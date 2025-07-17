import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
    const skillCategories = [
        {
            category: 'Frontend',
            skills: [
                { name: 'React', level: 99.99 },
                { name: 'TypeScript', level: 99.99 },
                { name: 'JavaScript', level: 99.99 },
                { name: 'HTML/CSS', level: 99.99 },
                { name: 'Next.js', level: 99.99 }
            ]
        },
        {
            category: 'Backend',
            skills: [
                { name: 'Node.js', level: 95 },
                { name: 'Express.js', level: 80 },
                { name: 'Golang', level: 80 },
                { name: 'PostgreSQL', level: 80 },
                { name: 'MongoDB', level: 75 }
            ]
        },
        {
            category: 'Tools & Others',
            skills: [
                { name: 'Git', level: 90 },
                { name: 'Docker', level: 70 },
                { name: 'AWS', level: 75 },
                { name: 'Figma', level: 65 },
                { name: 'Bitbucket', level: 80 }
            ]
        }
    ]

    return (
        <section id="skills" className="section skills">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">Skills & Expertise</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            className="skill-category"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="category-title">{category.category}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        className="skill-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <motion.div
                                                className="skill-progress"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                                                viewport={{ once: true }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Skills 
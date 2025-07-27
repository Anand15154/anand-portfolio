import { motion } from 'framer-motion'
import { User, Code, Lightbulb, Target, Building2, Calendar, MapPin, GraduationCap, Award, BookOpen } from 'lucide-react'
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

    const companies = [
        {
            id: 1,
            name: 'TechCorp Solutions',
            logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center',
            role: 'Senior Full-Stack Developer',
            duration: '2023 - Present',
            location: 'San Francisco, CA',
            description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies.',
            technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
            achievements: ['Reduced load time by 40%', 'Improved team productivity by 25%', 'Led 3 major projects']
        },
        {
            id: 2,
            name: 'InnovateLabs',
            logo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=100&h=100&fit=crop&crop=center',
            role: 'Frontend Developer',
            duration: '2022 - 2023',
            location: 'New York, NY',
            description: 'Developed responsive web applications and improved user experience across multiple platforms.',
            technologies: ['React', 'Vue.js', 'JavaScript', 'CSS3', 'REST APIs'],
            achievements: ['Built 5+ client applications', 'Enhanced UI/UX design', 'Mentored junior developers']
        },
        {
            id: 3,
            name: 'StartupHub',
            logo: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=100&h=100&fit=crop&crop=center',
            role: 'Software Engineer',
            duration: '2021 - 2022',
            location: 'Austin, TX',
            description: 'Contributed to rapid prototyping and development of innovative startup solutions.',
            technologies: ['JavaScript', 'Python', 'MongoDB', 'Express.js', 'Git'],
            achievements: ['Launched MVP in 3 months', 'Implemented CI/CD pipeline', 'Optimized database queries']
        }
    ]

    const education = [
        {
            id: 1,
            institution: 'Stanford University',
            logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=100&fit=crop&crop=center',
            degree: 'Master of Science in Computer Science',
            duration: '2019 - 2021',
            location: 'Stanford, CA',
            gpa: '3.8/4.0',
            description: 'Specialized in artificial intelligence and machine learning with focus on software engineering principles.',
            courses: ['Advanced Algorithms', 'Machine Learning', 'Software Engineering', 'Database Systems', 'Computer Networks'],
            achievements: ['Graduated with Distinction', 'Research Assistant in AI Lab', 'Teaching Assistant for CS101']
        },
        {
            id: 2,
            institution: 'University of California, Berkeley',
            logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop&crop=center',
            degree: 'Bachelor of Science in Computer Science',
            duration: '2015 - 2019',
            location: 'Berkeley, CA',
            gpa: '3.7/4.0',
            description: 'Comprehensive foundation in computer science with emphasis on software development and system design.',
            courses: ['Data Structures', 'Object-Oriented Programming', 'Computer Architecture', 'Operating Systems', 'Web Development'],
            achievements: ['Dean\'s List (3 years)', 'Computer Science Honor Society', 'Senior Project: E-commerce Platform']
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
                            I'm a full-stack software engineer with expertise in modern web development
                            technologies including React, Node.js, TypeScript, and cloud platforms.
                            I specialize in building scalable, performant applications with clean architecture
                            and best practices.
                        </p>
                        <p>
                            My technical stack includes frontend frameworks (React, Vue.js), backend
                            technologies (Node.js, Express, Golang), databases (MongoDB, PostgreSQL),
                            and DevOps tools (Docker, AWS, CI/CD). I'm passionate about writing
                            maintainable code and implementing robust testing strategies.
                        </p>
                        <p>
                            I follow agile development methodologies and have experience with microservices
                            architecture, RESTful APIs, and modern deployment practices. My focus is on
                            creating efficient, scalable solutions that solve real-world problems.
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

                {/* Companies Section */}
                <motion.div
                    className="companies-section"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="companies-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="companies-title">Companies I've Worked With</h3>
                        <p className="companies-subtitle">
                            My professional journey across different organizations and industries
                        </p>
                    </motion.div>

                    <motion.div
                        className="companies-grid"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        viewport={{ once: true }}
                    >
                        {companies.map((company, index) => (
                            <motion.div
                                key={company.id}
                                className="company-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, scale: 1.02 }}
                            >
                                <div className="company-header">
                                    <div className="company-logo">
                                        <img src={company.logo} alt={company.name} />
                                    </div>
                                    <div className="company-info">
                                        <h4 className="company-name">{company.name}</h4>
                                        <p className="company-role">{company.role}</p>
                                        <div className="company-meta">
                                            <div className="company-duration">
                                                <Calendar size={14} />
                                                <span>{company.duration}</span>
                                            </div>
                                            <div className="company-location">
                                                <MapPin size={14} />
                                                <span>{company.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="company-content">
                                    <p className="company-description">{company.description}</p>

                                    <div className="company-technologies">
                                        <h5>Technologies Used:</h5>
                                        <div className="tech-tags">
                                            {company.technologies.map((tech, techIndex) => (
                                                <span key={techIndex} className="tech-tag">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="company-achievements">
                                        <h5>Key Achievements:</h5>
                                        <ul className="achievements-list">
                                            {company.achievements.map((achievement, achievementIndex) => (
                                                <li key={achievementIndex} className="achievement-item">
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Education Section */}
                <motion.div
                    className="education-section"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="education-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="education-title">Education</h3>
                        <p className="education-subtitle">
                            My academic journey and continuous learning path
                        </p>
                    </motion.div>

                    <motion.div
                        className="education-grid"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        viewport={{ once: true }}
                    >
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                className="education-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, scale: 1.02 }}
                            >
                                <div className="education-header-card">
                                    <div className="education-logo">
                                        <img src={edu.logo} alt={edu.institution} />
                                    </div>
                                    <div className="education-info">
                                        <h4 className="education-institution">{edu.institution}</h4>
                                        <p className="education-degree">{edu.degree}</p>
                                        <div className="education-meta">
                                            <div className="education-duration">
                                                <Calendar size={14} />
                                                <span>{edu.duration}</span>
                                            </div>
                                            <div className="education-location">
                                                <MapPin size={14} />
                                                <span>{edu.location}</span>
                                            </div>
                                            <div className="education-gpa">
                                                <Award size={14} />
                                                <span>GPA: {edu.gpa}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="education-content">
                                    <p className="education-description">{edu.description}</p>

                                    <div className="education-courses">
                                        <h5>
                                            <BookOpen size={16} />
                                            Key Courses:
                                        </h5>
                                        <div className="course-tags">
                                            {edu.courses.map((course, courseIndex) => (
                                                <span key={courseIndex} className="course-tag">
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="education-achievements">
                                        <h5>
                                            <GraduationCap size={16} />
                                            Achievements:
                                        </h5>
                                        <ul className="education-achievements-list">
                                            {edu.achievements.map((achievement, achievementIndex) => (
                                                <li key={achievementIndex} className="education-achievement-item">
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>


            </motion.div>
        </section>
    )
}

export default About 
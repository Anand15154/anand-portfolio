import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight, Search, Filter } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './Blog.css'

interface BlogPost {
    id: number
    title: string
    excerpt: string
    content: string
    author: string
    date: string
    readTime: string
    category: string
    tags: string[]
    image: string
    featured?: boolean
}

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedTag, setSelectedTag] = useState('all')
    const navigate = useNavigate()

    // Sample blog posts data
    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: "Building Modern Web Applications with React and TypeScript",
            excerpt: "Learn how to create scalable and maintainable web applications using React and TypeScript. This comprehensive guide covers best practices, patterns, and real-world examples.",
            content: "Full content here...",
            author: "Anand Tiwari",
            date: "2024-01-15",
            readTime: "8 min read",
            category: "Development",
            tags: ["React", "TypeScript", "Web Development"],
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
            featured: true
        },
        {
            id: 2,
            title: "The Future of AI in Software Development",
            excerpt: "Explore how artificial intelligence is transforming the software development landscape and what developers need to know to stay ahead.",
            content: "Full content here...",
            author: "Anand Tiwari",
            date: "2024-01-10",
            readTime: "12 min read",
            category: "AI",
            tags: ["AI", "Machine Learning", "Future Tech"],
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
        },
        {
            id: 3,
            title: "Mastering CSS Grid and Flexbox for Modern Layouts",
            excerpt: "A deep dive into CSS Grid and Flexbox techniques for creating responsive and beautiful web layouts.",
            content: "Full content here...",
            author: "Anand Tiwari",
            date: "2024-01-05",
            readTime: "6 min read",
            category: "Design",
            tags: ["CSS", "Grid", "Flexbox", "Web Design"],
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
        },
        {
            id: 4,
            title: "Performance Optimization Techniques for React Applications",
            excerpt: "Discover advanced techniques to optimize React application performance and improve user experience.",
            content: "Full content here...",
            author: "Anand Tiwari",
            date: "2023-12-28",
            readTime: "10 min read",
            category: "Development",
            tags: ["React", "Performance", "Optimization"],
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
        },
        {
            id: 5,
            title: "Design Systems: Building Consistent User Interfaces",
            excerpt: "Learn how to create and maintain design systems that ensure consistency across your applications.",
            content: "Full content here...",
            author: "Anand Tiwari",
            date: "2023-12-20",
            readTime: "7 min read",
            category: "Design",
            tags: ["Design Systems", "UI/UX", "Consistency"],
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop"
        }
    ]

    const categories = ['all', 'Development', 'Design', 'AI', 'Career']
    const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)))

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
        const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag)

        return matchesSearch && matchesCategory && matchesTag
    })

    const featuredPost = blogPosts.find(post => post.featured)
    const regularPosts = filteredPosts.filter(post => !post.featured)

    const handlePostClick = (postId: number) => {
        navigate(`/blog/${postId}`)
    }

    return (
        <section className="blog-section standalone">
            <div className="container">
                <motion.div
                    className="blog-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="blog-title">Blog</h1>
                    <p className="blog-subtitle">
                        Thoughts, insights, and tutorials on web development, design, and technology
                    </p>
                </motion.div>

                {/* Search and Filter */}
                <motion.div
                    className="blog-filters"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="search-container">
                        <Search size={20} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>

                    <div className="filter-container">
                        <Filter size={20} className="filter-icon" />
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="filter-select"
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>
                                    {category === 'all' ? 'All Categories' : category}
                                </option>
                            ))}
                        </select>

                        <select
                            value={selectedTag}
                            onChange={(e) => setSelectedTag(e.target.value)}
                            className="filter-select"
                        >
                            <option value="all">All Tags</option>
                            {allTags.map(tag => (
                                <option key={tag} value={tag}>{tag}</option>
                            ))}
                        </select>
                    </div>
                </motion.div>

                {/* Featured Post */}
                {featuredPost && (
                    <motion.article
                        className="featured-post"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        onClick={() => handlePostClick(featuredPost.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="featured-post-image">
                            <img src={featuredPost.image} alt={featuredPost.title} />
                            <div className="featured-badge">Featured</div>
                        </div>
                        <div className="featured-post-content">
                            <div className="post-meta">
                                <span className="post-category">{featuredPost.category}</span>
                                <span className="post-date">
                                    <Calendar size={16} />
                                    {new Date(featuredPost.date).toLocaleDateString()}
                                </span>
                                <span className="post-read-time">
                                    <Clock size={16} />
                                    {featuredPost.readTime}
                                </span>
                            </div>
                            <h2 className="featured-post-title">{featuredPost.title}</h2>
                            <p className="featured-post-excerpt">{featuredPost.excerpt}</p>
                            <div className="post-tags">
                                {featuredPost.tags.map(tag => (
                                    <span key={tag} className="post-tag">{tag}</span>
                                ))}
                            </div>
                            <div className="post-author">
                                <User size={16} />
                                <span>{featuredPost.author}</span>
                            </div>
                            <motion.button
                                className="read-more-btn featured"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handlePostClick(featuredPost.id)}
                            >
                                Read Article
                                <ArrowRight size={16} />
                            </motion.button>
                        </div>
                    </motion.article>
                )}

                {/* Regular Posts Grid */}
                <motion.div
                    className="posts-grid"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {regularPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            className="post-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                            whileHover={{ y: -5 }}
                            onClick={() => handlePostClick(post.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="post-image">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="post-content">
                                <div className="post-meta">
                                    <span className="post-category">{post.category}</span>
                                    <span className="post-date">
                                        <Calendar size={14} />
                                        {new Date(post.date).toLocaleDateString()}
                                    </span>
                                </div>
                                <h3 className="post-title">{post.title}</h3>
                                <p className="post-excerpt">{post.excerpt}</p>
                                <div className="post-tags">
                                    {post.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="post-tag">{tag}</span>
                                    ))}
                                    {post.tags.length > 2 && (
                                        <span className="post-tag more">+{post.tags.length - 2}</span>
                                    )}
                                </div>
                                <div className="post-footer">
                                    <div className="post-author">
                                        <User size={14} />
                                        <span>{post.author}</span>
                                    </div>
                                    <span className="post-read-time">
                                        <Clock size={14} />
                                        {post.readTime}
                                    </span>
                                </div>
                                <motion.button
                                    className="read-more-btn"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handlePostClick(post.id)}
                                >
                                    Read More
                                    <ArrowRight size={14} />
                                </motion.button>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {filteredPosts.length === 0 && (
                    <motion.div
                        className="no-posts"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p>No posts found matching your criteria.</p>
                    </motion.div>
                )}
            </div>
        </section>
    )
}

export default Blog 
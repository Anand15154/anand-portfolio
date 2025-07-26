import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Heart } from 'lucide-react'
import { useParams, useNavigate } from 'react-router-dom'
import './BlogPost.css'

interface BlogPostData {
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

const BlogPost = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    // Sample blog post data - in a real app, this would come from an API
    const blogPost: BlogPostData = {
        id: 1,
        title: "Building Modern Web Applications with React and TypeScript",
        excerpt: "Learn how to create scalable and maintainable web applications using React and TypeScript. This comprehensive guide covers best practices, patterns, and real-world examples.",
        content: `
            <p>Web development has evolved significantly over the past decade, and React has emerged as one of the most popular frameworks for building user interfaces. When combined with TypeScript, React becomes even more powerful, offering type safety and better developer experience.</p>
            
            <h2>Why React and TypeScript?</h2>
            <p>TypeScript adds static typing to JavaScript, which helps catch errors at compile time rather than runtime. This is especially valuable in large applications where bugs can be expensive to fix. React's component-based architecture works beautifully with TypeScript's type system.</p>
            
            <h2>Setting Up Your Development Environment</h2>
            <p>To get started with React and TypeScript, you'll need to set up your development environment. Here's a step-by-step guide:</p>
            
            <ol>
                <li>Install Node.js and npm</li>
                <li>Create a new React project with TypeScript template</li>
                <li>Configure your IDE for TypeScript support</li>
                <li>Set up ESLint and Prettier for code quality</li>
            </ol>
            
            <h2>Best Practices for TypeScript in React</h2>
            <p>When using TypeScript with React, there are several best practices to follow:</p>
            
            <ul>
                <li>Always define interfaces for your props</li>
                <li>Use generic types for reusable components</li>
                <li>Leverage TypeScript's utility types</li>
                <li>Keep your types close to your components</li>
            </ul>
            
            <h2>Advanced Patterns</h2>
            <p>As your application grows, you'll want to implement more advanced patterns:</p>
            
            <h3>Custom Hooks with TypeScript</h3>
            <p>Custom hooks are a great way to share logic between components. With TypeScript, you can ensure that your hooks are type-safe and easy to use.</p>
            
            <h3>Context API with TypeScript</h3>
            <p>The Context API is perfect for sharing state across your component tree. TypeScript helps you define the shape of your context and ensures that consumers receive the correct data.</p>
            
            <h2>Performance Optimization</h2>
            <p>TypeScript can help you optimize your React application by catching potential performance issues at compile time. Use React.memo, useMemo, and useCallback effectively with proper typing.</p>
            
            <h2>Testing with TypeScript</h2>
            <p>Testing is crucial for maintaining code quality. TypeScript makes it easier to write tests by providing better IntelliSense and catching type-related errors.</p>
            
            <h2>Conclusion</h2>
            <p>React and TypeScript are a powerful combination that can help you build more robust and maintainable web applications. By following best practices and leveraging TypeScript's type system, you can create better code and improve your development experience.</p>
            
            <p>Remember, the key to success with React and TypeScript is to start small and gradually add more sophisticated patterns as your application grows. Don't try to implement everything at once - focus on the patterns that provide the most value for your specific use case.</p>
        `,
        author: "Anand Tiwari",
        date: "2024-01-15",
        readTime: "8 min read",
        category: "Development",
        tags: ["React", "TypeScript", "Web Development", "Frontend", "JavaScript"],
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
    }

    const handleBack = () => {
        navigate('/blog')
    }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: blogPost.title,
                text: blogPost.excerpt,
                url: window.location.href
            })
        } else {
            navigator.clipboard.writeText(window.location.href)
            // You could add a toast notification here
        }
    }

    return (
        <div className="blog-post-page">
            <div className="container">
                {/* Back Button */}
                <motion.button
                    className="back-button"
                    onClick={handleBack}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ArrowLeft size={20} />
                    Back to Blog
                </motion.button>

                {/* Article Header */}
                <motion.article
                    className="blog-post"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Hero Image */}
                    <div className="post-hero">
                        <img src={blogPost.image} alt={blogPost.title} />
                    </div>

                    {/* Post Header */}
                    <div className="post-header">
                        <div className="post-meta">
                            <span className="post-category">{blogPost.category}</span>
                            <span className="post-date">
                                <Calendar size={16} />
                                {new Date(blogPost.date).toLocaleDateString()}
                            </span>
                            <span className="post-read-time">
                                <Clock size={16} />
                                {blogPost.readTime}
                            </span>
                        </div>

                        <h1 className="post-title">{blogPost.title}</h1>
                        <p className="post-excerpt">{blogPost.excerpt}</p>

                        <div className="post-author">
                            <div className="author-info">
                                <User size={20} />
                                <span>{blogPost.author}</span>
                            </div>
                        </div>

                        <div className="post-tags">
                            {blogPost.tags.map(tag => (
                                <span key={tag} className="post-tag">{tag}</span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="post-actions">
                            <motion.button
                                className="action-btn share-btn"
                                onClick={handleShare}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Share2 size={18} />
                                Share
                            </motion.button>
                            <motion.button
                                className="action-btn bookmark-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Bookmark size={18} />
                                Bookmark
                            </motion.button>
                            <motion.button
                                className="action-btn like-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Heart size={18} />
                                Like
                            </motion.button>
                        </div>
                    </div>

                    {/* Post Content */}
                    <div className="post-content">
                        <div
                            className="content-body"
                            dangerouslySetInnerHTML={{ __html: blogPost.content }}
                        />
                    </div>

                    {/* Post Footer */}
                    <div className="post-footer">
                        <div className="post-stats">
                            <span>👁️ 1.2k views</span>
                            <span>❤️ 45 likes</span>
                            <span>💬 12 comments</span>
                        </div>

                        <div className="share-section">
                            <h3>Share this article</h3>
                            <div className="share-buttons">
                                <motion.button
                                    className="share-btn twitter"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Twitter
                                </motion.button>
                                <motion.button
                                    className="share-btn linkedin"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    LinkedIn
                                </motion.button>
                                <motion.button
                                    className="share-btn facebook"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Facebook
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.article>
            </div>
        </div>
    )
}

export default BlogPost 
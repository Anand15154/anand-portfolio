import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="not-found-page">
            <div className="container">
                <motion.div
                    className="not-found-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="error-code">404</h1>
                    <h2 className="error-title">Page Not Found</h2>
                    <p className="error-message">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <div className="error-actions">
                        <motion.button
                            className="back-btn"
                            onClick={() => navigate(-1)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowLeft size={20} />
                            Go Back
                        </motion.button>
                        <motion.button
                            className="home-btn"
                            onClick={() => navigate('/')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Home size={20} />
                            Go Home
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default NotFound 
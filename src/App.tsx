import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import Home from './components/Home'
import AboutPage from './components/AboutPage'
import SkillsPage from './components/SkillsPage'
import ProjectsPage from './components/ProjectsPage'
import ContactPage from './components/ContactPage'
import LandingPage from './components/LandingPage'
import NotFound from './components/NotFound'
import './App.css'

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="App">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/skills" element={<SkillsPage />} />
                            <Route path="/projects" element={<ProjectsPage />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:id" element={<BlogPost />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    )
}

export default App 
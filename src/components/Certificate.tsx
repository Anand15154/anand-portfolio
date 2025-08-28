import { motion } from 'framer-motion'
import { Clock, Award } from 'lucide-react'
import SiteGuruImage from '../assets/Site.Guru.png'
import './Certificate.css'

const Certificate = () => {
    return (
        <motion.div
            className="certificate-component"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
            }}
        >
            <div className="certificate-image">
                <img src={SiteGuruImage} alt="Site Guru Internship Certificate" />
            </div>
            <div className="certificate-content">
                <h4>Full Stack Developer Internship</h4>
                <div className="certificate-company">
                    <span className="company-name">Site Guru (EdJobSync Enterprises)</span>
                    <span className="certificate-id">SG24FSI23812</span>
                </div>
                <div className="certificate-period">
                    <Clock size={14} />
                    <span>3 months • May 2024 - August 2024</span>
                </div>
                <div className="certificate-technologies">
                    <div className="tech-tags">
                        <span className="tech-tag">Vue.js</span>
                        <span className="tech-tag">Node.js</span>
                        <span className="tech-tag">MySQL</span>
                    </div>
                </div>
                <div className="certificate-appreciation">
                    <p>"We appreciate his work & effort. His conduct during internship period was excellent."</p>
                </div>
                <div className="certificate-verification">
                    <Award size={14} />
                    <span>Verifiable via QR Code</span>
                </div>
            </div>
        </motion.div>
    )
}

export default Certificate

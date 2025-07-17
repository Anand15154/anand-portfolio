import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'anandtiwari7525@gmail.com',
            link: 'mailto:anandtiwari7525@gmail.com'
        },
        {
            icon: Phone,
            title: 'Phone',
            value: '+91 8795750328',
            link: 'tel:+918795750328'
        },
        {
            icon: MapPin,
            title: 'Address',
            value: 'GURUGRAM, HARYANA, INDIA',
            link: '#'
        }
    ]

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        // Check if EmailJS is properly configured
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        console.log('EmailJS Configuration Check:', {
            serviceId: serviceId ? 'Configured' : 'Not configured',
            templateId: templateId ? 'Configured' : 'Not configured',
            publicKey: publicKey ? 'Configured' : 'Not configured'
        })

        if (!serviceId || !templateId || !publicKey) {
            console.warn('EmailJS not configured, using fallback email client')
            // Fallback to default email client
            try {
                const subject = encodeURIComponent(formData.subject)
                const body = encodeURIComponent(`
Hello Anand,

I'm reaching out from your portfolio website.

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

Best regards,
${formData.name}
                `)

                const mailtoLink = `mailto:anandtiwari7525@gmail.com?subject=${subject}&body=${body}`
                console.log('Opening mailto link:', mailtoLink)
                window.open(mailtoLink, '_blank')

                setSubmitStatus('success')
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            } catch (fallbackError) {
                console.error('Fallback error:', fallbackError)
                setSubmitStatus('error')
            }
            setIsSubmitting(false)
            return
        }

        try {
            console.log('Attempting to send email via EmailJS...')
            // Try EmailJS
            const result = await emailjs.send(
                serviceId,
                templateId,
                {
                    to_email: 'anandtiwari7525@gmail.com',
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                publicKey
            )

            console.log('EmailJS result:', result)

            if (result.status === 200) {
                setSubmitStatus('success')
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            } else {
                throw new Error('EmailJS failed')
            }
        } catch (error) {
            console.error('EmailJS error:', error)

            // Fallback: Open default email client
            try {
                const subject = encodeURIComponent(formData.subject)
                const body = encodeURIComponent(`
Hello Anand,

I'm reaching out from your portfolio website.

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

Best regards,
${formData.name}
                `)

                const mailtoLink = `mailto:anandtiwari7525@gmail.com?subject=${subject}&body=${body}`
                console.log('EmailJS failed, opening fallback mailto link:', mailtoLink)
                window.open(mailtoLink, '_blank')

                setSubmitStatus('success')
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            } catch (fallbackError) {
                console.error('Fallback error:', fallbackError)
                setSubmitStatus('error')
            }
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="section contact">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3>Let's work together!</h3>
                        <p>
                            I'm always interested in new opportunities and exciting projects.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className="contact-details">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.title}
                                    href={info.link}
                                    className="contact-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="contact-icon">
                                        <info.icon size={24} />
                                    </div>
                                    <div className="contact-text">
                                        <h4>{info.title}</h4>
                                        <p>{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={5}
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>

                        {submitStatus === 'success' && (
                            <motion.div
                                className="success-message"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                Contact request sent! I'll get back to you soon.
                            </motion.div>
                        )}

                        {submitStatus === 'error' && (
                            <motion.div
                                className="error-message"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                Failed to send message. Please try again or contact me directly.
                            </motion.div>
                        )}

                        <motion.button
                            type="submit"
                            className="submit-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="loading-spinner"></div>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send size={20} />
                                    Send Message
                                </>
                            )}
                        </motion.button>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact 
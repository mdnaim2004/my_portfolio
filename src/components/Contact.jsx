import { useState } from 'react'
import { FiMail, FiSend } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      // Assuming the backend is running on the same host but port 5000 in dev
      // In production, you might need a different setup or proxy
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? '/api/contact' 
        : 'http://localhost:5000/api/contact'
        
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message.' })
      }
    } catch (error) {
      console.error('Submission error:', error)
      setStatus({ type: 'error', message: 'Network error. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="container section-padding">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something meaningful"
          description="I am open to research collaborations, internships, and AI/ML engineering opportunities."
        />
      </Reveal>

      <div className="contact-layout">
        <Reveal delay={0.1}>
          <div className="glass-card section-card">
            <div>
              <p className="text-white">Reach me directly at:</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="mt-2 inline-block text-lg font-medium text-cyan"
              >
                {personalInfo.email}
              </a>
            </div>
            <a href={`mailto:${personalInfo.email}`} className="btn-primary mt-6">
              Open Mail App <FiMail />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass-card section-card">
            <h3 className="text-xl font-semibold text-white">Send a message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email <span className="text-cyan">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message <span className="text-cyan">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="How can I help you?"
                />
              </div>
              <button 
                type="submit" 
                className="btn-primary" 
                disabled={isSubmitting}
                style={{ width: 'fit-content' }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <FiSend />
              </button>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact

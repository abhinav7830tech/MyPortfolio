import { useState } from 'react'
import { Mail, Phone } from 'lucide-react'
import { useInView } from '@/hooks/use-mobile'

export default function ContactSection() {
  const { ref, isInView } = useInView()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    e.target.reset()
  }

  return (
    <section id="contact" className="py-24 px-6 bg-contact" ref={ref}>
      <div className="max-w-[1200px] mx-auto text-center">
        <p className={`font-mono text-xs font-medium text-[var(--accent)] tracking-[0.15em] uppercase mb-2 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Contact
        </p>
        <h2 className={`font-heading text-3xl font-bold tracking-tight mb-12 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Let's Connect
        </h2>
        <div className={`flex justify-center gap-6 flex-wrap mb-10 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="mailto:agnihotriabhinav8@gmail.com" className="text-sm text-[#FFEABB] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2">
            <Mail size={18} />
            agnihotriabhinav8@gmail.com
          </a>
          <a href="tel:+917253879736" className="text-sm text-[#FFEABB] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2">
            <Phone size={18} />
            +91 7253879736
          </a>
        </div>
        <form
          onSubmit={handleSubmit}
          className={`max-w-[520px] mx-auto text-left transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-[#FFEABB] mb-1.5">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-sm text-[var(--foreground)] font-body text-sm outline-none transition-all duration-300 focus:border-[var(--accent-glow)] focus:shadow-[0_0_16px_rgba(201,168,76,0.08)]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-[#FFEABB] mb-1.5">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-sm text-[var(--foreground)] font-body text-sm outline-none transition-all duration-300 focus:border-[var(--accent-glow)] focus:shadow-[0_0_16px_rgba(201,168,76,0.08)]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-[#FFEABB] mb-1.5">Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your message..."
              rows={4}
              className="w-full px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-sm text-[var(--foreground)] font-body text-sm outline-none transition-all duration-300 focus:border-[var(--accent-glow)] focus:shadow-[0_0_16px_rgba(201,168,76,0.08)] resize-y min-h-[120px]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 rounded-sm text-sm font-semibold bg-[var(--accent)] text-[var(--background)] border-2 border-[var(--accent)] transition-all duration-300 hover:shadow-[0_0_20px_var(--accent-glow)]"
          >
            {submitted ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

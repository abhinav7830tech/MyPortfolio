import { Check } from 'lucide-react'
import CertificationCard from './CertificationCard'
import { useInView } from '@/hooks/use-mobile'

const certifications = [
  'Data Analytics Job Simulation \u2014 Deloitte Australia (Forage)',
  'Data Visualisation: Empowering Business with Effective Insights \u2014 Tata Group (Forage)',
  'Bring AI to Work Workshop \u2014 Google Workspace',
  'Power BI for Beginners',
]

const achievements = [
  'Completed GeeksforGeeks 160-Day DSA Program \u2014 daily structured problem solving across Arrays, Trees, Graphs, and DP.',
  'Completed 3 industry job simulations via Forage (Deloitte Australia & Tata Group) applying real-world data analysis and business data visualisation.',
  'Built AI-powered Stock Market Analysis Dashboard using Python, Streamlit & yfinance with live technical indicators.',
]

export default function CertificationsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="certifications" className="py-24 px-6 bg-mid" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <p className={`font-mono text-xs font-medium text-[var(--accent)] tracking-[0.15em] uppercase mb-2 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Credentials
        </p>
        <h2 className={`font-heading text-3xl font-bold tracking-tight mb-12 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Certifications &amp; Achievements
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-heading text-base font-semibold text-[var(--accent)] mb-5">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <CertificationCard key={cert} title={cert} />
              ))}
            </div>
          </div>
          <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-heading text-base font-semibold text-[var(--accent)] mb-5">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-[#EDE9E6] leading-relaxed">
                  <div className="w-8 h-8 rounded-full bg-[var(--amber-dim)] flex items-center justify-center flex-shrink-0 text-[var(--amber)] mt-0.5">
                    <Check size={16} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

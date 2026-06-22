import { useInView } from '@/hooks/use-mobile'

export default function EducationSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="education" className="py-24 px-6 bg-mid" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <p className={`font-mono text-xs font-medium text-[var(--accent)] tracking-[0.15em] uppercase mb-2 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Education
        </p>
        <h2 className={`font-heading text-3xl font-bold tracking-tight mb-12 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Academic Background
        </h2>
        <div className="space-y-5">
          <div className={`bg-[var(--card)] border border-[var(--border)] rounded-lg p-6 sm:p-8 transition-all duration-700 delay-200 hover:border-[var(--accent-glow)] hover:shadow-[0_0_24px_rgba(201,168,76,0.06)] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-heading text-lg font-semibold mb-1">B.Tech in Computer Science &amp; Engineering</h3>
            <p className="text-sm text-[var(--accent)] mb-1">Shri Ram Murti Smarak College of Engineering Technology and Research, Bareilly</p>
            <p className="font-mono text-xs text-[#FFEABB]">Aug 2023 &ndash; May 2027</p>
          </div>
          <div className={`bg-[var(--card)] border border-[var(--border)] rounded-lg p-6 sm:p-8 transition-all duration-700 delay-300 hover:border-[var(--accent-glow)] hover:shadow-[0_0_24px_rgba(201,168,76,0.06)] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-heading text-lg font-semibold mb-1">Intermediate (Class XII) &mdash; Science</h3>
            <p className="text-sm text-[var(--accent)] mb-1">Dr. G. R. M. Inter College, Bareilly</p>
            <p className="font-mono text-xs text-[#FFEABB]">2021 &nbsp;|&nbsp; 80%+</p>
          </div>
          <div className={`bg-[var(--card)] border border-[var(--border)] rounded-lg p-6 sm:p-8 transition-all duration-700 hover:border-[var(--accent-glow)] hover:shadow-[0_0_24px_rgba(201,168,76,0.06)] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
            <h3 className="font-heading text-lg font-semibold mb-1">High School (Class X)</h3>
            <p className="text-sm text-[var(--accent)] mb-1">Swami Trilokanand Higher Secondary School, Bareilly</p>
            <p className="font-mono text-xs text-[#FFEABB]">2019 | 81%</p>
          </div>
        </div>
      </div>
    </section>
  )
}

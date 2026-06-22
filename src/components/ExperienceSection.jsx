import { useInView } from '@/hooks/use-mobile'

export default function ExperienceSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="experience" className="py-24 px-6 bg-mid" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <p className={`font-mono text-xs font-medium text-[var(--accent)] tracking-[0.15em] uppercase mb-2 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Career
        </p>
        <h2 className={`font-heading text-3xl font-bold tracking-tight mb-12 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Professional Experience
        </h2>
        <div className={`relative pl-8 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-[linear-gradient(to_bottom,var(--accent-glow),transparent)]" />
          <div className="relative pb-0">
            <div className="absolute left-[calc(-26px+4px)] top-[6px] w-3 h-3 rounded-full bg-[var(--background)] border-2 border-[var(--accent)] shadow-[0_0_12px_var(--accent-glow)]" />
            <p className="font-mono text-xs text-[var(--accent)] mb-1">Apr 2025 &ndash; Jun 2025 &middot; Remote</p>
            <h3 className="font-heading text-lg font-semibold mb-0.5">CODTECH IT SOLUTIONS</h3>
            <p className="text-sm text-[#FFF2DB] mb-3">Data Analytics Intern</p>
            <ul className="list-none space-y-1.5">
                {[
                  'Analysed structured datasets exceeding 50,000 records using Python and Pandas to identify business patterns and trends.',
                  'Built interactive Power BI dashboards to present KPIs and data-driven insights to non-technical stakeholders.',
                  'Implemented classification models and performed sentiment analysis on 5,000+ customer text entries using NLP techniques.',
                ].map((item) => (
                  <li key={item} className="relative pl-5 text-sm text-[#FFF2DB] leading-relaxed before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--accent-glow)]">
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

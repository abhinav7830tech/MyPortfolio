import { useState } from 'react'
import StatCard from './StatCard'
import { useInView } from '@/hooks/use-mobile'

export default function AboutSection() {
  const { ref, isInView } = useInView()
  const [imgError, setImgError] = useState(false)

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <p className={`font-mono text-xs font-medium text-[var(--accent)] tracking-[0.15em] uppercase mb-2 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          About Me
        </p>
        <h2 className={`font-heading text-3xl font-bold tracking-tight mb-12 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Who I Am
        </h2>
        <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
          <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] rounded-lg bg-[linear-gradient(135deg,rgba(0,200,150,0.06),rgba(15,17,23,0.4))] border border-[var(--border)] flex items-center justify-center overflow-hidden mx-auto max-w-full">
              <div className="absolute inset-[-2px] rounded-lg p-[2px] bg-[conic-gradient(var(--accent),transparent,transparent,var(--accent-glow),var(--accent))]" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', animation: 'spin 6s linear infinite' }} />
              {!imgError ? (
                <img src="/hero-photo.png" alt="Abhinav Agnihotri" className="w-full h-full object-cover z-10" onError={() => setImgError(true)} />
              ) : (
                <span className="font-heading text-4xl sm:text-5xl font-bold text-[var(--accent)] opacity-50 z-10">AA</span>
              )}
            </div>
          </div>
          <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-base text-[var(--muted)] leading-relaxed mb-8">
              B.Tech Computer Science undergraduate with hands-on experience in machine learning, data analysis, and model explainability. Built 3 end-to-end ML pipelines on real-world datasets achieving ROC-AUC of 0.98, R&sup2; of 0.9851, and Fraud Recall of 88.7%. Skilled in Python, SQL, Scikit-learn, XGBoost, and SHAP with practical exposure to Power BI dashboards and business insight communication.
            </p>
            <div className="grid grid-cols-4 gap-3 max-sm:grid-cols-2 max-sm:max-w-[320px] max-sm:mx-auto">
              <StatCard value="3" label="ML Projects" />
              <StatCard value="0.98" label="ROC-AUC" />
              <StatCard value="0.9851" label="R² Score" amber />
              <StatCard value="88.7%" label="Fraud Recall" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

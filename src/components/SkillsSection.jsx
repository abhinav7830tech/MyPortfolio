import SkillCard from './SkillCard'
import { useInView } from '@/hooks/use-mobile'

const skillsData = [
  {
    category: 'Programming',
    skills: ['Python', 'SQL'],
  },
  {
    category: 'ML Libraries',
    skills: ['Scikit-learn', 'XGBoost', 'imbalanced-learn', 'SHAP', 'Joblib'],
  },
  {
    category: 'Data Tools',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
  },
  {
    category: 'Visualization',
    skills: ['Power BI', 'Tableau', 'Microsoft Excel'],
  },
  {
    category: 'Core Skills',
    skills: ['Machine Learning', 'EDA', 'Feature Engineering', 'Predictive Modeling', 'Model Explainability', 'Statistical Analysis'],
  },
]

export default function SkillsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="skills" className="py-24 px-6 bg-about-skills" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <p className={`font-mono text-xs font-medium text-[var(--accent)] tracking-[0.15em] uppercase mb-2 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Expertise
        </p>
        <h2 className={`font-heading text-3xl font-bold tracking-tight mb-12 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Technical Skills
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {skillsData.map((item, i) => (
            <div
              key={item.category}
              className={`transition-all duration-700 delay-[${(i + 1) * 100}ms] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <SkillCard category={item.category} skills={item.skills} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

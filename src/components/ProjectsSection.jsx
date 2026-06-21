import ProjectCard from './ProjectCard'
import { useInView } from '@/hooks/use-mobile'

const projects = [
  {
    title: 'Credit Card Fraud Detection',
    description: 'Fraud detection pipeline on 284,807 transactions with 0.17% class imbalance. Achieved ROC-AUC of 0.98 and Fraud Recall of 88.7% using XGBoost with SMOTE. SHAP explainability identified top fraud-driving features.',
    tech: ['Python', 'Random Forest', 'XGBoost', 'SMOTE', 'SHAP', 'Scikit-learn'],
    github: 'https://github.com/abhinav7830tech/CreditCardFraudDetection',
    badge: 'ROC-AUC 0.98',
  },
  {
    title: 'Climate-Based Crop Yield Prediction',
    description: 'Regression model on 28,242 records across 101 countries achieving R² of 0.9851 (RMSE 10,380 hg/ha) using Random Forest. Engineered climate features (rainfall, temperature, pesticides) across 24 years of data.',
    tech: ['Python', 'Random Forest', 'XGBoost', 'SHAP', 'Scikit-learn'],
    github: 'https://github.com/abhinav7830tech/CropYieldPrediction',
    badge: 'R² 0.9851',
  },
  {
    title: 'Customer Churn Prediction',
    description: 'End-to-end churn pipeline on 7,043 telecom records achieving ROC-AUC of 0.8163. Identified top churn drivers via SHAP — month-to-month contracts, high charges ($70+), tenure under 6 months — with Power BI dashboard.',
    tech: ['Python', 'Random Forest', 'XGBoost', 'SMOTE', 'SHAP', 'Power BI'],
    github: 'https://github.com/abhinav7830tech/CustomerChurnPrediction',
    badge: 'ROC-AUC 0.8163',
  },
]

export default function ProjectsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <p className={`font-mono text-xs font-medium text-[var(--accent)] tracking-[0.15em] uppercase mb-2 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Portfolio
        </p>
        <h2 className={`font-heading text-3xl font-bold tracking-tight mb-12 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Featured Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

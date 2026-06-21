export default function SkillCard({ category, skills }) {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-5 sm:p-6 transition-all duration-300 hover:border-[var(--accent-glow)] hover:shadow-[0_0_24px_rgba(0,200,150,0.06)]">
      <h3 className="font-heading text-sm font-semibold text-[var(--accent)] mb-4 tracking-wide">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-xs px-3 py-1 rounded-sm border border-[var(--accent-glow)] text-[var(--accent)] bg-[var(--accent-dim)] transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--background)] hover:shadow-[0_0_12px_var(--accent-glow)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

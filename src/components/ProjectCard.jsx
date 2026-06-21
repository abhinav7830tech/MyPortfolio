export default function ProjectCard({ title, description, tech, github, badge }) {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6 sm:p-7 transition-all duration-300 hover:border-[var(--accent-glow)] hover:shadow-[0_0_30px_rgba(0,200,150,0.08)] hover:-translate-y-1 flex flex-col">
      <span className="inline-block font-mono text-xs font-medium px-3 py-1 rounded-sm bg-[var(--amber-dim)] text-[var(--amber)] border border-[rgba(255,179,71,0.2)] mb-4 self-start">
        {badge}
      </span>
      <h3 className="font-heading text-lg font-semibold mb-3">{title}</h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed mb-5 flex-1">{description}</p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[0.65rem] px-2.5 py-1 rounded bg-[rgba(255,255,255,0.04)] border border-[var(--border)] text-[var(--muted)]"
          >
            {t}
          </span>
        ))}
      </div>
      <a
        href={github}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-2 self-start px-5 py-2 rounded-sm text-sm font-semibold bg-transparent text-[var(--accent)] border-2 border-[var(--accent)] transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--background)] hover:shadow-[0_0_20px_var(--accent-glow)]"
      >
        GitHub
      </a>
    </div>
  )
}

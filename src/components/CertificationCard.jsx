import { Award } from 'lucide-react'

export default function CertificationCard({ title }) {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-sm px-5 py-4 flex items-center gap-3 transition-all duration-300 hover:border-[var(--accent-glow)] hover:shadow-[0_0_16px_rgba(201,168,76,0.06)]">
      <div className="w-8 h-8 rounded-full bg-[var(--accent-dim)] flex items-center justify-center flex-shrink-0 text-[var(--accent)]">
        <Award size={16} />
      </div>
      <span className="text-sm text-[#FBE8CE]">{title}</span>
    </div>
  )
}

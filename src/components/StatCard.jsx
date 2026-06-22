import { cn } from '@/lib/utils'

export default function StatCard({ value, label, amber = false }) {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-sm p-5 transition-all duration-300 hover:border-[var(--accent-glow)] hover:shadow-[0_0_24px_rgba(201,168,76,0.08)]">
      <div className={cn('font-heading text-2xl font-bold mb-1', amber ? 'text-[var(--amber)]' : 'text-[var(--accent)]')}>
        {value}
      </div>
      <div className="text-sm text-[#FFF0E4]">{label}</div>
    </div>
  )
}

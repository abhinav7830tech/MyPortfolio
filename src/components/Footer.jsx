import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 px-6 text-center border-t border-[var(--border)]">
      <p className="text-sm text-[var(--muted)] mb-4">Abhinav Agnihotri &copy; 2026</p>
      <div className="flex justify-center gap-5">
        <a
          href="https://github.com/abhinav7830tech"
          target="_blank"
          rel="noopener"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.04)] text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)] hover:border-[var(--accent-glow)] transition-all duration-300 border border-transparent"
          aria-label="GitHub"
        >
          <Github size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/abhinav-agnihotri-96a21a2b8"
          target="_blank"
          rel="noopener"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.04)] text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)] hover:border-[var(--accent-glow)] transition-all duration-300 border border-transparent"
          aria-label="LinkedIn"
        >
          <Linkedin size={16} />
        </a>
        <a
          href="mailto:agnihotriabhinav8@gmail.com"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.04)] text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)] hover:border-[var(--accent-glow)] transition-all duration-300 border border-transparent"
          aria-label="Email"
        >
          <Mail size={16} />
        </a>
      </div>
    </footer>
  )
}

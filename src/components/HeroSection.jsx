import { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function HeroSection() {
  const [imgError, setImgError] = useState(false)
  return (
    <section id="hero" className="min-h-screen flex items-center relative pt-20 bg-hero">
      <div className="dot-grid" />
      <div className="max-w-[1200px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <h1 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-[#F4AE52] mb-3">
            Abhinav Agnihotri
          </h1>
          <p className="font-heading text-[clamp(1rem,1.8vw,1.25rem)] font-medium text-[#FFE5BF] mb-4">
            Aspiring Data Analyst
          </p>
          <p className="text-base text-[#FFE5BF] max-w-[480px] leading-relaxed mb-8">
            Building intelligent systems from raw data &mdash; one model at a time.
          </p>
          <div className="flex gap-4 flex-wrap mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-sm text-sm font-semibold bg-[#FFE5BF] text-[var(--background)] border-2 border-[#FFE5BF] transition-all duration-300 hover:bg-transparent hover:text-[#FFE5BF] hover:shadow-[0_0_20px_rgba(255,229,191,0.3)]"
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1VjrAjF-d2NUJckqpV_yccQQEcYGVo2Ty/view?usp=sharing"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-sm text-sm font-semibold bg-transparent text-[#FFE5BF] border-2 border-[#FFE5BF] transition-all duration-300 hover:bg-[#FFE5BF] hover:text-[var(--background)] hover:shadow-[0_0_20px_var(--accent-glow)]"
            >
              Download Resume
            </a>
          </div>
          <div className="flex gap-5">
            <a
              href="https://github.com/abhinav7830tech"
              target="_blank"
              rel="noopener"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.04)] text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)] hover:border-[var(--accent-glow)] transition-all duration-300 border border-transparent hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhinav-agnihotri-96a21a2b8"
              target="_blank"
              rel="noopener"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.04)] text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)] hover:border-[var(--accent-glow)] transition-all duration-300 border border-transparent hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:agnihotriabhinav8@gmail.com"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.04)] text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)] hover:border-[var(--accent-glow)] transition-all duration-300 border border-transparent hover:-translate-y-0.5"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center lg:order-none order-first">
          <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px]">
            <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[var(--accent)] border-l-[var(--accent-glow)] animate-spin-slow">
              <div className="absolute w-2 h-2 bg-[var(--accent)] rounded-full shadow-[0_0_12px_var(--accent),0_0_24px_var(--accent-glow)] -top-[3px] left-1/2 -translate-x-1/2" />
            </div>
            <div className="absolute inset-[12px] sm:inset-[14px] md:inset-[16px] lg:inset-[18px] rounded-full border-[3px] border-transparent border-r-[var(--accent-glow)] border-b-[var(--accent)] animate-spin-reverse" />
            <div className="absolute inset-[24px] sm:inset-[28px] md:inset-[32px] lg:inset-[36px] rounded-full border-[3px] border-transparent border-t-[var(--accent-glow)] border-r-[var(--accent)] animate-spin-medium" />
            <div className="absolute inset-[36px] sm:inset-[42px] md:inset-[48px] lg:inset-[54px] rounded-full bg-[var(--card)] border border-[var(--border)] overflow-hidden flex items-center justify-center">
              {!imgError ? (
                <img src="/hero-photo.png" alt="Abhinav Agnihotri" className="w-full h-full object-cover" onError={() => setImgError(true)} />
              ) : (
                <span className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] font-bold text-[var(--accent)] opacity-60 tracking-wide">AA</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

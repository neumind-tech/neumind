'use client';

import Link from 'next/link';

/* ──────────────────────────────────────────────────
   PROJECT CARD
   ──────────────────────────────────────────────── */
interface ProjectCardProps {
  index:       number;
  tag:         string;
  subtitle:    string;
  title:       string;
  description: string;
  icon:        React.ReactNode;
}

function ProjectCard({ index, tag, subtitle, title, description, icon }: ProjectCardProps) {
  return (
    <article className="group gold-card gold-top-line overflow-hidden flex flex-col">

      {/*
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        PROJECT IMAGE PLACEHOLDER
        To swap in a real photo, replace this entire <div> block with:

          <div className="relative h-[260px] overflow-hidden">
            <Image
              src={`/projects/project-${index}.jpg`}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

        Recommended: 1200×760 px landscape. Place at /public/projects/project-{n}.jpg
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      */}
      <div className="relative h-[260px] bg-[#08090D] overflow-hidden flex items-center justify-center shrink-0">
        {/* Abstract SVG placeholder */}
        <svg viewBox="0 0 600 260" className="absolute inset-0 w-full h-full" aria-hidden="true">
          <defs>
            <radialGradient id={`rg${index}`} cx="50%" cy="50%" r="55%">
              <stop offset="0%"   stopColor="#C9A84C"
                stopOpacity={index === 1 ? '0.10' : index === 2 ? '0.08' : '0.12'} />
              <stop offset="100%" stopColor="#0A0C10" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={`lg${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#060709" />
              <stop offset="100%" stopColor="#141720" />
            </linearGradient>
          </defs>
          <rect width="600" height="260" fill={`url(#lg${index})`} />
          <rect width="600" height="260" fill={`url(#rg${index})`} />
          {Array.from({ length: 7  }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 43} x2="600" y2={i * 43}
              stroke="#C9A84C" strokeOpacity="0.04" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="260"
              stroke="#C9A84C" strokeOpacity="0.04" strokeWidth="0.5" />
          ))}
          <path d="M16 16 L16 32 M16 16 L32 16"    stroke="#C9A84C" strokeOpacity="0.25" strokeWidth="1" fill="none" />
          <path d="M584 16 L584 32 M584 16 L568 16" stroke="#C9A84C" strokeOpacity="0.25" strokeWidth="1" fill="none" />
          <path d="M16 244 L16 228 M16 244 L32 244"    stroke="#C9A84C" strokeOpacity="0.25" strokeWidth="1" fill="none" />
          <path d="M584 244 L584 228 M584 244 L568 244" stroke="#C9A84C" strokeOpacity="0.25" strokeWidth="1" fill="none" />
        </svg>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-transparent opacity-70" />

        <span className="absolute top-4 left-5 font-mono text-[0.6rem] text-[#C9A84C] opacity-40 tracking-[0.35em]">
          {String(index).padStart(2, '0')}
        </span>
        <span className="absolute top-4 right-5 font-mono text-[0.55rem] tracking-[0.2em] text-[#C9A84C] opacity-50 uppercase border border-[rgba(201,168,76,0.15)] px-2 py-0.5">
          {tag}
        </span>

        <div className="relative z-10 w-14 h-14 rounded-full border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.04)] flex items-center justify-center text-[#C9A84C] group-hover:border-[rgba(201,168,76,0.5)] group-hover:bg-[rgba(201,168,76,0.08)] transition-all duration-300">
          {icon}
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <p className="font-mono text-[0.6rem] tracking-[0.2em] text-[#C9A84C] uppercase mb-2">{subtitle}</p>
        <h3 className="font-display text-xl font-medium text-[#F0EDE8] leading-snug mb-3 group-hover:text-[#E0C055] transition-colors duration-300">
          {title}
        </h3>
        <p className="font-sans text-xs text-[#5A5A5A] leading-relaxed flex-1">{description}</p>

        {/* Reveal arrow — uses opacity not color transparency for reliability */}
        <div className="mt-5 flex items-center gap-2 text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <span className="font-mono text-[0.6rem] tracking-[0.18em] uppercase">View Project</span>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </article>
  );
}

/* ──────────────────────────────────────────────────
   HOME PAGE
   ──────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
            style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.055) 0%, transparent 68%)' }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 mb-10 px-4 py-2 border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.04)]">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] text-[#C9A84C] uppercase">
              Deep-Tech &amp; AI Research Agency · Est. 2026
            </span>
          </div>

          {/* Logotype */}
          <h1
            className="font-display font-light leading-[0.88] tracking-[-0.025em] mb-5 select-none"
            style={{ fontSize: 'clamp(5rem, 14vw, 11rem)' }}
          >
            <span className="text-[#F0EDE8]">Neu</span>
            <span className="shimmer-text font-semibold">Mind</span>
          </h1>

          <p
            className="font-display italic text-[#6A6A6A] mb-3"
            style={{ fontSize: 'clamp(1.3rem, 3vw, 2.2rem)' }}
          >
            Intelligence. Reimagined.
          </p>
          <p className="font-sans text-sm text-[#4A4A4A] tracking-[0.1em] mb-14 max-w-md mx-auto">
            Designing intelligent systems for everyday life.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#projects" className="btn-gold">
              Explore Our Work →
            </Link>
            <Link href="/contact" className="btn-ghost">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 pointer-events-none" aria-hidden="true">
          <span className="font-mono text-[0.55rem] tracking-[0.4em] text-[#C9A84C] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C] to-transparent" />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          VALUE PILLARS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-14">
            <div className="w-8 h-px bg-[#C9A84C] shrink-0" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] text-[#C9A84C] uppercase whitespace-nowrap">Core Principles</span>
            <div className="flex-1 h-px bg-[rgba(201,168,76,0.08)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num:   '01',
                title: 'Smarter',
                body:  'Real‑time workflows, optimised data processing, zero chaos. Our systems think ahead — processing intelligently, adapting dynamically, eliminating operational friction at every layer.',
              },
              {
                num:   '02',
                title: 'Faster',
                body:  "Zero friction, minimal latency, rapid systemic deployment. Speed isn't merely a feature — it's a foundational design philosophy embedded into every architecture we ship.",
              },
              {
                num:   '03',
                title: 'Simpler',
                body:  'Clean unified interfaces built elegantly for real human interaction. Complexity is an engineering concern. Users experience only what matters — nothing more, nothing less.',
              },
            ].map((p) => (
              <div
                key={p.num}
                className="group gold-card gold-top-line p-8 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,168,76,0.04)_0%,transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <span
                  className="absolute -top-2 right-5 font-display font-bold text-[6rem] leading-none select-none pointer-events-none"
                  style={{ color: 'rgba(201,168,76,0.05)' }}
                  aria-hidden="true"
                >
                  {p.num}
                </span>
                <div className="w-7 h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#EDD98A] mb-6" />
                <h3 className="font-display text-[2.2rem] font-light text-[#F0EDE8] mb-4 group-hover:text-[#E0C055] transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="font-sans text-xs text-[#5A5A5A] leading-[1.9] relative z-10">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PROJECTS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="projects" className="px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#C9A84C] shrink-0" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] text-[#C9A84C] uppercase whitespace-nowrap">Active Operations — 2026</span>
            <div className="flex-1 h-px bg-[rgba(201,168,76,0.08)]" />
          </div>

          <h2
            className="font-display font-light text-[#F0EDE8] leading-tight mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            Current Research &amp;<br />
            <span className="shimmer-text font-medium">Engineering Projects</span>
          </h2>
          <p className="font-sans text-xs text-[#5A5A5A] max-w-lg mb-14 leading-relaxed">
            Three active deployments representing the frontier of our technical capabilities — each a distinct case study in applied deep-tech intelligence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProjectCard
              index={1}
              tag="Energy AI"
              subtitle="Smart Energy Systems"
              title="AI-Driven Solar Thermal Optimization"
              description="An advanced AI solar dryer project engineered in active technical collaboration with Zenitek Company (Zenitek.in) — pushing the limits of renewable energy through predictive thermal modelling and adaptive control systems."
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
                  <circle cx="12" cy="12" r="5" />
                  <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              }
            />
            <ProjectCard
              index={2}
              tag="Platform Arch"
              subtitle="Advanced Digital Architecture"
              title="Identelle Platform Design & Cloud Hosting"
              description="A custom high-performance web ecosystem architected and cloud-hosted for a Bangalore-based startup pioneering algorithmic personal colour analysis — full-stack deployment with real-time user flows and precision UI."
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path strokeLinecap="round" d="M8 21h8M12 17v4" />
                </svg>
              }
            />
            <ProjectCard
              index={3}
              tag="Deep Research"
              subtitle="Deep Tech Exploration"
              title="ML Applied to Fusion Reactor Dynamics"
              description="Predictive ML models analysing structural magnetic field containment and real-time plasma stabilisation vectors — applying machine learning at the extreme edge of experimental nuclear physics research."
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          NEUMIND FRAMEWORK
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-6 lg:px-12 py-24 relative overflow-hidden">
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[45vw] h-[45vw] max-w-[550px] rounded-full pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-14">
            <div className="w-8 h-px bg-[#C9A84C] shrink-0" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] text-[#C9A84C] uppercase whitespace-nowrap">The Framework</span>
            <div className="flex-1 h-px bg-[rgba(201,168,76,0.08)]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <h2
                className="font-display font-light text-[#F0EDE8] leading-tight mb-8"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
              >
                The NeuMind<br />
                <em className="not-italic text-[#C9A84C]">Approach</em>
              </h2>
              <p className="font-sans text-xs text-[#6A6A6A] leading-[2] mb-8 max-w-[480px]">
                We pair rigorous research with thoughtful design. From foundational machine learning models to distributed real-time systems, we build technology that quietly states its impact — by gracefully getting work done.
              </p>
              <div className="pl-6 border-l-2 border-[#C9A84C] bg-[rgba(201,168,76,0.025)] py-5 pr-6">
                <span className="font-mono text-[0.6rem] tracking-[0.22em] text-[#C9A84C] uppercase block mb-3">Looking Ahead</span>
                <p className="font-display text-[1.05rem] italic text-[#8A8A8A] leading-[1.7]">
                  "Today, we engineer boutique, highly complex solutions. Tomorrow, we take bigger structural leaps. NeuMind is deeply committed to advancing applied AI that seamlessly elevates daily operational workflows."
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '3+',   label: 'Active Projects'  },
                { value: '2026', label: 'Founded & Active' },
                { value: '∞',    label: 'Iterative Vision' },
                { value: 'Deep', label: 'Tech Focus'       },
              ].map((s) => (
                <div
                  key={s.label}
                  className="group gold-card p-7 text-center hover:bg-[#141720] transition-colors duration-300"
                >
                  <div className="font-display text-[2.6rem] font-light text-[#C9A84C] mb-1 group-hover:text-[#EDD98A] transition-colors duration-300">
                    {s.value}
                  </div>
                  <div className="font-mono text-[0.55rem] tracking-[0.2em] text-[#3A3A3A] uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

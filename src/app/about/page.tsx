export default function AboutPage() {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[58vh] flex items-end px-6 pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at 25% 60%, rgba(201,168,76,0.06) 0%, transparent 60%)' }}
        />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.04)]">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse-slow" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] text-[#C9A84C] uppercase">Our Story</span>
          </div>

          <h1
            className="font-display font-light leading-[0.9] tracking-[-0.025em] text-[#F0EDE8] mb-6"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
          >
            About<br />
            <span className="shimmer-text font-semibold">NeuMind</span>
          </h1>

          <p className="font-sans text-sm text-[#5A5A5A] max-w-xl leading-[1.9]">
            Two friends, one collective vision, and an uncompromising commitment to building technology that matters.
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ORIGIN NARRATIVE
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-14">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] text-[#C9A84C] uppercase">Our Beginning</span>
            <div className="flex-1 h-px bg-[rgba(201,168,76,0.08)]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main text */}
            <div className="lg:col-span-7">
              <p
                className="font-display font-light text-[#D0CCC7] leading-[1.65] mb-8"
                style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.85rem)' }}
              >
                NeuMind was founded by{' '}
                <span className="text-[#C9A84C]">Nishad M S</span> and{' '}
                <span className="text-[#C9A84C]">Sanjay Darshan</span>, two lifelong
                friends who began dreaming of constructing meaningful systemic
                platforms back in their school days.
              </p>
              <p className="font-sans text-xs text-[#5A5A5A] leading-[2]">
                That shared creative drive evolved into NeuMind — an elite tech
                agency dedicated to creating solutions that are as practically
                intelligent as they are globally impactful. What began as a
                shared fascination with systems and intelligence has crystallised
                into a disciplined, research-driven methodology for building
                technology that serves a real and lasting purpose in 2026 and beyond.
              </p>
            </div>

            {/* Founders card */}
            <div className="lg:col-span-5">
              <div className="relative gold-card gold-top-line p-8 overflow-hidden">
                <div className="space-y-6 mb-8">
                  {['Nishad M S', 'Sanjay Darshan'].map((name) => (
                    <div key={name} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.05)] flex items-center justify-center font-display text-lg text-[#C9A84C] shrink-0">
                        {name[0]}
                      </div>
                      <div>
                        <p className="font-display text-[1rem] text-[#F0EDE8]">{name}</p>
                        <p className="font-mono text-[0.55rem] text-[#3A3A3A] tracking-[0.15em] uppercase">Co-Founder, NeuMind</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-[rgba(201,168,76,0.08)]">
                  <p className="font-mono text-[0.55rem] text-[#3A3A3A] tracking-[0.15em] uppercase leading-[2]">
                    Established 2026<br />
                    Palakkad, Kerala, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MISSION / VISION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-6 lg:px-12 py-24 bg-[#060709] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.035) 0%, transparent 65%)' }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-14">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] text-[#C9A84C] uppercase">Strategic Intent</span>
            <div className="flex-1 h-px bg-[rgba(201,168,76,0.08)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                accent: 'M',
                label:  'Our Mission',
                title:  'Practical. Invisible. Human-Centric.',
                body:   'To design intelligent systems that fundamentally optimise everyday business and research infrastructure. We believe AI must be highly practical, invisible, and human‑centric — embedded seamlessly into existing workflows, not bolted on top of them.',
              },
              {
                accent: 'V',
                label:  'Our Vision',
                title:  'Beyond Conventional Boundaries.',
                body:   'To advance AI beyond conventional limits. From localised automated platform architecture to complex predictive data pipelines, we are dedicated to building futuristic, rock-solid, and transformative systems that redefine what is operationally possible.',
              },
            ].map((card) => (
              <div
                key={card.label}
                className="group gold-card gold-top-line p-10 overflow-hidden"
              >
                {/* Ghost letter */}
                <span
                  className="absolute -right-3 -bottom-6 font-display font-bold select-none text-[rgba(201,168,76,0.04)] group-hover:text-[rgba(201,168,76,0.08)] transition-colors duration-500"
                  style={{ fontSize: '11rem', lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {card.accent}
                </span>

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#C9A84C] to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-500" />

                <span className="font-mono text-[0.6rem] tracking-[0.28em] text-[#C9A84C] uppercase block mb-4">
                  {card.label}
                </span>
                <h3
                  className="font-display font-light text-[#F0EDE8] leading-tight mb-6"
                  style={{ fontSize: 'clamp(1.4rem, 2.2vw, 2rem)' }}
                >
                  {card.title}
                </h3>
                <p className="font-sans text-xs text-[#5A5A5A] leading-[2] relative z-10">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PROJECT 80Z CASE STUDY
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-6 lg:px-12 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-14">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] text-[#C9A84C] uppercase">Proven Track Record</span>
            <div className="flex-1 h-px bg-[rgba(201,168,76,0.08)]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual card */}
            <div className="order-2 lg:order-1">
              <div className="relative gold-card p-8 overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden="true"
                  style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.06) 0%, transparent 65%)' }}
                />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-40" />

                <div className="relative z-10">
                  {/* Badge */}
                  <div className="w-16 h-16 rounded-full border border-[rgba(201,168,76,0.4)] bg-[rgba(201,168,76,0.05)] flex items-center justify-center mb-6">
                    <span className="font-display text-2xl font-bold text-[#C9A84C]">80Z</span>
                  </div>

                  <h4 className="font-display text-[1.2rem] text-[#F0EDE8] mb-1">Campus Canteen Intelligence System</h4>
                  <p className="font-mono text-[0.55rem] text-[#3A3A3A] tracking-[0.15em] uppercase mb-7">
                    Field-Deployed · Production-Grade · 2025
                  </p>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { val: 'Real-time', sub: 'Ops Dashboard'     },
                      { val: 'Zero',      sub: 'Bottlenecks'        },
                      { val: 'ML',        sub: 'Predictive States'  },
                    ].map((item) => (
                      <div
                        key={item.sub}
                        className="text-center p-3 border border-[rgba(201,168,76,0.1)] bg-[rgba(201,168,76,0.025)]"
                      >
                        <div className="font-display text-[1.1rem] text-[#C9A84C]">{item.val}</div>
                        <div className="font-mono text-[0.5rem] text-[#3A3A3A] leading-tight mt-1">{item.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <h2
                className="font-display font-light text-[#F0EDE8] leading-tight mb-8"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Proven Trajectory:<br />
                <span className="text-[#C9A84C]">Project 80Z</span>
              </h2>

              <p className="font-sans text-xs text-[#6A6A6A] leading-[2] mb-5">
                While our core focuses on advanced technical R&amp;D, our engineering
                methods are proven in the field. Our previous foundational launch,{' '}
                <strong className="text-[#F0EDE8] font-semibold">80Z</strong>,
                completely re-engineered high-volume campus canteen workflows.
              </p>
              <p className="font-sans text-xs text-[#5A5A5A] leading-[2]">
                Developed in tight sync with business owners and consumer groups, 80Z
                eliminated ordering bottlenecks through real-time operational
                dashboarding and predictive ready-states. It stands as a testament to
                how NeuMind takes chaotic daily processes and transforms them into pure,
                clean efficiency — a promise we carry into every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

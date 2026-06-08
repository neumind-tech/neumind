import Link from 'next/link';

const QUICK_LINKS = [
  { href: '/',        label: 'Home'    },
  { href: '/about',   label: 'About'   },
  { href: '/contact', label: 'Contact' },
];

const LEGAL_LINKS = [
  { href: '/privacy',  label: 'Privacy Policy'        },
  { href: '/terms',    label: 'Terms & Conditions'     },
  { href: '/refund',   label: 'Refund & Cancellation'  },
  { href: '/gst',      label: 'GST Details'            },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#060709] border-t border-[rgba(201,168,76,0.08)]">

      {/* Top glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">

          {/* Brand block */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              {/* Gold N logo mark */}
              <div className="w-8 h-8 rounded-full border border-[rgba(201,168,76,0.35)] flex items-center justify-center bg-[rgba(201,168,76,0.04)]">
                <svg viewBox="0 0 32 32" className="w-5 h-5" aria-hidden="true">
                  <defs>
                    <linearGradient id="ftrGold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%"   stopColor="#C9A84C" />
                      <stop offset="55%"  stopColor="#EDD98A" />
                      <stop offset="100%" stopColor="#C9A84C" />
                    </linearGradient>
                  </defs>
                  <text
                    x="50%" y="54%"
                    dominantBaseline="middle" textAnchor="middle"
                    fill="url(#ftrGold)"
                    fontSize="18"
                    fontFamily="Georgia, serif"
                    fontWeight="600"
                  >N</text>
                </svg>
              </div>
              <span className="font-display text-[0.95rem] tracking-[0.18em] text-[#F0EDE8]">NeuMind</span>
            </div>

            <p className="font-sans text-xs text-[#5A5A5A] leading-[1.9] max-w-[280px] mb-5">
              Designing intelligent systems for everyday life. Deep-tech AI research and engineering agency operating at the frontier.
            </p>

            <div>
              <p className="font-mono text-[0.65rem] text-[#3A3A3A] tracking-[0.1em] leading-relaxed">
                Palakkad, KERALA 678004<br />
                India
              </p>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-[0.6rem] tracking-[0.28em] uppercase text-[#C9A84C] mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline font-sans text-xs text-[#5A5A5A] hover:text-[#C9A84C] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-4">
            <h4 className="font-mono text-[0.6rem] tracking-[0.28em] uppercase text-[#C9A84C] mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline font-sans text-xs text-[#5A5A5A] hover:text-[#C9A84C] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-divider mb-7" />

        {/* Copyright row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-[0.6rem] text-[#3A3A3A] tracking-[0.06em]">
            © 2026 NeuMind. Built for today. Designed for tomorrow. All rights reserved.
          </p>
          <p className="font-mono text-[0.55rem] text-[#2A2A2A] tracking-[0.25em] uppercase">
            Intelligence · Reimagined
          </p>
        </div>
      </div>
    </footer>
  );
}

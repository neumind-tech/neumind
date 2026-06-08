'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/',        label: 'Home'    },
  { href: '/about',   label: 'About'   },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0C10]/90 backdrop-blur-2xl border-b border-[rgba(201,168,76,0.1)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="group flex items-center gap-3 shrink-0">
          {/*
            LOGO IMAGE — explicit width/height so it never disrupts flex layout.
            next/image with width+height renders as an <img> with those dimensions.
            The wrapping span clips it to a circle and adds the gold ring border.
          */}
          <span className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden border border-[rgba(201,168,76,0.35)] group-hover:border-[rgba(201,168,76,0.75)] transition-all duration-300 shadow-[0_0_14px_rgba(201,168,76,0.15)] group-hover:shadow-[0_0_22px_rgba(201,168,76,0.3)] shrink-0">
            <Image
              src="/logo.png"
              alt="NeuMind Logo"
              width={36}
              height={36}
              className="object-cover w-full h-full"
              priority
            />
          </span>
          <span className="font-display text-[1.05rem] tracking-[0.18em] text-[#F0EDE8] group-hover:text-[#E0C055] transition-colors duration-300 select-none">
            NeuMind
          </span>
        </Link>

        {/* ── Desktop Links ── */}
        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`link-underline font-sans text-[0.7rem] tracking-[0.15em] uppercase transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-[#C9A84C]'
                  : 'text-[#6A6A6A] hover:text-[#F0EDE8]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-gold !py-2.5 !px-5 !text-[0.68rem] ml-2"
          >
            Connect →
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-end gap-[5px] w-8 h-8 shrink-0"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={`block h-px bg-[#C9A84C] transition-all duration-300 ${menuOpen ? 'w-5 rotate-[-45deg] translate-y-[6px]' : 'w-5'}`} />
          <span className={`block h-px bg-[#C9A84C] transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
          <span className={`block h-px bg-[#C9A84C] transition-all duration-300 ${menuOpen ? 'w-5 rotate-[45deg] -translate-y-[6px]' : 'w-5'}`} />
        </button>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#060709] backdrop-blur-xl border-t border-[rgba(201,168,76,0.08)] px-6 pt-5 pb-8 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-xs tracking-[0.18em] uppercase transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-[#C9A84C]'
                  : 'text-[#6A6A6A] hover:text-[#F0EDE8]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold w-fit">
            Connect →
          </Link>
        </div>
      </div>
    </header>
  );
}

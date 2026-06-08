'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '',
    phone: '', subject: '', message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent,    setSent]    = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // TODO: wire to your API endpoint, e.g. /api/contact
    await new Promise((r) => setTimeout(r, 1600));
    setSending(false);
    setSent(true);
  };

  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[52vh] flex items-end px-6 pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at 75% 55%, rgba(201,168,76,0.06) 0%, transparent 60%)' }}
        />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.04)]">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse-slow" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] text-[#C9A84C] uppercase">Inbound Transmission</span>
          </div>

          <h1
            className="font-display font-light leading-[0.9] tracking-[-0.025em] text-[#F0EDE8] mb-6"
            style={{ fontSize: 'clamp(3.2rem, 9vw, 8rem)' }}
          >
            Connect with<br />
            <span className="shimmer-text font-semibold">NeuMind</span>
          </h1>

          <p className="font-sans text-sm text-[#5A5A5A] max-w-xl leading-[1.9] mb-4">
            Let's build the future of your systems together.
          </p>

          <Link
            href="/contact/delete-account"
            className="font-mono text-[0.6rem] text-[#3A3A3A] hover:text-[#C9A84C] transition-colors duration-300 tracking-[0.08em] underline underline-offset-4"
          >
            Want to delete your account? Request Account Deletion →
          </Link>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SPLIT LAYOUT
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ── Left: Corporate Info ── */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="font-mono text-[0.6rem] tracking-[0.3em] text-[#C9A84C] uppercase">Corporate Dossier</span>
            </div>

            <div className="space-y-10">
              {/* HQ */}
              <div>
                <span className="font-mono text-[0.55rem] tracking-[0.25em] text-[#3A3A3A] uppercase block mb-2">Headquarters</span>
                <p className="font-sans text-sm text-[#C0BCB7] leading-[1.8]">
                  Ranpur, Palakkad<br />
                  KERALA 678004, India
                </p>
              </div>

              {/* Phone */}
              <div>
                <span className="font-mono text-[0.55rem] tracking-[0.25em] text-[#3A3A3A] uppercase block mb-2">Communication Line</span>
                <a
                  href="tel:+918714220045"
                  className="font-display text-[1.6rem] font-light text-[#C9A84C] hover:text-[#EDD98A] transition-colors duration-300"
                >
                  +91 87142 20045
                </a>
              </div>

              {/* Email */}
              <div>
                <span className="font-mono text-[0.55rem] tracking-[0.25em] text-[#3A3A3A] uppercase block mb-2">Secure Mail Gateway</span>
                <a
                  href="mailto:contact@neumind.in"
                  className="font-display text-[1.4rem] font-light text-[#C9A84C] hover:text-[#EDD98A] transition-colors duration-300 break-all"
                >
                  contact@neumind.in
                </a>
              </div>

              {/* Hours */}
              <div>
                <span className="font-mono text-[0.55rem] tracking-[0.25em] text-[#3A3A3A] uppercase block mb-4">Operating Hours</span>
                <div className="border border-[rgba(201,168,76,0.1)] bg-[#0F1117]">
                  {[
                    { day: 'Monday – Friday', hours: '09:30 AM – 06:30 PM', open: true  },
                    { day: 'Saturday',        hours: '10:00 AM – 02:00 PM', open: true  },
                    { day: 'Sunday',          hours: 'Closed',              open: false },
                  ].map((row, i) => (
                    <div
                      key={row.day}
                      className={`flex items-center justify-between px-5 py-3.5 ${i < 2 ? 'border-b border-[rgba(201,168,76,0.06)]' : ''}`}
                    >
                      <span className="font-sans text-xs text-[#5A5A5A]">{row.day}</span>
                      <span className={`font-mono text-[0.6rem] tracking-[0.08em] ${row.open ? 'text-[#C9A84C]' : 'text-[#3A3A3A]'}`}>
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="font-mono text-[0.6rem] tracking-[0.3em] text-[#C9A84C] uppercase">Secure Inbound Transmission</span>
            </div>

            {sent ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center py-24 border border-[rgba(201,168,76,0.25)] bg-[#0F1117]">
                <div className="w-16 h-16 rounded-full border border-[#C9A84C] flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-[#F0EDE8] mb-2">Transmission Received</h3>
                <p className="font-sans text-xs text-[#5A5A5A]">We'll respond within 24–48 operating hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Name */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'firstName', label: 'First Name', placeholder: 'Sanjay'  },
                    { name: 'lastName',  label: 'Last Name',  placeholder: 'Darshan' },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="font-mono text-[0.55rem] tracking-[0.22em] text-[#3A3A3A] uppercase block mb-1.5">
                        {f.label}
                      </label>
                      <input
                        type="text"
                        name={f.name}
                        value={form[f.name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        required
                        className="nm-input"
                      />
                    </div>
                  ))}
                </div>

                {/* Row 2: Contact */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'email', type: 'email', label: 'Email Address',  placeholder: 'you@company.com'    },
                    { name: 'phone', type: 'tel',   label: 'Phone Number',   placeholder: '+91 98765 43210'    },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="font-mono text-[0.55rem] tracking-[0.22em] text-[#3A3A3A] uppercase block mb-1.5">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        name={f.name}
                        value={form[f.name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        required
                        className="nm-input"
                      />
                    </div>
                  ))}
                </div>

                {/* Subject */}
                <div>
                  <label className="font-mono text-[0.55rem] tracking-[0.22em] text-[#3A3A3A] uppercase block mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry, collaboration, or technical consult…"
                    required
                    className="nm-input"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="font-mono text-[0.55rem] tracking-[0.22em] text-[#3A3A3A] uppercase block mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project, challenge, or vision in detail…"
                    rows={6}
                    required
                    className="nm-input resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-gold w-full justify-center py-4 disabled:opacity-50"
                >
                  {sending ? (
                    <span className="flex items-center gap-3">
                      <span className="w-3.5 h-3.5 border border-[#C9A84C] border-t-transparent rounded-full animate-spin" />
                      Transmitting…
                    </span>
                  ) : (
                    'Send Secure Message →'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BOTTOM CTA
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-6 lg:px-12 py-28 bg-[#060709] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 65%)' }}
        />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.2)] to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2
            className="font-display font-light text-[#F0EDE8] leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 5rem)' }}
          >
            Ready to accelerate your<br />
            <span className="shimmer-text font-medium">technological footprint?</span>
          </h2>
          <p className="font-sans text-xs text-[#5A5A5A] mb-10 max-w-md mx-auto leading-[1.9]">
            Let's discuss custom engineering, ML modelling, or enterprise platform design.
          </p>
          <button className="btn-gold text-[0.72rem] px-10 py-4">
            Schedule a Technical Consult →
          </button>
        </div>
      </section>
    </>
  );
}

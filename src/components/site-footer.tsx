import Link from "next/link";

import { siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-white/10 bg-[#050d0b]">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-sm font-black text-[#071b18]">
              CW
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.18em] text-white uppercase">
                {siteConfig.name}
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                {siteConfig.tagline}
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            We help founders, operators, and growing teams build digital products that are practical, scalable, and ready for real business use.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
            Navigation
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li>Startup MVPs</li>
            <li>SaaS product builds</li>
            <li>E-commerce websites</li>
            <li>Custom dashboards</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col justify-between gap-3 py-5 text-sm text-slate-400 md:flex-row">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>Built for business growth, not template shortcuts.</p>
        </div>
      </div>
    </footer>
  );
}

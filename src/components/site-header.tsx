"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071b18]/80 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="ConsultWeb homepage">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-sm font-black text-[#071b18] shadow-[0_0_30px_rgba(163,230,53,0.4)]">
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
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button asChild size="lg">
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-[#071b18] md:hidden">
          <nav className="section-shell flex flex-col gap-2 py-4" aria-label="Mobile navigation">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Discuss Your Project
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

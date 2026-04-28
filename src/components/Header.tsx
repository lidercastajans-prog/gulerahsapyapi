"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

const isActive = (href: string, pathname: string) => {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} anasayfa`}>
          <Image
            src="/logo-mark.png"
            alt=""
            width={48}
            height={48}
            priority
            className="rounded-full ring-1 ring-border bg-surface"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-tight">
              {site.name}
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-muted">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav aria-label="Ana navigasyon" className="hidden lg:flex items-center gap-8">
          {nav.map((item) => {
            const active = isActive(item.href, pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors ${
                  active
                    ? "text-accent font-medium"
                    : "text-foreground/80 hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-5 py-2.5 text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            <span aria-hidden>☎</span>
            {site.phone}
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2"
        >
          <span className="block w-6 h-0.5 bg-foreground mb-1.5" />
          <span className="block w-6 h-0.5 bg-foreground mb-1.5" />
          <span className="block w-6 h-0.5 bg-foreground" />
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="lg:hidden border-t border-border bg-background"
      >
        <nav aria-label="Mobil navigasyon" className="px-6 py-4 flex flex-col gap-3">
          {nav.map((item) => {
            const active = isActive(item.href, pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`py-2 text-base transition-colors ${
                  active
                    ? "text-accent font-medium"
                    : "text-foreground/80 hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={site.phoneHref}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent text-white px-5 py-3 text-sm font-medium"
          >
            <span aria-hidden>☎</span> {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import { footerSecondary, nav, site } from "@/lib/site";
import { socialLinks } from "@/lib/social";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/90 mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo-mark.png"
              alt=""
              width={56}
              height={56}
              className="rounded-full ring-1 ring-background/15"
            />
            <div className="leading-tight">
              <div className="font-serif text-2xl font-semibold text-background">
                {site.name}
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-background/60 mt-1">
                {site.tagline}
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-background/80 max-w-xs">
            {site.experienceYears}+ yıllık deneyimle ahşap ev, bungalov, villa
            ve pergola uygulamaları.
          </p>
        </div>

        <nav aria-labelledby="footer-menu-heading">
          <h2
            id="footer-menu-heading"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-background/70"
          >
            Menü
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-background/85 hover:text-background transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-more-heading">
          <h2
            id="footer-more-heading"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-background/70"
          >
            Daha Fazla
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {footerSecondary.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-background/85 hover:text-background transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="footer-contact-heading">
          <h2
            id="footer-contact-heading"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-background/70"
          >
            İletişim
          </h2>
          <address className="mt-4 not-italic">
            <ul className="space-y-2 text-sm text-background/85">
              <li>
                <a href={site.phoneHref} className="hover:text-background">
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-background break-all"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-background/75 leading-relaxed">
                {site.address}
              </li>
            </ul>
          </address>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} sayfamız`}
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-background/20 text-background/70 hover:text-background hover:border-background/50 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d={link.iconPath} />
                </svg>
              </a>
            ))}
          </div>
        </section>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-xs text-background/70 flex flex-col md:flex-row justify-between gap-2">
          <span>
            © {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.
          </span>
          <span>{site.region}</span>
        </div>
      </div>
    </footer>
  );
}

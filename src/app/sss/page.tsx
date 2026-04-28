import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getFaqGroups } from "@/lib/fetchers";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Mevzuat, süreç, garanti, maliyet ve teknik konularda en çok sorulan sorulara verdiğimiz net cevaplar.",
  alternates: { canonical: "/sss" },
};

export default async function SssPage() {
  const faqGroups = await getFaqGroups();
  const allFaqs = faqGroups.flatMap((g) => g.items);
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <Header />
      <JsonLd data={faqPageSchema} />
      <main id="main" className="flex flex-col">
        <section className="pt-20 pb-12 lg:pt-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Sıkça Sorulanlar
            </p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight max-w-4xl">
              Net cevaplar, gizli yıldız yok.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-foreground/75 leading-relaxed">
              Mevzuat, süreç, garanti, maliyet ve teknik başlıklarda en çok
              karşılaştığımız soruları topladık. Cevabını bulamadığınız bir
              soru varsa direkt arayın — açıklayalım.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <nav aria-label="Konular" className="mb-12">
              <ul className="flex flex-wrap gap-2">
                {faqGroups.map((g) => (
                  <li key={g.slug}>
                    <a
                      href={`#${g.slug}`}
                      className="inline-block rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground/80 hover:border-accent hover:text-accent transition-colors"
                    >
                      {g.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-16">
              {faqGroups.map((group) => (
                <section
                  key={group.slug}
                  id={group.slug}
                  className="scroll-mt-24"
                  aria-labelledby={`${group.slug}-heading`}
                >
                  <h2
                    id={`${group.slug}-heading`}
                    className="font-serif text-3xl md:text-4xl font-medium tracking-tight"
                  >
                    {group.title}
                  </h2>
                  <ul className="mt-8 divide-y divide-border border-y border-border">
                    {group.items.map((f, i) => (
                      <li key={`${group.slug}-${i}`}>
                        <details className="group">
                          <summary className="flex cursor-pointer items-start gap-4 py-5 list-none">
                            <span className="flex-1 font-serif text-xl text-foreground group-hover:text-accent transition-colors">
                              {f.q}
                            </span>
                            <span
                              aria-hidden
                              className="flex-none mt-1 w-7 h-7 rounded-full border border-border flex items-center justify-center text-foreground/70 transition-transform group-open:rotate-45"
                            >
                              +
                            </span>
                          </summary>
                          <p className="pb-6 pr-12 text-foreground/80 leading-relaxed">
                            {f.a}
                          </p>
                        </details>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-foreground text-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight text-background">
              Aradığınız cevap yok mu?
            </h2>
            <p className="mt-5 text-lg text-background/80 leading-relaxed">
              Sorunuzu birebir konuşalım — projeniz benzersiz, cevap da öyle
              olmalı.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-white px-7 py-3.5 text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                <span aria-hidden>☎</span>
                {site.phone}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 text-background px-7 py-3.5 text-sm font-medium hover:bg-background/10 transition-colors"
              >
                WhatsApp
              </a>
              <Link
                href="/rehber"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 text-background px-7 py-3.5 text-sm font-medium hover:bg-background/10 transition-colors"
              >
                Ahşap Sözlüğü →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

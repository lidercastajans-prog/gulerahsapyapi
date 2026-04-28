import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getGlossary } from "@/lib/fetchers";
import type { Term } from "@/lib/glossary";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ahşap Yapı Rehberi & Sözlük",
  description:
    "Ahşap yapı sektöründe sıkça geçen terimlerin sade dilde açıklamaları. Masif, lamine, emprenye, sandviç panel ve daha fazlası.",
  alternates: { canonical: "/rehber" },
};

const groupByLetter = (terms: Term[]) => {
  const map = new Map<string, Term[]>();
  const collator = new Intl.Collator("tr");
  for (const t of [...terms].sort((a, b) => collator.compare(a.term, b.term))) {
    const letter = t.term.charAt(0).toLocaleUpperCase("tr-TR");
    if (!map.has(letter)) map.set(letter, []);
    map.get(letter)!.push(t);
  }
  return Array.from(map.entries());
};

export default async function RehberPage() {
  const glossary = await getGlossary();
  const grouped = groupByLetter(glossary);

  return (
    <>
      <Header />
      <main id="main" className="flex flex-col">
        <section className="pt-20 pb-12 lg:pt-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Rehber & Sözlük
            </p>
            <h1 className="mt-4 font-serif text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight max-w-4xl">
              Ahşap yapı dilini birlikte konuşalım.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-foreground/75 leading-relaxed">
              Sektörde sık kullanılan terimleri sade dilde açıkladık. Bir
              terimin neyi ifade ettiğini bilirseniz, tekliflerin arasındaki
              farkı da daha kolay görürsünüz.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <nav aria-label="Alfabe" className="mb-12">
              <ul className="flex flex-wrap gap-1.5">
                {grouped.map(([letter]) => (
                  <li key={letter}>
                    <a
                      href={`#harf-${letter}`}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-surface font-serif text-base text-foreground/80 hover:border-accent hover:text-accent transition-colors"
                    >
                      {letter}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-14">
              {grouped.map(([letter, terms]) => (
                <section
                  key={letter}
                  id={`harf-${letter}`}
                  className="scroll-mt-24"
                >
                  <div className="flex items-baseline gap-6 border-b border-border pb-3 mb-6">
                    <span
                      aria-hidden
                      className="font-serif text-5xl text-accent leading-none"
                    >
                      {letter}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted">
                      {terms.length} terim
                    </span>
                  </div>
                  <dl className="space-y-8">
                    {terms.map((t) => (
                      <div
                        key={t.term}
                        className="grid gap-4 md:grid-cols-12"
                      >
                        <dt className="md:col-span-4 font-serif text-2xl font-semibold text-foreground">
                          {t.term}
                        </dt>
                        <dd className="md:col-span-8 text-foreground/80 leading-relaxed">
                          {t.definition}
                          {t.related && t.related.length > 0 && (
                            <div className="mt-3 text-xs uppercase tracking-[0.15em] text-muted">
                              İlgili: {t.related.join(", ")}
                            </div>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-surface border-t border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
              Bir terim eksik mi?
            </h2>
            <p className="mt-5 text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Aklınıza takılan başka bir kavram varsa bize yazın — buraya
              ekleyelim, herkes faydalansın.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappLink("Merhaba, rehbere eklenmesini önerdiğim bir terim var.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-white px-7 py-3.5 text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                WhatsApp'tan Yazın
              </a>
              <Link
                href="/sss"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 text-foreground px-7 py-3.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
              >
                Sıkça Sorulanlar →
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 text-foreground px-7 py-3.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
              >
                <span aria-hidden>☎</span>
                {site.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

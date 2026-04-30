import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllTestimonials } from "@/lib/fetchers";
import type { Testimonial } from "@/lib/testimonials";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Müşteri Referansları",
  description:
    "Bungalov, tiny house, ahşap ev ve pergola projelerimizi tamamladığımız müşterilerin gerçek yorumları.",
  alternates: { canonical: "/referanslar" },
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("tr-TR", {
    month: "long",
    year: "numeric",
  });

export default async function ReferanslarPage() {
  const testimonials = await getAllTestimonials();
  return (
    <>
      <Header />
      <main id="main" className="flex flex-col">
        <section className="pt-14 pb-10 lg:pt-28 lg:pb-12 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Referanslar
            </p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight max-w-4xl">
              Müşterilerimizin sözüyle.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-foreground/75 leading-relaxed">
              Anahtar teslim ettiğimiz projelerin sahiplerinden — bungalov,
              tiny house, ahşap ev ve pergola uygulamalarından gerçek
              deneyimler.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} t={t} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-24 bg-foreground text-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight text-background">
              Sıradaki referans sizin olabilir.
            </h2>
            <p className="mt-5 text-lg text-background/80 leading-relaxed">
              Birlikte çalıştığımız her proje bir hikâye. Hayalinizdeki
              ahşap yapıyı dinlemek için sabırsızlanıyoruz.
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
                WhatsApp'tan Yazın
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="flex flex-col rounded-2xl bg-surface border border-border p-6 lg:p-7 hover:border-accent/40 transition-colors">
      <Stars value={t.rating} />
      <blockquote className="mt-5 flex-1 text-foreground/85 leading-relaxed">
        <span className="font-serif text-3xl text-accent leading-none align-top mr-1">
          “
        </span>
        {t.quote}
      </blockquote>
      <footer className="mt-6 pt-5 border-t border-border flex items-end justify-between gap-4">
        <div>
          <div className="font-serif text-lg font-semibold">{t.name}</div>
          <div className="text-xs uppercase tracking-[0.15em] text-muted mt-1">
            {t.city} · {formatDate(t.date)}
          </div>
        </div>
        {t.modelSlug ? (
          <Link
            href={`/modeller/${t.modelSlug}`}
            className="text-xs font-medium text-accent hover:underline whitespace-nowrap"
          >
            {t.projectType} →
          </Link>
        ) : (
          <span className="text-xs text-muted whitespace-nowrap">
            {t.projectType}
          </span>
        )}
      </footer>
    </article>
  );
}

function Stars({ value }: { value: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${value} yıldız üzerinden ${value}`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < value} />
      ))}
    </div>
  );
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={`w-4 h-4 ${filled ? "fill-accent" : "fill-border"}`}
    >
      <path d="M12 2.5l2.92 6.62 7.18.65-5.4 4.86 1.6 7.07L12 17.97l-6.3 3.73 1.6-7.07-5.4-4.86 7.18-.65L12 2.5z" />
    </svg>
  );
}

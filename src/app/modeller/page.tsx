import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCategories } from "@/lib/fetchers";
import type { Model, ModelCategory } from "@/lib/models";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Modeller — Tiny House, Ahşap Ev ve Bungalov Kataloğu | Güler Ahşap Yapı",
  description:
    "Tiny house, ahşap ev ve bungalov modellerimiz. Metrekare, oda sayısı ve özelliklerine göre tüm modelleri inceleyin.",
};

export default async function ModellerPage() {
  const categories = await getCategories();
  return (
    <>
      <Header />
      <main id="main" className="flex flex-col">
        <PageHero />
        <CategoryNav categories={categories} />
        {categories.map((cat) => (
          <CategorySection key={cat.slug} category={cat} />
        ))}
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function PageHero() {
  return (
    <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          Model Kataloğu
        </p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight max-w-4xl">
          İhtiyacınıza uyan modeli seçin, gerisini bize bırakın.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/75 leading-relaxed">
          Üç ana kategoride, küçük tiny house'lardan geniş aile evlerine kadar
          tüm modellerimizi tek bir katalogda topladık. Her model anahtar
          teslim olarak sunulur; mimari detay ve donanım talebinize göre
          özelleştirilir.
        </p>
      </div>
    </section>
  );
}

function CategoryNav({ categories }: { categories: ModelCategory[] }) {
  return (
    <div className="sticky top-20 z-30 bg-background/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 flex flex-wrap gap-2 md:gap-4">
        {categories.map((cat) => (
          <a
            key={cat.slug}
            href={`#${cat.slug}`}
            className="text-sm rounded-full border border-border px-4 py-2 text-foreground/80 hover:border-accent hover:text-accent transition-colors"
          >
            {cat.title}
          </a>
        ))}
      </div>
    </div>
  );
}

function CategorySection({ category }: { category: ModelCategory }) {
  return (
    <section
      id={category.slug}
      className="py-20 lg:py-28 border-b border-border last:border-b-0 scroll-mt-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
            {category.title}
          </h2>
          <p className="mt-5 text-lg text-foreground/75 leading-relaxed">
            {category.intro}
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {category.models.map((model) => (
            <ModelCard key={model.slug} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModelCard({ model }: { model: Model }) {
  const wppText = `Merhaba, "${model.name}" modeli için teklif almak istiyorum.`;
  return (
    <article className="group flex flex-col rounded-2xl overflow-hidden bg-surface border border-border hover:border-accent/40 transition-colors">
      <Link
        href={`/modeller/${model.slug}`}
        className="relative aspect-[4/3] overflow-hidden block"
        aria-label={`${model.name} detayını incele`}
      >
        <Image
          src={model.image}
          alt={model.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground">
          {model.area}
        </span>
      </Link>
      <div className="flex flex-col flex-1 p-6">
        <Link href={`/modeller/${model.slug}`} className="block">
          <h3 className="font-serif text-2xl font-semibold group-hover:text-accent transition-colors">
            {model.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-accent font-medium">
          {model.highlight}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {model.description}
        </p>
        <dl className="mt-6 grid grid-cols-3 gap-2 text-center text-xs uppercase tracking-wider">
          <Spec label="Alan" value={model.area} />
          <Spec label="Oda" value={model.layout} />
          <Spec label="Banyo" value={model.bath} />
        </dl>
        <div className="mt-6 flex items-center gap-3">
          <a
            href={whatsappLink(wppText)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center rounded-full bg-accent text-white px-5 py-3 text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Teklif Al
          </a>
          <Link
            href={`/modeller/${model.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
          >
            Detay
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border py-3 px-2">
      <dt className="text-[10px] text-muted">{label}</dt>
      <dd className="mt-1 text-sm font-medium text-foreground normal-case tracking-normal">
        {value}
      </dd>
    </div>
  );
}

function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight text-background">
          Modeller üzerinde özelleştirme yapıyoruz.
        </h2>
        <p className="mt-5 text-lg text-background/75 leading-relaxed">
          Cephe, iç plan, mutfak ve banyo donanımı projenize göre değişebilir.
          Doğru modeli birlikte belirleyelim.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-7 py-3.5 text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            <span aria-hidden>☎</span>
            {site.phone}
          </a>
          <Link
            href="/#iletisim"
            className="inline-flex items-center justify-center rounded-full border border-background/30 text-background px-7 py-3.5 text-sm font-medium hover:bg-background/10 transition-colors"
          >
            Teklif Talep Edin
          </Link>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ModelGallery from "@/components/ModelGallery";
import { getAllModels, getModelBySlug } from "@/lib/fetchers";
import type { Model, ModelCategory } from "@/lib/models";
import { site } from "@/lib/site";
import { breadcrumbSchema, productSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const all = await getAllModels();
  return all.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const m = await getModelBySlug(slug);
  if (!m) return { title: "Model bulunamadı" };
  return {
    title: `${m.name} — ${m.area} ${m.layout} ${m.category.title}`,
    description: m.description,
    alternates: {
      canonical: `/modeller/${m.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${m.name} | ${site.name}`,
      description: m.description,
      url: `${site.url}/modeller/${m.slug}`,
      images: [m.image],
    },
  };
}

export default async function ModelDetailPage({ params }: Props) {
  const { slug } = await params;
  const [m, allModels] = await Promise.all([
    getModelBySlug(slug),
    getAllModels(),
  ]);
  if (!m) notFound();

  const related = allModels.filter(
    (x) => x.category.slug === m.category.slug && x.slug !== m.slug
  );
  const wppText = encodeURIComponent(
    `Merhaba, "${m.name}" modeli hakkında bilgi almak istiyorum.`
  );

  const breadcrumbs = breadcrumbSchema([
    { name: "Anasayfa", url: site.url },
    { name: "Modeller", url: `${site.url}/modeller` },
    {
      name: m.category.title,
      url: `${site.url}/modeller#${m.category.slug}`,
    },
    { name: m.name, url: `${site.url}/modeller/${m.slug}` },
  ]);

  return (
    <>
      <Header />
      <JsonLd data={[productSchema(m), breadcrumbs]} />
      <main id="main" className="flex flex-col">
        <Breadcrumbs category={m.category} model={m.name} />
        <Hero model={m} wppText={wppText} />
        <ModelGallery images={m.gallery} alt={m.name} />
        <Description model={m} />
        <Features features={m.features} />
        <IncludesAndOptions includes={m.includes} options={m.options} />
        <CTA modelName={m.name} wppText={wppText} />
        {related.length > 0 && (
          <Related categoryTitle={m.category.title} models={related} />
        )}
      </main>
      <Footer />
    </>
  );
}

function Breadcrumbs({
  category,
  model,
}: {
  category: { slug: string; title: string };
  model: string;
}) {
  return (
    <div className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 text-xs text-muted flex flex-wrap items-center gap-2">
        <Link href="/" className="hover:text-accent">
          Anasayfa
        </Link>
        <span>/</span>
        <Link href="/modeller" className="hover:text-accent">
          Modeller
        </Link>
        <span>/</span>
        <Link
          href={`/modeller#${category.slug}`}
          className="hover:text-accent"
        >
          {category.title}
        </Link>
        <span>/</span>
        <span className="text-foreground">{model}</span>
      </div>
    </div>
  );
}

function Hero({
  model: m,
  wppText,
}: {
  model: Model & { category: ModelCategory };
  wppText: string;
}) {
  return (
    <section className="pt-12 lg:pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-10 lg:grid-cols-12 lg:gap-16 items-end">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            {m.category.title}
          </p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight">
            {m.name}
          </h1>
          <p className="mt-5 text-xl text-foreground/75 leading-relaxed max-w-2xl">
            {m.description}
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent/10 px-4 py-2 text-sm text-accent font-medium">
            <span className="w-2 h-2 rounded-full bg-accent" />
            {m.highlight}
          </div>
        </div>
        <div className="lg:col-span-5">
          <dl className="grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            <SpecCell label="Alan" value={m.area} />
            <SpecCell label="Plan" value={m.layout} />
            <SpecCell label="Banyo" value={m.bath} />
            <SpecCell label="Kapasite" value={m.capacity} />
            <SpecCell label="Kat" value={m.levels} />
            <SpecCell label="Teslim" value={m.deliveryTime} />
          </dl>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/905326499430?text=${wppText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-accent text-white px-7 py-3.5 text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              {m.name} için Teklif Al
            </a>
            <a
              href="tel:+905326499430"
              aria-label="Telefonla ara"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 text-foreground px-5 py-3.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              <span aria-hidden>☎</span>
              Ara
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface p-5">
      <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">
        {label}
      </dt>
      <dd className="mt-1.5 font-serif text-lg font-semibold text-foreground leading-tight">
        {value}
      </dd>
    </div>
  );
}


function Description({
  model: m,
}: {
  model: Model & { category: ModelCategory };
}) {
  return (
    <section className="py-12 lg:py-20 border-y border-border bg-surface">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
          Bu model hakkında
        </h2>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/80">
          {m.longDescription.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features({ features }: { features: readonly string[] }) {
  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight max-w-xl">
          Standart Özellikler
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <li
              key={f}
              className="flex gap-4 rounded-xl bg-surface border border-border p-5"
            >
              <span className="mt-1 flex-none w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm">
                ✓
              </span>
              <span className="text-base leading-relaxed text-foreground/85">
                {f}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function IncludesAndOptions({
  includes,
  options,
}: {
  includes: readonly string[];
  options: readonly string[];
}) {
  return (
    <section className="py-12 lg:py-20 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Pillar
          eyebrow="Standart pakette"
          title="Standart pakete dahil"
          items={includes}
          tone="solid"
        />
        <Pillar
          eyebrow="İsteğe bağlı"
          title="Eklenebilir opsiyonlar"
          items={options}
          tone="outline"
        />
      </div>
    </section>
  );
}

function Pillar({
  eyebrow,
  title,
  items,
  tone,
}: {
  eyebrow: string;
  title: string;
  items: readonly string[];
  tone: "solid" | "outline";
}) {
  return (
    <div
      className={
        tone === "solid"
          ? "rounded-2xl bg-foreground text-background p-8 lg:p-10"
          : "rounded-2xl border border-border p-8 lg:p-10"
      }
    >
      <p
        className={
          tone === "solid"
            ? "text-xs uppercase tracking-[0.3em] text-background/60"
            : "text-xs uppercase tracking-[0.3em] text-accent"
        }
      >
        {eyebrow}
      </p>
      <h3
        className={
          tone === "solid"
            ? "mt-3 font-serif text-2xl md:text-3xl font-medium text-background"
            : "mt-3 font-serif text-2xl md:text-3xl font-medium"
        }
      >
        {title}
      </h3>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className={
              tone === "solid"
                ? "flex gap-3 text-background/85"
                : "flex gap-3 text-foreground/85"
            }
          >
            <span
              className={
                tone === "solid"
                  ? "flex-none mt-2 w-1.5 h-1.5 rounded-full bg-accent-soft"
                  : "flex-none mt-2 w-1.5 h-1.5 rounded-full bg-accent"
              }
            />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CTA({ modelName, wppText }: { modelName: string; wppText: string }) {
  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-3xl bg-accent text-white p-10 lg:p-16 grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl md:text-5xl font-medium leading-tight tracking-tight">
              {modelName} ile devam edelim mi?
            </h2>
            <p className="mt-4 text-lg text-white/85 leading-relaxed max-w-xl">
              Detaylı keşif, plan revizyonu ve net teklif için bizi arayın ya
              da WhatsApp üzerinden yazın — aynı gün dönüş yapıyoruz.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-foreground px-7 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              <span aria-hidden>☎</span>
              {site.phone}
            </a>
            <a
              href={`https://wa.me/905326499430?text=${wppText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 text-white px-7 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              WhatsApp'tan Yazın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Related({
  categoryTitle,
  models,
}: {
  categoryTitle: string;
  models: readonly {
    slug: string;
    name: string;
    area: string;
    layout: string;
    image: string;
    highlight: string;
  }[];
}) {
  return (
    <section className="py-12 lg:py-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Aynı kategori
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-medium tracking-tight">
              Diğer {categoryTitle.toLowerCase()}
            </h2>
          </div>
          <Link
            href="/modeller"
            className="text-sm font-medium text-accent hover:underline"
          >
            Tüm modeller →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {models.map((rel) => (
            <Link
              key={rel.slug}
              href={`/modeller/${rel.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden bg-background border border-border hover:border-accent/40 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={rel.image}
                  alt={rel.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold group-hover:text-accent transition-colors">
                  {rel.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                  {rel.area} · {rel.layout}
                </p>
                <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-2">
                  {rel.highlight}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

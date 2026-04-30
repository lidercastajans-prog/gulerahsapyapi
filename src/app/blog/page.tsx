import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/fetchers";

export const metadata: Metadata = {
  title: "Blog — Ahşap Yapı Notları | Güler Ahşap Yapı",
  description:
    "Ahşap yapı, bungalov, tiny house ve pergola konularında pratik rehberler ve atölye notları.",
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function BlogPage() {
  const posts = await getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <Header />
      <main id="main" className="flex flex-col">
        {/* Hero Header */}
        <section className="pt-14 pb-10 lg:pt-28 lg:pb-12 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Blog
            </p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight max-w-4xl">
              Atölyeden notlar, sahadan deneyimler.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-foreground/75 leading-relaxed">
              Ahşap yapı seçim rehberleri, bakım ipuçları ve tamamlanan
              projelerin arka planı.
            </p>
          </div>
        </section>

        {/* Featured Post — Compact horizontal layout */}
        {featured && (
          <section className="py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid gap-6 lg:grid-cols-12 lg:gap-10 items-center"
              >
                <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-accent text-white px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                    Öne Çıkan
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-accent">
                    <span>{featured.category}</span>
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    <span>{formatDate(featured.date)}</span>
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    <span>{featured.readTime}</span>
                  </div>
                  <h2 className="mt-4 font-serif text-3xl md:text-4xl font-medium leading-tight tracking-tight group-hover:text-accent transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-base text-foreground/75 leading-relaxed max-w-lg">
                    {featured.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                    Yazıyı oku
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Post Grid — Compact cards with small images */}
        {rest.length > 0 && (
          <section className="pb-24 lg:pb-32 border-t border-border pt-12 lg:pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <h2 className="text-xs uppercase tracking-[0.3em] text-muted mb-8">
                Tüm Yazılar
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col rounded-2xl overflow-hidden bg-surface border border-border hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Category badge on image */}
                      <div className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-background/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-medium text-foreground">
                        {post.category}
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-muted">
                        <span>{formatDate(post.date)}</span>
                        <span className="w-0.5 h-0.5 rounded-full bg-muted" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="mt-2.5 font-serif text-lg font-semibold leading-snug group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-foreground/65 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        Devamını oku
                        <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

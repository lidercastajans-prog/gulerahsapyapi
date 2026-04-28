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
        <section className="pt-20 pb-12 lg:pt-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Blog
            </p>
            <h1 className="mt-4 font-serif text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight max-w-4xl">
              Atölyeden notlar, sahadan deneyimler.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-foreground/75 leading-relaxed">
              Ahşap yapı seçim rehberleri, bakım ipuçları ve tamamlanan
              projelerin arka planı.
            </p>
          </div>
        </section>

        {featured && (
          <section className="py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid gap-8 lg:grid-cols-2 lg:gap-12 items-center"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-accent">
                    <span>{featured.category}</span>
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    <span>{formatDate(featured.date)}</span>
                  </div>
                  <h2 className="mt-4 font-serif text-3xl md:text-5xl font-medium leading-tight tracking-tight group-hover:text-accent transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-lg text-foreground/75 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                    Yazıyı oku
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </div>
          </section>
        )}

        {rest.length > 0 && (
          <section className="pb-24 lg:pb-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col rounded-2xl overflow-hidden bg-surface border border-border hover:border-accent/40 transition-colors"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 lg:p-8">
                      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
                        <span>{post.category}</span>
                        <span className="w-1 h-1 rounded-full bg-muted" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <h3 className="mt-3 font-serif text-2xl md:text-3xl font-semibold leading-tight group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-base text-foreground/70 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm text-muted">
                        {post.readTime}
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

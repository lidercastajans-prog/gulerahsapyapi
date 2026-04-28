import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getAllPosts, getPostBySlug } from "@/lib/fetchers";
import type { Post } from "@/lib/posts";
import { articleSchema } from "@/lib/schema";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Yazı bulunamadı" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [post.image],
    },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([
    getPostBySlug(slug),
    getAllPosts(),
  ]);
  if (!post) notFound();

  const others: Post[] = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const wppText = encodeURIComponent(
    `Merhaba, "${post.title}" yazınız hakkında bilgi almak istiyorum.`
  );

  return (
    <>
      <Header />
      <JsonLd data={articleSchema(post)} />
      <main id="main" className="flex flex-col">
        <article>
          {/* Article Header */}
          <header className="pt-16 lg:pt-24 pb-8">
            <div className="mx-auto max-w-3xl px-6">
              <Link
                href="/blog"
                className="text-sm text-muted hover:text-accent transition-colors inline-flex items-center gap-2"
              >
                <span aria-hidden>←</span>
                Tüm yazılar
              </Link>
              <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-accent">
                <span>{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-accent" />
                <span>{formatDate(post.date)}</span>
                <span className="w-1 h-1 rounded-full bg-accent" />
                <span>{post.readTime}</span>
              </div>
              <h1 className="mt-5 font-serif text-4xl md:text-5xl font-medium leading-[1.12] tracking-tight">
                {post.title}
              </h1>
              <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </header>

          {/* Cover Image — constrained width, rounded */}
          <div className="mx-auto max-w-4xl px-6">
            <div className="relative aspect-[2/1] rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Article Body */}
          <div className="mx-auto max-w-3xl px-6 py-12 lg:py-16">
            <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* CTA after article */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="rounded-2xl bg-surface border border-border p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <p className="font-serif text-xl font-medium">
                    Bu konu hakkında danışmak ister misiniz?
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Uzman ekibimizle ücretsiz görüşme yapın.
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={`https://wa.me/${site.whatsappNumber}?text=${wppText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-5 py-2.5 text-sm font-medium hover:bg-accent/90 transition-colors whitespace-nowrap"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/20 text-foreground px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors whitespace-nowrap"
                  >
                    <span aria-hidden>☎</span>
                    Ara
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts — compact horizontal cards */}
        {others.length > 0 && (
          <section className="border-t border-border py-14 lg:py-20 bg-surface">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="flex items-end justify-between gap-4 mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight">
                  Diğer yazılar
                </h2>
                <Link
                  href="/blog"
                  className="text-sm font-medium text-accent hover:underline whitespace-nowrap"
                >
                  Tümünü gör →
                </Link>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {others.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col rounded-2xl bg-background border border-border overflow-hidden hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-muted">
                        <span>{p.category}</span>
                        <span className="w-0.5 h-0.5 rounded-full bg-muted" />
                        <span>{formatDate(p.date)}</span>
                      </div>
                      <h3 className="mt-2 font-serif text-base font-semibold leading-snug group-hover:text-accent transition-colors line-clamp-2">
                        {p.title}
                      </h3>
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

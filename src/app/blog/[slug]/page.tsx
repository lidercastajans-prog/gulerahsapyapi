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
    .slice(0, 2);

  return (
    <>
      <Header />
      <JsonLd data={articleSchema(post)} />
      <main id="main" className="flex flex-col">
        <article>
          <header className="pt-16 lg:pt-24 pb-10">
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
              <h1 className="mt-5 font-serif text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight">
                {post.title}
              </h1>
              <p className="mt-6 text-xl text-foreground/75 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </header>

          <div className="mx-auto max-w-5xl px-6">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mx-auto max-w-3xl px-6 py-12 lg:py-16">
            <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </article>

        {others.length > 0 && (
          <section className="border-t border-border py-16 lg:py-20 bg-surface">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <h2 className="font-serif text-3xl font-medium tracking-tight">
                Diğer yazılar
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {others.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex gap-5 rounded-2xl bg-background border border-border p-4 hover:border-accent/40 transition-colors"
                  >
                    <div className="relative w-32 h-32 flex-none overflow-hidden rounded-xl">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="128px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 py-1">
                      <div className="text-xs uppercase tracking-[0.2em] text-muted">
                        {p.category}
                      </div>
                      <h3 className="mt-2 font-serif text-xl font-semibold leading-tight group-hover:text-accent transition-colors line-clamp-2">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted line-clamp-2">
                        {p.excerpt}
                      </p>
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

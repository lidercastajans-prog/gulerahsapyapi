"use client";

import Image from "next/image";
import { useState } from "react";
import type { InstagramPost, SocialLink } from "@/lib/social";

function SocialIcon({ link }: { link: SocialLink }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${link.label} sayfamızı ziyaret edin`}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-surface text-foreground/70 hover:text-accent hover:border-accent/40 transition-all duration-300 hover:scale-110"
    >
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
        <path d={link.iconPath} />
      </svg>
    </a>
  );
}

function InstaCard({ post }: { post: InstagramPost }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={post.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative aspect-square overflow-hidden rounded-xl"
    >
      <Image
        src={post.src}
        alt={post.alt}
        fill
        sizes="(min-width: 1024px) 11vw, (min-width: 640px) 25vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div
        className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z" />
        </svg>
      </div>
    </a>
  );
}

export default function SocialStrip({
  posts,
  links,
}: {
  posts: InstagramPost[];
  links: SocialLink[];
}) {
  return (
    <section className="py-24 lg:py-32 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Bizi Takip Edin
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
              Instagram'da buluşalım.
            </h2>
            <p className="mt-4 text-lg text-foreground/70 leading-relaxed">
              Projelerimizi, atölyemizi ve ahşap dünyasını yakından takip edin.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {links.map((link) => (
              <SocialIcon key={link.platform} link={link} />
            ))}
          </div>
        </div>

        {/* Instagram Grid */}
        <div className="mt-12 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-3">
          {posts.map((post, i) => (
            <InstaCard key={i} post={post} />
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://www.instagram.com/gulerahsapyapi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-foreground/20 text-foreground px-7 py-3.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
            @gulerahsapyapi
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

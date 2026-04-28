"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox, { type LightboxImage } from "./Lightbox";

type Props = {
  images: string[];
  alt: string;
};

export default function ModelGallery({ images, alt }: Props) {
  const [active, setActive] = useState<number | null>(null);

  if (images.length === 0) return null;
  const lbImages: LightboxImage[] = images.map((src, i) => ({
    src,
    alt: i === 0 ? alt : `${alt} — ${i + 1}`,
  }));

  const [main, ...rest] = images;

  return (
    <section className="pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-3 md:gap-4 md:grid-cols-12">
        <button
          type="button"
          onClick={() => setActive(0)}
          aria-label={`${alt} — büyüt`}
          className="md:col-span-8 relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-border hover:border-accent/40 transition-colors group"
        >
          <Image
            src={main}
            alt={alt}
            fill
            priority
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <span className="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-background/90 text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4"
            >
              <path d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM11 7v8M7 11h8" />
            </svg>
          </span>
        </button>

        <div className="md:col-span-4 grid grid-cols-3 md:grid-cols-1 gap-3 md:gap-4">
          {rest.slice(0, 3).map((src, i) => {
            const targetIndex = i + 1;
            const isLast = i === 2 && images.length > 4;
            return (
              <button
                key={src}
                type="button"
                onClick={() => setActive(targetIndex)}
                aria-label={`${alt} — görsel ${targetIndex + 1}, büyüt`}
                className="group relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-border hover:border-accent/40 transition-colors"
              >
                <Image
                  src={src}
                  alt={`${alt} — ${targetIndex + 1}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {isLast && images.length > 4 && (
                  <span className="absolute inset-0 bg-foreground/60 flex items-center justify-center text-background font-serif text-2xl">
                    +{images.length - 4}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <Lightbox
        images={lbImages}
        index={active}
        onClose={() => setActive(null)}
        onChange={setActive}
      />
    </section>
  );
}

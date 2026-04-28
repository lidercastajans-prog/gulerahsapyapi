"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox, { type LightboxImage } from "./Lightbox";

type Props = {
  images: LightboxImage[];
};

export default function HomeGallery({ images }: Props) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`${img.alt} — büyüt`}
            className="group relative aspect-square overflow-hidden rounded-xl bg-surface border border-border hover:border-accent/40 transition-colors"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-end justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-background/95 text-foreground text-sm">
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
            </span>
          </button>
        ))}
      </div>
      <Lightbox
        images={images}
        index={active}
        onClose={() => setActive(null)}
        onChange={setActive}
      />
    </>
  );
}

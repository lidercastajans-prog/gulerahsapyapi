import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileActionBar from "@/components/MobileActionBar";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const description =
  "30+ yıllık deneyimle Adrasan ve Antalya bölgesinde anahtar teslim ahşap ev, bungalov, ahşap villa ve pergola uygulamaları. Estetik, dayanıklı ve kaliteli ahşap yapı çözümleri.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Anahtar Teslim Ahşap Ev, Bungalov ve Villa`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "ahşap ev",
    "bungalov",
    "tiny house",
    "ahşap villa",
    "pergola",
    "anahtar teslim",
    "Adrasan",
    "Antalya",
    "Güler Ahşap",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Anahtar Teslim Ahşap Ev, Bungalov ve Villa`,
    description,
    images: [
      {
        url: "/logo-mark.png",
        width: 256,
        height: 256,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Anahtar Teslim Ahşap Yapı`,
    description,
    images: ["/logo-mark.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans pb-16 lg:pb-0">
        <a href="#main" className="skip-to-content">
          İçeriğe atla
        </a>
        {children}
        <WhatsAppButton />
        <MobileActionBar />
        <JsonLd data={[localBusinessSchema, websiteSchema]} />
      </body>
    </html>
  );
}

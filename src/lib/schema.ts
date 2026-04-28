import { site } from "@/lib/site";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  telephone: `+90${site.whatsappNumber.slice(2)}`,
  email: site.email,
  image: `${site.url}/logo-mark.png`,
  logo: `${site.url}/logo-mark.png`,
  description:
    "30+ yıllık deneyimle Adrasan ve Antalya bölgesinde anahtar teslim ahşap ev, bungalov, ahşap villa ve pergola uygulamaları.",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.addressParts.street,
    addressLocality: site.addressParts.locality,
    addressRegion: site.addressParts.region,
    postalCode: site.addressParts.postalCode,
    addressCountry: site.addressParts.country,
  },
  areaServed: [
    { "@type": "City", name: "Adrasan" },
    { "@type": "City", name: "Kumluca" },
    { "@type": "City", name: "Kaş" },
    { "@type": "City", name: "Finike" },
    { "@type": "City", name: "Kemer" },
    { "@type": "City", name: "Antalya" },
  ],
  knowsAbout: [
    "Ahşap ev",
    "Bungalov",
    "Tiny house",
    "Ahşap villa",
    "Pergola",
    "Anahtar teslim ahşap yapı",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  inLanguage: "tr-TR",
  publisher: { "@id": `${site.url}/#business` },
};

export const productSchema = (m: {
  slug: string;
  name: string;
  description: string;
  image: string;
  area: string;
  layout: string;
  capacity: string;
  deliveryTime: string;
  category: { title: string };
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: m.name,
  description: m.description,
  image: m.image,
  category: m.category.title,
  brand: {
    "@type": "Brand",
    name: site.name,
  },
  manufacturer: { "@id": `${site.url}/#business` },
  url: `${site.url}/modeller/${m.slug}`,
  additionalProperty: [
    { "@type": "PropertyValue", name: "Alan", value: m.area },
    { "@type": "PropertyValue", name: "Plan", value: m.layout },
    { "@type": "PropertyValue", name: "Kapasite", value: m.capacity },
    { "@type": "PropertyValue", name: "Teslim süresi", value: m.deliveryTime },
  ],
});

export const articleSchema = (p: {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: p.title,
  description: p.excerpt,
  image: p.image,
  datePublished: p.date,
  dateModified: p.date,
  url: `${site.url}/blog/${p.slug}`,
  mainEntityOfPage: `${site.url}/blog/${p.slug}`,
  inLanguage: "tr-TR",
  author: { "@id": `${site.url}/#business` },
  publisher: { "@id": `${site.url}/#business` },
});

export const breadcrumbSchema = (
  items: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

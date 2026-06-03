export const site = {
  name: "Güler Ahşap Yapı",
  tagline: "Anahtar Teslim",
  url: "https://gulerahsapyapi.com.tr",
  phone: "0532 649 94 30",
  phoneHref: "tel:+905326499430",
  whatsappNumber: "905326499430",
  whatsappDefaultText:
    "Merhaba, ahşap yapı projeleriniz hakkında bilgi almak istiyorum.",
  email: "info@gulerahsapyapi.com",
  address: "Adrasan Mh. Sağlık Ocağı Yanı, 07370 Kumluca / Antalya",
  addressParts: {
    street: "Adrasan Mh. Sağlık Ocağı Yanı",
    locality: "Kumluca",
    region: "Antalya",
    postalCode: "07370",
    country: "TR",
  },
  mapsQuery: "Adrasan Mahallesi Sağlık Ocağı Kumluca Antalya",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Adrasan+Mahallesi+Sa%C4%9Fl%C4%B1k+Oca%C4%9F%C4%B1+Kumluca+Antalya",
  experienceYears: 30,
  region: "Adrasan & Antalya",
};

export const whatsappLink = (text?: string) => {
  const t = encodeURIComponent(text ?? site.whatsappDefaultText);
  return `https://wa.me/${site.whatsappNumber}?text=${t}`;
};

export const nav = [
  { label: "Anasayfa", href: "/" },
  { label: "Modeller", href: "/modeller" },
  { label: "Süreç", href: "/surec" },
  { label: "Atölye", href: "/atolye" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/#iletisim" },
] as const;

export const footerSecondary = [
  { label: "Galeri", href: "/#galeri" },
  { label: "Sıkça Sorulanlar", href: "/sss" },
  { label: "Ahşap Rehberi", href: "/rehber" },
] as const;

export const images = {
  hero: "/hero.png",
  about: "/bungalow.png",
  region: "/tiny-house.png",
};

export const featured = [
  {
    title: "Adrasan Sahil Bungalov",
    summary:
      "Doğal ahşap dokulu, denize bakan modern bungalov. Geniş veranda ve özel pergola uygulaması.",
    src: "/bungalow.png",
  },
  {
    title: "Orman İçi Ahşap Villa",
    summary:
      "İki katlı, kalın masif ahşap konstrüksiyonlu, doğa ile bütünleşen butik villa.",
    src: "/tiny-house.png",
  },
  {
    title: "Bahçe Pergolası ve Teras",
    summary:
      "Açık hava yaşamı için tasarlanmış, hava şartlarına dayanıklı emprenye edilmiş pergola.",
    src: "/hero.png",
  },
] as const;

export const services = [
  {
    title: "Ahşap Ev",
    description:
      "Yıllara meydan okuyan, yalıtımlı ve enerji verimli anahtar teslim ahşap evler.",
  },
  {
    title: "Bungalov",
    description:
      "Tatil köyleri, glamping ve özel araziler için modern tasarımlı bungalov çözümleri.",
  },
  {
    title: "Ahşap Villa",
    description:
      "Mimari projeye özel, masif ve lamine ahşap kullanılan butik villa uygulamaları.",
  },
  {
    title: "Pergola & Teras",
    description:
      "Bahçe ve teraslar için dayanıklı emprenye edilmiş ahşap pergola ve teras kaplamaları.",
  },
];

export const stats = [
  { value: "30+", label: "Yıllık deneyim" },
  { value: "200+", label: "Tamamlanan proje" },
  { value: "15+", label: "Hizmet bölgesi" },
  { value: "100%", label: "Anahtar teslim" },
];

export const gallery = [
  "/hero.png",
  "/bungalow.png",
  "/tiny-house.png",
  "/hero.png",
  "/bungalow.png",
  "/tiny-house.png",
  "/hero.png",
  "/bungalow.png",
];


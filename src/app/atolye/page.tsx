import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Atölye & Ekip",
  description:
    "Adrasan'daki atölyemiz ve üç on yılı aşan ekip deneyimimiz. Ahşap yapı kültürünü modern mühendislikle birleştiren ekibi tanıyın.",
  alternates: { canonical: "/atolye" },
};

const wp = "https://i0.wp.com/gulerahsapyapi.com/wp-content/uploads";

const teamRoles = [
  {
    role: "Kurucu Usta",
    tenure: "30+ yıl",
    summary:
      "Marangozluğa çıraklıkla başlayan, üç kuşak ahşap işçiliğinin birikimini taşıyan kurucu.",
  },
  {
    role: "Şantiye Şefi",
    tenure: "15+ yıl",
    summary:
      "Üretimden montaja kadar saha sürecini yöneten, müşterinin tek noktadan iletişim kurduğu yetkili.",
  },
  {
    role: "Atölye Sorumlusu",
    tenure: "12+ yıl",
    summary:
      "Ahşap kesim, taşıma, kurutma kontrolü ve hat yönetiminden sorumlu, üretim kalitesinin bekçisi.",
  },
  {
    role: "Mimari Tasarım Sorumlusu",
    tenure: "8+ yıl",
    summary:
      "Müşteri talebini plan ve 3D görsele dönüştüren, mevzuat süreçlerini takip eden tasarım ekibi.",
  },
  {
    role: "Montaj Ekip Lideri",
    tenure: "10+ yıl",
    summary:
      "Sahaya inen montaj ekibinin liderliğini yapan, kurulum standartlarını koruyan usta başı.",
  },
  {
    role: "Müşteri İlişkileri",
    tenure: "5+ yıl",
    summary:
      "Talep alımı, teklif takibi, teslim sonrası bakım iletişimi — müşterinin ses tonu.",
  },
];

const stats = [
  { value: "12+", label: "Kişilik ekip" },
  { value: "200+", label: "Yıl toplam deneyim" },
  { value: "3", label: "Kuşak ahşap işçiliği" },
  { value: "1.200 m²", label: "Atölye alanı" },
];

const workshopShots = [
  `${wp}/2026/04/WhatsApp-Image-2026-03-27-at-19.39.13-4-1024x682.jpeg?ssl=1`,
  `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.18-1-1024x1024.jpeg?ssl=1`,
  `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.23-1.jpeg?ssl=1`,
  `${wp}/2026/04/WhatsApp-Image-2026-04-11-at-23.26.11-1024x576.jpeg?ssl=1`,
];

export default function AtolyePage() {
  return (
    <>
      <Header />
      <main id="main" className="flex flex-col">
        <section className="pt-14 pb-10 lg:pt-28 lg:pb-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-10 lg:grid-cols-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">
                Atölye & Ekip
              </p>
              <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight">
                Adrasan'daki atölyemizden, sizin sahanıza.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-foreground/75 leading-relaxed">
                Üç kuşaklık marangoz mirasını mühendislik disipliniyle
                birleştiren bir ekibiz. Her proje, atölyeden çıkmadan önce
                aynı titiz bakıştan geçer.
              </p>
            </div>
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <Image
                src={workshopShots[0]}
                alt="Atölyeden bir kare"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">
                Hikâyemiz
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
                Otuz yılı aşkın bir ahşap mirası.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85">
              <p>
                {site.name}, Adrasan'ın ahşap işçiliği geleneğini sürdüren bir
                aile atölyesi olarak yola çıktı. Kurucu ustamız, marangozluğa
                çıraklıkla başladı; üç kuşak boyunca aynı çatı altında öğrenildi,
                aktarıldı, geliştirildi.
              </p>
              <p>
                Bugün 1.200 m²'lik atölyemizde modern ahşap işleme makineleri,
                kurutma fırınları ve emprenye banyoları çalışıyor. Geleneksel
                ahşap detay bilgisini, tutkallı kiriş ve sandviç panel gibi
                modern konstrüksiyon teknikleriyle birleştiriyoruz.
              </p>
              <p>
                Tasarım, üretim ve montaj — üç ayağı da kendi ekibimizle
                yürütüyoruz. Bu yüzden takvim sözümüz net, sürpriz yok, ara
                yüklenici karmaşası yok.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-foreground text-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-5xl md:text-6xl font-medium text-background">
                  {s.value}
                </div>
                <div className="mt-2 text-sm uppercase tracking-[0.2em] text-background/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">
                Ekip
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
                Sahada bir araya gelen roller.
              </h2>
              <p className="mt-5 text-lg text-foreground/75 leading-relaxed">
                Talep alımından teslim sonrası bakıma kadar her aşamada
                muhatabınız olan ekip.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teamRoles.map((m) => (
                <article
                  key={m.role}
                  className="rounded-2xl bg-surface border border-border p-7 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-2xl font-semibold">
                      {m.role}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.15em] text-accent whitespace-nowrap">
                      {m.tenure}
                    </span>
                  </div>
                  <p className="mt-4 text-foreground/80 leading-relaxed">
                    {m.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-28 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">
                Atölyeden
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
                Üretim sürecinden kareler.
              </h2>
            </div>
            <div className="mt-12 grid gap-3 md:gap-4 grid-cols-2 lg:grid-cols-4">
              {workshopShots.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[4/5] rounded-xl overflow-hidden border border-border bg-background"
                >
                  <Image
                    src={src}
                    alt={`Atölye karesi ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Bir sonraki adım
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
              Atölyeyi gezmek ister misiniz?
            </h2>
            <p className="mt-5 text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Adrasan'a yolunuz düşerse — ya da düşmek ister mi diye sorun.
              Atölyede bir kahve içip projeyi konuşalım.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-white px-7 py-3.5 text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                <span aria-hidden>☎</span>
                {site.phone}
              </a>
              <a
                href={whatsappLink("Merhaba, atölyenizi ziyaret etmek istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 text-foreground px-7 py-3.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
              >
                Randevu Talep Edin
              </a>
              <Link
                href="/surec"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 text-foreground px-7 py-3.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
              >
                Yapı Sürecini İncele →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  featured,
  images,
  services,
  site,
  stats,
  whatsappLink,
} from "@/lib/site";
import {
  getAllModels,
  getFeaturedTestimonials,
  getGalleryImages,
} from "@/lib/fetchers";
import type { Testimonial } from "@/lib/testimonials";
import type { GalleryImage } from "@/lib/fetchers";
import ContactForm from "@/components/ContactForm";
import HomeGallery from "@/components/HomeGallery";

export default async function Home() {
  const [galleryImages, featuredTestimonials, allModels] = await Promise.all([
    getGalleryImages(),
    getFeaturedTestimonials(),
    getAllModels(),
  ]);
  const modelOptions = allModels.map((m) => ({
    slug: m.slug,
    name: m.name,
    area: m.area,
    layout: m.layout,
  }));

  return (
    <>
      <Header />
      <main id="main" className="flex flex-col">
        <Hero />
        <FeaturedProjects />
        <Philosophy />
        <Services />
        <Region />
        <Stats />
        <Testimonials items={featuredTestimonials} />
        <Gallery images={galleryImages} />
        <About />
        <Contact modelOptions={modelOptions} />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-[88vh] flex items-end overflow-hidden"
    >
      <Image
        src={images.hero}
        alt="Ahşap yapı projesi"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 pb-20 lg:pb-28 text-white">
        <p className="text-xs uppercase tracking-[0.3em] text-white/80 mb-5">
          {site.region} · {site.experienceYears}+ Yıllık Deneyim
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] tracking-tight max-w-5xl">
          Doğanın sıcaklığı, ahşabın zarafeti — anahtar teslim.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-white/85 leading-relaxed">
          Ahşap ev, bungalov, villa ve pergola uygulamalarında üç on yılı aşan
          ustalık. Hayalinizdeki yaşam alanını projeden anahtar teslime kadar
          tek elden inşa ediyoruz.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a
            href="#iletisim"
            className="inline-flex items-center justify-center rounded-full bg-white text-foreground px-7 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Teklif Alın
          </a>
          <Link
            href="/modeller"
            className="inline-flex items-center justify-center rounded-full border border-white/40 text-white px-7 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Modellerimizi İnceleyin
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section id="projeler" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Öne Çıkan Projeler"
          title="Son uygulamalarımız"
          description="Adrasan ve çevresinde tamamladığımız bungalov, villa ve pergola projelerinden seçkiler."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl overflow-hidden bg-surface border border-border"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="hakkimizda" className="scroll-mt-24 py-24 lg:py-32 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Felsefemiz
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
            Her ahşap evin bir hikâyesi vardır.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>
            Otuz yılı aşkın süredir Antalya'nın eşsiz doğasında ahşabı yaşam
            alanlarına dönüştürüyoruz. Bizim için ahşap; sadece bir yapı
            malzemesi değil, mekâna ruh katan, yıllarla daha güzelleşen canlı
            bir doku.
          </p>
          <p>
            Her projede aynı titizlik: doğru ağaç seçimi, doğru kuruluk değeri,
            doğru detay. Estetik kaygı ile mühendislik disiplini bir arada
            ilerler. Müşterimizin hayalini, dayanıklı ve zamansız bir yapıya
            dönüştürürüz.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="hizmetler" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Hizmetlerimiz"
          title="Anahtar teslim ahşap yapı çözümleri"
          description="Tasarımdan teslime kadar tüm süreci tek elden yönetiyoruz."
        />
        <div className="mt-14 grid gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-background p-8 lg:p-10 md:[&:nth-child(odd)]:border-r-0"
              style={{ gridColumn: "span 1" }}
            >
              <h3 className="font-serif text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Region() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="relative aspect-[4/5] lg:aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            src={images.region}
            alt="Adrasan bölgesi"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Hizmet Bölgesi
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
            Adrasan'dan Antalya'nın dört bir yanına.
          </h2>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            Adrasan merkezli atölyemizden yola çıkarak Kumluca, Kaş, Finike,
            Kemer ve Antalya'nın tüm bölgelerinde projeler tamamlıyoruz. Yerel
            iklimi, deniz tuzunu, rüzgârı bilen bir ekiple çalışmak — yapının
            ömrünü doğrudan etkileyen bir farktır.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-y-3 gap-x-6 text-foreground/80">
            {["Adrasan", "Kumluca", "Kaş", "Finike", "Kemer", "Antalya"].map(
              (r) => (
                <li key={r} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {r}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-serif text-5xl md:text-6xl font-medium text-background">
              {s.value}
            </div>
            <div className="mt-2 text-sm uppercase tracking-[0.2em] text-background/60">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials({ items }: { items: Testimonial[] }) {
  if (items.length === 0) return null;
  return (
    <section className="py-24 lg:py-32 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Referanslar
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
              Müşterilerimizin sözüyle.
            </h2>
          </div>
          <Link
            href="/referanslar"
            className="text-sm font-medium text-accent hover:underline"
          >
            Tüm referansları gör →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <article
              key={t.id}
              className="flex flex-col rounded-2xl bg-background border border-border p-7"
            >
              <div className="flex gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-accent"
                  >
                    <path d="M12 2.5l2.92 6.62 7.18.65-5.4 4.86 1.6 7.07L12 17.97l-6.3 3.73 1.6-7.07-5.4-4.86 7.18-.65L12 2.5z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-foreground/85 leading-relaxed">
                <span className="font-serif text-3xl text-accent leading-none align-top mr-1">
                  “
                </span>
                {t.quote}
              </blockquote>
              <footer className="mt-6 pt-5 border-t border-border">
                <div className="font-serif text-lg font-semibold">
                  {t.name}
                </div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted mt-1">
                  {t.city} · {t.projectType}
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ images }: { images: GalleryImage[] }) {
  return (
    <section id="galeri" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Galeri"
          title="Tamamlanan projelerden kareler"
          description="Bungalov, villa ve pergola uygulamalarımızdan seçkiler."
        />
        <div className="mt-14">
          <HomeGallery images={images} />
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/modeller"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 text-foreground px-7 py-3.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
          >
            Tüm modellerimizi keşfedin
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 lg:py-32 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Hakkımızda
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
            Üç kuşağın ahşap ustalığı.
          </h2>
          <div className="mt-6 space-y-5 text-lg text-foreground/80 leading-relaxed">
            <p>
              {site.name}, Adrasan'da kurulduğu günden bu yana ahşap yapı
              kültürünü modern mühendislikle birleştiriyor. Her projede aynı
              söz: kaliteli ahşap, doğru detay, dürüst işçilik.
            </p>
            <p>
              Bungalovdan butik villaya, küçük bahçe pergolasından kompleks
              tatil köyü uygulamasına kadar geniş bir yelpazede hizmet
              veriyoruz. Tasarım, üretim ve montajı tek bir ekiple
              yürütüyoruz — bu yüzden takvimimiz net, sözümüz tutulur.
            </p>
          </div>
          <a
            href="#iletisim"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-white px-7 py-3.5 text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Bizimle Tanışın
            <span aria-hidden>→</span>
          </a>
        </div>
        <div className="order-1 lg:order-2 relative aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            src={images.about}
            alt="Güler Ahşap Yapı atölyesi"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

type ModelOption = { slug: string; name: string; area: string; layout: string };

function Contact({ modelOptions }: { modelOptions: ModelOption[] }) {
  return (
    <section id="iletisim" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            İletişim
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl font-medium leading-tight tracking-tight">
            Projenizi birlikte hayata geçirelim.
          </h2>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            Hayalinizdeki ahşap evi, bungalovu ya da pergolayı anlatın — alanı
            birlikte gezelim, doğru çözümü birlikte tasarlayalım.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <ContactForm modelOptions={modelOptions} />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <ContactCard
              label="Telefon"
              value={site.phone}
              href={site.phoneHref}
            />
            <ContactCard
              label="WhatsApp"
              value="Aynı gün dönüş"
              href={whatsappLink()}
              external
            />
            <ContactCard
              label="E-posta"
              value={site.email}
              href={`mailto:${site.email}`}
            />
            <ContactCard
              label="Adres"
              value={site.address}
              href={site.mapsLink}
              external
            />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-surface">
              <iframe
                title="Güler Ahşap Yapı konum"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale-[20%]"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <div className="text-xs uppercase tracking-[0.2em] text-muted">
        {label}
      </div>
      <div className="mt-2 font-serif text-xl text-foreground">{value}</div>
    </>
  );
  const cls =
    "block rounded-2xl border border-border bg-surface p-6 hover:border-accent/40 transition-colors";
  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {inner}
      </a>
    );
  }
  return <div className={cls}>{inner}</div>;
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.3em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

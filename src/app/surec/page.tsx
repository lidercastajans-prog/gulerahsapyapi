import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProcessSteps } from "@/lib/fetchers";
import { warranty } from "@/lib/process";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Yapı Süreci",
  description:
    "İlk görüşmeden teslime: 5 adımlı anahtar teslim ahşap yapı sürecimiz. Her aşamada neye dikkat ediyor, sizden ne bekliyoruz?",
  alternates: { canonical: "/surec" },
};

export default async function SurecPage() {
  const processSteps = await getProcessSteps();
  return (
    <>
      <Header />
      <main id="main" className="flex flex-col">
        <section className="pt-20 pb-12 lg:pt-28 lg:pb-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Yapı Süreci
            </p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight max-w-4xl">
              İlk görüşmeden teslime, beş adımda.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-foreground/75 leading-relaxed">
              Anahtar teslim çalışıyoruz — yani tasarım, üretim, montaj ve
              teslim sonrası bakım tek elden bizde. Hangi aşamada ne yaptığımızı
              ve sizden ne istediğimizi şeffafça paylaşıyoruz.
            </p>
            <div className="mt-8 inline-flex flex-wrap gap-x-6 gap-y-2 rounded-2xl border border-border bg-surface px-6 py-4 text-sm text-foreground/85">
              <span>
                <strong className="text-accent">Toplam süre:</strong> 9-21 hafta
              </span>
              <span className="text-muted">·</span>
              <span>Modele ve mevsime göre değişir</span>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <ol className="space-y-16 lg:space-y-24">
              {processSteps.map((step, i) => (
                <li
                  key={step.number}
                  className="grid gap-8 lg:grid-cols-12 lg:gap-12"
                >
                  <div className="lg:col-span-4">
                    <div
                      className="font-serif text-7xl md:text-8xl font-medium text-accent/30 leading-none"
                      aria-hidden
                    >
                      {step.number}
                    </div>
                    <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium tracking-tight">
                      {step.title}
                    </h2>
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-accent">
                      {step.duration}
                    </p>
                    <p className="mt-5 text-lg text-foreground/80 leading-relaxed lg:max-w-sm">
                      {step.description}
                    </p>
                  </div>
                  <div className="lg:col-span-8 grid gap-5 sm:grid-cols-2">
                    <ChecklistCard
                      title="Bizim sorumluluğumuz"
                      items={step.weCheck}
                      tone="solid"
                    />
                    <ChecklistCard
                      title="Sizden beklediğimiz"
                      items={step.weNeed}
                      tone="outline"
                    />
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="lg:col-span-12 border-b border-border" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">
                Garanti & Bakım
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
                Teslim, ilişkinin sonu değil başlangıcı.
              </h2>
              <p className="mt-5 text-lg text-foreground/80 leading-relaxed">
                Anahtar teslimden sonra da yanınızdayız. Garanti kapsamımız ve
                bakım takvimi her teslim ile birlikte belge olarak teslim edilir.
              </p>
            </div>
            <ul className="lg:col-span-7 grid gap-4">
              <WarrantyRow label="Yapısal" value={warranty.structural} />
              <WarrantyRow label="Kaplama" value={warranty.finishing} />
              <WarrantyRow label="Donanım" value={warranty.appliances} />
              <WarrantyRow label="Teslim sonrası" value={warranty.postHandover} />
            </ul>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
              Süreç netse, sıra ilk görüşmeye geldi.
            </h2>
            <p className="mt-5 text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Bir telefon ya da WhatsApp mesajı yeterli. Aynı gün içinde
              dönüyoruz; ilk keşif görüşmesi ücretsiz.
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
                href={whatsappLink("Merhaba, anahtar teslim ahşap yapı süreci hakkında bilgi almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 text-foreground px-7 py-3.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
              >
                WhatsApp'tan Yazın
              </a>
              <Link
                href="/modeller"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 text-foreground px-7 py-3.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
              >
                Modelleri İnceleyin →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ChecklistCard({
  title,
  items,
  tone,
}: {
  title: string;
  items: readonly string[];
  tone: "solid" | "outline";
}) {
  const wrap =
    tone === "solid"
      ? "rounded-2xl bg-foreground text-background p-6 lg:p-7"
      : "rounded-2xl border border-border bg-surface p-6 lg:p-7";
  const heading =
    tone === "solid"
      ? "text-xs uppercase tracking-[0.3em] text-background/70"
      : "text-xs uppercase tracking-[0.3em] text-accent";
  const text =
    tone === "solid" ? "text-background/90" : "text-foreground/85";
  const dot =
    tone === "solid" ? "bg-accent-soft" : "bg-accent";
  return (
    <div className={wrap}>
      <p className={heading}>{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className={`flex gap-3 leading-relaxed ${text}`}>
            <span className={`flex-none mt-2.5 w-1.5 h-1.5 rounded-full ${dot}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WarrantyRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex flex-col sm:flex-row gap-1 sm:gap-6 sm:items-baseline rounded-2xl border border-border bg-background p-5 lg:p-6">
      <span className="text-xs uppercase tracking-[0.2em] text-accent sm:w-32 flex-none">
        {label}
      </span>
      <span className="text-foreground/85 leading-relaxed">{value}</span>
    </li>
  );
}

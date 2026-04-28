# Yapılacaklar

Bu dosya bir sonraki iterasyonda ele alınacak işleri tutar. Her madde
küçük bir ön araştırma + uygulama olarak ayrı oturumda bitirilebilecek
boyuttadır.

---

## 1. Gerçek model verilerinin girilmesi

**Mevcut durum:** [src/lib/models.ts](src/lib/models.ts) içinde 9 model
örnek isim ve özelliklerle dolu (Adrasan 24, Olympos 28, Phaselis 90,
Likya 120 vb.). Fiyatlar "Talep üzerine" olarak işaretli.

**Yapılacak:** Firma kataloğundan gerçek model adları, m², plan, fiyat
aralığı, standart özellikler ve dahil olanlar listesi çekilip
`models.ts` güncellenecek. Görseller ve kategori dağılımı korunabilir.

**Etkilediği:** [src/app/modeller/page.tsx](src/app/modeller/page.tsx),
[src/app/modeller/\[slug\]/page.tsx](src/app/modeller/%5Bslug%5D/page.tsx),
SEO meta etiketleri.

---

## 2. Detaylı iletişim formu (Server Action)

**Yapılacak:** İletişim bölümüne ad, telefon, e-posta, ilgilenilen model
(opsiyonel select), mesaj alanlı bir form ekle. Next.js 16 Server Action
ile gönderim, dönüşte teşekkür ekranı.

**Karar gereken:**
- E-posta servisi: Resend / SendGrid / SMTP (Nodemailer)?
- Veriyi sadece e-posta olarak mı yoksa bir tabloya/Google Sheets'e mi
  yazıyoruz?
- Spam koruması: honeypot + rate limit yeterli mi, yoksa Cloudflare
  Turnstile / hCaptcha mı?

**Dosyalar:** `src/app/actions/contact.ts` (Server Action),
`src/components/ContactForm.tsx` (client form), iletişim bölümü
yeniden düzenlenecek.

---

## 3. SEO altyapısı (`sitemap.ts` + `robots.ts`)

**Yapılacak:** Tüm sayfaları içeren dinamik sitemap ve robots dosyası
ekle. `metadataBase` tanımla, `openGraph` ve `twitter` kart varsayılanlarını
`layout.tsx`'e koy. Her model ve blog detayında özel OG görsel kullan
(zaten `generateMetadata` hazırlandı, sadece `metadataBase` eksik).

**Dosyalar:** `src/app/sitemap.ts`, `src/app/robots.ts`,
[src/app/layout.tsx](src/app/layout.tsx).

**Not:** Domain belli olunca (`gulerahsapyapi.com`'a deploy mi, başka
domain mi) `metadataBase: new URL("https://...")` set edilmeli.

---

## 4. Galeri / detay görselleri için lightbox

**Yapılacak:**
- Anasayfa galerisinde tıklayınca büyütme
- Model detay sayfasındaki 4'lü görsel düzeninde herhangi bir görsele
  tıklayınca tüm `model.gallery` üzerinde gezilebilen carousel/lightbox

**Karar gereken:** Üçüncü parti kütüphane (`yet-another-react-lightbox`,
`PhotoSwipe`) mı yoksa Tailwind + React state ile basit kendi modal'ımız
mı? Bağımlılığı sevmiyorsak ikincisi 60-80 satırla halledilir.

**Dosyalar:** `src/components/Lightbox.tsx` (yeni),
[src/app/modeller/\[slug\]/page.tsx](src/app/modeller/%5Bslug%5D/page.tsx)
ve [src/app/page.tsx](src/app/page.tsx) içinde Gallery section.

---

## 5. Instagram / sosyal feed

**Yapılacak:** İletişim ya da hakkımızda yakınında bir "Instagram'da bizi
takip edin" şeridi: 6-9 gönderi karesi + Instagram link.

**Karar gereken:**
- Instagram Basic Display API (kullanıcı tokeni gerektirir, yenilenmesi
  zahmetli) mi,
- Yoksa elle seçilmiş ~9 görseli `src/lib/social.ts` altında tutup
  manuel mi güncelliyoruz?
- Resmi hesabın URL'si: `@gulerahsapyapi` mi, başka mı?

Manuel yaklaşım çok daha pratik; ayda bir güncellense yeter. API'ye
ileride döneriz.

**Dosyalar:** `src/components/SocialStrip.tsx`, `src/lib/social.ts`,
[src/lib/site.ts](src/lib/site.ts)'e sosyal linkler.

---

## 6. Çok dilli destek (TR / EN)

**Yapılacak:** Site varsayılan TR, ek olarak EN. Header'da dil
toggle, URL yapısı `/en/...` ya da `/tr/...`.

**Karar gereken:**
- `next-intl` mi (modern, App Router uyumlu),
- yoksa tek dosyalık basit bir context + `t()` mı (sadece 2 dil var)?
- EN içeriği biz mi yazacağız, kullanıcı mı verecek?

**Etki:** Tüm metinleri sözlük dosyalarına taşımak gerekir
([src/lib/site.ts](src/lib/site.ts), [src/lib/models.ts](src/lib/models.ts),
[src/lib/posts.ts](src/lib/posts.ts), her sayfa).
Bu büyük bir refactor; küçük adımlarla yapılmalı.

---

## 7. Schema.org JSON-LD

**Yapılacak:** Yapı verisi etiketleriyle Google'ın "rich result" çıkarması:
- `LocalBusiness` — `layout.tsx` üzerinden tüm sayfalarda
- `Product` — her model detayında (ad, görsel, kategori, marka)
- `Article` — her blog yazısında (yazar, tarih, görsel)
- `BreadcrumbList` — model detay breadcrumbs ile

**Yaklaşım:** `<script type="application/ld+json">` ile Server Component
içinden inject. Kütüphane gerektirmez. Reusable bir `<JsonLd data={...}/>`
component yazılır, ilgili sayfalarda çağrılır.

**Dosyalar:** `src/components/JsonLd.tsx`,
[src/app/layout.tsx](src/app/layout.tsx),
[src/app/modeller/\[slug\]/page.tsx](src/app/modeller/%5Bslug%5D/page.tsx),
[src/app/blog/\[slug\]/page.tsx](src/app/blog/%5Bslug%5D/page.tsx).

**Bağlı olduğu:** #3 (metadataBase ve domain) — birlikte yapılması mantıklı.

---

## 8. Mobil sticky aksiyon barı

**Yapılacak:** Mobilde sayfanın altına sabitlenen 3 düğmeli bar:
**Ara · WhatsApp · Yol tarifi**. Telefon trafiğinin yüksek olacağı
düşünülünce dönüşüm açısından kritik.

**Detay:**
- Sadece `lg:hidden` ile mobilde görünür
- Hero'da görünmez, scroll başladıktan sonra fade-in (opsiyonel)
- WhatsApp yüzen butonuyla çakışmamalı — bar varken yüzen buton mobilde
  gizlenir, sağ alttan çıkar

**Dosyalar:** `src/components/MobileActionBar.tsx`,
[src/app/layout.tsx](src/app/layout.tsx),
[src/components/WhatsAppButton.tsx](src/components/WhatsAppButton.tsx)
(mobil koşulu).

---

## 9. SSS sayfası + Ahşap rehberi

**Yapılacak — iki ayrı sayfa:**

**`/sss`** — Mevzuat (imar, ruhsat), garanti süresi, ödeme planı, montaj
süresi, eğimli arazi, deniz kıyısı uygulama, bakım periyodu vb. 15-20
soru. Accordion açılır-kapanır arayüz.

**`/rehber`** — Ahşap terimleri sözlüğü: masif vs lamine, emprenye türleri,
nem oranı, çatı detayları gibi. SEO için altın madeni; uzun kuyruk
arama trafiği yakalar.

**Karar gereken:** Soruları biz mi yazacağız, firma mı verecek? Sektör
deneyiminden 20 standart sorunu biz taslaklayıp firmaya onaylatabiliriz.

**Dosyalar:** `src/app/sss/page.tsx`, `src/app/rehber/page.tsx`,
`src/lib/faqs.ts`, `src/lib/glossary.ts`. Header navigasyonuna eklenir.

---

## 10. Müşteri referansları

**Yapılacak:** `/referanslar` sayfası ve anasayfada kısa bir öne çıkan
şerit. Her referans:
- 5 yıldız + isim + şehir + proje türü (örn. "Ali K. — Kemer, Sahil 35")
- Kısa metin (1-2 cümle)
- Opsiyonel: müşteri foto, proje foto, video referans

**Karar gereken:** Gerçek müşteri verisi nereden gelecek? Google
yorumları varsa import edilebilir; yoksa firma 8-10 kayıt verir, biz
sayfaya işleriz.

**Dosyalar:** `src/app/referanslar/page.tsx`, `src/lib/testimonials.ts`,
[src/app/page.tsx](src/app/page.tsx) anasayfaya kısa şerit.

---

## 11. Atölye / Ekip sayfası

**Yapılacak:** `/atolye` (ya da `/ekip`) — "Bizi tanıyın". İçeriği:
- Atölyeden ortam fotoğrafları (talaş, makineler, prototipler)
- Ekip üyeleri: portre + ad + rol + kısa bio
- Üretim sürecini anlatan 2-3 paragraf
- "Atölyeyi gezmek ister misiniz?" CTA

**Karar gereken:** Ekip portreleri var mı, çekilecek mi? Yoksa ekip
sayısı + tecrübe gibi anonim metrikler de yeterli olur.

**Dosyalar:** `src/app/atolye/page.tsx`, `src/lib/team.ts`. Header
navigasyonuna eklenir.

---

## 12. Yapı süreci sayfası

**Yapılacak:** `/surec` — anahtar teslim sürecini şeffaflaştıran 5 adımlı
zaman çizelgesi:
1. **Brief & keşif** — saha ziyareti, ihtiyaç analizi (1-2 hafta)
2. **Tasarım & teklif** — 3D görsel, plan, kesin teklif (2-3 hafta)
3. **Üretim** — atölyede ahşap kesim ve hazırlık (4-8 hafta, modele göre)
4. **Montaj** — sahaya nakliye + kurulum (1-3 hafta)
5. **Teslim & garanti** — kullanım eğitimi, bakım takvimi, garanti belgesi

**Detay:** Her adımda gün aralığı, neye dikkat ettiğimiz, müşteriden ne
beklediğimiz net yazılır.

**Dosyalar:** `src/app/surec/page.tsx`, [src/lib/site.ts](src/lib/site.ts)
veya yeni `src/lib/process.ts`. Anasayfada kısa özet bir bölüm de eklenebilir.

---

## 13. CMS bağlama

**Yapılacak:** Şu an statik olarak [src/lib](src/lib) altında tutulan tüm
veri (modeller, blog yazıları, SSS, ekip, referanslar, site bilgileri)
müşterinin kod yazmadan güncelleyebileceği bir CMS'e taşınır.

**Karar gereken (önemli):**
- **Sanity** — güçlü, App Router uyumlu, ücretsiz tier yeterli, draft
  preview mevcut. Öğrenme eğrisi var.
- **Notion DB** — kullanıcı zaten biliyorsa şahane, ama zayıf görsel
  yönetimi.
- **Google Sheets** — en basit, ama sadece düz metin; görsel yönetimi yok.
- **Payload CSM (self-hosted)** — kontrol elimizde ama hosting yükü.

**Etki:** Tüm `src/lib/*.ts` fetcher haline gelir; sayfalar `await
getModels()` gibi çağrılar yapar. Build sırasında ISR / `revalidate`
stratejisi kararlaştırılmalı.

Bu en yüksek efor maddesidir; #1, #9, #10, #11, #12 yapıldıktan sonra
toplu taşınması mantıklı (data shape sabitlenince).

---

## 14. A11y (erişilebilirlik) geçişi

**Yapılacak:**
- Lighthouse + axe DevTools denetimi, 95+ skor hedefi
- Kontrast oranları (özellikle `text-foreground/70` benzeri yarı saydam
  metinler) WCAG AA'ya uygun mu kontrolü
- Klavye gezinimi: tab sırası, focus ring'leri, skip-to-content link
- Tüm interaktif öğelerde anlamlı `aria-label`
- Resimlerde anlamlı `alt` (şu an genelinde tamam, gözden geçirilecek)
- WhatsApp / hamburger gibi ikon-only butonlarda erişilebilir etiket

**Dosyalar:** Tüm component'leri tarayan bir audit; düzeltmeler
component'lerin kendi içinde.

**Not:** Deploy öncesi mutlaka geçilmeli — sonradan refactor zor olur.

---

## Sıra önerisi

**Faz 1 — Deploy hazırlığı (kritik, küçük efor):**
1. **#1** Gerçek model verileri (kullanıcı verisi gelince)
2. **#3** SEO temeli (sitemap + robots + metadataBase)
3. **#7** Schema.org JSON-LD (#3 ile birlikte)
4. **#14** A11y geçişi (deploy öncesi)

**Faz 2 — Dönüşüm artışı (hızlı kazanç):**
5. **#8** Mobil aksiyon barı
6. **#10** Müşteri referansları
7. **#2** İletişim formu (Server Action)

**Faz 3 — İçerik derinleştirme:**
8. **#11** Atölye / ekip sayfası
9. **#12** Yapı süreci sayfası
10. **#9** SSS + ahşap rehberi
11. **#4** Lightbox

**Faz 4 — Büyük yatırımlar (içerik sabitlendikten sonra):**
12. **#13** CMS bağlama (önceki maddeler veri şeklini sabitler)
13. **#5** Instagram (manuel başlangıçta)
14. **#6** Çok dilli destek (en büyük iş, en sona)

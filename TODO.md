# Yapılacaklar

Bu dosya bir sonraki iterasyonda ele alınacak işleri tutar. Her madde
küçük bir ön araştırma + uygulama olarak ayrı oturumda bitirilebilecek
boyuttadır.

---

## ✅ Tamamlananlar

| # | Başlık | Dosyalar |
|---|--------|----------|
| 2 | İletişim formu (Server Action) | `actions/contact.ts`, `ContactForm.tsx` |
| 3 | SEO altyapısı | `sitemap.ts`, `robots.ts`, `layout.tsx` |
| 4 | Galeri lightbox | `Lightbox.tsx`, `ModelGallery.tsx`, `HomeGallery.tsx` |
| 5 | Instagram / sosyal feed | `social.ts`, `SocialStrip.tsx`, anasayfa + footer |
| 7 | Schema.org JSON-LD | `JsonLd.tsx`, `schema.ts` |
| 8 | Mobil sticky aksiyon barı | `MobileActionBar.tsx` |
| 9 | SSS + Ahşap rehberi | `/sss`, `/rehber`, `faqs.ts`, `glossary.ts` |
| 10 | Müşteri referansları | `/referanslar`, `testimonials.ts` |
| 11 | Atölye sayfası | `/atolye` |
| 12 | Yapı süreci sayfası | `/surec`, `process.ts` |
| 13 | CMS bağlama (Sanity) | Sanity Studio `/admin`, `fetchers.ts`, tüm schema'lar |
| 14 | A11y geçişi | Skip-to-content, aria-label'lar, focus ring'ler |

---

## 1. Gerçek model verilerinin girilmesi

**Mevcut durum:** [src/lib/models.ts](src/lib/models.ts) içinde 9 model
örnek isim ve özelliklerle dolu (Adrasan 24, Olympos 28, Phaselis 90,
Likya 120 vb.). Fiyatlar "Talep üzerine" olarak işaretli.

**Yapılacak:** Firma kataloğundan gerçek model adları, m², plan, fiyat
aralığı, standart özellikler ve dahil olanlar listesi çekilip
`models.ts` güncellenecek. Görseller ve kategori dağılımı korunabilir.

**Bekleme sebebi:** Firma gerçek katalog verilerini henüz iletmedi.

**Etkilediği:** [src/app/modeller/page.tsx](src/app/modeller/page.tsx),
[src/app/modeller/\[slug\]/page.tsx](src/app/modeller/%5Bslug%5D/page.tsx),
SEO meta etiketleri.

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

**Not:** Tüm diğer maddeler tamamlandığı için bu artık ele alınabilir.

---

## Sıra önerisi

1. **#1** Gerçek model verileri (kullanıcı verisi gelince)
2. **#6** Çok dilli destek (en büyük iş)

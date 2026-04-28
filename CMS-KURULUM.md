# Sanity CMS Kurulumu

Bu site, içerik yönetimi için **Sanity** kullanır. Sanity ücretsiz tier'ında bu
proje için fazlasıyla yeterli (ayda 100K API isteği, 5GB asset bandwidth).

İçerik tarafı:
- **Modeller** (tiny house / ahşap ev / bungalov)
- **Blog yazıları**
- **Müşteri referansları**
- **SSS soruları**
- **Sözlük (rehber)**
- **Yapı süreci adımları**
- **Anasayfa galeri görselleri**

Hepsi `/admin` rotasındaki Sanity Studio panelinden yönetilir. Site, kod
değişikliği olmadan içerik güncellendikçe yenilenir.

---

## 1. Sanity hesabı ve proje oluştur (5 dakika)

1. https://www.sanity.io/manage adresine git → **Sign up free** (Google ile
   girebilirsin)
2. **Create new project** → ad: `Güler Ahşap Yapı`
3. Project Settings → **API** sekmesini aç
4. Şu üç değeri not et:
   - **Project ID** (örn. `abc12def`)
   - **Dataset name** (varsayılan `production`)
5. Aynı sayfada **Tokens** bölümüne in → **Add API token**
   - Name: `seed-script`
   - Permission: **Editor**
   - **Save**
   - Açılan tokeni hemen kopyala (bir daha gösterilmez!)

## 2. CORS izni ekle

Aynı **API** sayfasında **CORS origins** bölümü → **Add CORS origin**
- Origin: `http://localhost:3000` (geliştirme için)
- Allow credentials: ✓
- **Save**

Site canlıya çıkınca aynı yere `https://gulerahsapyapi.com.tr` da eklenmeli.

## 3. Yerel ortam değişkenleri

Proje kökünde `.env.local` dosyası oluştur (`.env.example`'ı kopyalayabilirsin):

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=abc12def
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
SANITY_API_WRITE_TOKEN=skNXXX...buraya tokeni yapıştır
```

> `.env.local` git'e commit edilmez, otomatik olarak `.gitignore`'da.

## 4. Mevcut veriyi Sanity'e taşı (tek seferlik)

```bash
npm run seed
```

Bu komut:
- Kategorileri, modelleri, blog yazılarını, referansları, SSS gruplarını,
  sözlük terimlerini, süreç adımlarını ve galeri görsellerini Sanity'e yükler
- Görselleri `i0.wp.com` üzerinden indirir, Sanity asset olarak yükler
- 5-10 dakika sürer (görsel adedine göre)

İşlem bitince `https://[PROJECT_ID].sanity.studio/desk` veya yerel
`http://localhost:3000/admin` adresinden içeriği görebilirsin.

## 5. Studio kullanımı

Yerel geliştirme: `npm run dev` çalışıyorken `http://localhost:3000/admin`
adresine git, Sanity hesabınla oturum aç.

İçerik düzenle → **Publish** → site otomatik 60 saniye içinde günceller
(Next.js ISR + tag tabanlı revalidation).

### Yeni model nasıl eklenir?

1. `/admin` → **Model** → **Create new**
2. Tüm alanları doldur (yıldızlı olanlar zorunlu)
3. Görsel(ler)i sürükle-bırakla yükle
4. Kategori seçmeyi unutma
5. **Publish** → site canlısında 30-60 saniye içinde görünür

### Yeni blog yazısı

1. `/admin` → **Blog Yazısı** → **Create new**
2. Başlık, slug (otomatik), kategori (etiket), içerik paragrafları
3. Kapak görselini yükle
4. **Publish**

### Müşteri yorumu eklemek

1. `/admin` → **Müşteri Yorumu** → **Create new**
2. Ad, şehir, proje türü, yıldız (1-5), yorum metni
3. "Anasayfada öne çıkar" işaretlersen anasayfa şeridinde de görünür
4. **Publish**

---

## 6. Studio'yu canlıda yayımla (opsiyonel)

İçerik yöneticileri site dışındaki bir Studio URL'i kullanmak isterse:

```bash
npm run sanity:deploy
```

Sanity, ücretsiz olarak `https://gulerahsap-yapi.sanity.studio` gibi bir URL
sağlar. Yine de site içindeki `/admin` rotası da çalışmaya devam eder.

---

## Sorun giderme

**"Sanity yapılandırılmamış" hatası:** `.env.local`'daki `NEXT_PUBLIC_SANITY_PROJECT_ID`
boş ya da yanlış. Sanity manage sayfasından doğru ID'yi kopyala.

**Studio'da CORS hatası:** Sanity manage > API > CORS origins'e
`http://localhost:3000`'i (ve canlı domaini) ekle.

**Seed script hatası:** `SANITY_API_WRITE_TOKEN` set değil ya da Editor
yetkisinde değil. Yeni bir token oluştur, izinleri kontrol et.

**İçerik güncellendi ama site eski içeriği gösteriyor:** Next.js'in cache
süresi 60 saniye. Beklemeden test için tarayıcıda hard reload (Ctrl+Shift+R).

---

## Sanity yoksa ne olur?

Site çökmesin diye `lib/fetchers.ts` Sanity'ye erişemediğinde otomatik olarak
**kod-tabanlı yedek veriye** düşer (`src/lib/models.ts`, `posts.ts`, vb.).
Yani siteyi geçici olarak Sanity'siz de ayağa kaldırabilirsiniz; bir geliştirici
kodda değişiklik yapar, build alır.

CMS'yi tamamen devre dışı bırakmak isterseniz `.env.local`'daki
`NEXT_PUBLIC_SANITY_PROJECT_ID`'yi silmek yeterli.

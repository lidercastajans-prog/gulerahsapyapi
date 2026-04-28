const wp = "https://i0.wp.com/gulerahsapyapi.com/wp-content/uploads";

export type Model = {
  slug: string;
  name: string;
  area: string;
  layout: string;
  bath: string;
  capacity: string;
  levels: string;
  deliveryTime: string;
  highlight: string;
  description: string;
  longDescription: string[];
  features: string[];
  includes: string[];
  options: string[];
  image: string;
  gallery: string[];
};

export type ModelCategory = {
  slug: "tiny-house" | "ahsap-ev" | "bungalov";
  title: string;
  intro: string;
  models: Model[];
};

export const categories: ModelCategory[] = [
  {
    slug: "tiny-house",
    title: "Tiny House Modelleri",
    intro:
      "Mobil ya da sabit kullanıma uygun, küçük alanda maksimum konfor sağlayan kompakt tiny house modelleri.",
    models: [
      {
        slug: "adrasan-24",
        name: "Adrasan 24",
        area: "24 m²",
        layout: "1+0",
        bath: "1 banyo",
        capacity: "2 kişi",
        levels: "Tek kat",
        deliveryTime: "5-7 hafta",
        highlight: "Tekerlekli şasi opsiyonu",
        description:
          "Tek kişilik veya çiftler için tasarlanmış, ısı yalıtımlı kompakt model. Mutfak, banyo ve oturma alanı bütünleşik kurguludur.",
        longDescription: [
          "Adrasan 24, tiny house yaşam tarzına ilk adım atanlar için tasarlandı. Tekerlekli şasi opsiyonu ile mevzuat avantajı sağlar; sabit temel üzerinde de uygulanabilir.",
          "İç planlama küçük metrekareyi en verimli şekilde değerlendirir: panoramik camlı oturma alanı gün ışığını içeri taşır, kompakt mutfak tam donanımlıdır, banyo standart ölçülerde tasarlanmıştır.",
        ],
        features: [
          "Çift cidarlı duvar konstrüksiyonu",
          "Yüksek yoğunluklu taş yünü yalıtım",
          "Çift cam ısıcamlı pencereler",
          "Yerden ısıtmaya hazır altyapı",
          "Emprenye edilmiş dış cephe",
        ],
        includes: [
          "Çelik şasi veya beton temel bağlantısı",
          "Standart elektrik ve sıhhi tesisat",
          "Banyo seramik ve vitrifiye",
          "Mutfak dolapları ve tezgâh",
          "Dış cephe ahşap kaplama ve emprenye",
        ],
        options: [
          "Tekerlekli şasi (mobil kullanım)",
          "Solar panel ve enerji depolama",
          "Klima üst yapısı",
          "Şömine entegrasyonu",
        ],
        image: `${wp}/2026/04/WhatsApp-Image-2026-04-11-at-23.26.07-1-576x1024.jpeg?ssl=1`,
        gallery: [
          `${wp}/2026/04/WhatsApp-Image-2026-04-11-at-23.26.07-1-576x1024.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-11-at-23.26.11-2-576x1024.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-11-at-23.26.14-576x1024.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-11-at-23.26.15-576x1024.jpeg?ssl=1`,
        ],
      },
      {
        slug: "olympos-28",
        name: "Olympos 28",
        area: "28 m²",
        layout: "1+1",
        bath: "1 banyo",
        capacity: "2-3 kişi",
        levels: "Tek kat + mezzanine",
        deliveryTime: "6-8 hafta",
        highlight: "Mezzanine yatak nişi",
        description:
          "Yüksek tavanlı, mezzanine yatak nişi ile geniş hisleri öne çıkaran model. Glamping ve tatil amaçlı kullanıma uygundur.",
        longDescription: [
          "Olympos 28, üst kotta yatak nişi ve alt kotta yaşam alanı kurgusuyla küçük metrekarede iki ayrı zon yaratır. Yüksek tavan, ahşabın doğal dokusunu öne çıkarır.",
          "Glamping işletmeleri için seri üretime uygun, butik kullanıcılar için kişiselleştirilebilir bir modeldir.",
        ],
        features: [
          "3.6 metre mahya yüksekliği",
          "Mezzanine merdiven ve korkuluk dahil",
          "Geniş cephe pencereler",
          "Tam donanımlı kompakt mutfak",
          "Çift yönlü hava sirkülasyonu",
        ],
        includes: [
          "Beton temel bağlantısı",
          "İç ahşap lambri kaplama",
          "Banyo seramik ve vitrifiye",
          "Standart kapı ve pencere donanımı",
          "Dış cephe ahşap ve emprenye",
        ],
        options: [
          "Mezzanine altı dolap çözümü",
          "Klima üst yapısı",
          "Solar panel sistemi",
          "Outdoor sıcak duş",
        ],
        image: `${wp}/2026/04/WhatsApp-Image-2026-04-11-at-23.26.09-576x1024.jpeg?ssl=1`,
        gallery: [
          `${wp}/2026/04/WhatsApp-Image-2026-04-11-at-23.26.09-576x1024.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-11-at-23.26.11-1-576x1024.jpeg?ssl=1`,
          `${wp}/2026/04/asdaasd-8-682x1024.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.22ad-1-768x1024.jpeg?ssl=1`,
        ],
      },
      {
        slug: "cirali-32",
        name: "Çıralı 32",
        area: "32 m²",
        layout: "1+1",
        bath: "1 banyo",
        capacity: "3-4 kişi",
        levels: "Tek kat + veranda",
        deliveryTime: "6-8 hafta",
        highlight: "6 m² ahşap veranda",
        description:
          "Önünde 6 m² ahşap veranda bulunan, dış mekan kullanımını ön plana çıkaran tiny house modeli. Yıl boyu kullanıma uygundur.",
        longDescription: [
          "Çıralı 32, küçük bir tiny house olmasına rağmen 6 m²'lik ahşap verandasıyla yaşam alanını dışarı taşır. Akdeniz ikliminde dört mevsim kullanıma uygundur.",
          "Çiftler ve küçük ailelerin tatil evi olarak tercih edebileceği, kompakt fakat ferah hisli bir modeldir.",
        ],
        features: [
          "6 m² ahşap veranda dahil",
          "Geniş Fransız balkon kapı",
          "Banyo ayrı bölünmüş",
          "L şekilli mutfak çözümü",
          "Ahşap döşeme tabanlı veranda",
        ],
        includes: [
          "Beton temel veya çelik şasi",
          "Veranda korkuluk ve döşeme",
          "Mutfak ankastre altyapısı",
          "Banyo seramik, duş ve klozet",
          "Dış cephe emprenye + son kat",
        ],
        options: [
          "Veranda üstü pergola",
          "Outdoor mutfak entegrasyonu",
          "Otomasyon sistemi",
          "Solar panel sistemi",
        ],
        image: `${wp}/2026/04/WhatsApp-Image-2026-04-11-at-23.26.13-1-576x1024.jpeg?ssl=1`,
        gallery: [
          `${wp}/2026/04/WhatsApp-Image-2026-04-11-at-23.26.13-1-576x1024.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-11-at-23.26.13-1024x576.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-11-at-23.26.15-1-1024x576.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.22asdads-1-576x1024.jpeg?ssl=1`,
        ],
      },
    ],
  },
  {
    slug: "ahsap-ev",
    title: "Ahşap Ev Modelleri",
    intro:
      "Aile yaşamına uygun, tam donanımlı, yalıtım ve detayları en yüksek standartta uygulanan ahşap ev modelleri.",
    models: [
      {
        slug: "kemer-65",
        name: "Kemer 65",
        area: "65 m²",
        layout: "2+1",
        bath: "1 banyo",
        capacity: "4 kişi",
        levels: "Tek kat",
        deliveryTime: "10-12 hafta",
        highlight: "Tek kat, geniş salon",
        description:
          "İki yatak odası, ferah salon ve Amerikan mutfak ile küçük ailelere uygun tek katlı model. Şömine entegrasyonu opsiyoneldir.",
        longDescription: [
          "Kemer 65, küçük ailelerin yıl boyu yaşaması için tasarlanmış, tam yalıtımlı bir ahşap evdir. Tek kat plan akışı, açık mutfak ve geniş salonla doğal ışığı maksimize eder.",
          "Standart konfigürasyonda iki yatak odası, bir banyo, salon ve mutfak içerir. Yan cephede şömine ya da soba için hazırlık yapılır.",
        ],
        features: [
          "Çift cidarlı tam yalıtım",
          "Çift cam ısıcamlı PVC veya ahşap pencereler",
          "İç ahşap lambri tavan",
          "Geniş veranda altyapısı",
          "Ebeveyn odası giysi odası nişi",
        ],
        includes: [
          "Komple beton temel ve izolasyon",
          "Banyo + mutfak seramik ve vitrifiye",
          "Mutfak dolapları + tezgâh",
          "Standart elektrik panosu ve dağıtım",
          "Dış cephe emprenye ve son kat",
        ],
        options: [
          "Şömine veya soba sistemi",
          "Yerden ısıtma",
          "Çatı katı yapım opsiyonu",
          "Garaj veya kapalı park yeri",
        ],
        image: `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.18-1-1024x1024.jpeg?ssl=1`,
        gallery: [
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.18-1-1024x1024.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.18asda-1-1024x1024.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.18ss-1-1024x1024.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.23asd-1-1024x768.jpeg?ssl=1`,
        ],
      },
      {
        slug: "phaselis-90",
        name: "Phaselis 90",
        area: "90 m²",
        layout: "3+1",
        bath: "2 banyo",
        capacity: "5-6 kişi",
        levels: "Tek kat",
        deliveryTime: "12-14 hafta",
        highlight: "Master ebeveyn banyolu",
        description:
          "Master ebeveyn yatak odası, iki çocuk odası ve geniş yaşam alanı sunan, dört kişilik aileler için ideal model.",
        longDescription: [
          "Phaselis 90, master ebeveyn yatak odasında ayrı banyo ve giysi odasıyla genişletilmiş bir aile evidir. Geniş salon ve açık mutfak ile sosyal yaşam alanı ön plana çıkar.",
          "Yıl boyu yaşam ve tatil kullanımına uygun standartlarda donatılır.",
        ],
        features: [
          "Master ebeveyn banyo + giysi odası",
          "Açık plan salon-mutfak",
          "Çift teraslı plan opsiyonu",
          "Geniş cephe pencereler",
          "Çift cidarlı tam yalıtım",
        ],
        includes: [
          "Komple beton temel + izolasyon",
          "İki banyo seramik ve vitrifiye",
          "Mutfak dolap + tezgâh + bataryalar",
          "Standart elektrik ve sıhhi tesisat",
          "Dış cephe emprenye ve son kat",
        ],
        options: [
          "Yerden ısıtma sistemi",
          "Şömine veya pelet soba",
          "Klima merkezi sistem",
          "Solar panel + boyler",
          "Smart home otomasyonu",
        ],
        image: `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.18asda-1-1024x1024.jpeg?ssl=1`,
        gallery: [
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.18asda-1-1024x1024.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.18adsasd-1-1024x1024.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.19-1-1024x1024.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.23gds-1-768x1024.jpeg?ssl=1`,
        ],
      },
      {
        slug: "likya-120",
        name: "Likya 120",
        area: "120 m²",
        layout: "3+1",
        bath: "2 banyo",
        capacity: "6 kişi",
        levels: "Çift kat",
        deliveryTime: "14-18 hafta",
        highlight: "Çift katlı, yüksek tavan",
        description:
          "Çift katlı, alt katta yaşam alanları, üst katta yatak odaları olan, masif ahşap konstrüksiyonlu butik villa modeli.",
        longDescription: [
          "Likya 120, ahşap villa konfigürasyonumuzun amiral gemisidir. Alt katta salon, mutfak, misafir wc ve teras; üst katta üç yatak odası ve iki banyo bulunur.",
          "Yüksek tavanlı salon, ahşap tavan kirişlerini açıkta bırakan tasarımıyla mimari bir karaktere sahiptir.",
        ],
        features: [
          "Çift kat, yüksek tavanlı salon",
          "Açık ahşap kiriş tavan",
          "Master ebeveyn banyolu",
          "Üst kat geniş hol",
          "Çift teras + Fransız balkon",
        ],
        includes: [
          "Komple beton temel + drenaj",
          "Tam ahşap konstrüksiyon",
          "İç ve dış cephe ahşap kaplama",
          "İki banyo + bir wc ankastre",
          "Mutfak dolap ve tezgâh",
        ],
        options: [
          "Yerden ısıtma sistemi",
          "Şömine entegrasyonu",
          "Smart home altyapısı",
          "Solar panel sistemi",
          "Havuz ve peyzaj entegrasyonu",
        ],
        image: `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.19-1-1024x1024.jpeg?ssl=1`,
        gallery: [
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.19-1-1024x1024.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.18ss-1-1024x1024.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-03-27-at-19.39.14asdasddasd-1-1024x1024.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-03-27-at-19.39.13-4-1024x682.jpeg?ssl=1`,
        ],
      },
    ],
  },
  {
    slug: "bungalov",
    title: "Bungalov Modelleri",
    intro:
      "Tatil köyleri, glamping işletmeleri ve özel arazi sahipleri için tasarlanmış dayanıklı bungalov modelleri.",
    models: [
      {
        slug: "sahil-35",
        name: "Sahil 35",
        area: "35 m²",
        layout: "1+1",
        bath: "1 banyo",
        capacity: "2-3 kişi",
        levels: "Tek kat",
        deliveryTime: "7-9 hafta",
        highlight: "Deniz manzarasına uygun",
        description:
          "Tatil köyleri için seri üretime uygun, denize ve doğaya bakan cepheli, hızlı kurulumlu bungalov modeli.",
        longDescription: [
          "Sahil 35, butik tatil işletmeleri için seri üretime uygun bir bungalovdur. Standart konfigürasyonu hızlı kurulumu mümkün kılar.",
          "Manzaraya bakan tarafı tamamen camla kaplıdır; arka cephe servis ve banyo bölgesi olarak konumlanır.",
        ],
        features: [
          "Manzara cephesi tam cam",
          "Hızlı kurulum (4-6 hafta)",
          "Tuza dayanıklı emprenye",
          "Kompakt servis nişi",
          "Önünde teras altyapısı",
        ],
        includes: [
          "Beton kaide veya çelik şasi",
          "Tuza dayanıklı dış cephe son katı",
          "Banyo + mutfak nişi",
          "Sıhhi tesisat ve elektrik",
          "İç ahşap kaplama",
        ],
        options: [
          "Önünde ahşap teras",
          "Outdoor duş",
          "Klima sistemi",
          "Pergola eklentisi",
        ],
        image: `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.10adsads-1-1024x768.jpeg?ssl=1`,
        gallery: [
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.10adsads-1-1024x768.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.25-1-1024x682.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.26-1-1024x682.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-03-27-at-19.39.14asdas-2-1024x684.jpeg?ssl=1`,
        ],
      },
      {
        slug: "orman-45",
        name: "Orman 45",
        area: "45 m²",
        layout: "2+1",
        bath: "1 banyo",
        capacity: "4 kişi",
        levels: "Tek kat (yüksek temel)",
        deliveryTime: "8-10 hafta",
        highlight: "Eğimli arazi uyumu",
        description:
          "Yüksek temel ile eğimli arazilerde de kurulabilen, çift yatak odalı, glamping kullanımına uygun model.",
        longDescription: [
          "Orman 45, eğimli arazilerde alt yapıyı zorlamadan kurulabilen, yüksek temelli bir bungalovdur. İki ayrı yatak odası, sosyal alan ve banyodan oluşur.",
          "Tatil işletmelerinde dört kişilik konaklamalar için optimize edilmiştir.",
        ],
        features: [
          "Yüksek temel (eğim uyumlu)",
          "İki ayrı yatak odası",
          "Açık plan salon-mutfak",
          "Genişletilmiş yalıtım",
          "Outdoor merdiven entegrasyonu",
        ],
        includes: [
          "Çelik kolon yüksek temel",
          "Komple ahşap dış cephe",
          "Banyo seramik ve vitrifiye",
          "Mutfak nişi",
          "Elektrik ve sıhhi tesisat",
        ],
        options: [
          "Çift seviyeli teras",
          "Pergola eklentisi",
          "Yerden ısıtma altyapısı",
          "Klima sistemi",
        ],
        image: `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.17sss-1-1024x768.jpeg?ssl=1`,
        gallery: [
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.17sss-1-1024x768.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.14sss-1-768x1024.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.22ddsa-1-768x1024.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-dasd-1-768x1024.jpeg?ssl=1`,
        ],
      },
      {
        slug: "vadi-55",
        name: "Vadi 55",
        area: "55 m²",
        layout: "2+1",
        bath: "1 banyo",
        capacity: "4-5 kişi",
        levels: "Tek kat + 12 m² veranda",
        deliveryTime: "9-11 hafta",
        highlight: "12 m² veranda dahil",
        description:
          "Geniş veranda alanı ile dış mekan kullanımını öne çıkaran, butik kiralık tatil işletmeleri için ideal model.",
        longDescription: [
          "Vadi 55, 55 m² kapalı yaşam alanına ek olarak 12 m² ahşap veranda sunar. Butik tatil işletmeleri için yaşam alanını dışarı taşıyan, hatırlanır bir model.",
          "İki yatak odası, banyo, açık plan salon ve mutfak; veranda salondan doğrudan erişilir.",
        ],
        features: [
          "12 m² ahşap veranda dahil",
          "Salondan veranda erişimi (sürgülü)",
          "İki ayrı yatak odası",
          "Geniş cam cepheler",
          "Veranda üstü pergola hazır",
        ],
        includes: [
          "Komple beton temel",
          "Veranda korkuluk ve döşeme",
          "İç ahşap kaplama",
          "Banyo + mutfak donanımı",
          "Dış cephe emprenye ve son kat",
        ],
        options: [
          "Veranda üstü pergola",
          "Outdoor mutfak",
          "Şömine entegrasyonu",
          "Klima merkezi sistem",
          "Solar panel sistemi",
        ],
        image: `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.20asdads-1-1024x768.jpeg?ssl=1`,
        gallery: [
          `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.20asdads-1-1024x768.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-11-at-23.26.08-1024x576.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-11-at-23.26.12-1024x576.jpeg?ssl=1`,
          `${wp}/2026/04/WhatsApp-Image-2026-04-11-at-23.26.15-576x1024.jpeg?ssl=1`,
        ],
      },
    ],
  },
];

export const allModels = categories.flatMap((c) =>
  c.models.map((m) => ({ ...m, category: c }))
);

export const findModel = (slug: string) =>
  allModels.find((m) => m.slug === slug);

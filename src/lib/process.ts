export type ProcessStep = {
  number: string;
  title: string;
  duration: string;
  description: string;
  weCheck: string[];
  weNeed: string[];
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Ön Görüşme & Keşif",
    duration: "1-2 hafta",
    description:
      "İhtiyacınızı dinleriz, mümkünse araziyi yerinde gezeriz. Kullanım amacı, kişi sayısı, mevsimsellik ve mevzuat durumu netleşir.",
    weCheck: [
      "Arazinin imar durumu ve eğimi",
      "Yol erişimi ve nakliye lojistiği",
      "Su, elektrik ve atık altyapısı",
      "İklim ve güneşlenme yönü",
    ],
    weNeed: [
      "Tapu fotokopisi ya da imar planı",
      "Kullanım amacı (yıl boyu / sezonluk / kiralık)",
      "Yaklaşık bütçe çerçevesi",
      "Hayalinizdeki referans görselleri",
    ],
  },
  {
    number: "02",
    title: "Tasarım & Net Teklif",
    duration: "2-3 hafta",
    description:
      "İlk görüşmedeki notlardan hareketle plan, kesit ve 3D görsel hazırlarız. Donanım listesi, opsiyonlar ve net teklifle birlikte sunarız.",
    weCheck: [
      "Mimari plan optimizasyonu",
      "Konstrüksiyon detay seçimleri",
      "Standart paket vs. opsiyon ayırımı",
      "Mevzuata uygunluk kontrolü",
    ],
    weNeed: [
      "Plan üzerinde geri bildiriminiz",
      "Donanım tercihleri (mutfak, banyo, ısıtma)",
      "Opsiyon kararları",
      "Teklif onayı",
    ],
  },
  {
    number: "03",
    title: "Üretim",
    duration: "4-12 hafta",
    description:
      "Atölyemizde ahşap kesimi, kuru kontrolü, emprenye ve modüler montaj yapılır. Üretim aşamasında haftalık ilerleme paylaşırız.",
    weCheck: [
      "Ahşap nem oranı (12-15% aralığı)",
      "Kalas seçimi ve göz kontrolü",
      "Emprenye kalitesi ve süresi",
      "Modüler birleşim toleransları",
    ],
    weNeed: [
      "Saha hazırlığı (temel, su, elektrik)",
      "Ulaşım izinleri (gerekiyorsa)",
      "Belirlenmiş teslim adresi",
    ],
  },
  {
    number: "04",
    title: "Saha & Montaj",
    duration: "1-3 hafta",
    description:
      "Modüller sahaya nakliye edilir, kendi ekibimizle kurulur. Cephe, çatı, iç donanım ve sıhhi/elektrik bağlantıları tek elden tamamlanır.",
    weCheck: [
      "Temel kotu ve seviye kontrolü",
      "Cephe izolasyon süreklilikleri",
      "Su yalıtım detayları",
      "Elektrik test ve sıhhi tesisat sızdırmazlık",
    ],
    weNeed: [
      "Sahada erişim kolaylığı",
      "Komşuluk ve gürültü onayı",
      "Bağlanacak hatların aktif olması",
    ],
  },
  {
    number: "05",
    title: "Teslim & Garanti",
    duration: "1 hafta",
    description:
      "Yapıyı birlikte gezeriz, tüm sistemlerin kullanımını gösteririz. Garanti belgesi ve bakım takvimini birlikte teslim ederiz.",
    weCheck: [
      "Final temizlik ve gözden geçirme",
      "Tüm sistem testleri",
      "Bakım kılavuzu hazırlığı",
    ],
    weNeed: [
      "Teslim tutanağı imzası",
      "İlk bakım takvimi onayı",
    ],
  },
];

export const warranty = {
  structural: "10 yıl yapısal garanti",
  finishing: "2 yıl iç-dış kaplama garantisi",
  appliances: "Üretici garantisi (donanım üzerinden)",
  postHandover:
    "Teslim sonrası 1 yıl boyunca ücretsiz periyodik kontrol ve bakım danışmanlığı",
};

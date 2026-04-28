export type Term = {
  term: string;
  definition: string;
  related?: string[];
};

export const glossary: Term[] = [
  {
    term: "Anahtar Teslim",
    definition:
      "Tasarım, üretim, montaj ve donanımın tek bir yüklenici tarafından üstlenildiği iş modeli. Müşteri yapıya hazır halde teslim alır.",
  },
  {
    term: "Çift Cidar",
    definition:
      "İki ahşap yüzey arasına yalıtım malzemesi yerleştirilen duvar konstrüksiyonu. Termal ve akustik performansı yüksektir.",
    related: ["Sandviç Panel", "Yalıtım"],
  },
  {
    term: "Çift Cam Isıcam",
    definition:
      "İki cam arasında inert gaz (genellikle argon) bulunan yalıtımlı pencere ünitesi. U-değeri düşüktür, ısı kaybını azaltır.",
  },
  {
    term: "Emprenye",
    definition:
      "Ahşabın çürüme, böcek ve nemden korunması için basınç altında koruyucu kimyasal emdirilmesi işlemi. Vakum-basınç (autoclave) yöntemi en etkili sonucu verir.",
    related: ["Vakum Emprenye", "Sıcak Emprenye"],
  },
  {
    term: "Glamping",
    definition:
      "Glamour camping — konforlu konaklama imkanı sunan butik kamp formatı. Bungalov ve tiny house bu pazarın temel yapı tipleridir.",
  },
  {
    term: "Kalas",
    definition:
      "Kalın, dikdörtgen kesitli ahşap parça. Genellikle taşıyıcı ya da yarı-taşıyıcı eleman olarak kullanılır.",
  },
  {
    term: "Lambri",
    definition:
      "İç mekan duvar veya tavan kaplamasında kullanılan ince, yan yana geçmeli ahşap profiller. Hem dekoratif hem de yalıtım katkılı.",
  },
  {
    term: "Lamine Ahşap (BSH/GLT)",
    definition:
      "Birden fazla katmanın lif yönüne paralel olarak tutkallanmasıyla üretilen mühendislik ahşabı. Büyük açıklıklar ve yüksek yüklere uygundur. Diğer adı: tutkallı kiriş.",
    related: ["Masif Ahşap"],
  },
  {
    term: "Mahya",
    definition:
      "Çatının en üst noktasında, iki çatı eğiminin birleştiği yatay sırt. Mahya yüksekliği iç hacim algısını doğrudan etkiler.",
  },
  {
    term: "Masif Ahşap",
    definition:
      "Tek parça doğal ahşaptan üretilmiş eleman. Zaman içinde çalışır (genleşir, çeker) — detay tasarımı bu hareketi tolere edecek şekilde yapılır.",
    related: ["Lamine Ahşap (BSH/GLT)"],
  },
  {
    term: "Mezzanine",
    definition:
      "Bir yapı içinde alt kotun bir bölümünü örten, asma kat niteliğinde ara seviye. Tiny house'larda yatak nişi olarak yaygındır.",
  },
  {
    term: "Modüler Üretim",
    definition:
      "Yapının atölyede modül modül üretilip sahaya nakledilerek birleştirilmesi yaklaşımı. Saha süresini kısaltır, hava şartı bağımlılığını azaltır.",
  },
  {
    term: "Nem Oranı",
    definition:
      "Ahşabın ağırlığının yüzdesi olarak içerdiği su miktarı. Yapısal kullanım için ideal aralık %12-15'tir; bu aralığın dışındaki ahşap deformasyona uğrar.",
  },
  {
    term: "OSB (Oriented Strand Board)",
    definition:
      "Ahşap yongalarının yönlü olarak yerleştirilip yüksek basınç altında preslenmesiyle üretilen levha. Konstrüksiyonda kaplama amaçlı kullanılır.",
  },
  {
    term: "Pergola",
    definition:
      "Bahçe ve teraslarda gölgelik amaçlı kurulan, üstü açık ya da yarı kapalı ahşap iskelet yapı. Sarmaşık bitkilerle örtülebilir.",
  },
  {
    term: "Sandviç Panel",
    definition:
      "İki sert yüzey arasında yalıtım dolgusu bulunan kompozit duvar/çatı paneli. Ahşap sandviç paneller, hızlı kurulum ve yüksek yalıtım sağlar.",
    related: ["Çift Cidar"],
  },
  {
    term: "Sıcak Emprenye",
    definition:
      "Ahşabın yüksek sıcaklıklı kazanlarda işlenmesiyle yapılan koruma yöntemi. Vakum emprenye kadar derin penetrasyon sağlamaz, hızlı projelerde tercih edilir.",
  },
  {
    term: "Tutkallı Kiriş",
    definition:
      "Lamine ahşap (BSH/GLT) sınıfının yapı sektöründeki yaygın adı. Endüstriyel ölçekte üretilir, statik hesabı standartlaşmıştır.",
    related: ["Lamine Ahşap (BSH/GLT)"],
  },
  {
    term: "Vakum Emprenye",
    definition:
      "Ahşabın vakum-basınç döngüsünden geçirilerek koruyucu maddenin liflere derinlemesine işlemesini sağlayan yöntem. Açık hava kullanımına en uygun emprenye türüdür.",
    related: ["Emprenye"],
  },
  {
    term: "Yerden Isıtma",
    definition:
      "Sıcak su veya elektrik kabloları aracılığıyla zemin altından yapılan ısıtma sistemi. Ahşap ev ve bungalovlarda enerji verimi yüksek bir çözümdür.",
  },
];

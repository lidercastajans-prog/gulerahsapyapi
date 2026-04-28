export type Testimonial = {
  id: string;
  name: string;
  city: string;
  projectType: string;
  modelSlug?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  date: string;
  featured?: boolean;
};

// NOT: Bu liste kullanıcı doğrulamasını bekleyen örnek referanslardır.
// Gerçek müşteri yorumları geldiğinde bu dosyada güncellenecek.
export const testimonials: Testimonial[] = [
  {
    id: "ali-k-kemer",
    name: "Ali K.",
    city: "Kemer",
    projectType: "Sahil Bungalov",
    modelSlug: "sahil-35",
    rating: 5,
    quote:
      "Tatil köyümüz için on bungalovluk bir uygulama yaptık. Söz verilen tarihte teslim ettiler, montajda hiçbir aksaklık olmadı. Üç sezon geçti, hâlâ yeni gibi.",
    date: "2025-09-12",
    featured: true,
  },
  {
    id: "esra-d-adrasan",
    name: "Esra D.",
    city: "Adrasan",
    projectType: "Tiny House",
    modelSlug: "olympos-28",
    rating: 5,
    quote:
      "Mezzanine yatak nişi fikrini ilk gördüğümde kararsızdım. Şimdi geceleri en sevdiğim yer orası — yıldızları yatağımdan görüyorum. Atölye süreci de çok şeffaftı.",
    date: "2025-08-03",
    featured: true,
  },
  {
    id: "mehmet-y-cirali",
    name: "Mehmet Y.",
    city: "Çıralı",
    projectType: "Ahşap Villa",
    modelSlug: "likya-120",
    rating: 5,
    quote:
      "Eğimli bir arazide iki katlı villa istedim. Uyarlamayı çok güzel çözdüler. Açık kiriş tavanın detayı tek başına bir mimari iş.",
    date: "2025-07-21",
    featured: true,
  },
  {
    id: "zeynep-a-kumluca",
    name: "Zeynep A.",
    city: "Kumluca",
    projectType: "Aile Evi",
    modelSlug: "phaselis-90",
    rating: 5,
    quote:
      "İki çocuklu bir aileyiz. Master ebeveyn banyolu plan tam aradığımız şeydi. Ekip her aşamada bizi bilgilendirdi, sürpriz çıkmadı.",
    date: "2025-06-15",
  },
  {
    id: "burak-m-finike",
    name: "Burak M.",
    city: "Finike",
    projectType: "Glamping İşletmesi",
    modelSlug: "orman-45",
    rating: 5,
    quote:
      "Eğimli ormanlık bir araziye sekiz adet bungalov kurduk. Yüksek temel çözümü tam istediğim gibi oldu, ağaçlara hiç dokunmadan oturttuk.",
    date: "2025-05-08",
  },
  {
    id: "selin-t-kas",
    name: "Selin T.",
    city: "Kaş",
    projectType: "Deniz Kıyısı Bungalov",
    modelSlug: "sahil-35",
    rating: 5,
    quote:
      "Tuza dayanıklı emprenye uygulaması fark yarattı. Üç yıldır deniz kıyısında, hâlâ ilk günkü gibi. Yıllık bakımı da kendileri yapıyor.",
    date: "2025-04-20",
  },
  {
    id: "okan-s-antalya",
    name: "Okan S.",
    city: "Antalya",
    projectType: "Bahçe Pergola",
    rating: 5,
    quote:
      "Bahçe pergolası için yaptığım araştırmada doğru ekibi bulduğumu hissettim. Üç gün içinde söktüler, kurdular ve teslim ettiler.",
    date: "2025-03-11",
  },
  {
    id: "deniz-c-kemer",
    name: "Deniz Ç.",
    city: "Kemer",
    projectType: "Tiny House",
    modelSlug: "adrasan-24",
    rating: 5,
    quote:
      "Dağ evi olarak kullanmak için kompakt bir tiny house istedim. Tekerlekli şasi opsiyonu sayesinde ruhsat süreci çok kolaylaştı.",
    date: "2025-02-04",
  },
  {
    id: "ayse-r-kumluca",
    name: "Ayşe R.",
    city: "Kumluca",
    projectType: "Tatil Evi",
    modelSlug: "vadi-55",
    rating: 5,
    quote:
      "Salondan verandaya açılan sürgülü kapı evi iki katına çıkardı resmen. Yaz akşamlarını dışarıda geçiriyoruz, kış için de cam tente eklediler.",
    date: "2025-01-22",
  },
  {
    id: "tolga-i-finike",
    name: "Tolga İ.",
    city: "Finike",
    projectType: "Ahşap Ev",
    modelSlug: "kemer-65",
    rating: 5,
    quote:
      "Eski bir taş eve ek olarak kompakt bir ahşap ev yaptırdık. İki yapı arasındaki uyum harika oldu, ahşabın doğal dokusu taşla çok iyi gidiyor.",
    date: "2024-11-30",
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);

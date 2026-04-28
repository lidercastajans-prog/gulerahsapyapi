export type Faq = {
  q: string;
  a: string;
};

export type FaqGroup = {
  slug: string;
  title: string;
  items: Faq[];
};

export const faqGroups: FaqGroup[] = [
  {
    slug: "mevzuat",
    title: "Mevzuat & İzinler",
    items: [
      {
        q: "Tiny house için inşaat ruhsatı gerekir mi?",
        a: "Tekerlekli şasi üzerine kurulan tiny house'lar bazı bölgelerde 'taşınabilir yapı' kapsamında değerlendirilerek ruhsat dışı kullanılabilir. Sabit temel üzerine kurulan modellerde ise yapı ruhsatı genelde gereklidir. Arazinin imar durumuna göre değişir; brief sürecinde belediye ile birlikte takip ediyoruz.",
      },
      {
        q: "Bungalov ve ahşap evler için imar şartı nedir?",
        a: "Konut amaçlı kullanım için imarlı arsa gereklidir. Tarım arazilerinde 'tarımsal yapı' istisnaları olabilir; bunlar bölgeye göre farklılık gösterir. Tapu ve imar paftanızı paylaşırsanız ilk görüşmede netleştiriyoruz.",
      },
      {
        q: "Eğimli ya da ormanlık arazide yapım mümkün mü?",
        a: "Evet — yüksek temel sistemleri ve özel taşıyıcı çözümlerimizle %30'a kadar eğimli arazilerde sorunsuz çalışıyoruz. Orman vasfı ya da SİT alanı varsa ek izin süreci işliyor; bunu birlikte yönetiyoruz.",
      },
      {
        q: "Tatil köyü / glamping için seri üretim yapıyor musunuz?",
        a: "Evet, tatil işletmeleri için 5+ adet seri sipariş aldığımızda fiyat ve teslim avantajı sunabiliyoruz. Aynı plan üzerinde ufak varyasyonlarla işletme kimliği yaratıyoruz.",
      },
      {
        q: "Yapı kayıt belgesi alabiliyor muyum?",
        a: "Mevzuat değişkenliği nedeniyle bu konu projeden projeye farklılık gösterir. Brief aşamasında sizin bölgenizdeki güncel mevzuatı birlikte değerlendiriyor ve ona göre ilerliyoruz.",
      },
    ],
  },
  {
    slug: "surec",
    title: "Süreç & Teslim",
    items: [
      {
        q: "Sipariş verdikten ne kadar sonra teslim alabilirim?",
        a: "Modele göre 9 ila 21 hafta arasında. Tiny house modellerinde 9-11 hafta, küçük ahşap ev ve bungalovlarda 11-14 hafta, büyük villa modellerinde 16-21 haftaya kadar çıkabilir. Yoğun sezon (Mart-Haziran) takvime ekleme yapabilir.",
      },
      {
        q: "Üretim sürecini takip edebilir miyim?",
        a: "Evet — atölyemizden haftalık fotoğraf güncellemesi paylaşıyoruz. Atölyeye gelip yerinde de görmek isterseniz, randevuyla buyurun.",
      },
      {
        q: "Nakliye ve montaj fiyata dahil mi?",
        a: "Adrasan merkezli atölyemizden Antalya il sınırları içine montaj dahildir. İl dışı nakliyeler mesafeye göre ek olarak hesaplanır; net teklifte ayrı kalem olarak gösteririz.",
      },
      {
        q: "Anahtar teslim derken neler dahil?",
        a: "Yapı, dış cephe, çatı, iç ahşap kaplama, banyo seramik+vitrifiye, mutfak dolap+tezgâh, elektrik tesisatı (panodan prizlere), sıhhi tesisat, kapı-pencere donanımı dahildir. Yerden ısıtma, klima, solar, beyaz eşya gibi kalemler opsiyonel.",
      },
    ],
  },
  {
    slug: "garanti-bakim",
    title: "Garanti & Bakım",
    items: [
      {
        q: "Garanti süreniz ne kadar?",
        a: "Yapısal taşıyıcı sistem 10 yıl, dış-iç kaplama 2 yıl garantilidir. Donanım kalemleri (kombi, beyaz eşya, vb.) üretici garantisi kapsamındadır. Tüm garanti koşulları teslim sırasında belge olarak verilir.",
      },
      {
        q: "Bakım gerekli mi, ne sıklıkla?",
        a: "Ahşap yapılarda yılda bir kez dış cephe emprenye yenilemesi önerilir. Deniz kıyısı projelerinde tuz birikimi nedeniyle 6-12 ayda bir kontrol idealdir. Bakım takvimi teslim ile birlikte paylaşılır.",
      },
      {
        q: "Bakımı siz mi yapıyorsunuz?",
        a: "Evet — teslim sonrası ilk yıl ücretsiz periyodik kontrol sağlıyoruz. Sonraki yıllar için bakım hizmeti ayrıca alınabilir; mesafeye ve işin kapsamına göre fiyatlandırılır.",
      },
      {
        q: "Ahşap kararabilir mi, çürür mü?",
        a: "Doğru emprenye edilmemiş ya da su birikintisine uzun süre maruz kalan ahşap kararabilir/çürüyebilir. Bizim uygulamalarımızda çürümeye karşı çift katlı emprenye, su yönlendirme detayları ve metal ayırıcılar kullanıyoruz; bu sorun pratikte yaşanmaz.",
      },
    ],
  },
  {
    slug: "maliyet",
    title: "Maliyet & Ödeme",
    items: [
      {
        q: "Fiyat aralığını sitede neden göstermiyorsunuz?",
        a: "Her proje arazi, ulaşım, konstrüksiyon detay ve donanım seçimleriyle farklılaştığı için sabit liste fiyat yanıltıcı olur. Sıcak temas ve doğru teklif için arayın ya da WhatsApp üzerinden yazın — aynı gün dönüş yapıyoruz.",
      },
      {
        q: "Ödeme planı nasıl işliyor?",
        a: "Standart akış: sözleşme imzasında %30, üretim başlarken %30, montaj öncesi %30, teslim ile %10. Tatil köyü gibi seri siparişlerde proje takvimine göre özel plan kurulur.",
      },
      {
        q: "Teklif alırken ücret ödüyor muyum?",
        a: "Hayır. Brief görüşmesi, plan önerisi ve net teklif tamamen ücretsiz. Detaylı 3D görselleştirme ve mimari proje çizimi opsiyonel ve ücretlidir; teklifte ayrıca belirtilir.",
      },
      {
        q: "Banka kredisi ya da finansman desteğiniz var mı?",
        a: "Doğrudan finansman vermiyoruz; ancak ödeme planını projenize uyarlayabiliyoruz. Bazı bankaların 'tatil evi' veya 'arazi' kredileri ile birlikte ilerleyen müşterilerimiz oluyor.",
      },
    ],
  },
  {
    slug: "teknik",
    title: "Teknik Sorular",
    items: [
      {
        q: "Hangi ahşap türlerini kullanıyorsunuz?",
        a: "Taşıyıcı sistemde ağırlıklı olarak Kuzey Avrupa kaynaklı kuru çam (Picea abies) ve Doğu Karadeniz ladin kullanıyoruz. Cephe ve detaylarda meşe, ceviz, iroko gibi seçenekler de mümkün. Ahşap seçimi konstrüksiyon ihtiyacına ve estetik tercihinize göre projelendirilir.",
      },
      {
        q: "Yalıtım performansı betona göre nasıl?",
        a: "Doğru uygulanmış çift cidarlı ahşap konstrüksiyon, eşdeğer betonarme yapıdan termal olarak daha yüksek performans gösterir. Ses yalıtımında da sandviç panel detayları çok başarılıdır. Standart paketimizde yüksek yoğunluklu taş yünü yalıtım kullanılıyor.",
      },
      {
        q: "Deprem dayanımı nasıl?",
        a: "Ahşap, hafif ve esnek bir malzeme olduğu için sismik kuvvetlere karşı betonarmeye göre avantajlıdır. Uygulamalarımız Türkiye Bina Deprem Yönetmeliği'ne uygun şekilde projelendirilip statik onaylı çelik bağlantı detaylarıyla kuruluyor.",
      },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((g) => g.items);

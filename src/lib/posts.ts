const wp = "https://i0.wp.com/gulerahsapyapi.com/wp-content/uploads";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "ahsap-evler-neden-yillara-meydan-okur",
    title: "Ahşap Evler Neden Yıllara Meydan Okur?",
    excerpt:
      "Doğru seçilen ve doğru detaylarla uygulanan ahşap, betondan çok daha uzun ömürlü olabilir. İşte ahşabın dayanıklılığını belirleyen üç kritik faktör.",
    date: "2026-04-18",
    readTime: "5 dk okuma",
    category: "Ahşap Yapı",
    image: `${wp}/2026/04/WhatsApp-Image-2026-04-08-at-18.03.18-1-1024x1024.jpeg?ssl=1`,
    body: [
      "Ahşap evlerin ömrü hakkında çelişkili bilgilerle karşılaşmak mümkün. Bunun temel nedeni ahşabın doğru kullanılıp kullanılmamasıyla doğrudan ilgili olmasıdır. Doğru seçilmiş, doğru kurutulmuş ve doğru detaylarla uygulanmış bir ahşap yapı, yüzyılları aşan örneklerle karşımıza çıkar.",
      "İlk kritik faktör nem dengesidir. Yapısal ahşapta nem oranı %12 ile %15 arasında olmalıdır. Bu aralığın dışındaki ahşap zamanla deformasyona uğrar. Atölyemizde her parti ahşap, kullanım öncesi nem ölçer ile kontrol edilir.",
      "İkinci faktör detay çözümleridir. Ahşap, su ile uzun süre temasta kalmadığı sürece çürümez. Çatı saçak çıkıntıları, yağmur yönlendirme kanalları ve toprakla temas eden alt seviyelerin metal şapkalarla ayrılması — bu üç detay yapının ömrünü doğrudan belirler.",
      "Üçüncü faktör ise periyodik bakımdır. Yılda bir kez yapılacak emprenye yenilemesi ve cephe kontrolü, ahşap yapının ömrünü kat kat uzatır. Müşterilerimize teslim sonrası bakım takvimi ile birlikte detaylı kullanım kılavuzu da iletiyoruz.",
    ],
  },
  {
    slug: "tiny-house-mu-bungalov-mu",
    title: "Tiny House mu, Bungalov mu? Doğru Seçim İçin Rehber",
    excerpt:
      "İki yapı tipinin de avantajları farklı. Karar verirken arazi büyüklüğü, kullanım amacı ve mevzuat gibi faktörleri birlikte değerlendirmek gerekiyor.",
    date: "2026-04-10",
    readTime: "4 dk okuma",
    category: "Karar Rehberi",
    image: `${wp}/2026/04/WhatsApp-Image-2026-04-11-at-23.26.13-1024x576.jpeg?ssl=1`,
    body: [
      "Anahtar teslim küçük ölçekli ahşap yapı arayışında en sık karşılaşılan ikilem: tiny house mu, bungalov mu? İkisi de küçük metrekarelerde konfor sunar fakat mantıkları birbirinden farklıdır.",
      "Tiny house genelde tekerlekli bir şasi üzerine kurulabilir, taşınabilir bir yapıdır. Bu özelliği ile mevzuat avantajı sağlar — bazı bölgelerde inşaat ruhsatı gerektirmeden kurulabilir. Ancak alan kısıtlıdır; 24-32 m² arasındaki bir alanda yaşam alışkanlıklarınızı sığdırmanız gerekir.",
      "Bungalov ise sabit bir temel üzerine kurulan, daha geniş yaşam alanı sunan bir yapıdır. 35 m²'den 80 m²'ye kadar farklı modelleri vardır. Mevzuat tarafında tiny house'a göre daha fazla onay süreci gerektirir, fakat uzun vadeli kullanım ve aile yaşamı için daha uygundur.",
      "Karar verirken kendinize üç soru sorun: Yapıyı taşıma ihtimaliniz var mı? Aile yapınızda artış olabilir mi? Arazinizin imar durumu nedir? Bu üç sorunun cevabı sizi doğru seçime yönlendirecektir.",
    ],
  },
  {
    slug: "pergola-bakimi-5-adim",
    title: "Pergola Bakımı: 5 Önemli Adım",
    excerpt:
      "Doğru bakımla ahşap pergolanız 25 yıldan fazla hizmet verebilir. İşte her sezon yapmanız gereken beş kontrol.",
    date: "2026-04-02",
    readTime: "3 dk okuma",
    category: "Bakım",
    image: `${wp}/2026/04/WhatsApp-Image-2026-04-11-at-23.26.11-1024x576.jpeg?ssl=1`,
    body: [
      "Pergola, açık hava yaşamının vazgeçilmezi. Doğru bakım yapıldığında dekoratif görünümünü ve yapısal sağlamlığını uzun yıllar korur.",
      "Birinci adım: yıllık emprenye yenilemesi. Özellikle deniz kıyısındaki pergolalarda tuz birikimi ahşabı kurutur; ilkbaharda yapılacak bir emprenye uygulaması yapıyı kış için hazırlar.",
      "İkinci adım: bağlantı noktalarının kontrolü. Cıvata ve metal aksamlar zamanla gevşeyebilir. Yılda bir kez tüm bağlantıların torkunu kontrol edin.",
      "Üçüncü adım: çatı drenajı. Pergolanın üst yüzeyindeki yaprak ve toz birikintileri suyu tutar; her sonbahar sonu temizlik şart.",
      "Dördüncü adım: çatlak ve kabarmaların erken müdahalesi. Küçük çatlaklar zamanla büyür; ilk fark ettiğinizde uygun ahşap macunu ile doldurulmalıdır.",
      "Beşinci adım: profesyonel kontrol. Beş yılda bir uzmanın yapacağı kapsamlı kontrol, gözle görülmeyen sorunları erken tespit etmenizi sağlar.",
    ],
  },
];

export const categoriesByName = (cat: string) =>
  posts.filter((p) => p.category === cat);

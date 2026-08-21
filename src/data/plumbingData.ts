export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  details: string;
  iconName: string;
  urgencyTag?: string;
  whatsappMessage: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  highlight: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const BUSINESS_INFO = {
  name: "CANKUR SU TESİSAT",
  title: "Cankur Su Tesisat | Küçükçekmece Tesisatçı – Rasim Usta",
  masterName: "Rasim Usta",
  phoneDisplay: "0545 802 39 60",
  phoneRaw: "+905458023960",
  phoneTel: "tel:+905458023960",
  whatsappBase: "https://wa.me/905458023960",
  whatsappDefaultMessage: "Merhaba, Cankur Su Tesisat'tan tesisat hizmeti almak istiyorum. Sorunum: ",
  address: "Maslak Çeşme Caddesi, Akarsu Sk. No: 84 D:E, 34290 Küçükçekmece/İstanbul",
  district: "Küçükçekmece / İstanbul",
  workingHours: "Her gün 08:00 – 23:30 (Akşam saatlerine kadar açık)",
  googleRating: 4.9,
  googleReviewCount: 107,
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Maslak+%C3%87e%C5%9Fme+Caddesi+Akarsu+Sk+No+84+DE+K%C3%BC%C3%A7%C3%BCk%C3%A7ekmece+%C4%B0stanbul",
  googleMapsReviewUrl: "https://www.google.com/maps/search/?api=1&query=Cankur+Su+Tesisat+K%C3%BC%C3%A7%C3%BCk%C3%A7ekmece",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "su-kacagi-tespiti",
    title: "SU KAÇAĞI TESPİTİ",
    shortDesc: "Duvar, zemin, lavabo, klozet veya tesisat bağlantılarındaki su kaçaklarının tespiti ve onarımı.",
    details: "Sızıntı yapan noktayı kırmadan ve gereksiz tahribat oluşturmadan tespit ederek kalıcı onarımını gerçekleştiriyoruz.",
    iconName: "SearchCheck",
    urgencyTag: "Acil Müdahale",
    whatsappMessage: "Merhaba Rasim Usta, evimde/iş yerimde su kaçağı problemi var. Tespit ve onarım için bilgi almak istiyorum.",
  },
  {
    id: "tikanik-acma",
    title: "TIKANIK AÇMA",
    shortDesc: "Lavabo, mutfak gideri, banyo gideri, duş gideri ve benzeri tıkanıklıklara müdahale.",
    details: "Tıkanan ana gider ve süzgeç hatlarına uygun mekanik aletlerle müdahale ederek suyu sorunsuz akışa kavuşturuyoruz.",
    iconName: "Wrench",
    urgencyTag: "Hızlı Çözüm",
    whatsappMessage: "Merhaba Rasim Usta, gider tıkanıklığı (lavabo/mutfak/banyo) yaşıyorum. Müdahale için müsaitliğinizi öğrenmek istiyorum.",
  },
  {
    id: "lavabo-tesisati",
    title: "LAVABO TESİSATI",
    shortDesc: "Lavabo altı bağlantıları, sifon, esnek boru, gider ve sızıntı problemlerinin giderilmesi.",
    details: "Gevşeyen veya eskiyen sifon hortumları, sızdıran körük boruları ve conta yenileme işlemlerini titizlikle yapıyoruz.",
    iconName: "Droplets",
    whatsappMessage: "Merhaba Rasim Usta, lavabo tesisatımda (sifon, gider borusu, su sızıntısı) sorun var. Yardım alabilir miyim?",
  },
  {
    id: "klozet-tesisati",
    title: "KLOZET TESİSATI",
    shortDesc: "Klozet su kaçakları, bağlantı problemleri, musluk ve gider sorunlarının giderilmesi.",
    details: "İç takım su kaçırma, taharet musluğu damlatması, rezervuar arızaları ve zemin montaj problemlerine çözüm sunuyoruz.",
    iconName: "ShieldAlert",
    whatsappMessage: "Merhaba Rasim Usta, klozet su kaçırma / iç takım / musluk problemim var. Fiyat ve randevu bilgisi alabilir miyim?",
  },
  {
    id: "musluk-ve-batarya-tamiri",
    title: "MUSLUK VE BATARYA TAMİRİ",
    shortDesc: "Bozulan, kaçıran veya sökülmesi gereken musluk ve bataryalarda onarım ve değişim.",
    details: "Aç-kapa kartuş arızaları, spiral hortum patlamaları, gövde sızıntıları ve yeni batarya montajı hizmetleri.",
    iconName: "SlidersHorizontal",
    whatsappMessage: "Merhaba Rasim Usta, musluk/batarya tamiri veya değişimi için bilgi almak istiyorum.",
  },
  {
    id: "su-borusu-ve-tesisat-onarimi",
    title: "SU BORUSU VE TESİSAT ONARIMI",
    shortDesc: "Patlayan, sızdıran veya arızalanan su borularına müdahale.",
    details: "PPRC plastik boru kaynakları, demir boru arızaları, ana şebeke giriş vanası ve basınç kaçaklarının giderilmesi.",
    iconName: "Zap",
    urgencyTag: "Kritik Arıza",
    whatsappMessage: "Merhaba Rasim Usta, su borumda patlama/sızıntı var. Hızlı şekilde yardım rica ediyorum.",
  },
  {
    id: "kombi-su-baglantilari",
    title: "KOMBİ SU BAĞLANTILARI",
    shortDesc: "Kombi su bağlantılarındaki kaçak ve tesisat problemlerinin giderilmesi.",
    details: "Kombi altı su doldurma vanası, emniyet ventili sızıntıları ve su tesisat hattı giriş çıkış bağlantılarının onarımı.",
    iconName: "Flame",
    whatsappMessage: "Merhaba Rasim Usta, kombi su bağlantısı ve boru sızıntısı için desteğe ihtiyacım var.",
  },
  {
    id: "petek-temizligi",
    title: "PETEK TEMİZLİĞİ",
    shortDesc: "Kalorifer peteklerinde performans kaybı ve ısınma problemlerine yönelik temizlik hizmeti.",
    details: "Petek alt kısımlarının soğuk kalması, çamurlaşma ve devirdaim problemlerinde verimli ısınma için tesisat temizliği.",
    iconName: "Activity",
    whatsappMessage: "Merhaba Rasim Usta, kalorifer petek temizliği ve ısınma kontrolü için bilgi ve müsaitlik rica ediyorum.",
  },
  {
    id: "mutfak-tesisati",
    title: "MUTFAK TESİSATI",
    shortDesc: "Mutfak lavabo gideri, bağlantılar, su kaçakları ve tesisat problemleri.",
    details: "Bulaşık makinesi su giriş ve tahliye hortumları, evye bataryası ve mutfak ana gider borusu montaj ve onarımları.",
    iconName: "UtensilsCrossed",
    whatsappMessage: "Merhaba Rasim Usta, mutfak tesisatı (evye, gider, bulaşık makinesi bağlantısı) ile ilgili yardıma ihtiyacım var.",
  },
  {
    id: "banyo-tesisati",
    title: "BANYO TESİSATI",
    shortDesc: "Banyo giderleri, duş alanı, lavabo, klozet ve su bağlantılarındaki problemlere müdahale.",
    details: "Duşakabin sızıntıları, çamaşır makinesi gideri, banyo yer süzgeci ve genel ıslak hacim tesisat revizyonları.",
    iconName: "Bath",
    whatsappMessage: "Merhaba Rasim Usta, banyo su tesisatı ve gider problemleri için bilgi alabilir miyim?",
  },
];

export const WHY_US_ITEMS = [
  {
    id: "hizli-mudahale",
    title: "Hızlı Müdahale",
    description: "Acil su sızıntısı veya tıkanıklık durumunda mesaj ve aramalarınıza gecikmeden dönüş sağlanır.",
  },
  {
    id: "zamaninda-gelme",
    title: "Zamanında Gelme",
    description: "Söz verilen saat aralığına sadık kalınarak müşterinin zamanı korunur ve iş planı aksatılmaz.",
  },
  {
    id: "temiz-iscilik",
    title: "Temiz ve Titiz İşçilik",
    description: "Çalışma alanı gereksiz yere kirletilmeden, iş bittiğinde toparlanmış ve düzenli teslim edilir.",
  },
  {
    id: "deneyimli-usta",
    title: "Deneyimli Usta",
    description: "Tesisat arızalarının kaynağını doğru analiz eden pratik el işçiliği ve tecrübeli yaklaşım.",
  },
  {
    id: "sorun-odakli",
    title: "Sorun Odaklı Çözüm",
    description: "Gereksiz masraf çıkarmadan, problemin ana kaynağını hedef alan ekonomik ve sağlam müdahale.",
  },
  {
    id: "guven-seffaflik",
    title: "İletişimde Güven ve Şeffaflık",
    description: "İşin başından sonuna kadar ne yapılacağı açıkça anlatılır, dürüst ve güler yüzlü hizmet verilir.",
  },
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "M. Yılmaz",
    rating: 5,
    date: "Google Haritalar",
    highlight: "Söylediği saatte geldi, sorunu kısa sürede çözdü",
    comment: "Gerçekten çok memnun kaldık. Hem işini çok güzel yaptı hem de güler yüzüyle içimizi rahatlattı. Söylediği saatte geldi, sorunu kısa sürede çözdü.",
  },
  {
    id: "rev-2",
    author: "Ahmet K.",
    rating: 5,
    date: "Google Haritalar",
    highlight: "İşinin ehli dürüst dört dörtlük usta",
    comment: "Rasim Usta işinin ehli dürüst dört dörtlük işini yapan bir usta.",
  },
  {
    id: "rev-3",
    author: "Serkan D.",
    rating: 5,
    date: "Google Haritalar",
    highlight: "15 dakika içinde geldi",
    comment: "Ustamız telefon ile konuştuktan 15 dakika içinde geldi.",
  },
  {
    id: "rev-4",
    author: "Bülent T.",
    rating: 5,
    date: "Google Haritalar",
    highlight: "Sağlam iş yapıyor, işinin arkasında",
    comment: "Çok hızlı geldi, sağlam işini yapıyor işinin arkasında.",
  },
  {
    id: "rev-5",
    author: "Fatma S.",
    rating: 5,
    date: "Google Haritalar",
    highlight: "İlgili ve çok temiz çalıştı",
    comment: "İlgili ve çok temiz çalıştı işini bilen bir usta.",
  },
  {
    id: "rev-6",
    author: "Ömer Faruk B.",
    rating: 5,
    date: "Google Haritalar",
    highlight: "Gece geç saat olmasına rağmen geldi",
    comment: "Gece geç saat olmasına rağmen geldi işimizi sorunsuz bir şekilde yaptı.",
  },
  {
    id: "rev-7",
    author: "Hakan E.",
    rating: 5,
    date: "Google Haritalar",
    highlight: "Su sızma sorununu hemen buldu",
    comment: "Su sızma sorununu hemen buldu ve düzeltti.",
  },
  {
    id: "rev-8",
    author: "Cemil A.",
    rating: 5,
    date: "Google Haritalar",
    highlight: "İşçilik iyi, fiyat makul",
    comment: "İşçilik iyi, fiyat makul, teşekkür ederiz.",
  },
  {
    id: "rev-9",
    author: "Murat G.",
    rating: 5,
    date: "Google Haritalar",
    highlight: "Farazi masraf çıkarmadan en iyi işi yaptı",
    comment: "Rasim usta işinin hakkını vererek yapıyor gerçekten. Farazi masraf çıkarmadan makul fiyata en iyi işi yaptı.",
  },
  {
    id: "rev-10",
    author: "Kadir V.",
    rating: 5,
    date: "Google Haritalar",
    highlight: "İşini takip ediyor güvenilir usta",
    comment: "İşini takip ediyor güvenilir usta.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Su kaçağı için tesisatçı çağırabilir miyim?",
    answer: "Evet. Daire içi veya ortak alanlarda duvar, zemin, lavabo ve batarya bağlantılarındaki su kaçakları için Rasim Usta ile iletişime geçerek tespit ve tamir talep edebilirsiniz.",
  },
  {
    id: "faq-2",
    question: "Lavabo tıkanıklığı açıyor musunuz?",
    answer: "Evet. Mutfak, banyo ve tuvalet lavabolarında zamanla biriken tortu, saç ve sabun artığı nedeniyle tıkanan gider boruları uygun ekipmanlarla açılmaktadır.",
  },
  {
    id: "faq-3",
    question: "Klozet su kaçağı tamiri yapıyor musunuz?",
    answer: "Evet. Klozet iç takım arızaları, şamandıra bozulmaları, rezervuar sızıntıları ve taharet musluğu kaçaklarının onarımı veya parça değişimi yapılmaktadır.",
  },
  {
    id: "faq-4",
    question: "Gece tesisat hizmeti alabilir miyim?",
    answer: "İşletmemiz her gün akşam saat 23:30'a kadar hizmet vermektedir. Geç saatlerdeki acil durumlar için müsaitlik durumunu telefonla arayarak doğrudan öğrenebilirsiniz.",
  },
  {
    id: "faq-5",
    question: "Musluk ve batarya değişimi yapıyor musunuz?",
    answer: "Evet. Damlatan, kireçlenen, kırılan veya yenilenmek istenen tüm aç-kapa, lavabo, mutfak ve banyo bataryalarının montaj ve tamirini yapıyoruz.",
  },
  {
    id: "faq-6",
    question: "Mutfak gideri tıkanıklığı açıyor musunuz?",
    answer: "Evet. Mutfak lavabolarındaki yağ ve yemek artıklarının sebep olduğu gider tıkanıklıkları gider açma yöntemleriyle temizlenip suyun rahat akışı sağlanır.",
  },
  {
    id: "faq-7",
    question: "Kombi su bağlantısı ve kaçaklarına bakıyor musunuz?",
    answer: "Evet. Kombi altı su vanaları, bağlantı boruları ve tesisat su basıncı kaçakları gibi su tesisatı bağlantılarına müdahale edilmektedir.",
  },
  {
    id: "faq-8",
    question: "Petek temizliği yapıyor musunuz?",
    answer: "Evet. Isınmayan veya altı soğuk kalan kalorifer peteklerindeki tortu ve çamur birikiminin temizlenmesi için tesisat temizliği hizmeti verilmektedir.",
  },
  {
    id: "faq-9",
    question: "WhatsApp üzerinden fiyat bilgisi alabilir miyim?",
    answer: "Evet. Yaşadığınız tesisat probleminin fotoğrafını veya kısa bir videosunu WhatsApp üzerinden göndererek yapılacak işlem hakkında ön bilgilendirme alabilirsiniz.",
  },
  {
    id: "faq-10",
    question: "Ne kadar sürede gelebilirsiniz?",
    answer: "Ulaşım süresi konum, trafik durumu ve o anki mevcut iş yoğunluğuna göre değişiklik gösterebilir. En doğru süreyi aradığınız anda Rasim Usta'dan öğrenebilirsiniz.",
  },
];

export const NEIGHBORHOODS = [
  "Cennet Mahallesi",
  "Halkalı",
  "Sefaköy",
  "Atakent",
  "İnönü Mahallesi",
  "Tepeüstü",
  "Sultanmurat",
  "Kanarya",
  "Yeşilova",
  "Fevzi Çakmak",
  "Cumhuriyet",
  "Kemalpaşa",
  "İnönü",
  "İstasyon Mahallesi",
  "Yarımburgaz",
  "Gültepe",
  "Beşyol",
];

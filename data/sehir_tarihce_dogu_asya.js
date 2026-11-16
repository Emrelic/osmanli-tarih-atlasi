// ŞEHİR TARİHÇESİ — DOGU_ASYA · üretici: arac/sehir_tarihce.py · şema: VERI-YAPISI.md
// Motor/denetle/site OKUMAZ — araştırma birikimi. Elle düzenleme: JSON'u düzelt, yeniden üret.
window.SEHIR_TARIHCE_DOGU_ASYA = [
 {
  "id": "naha-jp",
  "ad": "Naha",
  "atlas_ad": "Naha",
  "lat": 26.213,
  "lon": 127.679,
  "kat1900": 2,
  "adlar": [
   "Naha 那覇 (Japonca/Okinawaca), Ukishima 浮島 (ada adı, Ryukyu dönemi)",
   "Naha 那覇"
  ],
  "ilk": {
   "t": "1422-01-01",
   "gun": "1422",
   "nicelik": "ilk_anilis",
   "kesinlik": "yil",
   "kaynak": "Naha Port Management/Port Authority, 'History' (nahaport.jp/english/introduction/history/): 1422 Kral Shō Hashi Naha Limanı'nı Çin ticaretinin merkez üssü yaptı; GeoNames (geonames.org, Naha PPLA, 26°12′47″N 127°40′43″E) koordinat teyidi",
   "tanik": "King Sho Hashi makes Naha Port the central base for all trade with China",
   "ic_not": "Bulunan en erken TARİHLİ tanık budur; 1372 Çin elçiliği/Kume köyü gibi daha erken anılışlar ARANMADI veya kaynakla bağlanamadı. Tomari Limanı (1264) ayrı limandır, Naha sayılmadı. Aralık: yılın ilk günü (gün yok). Atlas noktası yalnız 1945-04-01'den başlıyor; öncesi bu kayıtta. LISTE.tsv koordinatı ile GeoNames farkı <0,3 km."
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "1422-01-01",
    "t": "1429-01-01",
    "d": "chuzan-krallik",
    "kunye_yok": true,
    "kesinlik": {
     "f": "yil",
     "t": "yil"
    },
    "kaynak": "Naha Port History (nahaport.jp): 1422 Kral Shō Hashi; Naha City Historical Archive (rekishi-archive.city.naha.okinawa.jp/en/history): 1406 Birinci Shō hanedanı başlar, 1429 üç rakip güç birleşir",
    "ic_not": "Chūzan Krallığı (Shō Hashi, 1406-1429) için atlasta künye yok; öneri id chuzan-krallik, ömür 1406-1429, kaynak Naha City Historical Archive. Künye açılana kadar uyarı."
   },
   {
    "f": "1429-01-01",
    "t": "1879-03-27",
    "d": "ryukyu",
    "kesinlik": {
     "f": "yil",
     "t": "gun"
    },
    "kaynak": "Naha City Historical Archive (rekishi-archive.city.naha.okinawa.jp/en/history): 1429 üç rakip güç birleşti; 1609 Satsuma-han 3.000 askerle Ryukyu'yu işgal etti, Ryukyu Çin bağını korudu; 1879 Meiji hükümeti krallığı Okinawa Valiliği'ne çevirdi, vali merkezi Naha; Ryukyu Shimpo (english.ryukyushimpo.jp/2019/04/05/30203/): Matsuda Michiyuki 27 Mart'ta Shuri'de ilhak belgesini sundu",
    "ic_not": "t: 27 Mart 1879 günü yalnız gazete (Ryukyu Shimpo) + dönem özetinde; Naha şehir arşivi yalnız 'yıl 1879' verir. Akademik gün teyidi (JAS/Monumenta Nipponica) bulunamadı. 1609 Satsuma işgali sahipliği değiştirmez (Ryukyu tâbi olarak sürer), olay olarak yazıldı."
   },
   {
    "f": "1879-03-27",
    "t": "1945-04-01",
    "d": "meiji-japonya",
    "kesinlik": {
     "f": "gun",
     "t": "gun"
    },
    "kaynak": "Naha City Historical Archive: 1879 Meiji hükümeti krallığı Okinawa Valiliği'ne çevirdi (merkez Naha); 20 Mayıs 1921 Naha ve Shuri belediye olarak birleştirildi; 10 Ekim 1944 ABD hava saldırısı kent alanının ~%90'ını yıktı; 1 Nisan 1945 ABD kuvvetleri Okinawa ana adasına çıktı",
    "ic_not": "Başlangıç günü Ryukyu dönemi bitişiyle aynı kaynakla (yalnız gazete) ayrıdır. 1 Nisan 1945 çıkarma günüdür; Naha şehrinin fiilen ABD eline geçişi daha sonradır — bitiş atlas noktasının ilk sahiplik gününe (dikiş) bağlandı, atlas başlangıcı bu gün olduğundan zincir buna uydu."
   }
  ],
  "olay": [
   {
    "t": "1422-01-01",
    "gun": "1422",
    "k": "diger",
    "b": "Kral Shō Hashi Naha Limanı'nı Çin ticaretinin merkez üssü yaptı",
    "kaynak": "Naha Port History (nahaport.jp/english/introduction/history/)"
   },
   {
    "t": "1429-01-01",
    "gun": "1429",
    "k": "diger",
    "b": "künye geçişi: Chūzan Krallığı → birleşik Ryukyu Krallığı (üç rakip gücün birleşmesi)",
    "kaynak": "Naha City Historical Archive (rekishi-archive.city.naha.okinawa.jp/en/history)"
   },
   {
    "t": "1609-01-01",
    "gun": "1609",
    "k": "isgal",
    "b": "Satsuma-han 3.000 askerle Ryukyu'yu işgal etti; krallık Çin bağını koruyarak şogunluk düzenine bağlandı",
    "kaynak": "Naha City Historical Archive (rekishi-archive.city.naha.okinawa.jp/en/history)",
    "ic_not": "Yalnız yıl teyitli; sahiplik zinciri değişmez (tâbi)."
   },
   {
    "t": "1879-03-27",
    "gun": "27 Mart 1879",
    "k": "fetih",
    "b": "Ryukyu Krallığı kaldırıldı; Meiji hükümeti Okinawa Valiliği'ni kurdu, vali merkezi Naha",
    "kaynak": "Ryukyu Shimpo, english.ryukyushimpo.jp/2019/04/05/30203/ (27 Mart, Matsuda Michiyuki); Naha City Historical Archive (yıl 1879)",
    "ic_not": "Gün teyitsiz akademik; çift teyit yok."
   },
   {
    "t": "1921-05-20",
    "gun": "20 Mayıs 1921",
    "k": "idari",
    "b": "Naha ve Shuri belediye (şi) olarak kuruldu — Okinawa'nın ilk şehri",
    "kaynak": "Naha City Historical Archive (rekishi-archive.city.naha.okinawa.jp/en/history)"
   },
   {
    "t": "1944-10-10",
    "gun": "10 Ekim 1944",
    "k": "savas",
    "b": "ABD '10.10' hava saldırısı Naha kent alanının yaklaşık %90'ını yıktı",
    "kaynak": "Naha City Historical Archive (rekishi-archive.city.naha.okinawa.jp/en/history)"
   },
   {
    "t": "1945-04-01",
    "gun": "1 Nisan 1945",
    "k": "isgal",
    "b": "ABD kuvvetleri Okinawa ana adasına çıktı; Ryukyu ABD askerî idaresi başlangıcı (dikiş)",
    "kaynak": "Naha City Historical Archive (rekishi-archive.city.naha.okinawa.jp/en/history)",
    "ic_not": "Çıkarma günü; Naha'nın fiilen düşüşü ayrı ve daha geç, atlas başlangıcı bu günü esas alır."
   }
  ],
  "ic_not": "Atlas Naha noktası 1945-04-01'den başlar (ryukyu-abd-idaresi); zincir o güne kadar. Shuri (4 km) ayrı atlas noktasıdır."
 },
 {
  "id": "yokohama-jp",
  "ad": "Yokohama",
  "atlas_ad": null,
  "lat": 35.433,
  "lon": 139.65,
  "kat1900": 2,
  "adlar": [
   "Yokohama-mura 横浜村 (balıkçı köyü, Japonca)",
   "Yokohama 横浜 (Japonca; Batı adı Yokohama, Kanagawa Antlaşma Limanı)"
  ],
  "ilk": {
   "t": "1859-07-01",
   "gun": "1 Temmuz 1859",
   "nicelik": "kurulus",
   "kesinlik": "gun",
   "kaynak": "City of Yokohama, Port of Yokohama, 'The Opening of the Port: East Meets West' (en.city.yokohama.lg.jp/lang/overseas/port/about_us/history/h1.html): Harris Antlaşması'nın ertesi yılı (07/01/1859) yabancılara açıldı; GeoNames (geonames.org, Yokohama PPLA, 35°26′00″N 139°39′00″E) koordinat teyidi",
   "tanik": "Yokohama, being a rural, fishing village, had hardly any ... institutions",
   "ic_not": "Liman olarak açılış günü (Gregoryen 1 Temmuz 1859; şehir sayfası takvim çevirisini ayrıca vermez, Japon takvim günü belirtilmemiş) KURULUŞ olarak alındı. Öncesinde tarihsiz balıkçı köyü (Yokohama-mura) vardı; köyün ilk yazılı anılışı ARANMADI/bulunamadı, bu yüzden başlangıç 1859. LISTE.tsv koordinatı (35.444, 139.638) GeoNames ile 1,5 km fark; GeoNames alındı."
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "1859-07-01",
    "t": "1868-04-11",
    "d": "edo-bakufu",
    "kesinlik": {
     "f": "gun",
     "t": "gun"
    },
    "kaynak": "City of Yokohama, 'The Opening of the Port' (şehir sayfası: Bakufu 'the Japanese ruling party of the time', liman açılışı 1859); Kanagawa bugyō görev sonu 11 Nisan 1868 (Wikidata Q4262621 'Kanagawa bugyō'); 4 Nisan 1868 Yokohama mektubu: vali şehri Mikado hükümetine teslime hazır, henüz teslim alan yok (Directory & Chronicle derlemesi, hkintexts.histsyn.com sayfa 988239)",
    "ic_not": "t: 11 Nisan 1868 bitiş tek ikincil dayanaktır (Wikidata); akademik ikinci kaynak bulunamadı, gün teyitsiz. Atlas künyesi edo-bakufu t=1868-01-03'tür; Yokohama fiilen Nisan 1868'e kadar Kanagawa bugyō'sünde kaldığından dönem künye bitişini aşar — künye geçişi kararı (künye mi kısaltılır) Emre/denetime bırakıldı (ic_not beyanı)."
   },
   {
    "f": "1868-04-11",
    "t": "1900-01-01",
    "d": "meiji-japonya",
    "kesinlik": {
     "f": "gun",
     "t": "yil"
    },
    "kaynak": "Kanagawa bugyō görev sonu 11 Nisan 1868 (Wikidata Q4262621); 4 Nisan 1868 Yokohama mektubu (hkintexts.histsyn.com sayfa 988239): vali şehri Mikado hükümetine teslime hazır; Meiji hükümetinin ilk Kanagawa valisi Higashikuze Michitomi (Nisan-Kasım 1868)",
    "ic_not": "Yokohama atlas noktası olmadığından zincir 1900-01-01'e kadar uzatıldı."
   }
  ],
  "olay": [
   {
    "t": "1859-07-01",
    "gun": "1 Temmuz 1859",
    "k": "kurulus",
    "b": "Yokohama limanı yabancı ticarete açıldı",
    "kaynak": "City of Yokohama, 'The Opening of the Port: East Meets West' (en.city.yokohama.lg.jp/lang/overseas/port/about_us/history/h1.html)"
   },
   {
    "t": "1868-04-11",
    "gun": "11 Nisan 1868",
    "k": "diger",
    "b": "künye geçişi: Kanagawa bugyō'nün sonu; Yokohama Edo şogunluğundan Meiji hükümetine devredildi",
    "kaynak": "Wikidata Q4262621 (Kanagawa bugyō, bitiş 11 Nisan 1868); 4 Nisan 1868 Yokohama mektubu, hkintexts.histsyn.com/page/988239",
    "ic_not": "Gün teyitsiz akademik: yalnız Wikidata + dönem mektubu; çift akademik teyit yok."
   }
  ],
  "ic_not": "Yazılan: yalnız liman kuruluşu ve 1868 devri. Büyük Kantō Depremi (1 Eylül 1923) ve vilayet statüsü bu oturumda kaynakla bağlanamadı, yazılmadı."
 }
];

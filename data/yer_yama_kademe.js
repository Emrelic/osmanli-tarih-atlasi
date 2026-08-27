// data/yer_yama_kademe.js — OSMANLI k0 KADEME ÖNERİSİ
// KADEME K0 · 2026-08-27 · ORHANGAZI sevkiyle
//
// 🔴 BU DOSYA VERİ DEĞİL ÖNERİDİR. Motor bunu OKUMAZ; index.html'e EKLENMEZ.
//    Uygulamayı koordinatör yapar.
//
// KAPSAM: Osmanlı olmuş (d: ya da v: taşıyan) ama hâlâ k:0 olan 45 kaydın
// 38'i. Kalan 7'si tur:"bolge" (Boğaziçi · Cebel Merre · Kordofan · Saroz
// kuzey kıyısı · Sina güneyi · Nefud çölü · Necid içi) — DOLGU noktası,
// yerleşim değil; idarî kademe vermek KATEGORİ HATASI olurdu.
//
// 🔴 İLK SÜRÜM 35 KAYITTI VE EVRENİ DARDI. Süzgecim `bos:` alanı taşıyan
//    5 kaydı elemişti; ikisi gerçekten bolge, ÜÇÜ (Buraydâ · Uneyze · Şakrâ)
//    tur:"sehir" — GERÇEK KASABA, İbrâhim Paşa işgali 1818-1824. Hatayı
//    kendi "45 ↔ 40 farkı" ölçümüm ortaya çıkardı. Artık üreteç EVRENİ DE
//    sınıyor: kapsanmayan kayıt varsa ADIYLA basıyor.
// Gerekçe: denetim/BULGU-KADEME-K0.md
//
// ⚠️ HARİTA GARANTİSİ — ÖLÇÜLDÜ, VARSAYILMADI
//   ① TAVAN: TAVAN_KM[k0]=280 km. 45 kaydın 45'inde en yakın komşuya
//      uzaklığın YARISI < 280 (en tenha: Tîne 94 km · Necid üçlüsü 15-41 km)
//      ⇒ tavan HİÇBİRİNDE bağlamıyor ⇒ kademe değişse de PETEK AYNI KALIR.
//   ② uret_petek.py:680 kendi yorumu: "Kademe uyarısının bedeli kozmetik
//      (bölge sınırı çizilmiyor, TOPRAK BOYAMASI ETKİLENMİYOR)."
//   ⇒ Bu yama devlet boyamasını DEĞİŞTİRMEZ. Değiştirdiği tek şey
//      data/bolgeler.js — k0 noktalar oraya HİÇ girmiyor (:3285 `not y["k"]`),
//      kademe verilince merkezlerinin bölge poligonuna ÜYE olurlar.
//
// 🔴 NİÇİN `m:` DE YAZILIYOR: uret_petek.py:702 — k3/k4 yazıp m: yazmazsan
//    k12_merkez zinciri kapanmaz, "UYARI kademe" öter ve :706'daki
//    "beklenen 0" sayacı bozulur. Kademe ile merkez BİRLİKTE yazılır.
//    Bu dosyadaki 35 önerinin 35'i, yama uygulanmış varsayılarak
//    k12_merkez(684) BİREBİR TAKLİT EDİLEREK sınandı; hepsi kapanıyor.
//
// ALANLAR
//   mevcut / oneri   : {k, m}
//   merkez_kapanis   : zincirin ulaştığı k1/k2 merkez (sınavın çıktısı)
//   merkez_km        : yerleşim ile önerilen m: arası mesafe
//   guven  KESIN     : TDV kademeyi ADIYLA söylüyor
//          GEREKCELI : kaynak bölgeyi/idarî yapıyı veriyor, kademe türetildi
//          HUKUM     : kaynak susuyor — tarihsel bağlamdan hüküm
//   kaynak "bulunamadı" = arandı, YOK (§4: bir sonuçtur, uydurmaktan iyidir)
//
// ⚠️ EKSEN UYARISI: `k:` bu projede İKİ EKSEN taşıyor (idarî kademe ve
//    önem/tavan). Buradaki 35 kayıtta ikisi ÇAKIŞIYOR, o yüzden yazmak
//    güvenli. 1126 YABANCI k0 için ÇAKIŞMIYOR ve bu yamaya GİRMEDİLER.
window.YER_YAMA_KADEME = [
 {
  "yerlesim": "Ahar (Karadağ)",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "Tebriz"
  },
  "merkez_kapanis": "Tebriz",
  "merkez_km": 81.0,
  "guven": "GEREKCELI",
  "kaynak": "TDV tebriz",
  "gerekce": "1593 Tebriz eyaleti livâ listesi ÖLÇÜLDÜ (Tebriz·Suldus·Dizmâr·Merâga·Sarukurgân·Saîdâbâd·Alîk); Ahar bu listede YOK ⇒ livâ altı.",
  "donem": [
   "1585-09-25..1603-10-21",
   "1725-08-04..1730-08-12"
  ]
 },
 {
  "yerlesim": "Bihaç (Bihać)",
  "tur": "kale",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 2,
   "m": null
  },
  "merkez_kapanis": "Bihaç (Bihać)",
  "merkez_km": 0.0,
  "guven": "KESIN",
  "kaynak": "TDV bihac",
  "gerekce": "\"Bihaç ... 1865'te yeniden sancak merkezi haline getirildi.\" · \"1606'da yedi ... sancaktan oluşan Bosna eyaletinin bir parçasıydı.\"",
  "donem": [
   "1592-06-19..1908-10-05"
  ]
 },
 {
  "yerlesim": "Buraydâ (Kasîm)",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "Medine"
  },
  "merkez_kapanis": "Medine",
  "merkez_km": 486.5,
  "guven": "GEREKCELI",
  "kaynak": "TDV necid + TDV medine",
  "gerekce": "TDV necid: \"Necd-i Hicâzî Kasîm, Cebelişemmer, Veşm, Mahmel ve Südeyr\" — Kasîm adlı alt bölge VAR, ama TDV Buraydâ'yı merkez diye ADIYLA yazmıyor. TDV medine: \"İbrâhim Paşa'yı Medine'ye ve Kuzey Arabistan taraflarına gönderdi\" ⇒ seferin idarî çıpası Medine. `burayda` ve `kasim` slugları ÖLÜ (ölçüldü).",
  "donem": [
   "1818-09-09..1824-06-01"
  ]
 },
 {
  "yerlesim": "Burâm",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "El-Fâşir"
  },
  "merkez_kapanis": "El-Fâşir",
  "merkez_km": 311.6,
  "guven": "GEREKCELI",
  "kaynak": "TDV darfur",
  "gerekce": "\"Dârfûr'un Mısır tarafından zaptı ... 1874\" · \"1883'te mehdî hareketi başlamıştır.\" Dârfûr'un merkezi el-Fâşir. TDV bu KASABALARI adıyla saymıyor — §4 TANECİKLİK boşluğu.",
  "donem": [
   "1874-11-02..1883-12-23"
  ]
 },
 {
  "yerlesim": "Burûcird",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "Hemedan"
  },
  "merkez_kapanis": "Hemedan",
  "merkez_km": 102.6,
  "guven": "GEREKCELI",
  "kaynak": "TDV luristan",
  "gerekce": "\"Hürremâbâd, Burûcird ve Şâpûr bölgenin en eski şehirleridir.\" Kademe verilmiyor. `burucird` slugu ÖLÜ.",
  "donem": [
   "1590-03-21..1603-10-21"
  ]
 },
 {
  "yerlesim": "Cenîne",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "El-Fâşir"
  },
  "merkez_kapanis": "El-Fâşir",
  "merkez_km": 314.6,
  "guven": "GEREKCELI",
  "kaynak": "TDV darfur",
  "gerekce": "\"Dârfûr'un Mısır tarafından zaptı ... 1874\" · \"1883'te mehdî hareketi başlamıştır.\" Dârfûr'un merkezi el-Fâşir. TDV bu KASABALARI adıyla saymıyor — §4 TANECİKLİK boşluğu.",
  "donem": [
   "1874-11-02..1883-12-23"
  ]
 },
 {
  "yerlesim": "Ed-Da'în",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "El-Fâşir"
  },
  "merkez_kapanis": "El-Fâşir",
  "merkez_km": 255.5,
  "guven": "GEREKCELI",
  "kaynak": "TDV darfur",
  "gerekce": "\"Dârfûr'un Mısır tarafından zaptı ... 1874\" · \"1883'te mehdî hareketi başlamıştır.\" Dârfûr'un merkezi el-Fâşir. TDV bu KASABALARI adıyla saymıyor — §4 TANECİKLİK boşluğu.",
  "donem": [
   "1874-11-02..1883-12-23"
  ]
 },
 {
  "yerlesim": "Eperjes (Prešov)",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "Kassa (Košice)"
  },
  "merkez_kapanis": "Kassa (Košice)",
  "merkez_km": 31.7,
  "guven": "HUKUM",
  "kaynak": "TDV macaristan",
  "gerekce": "Orta Macar prensliği şehri. TDV'de adı GEÇMİYOR (arandı).",
  "donem": [
   "1682-09-16..1685-10-15"
  ]
 },
 {
  "yerlesim": "Fülek (Fiľakovo)",
  "tur": "kale",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "Kassa (Košice)"
  },
  "merkez_kapanis": "Kassa (Košice)",
  "merkez_km": 116.7,
  "guven": "HUKUM",
  "kaynak": "TDV macaristan",
  "gerekce": "Orta Macar prensliği kalesi. TDV'de adı GEÇMİYOR (arandı).",
  "donem": [
   "1682-09-16..1685-10-15"
  ]
 },
 {
  "yerlesim": "Herseknovi (Herceg Novi)",
  "tur": "kale",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "Mostar"
  },
  "merkez_kapanis": "Saraybosna",
  "merkez_km": 115.5,
  "guven": "HUKUM",
  "kaynak": "bulunamadı",
  "gerekce": "Hersek sancağı kalesi; sancak merkezi Mostar. TDV `hersek` slugu CANLI ama gövde 2378 bayt geldi — §4④ BOİLERPLATE, çekilemedi.",
  "donem": [
   "1482-01-01..1687-09-30"
  ]
 },
 {
  "yerlesim": "Kasr-ı Şîrîn",
  "tur": "kale",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "Şehrizor"
  },
  "merkez_kapanis": "Şehrizor",
  "merkez_km": 117.0,
  "guven": "HUKUM",
  "kaynak": "bulunamadı",
  "gerekce": "Sınır kalesi (1746 antlaşmasının adını taşır). `kasri-sirin` ve `kasr-i-sirin` sluglarının İKİSİ DE ÖLÜ (ölçüldü).",
  "donem": [
   "1723-10-01..1730-08-12"
  ]
 },
 {
  "yerlesim": "Kassa (Košice)",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 2,
   "m": null
  },
  "merkez_kapanis": "Kassa (Košice)",
  "merkez_km": 0.0,
  "guven": "GEREKCELI",
  "kaynak": "TDV macaristan",
  "gerekce": "\"Imre Thököly önderliğiyle Kuzey Macaristan'da bir prenslik (Türkçe'si: Orta Macar) kurulmasına yol açtı (1682).\" Kassa o prensliğin merkezi. TDV Kassa'yı merkez diye ADIYLA yazmıyor.",
  "donem": [
   "1682-09-16..1685-10-15"
  ]
 },
 {
  "yerlesim": "Kebkâbiye",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "El-Fâşir"
  },
  "merkez_kapanis": "El-Fâşir",
  "merkez_km": 136.8,
  "guven": "GEREKCELI",
  "kaynak": "TDV darfur",
  "gerekce": "\"Dârfûr'un Mısır tarafından zaptı ... 1874\" · \"1883'te mehdî hareketi başlamıştır.\" Dârfûr'un merkezi el-Fâşir. TDV bu KASABALARI adıyla saymıyor — §4 TANECİKLİK boşluğu.",
  "donem": [
   "1874-11-02..1883-12-23"
  ]
 },
 {
  "yerlesim": "Kerene",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "Sevâkin"
  },
  "merkez_kapanis": "Sevâkin",
  "merkez_km": 388.6,
  "guven": "HUKUM",
  "kaynak": "bulunamadı",
  "gerekce": "Eritre'de kasaba; Mısır idaresi 1872-1884. TDV'de müstakil madde YOK.",
  "donem": [
   "1872-01-01..1884-06-03"
  ]
 },
 {
  "yerlesim": "Klis",
  "tur": "kale",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 2,
   "m": null
  },
  "merkez_kapanis": "Klis",
  "merkez_km": 0.0,
  "guven": "KESIN",
  "kaynak": "TDV klis",
  "gerekce": "\"Fetihten hemen sonra Klis sancak ve kaza merkezi yapıldı.\"",
  "donem": [
   "1537-03-12..1648-03-31"
  ]
 },
 {
  "yerlesim": "Knin",
  "tur": "kale",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 3,
   "m": "Klis"
  },
  "merkez_kapanis": "Klis",
  "merkez_km": 59.5,
  "guven": "GEREKCELI",
  "kaynak": "TDV klis",
  "gerekce": "1580'de Klis sancağı ikiye ayrıldı, kuzeybatısı Kırka adıyla Bosna vilâyetine bağlandı; Knin o kesimde. TDV'de Knin adı GEÇMİYOR (arandı).",
  "donem": [
   "1522-05-29..1688-09-11"
  ]
 },
 {
  "yerlesim": "Kuba",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 3,
   "m": "Derbend"
  },
  "merkez_kapanis": "Şamahı",
  "merkez_km": 79.8,
  "guven": "GEREKCELI",
  "kaynak": "TDV sirvan",
  "gerekce": "\"Kuzeyde merkezi Demirkapı/Derbend olan Derbend eyaleti ... Derbend yedi sancağa ayrıldı.\" Kuba o eyaletin kuzey kesiminde.",
  "donem": [
   "1583-01-01..1607-01-01"
  ]
 },
 {
  "yerlesim": "Kutum",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "El-Fâşir"
  },
  "merkez_kapanis": "El-Fâşir",
  "merkez_km": 97.7,
  "guven": "GEREKCELI",
  "kaynak": "TDV darfur",
  "gerekce": "\"Dârfûr'un Mısır tarafından zaptı ... 1874\" · \"1883'te mehdî hareketi başlamıştır.\" Dârfûr'un merkezi el-Fâşir. TDV bu KASABALARI adıyla saymıyor — §4 TANECİKLİK boşluğu.",
  "donem": [
   "1874-11-02..1883-12-23"
  ]
 },
 {
  "yerlesim": "Mellît",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "El-Fâşir"
  },
  "merkez_kapanis": "El-Fâşir",
  "merkez_km": 60.5,
  "guven": "GEREKCELI",
  "kaynak": "TDV darfur",
  "gerekce": "\"Dârfûr'un Mısır tarafından zaptı ... 1874\" · \"1883'te mehdî hareketi başlamıştır.\" Dârfûr'un merkezi el-Fâşir. TDV bu KASABALARI adıyla saymıyor — §4 TANECİKLİK boşluğu.",
  "donem": [
   "1874-11-02..1883-12-23"
  ]
 },
 {
  "yerlesim": "Miyâne",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "Tebriz"
  },
  "merkez_kapanis": "Tebriz",
  "merkez_km": 144.9,
  "guven": "GEREKCELI",
  "kaynak": "TDV tebriz",
  "gerekce": "1593 livâ listesinde YOK (aynı ölçüm) ⇒ livâ altı.",
  "donem": [
   "1585-09-25..1603-10-21",
   "1725-08-04..1730-08-12"
  ]
 },
 {
  "yerlesim": "Munkács (Mukacheve)",
  "tur": "kale",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "Kassa (Košice)"
  },
  "merkez_kapanis": "Kassa (Košice)",
  "merkez_km": 111.6,
  "guven": "HUKUM",
  "kaynak": "TDV macaristan",
  "gerekce": "Orta Macar prensliği kalesi. TDV'de adı GEÇMİYOR (arandı).",
  "donem": [
   "1682-09-16..1687-12-17"
  ]
 },
 {
  "yerlesim": "Nihâvend",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "Hemedan"
  },
  "merkez_kapanis": "Hemedan",
  "merkez_km": 68.8,
  "guven": "GEREKCELI",
  "kaynak": "TDV luristan",
  "gerekce": "\"Batıdan Irak ... kuzeyden Hersin ve Nihâvend ... ile sınırlıdır.\" Şehir olarak anılıyor, idarî kademe verilmiyor. `nihavend` slugu ÖLÜ.",
  "donem": [
   "1590-03-21..1603-10-21",
   "1724-08-31..1730-08-12"
  ]
 },
 {
  "yerlesim": "Nyala",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "El-Fâşir"
  },
  "merkez_kapanis": "El-Fâşir",
  "merkez_km": 183.1,
  "guven": "GEREKCELI",
  "kaynak": "TDV darfur",
  "gerekce": "\"Dârfûr'un Mısır tarafından zaptı ... 1874\" · \"1883'te mehdî hareketi başlamıştır.\" Dârfûr'un merkezi el-Fâşir. TDV bu KASABALARI adıyla saymıyor — §4 TANECİKLİK boşluğu.",
  "donem": [
   "1874-11-02..1883-12-23"
  ]
 },
 {
  "yerlesim": "Otranto",
  "tur": "kale",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "Yanya"
  },
  "merkez_kapanis": "Yanya",
  "merkez_km": 208.5,
  "guven": "GEREKCELI",
  "kaynak": "TDV gedik-ahmed-pasa",
  "gerekce": "\"Otranto'yu Ağustos 1480'de fetheden Gedik Ahmed Paşa ...\" · TDV italya: \"on bir ay Türkler'in elinde kalan Otranto\". Kademe verilmiyor; 11 aylık köprübaşı kalesi.",
  "donem": [
   "1480-08-11..1481-09-10"
  ]
 },
 {
  "yerlesim": "Radom",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "El-Fâşir"
  },
  "merkez_kapanis": "El-Fâşir",
  "merkez_km": 411.5,
  "guven": "GEREKCELI",
  "kaynak": "TDV darfur",
  "gerekce": "\"Dârfûr'un Mısır tarafından zaptı ... 1874\" · \"1883'te mehdî hareketi başlamıştır.\" Dârfûr'un merkezi el-Fâşir. TDV bu KASABALARI adıyla saymıyor — §4 TANECİKLİK boşluğu.",
  "donem": [
   "1874-11-02..1883-12-23"
  ]
 },
 {
  "yerlesim": "Salyan",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 3,
   "m": "Şamahı"
  },
  "merkez_kapanis": "Şamahı",
  "merkez_km": 118.8,
  "guven": "GEREKCELI",
  "kaynak": "TDV sirvan",
  "gerekce": "\"Osmanlı idaresinde Şirvan iki eyalete ayrıldı ... güneyde merkezi Şemâhî olan Şemâhî eyaleti kuruldu. Şemâhî eyaleti on beş ... sancağa ayrıldı.\" Salyan Osmanlı kontrolüne giren yerler arasında sayılıyor.",
  "donem": [
   "1578-11-01..1607-01-01"
  ]
 },
 {
  "yerlesim": "Sarâb",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "Tebriz"
  },
  "merkez_kapanis": "Tebriz",
  "merkez_km": 110.1,
  "guven": "GEREKCELI",
  "kaynak": "TDV tebriz",
  "gerekce": "1593 livâ listesinde YOK (aynı ölçüm) ⇒ livâ altı.",
  "donem": [
   "1585-09-25..1603-10-21",
   "1725-08-04..1730-08-12"
  ]
 },
 {
  "yerlesim": "Sin (Sinj)",
  "tur": "kale",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "Klis"
  },
  "merkez_kapanis": "Klis",
  "merkez_km": 18.8,
  "guven": "HUKUM",
  "kaynak": "TDV klis",
  "gerekce": "Klis sancağı içinde kale. TDV'de Sinj adı GEÇMİYOR (arandı).",
  "donem": [
   "1513-01-01..1686-09-30"
  ]
 },
 {
  "yerlesim": "Tarki (Tarku)",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 3,
   "m": "Şeki (Nuha)"
  },
  "merkez_kapanis": "Şeki (Nuha)",
  "merkez_km": 200.7,
  "guven": "HUKUM",
  "kaynak": "bulunamadı",
  "gerekce": "Tarku Şamhallığı'nın merkezi (tâbi). `tarki` slugu ÖLÜ; TDV `dagistan` maddesinde Tarki adı ARANDI, GEÇMİYOR.",
  "donem": [
   "1578-11-01..1607-01-01"
  ]
 },
 {
  "yerlesim": "Tokaj",
  "tur": "kale",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "Kassa (Košice)"
  },
  "merkez_kapanis": "Kassa (Košice)",
  "merkez_km": 67.3,
  "guven": "HUKUM",
  "kaynak": "TDV macaristan",
  "gerekce": "Orta Macar prensliği kalesi. TDV'de yalnız şarap bölgesi olarak geçiyor.",
  "donem": [
   "1682-09-16..1685-10-15"
  ]
 },
 {
  "yerlesim": "Tîne (Dârfûr)",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "El-Fâşir"
  },
  "merkez_kapanis": "El-Fâşir",
  "merkez_km": 298.9,
  "guven": "GEREKCELI",
  "kaynak": "TDV darfur",
  "gerekce": "\"Dârfûr'un Mısır tarafından zaptı ... 1874\" · \"1883'te mehdî hareketi başlamıştır.\" Dârfûr'un merkezi el-Fâşir. TDV bu KASABALARI adıyla saymıyor — §4 TANECİKLİK boşluğu.",
  "donem": [
   "1874-11-02..1883-12-23"
  ]
 },
 {
  "yerlesim": "Uneyze",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "Medine"
  },
  "merkez_kapanis": "Medine",
  "merkez_km": 475.9,
  "guven": "GEREKCELI",
  "kaynak": "TDV necid + TDV medine",
  "gerekce": "Kasîm'in ikinci kasabası; aynı zincir. `uneyze` ve `unayza` slugları ÖLÜ.",
  "donem": [
   "1818-09-09..1824-06-01"
  ]
 },
 {
  "yerlesim": "Ungvár (Uzhhorod)",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "Kassa (Košice)"
  },
  "merkez_kapanis": "Kassa (Košice)",
  "merkez_km": 77.4,
  "guven": "HUKUM",
  "kaynak": "TDV macaristan",
  "gerekce": "Orta Macar prensliği şehri. TDV'de adı GEÇMİYOR (arandı).",
  "donem": [
   "1682-09-16..1685-10-15"
  ]
 },
 {
  "yerlesim": "Zagem (Kaheti)",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 3,
   "m": "Tiflis"
  },
  "merkez_kapanis": "Tiflis",
  "merkez_km": 82.8,
  "guven": "GEREKCELI",
  "kaynak": "TDV gurcistan",
  "gerekce": "\"Gürcistan üç krallığa (Kartliya, Kahetya, İmeretiya) ... ayrıldı.\" Tiflis eyaletinin dört sancağı (Gori·Tiflis·Tumanıs·Lori) sayılıyor, Kaheti bunların İÇİNDE DEĞİL ⇒ tâbi krallık merkezi.",
  "donem": [
   "1578-08-09..1606-01-01"
  ]
 },
 {
  "yerlesim": "Zâlincî",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "El-Fâşir"
  },
  "merkez_kapanis": "El-Fâşir",
  "merkez_km": 217.4,
  "guven": "GEREKCELI",
  "kaynak": "TDV darfur",
  "gerekce": "\"Dârfûr'un Mısır tarafından zaptı ... 1874\" · \"1883'te mehdî hareketi başlamıştır.\" Dârfûr'un merkezi el-Fâşir. TDV bu KASABALARI adıyla saymıyor — §4 TANECİKLİK boşluğu.",
  "donem": [
   "1874-11-02..1883-12-23"
  ]
 },
 {
  "yerlesim": "Ümmü Keddâde",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "El-Fâşir"
  },
  "merkez_kapanis": "El-Fâşir",
  "merkez_km": 145.0,
  "guven": "GEREKCELI",
  "kaynak": "TDV darfur",
  "gerekce": "\"Dârfûr'un Mısır tarafından zaptı ... 1874\" · \"1883'te mehdî hareketi başlamıştır.\" Dârfûr'un merkezi el-Fâşir. TDV bu KASABALARI adıyla saymıyor — §4 TANECİKLİK boşluğu.",
  "donem": [
   "1874-11-02..1883-12-23"
  ]
 },
 {
  "yerlesim": "Şa'riyye",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "El-Fâşir"
  },
  "merkez_kapanis": "El-Fâşir",
  "merkez_km": 81.5,
  "guven": "GEREKCELI",
  "kaynak": "TDV darfur",
  "gerekce": "\"Dârfûr'un Mısır tarafından zaptı ... 1874\" · \"1883'te mehdî hareketi başlamıştır.\" Dârfûr'un merkezi el-Fâşir. TDV bu KASABALARI adıyla saymıyor — §4 TANECİKLİK boşluğu.",
  "donem": [
   "1874-11-02..1883-12-23"
  ]
 },
 {
  "yerlesim": "Şakrâ",
  "tur": "sehir",
  "mevcut": {
   "k": 0,
   "m": null
  },
  "oneri": {
   "k": 4,
   "m": "Medine"
  },
  "merkez_kapanis": "Medine",
  "merkez_km": 575.5,
  "guven": "GEREKCELI",
  "kaynak": "TDV necid + TDV medine",
  "gerekce": "TDV necid alt bölge listesinde \"Veşm\" geçiyor; Şakrâ oradadır. Kademe verilmiyor. `sakra` slugu ÖLÜ.",
  "donem": [
   "1818-09-09..1824-06-01"
  ]
 }
];

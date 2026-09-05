// -*- coding: utf-8 -*-
// YER_YAMA_P0035 — PAKET-0035-0902 oturumu, 2 Eylül 2026, 1.MURAT sevki (tahta M-2145/M-2150)
//
// ⚠️ Bu bir YAMA dosyasıdır. `data/yerlesimler*.js`e DOKUNMADIM (§7 · şartname ④).
//    Uygulayıcı: `py arac/_sahiplik_uygula.py [--yaz]`
//    Ad alanı dosya adından türetildi (§7: "ayrı dosya vermek, ayrı ad alanı vermek DEĞİLDİR").
//
// ═══════════════ NİÇİN VAR — H-0097 · H-0100 (Emre'nin iki maddesi) ═══════════════
// Emre iki ayrı maddede aynı yere baktı:
//   H-0097  "Rusçuk Rus işgaline uğradı ise burayı taralı göstermek gerekmez miydi
//            TIPKI İBRAİL KALESİ GİBİ"
//   H-0100  "Bükreş anlaşmasından SONRA BİLE bu parça burada böyle boş arazi
//            olmasına rağmen RUS TOPRAĞI GİBİ GÖRÜNÜYOR ... savaş bitince de bu
//            boş toprak kalmış rus yeşili ile"
//
// ═══════════════ DEVRALDIĞIM ÖNCÜL ÖLÇÜLDÜ VE KISMEN ÇÜRÜDÜ ═══════════════
// Notun sayımı: "1806-1812'de Tuna hattında YALNIZ İbrail'in isg: kaydı var,
// Rusçuk·Silistre·Bender·İsmail·Kili·Vidin·Niğbolu·Yergöğü·Turnu Severin
// DOKUZUNDA DA YOK." Bugün ölçüldü — iki tanesi ARADA İNMİŞ:
//     Rusçuk  isg:rusya 1810-09-26 → 1811-06-01   commit 6f8aa0d, 31 Ağustos
//     Kili    isg:rusya 1806-01-01 → 1812-05-28   commit 3cf33e9, 29 Ağustos
// ⇒ 9 değil 7. (§11: "devraldığın rakamı doğrulamadan aktarma.")
//
// ═══════════════ VE ENGEL KALKMIŞ, İŞ YARIM KALMIŞ ═══════════════
// `data/olaylar_ek21.js` (30 Ağustos, GECE KRONOLOJİ) başlığında aynen şöyle diyor:
//     "Kayıtları yazdım (Kili · Akkirman · Hotin indi) ama ÜÇÜNÜ GERİ ÇEKTİM:
//      Rusçuk · Niğbolu · Silistre'nin işgal BİTİŞ günlerine ±30 günde madde
//      yoktu ve Değişmez 2i tavanı DOLU (3/3). ... ⇒ Doğru çare buydu: GÜNÜ
//      KAYDIRMAK DEĞİL, MADDEYİ YAZMAK. Bu üç madde inince o üç isg: kaydı da
//      inebilir (M-1539 · M-1690)."
// Üç madde İNDİ ve CANLI: index.html'de bağlı, `denetle.py:903`ün `olaylar*.js`
// evreninde. Rusçuk'unki 31 Ağustos'ta yazıldı; NİĞBOLU ve SİLİSTRE'ninki YAZILMADI.
// ⇒ Şart sağlanmış, kayıt inmemiş. Bu dosya onun yarısını indiriyor.
//
// ═══════════════ KIRILMA GÜNÜ DİSİPLİNİ — YENİ GÜN DOĞURULMADI ═══════════════
// Kullandığım her günün ÇEKİRDEKTEKİ (olaylar*.js) karşılığı tek tek ölçüldü:
//   1810-09-27  Yergöğü isg başı  → en yakın madde 1810-09-26 "Rusçuk'un teslimi"      1 gün
//   1812-05-28  Yergöğü isg sonu  → 1812-05-28 "Bükreş Antlaşması"                     0 gün
//   1829-09-14  Yergöğü d: sonu   → 1829-09-14 "Edirne Antlaşması"                     0 gün
//   1810-10-01  Niğbolu isg başı  → en yakın madde 1810-09-26 "Rusçuk'un teslimi"      5 gün
//   1811-04-01  Niğbolu isg sonu  → 1811-04-01 "Niğbolu'nun geri alınışı"              0 gün
// 🟢 Beşi de ±30 gün içinde ve BEŞİ DE ÇEKİRDEK KOVADA (§11: "bu gün zaten var
//    yetmiyor — HANGİ KOVADA olduğu da sorulmalı"). Kuyruğa hiç dayanmadım.
//
// ═══════════════ KAYNAK (§4) — TDV gövdeleri OKUNDU, alıntılandı ═══════════════
// `yergogu`  HTTP 200 · gövde 12 KB · başlık "YERGÖĞÜ" · müellif MIHAI MAXIM
// `nigbolu`  HTTP 200 · gövde 17 KB · başlık "NİĞBOLU"
// Dört tuzağın dördü de sınandı: kod 200 · başlık doğru · gövde dolu · boilerplate değil.
//
// ═══════════════ ÖLÇMEDİĞİM ŞEY — açıkça yazıyorum (§11) ═══════════════
// ① Yergöğü'nün 1828-1829 savaşındaki İKİNCİ Rus işgali: İbrail'in kaydında var
//    (isg 1828-06-23 → 1829-09-14) ama TDV `yergogu` gövdesi Yergöğü için bunu
//    SÖYLEMİYOR — yalnız "1828-1829 savaşı öncesi topçu sayısı 213'ü buluyordu"
//    diyor, yani savaş ÖNCESİ Osmanlı garnizonu. İkinci isg: YAZILMADI, ölçülmedi.
// ② SİLİSTRE bu dosyada YOK. İşgalin BİTİŞİ TDV'de var (1811 Mayıs) ama BAŞLANGICI
//    yok: `silistre` gövdesi (20 KB, okundu) yalnız "1810'da şehir Ruslar tarafından
//    bombalandı" diyor — ay/gün VERMİYOR. Kapsayıcı madde denendi ve ölü çıktı
//    (`mahmud-ii` 302 · `ii-mahmud` 302). `1810-01-01` yazmak beş aylık UYDURMA bir
//    işgal üretirdi (§11: "yuvarlak tarih yalnız yanlış değildir, ÇELİŞKİYİ DE SAKLAR").
//    ⇒ "bulunamadı" bir SONUÇTUR; Silistre ayrı kalemde açık bırakıldı.
// ③ Bender · İsmail · Vidin · Turnu Severin'in 1806-1812 işgal kayıtları da yok;
//    bu turda TDV'den doğrulanmadı, bu dosyanın kapsamı dışı.

window.YER_YAMA_P0035 = [

  // ── ① YERGÖĞÜ — H-0100'ün ASIL KUSURU, hiçbir notta sayılmamıştı ──────────
  // VERİDE: s:[{f:"1810-09-27",t:"1829-09-14",d:"rusya"}]  ⇒ ONYEDİ YIL Rus.
  // TDV `yergogu` (gövde okundu, birebir alıntı):
  //   "Yergöğü 27 Eylül 1810'da Ruslar'ın eline geçti."
  //   "1828-1829 Osmanlı-Rus Savaşı neticesinde Edirne Antlaşması'na göre
  //    (2-14 Eylül 1829) İbrâil ve Kule/Turnu ile EFLAK PRENSLİĞİ'NE BIRAKILDI."
  //   "1828-1829 savaşı öncesi sadece topçu sayısı 213'ü buluyordu (BA, KK, nr. 4834)."
  // ⇒ 1829'da BIRAKABİLMESİ için 1829'a kadar Osmanlı'nın ELİNDE olması gerekir;
  //   ve savaş öncesi orada bir Osmanlı topçu garnizonu var. Rus tutuşu 1810-1812
  //   arasıdır (Bükreş Antlaşması, 1812-05-28 — külliyatta maddesi var).
  // ⇒ ÇARE: `s:rusya` bloğu KALKAR, yerine `isg:rusya` gelir (İbrail'in deseni),
  //   ve `d:` 1829-09-14'e uzar. Kimlik değişmez, boşluk doğmaz, Emre'nin gördüğü
  //   "kalıcı rus yeşili" yerine İbrail gibi TARALI bir işgal görünür.
  // ⚠️ `y:"savas"` KORUNDU: o alan bloğun BİTİŞİNİ değil EDİNİMİNİ anlatıyor
  //   (VERI-YAPISI.md: "Kazanım biçimi"), 1449 fethi savaşla oldu — hâlâ doğru.
  { ad: "Yergöğü (Giurgiu)",
    d: [{ f: "1420-01-01", t: "1427-01-01" },
        { f: "1449-01-01", t: "1829-09-14", y: "savas" }],
    s: [{ f: "1281-01-01", t: "1420-01-01", d: "eflak" },
        { f: "1427-01-01", t: "1449-01-01", d: "eflak" },
        { f: "1829-09-14", t: "1859-01-24", d: "eflak" },
        { f: "1859-01-24", t: "1881-03-26", d: "romanya" },
        { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }],
    isg: [{ f: "1810-09-27", t: "1812-05-28", d: "rusya", kaynak: "yergogu" }],
    kaynak: "yergogu",
    neden: "H-0100 · TDV yergogu: '27 Eylul 1810'da Ruslar'in eline gecti' + Edirne Antlasmasi (1829) ile Eflak Prensligi'ne birakildi ⇒ 1812-1829 arasi OSMANLI. s:rusya 17 yil fazlaydi; isg:e cevrildi, d: 1829-09-14'e uzatildi." },

  // ── ② NİĞBOLU — olaylar_ek21.js'in ADIYLA beklediği üç kayıttan biri ──────
  // TDV `nigbolu` (gövde okundu, birebir alıntı):
  //   "1810 yılı Ekim ayında (1808-1812 Türk-Rus savaşı dönemi) Niğbolu, meşhur
  //    Rus Generali Michail Kutuzov'un kuvvetleri tarafından ele geçirildi.
  //    Ruslar, şehri terketmeden önce 1811 Nisanında kalenin önemli kısmını
  //    havaya uçurup şehre büyük zarar verdiler."
  // ⚠️ TDV yalnız AYI veriyor, günü vermiyor ⇒ ikisi de ayın ilkine yazıldı
  //   (CLAUDE.md §8 · ve külliyattaki 1811-04-01 maddesi zaten aynı kaideyle yazılmış).
  // `d:` DEĞİŞMEDİ — işgal de jure sahipliği kaldırmaz; İbrail ve Rusçuk'un
  //   kayıtlarında da `d:` işgal boyunca KESİNTİSİZ sürüyor. Desen korundu.
  { ad: "Niğbolu",
    isg: [{ f: "1810-10-01", t: "1811-04-01", d: "rusya", kaynak: "nigbolu" }],
    kaynak: "nigbolu",
    neden: "H-0097 · TDV nigbolu: 1810 Ekiminde Kutuzov ele gecirdi, 1811 Nisaninda kaleyi ucurup cekildiler. Kronoloji maddesi 1811-04-01 'Nigbolu'nun geri alinisi' olaylar_ek21.js'te ZATEN VAR ve bu kaydin onunu acmak icin yazilmisti." },

  // ═══════════════════════════════════════════════════════════════════════
  // ③④⑤ — H-0088 · TERS ENKLAV: Osmanlı'nın İÇİNDE kalmış "safevi" nokta
  // ═══════════════════════════════════════════════════════════════════════
  // Emre (H-0088, görsel 1590-03-21 "Ferhad Paşa Antlaşması"):
  //   "bu osmanlı haritası içinde görülen farklı kırmızı tonda ve SAFEVİ yazan
  //    bölgeler hata mı yoksa bir tarihî gerçeğe dayanıyor mu, sebebi nedir"
  // CEVAP: HATA — ve mekanizması ölçüldü.
  //
  // 🔴 ÜÇÜ DE AYNI KUSUR SINIFI: kayıt kendi `kaynak:` alanında bir ŞABLON
  //   İLAN EDİYOR, ve o şablonun Osmanlı dönemlerini TAŞIMIYOR.
  //   Yani kusur yeni bir tarih araştırması gerektirmiyor — kaydın KENDİ
  //   BEYANINI kendi verisiyle uyumlu hâle getirmek yetiyor.
  //   📌 Hiçbir denetim bunu sormuyor: `kaynak:` alanı DOLU olduğu için
  //     §4'ün "kaynağı yazılmayan bilgi" süzgecinden GEÇİYOR. Alan bir
  //     DAYANAK ilan ediyor ve dayanak tutmuyor.
  //
  // ÖLÇÜM ① — "ankraj sınavı" (13 kayıt tarandı, tek yönlü: EKSİK olan aranır,
  //   fazlalık kusur sayılmaz — Bitlis ankrajından ERKEN Osmanlı ve bu MEŞRU):
  //     Çaldıran   ankraj Van    84 km   EKSİK 90,7 yıl (1548-08-25 → 1639-05-17)
  //     Başkale    ankraj Van    74 km   EKSİK 90,7 yıl (aynı aralık)
  //     Eçmiyadzin ankraj Revan  19 km   EKSİK 32,4 yıl   ← YAZILMADI, aşağıya bak
  //     Gümrü      ankraj Revan  88 km   EKSİK 32,4 yıl   ← YAZILMADI, aşağıya bak
  //
  // ÖLÇÜM ② — "ters enklav" (Osmanlı'nın içinde kalmış yabancı nokta; K=5 en
  //   yakın komşunun TAMAMI Osmanlı). 1595-06-01 ve 1600-01-01'de 7 aday,
  //   dördü meşru (Kotor · Tabarka · Tinos · Yedisan — gerçek ada/bozkır),
  //   üçü kusur: Başkale · Kasr-ı Şîrîn · Merend.
  //   📌 `Değişmez 7` bu soruyu SORMUYOR: o "bir OSMANLI kazancı ada gibi mi"
  //     diye sorar, "bir YABANCI tasarruf Osmanlı'nın içinde ada gibi mi"
  //     diye SORMAZ. `CLAUDE.md §3.5.1`: *"tek yönlü aramak yarısını kaçırır."*
  //
  // KIRILMA GÜNÜ: üçünde de kullanılan gün ÇEKİRDEKTE ve TAM GÜN eşleşiyor —
  //     1548-08-25  "Van'ın fethi ve doğu sınırının sabitlenmesi"  [olaylar_ek5.js]
  //     1590-03-21  "Ferhad Paşa Antlaşması — doğuda en geniş sınırlar" [olaylar_ek2.js]
  //     1603-10-21  "Şah Abbas'ın karşı taarruzu — Tebriz'in kaybı" [olaylar_ek2.js]
  // 🟢 YENİ GÜN DOĞURULMADI — sıfır.

  // ── ③ ÇALDIRAN ──────────────────────────────────────────────────────────
  // Kaydın kendi beyanı: `kaynak: "ankraj Van (78 km) — külliyattaki zincir"`.
  // Van'ın zinciri: s:safevi 1502-01-01→1548-08-25 · d:1548-08-25→1923-10-29.
  // Çaldıran'ınki: s:safevi 1502-01-01→**1639-05-17** · d:1639-05-17→1923-10-29.
  // 🔴 VE DÖRT KOMŞUSU DA VAN'IN ZİNCİRİNİ HARFİYEN TAŞIYOR — dördü de
  //   ilhanli 1281-1351 / karakoyunlu 1351-1467 / akkoyunlu 1467-1502 /
  //   safevi 1502→1548-08-25 / d:1548-08-25→1923-10-29 :
  //     Bargiri (Muradiye) · Özalp (Saray) · Hoşap (Mahmudi) · Çölemerik (Hakkâri)
  //   Çaldıran ve Başkale AYNI ŞABLONUN iki sapmasıdır; kusur veride değil
  //   KOPYADA — safevi bloğunun bitişi 1548 yerine 1639 (Kasr-ı Şîrîn
  //   Antlaşması günü) yazılmış.
  // TDV `hakkari` (HTTP 200, gövde 14 KB, okundu) bunu bağımsız doğruluyor:
  //   "XVI. yüzyılın başlarında Osmanlı idaresine giren yöre bir ara Safevîler'e
  //    tâbi oldu. Bu yüzyılın ORTALARINDA Osmanlılar'ın Van'ı fethetmesi üzerine
  //    kurulan VAN EYALETİNE BAĞLANDI ve ... sancaklardan (ocaklık) biri
  //    haline getirildi."
  // 1600-01-01'de kutusunda 18 Osmanlı · 7 safevi nokta var ve Çaldıran'ın dört
  //   yanı (Bargiri 20 km · Özalp 55 km · Doğubayazıt 47 km · Erciş 46 km)
  //   OSMANLI — yani harita orada bir SAFEVİ ADASI çiziyor.
  { ad: "Çaldıran",
    d: [{ f: "1548-08-25", t: "1923-10-29" }],
    s: [{ f: "1281-01-01", t: "1351-01-01", d: "ilhanli" },
        { f: "1351-01-01", t: "1467-01-01", d: "karakoyunlu" },
        { f: "1467-01-01", t: "1502-01-01", d: "akkoyunlu" },
        { f: "1502-01-01", t: "1548-08-25", d: "safevi" }],
    neden: "H-0088 · kaydin kendi kaynak: alani 'ankraj Van - kulliyattaki zincir' diyor ama Van'in 1548-08-25 gununu tasimiyordu (1639-05-17 yazilmis, 90,7 yil gec). Dort komsusu (Bargiri/Ozalp/Hosap/Colemerik) Van'in zincirini harfiyen tasiyor. TDV hakkari: Van'in fethi uzerine kurulan Van eyaletine baglandi." },

  // ── ④ BAŞKALE ───────────────────────────────────────────────────────────
  // Çaldıran ile BİREBİR aynı vaka (aynı şablon, aynı sapma, aynı ankraj).
  // Ayrıca `ters_enklav` aletinin K=5 sınavını GEÇEN üç kusurdan biri:
  //   en yakın beş komşusunun BEŞİ DE Osmanlı (Hoşap 30 km · Çölemerik 57 km ·
  //   Yüksekova 58 km · Van 55 km · Kotur 58 km) — tam bir ada.
  // TDV `hakkari` Başkale'yi ADIYLA anıyor ve Van-Hakkâri yolunun üstünde
  //   gösteriyor; Hakkâri sancağı Van eyaletinin ocaklık sancaklarındandı.
  { ad: "Başkale",
    d: [{ f: "1548-08-25", t: "1923-10-29" }],
    s: [{ f: "1281-01-01", t: "1351-01-01", d: "ilhanli" },
        { f: "1351-01-01", t: "1467-01-01", d: "karakoyunlu" },
        { f: "1467-01-01", t: "1502-01-01", d: "akkoyunlu" },
        { f: "1502-01-01", t: "1548-08-25", d: "safevi" }],
    neden: "H-0088 · Caldiran ile ayni sablon ve ayni sapma; ayrica ters-enklav sinavini gecen uc kusurdan biri (en yakin BES komsunun BESI DE Osmanli). TDV hakkari: yore Van eyaletine bagli ocaklik sancagiydi." },

  // ── ⑤ KASR-I ŞÎRÎN — EMRE'NİN GÖRSELİNDEKİ NOKTA ────────────────────────
  // H-0088-1.png: 1590-03-21, "SAFEVİ İRAN" etiketli bir kama Hânekîn ile
  // Kasr-ı Şîrîn arasında Osmanlı kırmızısının İÇİNDE duruyor. O kamayı
  // çizen petek Kasr-ı Şîrîn'in.
  // 🔴 VE KUSUR YARIM KOPYA: Kasr-ı Şîrîn'in zinciri Kirmanşah'ın şablonudur
  //   (ilhanli→celayirli 1340→timurlu→karakoyunlu 1452→akkoyunlu 1469→
  //    safevi 1503→afsar→zend→kacar) ve Kirmanşah'ın İKİ Osmanlı döneminden
  //   İKİNCİSİNİ zaten taşıyor — `d:1723-10-01→1730-08-12`, birebir aynı gün.
  //   BİRİNCİSİNİ (1590-03-21→1603-10-21) taşımıyor. Yani şablon kopyalanmış,
  //   bir blok DÜŞMÜŞ.
  // TDV `luristan` (HTTP 200, gövde okundu) o birinci dönemi veriyor:
  //   "Bir ara 998'de (1590) İstanbul'da yapılan antlaşmaya göre Osmanlı
  //    idaresine bağlanan Luristan'ı Şah I. Abbas Safevîler'e tam olarak
  //    bağladı (1603)."
  // ⚠️ `kirmansah` maddesi (200, gövde okundu) 1590/1603'ü ANMIYOR — kaydın
  //   kendi notundaki "TDV bu taneciği kapsamıyor" beyanı SINANDI ve TUTTU.
  //   `kasr-i-sirin` slug'ı 302 (ölü) — §4'ün TANECİKLİK boşluğu.
  // COĞRAFYA: Kasr-ı Şîrîn, Osmanlı Hânekîn'inin (25 km batı) ile Osmanlı
  //   Kirmanşah'ının (130 km doğu) TAM ARASINDA, Bağdat-Kirmanşah yolunun
  //   üstünde. İkisi de Osmanlı iken aradaki noktanın Safevî kalması
  //   yapısal olarak mümkün değil.
  // `s:` DİZİSİNE DOKUNULMADI — Kirmanşah'ın kendi kaydında da `d:` blokları
  //   `s:safevi` bloğunun içinde duruyor; şablonun yazım kuralı bu, ve
  //   sahiplik okumasında `d:` önce geliyor. Şablondan sapmadım.
  { ad: "Kasr-ı Şîrîn",
    d: [{ f: "1590-03-21", t: "1603-10-21" },
        { f: "1723-10-01", t: "1730-08-12" }],
    neden: "H-0088 · Emre'nin gorselindeki SAFEVI kamasi bu noktanin petegi. Kayit Kirmansah'in sablonunu tasiyor ve onun IKINCI Osmanli donemini (1723-1730) zaten iceriyor, BIRINCISINI (1590-1603) icermiyor - yarim kopya. TDV luristan: 1590 Istanbul antlasmasiyla Osmanli idaresine baglandi, Sah I. Abbas 1603'te geri aldi. Kasr-i Sirin, Osmanli Hanekin (25 km) ile Osmanli Kirmansah (130 km) arasinda." }
];

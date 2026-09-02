// =====================================================================
// YERLESIMLER_OK106 — BOZKIR PAKET A · tur 1
// window.YERLESIMLER_OK106   (§7: dosya adındaki ayırt edici parça
//                              değişken adında da — ayrı dosya vermek
//                              ayrı ad alanı vermek DEĞİLDİR)
// Oturum: OPUS HAZIR KITA 106 · 2 Eylül 2026 · koordinatör 1.MURAT
// Kaynak liste: denetim/ONERI-BOZKIR-NOKTA-0034.md (25 aday, PAKET A = 12)
//
// ⚠️ Dosyayı `girdi.py`ye BEN BAĞLAMIYORUM — koordinatör bağlar, ve koşu
//    sırasında o dosya zaten KİLİTLİ.
//
// ═══════════ BU TURDA BİR NOKTA — VE SEBEBİ ÖLÇÜM ═══════════
// PAKET A'nın 12 adayının 12'si için kaynak arandı. **Yalnız BİRİ**
// baştan sona TDV ile kapandı. Ötekiler `bulunamadı` — hangi sluglarla
// arandığı denetim/HUKUM-OK106.json ve aşağıdaki blokta tek tek yazılı.
// 📌 `§4`: *"'Bulunamadı' demek bir SONUÇTUR ve uydurmaktan kat kat
//    değerlidir."* Bir turda 5 kale yazmayı BEN önermiştim; ölçüm o
//    tahmini çürüttü ve tahmini tutturmak için tarih uydurmadım.
//
// ═══════════ DENETİM ETKİSİ — koşudan ÖNCE yazıyorum, çürütülebilir ═══
//   Değişmez 1   Yenikale `kur:1703-01-01`; o günden 1923'e kadar her an
//                sahipli ⇒ yeni sahipsizlik 0
//   Değişmez 2   İKİ Osmanlı kırılması doğar ve İKİSİ de maddeli:
//                  1703-01-01  ← maddesi BU TURDA yazıldı (olaylar_ok106.js)
//                  1774-07-21  ← külliyatta ZATEN var, ±0 gün
//                              ("Küçük Kaynarca Antlaşması", olaylar*.js)
//                ⇒ AÇIK +0 olmalı. Tavan SIFIR, mazereti yok.
//   Değişmez 2s  1774-07-21 `rusya` başlangıcı aynı gün ⇒ yeni AÇIK +0
//   Değişmez 4   `rusya` künyesi 1774'ü kapsıyor ⇒ hayalet +0
//   3 km kapısı  en yakın nokta Kerç 10,4 km ⇒ GEÇTİ (ölçüldü)
// =====================================================================

window.YERLESIMLER_OK106 = [

  // ── YENİKALE — Kerç Boğazı'nın kilidi, 1703'te SIFIRDAN kuruldu ─────
  // 🟢 TEK BAŞINA TAM KAPANAN ADAY: kuruluşu da kaybı da TDV'de, ve
  //    ikisi de GÜNÜ/YILI VERİLMİŞ hâlde.
  //
  //  TDV `kerc` (200, gövde okundu):
  //    "1115'te (1703) Kerç şehrinin 10 km. kuzeydoğusunda Akıntı Burnu
  //     mevkiinde Yenikale yapıldı."
  //    "1769-1774 Osmanlı-Rus savaşında Osmanlı Devleti'nin yenilmesi
  //     üzerine Kerç ve Yenikale elden çıktı."
  //    "1774'te Küçük Kaynarca Antlaşması hükümlerine göre Yenikale ile
  //     birlikte Rusya'ya terkedilen Kerç…"
  //  TDV `kucuk-kaynarca-antlasmasi` (200, gövde okundu):
  //    "Kılburun Kalesi (md. 18) ve Kerç ile Yenikale (md. 19), Küçük ve
  //     Büyük Kabartaylar (md. 21) Rusya'ya bırakılmaktaydı."
  //
  // 🟡 GÜN SEÇİMİ — ikisi de açıkça yazılıyor:
  //   1703-01-01  TDV YIL veriyor, GÜN vermiyor ⇒ `§4`in "gün bilinmiyorsa
  //               YYYY-01-01" kuralı. UYDURULMADI.
  //   1774-07-21  🔴 TDV maddesi antlaşma için İKİ tarih anıyor: delegeler
  //               **21 Temmuz 1774**'te imzalamış, tasdiknâme mübadelesi
  //               **26 Temmuz**'da olmuş. Külliyatın kendi maddesi
  //               ("Küçük Kaynarca Antlaşması") **1774-07-21**'de duruyor
  //               ⇒ o gün alındı. Bu bir TUTARLILIK seçimi DEĞİL: TDV'nin
  //               verdiği iki günden biri, ve külliyatla aynı olanı.
  //               26'yı yazmak Değişmez 2'yi ±5 günle hâlâ geçerdi ama
  //               aynı olayı iki günde tutan İKİNCİ bir kayıt doğururdu.
  //
  // 🔴 VE BİR ŞEYİ KASTEN YAPMADIM: Kerç'in kendi kaydına DOKUNMADIM.
  //    Kerç `d:[{1475-06-06 → 1774-07-21}]` taşıyor ve doğru; Yenikale
  //    onun İÇİNDEN doğan ayrı bir kale, ayrı bir petek. İkisi 10,4 km
  //    ayrı — 3 km kuralının üstünde, ve Boğaz'ın iki ayrı ucu.
  //
  // `m:"Kefe"` — Kerç'in bağlı olduğu merkezin aynısı (Kefe sancağı).
  // `k:4` — kale kademesi; komşu kaleler Or Kapı · Balaklava · İnkirman
  //   da k:4. Kerç k:3 (şehir), Yenikale ondan küçük bir istihkâm.
  { ad:"Yenikale", tur:"kale", lat:45.3521, lon:36.6004, g:0, k:4, m:"Kefe",
    kur:"1703-01-01",
    d:[{f:"1703-01-01",t:"1774-07-21"}],
    s:[{f:"1774-07-21",t:"1917-03-15",d:"rusya"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
    kaynak:"kerc" }

];

// ═══════════ PAKET A'NIN ÖTEKİ ON BİRİ — hepsi `bulunamadı` ═══════════
// Ve `bulunamadı` demeden önce `§4`ün İKİ basamağı da koşuldu:
//   ① dar slug denendi   ② tutmayınca KAPSAYICI madde denendi
//
//   Kılburun     dar slug `kilburun`·`kinburun` 302 · kapsayıcı `ozu` OKUNDU
//                → Kılburun'u yalnız KONUM olarak anıyor ("Özi'nin karşısı"),
//                  yapılış tarihi YOK. BİTİŞİ biliniyor (1774, Kaynarca md.18)
//                  ama BAŞLANGIÇ kaynaksız ⇒ YAZILMADI.
//                  🔴 Özi'nin 1538 gününü Kılburun'a yazmak cazipti ve
//                     REDDEDİLDİ: koordinatörün bu gece koyduğu kural —
//                     "bir seferin günü bütün bölgeye toptan yazılmasın"
//                     (1578-08-09 vakası). Kılburun 18. yy kalesi olabilir;
//                     1538 yazmak 200 yıl uydurmak olurdu.
//   Kızıkermen   `kizikermen`·`gazikerman`·`gazi-kerman` 302 · `ozu` maddesi
//                Dinyeper kalelerini (Aslan/Mübarek/Şahin Kerman dâhil) HİÇ
//                ANMIYOR — ölçüldü.
//   Arabat       `arabat` 302 · `kirim` ve `kerc` maddeleri ADINI ANMIYOR.
//   Temrük       `temruk` 302 · `sahib-giray` OKUNDU: yalnız Orkapı/Ferah
//                Kerman'ı anıyor, Kuban-Taman kalesi YOK. `karadeniz`
//                OKUNDU: Temrük'ü yalnız 18. yy tersane listesinde anıyor,
//                TARİH YOK.
//   Kopıl        `kopil` 302 · `nogaylar` OKUNDU: "Yedisan, Camboyluk, Bucak
//                ve Kuban Nogayları Kırım Hanlığı'nın hâkimiyeti altındaydı"
//                diyor ama Kopıl ADI GEÇMİYOR.
//   Açuyev       aynı — `nogaylar` ve `karadeniz` ikisi de anmıyor.
//   Sucuk Kale   `sucuk-kalesi` 302 · `karadeniz` anmıyor.
//   Balta        `balta`·`balta--sehir` 302 · kapsayıcı bulunamadı.
//   Dubossary    slug yok · kapsayıcı bulunamadı.
//   Kodak        `kodak` 302 · kapsayıcı bulunamadı.
//   Uman         🔴 `uman` 200 AMA YANLIŞ MADDE — açtığı madde **Umân**
//                (Arabistan'daki ülke). `§4 ②` tuzağının bu turdaki vakası:
//                canlı slug, doğru başlık, TAMAMEN BAŞKA KONU. İçeriği
//                okumasaydım Ukrayna şehrini "TDV'de var" sayacaktım.
//
// ⇒ ON BİRİ DE `§4`ün TANECİKLİK boşluğunda: TDV Kırım'ı ve Karadeniz'i
//   görüyor, ama bu kalelerin TEK TEK tarihlerini vermiyor. Kural gereği
//   standart akademik kaynak meşru — o tur AYRI BİR İŞ olarak duruyor ve
//   `kaynak:` alanına "bulunamadı — TDV bu taneciği kapsamıyor" damgasıyla
//   yazılacak.

// =====================================================================
// NOKTA AMERİKA — devam turu (16 Ağustos 2026)
// İŞÇİ oturum: NOKTA-AMERIKA · görev tahta M-0336 / M-0345
// Şartname: oturumlar/NOKTA-AMERIKA.md
// İlerleme günlüğü: oturumlar/NOKTA-AMERIKA-ILERLEME.md
//
// ⚠️ DOSYA ADI scratchpad UUID'in ilk 6 hanesine dayanıyor: 0ee15e49-…
//   ⇒ `yerlesimler_0ee15e.js`, değişken `window.YERLESIMLER_0EE15E`.
//
// ⚠️ Dosyayı girdi.py'ye BEN BAĞLAMIYORUM — koordinatör bağlar (şartname ④).
//
// ═══════════ YAZIM ÖNCESİ ÖLÇÜM ═══════════
// `data/yerlesimler_amerika.js` ZATEN 134 kayıtla girdi.py'ye BAĞLI (13-14
// Ağustos oturumu, oturumlar/NOKTA-AMERIKA-ILERLEME.md'de tam rapor var).
// O dosyaya DOKUNMUYORUM (§④ "SENİN DEĞİL"), yalnız GÖRÜLEN BOŞLUKLARI
// kendi dosyama ekliyorum.
//
// 🔴 BULUNAN BOŞLUK — Buenos Aires: mevcut dosyada Río de la Plata beşlisi
//   (Córdoba/Santa Fe/Corrientes/Mendoza/Asunción) var ama ŞEHRİN KENDİSİ
//   yok — 13 Ağustos'un dört-ekip birleştirmesinde düşmüş görünüyor (dosya
//   başlığı "3 mükerrer ÇÖZÜLDÜ" diyor, Buenos Aires bu süreçte kaybolmuş
//   olmalı — kaynak: `arjantin-cumhuriyeti` künye taslağının kendi
//   `baskent:"Buenos Aires"` alanı, ILERLEME.md §③). Tekrar mükerrer
//   üretmemek için: `data/yerlesimler_amerika.js` içinde "Buenos Aires"
//   veya "Plata" ARANDI (grep), yalnız yorum satırlarında geçiyor, gerçek
//   kayıt YOK — doğrulandı.
//
// ═══════════ KAYNAK ═══════════
// TDV İslâm Ansiklopedisi, "ARJANTİN" md., II. TARİH bölümü (Müellif: Rıza
// Kurtuluş) — https://islamansiklopedisi.org.tr/arjantin (canlı, içerik
// okundu, tam metin). Alıntı: "1536'da ... İspanyol Krallığı'na mensup
// denizci Pedro de Mendoza günümüzde Buenos Aires'in bulunduğu yerde ...
// bir İspanyol kolonisi kurdu ... Yerlilerin direnciyle karşılaşıp bir
// süre geri çekilen İspanyollar daha sonra tekrar hamle yaparak 1580'de
// Buenos Aires'i yeniden inşa ettiler." ⇒ 1536 kuruluşu TERK EDİLDİ (kalıcı
// yerleşim değil), `kur:` bu yüzden 1580 — projenin "kışlak/ostrog" ayrımıyla
// aynı mantık (CLAUDE.md §11: geçici/terk edilen ilk teşebbüs ≠ kalıcı
// kuruluş). TDV yalnız yıl veriyor, gün belirtmiyor ⇒ YYYY-01-01.
//
// `d:` zinciri MEVCUT beş Río de la Plata kaydıyla (Córdoba/Santa Fe/
// Corrientes/Mendoza) BİREBİR AYNI kalıp: "ispanya" → 1810-05-25 (Mayıs
// Devrimi, TDV: "1816'da İspanyol sömürgeciliğine karşı ... Buenos
// Aires'te 9 Temmuz 1816'da ... bağımsız devlet ilân edildi" — ama
// kırılma noktası olarak dosyanın geri kalanı 1810-05-25'i (Cabildo
// Abierto, İspanyol valiliğinin fiilen bittiği gün) kullanıyor, tutarlılık
// için AYNI tarih alındı, kararı değiştirmedim) → "arjantin-cumhuriyeti".
// TDV'nin kendi metni resmî "Arjantin Cumhuriyeti" adının 1862'de
// (Bartolomé Mitre) benimsendiğini yazıyor — 1810-1862 arası veri modelinde
// TEK künyeyle basitleştirilmiş durumda, bu YENİ bir karar değil, var olan
// beş kayıtla aynı basitleştirmeyi sürdürmek. Künyenin kendisi (`arjantin-
// cumhuriyeti`) HENÜZ devletler.js'te YOK — bu M-0368/M-0379'da bildirildi,
// taslağı ILERLEME.md §③'te hazır.
//
// 3 KM KURALI: en yakın kayıt Colonia del Sacramento (-34.4738,-57.8412,
// yerlesimler_amerika.js'te), aradaki mesafe ~47 km — ihlal yok.
//
// ═══════════ İKİNCİ TUR — Panama City + Guayaquil (Emre'nin isteği) ═══════
// TDV kapısı: "amerika" maddesi (T. Ahmet Ertek / Rıza Kurtuluş, II. TARİH)
// TAM METNİ okundu. İkisini de yalnız GEÇİŞTE anıyor:
//   "...1513'te Panama kıstağına ulaştılar..." · "...1530'da Panama'dan
//   ayrılan İspanyol Pizarro..." — Panama City'nin KURULUŞ tarihi YOK.
//   Guayaquil hiç geçmiyor (TDV arama: "guayaquil için madde başlıklarında
//   0 sonuç"). ⇒ TANECİKLİK BOŞLUĞU, §4 gereği akademik kaynağa geçildi.
// Kaynak: Encyclopaedia Britannica ("Panama City", "Guayaquil" maddeleri,
// erişim 16 Ağustos 2026) — M-0391'de koordinatörün sınıflandırmasıyla
// "SARI (Vikipedi sınıfı)": tek dayanak değil ama yönlendirici, muhafazakâr
// tarafta kalındı (yanlışsa kayıp birkaç kayıt, tersi kayıt kirletirdi).
//
// 🔴 İKİ YENİ KÜNYE BORCU DAHA — mevcut 32'lik listeye EK:
//   panama-cumhuriyeti  (1903-11-03 → 1923-10-29, Kolombiya'dan ayrılık)
//   (Guayaquil YENİ künye gerektirmiyor — Quito'nun zaten kullandığı
//    ispanyol-peru/gran-kolombiya/ekvador-cumhuriyeti zincirini paylaşıyor.)

window.YERLESIMLER_0EE15E = [

{ ad:"Buenos Aires", tur:"sehir", lat:-34.6037, lon:-58.3816, g:2, k:1, kur:"1580-01-01",
  s:[{f:"1580-01-01",t:"1810-05-25",d:"ispanya"},
     {f:"1810-05-25",t:"1923-10-29",d:"arjantin-cumhuriyeti"}] },
// kaynak: TDV İslâm Ansiklopedisi "arjantin" md., II. TARİH (Rıza Kurtuluş) —
//         1536 Pedro de Mendoza kuruluşu yerli direnciyle terk edildi, 1580'de
//         yeniden inşa (kur: bu yüzden 1580). 1810-05-25 Mayıs Devrimi —
//         mevcut Río de la Plata kayıtlarıyla (Córdoba/Santa Fe/Corrientes/
//         Mendoza) AYNI kırılma tarihi, tutarlılık için.
// k gerekçesi: 1776'dan Río de la Plata Genel Valiliği'nin, 1810'dan
//         Arjantin'in başkenti — bölgenin en yüksek kademeli şehri, k:1
//         (Lima/Havana ile aynı tier).

{ ad:"Panamá (Panama City)", tur:"sehir", lat:8.9824, lon:-79.5199, g:1, k:1, kur:"1519-08-15",
  s:[{f:"1519-08-15",t:"1821-11-28",d:"ispanyol-peru"},
     {f:"1821-11-28",t:"1831-01-01",d:"gran-kolombiya"},
     {f:"1831-01-01",t:"1903-11-03",d:"kolombiya-cumhuriyeti"},
     {f:"1903-11-03",t:"1923-10-29",d:"panama-cumhuriyeti"}] },
// kaynak: İKİ BAĞIMSIZ KAYNAK AYNI TARİHTE BİRLEŞİYOR (M-0423 gereği,
//         Britannica TEK BAŞINA yeterli değildi, ikinci kaynak arandı):
//         ① Encyclopaedia Britannica "Panama City" md. — "The old city
//           (Panamá Viejo) was founded in 1519 by Gov. Pedro Arias Dávila".
//         ② Encyclopedia.com "Panama City" md. (Encyclopedia of Latin
//           American History and Culture, Gale/Scribner) — "Panama City,
//           first founded on 15 August 1519 by Pedro Arias de Ávila (2.5
//           miles east of its present location), lasted for 152 years."
//         İkisi de GÜN dahil aynı tarihi veriyor (15 Ağustos, Meryem'in
//         Göğe Yükselişi bayramı). 1671 Henry Morgan'ın yıkımı ve yeniden
//         inşa tarihinde kaynaklar AYRIŞIYOR (Britannica 1674, Encyclopedia.
//         com "21 Ocak 1673, Antonio Fernández de Córdoba y Mendoza,
//         ~7 mil batıda") — ama bu ayrışma benim `kur:`ımı ETKİLEMİYOR,
//         çünkü AYRI kayıt AÇMADIM: İspanyol varlığı hiç kesilmedi (kışlak/
//         ostrog vakasından farklı, gerçek bir devletsizlik penceresi yok),
//         tek şehir kimliğinin devamı olarak modellendi. Koordinat modern
//         şehir merkezine (Casco Viejo yakını) ait.
//         1751: "the city and area became part of the Viceroyalty of New
//         Granada" — ama Quito kaydıyla TUTARLILIK için `ispanyol-peru`
//         1821'e kadar SÜRDÜRÜLDÜ (Quito da aynı basitleştirmeyi taşıyor,
//         viceroyalty geçişi ayrı künyeye dönüştürülmedi).
//         1821-11-28: Panama'nın İspanya'dan bağımsızlık ilanı ve GÖNÜLLÜ
//         Gran Kolombiya'ya katılımı — bugün Panama'nın resmî "Bağımsızlık
//         Günü", genel akademik/ansiklopedik konsensüs, tarihi tartışmasız.
//         1831-01-01: `kolombiya-cumhuriyeti` künye taslağının KENDİ f:
//         tarihiyle hizalandı (ILERLEME.md §③).
//         1903-11-03: Britannica — "In 1903 independence from Colombia was
//         declared there" — Kolombiya'dan ayrılığın genel bilinen tarihi.
// 🔴 YENİ KÜNYE BORCU: `panama-cumhuriyeti` devletler.js'te YOK, mevcut
//         32'lik taslağa dahil değildi — TAHTAYA bildirilecek.
// k gerekçesi: Real Audiencia de Panamá'nın sömürge dönemi başkenti, kıtalar
//         arası ticaret kavşağı (İspanya'nın Peru gümüşünü Avrupa'ya taşıdığı
//         güzergâh) — k:1, Havana ile aynı tier.

{ ad:"Guayaquil (Santiago de Guayaquil)", tur:"sehir", lat:-2.1919, lon:-79.9009, g:1, k:1, kur:"1538-01-01",
  s:[{f:"1538-01-01",t:"1822-05-24",d:"ispanyol-peru"},
     {f:"1822-05-24",t:"1830-05-13",d:"gran-kolombiya"},
     {f:"1830-05-13",t:"1923-10-29",d:"ekvador-cumhuriyeti"}] },
// 🔴 KAYNAKLAR ÇELİŞİYOR — M-0423 gereği ikinci kaynak arandı, DOĞRULAMADI,
//         ÇÜRÜTTÜ. Tek başına kullanılmadı, tahtaya AYRICA bildirildi.
// kaynak: ① Encyclopaedia Britannica "Guayaquil" md. — "founded in the
//         1530s ... by Sebastián de Belalcázar ... but Indians destroyed
//         it twice. In 1537 ... Francisco de Orellana established the town
//         at its present location, naming it Santiago de Guayaquil in
//         honour of Santiago (St. James, on whose feast day it was
//         founded)" — Santiago bayramı 25 Temmuz.
//         ② Encyclopedia.com "Guayaquil" md. (Encyclopedia of Latin
//         American History and Culture) — "The date and founder of the
//         city are NOT AGREED UPON, although Guayaquil is MOST COMMONLY
//         BELIEVED to have been established in 1531 by ... Sebastián de
//         Belalcázar" — yani ②'ye göre EN YAYGIN GÖRÜŞ Britannica'nın
//         "terk edildi" dediği 1531 teşebbüsünün KENDİSİ, Orellana/1537-38
//         değil.
// ⇒ Gün düzeyi kesinlik (25 Temmuz) BIRAKILDI, kur: yıla yuvarlandı VE
//         MUHAFAZAKÂR (geç) tarafa çekildi: 1531 değil 1538 — M-0391'in
//         ilkesiyle aynı ("yanılırsam kaybım birkaç yıl erken çizmemek;
//         tersini seçip yanılsam veri erken var OLMAYAN bir yerleşim
//         gösterirdi"). Kesin gün YOK, YYYY-01-01.
// ⚠️ BİLİNEN BASİTLEŞTİRME — açıkça işaretli: Guayaquil kendi başına
//         9 Ekim 1820'de İspanya'dan bağımsızlığını ilan etti ("Özgür
//         Guayaquil Vilayeti", ~1,5-2 yıl fiilen ayrı durdu) ve TAM Gran
//         Kolombiya'ya katılımı 1822 Temmuz'unda (Bolívar-San Martín
//         Guayaquil Konferansı, 26 Temmuz 1822) netleşti. Bu ARA DÖNEM
//         AYRI bir kimlik/boşluk kaydı GEREKTİRİR ama işlenmedi — mevcut
//         `data/yerlesimler_amerika.js`teki Quito kaydıyla (aynı Real
//         Audiencia, `ispanyol-peru→gran-kolombiya` kırılması 1822-05-24
//         Pichincha Muharebesi) TUTARLILIK için AYNI tarih kullanıldı.
//         Aynı sınıf basitleştirme dosyanın kendi §④ maddesi 5'te de var
//         (Río de la Plata/Artigas, "HÂLÂ AÇIK — ayrı bir kimlik gerektirir").
// k gerekçesi: Ekvador'un en büyük limanı/ekonomik merkezi, Quito ile
//         rekabet eden ikinci kutup — k:1.

{ ad:"Portobelo (Puerto Bello)", tur:"sehir", lat:9.5500, lon:-79.6500, g:0, k:2, kur:"1597-01-01",
  s:[{f:"1597-01-01",t:"1821-11-28",d:"ispanyol-peru"},
     {f:"1821-11-28",t:"1831-01-01",d:"gran-kolombiya"},
     {f:"1831-01-01",t:"1903-11-03",d:"kolombiya-cumhuriyeti"},
     {f:"1903-11-03",t:"1923-10-29",d:"panama-cumhuriyeti"}] },
// Panama City araştırmasında rastlanan İKİNCİ boşluk (Emre'nin isteğinin
// doğrudan devamı değil ama aynı kaynak taramasında bulundu, kaydedildi).
// kaynak: ① Encyclopaedia Britannica "Portobelo" md. — "the village was
//         founded in 1597" (Kristof Kolomb 1502'de "güzel liman" adını
//         vermişti, YERLEŞİM 1597'de kuruldu — iki ayrı olay, karıştırma).
//         ② UNESCO Dünya Mirası "Fortifications on the Caribbean Side of
//         Panama: Portobelo-San Lorenzo" (WHS #135) — "the first
//         fortifications in Portobelo were begun in the 1590's" (ilk
//         planlar 1586, Bautista Antonelli) — Britannica'nın 1597 tarihiyle
//         ÇELİŞMİYOR, DESTEKLİYOR. İki kaynak UYUMLU, gün verilmediği için
//         YYYY-01-01.
// `d:` zinciri Panama City ile BİREBİR AYNI (aynı Audiencia/vilayet/
// cumhuriyet), tutarlılık için.
// k gerekçesi: İspanya'nın Peru gümüşünü Avrupa'ya taşıdığı sistemin
//         Karayip terminali, yıllık panayırlarıyla ünlü — ama idari başkent
//         değil, Panama City'den (k:1) bir kademe altında — k:2.

];

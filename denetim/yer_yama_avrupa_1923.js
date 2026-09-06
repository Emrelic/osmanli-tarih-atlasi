// -*- coding: utf-8 -*-
// AVRUPA — 1923 SINIR DENETİMİ · yerleşim sahiplik yaması
// Oturum: AVRUPA · koordinatör 1.MURAT HÜDAVENDİGAR
// 🔒 data/ DONUK (koşu 7b) — bu dosya denetim/ altında BEKLİYOR.
// ÜRETİLDİ, elle yazılmadı: denetim/ARAC-AVRUPA-YAMA-URET-0906.js --yaz
//
// KALEM: piombino — künye t:1548-01-01, veri 1923-10-29 (375,8 yıl).
// ÖLÇÜM iki AYRI kusur buldu, çareleri TERS yönde (§3.5.0):
//   ② KÜNYE DAR   1548 bir SON değil; Treccani (Enciclopedia Italiana):
//      'nel 1548 ... permettere a costui di presidiare e fortificare
//       Portoferraio e infine di occupare, SIA PURE TEMPORANEAMENTE,
//       Piombino' ve 'solo nel 1557 ... Cosimo si decise a renderlo a
//       Iacopo VI.' ⇒ 1548 GEÇİCİ bir işgal, prenslik 1557'de İADE edildi.
//   ① VERİ FAZLA  Prenslik 1815'te bitti: 'Caduto Napoleone, con l'atto
//      finale del congresso di Vienna, Piombino fu unita alla Toscana.'
//      ⇒ 1815-1923 arası (108,4 yıl) GERÇEK anakronizm; 1548-1815 arası
//        (267,4 yıl) ise veri DOĞRU, künye DAR.
//
// GÜN SEÇİMİ — ikisi de KOMŞUNUN kullandığı gün (YONTEM §③) VE çekirdekte
// 0 gün uzaklıkta, konusu BİREBİR ilgili maddesi var:
//   1815-06-09  36 kayıt kullanıyor · çekirdek: 'Viyana Kongresi Nihai Senedi'
//   1861-03-17  36 kayıt kullanıyor · çekirdek: 'İtalya Krallığı'nın ilânı'
//   (1860-03-22 = toskana künyesinin t:'si — atlasta HİÇBİR kayıt kullanmıyor,
//    ve o gün çekirdekte en yakın madde 66 gün ve ALAKASIZ ⇒ KULLANILMADI.)
//
// EMSAL — Toskana kutusundaki 3 nokta AYNISINI yapıyor, ölçüldü:
//   Floransa · Pisa · Siena  hepsi 'toskana' -> 1861-03-17 -> 'italya'
//   toskana künyesi 1860-03-22'de bitiyor ⇒ 360 gün aşım, tolerans 400 (🟢)
// Napolyon ara dönemleri (1801/1805/1809/1814) YAZILMADI: emsal noktaların
// HİÇBİRİ onları ifade etmiyor (Floransa 1281->1861 tek blok) ⇒ tek başıma
// bir tanecik açmıyorum (§11: model ifade edemiyorsa veri SUSAR).
//
// 🔴 KÜNYE ÖN KOŞULU: bu yama TEK BAŞINA İNEMEZ — `piombino` künyesinin
//   t:'1548-01-01' -> '1815-06-09' GENİŞLETİLMESİ gerekiyor, yoksa dönem
//   künyeyi 97.679 gün aşar (ÖLÇÜLDÜ, ARAC-AVRUPA-YAMA-URET-0906.js).
//   Künye önerisi: denetim/ONERI-KUNYE-DUZELTME-AVRUPA-0906.json
//   🔴 Adı KASTEN `ONERI-` ile başlıyor: `_kunye_uygula.py` YENİ künye ekler,
//   MEVCUT id'yi "KİMLİK ÇAKIŞMASI — zaten var" diye REDDEDER (satır 223-224).
//   Bu bir `t:` DÜZELTMESİ ⇒ o aletin işi değil, ELLE uygulanır.
//   Renk: piombino #d86c24 · toskana #b484f3 · italya #74a074 — ÜÇÜ DE VAR.

window.YER_YAMA_AVRUPA_1923 = [

  { ad:"Elba",
    s:[{f:"1281-01-01",t:"1399-02-19",d:"piza"},
     {f:"1399-02-19",t:"1815-06-09",d:"piombino"},
     {f:"1815-06-09",t:"1861-03-17",d:"toskana"},
     {f:"1861-03-17",t:"1923-10-29",d:"italya"}
    ],
    kaynak:"Treccani, Enciclopedia Italiana, 'Piombino' — 1548 geçici işgal ('sia pure temporaneamente'), 1557 iade ('solo nel 1557 ... renderlo a Iacopo VI'), 1805 Elisa Bonaparte, 1815 Viyana Kongresi Nihai Senedi ile Toskana'ya birleştirme ('con l'atto finale del congresso di Vienna, Piombino fu unita alla Toscana'). TDV kapsam dışı — 'piza' slug 302 ölü, Batı Avrupa TDV kapsamı %0 (§4). Britannica 'Elba' HTTP 403 ⇒ ÖLÇÜLEMEDİ, 'kaynak yok' DEĞİL." },

];

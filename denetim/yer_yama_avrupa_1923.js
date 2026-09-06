// -*- coding: utf-8 -*-
// AVRUPA — 1923 SINIR DENETİMİ · yerleşim sahiplik yaması
// Oturum: AVRUPA · koordinatör 1.MURAT HÜDAVENDİGAR
// 🔒 data/ DONUK (koşu 7b) — bu dosya denetim/ altında BEKLİYOR.
// ÜRETİLDİ, elle yazılmadı: node denetim/ARAC-AVRUPA-YAMA-URET-0906.js --yaz
//
// =====================================================================
// KALEM ① — Elba / `piombino`
// =====================================================================
// Künye t:1548-01-01, veri 1923-10-29 ⇒ 375,8 yıl. ÖLÇÜM bunun TEK bir
// anakronizm OLMADIĞINI gösterdi — İKİ kusur üst üste, çareleri TERS (§3.5.0):
//   ② KÜNYE DAR   1548-1815 (267,4 yıl) — veri DOĞRU, künye dar.
//      Treccani: 1548 'SIA PURE TEMPORANEAMENTE' bir işgal, ve 'SOLO NEL 1557
//      ... Cosimo si decise a renderlo a Iacopo VI' ⇒ prenslik İADE edildi,
//      Ludovisi (1634) ve Boncompagni (1702) ile SÜRDÜ.
//   ① VERİ FAZLA  1815-1923 (108,4 yıl) — GERÇEK anakronizm.
//      'Caduto Napoleone, con l'atto finale del congresso di Vienna,
//       Piombino fu unita alla Toscana.'
// ⚠️ `sardinya` emsali (439 yıl ama MEŞRU) SINANDI ve ÇÜRÜDÜ: 1548 ne bir
//    unvanın doğuşu ne ölümü. Ölçek bir ÖNCEL'di, hüküm ölçümden geldi.
// 🔴 Ve bu yama bir SİLİNMEYİ de geri alıyor: kaydın 5 Eylül öncesi hâli
//    `toskana → 1861-03-17 → italya` taşıyordu (BULGU-ELBA-0905 §①); o günkü
//    yama `piza`yı düzeltirken bu iki dönemi SİLDİ (§3.5.1: iki uç da ölçülür).
//
// =====================================================================
// KALEM ② — Dublin / `irlanda-serbest-devlet`
// =====================================================================
// 🔴 Dublin 1923-10-28'de `ingiltere` boyanıyor — oysa İrlanda Serbest
//    Devleti'nin BAŞKENTİ. Şartnamenin açık kalem listesinde YOKTU; kutu
//    ölçümü buldu (denetim/ARAC-AVRUPA-2S-0906.py --kutu).
// 🟢 KANIT KAYDIN KENDİ İÇİNDE: `kd:[{f:"1922-12-06",t:"1923-10-29",k:1}]`
//    kademe zinciri o günü ZATEN taşıyor, `s:` TAŞIMIYOR ⇒ aynı kayıtta iki
//    boyut çelişiyor (`Değişmez 3`).
// 📌 Niçin kaçmış: Dublin `data/yerlesimler.js`te, öteki 10 İrlanda noktası
//    `data/yerlesimler_avrupa.js`te ⇒ İrlanda partisini yazan oturumun evreni
//    dardı (§11: "ölçüm doğru, evren dar").
// 🟢 Belfast (54,60/-5,93) ve Derry (55,00/-7,31) `ingiltere` kalıyor — DOĞRU,
//    Kuzey İrlanda 7 Aralık 1922'de opt-out etti.
// ⚠️ ÖLÇÜLDÜ AMA YAZILMADI: 6 Aralık 1922'de Kuzey İrlanda teknik olarak BİR
//    GÜN Serbest Devlet'in parçasıydı. Tek günlük bir dönem yazmak §8'in
//    "sıfır/çok kısa dönem" riskini taşır ve emsali yok ⇒ veri SUSUYOR (§11).
//
// =====================================================================
// KALEM ③ — İSPANYA'NIN ÖNCÜL TACLARI · 9 nokta
// =====================================================================
// Dokuz nokta 1281'den beri doğrudan `ispanya` yazıyor. Oysa öncül künyeler
// VAR ve ardılın `f:`siyle GÜN GÜN BİTİŞİK:
//     kastilya  1230-09-23 → 1479-01-20  ┐
//     aragon    1164-01-01 → 1479-01-20  ├─ ispanya  1479-01-20 → 1923-10-29
//     granada   1238-05-12 → 1492-01-02  ┘
// 🟢 EMSAL EZİCİ, ÖLÇÜLDÜ: 22 nokta `kastilya` · 11 `aragon` · 7 `granada`
//    kullanıyor (Toledo · Valladolid · Burgos · Zaragoza · Girona · Alicante…).
//    Bu dokuz nokta konvansiyonun DIŞINDA kalmış — ve aralarında Madrid,
//    Sevilla, Barselona var, yani ülkenin en büyük şehirleri.
// 🔴 Bu `sardinya` sınıfı DEĞİL (`§3.5.0③`, ad/unvan ömrü ≠ tasarruf
//    sürekliliği): orada ÖNCÜL KÜNYE YOKTU, burada VAR ve penceresi TUTUYOR.
//    `§3.5.0`ın ön koşulu — "künye var mı VE penceresi boşluğu kapatıyor mu" —
//    ikisi de sağlanıyor.
// 🟢 YENİ TARİH İDDİASI YOK: gün künyelerin kendi `f:`/`t:`si, ve atlasta
//    `1479-01-20`yi 60 kayıt kullanıyor (YONTEM §③).
// ⚠️ BEYAN — Mayorka Krallığı (1276-1349) TARANDI, KÜNYESİ YOK. O tanecik
//    ifade edilemiyor ⇒ Balear adaları doğrudan `aragon` yazıldı. Bu bir
//    BASİTLEŞTİRME ve emsalle uyumlu (Castellón · Alicante da `aragon`).
// ⚠️ Kalyari ve Sasari'nin mevcut zinciri KORUNDU (`ceneviz` 1281-1324 ve
//    `sardinya` 1720-1861 dönemleri dokunulmadan duruyor); yalnız 1324-1479
//    arası `ispanya` → `aragon` oldu. Sardinya 1324'te Aragon'un fethiydi.
//
// =====================================================================
// GÜN SEÇİMİ — üçü de KOMŞUNUN kullandığı gün (YONTEM §③)
// =====================================================================
//   1815-06-09   36 kayıt · çekirdek 0 GÜN «Viyana Kongresi Nihai Senedi»   🟢
//   1861-03-17   36 kayıt · çekirdek 0 GÜN «İtalya Krallığının ilânı»       🟢
//   1922-12-06   20 kayıt · çekirdek 19 gün ama KONUSU İLGİSİZ (Vahdeddin)  🔴
//   (1860-03-22 = toskana künyesinin t:'si — atlasta 0 kayıt kullanıyor ve
//    çekirdekte en yakın madde 66 gün + alakasız ⇒ KULLANILMADI. Emsal de
//    onu kullanmıyor: Floransa · Pisa · Siena üçü de 1861-03-17'ye uzatıyor.)
// 🔴 `1922-12-06` için ÇEKİRDEK MADDESİ GEREKİYOR (§⑤/§10) — öneri:
//    denetim/KRONOLOJI-AVRUPA-0906.json
//
// =====================================================================
// ÖN KOŞUL — bu yama TEK BAŞINA İNEMEZ
// =====================================================================
// `piombino` künyesi t:1548-01-01 → 1815-06-09 GENİŞLETİLMELİ, yoksa dönem
// künyeyi 97.679 gün aşar. Sınav bunu kendi yakaladı (④ ÖN KOŞUL ÖTTÜ).
//   Öneri: denetim/ONERI-KUNYE-DUZELTME-AVRUPA-0906.json
//   🔴 Adı KASTEN `ONERI-`: `_kunye_uygula.py` MEVCUT id'yi "KİMLİK ÇAKIŞMASI"
//   diye REDDEDER (satır 223-224) ⇒ bu bir `t:` düzeltmesi, ELLE inecek.
// Renk ÖLÇÜLDÜ, hepsi VAR: piombino #d86c24 · toskana #b484f3 · italya
// #74a074 · piza #2ac9a8 · ingiltere ve irlanda-serbest-devlet de renkli.
//
// 🔴 MEVCUT `not:` ALANI BAYATLAYACAK: Elba'nın canlı `not:`ı "bu tek
// 'piombino' periyodu 1923'e KADAR BASİTLEŞTİRMEDİR" diyor. Yama inince o
// cümle yanlış olur (periyot 1815'te bitiyor). `_sahiplik_uygula.py` dolu bir
// `not:`ı EZMEZ (SKALER_KORUNAN) ⇒ ELLE güncellenmeli.
// =====================================================================

window.YER_YAMA_AVRUPA_1923 = [

  { ad:"Elba",
    s:[{f:"1281-01-01",t:"1399-02-19",d:"piza"},
       {f:"1399-02-19",t:"1815-06-09",d:"piombino"},
       {f:"1815-06-09",t:"1861-03-17",d:"toskana"},
       {f:"1861-03-17",t:"1923-10-29",d:"italya"}
    ],
    kaynak:"Treccani, Enciclopedia Italiana, 'Piombino' — 1548 GEÇİCİ işgal ('...di occupare, SIA PURE TEMPORANEAMENTE, Piombino'), 1557 iade ('SOLO NEL 1557 ... Cosimo si decise a renderlo a Iacopo VI'), 1805 Elisa Bonaparte, 1815 Viyana Kongresi Nihai Senedi ile Toskana'ya birleştirme ('Caduto Napoleone, con l'atto finale del congresso di Vienna, Piombino fu unita alla Toscana'). TDV kapsam dışı — 'piza' slug 302 ölü, Batı Avrupa TDV kapsamı %0 (§4). Britannica 'Elba' HTTP 403 ⇒ ÖLÇÜLEMEDİ, 'kaynak yok' DEĞİL." },

  { ad:"Dublin",
    s:[{f:"1281-01-01",t:"1922-12-06",d:"ingiltere"},
       {f:"1922-12-06",t:"1923-10-29",d:"irlanda-serbest-devlet"}
    ],
    kaynak:"RTÉ Century Ireland (İrlanda ulusal yayıncısının Boston College ortaklı akademik tarih projesi): 'The constitution of the Irish Free State became law on 6 December 1922.' İkinci bağımsız teyit: 6 Aralık 1922'de George V'in bildirisiyle Serbest Devlet kuruldu ve Dublin başkenti oldu. TDV kapsam dışı — Batı Avrupa TDV kapsamı %0 (§4)." },

  { ad:"Madrid",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya"}
    ],
    kaynak:"İÇ TUTARLILIK DÜZELTMESİ — yeni tarih iddiası YOK. `kastilya` (künye kaynağı: TDV `kastilya--ispanya`) ve `aragon` (TDV `aragon`) künyeleri 1479-01-20'de bitiyor, `ispanya` künyesi (TDV `ispanya`) AYNI GÜN başlıyor; künyelerin kendi `ozet` alanları geçişi tarif ediyor ('Katolik Kralların evliliğiyle Aragon ile birleşerek İspanya'nın çekirdeğini oluşturdu'). Atlasın EMSALİ: 22 nokta `kastilya`, 11 nokta `aragon`, 7 nokta `granada` ile zincirlenmiş; bu dokuz nokta o konvansiyonun DIŞINDA kalmıştı. Gün 1479-01-20'yi atlasta 60 kayıt kullanıyor (YONTEM §③ komşu kuralı). Taç ataması coğrafî: Madrid/Sevilla Kastilya Tacı, Barselona/Valensiya/Balear/Sardinya Aragon Tacı." },

  { ad:"Sevilla",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya"}
    ],
    kaynak:"İÇ TUTARLILIK DÜZELTMESİ — yeni tarih iddiası YOK. `kastilya` (künye kaynağı: TDV `kastilya--ispanya`) ve `aragon` (TDV `aragon`) künyeleri 1479-01-20'de bitiyor, `ispanya` künyesi (TDV `ispanya`) AYNI GÜN başlıyor; künyelerin kendi `ozet` alanları geçişi tarif ediyor ('Katolik Kralların evliliğiyle Aragon ile birleşerek İspanya'nın çekirdeğini oluşturdu'). Atlasın EMSALİ: 22 nokta `kastilya`, 11 nokta `aragon`, 7 nokta `granada` ile zincirlenmiş; bu dokuz nokta o konvansiyonun DIŞINDA kalmıştı. Gün 1479-01-20'yi atlasta 60 kayıt kullanıyor (YONTEM §③ komşu kuralı). Taç ataması coğrafî: Madrid/Sevilla Kastilya Tacı, Barselona/Valensiya/Balear/Sardinya Aragon Tacı." },

  { ad:"Barselona",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya"}
    ],
    kaynak:"İÇ TUTARLILIK DÜZELTMESİ — yeni tarih iddiası YOK. `kastilya` (künye kaynağı: TDV `kastilya--ispanya`) ve `aragon` (TDV `aragon`) künyeleri 1479-01-20'de bitiyor, `ispanya` künyesi (TDV `ispanya`) AYNI GÜN başlıyor; künyelerin kendi `ozet` alanları geçişi tarif ediyor ('Katolik Kralların evliliğiyle Aragon ile birleşerek İspanya'nın çekirdeğini oluşturdu'). Atlasın EMSALİ: 22 nokta `kastilya`, 11 nokta `aragon`, 7 nokta `granada` ile zincirlenmiş; bu dokuz nokta o konvansiyonun DIŞINDA kalmıştı. Gün 1479-01-20'yi atlasta 60 kayıt kullanıyor (YONTEM §③ komşu kuralı). Taç ataması coğrafî: Madrid/Sevilla Kastilya Tacı, Barselona/Valensiya/Balear/Sardinya Aragon Tacı." },

  { ad:"Valensiya",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya"}
    ],
    kaynak:"İÇ TUTARLILIK DÜZELTMESİ — yeni tarih iddiası YOK. `kastilya` (künye kaynağı: TDV `kastilya--ispanya`) ve `aragon` (TDV `aragon`) künyeleri 1479-01-20'de bitiyor, `ispanya` künyesi (TDV `ispanya`) AYNI GÜN başlıyor; künyelerin kendi `ozet` alanları geçişi tarif ediyor ('Katolik Kralların evliliğiyle Aragon ile birleşerek İspanya'nın çekirdeğini oluşturdu'). Atlasın EMSALİ: 22 nokta `kastilya`, 11 nokta `aragon`, 7 nokta `granada` ile zincirlenmiş; bu dokuz nokta o konvansiyonun DIŞINDA kalmıştı. Gün 1479-01-20'yi atlasta 60 kayıt kullanıyor (YONTEM §③ komşu kuralı). Taç ataması coğrafî: Madrid/Sevilla Kastilya Tacı, Barselona/Valensiya/Balear/Sardinya Aragon Tacı." },

  { ad:"Mayorka (Palma)",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya"}
    ],
    kaynak:"İÇ TUTARLILIK DÜZELTMESİ — yeni tarih iddiası YOK. `kastilya` (künye kaynağı: TDV `kastilya--ispanya`) ve `aragon` (TDV `aragon`) künyeleri 1479-01-20'de bitiyor, `ispanya` künyesi (TDV `ispanya`) AYNI GÜN başlıyor; künyelerin kendi `ozet` alanları geçişi tarif ediyor ('Katolik Kralların evliliğiyle Aragon ile birleşerek İspanya'nın çekirdeğini oluşturdu'). Atlasın EMSALİ: 22 nokta `kastilya`, 11 nokta `aragon`, 7 nokta `granada` ile zincirlenmiş; bu dokuz nokta o konvansiyonun DIŞINDA kalmıştı. Gün 1479-01-20'yi atlasta 60 kayıt kullanıyor (YONTEM §③ komşu kuralı). Taç ataması coğrafî: Madrid/Sevilla Kastilya Tacı, Barselona/Valensiya/Balear/Sardinya Aragon Tacı." },

  { ad:"Menorka (Mahon)",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},
       {f:"1479-01-20",t:"1708-09-29",d:"ispanya"},
       {f:"1708-09-29",t:"1802-03-25",d:"ingiltere"},
       {f:"1802-03-25",t:"1923-10-29",d:"ispanya"}
    ],
    kaynak:"İÇ TUTARLILIK DÜZELTMESİ — yeni tarih iddiası YOK. `kastilya` (künye kaynağı: TDV `kastilya--ispanya`) ve `aragon` (TDV `aragon`) künyeleri 1479-01-20'de bitiyor, `ispanya` künyesi (TDV `ispanya`) AYNI GÜN başlıyor; künyelerin kendi `ozet` alanları geçişi tarif ediyor ('Katolik Kralların evliliğiyle Aragon ile birleşerek İspanya'nın çekirdeğini oluşturdu'). Atlasın EMSALİ: 22 nokta `kastilya`, 11 nokta `aragon`, 7 nokta `granada` ile zincirlenmiş; bu dokuz nokta o konvansiyonun DIŞINDA kalmıştı. Gün 1479-01-20'yi atlasta 60 kayıt kullanıyor (YONTEM §③ komşu kuralı). Taç ataması coğrafî: Madrid/Sevilla Kastilya Tacı, Barselona/Valensiya/Balear/Sardinya Aragon Tacı." },

  { ad:"İbiza",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya"}
    ],
    kaynak:"İÇ TUTARLILIK DÜZELTMESİ — yeni tarih iddiası YOK. `kastilya` (künye kaynağı: TDV `kastilya--ispanya`) ve `aragon` (TDV `aragon`) künyeleri 1479-01-20'de bitiyor, `ispanya` künyesi (TDV `ispanya`) AYNI GÜN başlıyor; künyelerin kendi `ozet` alanları geçişi tarif ediyor ('Katolik Kralların evliliğiyle Aragon ile birleşerek İspanya'nın çekirdeğini oluşturdu'). Atlasın EMSALİ: 22 nokta `kastilya`, 11 nokta `aragon`, 7 nokta `granada` ile zincirlenmiş; bu dokuz nokta o konvansiyonun DIŞINDA kalmıştı. Gün 1479-01-20'yi atlasta 60 kayıt kullanıyor (YONTEM §③ komşu kuralı). Taç ataması coğrafî: Madrid/Sevilla Kastilya Tacı, Barselona/Valensiya/Balear/Sardinya Aragon Tacı." },

  { ad:"Kalyari (Cagliari)",
    s:[{f:"1281-01-01",t:"1324-01-01",d:"ceneviz"},
       {f:"1324-01-01",t:"1479-01-20",d:"aragon"},
       {f:"1479-01-20",t:"1720-02-24",d:"ispanya"},
       {f:"1720-02-24",t:"1861-03-17",d:"sardinya"},
       {f:"1861-03-17",t:"1923-10-29",d:"italya"}
    ],
    kaynak:"İÇ TUTARLILIK DÜZELTMESİ — yeni tarih iddiası YOK. `kastilya` (künye kaynağı: TDV `kastilya--ispanya`) ve `aragon` (TDV `aragon`) künyeleri 1479-01-20'de bitiyor, `ispanya` künyesi (TDV `ispanya`) AYNI GÜN başlıyor; künyelerin kendi `ozet` alanları geçişi tarif ediyor ('Katolik Kralların evliliğiyle Aragon ile birleşerek İspanya'nın çekirdeğini oluşturdu'). Atlasın EMSALİ: 22 nokta `kastilya`, 11 nokta `aragon`, 7 nokta `granada` ile zincirlenmiş; bu dokuz nokta o konvansiyonun DIŞINDA kalmıştı. Gün 1479-01-20'yi atlasta 60 kayıt kullanıyor (YONTEM §③ komşu kuralı). Taç ataması coğrafî: Madrid/Sevilla Kastilya Tacı, Barselona/Valensiya/Balear/Sardinya Aragon Tacı." },

  { ad:"Sasari (Sassari)",
    s:[{f:"1281-01-01",t:"1324-01-01",d:"ceneviz"},
       {f:"1324-01-01",t:"1479-01-20",d:"aragon"},
       {f:"1479-01-20",t:"1720-02-24",d:"ispanya"},
       {f:"1720-02-24",t:"1861-03-17",d:"sardinya"},
       {f:"1861-03-17",t:"1923-10-29",d:"italya"}
    ],
    kaynak:"İÇ TUTARLILIK DÜZELTMESİ — yeni tarih iddiası YOK. `kastilya` (künye kaynağı: TDV `kastilya--ispanya`) ve `aragon` (TDV `aragon`) künyeleri 1479-01-20'de bitiyor, `ispanya` künyesi (TDV `ispanya`) AYNI GÜN başlıyor; künyelerin kendi `ozet` alanları geçişi tarif ediyor ('Katolik Kralların evliliğiyle Aragon ile birleşerek İspanya'nın çekirdeğini oluşturdu'). Atlasın EMSALİ: 22 nokta `kastilya`, 11 nokta `aragon`, 7 nokta `granada` ile zincirlenmiş; bu dokuz nokta o konvansiyonun DIŞINDA kalmıştı. Gün 1479-01-20'yi atlasta 60 kayıt kullanıyor (YONTEM §③ komşu kuralı). Taç ataması coğrafî: Madrid/Sevilla Kastilya Tacı, Barselona/Valensiya/Balear/Sardinya Aragon Tacı." },

];

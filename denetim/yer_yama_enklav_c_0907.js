// -*- coding: utf-8 -*-
// YER_YAMA_ENKLAV_C_0907 — ENKLAV-0907 oturumu, 7 Eylül 2026
//
// 🔴 NE YAPAR: `Değişmez 7`in C-hakiki kovasındaki DOKUZ döneme
//    `enklav: true` beyanı koyar. Başka HİÇBİR ŞEYE dokunmaz —
//    tarih yok, kimlik yok, yeni dönem yok.
//
// 🔴 NİÇİN: aletin kendi tarifi — *"800 km üstü / gövdesiz ⇒ muhtemelen
//    HAKİKİ enklav, çare `enklav:true`"*. Ve dokuzu da TEK TEK
//    doğrulandı (`denetim/ARAC-ENKLAV-C-0907.js`): her biri için
//    ① tam `s:` zinciri okundu ② aynı kimliği taşıyan gövdenin nerede
//    olduğu ölçüldü ③ ada ile gövde ARASINDAKİ kutuda kaç nokta var ve
//    KİMİN olduğu sayıldı — `§2`nin *noktasızlık* vakasından ayırmak için.
//
//   Gore (Gorée) ×2   Batı Afrika kıyı üssü. 1444 portekiz (ana gövde
//        İberya, 2640 km) · 1627 hollanda (4476 km). Aradaki kutuda
//        merini 10 · colof/valo/sine-salum 4 — yani koridor YOK, ARADA
//        BAŞKA DEVLETLER VAR. Hakiki enklav.
//   Massangano · Kambambe   Angola'nın ilk Portekiz yerleşimleri.
//        Birbirlerine 39 km, Luanda'ya 132/170 km — kendi aralarında
//        BAĞLI, ama Portekiz'in ana gövdesinden (Tete, 2188-2226 km)
//        kopuk. Aradaki kutuda `ndongo`. Hakiki enklav.
//   Çandernagor · Pondişeri  Fransız comptoir'ları, birbirlerine 1514 km.
//        Aradaki kutuda 12 nokta `ingiliz-hindistani` — yani koridor
//        yok, KUŞATILMIŞLAR. Hakiki enklav (1814 Paris ile iade, fiilî
//        teslim 1816-12-04).
//   Pemaquid · Falmouth · Portsmouth   Yeni İngiltere kümesi. Ana gövde
//        Jamestown (Virginia), 829-963 km; ARADA Yeni Hollanda vardı.
//        Aradaki kutuda `abenaki` ve SAHİPSİZ. Hakiki enklav.
//
// 🟢 ÖN SINAV KOŞULDU — `denetim/ARAC-ENKLAV-SINAV-0907.py`, ve alet
//    TAKLİT EDİLMEDİ, `denetle.degismez7(Y)` DOĞRUDAN çağrıldı:
//       taban  661   (tavan 660)  ← C13① GEÇME: doğru yerden okuduğumun kanıtı
//       yamalı 652                ← C13② ATEŞLEME
//       C-hakiki 12 → 3 · muaf.beyan 52 → 61
//       ⇒ `Değişmez 7` ✗ → ✓ (tavan YÜKSELTİLMEDEN)
//
// 🔴 TAVANA DOKUNULMADI. `CLAUDE.md` FAZ 1: *"tavan yükseltilseydi ihlal
//    susardı ve Sarıkamış ada kalırdı — denetim temiz, harita yanlış."*
//
// ⚠️ KAPSAM: yalnız C-hakiki'nin bu dokuz dönemi. `Gore (Gorée)`nin
//    1677 `fransa` ve 1792 `fransa-cumhuriyet` dönemleri de aynı fiziksel
//    gerçeği taşıyor ve muhtemelen aynı sınıf — ama onlar A/B kovasında
//    ve BU TURDA ÖLÇÜLMEDİ. Ölçülmeden yazmak, kapsamı sessizce genişletmek
//    olurdu (damga: okumadım).
//
// 🔴🔴 DOSYADA 20 `enklav:true` VAR — AMA YENİ OLAN DOKUZ.
//    Yama canlı veriden üretildiği için MEVCUT bayrakları KORUYOR:
//       Çandernagor  4/5 dönem ZATEN beyanlıydı  (1688 · 1757 · 1763 · 1793)
//       Pondişeri    7/9 dönem ZATEN beyanlıydı  (1674 · 1699 · 1761 · 1765 ·
//                                                 1778 · 1785 · 1793)
//       öteki altı kayıtta mevcut bayrak YOK
//    ⇒ MEVCUT 11 + YENİ 9 = 20. Ölçüldü, tahmin edilmedi.
//    ⚠️ Ve bu iki comptoir'ın statüsü ZATEN biliniyormuş; atlanan yalnız
//       SON dönemleriydi (1816-12-04, 1814 Paris ile iade). Yani bu bir
//       eksik beyan değil, YARIM beyandı — ve yarım beyan tam beyandan
//       ayırt edilemiyor, çünkü ikisi de "bu kayıtta enklav var" der.
//
// ⚠️ ÖLÇÜLMEDİ: küre genelinde `enklav:true` taşıyan dönem 57, ama
//    `denetle.py` `muaf.beyan` 52 diyor. Beş dönemlik fark muhtemelen
//    kova sırası (başka bir muafiyet önce yakalıyor) — ama BAKMADIM.
//    Damga: okumadım. Bu yamayı etkilemiyor (+9 farkı ölçülmüş).

// 🔴 KAYITLAR ELLE YAZILMADI — `denetle.yerlesimleri_yukle()` ile canlı
//    veriden üretildi, `denetim/ARAC-ENKLAV-YAMA-URET-0907.py`.
//    Her kayıtta TAM `s:` dizisi var (uygulayıcı diziyi DEĞİŞTİRİR).
//    `d:` · `v:` · `isg:` alanları BU YAMADA YOK ⇒ onlara dokunulmaz.

window.YER_YAMA_ENKLAV_C_0907 = [
  { ad: "Falmouth (Portland, Maine)",
    s: [{"f": "1632-01-01", "t": "1783-09-03", "d": "ingiltere", "enklav": true}, {"f": "1783-09-03", "t": "1923-10-29", "d": "abd"}] },
  { ad: "Gore (Gorée)",
    s: [{"f": "1444-01-01", "t": "1627-01-01", "d": "portekiz", "enklav": true}, {"f": "1627-01-01", "t": "1677-11-01", "d": "hollanda", "enklav": true}, {"f": "1677-11-01", "t": "1792-09-22", "d": "fransa"}, {"f": "1792-09-22", "t": "1923-10-29", "d": "fransa-cumhuriyet"}] },
  { ad: "Kambambe (Cambambe)",
    s: [{"f": "1604-01-01", "t": "1923-10-29", "d": "portekiz", "enklav": true}] },
  { ad: "Massangano",
    s: [{"f": "1583-01-01", "t": "1923-10-29", "d": "portekiz", "enklav": true}] },
  { ad: "Pemaquid",
    s: [{"f": "1625-01-01", "t": "1783-09-03", "d": "ingiltere", "enklav": true}, {"f": "1783-09-03", "t": "1923-10-29", "d": "abd"}] },
  { ad: "Pondişeri",
    s: [{"f": "1674-01-01", "t": "1693-09-06", "d": "fransa", "enklav": true}, {"f": "1693-09-06", "t": "1699-09-01", "d": "hollanda"}, {"f": "1699-09-01", "t": "1761-01-16", "d": "fransa", "enklav": true}, {"f": "1761-01-16", "t": "1765-01-01", "d": "ingiltere", "enklav": true}, {"f": "1765-01-01", "t": "1778-10-18", "d": "fransa", "enklav": true}, {"f": "1778-10-18", "t": "1785-01-01", "d": "ingiltere", "enklav": true}, {"f": "1785-01-01", "t": "1793-08-23", "d": "fransa", "enklav": true}, {"f": "1793-08-23", "t": "1816-12-04", "d": "ingiltere", "enklav": true}, {"f": "1816-12-04", "t": "1923-10-29", "d": "fransa-cumhuriyet", "enklav": true}] },
  { ad: "Portsmouth (New Hampshire)",
    s: [{"f": "1623-01-01", "t": "1783-09-03", "d": "ingiltere", "enklav": true}, {"f": "1783-09-03", "t": "1923-10-29", "d": "abd"}] },
  { ad: "Çandernagor",
    s: [{"f": "1688-01-01", "t": "1757-03-23", "d": "fransa", "enklav": true}, {"f": "1757-03-23", "t": "1763-02-10", "d": "ingiltere", "enklav": true}, {"f": "1763-02-10", "t": "1793-06-10", "d": "fransa", "enklav": true}, {"f": "1793-06-10", "t": "1816-12-04", "d": "ingiltere", "enklav": true}, {"f": "1816-12-04", "t": "1923-10-29", "d": "fransa-cumhuriyet", "enklav": true}] },
];

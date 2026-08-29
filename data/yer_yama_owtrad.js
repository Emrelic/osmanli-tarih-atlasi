// -*- coding: utf-8 -*-
// ═══════════════════════════════════════════════════════════════════════
// YER_YAMA_OWTRAD — BOŞ. İçindeki iş YAMA değil, YENİ NOKTA önerisiydi.
// window.YER_YAMA_OWTRAD = []
// Boşaltan: YAMA KURTARMA · 28 Ağustos 2026 · koordinatör ORHANGAZİ (M-1440)
// ═══════════════════════════════════════════════════════════════════════
//
// 🔴 İÇERİK SİLİNMEDİ, TAŞINDI — tam kopya:
//        denetim/OWTRAD-ADAY-DOKUM.json     12 kalem, dört kova, tam fidelity
//    Uygulanabilir hâli (yapıştırmaya hazır beş kayıt) ve Değişmez 2
//    ölçümü: denetim/BULGU-YAMA-KURTARMA.md §4
//
// ═══════════ NİÇİN BURAYA YAZILAMAZ — dosya türü ═══════════
// Dosya NESNE'ydi, hiçbir alet okumuyordu. Diziye çevirmek de çare DEĞİL,
// çünkü içindeki beş "hazır" kalem YAMA değil YENİ NOKTA:
//
//    yerlesimler_*.js   YENİ NOKTA   · lat/lon ZORUNLU · ad BENZERSİZ
//    yer_yama_*.js      VAR OLANI DÜZELTİR · koordinat gerekmez · ad EŞLEŞİR
//
// Beşi de `lat` · `lon` · `tur` · `g` taşıyor ve ÖLÇÜLDÜ (`_yer_ara.py`,
// 2607 nokta / 56 girdi dosyası): Birecik · Prizren · Debre (41,53/20,53) ·
// Sibin (Sibiu) · Foça (38,67/26,76) — **beşi de veride YOK.**
// ⇒ `ad:` eşleştirecek bir kayıt olmadığı için yama olarak yazılsalardı
//   sessizce atlanırlardı. Yerleri `data/yerlesimler*.js`, o da koordinatörde.
//
// 📌 Bu, M-1339'da `yerlesimler_kafkas_duzeltme.js` ile ölçülen hatanın
//    AYNA GÖRÜNTÜSÜ: orada içerik yamaydı adı yerleşimdi, burada içerik
//    yerleşim adı yama. Aynı iki kova, ters yön.
//
// ⚠️ VE BİR AD TUZAĞI KAYDA GEÇTİ: veride `Foça (Foča)` VAR — ama o
//    BOSNA'daki şehir (43,506 / 18,779), İzmir'deki Foça değil, 1.200 km
//    ötede. Öneri `ad:"Foça"` diyor. `girdi.py` ValueError atmaz (dizgeler
//    farklı) ama dizinde iki "Foça" yan yana durur. Öneri:
//    `ad:"Foça (İzmir)"`. Kararı koordinatörün.
//
// ⚠️ Dosya silinmedi: bir gün gerçek bir dönem yaması yazılırsa yeri hazır.
// ═══════════════════════════════════════════════════════════════════════

window.YER_YAMA_OWTRAD = [];

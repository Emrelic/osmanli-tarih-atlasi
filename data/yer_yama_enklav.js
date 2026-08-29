// -*- coding: utf-8 -*-
// ═══════════════════════════════════════════════════════════════════════
// YER_YAMA_ENKLAV — BOŞ. Bu dosya bir YAMA DEĞİL, bir SORGU ÇIKTISIYDI.
// window.YER_YAMA_ENKLAV = []
// Boşaltan: YAMA KURTARMA · 28 Ağustos 2026 · koordinatör ORHANGAZİ (M-1440)
// ═══════════════════════════════════════════════════════════════════════
//
// 🔴 İÇERİK SİLİNMEDİ, TAŞINDI — tek kopya artık şurada:
//        denetim/ENKLAV-SORGU-DOKUM.json      956 kayıt · 347 KB
//    Dört kova ve `olcum` bloğu OLDUĞU GİBİ duruyor; taşıma
//    JSON.stringify/parse ile gidiş-dönüş doğrulandı (956 → 956).
//
// ═══════════ NİÇİN BOŞALTILDI — iki ayrı ölçüm ═══════════
//
// ① İÇERİK YAMA DEĞİLDİ. 956 kaydın HİÇBİRİNDE `ad:` · `d:` · `s:` · `v:`
//    yok. Taşıdıkları alanlar: `gun` · `yerlesim` · `yeni_sahip` · `kova` ·
//    `ada` · `ana_govde_km` · `komsu_150km` — yani Değişmez 7 enklav
//    sorgusunun ÇIKTISI. Uygulanabilir tek kayıt yok.
//
// ② VE "DİZİYE ÇEVİRMEK" ONLARI KURTARMAZDI, ZARAR VERİRDİ.
//    `arac/yama_uygula.js` yer_yama*.js içindeki HER diziyi topluyor ve
//    anahtarı `(dosya, t, b)` üçlüsü — yani KRONOLOJİ yaması bekliyor.
//    Bu 956 kayıt o üçlüyü taşımaz ⇒ hepsi `undefined` anahtarı alır ve
//    "MUKERRER, AYNI HÜKÜM" kovasına düşerdi. Aletin kendi yorumundaki
//    `yer_yama_rumeli.js` vakasının (9 kayıt) 106 KATI gürültü.
//    📌 `CLAUDE.md`: bir süzgeç, tanımadığını sessizce elemez — SAYIP BASAR.
//
// ═══════════ ⚠️ VE TAŞIRKEN BİR EKSİK ÖLÇÜLDÜ ═══════════
//    `olcum.kova` cografi-tecrit için **1847** diyor; dizide **400** var.
//    Öteki üç kova tam (377 · 140 · 39). ⇒ 1447 aday ölçülmüş ama
//    HİÇBİR YERE DÖKÜLMEMİŞ. Bu bir kayıp değil (dosya zaten öyle geldi)
//    ama bir BORÇ: `denetim/BULGU-YAMA-KURTARMA.md §3`e yazıldı.
//
// ⚠️ Dosya silinmedi. Bir gün buraya GERÇEK enklav yaması yazılırsa
//    (`ad:` + `s:[{...,enklav:true}]`) yeri hazır ve adı doğru.
// ═══════════════════════════════════════════════════════════════════════

window.YER_YAMA_ENKLAV = [];

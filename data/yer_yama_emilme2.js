// data/yer_yama_emilme2.js — EMİLME KÜMESİ, GERÇEK KAYIT (dizi) · VERİ SAHİPLİK-2
// 28 Ağustos 2026 · ORHANGAZİ sevkiyle · kaynak parti: kutu/giden/parti-emrelic-0035
// (ClaudEmre/kutu/giden altında — bu depoda YOKTU, kurtarıldı)
//
// 🔴 BU DOSYA SADECE UYGULANABİLİR KAYIT taşır (ad:/d:/s:/kaynak:/neden:).
// Ölçüm/gerekçe/16 maddenin TAMAMI: denetim/BULGU-VERI-EMILME.md ·
// denetim/HUKUM-VERI-EMILME2.json.
//
// 16 maddenin 16'sı ölçüldü; GERÇEK KAYIT gerektiren yalnız BU ÜÇ NOKTA
// (H-0050 + H-0061, aynı kök/aynı görsel). Geri kalan 13 madde "zaten-dogru"
// / "baska-ise-bagli" / "olculemedi" — kayıt YAZILMAZ (ORTAK-PAKET-KURALLARI
// §2: gerekçesiz "gerek-yok" yazılamaz, ama burada gerekçe BULGU dosyasında).
//
// 🟢 BAĞIMSIZ DOĞRULAMA: aynı üç nokta, aynı fix, `data/yer_yama_veri31.js`de
// (başka bir oturum) da tespit edilmiş ("GERÇEK VERİ EKSİĞİ, 3 nokta ile
// SINIRLI ve KESİN"). İki bağımsız ölçüm aynı sonuca vardı. Kaynak
// (`data/yerlesimler_ek24.js`) bugün hâlâ düzeltilmemiş durumda — ikisi de
// henüz UYGULANMAMIŞ.
window.YER_YAMA_EMILME2 = [
 {
  "ad": "Ahtapolu (Ahtopol)",
  "d": [{"f": "1361-01-01", "t": "1402-07-28"}, {"f": "1413-07-05", "t": "1913-09-29"}],
  "s": [
   {"f": "1402-07-28", "t": "1410-02-13", "d": "suleyman-celebi"},
   {"f": "1410-02-13", "t": "1410-06-15", "d": "musa-celebi"},
   {"f": "1410-06-15", "t": "1411-02-17", "d": "suleyman-celebi"},
   {"f": "1411-02-17", "t": "1413-07-05", "d": "musa-celebi"}
  ],
  "kaynak": "Kendi veri kümesi (data/yerlesimler_ek24.js) — 400 m ötedeki Mustafapaşa/Malko Tırnova/Elhova noktaları AYNI GÜN aralıklarıyla (suleyman-celebi/musa-celebi Fetret zinciri) zaten kayıtlı; Ahtapolu bu yamadan payını almamış.",
  "neden": "Fetret (1402-1413) split'i alınmamış; mevcut d: tek blok (1361→1913-09-29) komşularının hepsinde 1402-07-28'de kesilip s:'ye devrediyor, bu noktada kesilmemiş."
 },
 {
  "ad": "Rezve (Rezovo)",
  "d": [{"f": "1361-01-01", "t": "1402-07-28"}, {"f": "1413-07-05", "t": "1913-09-29"}],
  "s": [
   {"f": "1402-07-28", "t": "1410-02-13", "d": "suleyman-celebi"},
   {"f": "1410-02-13", "t": "1410-06-15", "d": "musa-celebi"},
   {"f": "1410-06-15", "t": "1411-02-17", "d": "suleyman-celebi"},
   {"f": "1411-02-17", "t": "1413-07-05", "d": "musa-celebi"}
  ],
  "kaynak": "bkz. Ahtapolu — aynı ölçüm, aynı komşu deseni (data/yerlesimler_ek24.js).",
  "neden": "Fetret split'i alınmamış; Ahtapolu ile aynı satır grubunda, aynı kusur."
 },
 {
  "ad": "İğneada",
  "d": [{"f": "1361-01-01", "t": "1402-07-28"}, {"f": "1413-07-05", "t": "1913-03-26"}, {"f": "1913-07-21", "t": "1923-10-29"}],
  "s": [
   {"f": "1402-07-28", "t": "1410-02-13", "d": "suleyman-celebi"},
   {"f": "1410-02-13", "t": "1410-06-15", "d": "musa-celebi"},
   {"f": "1410-06-15", "t": "1411-02-17", "d": "suleyman-celebi"},
   {"f": "1411-02-17", "t": "1413-07-05", "d": "musa-celebi"}
  ],
  "kaynak": "bkz. Ahtapolu — aynı ölçüm, aynı komşu deseni (data/yerlesimler_ek24.js).",
  "neden": "Fetret split'i alınmamış; mevcut d: iki blok (1361→1913-03-26, 1913-07-21→1923-10-29), Fetret aralığı ilk bloktan ayrıca çıkarılmalı."
 }
];

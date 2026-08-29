// -*- coding: utf-8 -*-
// ═══════════════════════════════════════════════════════════════════════
// YER_YAMA_FERHATPASA — Ferhat Paşa (İstanbul) Antlaşması 1590 araştırması
// window.YER_YAMA_FERHATPASA        (§7: dosya adındaki ayırt edici parça
//                                    değişken adında da duruyor)
// Oturum: FERHAT PAŞA 1590 · 28 Ağustos 2026 · koordinatör ORHANGAZİ
// ═══════════════════════════════════════════════════════════════════════
//
// 🔴 BU DOSYA GERÇEK KAYIT TAŞIR, RAPOR TAŞIMAZ (M-1422).
//    Ölçüm ve gerekçe `denetim/BULGU-FERHATPASA.md`dedir. Buradaki her kayıt
//    `ad:` + değişen alanlar + `kaynak:` + `neden:` taşır ve UYGULANABİLİR.
//
// ⚠️ `data/yerlesimler_ek_ferhadpasa.js`e DOKUNULMADI — o bağlı bir girdi
//    dosyası ve koordinatörde.
//
// ═══════════ NİÇİN YALNIZ DÖRT KAYIT — 16 yerin 4'ü ═══════════
// Araştırılan 16 yerin tamamı `denetim/BULGU-FERHATPASA.md` tablosunda,
// GÜVEN sütunuyla. Buraya YALNIZ kaynağı KESİN olanlar yazıldı:
//    KESİN → yazıldı (4)          ÇIKARIM → yazılmadı (5)
//    BULUNAMADI → yazılmadı (7)
// 🔴 Kaynağı yalnız "komşusu Osmanlı" olan bir kayıt YAZILMADI. Komşu
//    kuşatması NEREYE BAKACAĞIMI söyler, NE OLDUĞUNU söylemez.
//
// ═══════════ KIRILMA GÜNÜ DİSİPLİNİ (Değişmez 2) ═══════════
// Kullanılan HER gün külliyatta ZATEN VAR ve konusu DA DOĞRU:
//    1585-01-01  Nahçıvan · Ordubad kullanıyor (Aras vadisi kalıbı)
//    1585-09-25  "Tebriz'in fethi" · Hoy · Merâga · Miyâne · Tebriz kullanıyor
//    1603-10-21  "Tebriz'in on sekiz yıl sonra geri alınması" · 13 yerleşim
//    1578-08-09  Batum · Sohum · Tiflis · Zagem (Kaheti) kullanıyor
//    1810-02-20  "İmereti Krallığı'nın ilhakı" · `imereti` künyesinin bitişi
// 🟢 YENİ GÜN DOĞURULMADI — sıfır.
//
// 🔴 VE BİR GÜN ÖZELLİKLE REDDEDİLDİ: `1555-07-23`. Devredilen
//    `data/yerlesimler_kafkas_duzeltme.js` yaması Kutaisi için onu öneriyor
//    ve "külliyatta var (44 kullanım)" diye gerekçelendiriyor. SAYI DOĞRU,
//    AMA O GÜN HİNDİSTAN'A AİT: veride onu kullanan 22 yerleşimin hepsi
//    Delhi · Agra · Mathura · Mîrat gibi Bâbürlü şehirleri
//    (`sur-hanedani` → `babur-imparatorlugu`), ve ±30 günündeki tek
//    kronoloji maddesi "Hümâyun, Safevî desteğiyle Delhi'yi geri aldı".
//    ⇒ Kutaisi'nin Osmanlı tâbiiyetini Hümâyun'un Delhi'ye girdiği güne
//      bağlamak olurdu. Ayrıntı ve ölçüm: BULGU-FERHATPASA.md §3.
//
// ═══════════ KÜNYE VE RENK ÖN KONTROLÜ (§8) ═══════════
// Önerilen her kimlik `renkler.py` IMPORT edilerek ölçüldü (regex DEĞİL —
// BOYALAR değeri tuple('ad','#hex'), regex onu kaçırıyor):
//    imereti   ('İmereti Krallığı', '#deea90')   ✓ künye 1490-01-01..1810-02-20
//    safevi · osmanlı                            ✓ zaten kullanımda
// ⚠️ `renkler.py` YALNIZ OKUNDU — koşu kilidi (M-1426). Yazılmadı.
// ═══════════════════════════════════════════════════════════════════════

window.YER_YAMA_FERHATPASA = [

  // ── ① CULFA — GÜVEN: KESİN ─────────────────────────────────────────
  // Bugünkü kayıt 1281-1923 KESİNTİSİZ `safevi`; hiç Osmanlı dönemi yok.
  // Oysa 34 km'deki Nahçıvan ve Ordubad 1585-01-01→1603-10-21 Osmanlı.
  {
    ad: "Culfa",
    d: [{ f: "1585-01-01", t: "1603-10-21", y: "savas" }],
    kaynak: "Encyclopaedia Iranica, \"JULFA i. SAFAVID PERIOD\" — BİREBİR: " +
      "\"the taxes of Old Julfa, when under Ottoman occupation in the last " +
      "decade of the 16th century, had been the property of the sultan's " +
      "mother\". Geri alış aynı maddede güzergâhıyla: \"In the fall of 1603, " +
      "Shah 'Abbas I launched his first military campaign against the " +
      "Ottomans to recapture the lands he had ceded to them in 1589-90. He " +
      "captured Tabriz and Nakhijevan, and before advancing to Erevan, he " +
      "passed through Julfa... The shah captured Erevan in June 1604\".",
    neden: "MEVCUT `s:` DİZİSİNE DOKUNULMADI, yalnız `d:` eklendi — komşuların " +
      "beşinde (Merâga · Nahçıvan · Ordubad · Tebriz · Miyâne) kullanılan " +
      "kalıp bu: `s:` safevi bloğu 1501-1736 kesintisiz kalır, Osmanlı dönemi " +
      "`d:` katmanında üstüne biner. (Hoy tek istisna, `s:`yi kesiyor — " +
      "azınlık kalıbı, izlenmedi.) Günler Aras vadisi komşularından BİREBİR: " +
      "Nahçıvan 33,9 km ve Ordubad 34,5 km, ikisi de 1585-01-01→1603-10-21. " +
      "Iranica'nın güzergâhı bu iki noktanın tam arasından geçiyor."
  },

  // ── ② URMİYE — GÜVEN: olay KESİN, gün ÇIKARIM ──────────────────────
  {
    ad: "Urmiye",
    d: [{ f: "1585-09-25", t: "1603-10-21", y: "savas" }],
    kaynak: "TDV İslâm Ansiklopedisi, \"Urmiye\" (Osman Gazi Özgüdenli, c. 42 " +
      "[2012], 179-180) — BİREBİR: \"XVI. yüzyılın sonlarında kısa bir süre " +
      "Osmanlı egemenliğine geçtiyse de Şah I. Abbas tarafından yeniden " +
      "Safevî Devleti'ne bağlandı\".",
    neden: "🔴 OLAY KESİN, GÜN TDV'DE YOK — madde 1585/1590/1603/1639 " +
      "tarihlerinin HİÇBİRİNİ vermiyor, ölçtüm. Gün, Tebriz kuşağı " +
      "komşularından alındı: Merâga (104 km) · Hoy · Miyâne · Tebriz, " +
      "DÖRDÜ DE 1585-09-25→1603-10-21. Dördünün UYUŞTUĞU ayrıca sınandı. " +
      "⚠️ Gün bir ÇIKARIMDIR; TDV yalnız \"XVI. yüzyılın sonlarında\" diyor. " +
      "Koordinatör isterse yalnız bu kayıt bekletilebilir."
  },

  // ── ③ KUTAİSİ — devredilen yamanın DÜZELTİLMİŞ hâli ────────────────
  // Emre'nin sorusu: "Gürcistan'a mı, Osmanlı'ya mı, Safevî'ye mi?"
  // CEVAP: üçü de değil — İMERETİ Krallığı, ve Osmanlı TÂBİSİ. Safevî hiç.
  {
    ad: "Kutaisi",
    s: [{ f: "1281-01-01", t: "1490-01-01", d: "gurcistan" },
        { f: "1490-01-01", t: "1810-02-20", d: "imereti" },
        { f: "1810-02-20", t: "1923-10-29", d: "rusya" }],
    v: [{ f: "1578-08-09", t: "1810-02-20", k: "İmereti krallığı (tâbi)" }],
    kaynak: "① `imereti` künyesi data/devletler.js: 1490-01-01 → 1810-02-20, " +
      "rengi renkler.py BOYALAR['imereti'] = ('İmereti Krallığı', '#deea90') " +
      "— IMPORT ile ölçüldü. ② Gün: Batum · Sohum · Tiflis · Zagem (Kaheti) " +
      "dördü de 1578-08-09 kullanıyor. ③ Kalıp: Zagem (Kaheti) BİREBİR aynı " +
      "biçimi taşıyor — v:[{f:\"1578-08-09\", k:\"Kaheti krallığı (tâbi)\"}]. " +
      "④ Bitiş 1810-02-20 kronolojide: \"İmereti Krallığı'nın ilhakı — Kral " +
      "II. Solomon tahttan indirildi\".",
    neden: "🔴 DEVREDİLEN YAMANIN (yerlesimler_kafkas_duzeltme.js) BAŞLANGIÇ " +
      "GÜNÜ DÜZELTİLDİ: 1555-07-23 → 1578-08-09. Yamanın günü HİNDİSTAN'a ait " +
      "(Delhi/Agra/Mathura, sur-hanedani→babur; ±30'daki tek madde \"Hümâyun " +
      "Delhi'yi geri aldı\"). Yamanın `s:` ve bitiş tarihi AYNEN KORUNDU. " +
      "Bitişin 1603-1606'da kesilmemesi kasıtlı: Şah Abbas TİFLİS ve KAHETİ'yi " +
      "(DOĞU Gürcistan) geri aldı — veri de öyle diyor, ikisi de 1606-01-01'de " +
      "bitiyor — ama İMERETİ BATI Gürcistan'dır ve Şah Abbas oraya ULAŞMADI. " +
      "⚠️ Bu son cümle ÇIKARIMDIR: İmereti'ye özel bir kaynak ARANDI, " +
      "BULUNAMADI. Dayanak künye penceresi + komşu deseni + coğrafya."
  },

  // ── ④ SOHUM — GÜVEN: KESİN, yalnız BİTİŞ GÜNÜ 10 gün kayıyor ───────
  {
    ad: "Sohum",
    d: [{ f: "1578-08-09", t: "1810-07-11" }],
    s: [{ f: "1281-01-01", t: "1578-08-09", d: "gurcistan" },
        { f: "1810-07-11", t: "1923-10-29", d: "rusya" }],
    kaynak: "TDV İslâm Ansiklopedisi, \"Sohum\" (Mustafa Aydın, EK-2 [2019], " +
      "519-522) — BİREBİR: \"1578'de İran seferi esnasında Sohum eyaleti " +
      "oluşturuldu\" ve başına Çerkez Haydar Paşa getirildi; bitiş: " +
      "\"11 Temmuz 1810'da Ruslar'ın eline geçti\".",
    neden: "🟢 EMRE'NİN SORUSUNA CEVAP — veri ZATEN DOĞRU: Sohum DOĞRUDAN " +
      "Osmanlı (`d:`), tâbi değil. TDV eyalet kurulduğunu ve VALİ ATANDIĞINI " +
      "söylüyor. ⚠️ TDV kale ile iç bölgeyi AYIRIYOR: kale doğrudan idare, " +
      "çevredeki Abaza beyleri tâbi. Veri NOKTA modellediği için `d:` doğru. " +
      "🔴 TEK DÜZELTME: bitiş 1810-07-01 → 1810-07-11 (TDV'nin verdiği gün). " +
      "10 günlük fark. ⚠️ 1810-07-01 başka kayıtlarda da geçiyorsa toplu " +
      "değişir — ÖLÇMEDİM, koordinatör baksın. Küçük bir kalem, " +
      "reddedilirse kayıt yine de doğru kalır."
  }
];

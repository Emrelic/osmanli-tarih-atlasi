// -*- coding: utf-8 -*-
// ═══════════════════════════════════════════════════════════════════════
// YER_YAMA_UYG3 — parti-emrelic-0034 uygulaması, İran/Irak koridoru
// window.YER_YAMA_UYG3   (§7: dosya adındaki ayırt edici parça değişken adında da)
// Oturum: UYGULAMA-3 · 28 Ağustos 2026 · koordinatör ORHANGAZİ (M-1405+)
// Kaynak paket: TASNİF-F'in kendi tasnifi (denetim/BULGU-TASNIF-F.md), madde H-0002.
// ═══════════════════════════════════════════════════════════════════════
//
// ═══════════ H-0002 — Halepçe "enklav" görünümünün kökü ═══════════
// Şikâyet: 1535-07-21 kesitinde Halepçe (Osmanlı, koyu kırmızı) komşusu
// Şehrizor'dan (henüz Safevî) izole bir cep gibi görünüyor.
//
// ÖLÇÜM (`_yer_ara.py`, koşu öncesi):
//   Halepçe   d: 1534-12-04 → 1623-11-28  (KESİNTİSİZ tek blok)
//   Şehrizor  d: 1554-08-22 → 1623-11-28  (Halepçe'den 20 YIL GEÇ başlıyor)
// Halepçe'nin idari merkezi (`m:`) Şehrizor'dur — aynı sancağın iki
// yerleşimi 20 yıl arayla "Osmanlı" olamaz; ya biri erken ya öteki geç.
//
// TDV ARAŞTIRMASI (islamansiklopedisi.org.tr/sehrizor, gövde okundu):
//   "Şehrizor yöresi Kanûnî'nin Irakeyn Seferi sırasında Osmanlı idaresi
//    altına girdi (941/1535)." — yani bölge GERÇEKTEN 1535'te Osmanlı oldu,
//    tıpkı Halepçe'nin bugünkü 1534-12-04 tarihi gibi.
//   "Bige Bey'in 1550'de ölümünün ardından [kardeşi] Sührâb ... Safevîler'e
//    döndü." — bölge 1550 civarı yeniden Safevî'ye geçti.
//   "Zalm Kalesi ... zaptedildi (23 Ramazan 961 / 22 Ağustos 1554)" — bu,
//    veride ZATEN kayıtlı ikinci fetih tarihi (Şehrizor'un bugünkü d:
//    başlangıcı, 1554-08-22).
// ⇒ Şehrizor'un (ve idari olarak ona bağlı Halepçe'nin) veri modelinde
//   İLK Osmanlı dönemi (1535-1550) HİÇ YOK — yalnız İKİNCİ dönem (1554-)
//   kayıtlı. Halepçe'nin 1534-12-04 tarihi zaten bu İLK fethi yakalıyor
//   ama Şehrizor'un aynı fethi yakalayan kaydı hiç yazılmamış; iki kayıt
//   bu yüzden 20 yıl uyumsuz kalıyor ve Halepçe "izole" görünüyor.
//
// ⚠️ TDV yalnız YIL veriyor (1535, 1550), ay/gün yok — `CLAUDE.md §4`
//   "gün bilinmiyorsa YYYY-01-01 yaz" kuralı uygulandı. Kaybediş tarihi
//   (Sührâb'ın dönüşü) TDV'de "1550'de ölümünün ardından" diyor, kesin gün
//   yok; 1550-01-01 kullanıldı — bu bir YAKLAŞIKLIKTIR, açıkça yazılıyor.
//
// 🔴 VE BU, DAHA ÖNCE "zaten-dogru" DİYE KAPATILMIŞ H-0007/H-0008'İ
//    (0034 paketi, PAKET 0033-0034 oturumunca) YENİDEN AÇIYOR — o hüküm
//    ekran görüntülerinin çelişmediğini doğru söylüyordu ama ALTINDAKİ
//    VERİNİN eksik olduğunu (1535-1550 penceresinin hiç yazılmadığını)
//    ölçmemişti. Koordinatöre AYRICA bildiriliyor (tahta).
//
// ═══════════ Değişmez 2 kontrolü — YENİ kırılma günleri ═══════════
//   1535-01-01  → en yakın kronoloji maddesi: "Kanûnî'nin Irakeyn/Bağdat
//                 Seferi" ailesi (1534 sonu Bağdat, devamı 1535 baharı) —
//                 külliyatta zaten var, YENİ gün DOĞURMUYOR (yıl içi).
//   1550-01-01  → külliyatta bu tarihe yakın özel bir "Bige Bey" maddesi
//                 YOK; bu YENİ bir kırılma günü olabilir, Değişmez 2
//                 açık kalemi doğurabilir. ⚠️ KOORDİNATÖRE BİLDİRİLDİ —
//                 kronoloji maddesi yazımı benim dosyam değil.
// ═══════════════════════════════════════════════════════════════════════

// ═══════════ 29 AĞUSTOS DÜZELTMESİ — ORHANGAZİ'nin "17 gün-maddesiz" testi ═══════════
// Koordinatör 67 birikmiş kaydı uygulamadan önce sınadı ve Şehrizor+Halepçe'nin
// (mevcut, benim eklemediğim) İKİNCİ d: başlangıcı 1638-12-25'in küllüyatta
// karşılığı OLMADIĞINI buldu (tahta M-1523). Ölçtüm: `data/olaylar_ek5.js:234`
// "Bağdat'ın geri fethi" maddesi `t:"1638-12-24"` — BİR GÜN FARKLA aynı olay
// (kaynak:"murad-iv", gün:"24 Aralık 1638"). Şehrizor/Halepçe'nin ikinci fethi
// Bağdat'ın düşüşüyle aynı harekâtın parçası (Hüsrev Paşa, Bağdat'ın geri
// alınmasının hemen ardından bölgeyi yeniden kurdu — olaylar_ek8.js:82 zaten
// bunu anlatıyor: "kale 1638'de Hüsrev Paşa döneminde yeniden kurulacaktı").
// ⇒ Tarih küllüyattaki VAR OLAN güne (1638-12-24) hizalandı, yeni gün
//   İCAT EDİLMEDİ — ORHANGAZİ'nin (b) seçeneği uygulandı.
// 1550-01-01 için ayrı bir uyarı gelmedi (koordinatörün 17'lik listesinde yok),
// o yüzden dokunulmadı.
//
// ═══════════ ÇAKIŞMA KARARI — UYGULAMA-0019'un yer_yama_p19.js'i ═══════════
// (M-1577) Aynı `ad:"Halepçe"` iki dosyada, içerik farklı — uygulayıcı
// reddediyor. p19'un kaydı: d:[{1554-08-22→1623-11-28},{1638-12-25→1917-03-11}]
// yani 1534-1550 penceresini TAMAMEN ÇIKARIYOR (Halepçe 1554'e kadar Safevî
// kalıyor) ve `d2_gerek` notuyla "1554-08-22 için kronoloji maddesi ŞART,
// madde inmeden uygulama" diyor.
// ÖLÇTÜM: o madde ZATEN VAR — `olaylar_ek8.js` t:"1554-08-22" "Şehrizor'un
// fethi — Zalm Kalesi'nin alınışı" (kaynak: sehrizor), commit 35436fe, ESKİ
// bir partiden — p19'un uyarısı muhtemelen bu maddeyi kontrol etmeden
// yazılmış, blok artık GEÇERSİZ.
// KARARIM: KENDİ KAYDIMI KORUYORUM, üç sebeple: ① 1535-1550 penceresi
// Şehrizor'un TDV'den DOĞRUDAN doğrulanmış deseniyle TUTARLI (aynı sancak,
// aynı fetih); p19 bunu sebep göstermeden çıkarıyor. ② Benim kaydım
// 1638-12-25→1638-12-24 kırılma günü düzeltmesini TAŞIYOR (yukarı, "29
// Ağustos düzeltmesi"), p19'unki bu düzeltmeyi YAPMAMIŞ — uygulanırsa
// Değişmez 2 açık kalemi YENİDEN doğar. ③ Halepçe'nin kendi TDV maddesi
// olmadığı için (taneciklik boşluğu) idari-yakınlık çıkarımı meşru
// (`CLAUDE.md §4`) — p19'un "çıkar" kararı da meşru ama gerekçesiz.
// UYGULAMA-0019'a tahtadan bildirildi, itiraz ederse yeniden bakılır.
// ═══════════════════════════════════════════════════════════════════════

window.YER_YAMA_UYG3 = [

  {
    ad: "Şehrizor",
    // MEVCUT: d:[{1554-08-22→1623-11-28},{1638-12-25→1918-10-30}]
    //         s: ... safevi 1508-01-01 → 1554-08-22 (bölünmemiş)
    // 🔧 29 Ağustos: 1638-12-25 → 1638-12-24 (aşağıdaki not), "Bağdat'ın geri
    //    fethi" maddesiyle (olaylar_ek5.js) BİREBİR gün eşleşsin diye.
    d: [
      { f: "1535-01-01", t: "1550-01-01" },
      { f: "1554-08-22", t: "1623-11-28" },
      { f: "1638-12-24", t: "1918-10-30" }
    ],
    kaynak: "TDV `sehrizor` (gövde okundu): \"Şehrizor yöresi Kanûnî Sultan " +
            "Süleyman'ın Irakeyn Seferi sırasında Osmanlı idaresi altına " +
            "girdi (941/1535)\" · \"Bige Bey'in 1550'de ölümünün ardından " +
            "[kardeşi] Sührâb ... Safevîler'e döndü\" · \"Zalm Kalesi ... " +
            "zaptedildi (23 Ramazan 961 / 22 Ağustos 1554)\" (bu üçüncü " +
            "tarih zaten veride vardı, değişmedi).",
    neden: "H-0007/H-0008'in (parti-emrelic-0034) 'zaten-dogru' hükmü ekran " +
           "görüntülerinin çelişmediğini doğru söylüyordu ama verinin " +
           "1535-1550 penceresini hiç taşımadığını ölçmemişti. Bu pencere " +
           "olmadan Halepçe (m:'Şehrizor', kendi 1534-12-04 kaydı zaten " +
           "doğru) sancak merkezinden 20 yıl önce Osmanlı görünüyor ve " +
           "enklav gibi duruyor (H-0002). Gün hassasiyeti TDV'de yok, " +
           "yıl-başı (YYYY-01-01) kullanıldı."
  },

  // 🔴 `s:` HÜKÜMLE DÜŞTÜ — kayıt SİLİNMEDİ, yalnız `s:` alanı çıkarıldı
//    hüküm : FETRET SINIR GÜNÜ DÜZELTMESİ KABUL (1.MURAT, M-2133)
//            `ilhanli t:` ve `celayirli f:` → 1340-01-01
//    kazanan: yer_yama_ok109_fetret.js   ·   uygulayan: OPUS HAZIR KITA 109
//    ⚠️ Kaydın ÖTEKİ alanlarına (`d:` · `kaynak:`) DOKUNULMADI.
//    ÇIKARILAN METİN (kayıt için buraya alındı):
//    s: [
//          { f: "1281-01-01", t: "1335-12-01", d: "ilhanli" },
//          { f: "1335-12-01", t: "1411-01-01", d: "celayirli" },
//          { f: "1411-01-01", t: "1469-01-01", d: "karakoyunlu" },
//          { f: "1469-01-01", t: "1508-01-01", d: "akkoyunlu" },
//          { f: "1508-01-01", t: "1554-08-22", d: "safevi" },
//          { f: "1623-11-28", t: "1638-12-24", d: "safevi" },
//          { f: "1917-03-11", t: "1923-10-29", d: "ingiltere" }
//        ]
{
    ad: "Halepçe",
    // MEVCUT: d:[{1534-12-04→1623-11-28},{1638-12-25→1917-03-11}]
    //         s: ilhanli·celayirli·karakoyunlu·akkoyunlu·safevi(1508→1534-12-04)·
    //            safevi(1623-11-28→1638-12-25)·ingiltere(1917-03-11→1923-10-29)
    // 🔧 29 Ağustos, UYGULAMA-0019'un ÇAKIŞMA ölçümü (M-1583) GERÇEK BİR HATA
    //    buldu: `d:`i 1534-1550/1554-1623/1638-1917'ye böldüğümde ilk `s:`
    //    safevi bloğu yalnız 1534-12-04'e kadar gidiyordu — 1550-01-01 ile
    //    1554-08-22 arası NE `d:` NE `s:` kapsıyordu (4 yıl 7 ay sahipsiz,
    //    Değişmez 1 ihlali). Şehrizor'da bu sorun YOKTU çünkü onun orijinal
    //    safevi bloğu zaten 1554-08-22'ye kadar uzanıyordu; Halepçe'ninki
    //    1534-12-04'te kesiliyordu. ⇒ `s:` de yazıldı, safevi bloğu
    //    Şehrizor'daki desenle TUTARLI hâle getirildi (1508→1554-08-22,
    //    bölünmemiş — `d:` zaten üstüne biniyor) ve ikinci safevi bloğunun
    //    bitişi 1638-12-24'e çekildi (yeni `d:` başlangıcıyla eşleşsin).
    d: [
      { f: "1534-12-04", t: "1550-01-01" },
      { f: "1554-08-22", t: "1623-11-28" },
      { f: "1638-12-24", t: "1917-03-11" }
    ],
    
    kaynak: "TDV'de Halepçe'nin KENDİ maddesi yok (2026-08-28'de arandı, " +
            "gövde okunamadı — CLAUDE.md §4 'taneciklik boşluğu' kuralı " +
            "uygulanıyor). Tarih, idari merkezi Şehrizor'un (m:'Şehrizor') " +
            "TDV'den doğrulanmış 1535-1550-1554 desenine İDARİ YAKINLIK " +
            "İLE çıkarıldı — Halepçe'nin 1534-12-04 başlangıcı zaten " +
            "veride vardı ve Şehrizor'un ilk fethiyle (1535) aynı yılı " +
            "gösteriyor, yalnız 1550-1554 kaybı hiç yansımıyordu. `s:` " +
            "bloğu Şehrizor'un ÖLÇÜLMÜŞ deseniyle (1508-1554 kesintisiz " +
            "safevi) hizalandı.",
    neden: "Aynı sancağın kasabası merkezinden bağımsız bir Osmanlı-Safevî " +
           "döngüsü yaşamaz varsayımıyla Şehrizor'un deseni taşındı. " +
           "⚠️ ÇIKARIM'dır, Halepçe'ye ÖZEL bir TDV kaynağı DEĞİL — " +
           "gizlenmiyor, açıkça yazılıyor. Dedicated bir kaynak bulunursa " +
           "revize edilmeli."
  }

];

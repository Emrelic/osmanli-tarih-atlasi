// ============================================================================
// OSMANLI SINIR DÖNEMLERİ — Faz 2 (Pitcher inceltme turu, 1. geçiş)
// Ana geometri kaynağı: historical-basemaps açık veri seti (akademik atlaslardan
// sayısallaştırılmış; data/sinirlar_detay.js içinde, tarihî düzeltmeler uygulı):
//   • 1400 kesitinden İstanbul çevresi çıkarıldı (Bizans enklavı, fetih 1453)
//   • 1530/1600 kesitlerinden Girit çıkarıldı (fetih 1669)
//   • 1530 ve 1900 kesitlerinden Kıbrıs çıkarıldı (fetih 1571, İngiliz idaresi 1878)
//   • 1700 kesitinden Mora çıkarıldı (Venedik'te 1699-1715)
//   • 1815 kesitinden bağımsız Yunanistan çıkarıldı (1830 sonrası dönem için)
// Kesitlerin bulunmadığı dönemler (kuruluş, Orhan, Fetret, Mütareke) elle çizili
// kaba halkalarla gösterilir. Bilinen kalan sapmalar PLAN.md "Doğruluk notu"nda.
// Her kayıt: { ad, from, to, geo:"SNAPSHOT-adı" } VEYA { ad, from, to, halkalar:[...] }
// ============================================================================

(function () {

// ---------- Elle çizili halkalar (kesit bulunmayan dönemler) ----------

var R_SOGUT = [[29.4,40.3],[30.1,40.5],[30.8,40.2],[31.0,39.8],[30.4,39.4],[29.6,39.5],[29.2,39.9],[29.4,40.3]];

var R_ANADOLU_1326 = [[26.9,40.0],[27.5,40.4],[28.8,40.4],[29.4,40.75],[29.9,40.75],[30.8,40.85],[31.8,40.75],[32.7,40.55],[33.0,40.0],[32.6,39.4],[31.5,39.1],[30.2,39.0],[29.0,39.1],[27.9,39.2],[27.0,39.5],[26.9,40.0]];

var R_GELIBOLU = [[26.15,40.55],[26.75,40.65],[26.95,40.45],[26.35,40.0],[26.05,40.25],[26.15,40.55]];

var R_RUMELI_1402 = [[28.75,44.35],[27.5,44.1],[26.0,43.75],[24.0,43.7],[22.9,43.85],[22.35,43.1],[21.7,42.5],[21.0,42.1],[20.7,41.5],[20.55,40.9],[20.9,40.1],[21.4,39.6],[22.1,39.3],[22.55,39.1],[23.1,39.4],[22.65,40.0],[22.6,40.5],[23.4,40.75],[24.4,40.85],[25.6,40.9],[26.1,40.7],[26.75,40.75],[27.5,40.97],[28.2,41.05],[28.5,41.35],[28.15,41.7],[28.0,42.05],[27.9,42.7],[27.95,43.2],[28.2,43.75],[28.75,44.35]];

var R_ANADOLU_FETRET = [[26.7,40.45],[27.9,40.4],[28.8,40.45],[29.3,40.9],[30.3,41.1],[31.4,41.25],[32.6,41.7],[34.0,41.9],[35.2,41.7],[36.0,41.2],[36.3,40.5],[36.0,39.6],[35.3,38.9],[34.5,38.3],[33.5,37.9],[32.5,37.6],[31.5,37.2],[30.5,36.9],[29.3,36.7],[28.2,36.9],[27.4,37.15],[27.0,37.7],[26.9,38.4],[26.5,39.0],[26.3,39.55],[26.7,40.45]];

// Kefe sancağı (Kırım kıyıları — doğrudan Osmanlı toprağı)
var R_KIRIM = [[33.4,45.1],[34.9,45.2],[36.4,45.15],[36.6,45.0],[35.5,44.7],[34.3,44.4],[33.6,44.5],[33.4,45.1]];

// Podolya (1672 Bucaş - 1699 Karlofça)
var R_PODOLYA = [[25.7,49.2],[27.0,49.3],[27.9,48.9],[27.6,48.3],[26.2,48.4],[25.7,49.2]];

// Mütareke - Cumhuriyet (yaklaşık Misak-ı Millî sınırları)
var R_TRAKYA_1913 = [[26.35,41.7],[27.0,42.0],[27.55,42.0],[27.95,41.95],[28.15,41.55],[28.97,41.2],[28.5,41.05],[27.5,40.97],[26.9,40.6],[26.15,40.05],[26.05,40.45],[26.35,40.75],[26.3,41.2],[26.35,41.7]];

var R_ANADOLU_1918 = [[26.7,40.45],[27.9,40.4],[28.8,40.45],[29.3,40.9],[30.3,41.1],[31.4,41.25],[32.6,41.7],[34.0,41.9],[35.2,41.7],[36.3,41.25],[37.7,41.1],[39.0,41.0],[39.75,41.0],[40.5,40.95],[41.55,41.3],[42.5,41.1],[43.4,40.8],[43.7,40.1],[44.6,39.75],[44.3,39.35],[44.8,38.4],[44.3,37.8],[44.25,37.3],[43.5,37.15],[42.6,37.1],[41.5,37.1],[40.5,36.9],[39.5,36.7],[38.5,36.7],[37.5,36.65],[36.7,36.25],[36.15,35.85],[35.95,36.1],[35.6,36.55],[34.6,36.75],[34.0,36.5],[33.0,36.3],[32.0,36.4],[30.5,36.5],[29.3,36.6],[28.2,36.9],[27.4,37.15],[27.0,37.7],[26.9,38.4],[26.5,39.0],[26.3,39.55],[26.7,40.45]];

// ---------- Doğrudan Osmanlı toprağı: dönem listesi ----------

window.SINIRLAR = [
  { ad: "Kuruluş: Söğüt ve çevresi",                          from: "1299-01", to: "1326-04", halkalar: [R_SOGUT] },
  { ad: "Orhan Gazi: Bursa, İznik, Rumeli'ye geçiş",          from: "1326-04", to: "1362-03", halkalar: [R_ANADOLU_1326, R_GELIBOLU] },
  { ad: "Balkan fetihleri ve Yıldırım dönemi",                from: "1362-03", to: "1402-07", geo: "Y1400" },
  { ad: "Fetret Devri",                                       from: "1402-07", to: "1413-07", halkalar: [R_RUMELI_1402, R_ANADOLU_FETRET] },
  { ad: "Toparlanma ve II. Murad dönemi",                     from: "1413-07", to: "1453-05", geo: "Y1400" },
  { ad: "Fatih ve II. Bayezid dönemi",                        from: "1453-05", to: "1517-01", geo: "Y1500" },
  { ad: "Yavuz sonrası: Suriye, Mısır, Hicaz katıldı",        from: "1517-01", to: "1571-08", geo: "Y1530k" },
  { ad: "Kanunî mirası: Kıbrıs'ın katılışıyla zirveye doğru", from: "1571-08", to: "1650-01", geo: "Y1600k" },
  { ad: "Zirve: Girit'in katılışı, en geniş sınırlar",        from: "1650-01", to: "1699-01", geo: "Y1650" },
  { ad: "Karlofça sonrası: Macaristan ve Mora kaybı",         from: "1699-01", to: "1715-07", geo: "Y1700k" },
  { ad: "Mora geri alındı; Kuzey Afrika özerkleşiyor",        from: "1715-07", to: "1774-07", geo: "Y1715" },
  { ad: "Küçük Kaynarca sonrası: Kırım elden çıktı",          from: "1774-07", to: "1800-01", geo: "Y1783" },
  { ad: "19. yüzyıl başı",                                    from: "1800-01", to: "1815-06", geo: "Y1800" },
  { ad: "II. Mahmud dönemi: Mısır özerkleşti",                from: "1815-06", to: "1830-02", geo: "Y1815" },
  { ad: "Yunanistan'ın ayrılışı sonrası",                     from: "1830-02", to: "1878-07", geo: "Y1815y" },
  { ad: "Berlin sonrası: Balkanlar'da son dönem",             from: "1878-07", to: "1913-05", geo: "Y1900k" },
  { ad: "Balkan Savaşları sonrası",                           from: "1913-05", to: "1918-10", geo: "Y1914" },
  { ad: "Mütareke ve Millî Mücadele",                         from: "1918-10", to: "1923-11", halkalar: [R_TRAKYA_1913, R_ANADOLU_1918] },

  // Kesitlerde bulunmayan, kendi tarihli parçalar
  { ad: "Kefe (Kırım kıyıları)", from: "1475-06", to: "1650-01", halkalar: [R_KIRIM] },
  { ad: "Podolya",               from: "1672-10", to: "1699-01", halkalar: [R_PODOLYA] },
  // 1914 kesitinde Doğu Trakya eksik (veri seti hatası; Edirne 1918'e dek Osmanlı)
  { ad: "Doğu Trakya",           from: "1913-05", to: "1918-10", halkalar: [R_TRAKYA_1913] }
];

// ---------- Osmanlı'ya bağlı özerk/vassal topraklar (açık tonla çizilir) ----------
// geo adları data/sinirlar_detay.js -> window.VASSAL_GEO anahtarları

window.VASSALLAR = [
  { ad: "Kırım Hanlığı (Osmanlı'ya bağlı)",       from: "1475-06", to: "1650-01", geo: "kirim" },
  { ad: "Mısır Eyaleti (özerk)",                  from: "1715-07", to: "1774-07", geo: "misir" },
  { ad: "Mısır (Kavalalı yönetimi, sonra İngiliz işgali altında nominal)", from: "1815-06", to: "1914-11", geo: "misir" },
  { ad: "Cezayir Ocağı (özerk)",                  from: "1715-07", to: "1830-07", geo: "cezayir" },
  { ad: "Tunus Ocağı (özerk)",                    from: "1715-07", to: "1881-05", geo: "tunus" },
  // 1878 sonrası ana gövde kesiti Libya'yı doğrudan toprak olarak içerir
  // (1835'te merkezî yönetim yeniden kurulmuştu), o yüzden vassal gösterimi 1878'de biter
  { ad: "Trablusgarp (özerk dönem)",              from: "1715-07", to: "1878-07", geo: "trablus" },
  { ad: "Bingazi (özerk dönem)",                  from: "1715-07", to: "1878-07", geo: "bingazi" }
];

})();

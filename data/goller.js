// ============================================================================
// GÖLLER — motorun modern kara maskesini düzelten EK göl poligonları
// ============================================================================
// Oturum 15 tarafından yazıldı (KOORDINASYON.md, Oturum 11'den devir).
// Bu dosya arac/uret_petek.py'nin bir PARÇASI DEĞİL — motoru elleyen yalnız
// Oturum 16'dır (bkz. CLAUDE.md §7). Burada yalnız VERİ var; motora bağlamak
// (GIRDI_DOSYALARI'na eklemek, GOLLER birleşimine katmak) Oturum 16'nın işi.
//
// ---------------------------------------------------------------------------
// SORUN — ölçülmüş, iki oturumda ayrı ayrı doğrulandı
// ---------------------------------------------------------------------------
// arac/uret_petek.py, kara maskesinden göl çıkarırken Natural Earth 10m göl
// katmanını (ne_10m_lakes.geojson) kullanıyor. O katman Aral Gölü'nü BUGÜNKÜ
// (kuruma SONRASI) hâliyle taşıyor; yalnız iki küçük artık var:
//     "South Aral Sea"  58.22-59.31°D / 44.42-46.01°K
//     "North Aral Sea"  59.98-61.53°D / 46.09-46.78°K
// Oysa 1281-1923 boyunca (bu atlasın tüm ufku) Aral, aşağı yukarı
// 43.4-46.8°K / 58.1-61.8°D bandını dolduran ~68.000 km²'lik TEK bir gölDÜ
// (Sovyet sulama projeleri yüzünden küçülmesi 1960'lardan SONRA başladı).
// Motor bugünkü hâliyle bu farkı bilmediği için Aral'ın yerini KARA sayıyor
// ve en yakın petek oraya emiliyor — ölçüldü: ~88.000 km² Hîve Hanlığı
// rengiyle boyanacaktı (bkz. oturumlar/OTURUM-11-ILERLEME.md §9.2,
// oturumlar/OTURUM-11-ORTA-ASYA.md). Bu, MIMARI.md §2'deki emilme
// davranışının aynadaki hâli: modern BARAJ gölleri anakronik delik açmasın
// diye KASTEN çıkarılmıyor (bkz. uret_petek.py:73-83); Aral ise TERSİ —
// tarihte vardı ve büyüktü, modern maske onu EKSİK gösteriyor.
//
// ---------------------------------------------------------------------------
// KAYNAK VE KESİNLİK — dürüst sınır
// ---------------------------------------------------------------------------
// Bu bir siyasi/tarihî iddia değil, fiziki coğrafya poligonu; CLAUDE.md §4'ün
// TDV zorunluluğu devlet/olay kayıtları için, göl kıyı çizgisi için değil.
// Aşağıdaki poligon 1960 öncesi (kuruma öncesi) Aral kıyı çizgisinin
// STANDART tarihî haritalarda görülen İKİ LOBLU biçimine (kuzeyde küçük
// "Küçük Aral" - Sirderya deltası tarafı, güneyde büyük "Büyük Aral" -
// Amuderya deltası tarafı, ortada Berg/Auzı Boğazı ile birleşik) dayanan
// bir YAKLAŞIKLIKTIR — hassas taranmış bir kıyı şeridi DEĞİLDİR.
// oturumlar/OTURUM-11-ORTA-ASYA.md'nin kendi önerisi de bunu kabul ediyor:
// "Kaba kutu box(58.2, 43.5, 61.8, 46.8) bile bugünkü hâlden iyidir;
// doğrusu 1960 kıyı çizgisidir." Burada kabadan biraz daha iyisi (gölün
// gerçek iki loblu, boğazlı şeklini kabaca izleyen 23 köşeli bir poligon)
// verildi ama traşe edilmiş bir kaynak (ör. Landsat/USGS 1960 kıyı vektörü)
// YERİNE GEÇMEZ. Daha hassas bir kaynak bulunursa BU POLİGON ilk
// değiştirilecek olandır.
//
// ---------------------------------------------------------------------------
// BİÇİM — Oturum 16'nın motoruna bağlanmaya hazır
// ---------------------------------------------------------------------------
// `geometry` alanı doğrudan GeoJSON Polygon'dur (coordinates: [lon, lat]),
// ne_10m_lakes.geojson'daki feature'larla AYNI biçimde — motor tarafı
// `shape(item.geometry)` ile tek satırda okuyabilir, dönüştürme gerekmez.
// Zaman alanı YOK: bu poligon atlasın TÜM ufku (1281-1923) boyunca geçerli
// sayılır, çünkü gölün küçülmesi 1923'ten SONRA başladı ve motor bugün
// zaten zamana göre değişen göl desteklemiyor (statik GOLLER birleşimi,
// bkz. uret_petek.py:90-113).
// ============================================================================

window.GOLLER = [
  {
    ad: "Aral Gölü (tarihî, 1960 öncesi kıyı — yaklaşık)",
    kaynak: "Standart tarihî/coğrafi kaynaklara dayanan yaklaşık poligon " +
            "(bkz. dosya başı 'KAYNAK VE KESİNLİK'); TDV kapsamı dışı " +
            "(fiziki coğrafya, CLAUDE.md §4).",
    not: "kuruma-oncesi-yaklaşık — traşe edilmiş kıyı verisiyle değiştirilebilir",
    gecerli: { f: "1281-01-01", t: "1923-10-29" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [60.90, 46.75],
        [61.65, 46.70],
        [61.70, 46.40],
        [61.35, 46.15],
        [61.10, 45.95],
        [61.55, 45.70],
        [61.75, 45.30],
        [61.55, 44.85],
        [61.20, 44.40],
        [60.70, 44.00],
        [60.10, 43.65],
        [59.40, 43.45],
        [58.70, 43.55],
        [58.35, 43.90],
        [58.15, 44.40],
        [58.15, 45.00],
        [58.25, 45.55],
        [58.45, 45.95],
        [59.00, 46.05],
        [59.60, 46.20],
        [60.00, 46.45],
        [60.40, 46.65],
        [60.90, 46.75]
      ]]
    }
  }
];

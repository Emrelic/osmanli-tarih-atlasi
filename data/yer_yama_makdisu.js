// ═══════════════════════════════════════════════════════════════════
// YER YAMASI — Makdişu Sultanlığı 1281-1500
// Oturum NEHİR SÜRTÜNME · sevk 1.MURAT M-2808 ③ · 5 Eylül 2026
//
// SORUN — ve bu sefer kusur tek bir sayıda görünüyor:
//   künye `makdisu-sultanligi`  1281-01-01 → 1500-01-01   (kullanılmıyor)
//   künye `somali`              1500-01-01 → 1923-10-29
//   ⇒ İKİSİ TAM BİTİŞİK. Tasarım açık: erken dönem Makdişu, sonrası Somali.
//   ⇒ AMA veri `somali`yi 1281-01-01'den kullanıyor — künyesinin
//     başlangıcından 219 YIL ÖNCE. Bu kayıtlar bugün `4d` kovasında.
//
// TDV `makdisu` (200, gövde okundu):
//   "VII. (XIII.) yüzyılda Ebû Bekir b. Fahreddin burada küçük bir
//    sultanlık kurmayı başardı"
//   sultanlık "Brava, Merka ve Benadir kıyısı"nı denetliyordu
//   "XIV-XV. yüzyıllar Makdişu'nun tarihteki EN MÜREFFEH dönemini
//    oluşturmaktadır"
//   çöküş: göçebe Heviye kabilesi, müttefiki Acurân Sultanlığı'nın
//   topraklarını işgal edince Makdişu ekonomik olarak geriledi
//
// ⚠️ `1500-01-01` KAYNAKTAN DEĞİL, KÜNYEDEN gelir. TDV bir bitiş yılı
//    VERMİYOR (yalnız "XIV-XV. yüzyıllar en müreffeh dönem" diyor).
//    Künyenin kendi `t:` değeri kullanıldı ve bu bir hizalamadır.
//    🔴 Künyenin günü bir kaynak değildir — bu satır o beyandır.
//
// 🟢 RENK KONTROL EDİLDİ: `makdisu-sultanligi` `arac/renkler.py` içinde
//    TANIMLI ("Makdişu Sultanlığı") ⇒ boyanacak, harita deliği DOĞMAZ.
//
// KAPSAM — üçü KAYNAKLI, ikisi ÇIKARIM ve bu ayrım burada duruyor:
//   🟢 Mogadişu · Merka · Berâve   TDV bunları ADIYLA sayıyor
//   🟡 Cadale · Afgoye             TDV adıyla saymıyor; ikisi de Benadir
//      bölgesinde (Cadale kıyıda, Afgoye Şebelle üzerinde ~30 km içeride)
//      ⇒ DIŞARIDA BIRAKSAYDIM: üçü `makdisu-sultanligi`, ikisi `somali`
//        olurdu ve Voronoi'de iki ENKLAV doğardı — bu projenin en çok
//        şikâyet edilen kusuru (`§2` emilme ailesi).
//      ⇒ İÇERİ ALDIM, ve gerekçe COĞRAFÎ SÜREKLİLİK, kaynak DEĞİL.
// ═══════════════════════════════════════════════════════════════════

window.YER_YAMA_MAKDISU = [

  {
    // TDV: sultanlığın merkezi
    ad: "Mogadişu",
    s: [
      { f: "1281-01-01", t: "1500-01-01", d: "makdisu-sultanligi" },
      { f: "1500-01-01", t: "1905-01-01", d: "somali" },
      { f: "1905-01-01", t: "1923-10-29", d: "italya" }
    ],
    kaynak: "makdisu"
  },

  {
    // TDV: "Brava, Merka ve Benadir kıyısı" — ADIYLA geçiyor
    ad: "Merka",
    s: [
      { f: "1281-01-01", t: "1500-01-01", d: "makdisu-sultanligi" },
      { f: "1500-01-01", t: "1905-01-01", d: "somali" },
      { f: "1905-01-01", t: "1923-10-29", d: "italya" }
    ],
    kaynak: "makdisu"
  },

  {
    // TDV: "Brava" — ADIYLA geçiyor
    ad: "Berâve",
    s: [
      { f: "1281-01-01", t: "1500-01-01", d: "makdisu-sultanligi" },
      { f: "1500-01-01", t: "1905-01-01", d: "somali" },
      { f: "1905-01-01", t: "1923-10-29", d: "italya" }
    ],
    kaynak: "makdisu"
  },

  {
    // 🟡 ÇIKARIM: Benadir kıyısında, TDV adıyla saymıyor
    ad: "Cadale",
    s: [
      { f: "1281-01-01", t: "1500-01-01", d: "makdisu-sultanligi" },
      { f: "1500-01-01", t: "1905-01-01", d: "somali" },
      { f: "1905-01-01", t: "1923-10-29", d: "italya" }
    ],
    kaynak: "makdisu"
  },

  {
    // 🟡 ÇIKARIM: Şebelle üzerinde, Mogadişu'ya ~30 km; TDV adıyla saymıyor
    ad: "Afgoye",
    s: [
      { f: "1281-01-01", t: "1500-01-01", d: "makdisu-sultanligi" },
      { f: "1500-01-01", t: "1905-01-01", d: "somali" },
      { f: "1905-01-01", t: "1923-10-29", d: "italya" }
    ],
    kaynak: "makdisu"
  }

];

// ═══════════════════════════════════════════════════════════════════
// DOKUNULMAYANLAR
//
// ⚪ `somali` kimliğini 1281-01-01'den kullanan ÖTEKİ noktalar
//    (Beledveyne · Baydoa · Obbiya · Galkayo · Garove · Ayl …)
//    DOKUNULMADI. Onlar Puntland ve iç Somali'de; Makdişu Sultanlığı'nın
//    değiller. Aynı `4d` kusurunu taşıyorlar ama ÇARELERİ BAŞKA ve
//    kaynağı bu turda ARANMADI.
//    🔴 Yani bu yama `4d`yi 5 azaltır, kusuru BİTİRMEZ.
//
// ⚪ 1905-01-01 → `italya` geçişi DOKUNULMADI — ölçmedim.
// ═══════════════════════════════════════════════════════════════════

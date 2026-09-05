// ═══════════════════════════════════════════════════════════════════
// YER YAMASI — Floransa Cumhuriyeti (1532 ÖNCESİ)
// Oturum NEHİR SÜRTÜNME · sevk 1.MURAT M-2872 · 5 Eylül 2026
//
// `makdisu` deseninin BİREBİR aynısı, ve her şey hazır:
//   künye `floransa`  1115-01-01 → 1532-01-01  🟢 RENGİ VAR · veride 0 DÖNEM
//   künye `toskana`   1532-01-01 → 1860-03-22  🟢 rengi var
//   ⇒ TAM BİTİŞİK ÇİFT (ölçüldü) — tasarım açık ve doğru
//   ⇒ ama veri `toskana`yı **1281-01-01**'den kullanıyor:
//     Floransa Büyük Dükalığı henüz KURULMAMIŞKEN (251 yıl erken)
//
// 🟢 VE VERİNİN GERİ KALANI ZATEN DOĞRU — bu, tasarımın bilinçli
//    olduğunun kanıtı:
//      Pisa   `toskana` **1406-10-09**'dan  ← Floransa'nın Pisa'yı alışı
//      Siena  `toskana` **1557-07-03**'ten  ← Siena'nın ilhakı
//    İki şehir doğru günlerde giriyor; yalnız MERKEZ yanlış kimlikle
//    ve pencere başından boyanıyor.
//
// ⚠️ KAPSAM YALNIZ FLORANSA — ve `Elba` KASTEN DIŞARIDA:
//    Elba da `toskana` 1281'den boyanıyor (aynı `4d` kaydı) ama
//    ada 1281-1532 arası Floransa'nın DEĞİLDİ (Pisa · sonra Piombino).
//    `floransa` yazmak bir anakronizmi başkasıyla değiştirirdi.
//    ⇒ AYRI KALEM, ölçülmedi.
// ═══════════════════════════════════════════════════════════════════

window.YER_YAMA_FLORANSA = [

  {
    ad: "Floransa",
    s: [
      { f: "1281-01-01", t: "1532-01-01", d: "floransa" },
      { f: "1532-01-01", t: "1861-03-17", d: "toskana" }
    ],
    kaynak: "italya"
  }

];

// ═══════════════════════════════════════════════════════════════════
// 🔴 `kaynak:` HAKKINDA DÜRÜSTLÜK
// `italya` slug'ı `CLAUDE.md §4`te CANLI diye kayıtlı ve "kapsayıcı
// madde" olarak bir kez işlemiş. AMA BU TURDA GÖVDESİNİ AÇMADIM.
// Buradaki bölme kaynaktan değil, **atlasın kendi künye çiftinden**
// geliyor: `floransa` 1115-1532 · `toskana` 1532-1860, tam bitişik.
// ⇒ Dayanak TASARIMDIR, kaynak değil — ve `1532-01-01` künyenin
//   kendi günüdür. **Künyenin günü bir kaynak değildir** (`§4`).
// ═══════════════════════════════════════════════════════════════════

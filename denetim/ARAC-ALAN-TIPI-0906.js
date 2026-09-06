// ALAN TİPİ DENETİMİ — `denetle.py`nin sormadığı soru
//
// 🔴 DOĞURAN VAKA (6 Eylül 2026, ve kusur KOORDİNATÖRÜNDÜ):
//    `olaylar_ek22.js`e `duygu: "notr"` yazıldı — alan bir DİZİ olmalıydı.
//    Sonuç: `app.js:4177`de `o.duygu.join is not a function`, betik ORADA
//    DURDU, harita kurulmadı, zaman kontrolleri atanmadı — SİTENİN TAMAMI
//    ÖLÜ. Ve o maddeyi indiren commit'in başlığı birebir şuydu:
//        "ZEND→KACAR 1794 · … — denetle+renk_olc TEMİZ"
//
//    denetle.py SORAR   JSON geçerli mi · değişmezler tutuyor mu
//    SORMAZ             bu alan DOĞRU TİPTE mi
//
//    ⇒ `§11`in "denetim var ≠ o soruyu soruyor" ailesinin en pahalı
//      biçimi: denetim yeşil, yayın ölü. Tek bir maddedeki tip hatası
//      bütün siteyi düşürüyor çünkü `olaylar.forEach` AÇILIŞTA koşuyor.
//
// ÖLÇÜT — ve niçin yanlış alarm üretmez:
//    "Bir alan adı, külliyatta TEK BİR tip taşır."
//    Ölçüldü (6 Eylül, 6155 madde · 25 alan): ayrışan **0**. Yani bu bir
//    tasarım değil, zaten sağlanan bir sözleşme — ihlal edildiğinde
//    öter, edilmediğinde susar.
//    ⚠️ Alanın YOKLUĞU ihlal DEĞİLDİR (`etiket` 6152/6155): yalnız
//      TANIMLI değerler sayılır. Bir alanın isteğe bağlı olması bu
//      denetimin konusu değil.
//
// KULLANIM:  node denetim/ARAC-ALAN-TIPI-0906.js [--sinav]
//    --sinav : ATEŞLEME yolunu koşar (bilerek bozuk kayıt enjekte eder).
//              `C13` gereği: kusur yokken sınav "her zaman geçen" bir
//              sınavdır ve hiçbir şey ölçmez.

const fs = require("fs"), vm = require("vm");
const SINAV = process.argv.includes("--sinav");

const T = (v) => Array.isArray(v) ? "dizi" : (v === null ? "null" : typeof v);

function kulliyat() {
  const kayitlar = [];
  for (const f of fs.readdirSync("data")) {
    if (!/^(olaylar|kronoloji).*\.js$/.test(f)) continue;
    const d = { window: {} };
    vm.createContext(d);
    // 🔴 Her dosya AYRI BAĞLAMDA: tek bağlamda `eval` aynı `window.X` adını
    // kullanan iki dosyada SESSİZ EZME üretir (`CLAUDE.md §7`).
    try { vm.runInContext(fs.readFileSync("data/" + f, "utf8"), d); }
    catch (e) { console.log("  [!] " + f + " okunamadi: " + e.message.slice(0, 60)); continue; }
    for (const k of Object.keys(d.window)) {
      const A = d.window[k];
      if (!Array.isArray(A)) continue;
      for (let i = 0; i < A.length; i++) {
        if (A[i] && typeof A[i] === "object") kayitlar.push({ f, k, i, o: A[i] });
      }
    }
  }
  return kayitlar;
}

function olc(kayitlar) {
  const tip = {};
  for (const r of kayitlar) {
    for (const alan of Object.keys(r.o)) {
      if (r.o[alan] === undefined) continue;
      (tip[alan] = tip[alan] || {})[T(r.o[alan])] =
        (tip[alan][T(r.o[alan])] || 0) + 1;
    }
  }
  const ihlal = [];
  for (const [alan, t] of Object.entries(tip)) {
    const e = Object.entries(t).sort((a, b) => b[1] - a[1]);
    if (e.length < 2) continue;                       // tek tip — temiz
    const baskin = e[0][0];
    for (const r of kayitlar) {
      if (r.o[alan] === undefined) continue;
      if (T(r.o[alan]) !== baskin) {
        ihlal.push({ dosya: r.f, kova: r.k, i: r.i, alan, bekleneni: baskin,
                     bulunan: T(r.o[alan]), t: r.o.t || "?",
                     deger: JSON.stringify(r.o[alan]).slice(0, 40) });
      }
    }
  }
  return { alanSayisi: Object.keys(tip).length, ihlal };
}

const kayitlar = kulliyat();
console.log("kayit: " + kayitlar.length);

// ── GECME YOLU ─────────────────────────────────────────────────────────
const g = olc(kayitlar);
console.log("alan : " + g.alanSayisi);
console.log("");
console.log("GECME YOLU   : ihlal " + g.ihlal.length);
for (const x of g.ihlal.slice(0, 20)) {
  console.log("  [X] " + x.dosya + " [" + x.i + "] t=" + x.t + "  `" + x.alan +
              "` bekleniyordu " + x.bekleneni + ", bulunan " + x.bulunan +
              "  " + x.deger);
}

if (!SINAV) {
  process.exit(g.ihlal.length ? 1 : 0);
}

// ── ATESLEME YOLU ──────────────────────────────────────────────────────
// Gercek veride kusur YOK (olculdu: 0). O yuzden dal ZORLANIR — yoksa
// "gecti" demek, dalin hic kosulmadigi anlamina gelir.
const sahte = kayitlar.slice();
sahte.push({ f: "__SINAV__", k: "OLAYLAR_SINAV", i: 0,
             o: { t: "1500-01-01", b: "sinav", d: "sinav", duygu: "dizi-degil" } });
const a = olc(sahte);
const yakaladi = a.ihlal.some((x) => x.dosya === "__SINAV__" && x.alan === "duygu");
console.log("ATESLEME YOLU: ihlal " + a.ihlal.length +
            "  (bilerek bozuk kayit enjekte edildi)");
console.log("");
if (g.ihlal.length === 0 && yakaladi) {
  console.log("[OK] Kulliyat TEMIZ, ve denetim bozuk bir kaydi YAKALIYOR.");
  process.exit(0);
}
if (g.ihlal.length) console.log("[X] Kulliyatta " + g.ihlal.length + " tip ihlali VAR");
if (!yakaladi) console.log("[X] DENETIM KOR — enjekte edilen bozuk kaydi yakalamadi");
process.exit(1);

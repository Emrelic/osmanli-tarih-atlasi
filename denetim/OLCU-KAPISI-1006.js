// OLCU-KAPISI-1006 — ölçülemeyen soru "temiz" değil ÇIKIŞ 2'dir (UMIT-W32, 6 Ekim 2026).
//
// SESSIZ-SIFIR-1006 taramasının çaresi (denetim/UMIT-W32-SESSIZ-SIFIR-1006.md):
// bir betik girdisi eksikken boş kümeden sayı basıp çıkış 0 vermesin. Tetikler:
//   T1 girdi    — gereken global/dosya yok ya da BOŞ
//   T2 evren    — yüklenen sayı ikinci bir kaynağın %90'ının altında (INDEX-KAYNAK-1006)
//   T3 boş küme — oran/ortalama boş kümeden (NaN) türetiliyor
//   T4 API      — çağrılacak ad modülde yok
//   T5 hüküm    — "ölçülemedi" yazıp 0 dönmek
// Hepsi `olculemedi()` → çıkış 2. Kapıya BAĞLI DEĞİL; betikler tek tek kullanır.
//
// 🧪 SINAV KANCASI: OLCU_KAPISI_YAPAY_EKSIK="AD1,AD2" ortam değişkeni, T1 sınanmadan
// hemen önce o globalleri SİLER. Yalnız sınav içindir: T1'in GERÇEK yolu koşar,
// yapay yalnız girdidir (iki yönlü sınav için betiğe dokunmadan eksik girdi).
"use strict";

function olculemedi(neden) {
  console.log("⚫ ÖLÇÜLEMEDİ — " + neden + " (OLCU-KAPISI-1006)");
  process.exit(2);
}

// T1 — `gerekli` = { GLOBAL_ADI: "onu taşıyan dosya (bilgi)" }. Global yoksa, dizi
// değilse ya da boşsa çıkış 2. Döner: { ADI: uzunluk }.
function girdi(ctx, gerekli) {
  const yapay = String(process.env.OLCU_KAPISI_YAPAY_EKSIK || "").split(",").filter(Boolean);
  yapay.forEach(a => { delete ctx[a]; });
  const sayi = {};
  for (const [ad, dosya] of Object.entries(gerekli)) {
    const v = ctx[ad];
    const n = Array.isArray(v) ? v.length : (v && typeof v === "object" ? Object.keys(v).length : 0);
    if (!n) olculemedi("T1 girdi yok/boş: " + ad + " (" + dosya + ")" + (yapay.includes(ad) ? " [YAPAY]" : ""));
    sayi[ad] = n;
  }
  return sayi;
}

// T1 (dosya) — kök-göreli yollardan biri diskte yoksa çıkış 2; üretilmiş,
// gitignore'lu dosya için kodlanmış kaynaktan nasıl geri çözüleceği basılır.
// Yapay eksik için aynı kanca: OLCU_KAPISI_YAPAY_EKSIK="data/x.js".
const COZ = {
  "data/donemler.js": "py arac/kodla.py coz-c data data/donemler.js donem",
  "data/devletler_harita.js": "py arac/kodla.py coz-c data data/devletler_harita.js",
  "data/petek_govde.js": "py arac/kodla.py coz-c data data/petek_govde.js govde",
};
function dosya(yollar, kok) {
  const fs = require("fs"), path = require("path");
  kok = kok || path.join(__dirname, "..");
  const yapay = String(process.env.OLCU_KAPISI_YAPAY_EKSIK || "").split(",").filter(Boolean);
  for (const y of yollar) {
    if (yapay.includes(y) || !fs.existsSync(path.join(kok, y)))
      olculemedi("T1 girdi yok: " + y + (COZ[y] ? " · üret: " + COZ[y] : "") + (yapay.includes(y) ? " [YAPAY]" : ""));
  }
}

// T3 — payda sıfırsa ya da sonuç sonlu değilse çıkış 2.
function oran(pay, payda, etiket) {
  if (!payda) olculemedi("T3 boş küme: " + etiket + " (payda 0)");
  const r = pay / payda;
  if (!Number.isFinite(r)) olculemedi("T3 sonlu değil: " + etiket);
  return r;
}

// T4 — modülde çağrılacak adlar var mı.
function api(modul, adlar, etiket) {
  const yok = adlar.filter(a => typeof modul[a] === "undefined");
  if (yok.length) olculemedi("T4 API yok: " + etiket + "." + yok.join(", " + etiket + "."));
}

// KOVA — betiğin BİR ALT ÖLÇÜMÜ ölçülemiyorsa geri kalanını boşa atmadan sür:
// `kova("…")` kaydeder (anında basar), sonda `bitir()` kova doluysa çıkış 2 verir
// (denetle.py'nin OLCULEMEDI_KOVA'sının aynısı: sayı değil ADIYLA liste).
const KOVA = [];
function kova(neden) {
  KOVA.push(neden);
  console.log("  ⚫ ÖLÇÜLEMEDİ — " + neden);
}
// İhlal (kod 1) varsa hüküm 1 kalır ama kova YİNE basılır — biri ötekini gizlemez.
function bitir(kod) {
  if (KOVA.length) {
    console.log("\n⚫ ÖLÇÜLEMEDİ KOVASI (" + KOVA.length + "): " + KOVA.join(" · ") + " (OLCU-KAPISI-1006)");
    process.exit(kod === 1 ? 1 : 2);
  }
  if (kod) process.exit(kod);
}

module.exports = { olculemedi, girdi, dosya, oran, api, kova, bitir, COZ };

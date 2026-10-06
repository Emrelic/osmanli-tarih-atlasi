// INDEX-KAYNAK-1006 — index.html'in veri <script src> listesi, PAKETLER AÇILMIŞ olarak.
//
// NİÇİN (UMIT-W32, 6 Ekim 2026): index.html veriyi artık `data/paket_NN.js`ten
// yüklüyor (arac/paketle.py, 279 src → 70). `src="(data\/yerlesimler…` gibi AD
// süzgeciyle yükleyen 20 denetim betiği paketlerin içini görmüyordu: bugün 4299
// yerine 10 yerleşimle, 10026 yerine 1829 kronoloji öğesiyle koşuyorlardı — ve
// hiçbiri ötmüyordu. Ölçüm: denetim/UMIT-W32-PAKET-YUKLEYICI-1006.md.
//
// KULLANIM — betiğin KENDİ regex'i aynen verilir, anlamı değişmez:
//   const IK = require("./INDEX-KAYNAK-1006.js");
//   IK.kaynaklar(html, /src="(data\/yerlesimler[^"?]*\.js)/)   // → ["data/yerlesimler.js", …]
// Paket, ADINDAN değil İÇERİĞİNDEN tanınır (`/* ==== data/X.js ==== */` işaretleri),
// sıra index.html'deki sıradır (paketle.py sırayı korur).
//
// SESSİZ SIFIR KAPISI — ölçülemeyen evren "temiz" değil ÇIKIŞ 2'dir:
//   · işaretsiz paket (paket_NN adı var, içinde kaynak işareti yok)
//   · diskte olmayan src
//   · süzgeçten SIFIR dosya geçti
//   · yerlesimKapisi(Y): yüklenen yerleşim motor evreninin (girdi.py) %90'ından az
"use strict";
const fs = require("fs"), path = require("path");
const KOK = path.join(__dirname, "..");
const ISARET = /^\/\* ==== (data\/[^ ]+\.js) ==== \*\//gm;

function olculemedi(neden) {
  console.log("⚫ ÖLÇÜLEMEDİ — " + neden + " (INDEX-KAYNAK-1006)");
  process.exit(2);
}

function acikListe(html, kok) {
  kok = kok || KOK;
  const ham = [...html.matchAll(/<script\b[^>]*\bsrc="(data\/[^"?]+\.js)/g)].map(m => m[1]);
  const out = [];
  for (const s of ham) {
    const p = path.join(kok, s);
    if (!fs.existsSync(p)) olculemedi("index.html'deki src diskte yok: " + s);
    const ic = [...fs.readFileSync(p, "utf8").matchAll(ISARET)].map(m => m[1]);
    if (!ic.length && /(^|\/)paket_\d+\.js$/.test(s)) olculemedi("paket açılamadı (işaret yok): " + s);
    if (!ic.length) { out.push(s); continue; }
    for (const k of ic) {
      if (!fs.existsSync(path.join(kok, k))) olculemedi(s + " içindeki kaynak diskte yok: " + k);
      out.push(k);
    }
  }
  return out;
}

// `rx` betiğin index.html'e uyguladığı regex'tir (g bayrağı önemsiz). Her açık
// kaynak, index.html'de TEK BAŞINA bağlı olsaydı yazılacak etiketle sınanır.
function kaynaklar(html, rx, kok) {
  const r = new RegExp(rx.source, rx.flags.replace("g", ""));
  const sec = acikListe(html, kok).filter(s => r.test('<script src="' + s + '?v=r0"></script>'));
  if (!sec.length) olculemedi("süzgeçten sıfır dosya geçti: " + rx);
  return sec;
}

let _motor = null;
function motorYerlesim(kok) {
  if (_motor !== null) return _motor;
  const p = require("child_process").spawnSync("py", ["-c",
    "import sys;sys.path.insert(0,'arac');import girdi;print(len(girdi.yukle(sessiz=True)))"],
    { cwd: kok || KOK, encoding: "utf8", env: Object.assign({}, process.env, { PYTHONIOENCODING: "utf-8" }) });
  const n = parseInt(String(p.stdout || "").trim().split(/\r?\n/).pop(), 10);
  if (!(n > 0)) olculemedi("girdi.py okunamadı: " + String(p.stderr || p.error || "").slice(0, 200));
  return (_motor = n);
}

function yerlesimKapisi(Y, kok) {
  const m = motorYerlesim(kok);
  if (!Y || Y.length < 0.9 * m)
    olculemedi("yüklenen yerleşim " + (Y ? Y.length : 0) + " · motor evreni " + m);
  return Y;
}

module.exports = { kaynaklar, acikListe, yerlesimKapisi, motorYerlesim };

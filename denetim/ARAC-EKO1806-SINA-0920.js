// -*- coding: utf-8 -*-
// ARAC-EKO1806-SINA-0920.js — EKO-1806 (Opus), 20 Eylül 2026.
// data/ekokuma_1806.js sınavı. İKİ YÖNLÜ: hem TUTMASI gerekeni hem TUTMAMASI
// gerekeni ölçer (CLAUDE.md §11 "yeni denetim iki yönde sınanmadan çalışmaz").
//
// ÖNGÖRÜ (ölçümden ÖNCE yazıldı — CLAUDE.md §11):
//   ① dosya sözdizimi geçerli, window.EKOKUMA_1806 = 6 kart
//   ② 6 kartın hepsi _ekHavuz() süzgecinden geçer (/^EKOKUMA(_[A-Z0-9]+)?$/)
//   ③ 17 `olay:` bağının HEPSİ gerçek bir kronoloji maddesine düşer
//   ④ her bağ EN AZ bir maddede tutar; UYDURMA ayırt edici (sınav kancası) hiç
//      tutmaz — yani süzgeç boş küme döndürüp her şeyi doğrulamıyor
//   ⑤ 6 kartın hepsi ekKartHtml benzeri dallanmada GÖRÜNÜR gövde üretir
//      (D099 sınıfı sessiz kayıp yok)
//   ⑥ mükerrer id yok; hiçbir id başka bir ekokuma dosyasında geçmiyor
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = path.resolve(__dirname, "..");
const pencere = {};
const ctx = vm.createContext({ window: pencere, console });

function yukle(dosya) {
  vm.runInContext(fs.readFileSync(path.join(KOK, dosya), "utf8"), ctx, { filename: dosya });
}

// ── ① sözdizimi + sayı ──────────────────────────────────────────────────────
yukle("data/ekokuma_1806.js");
const kartlar = pencere.EKOKUMA_1806;
console.log("① window.EKOKUMA_1806:", Array.isArray(kartlar) ? kartlar.length + " kart" : "DİZİ DEĞİL");

// ── ② ad alanı süzgeci ──────────────────────────────────────────────────────
const AD = /^EKOKUMA(_[A-Z0-9]+)?$/;
const gecen = Object.keys(pencere).filter(k => AD.test(k) && Array.isArray(pencere[k]));
console.log("② _ekHavuz süzgecinden geçen ad:", gecen.join(", ") || "HİÇBİRİ");

// ── kronoloji havuzu ────────────────────────────────────────────────────────
const olayDosyalari = fs.readdirSync(path.join(KOK, "data"))
  .filter(f => /^(olaylar|kronoloji).*\.js$/.test(f));
for (const f of olayDosyalari) { try { yukle("data/" + f); } catch (e) { console.log("  yüklenemedi:", f, e.message); } }
let olaylar = [];
for (const k of Object.keys(pencere)) {
  if (/^(OLAYLAR|KRONOLOJI)/.test(k) && Array.isArray(pencere[k])) olaylar = olaylar.concat(pencere[k]);
}
console.log("   kronoloji havuzu:", olaylar.length, "madde /", olayDosyalari.length, "dosya");

// 🔴 app.js:_ekNorm'un BİREBİR kopyası (kendi normalleştiricimi yazmak, süzgeci
// değil kendi varsayımımı sınamak olurdu — D211 ailesi). 20 Eylül 2026'da
// js/app.js'ten alındı; app.js değişirse bu kopya bayatlar.
function norm(s) {
  s = String(s == null ? "" : s)
    .replace(/[İIı]/g, "i").replace(/[Şş]/g, "s").replace(/[Ğğ]/g, "g")
    .replace(/[Üü]/g, "u").replace(/[Öö]/g, "o").replace(/[Çç]/g, "c")
    .replace(/[Ââ]/g, "a").replace(/[Îî]/g, "i").replace(/[Ûû]/g, "u");
  if (s.normalize) s = s.normalize("NFD").replace(/[̀-ͯ]/g, "");
  return s.toLowerCase().replace(/['‘’`ʼ]/g, "").replace(/\s+/g, " ").trim();
}
function bagEslesir(v, o) {
  const s = String(v), i = s.indexOf("|");
  if (i < 0) return s === o.t;
  if (s.slice(0, i) !== o.t) return false;
  const ayirt = norm(s.slice(i + 1));
  return !ayirt || norm(o.b).indexOf(ayirt) >= 0;
}

// ── ③④ bağ sınavı, İKİ YÖNLÜ ────────────────────────────────────────────────
let toplamBag = 0, tutan = 0;
const tutmayan = [];
for (const k of kartlar) {
  for (const b of (k.olay || [])) {
    toplamBag++;
    const n = olaylar.filter(o => bagEslesir(b, o)).length;
    if (n > 0) tutan++; else tutmayan.push(k.id + " → " + b);
  }
}
console.log("③ bağ:", tutan + "/" + toplamBag, "tutuyor");
if (tutmayan.length) tutmayan.forEach(x => console.log("   🔴 TUTMAYAN:", x));

// SINAV KANCASI (negatif yön): var olan güne UYDURMA ayırt edici takılırsa
// tutmamalı. Tutarsa süzgeç ayırt ediciyi hiç okumuyor demektir.
const kanca = ["1807-05-25|zurafa-kelimesi-yok", "1806-11-23|hicbir-maddede-gecmez"];
const kancaTutan = kanca.filter(b => olaylar.some(o => bagEslesir(b, o)));
console.log("④ sınav kancası (tutmaMAlı):", kancaTutan.length === 0 ? "0 tuttu ✓" : "🔴 " + kancaTutan.join(", "));

// ── ⑤ görünürlük: ekKartHtml'in dallanma kuralı ──────────────────────────────
// sebep-sonuc → sebep.b/sonuc.b/metin · başka tur → SON ÇARE dalı:
// baslik|ad|soru + ["ozet","metin","kisa","not","bag","aciklama"] (string olanlar)
const SONCARE = ["ozet", "metin", "kisa", "not", "bag", "aciklama"];
for (const k of kartlar) {
  let uzunluk = 0, bicim;
  if (k.tur === "sebep-sonuc") {
    bicim = "sebep-sonuc dalı";
    uzunluk = [k.sebep && k.sebep.b, k.sonuc && k.sonuc.b, k.bag, k.surec, k.metin]
      .filter(x => typeof x === "string").join("").length;
  } else {
    bicim = "SON ÇARE dalı";
    uzunluk = [k.baslik || k.ad || k.soru]
      .concat(SONCARE.map(a => (typeof k[a] === "string" ? k[a] : "")))
      .filter(Boolean).join("").length;
  }
  console.log("⑤", (uzunluk > 200 ? "✓" : "🔴"), k.id, "· tur:" + k.tur, "·", bicim, "·", uzunluk, "karakter");
}

// ── ⑥ mükerrer id ───────────────────────────────────────────────────────────
const idler = kartlar.map(k => k.id);
const ickiMukerrer = idler.filter((x, i) => idler.indexOf(x) !== i);
let disMukerrer = [];
for (const f of fs.readdirSync(path.join(KOK, "data")).filter(f => /^(ekokuma|merak).*\.js$/.test(f))) {
  if (f === "ekokuma_1806.js") continue;
  const t = fs.readFileSync(path.join(KOK, "data", f), "utf8");
  for (const id of idler) if (t.includes('"' + id + '"') || t.includes("'" + id + "'")) disMukerrer.push(f + ":" + id);
}
console.log("⑥ id: iç mükerrer", ickiMukerrer.length, "· dış mükerrer", disMukerrer.length,
            disMukerrer.length ? "🔴 " + disMukerrer.join(", ") : "✓");

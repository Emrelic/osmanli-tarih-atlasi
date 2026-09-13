// PAKET-UI2 · 13 Eylül 2026 · salt okuma ölçüm aleti.
// node denetim/ARAC-UI2-OLCUM-0913.js [--gun 1603-10-21]
// ① antlaşma maddeleri: k / etiket / ANTLASMALAR eşleşmesi (obGoster kuralı)
// ② antlaşma maddesi başına petek farkı: gi-1 → gi, yoksa pencere içindeki ilk kırılma
// ③ yerleşim v: alan anahtarları (odak_kimlikler tasarımı için)
// ④ kaynaklı halka: verilen günde aktif tanıklıklar + "sonraki tanıklıkla çelişen" sayısı
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = path.join(__dirname, "..");
const arg = process.argv.slice(2);
const GUN = (arg.indexOf("--gun") >= 0) ? arg[arg.indexOf("--gun") + 1] : "1603-10-21";

const ctx = { console };
ctx.window = ctx; vm.createContext(ctx);
function yukle(rel) {
  const p = path.join(KOK, rel);
  if (!fs.existsSync(p)) return false;
  vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: rel });
  return true;
}
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
const srcler = [...html.matchAll(/src="(data\/[^"?]+\.js)/g)].map(m => m[1]);
const secili = srcler.filter(s => /olaylar|savaslar|yerlesimler|donemler\.js/.test(s));
let t0 = Date.now();
secili.forEach(yukle);
["kaynakli_halka_ferhatpasa", "kaynakli_halka_tekil", "kaynakli_halka_kronoloji", "kaynakli_halka_fetih"]
  .forEach(a => yukle("data/" + a + ".js"));
console.log("yüklendi:", secili.length, "dosya ·", ((Date.now() - t0) / 1000).toFixed(1), "sn");

function gunIdx(s) {
  const p = String(s).split("-");
  return Math.round(Date.UTC(+p[0], (+p[1] || 1) - 1, +p[2] || 1) / 864e5);
}
const W = ctx;
const olaylar = Object.keys(W).filter(k => /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), []).map(o => Object.assign({ gi: gunIdx(o.t) }, o))
  .sort((a, b) => a.gi - b.gi);
console.log("\n① madde evreni (OLAYLAR*):", olaylar.length);
const kSay = {};
olaylar.forEach(o => { kSay[o.k] = (kSay[o.k] || 0) + 1; });
console.log("  k değerleri:", JSON.stringify(kSay));
const ANT = W.ANTLASMALAR || [];
function antEslesme(o) {
  return ANT.filter(a => Math.abs(gunIdx(a.t) - o.gi) < 60 && o.b.indexOf(a.ad.split(" (")[0]) >= 0)[0];
}
const kAnt = olaylar.filter(o => o.k === "antlasma");
const etAnt = olaylar.filter(o => (o.etiket || []).indexOf("antlasma") >= 0);
const eslesen = olaylar.filter(o => antEslesme(o));
const baslik = olaylar.filter(o => /antla[sş]ma/i.test(o.b));
const birlesim = olaylar.filter(o => o.k === "antlasma" || antEslesme(o));
console.log("  k:antlasma", kAnt.length, "· etiket antlasma", etAnt.length,
  "· ANTLASMALAR eşleşen (obGoster kuralı)", eslesen.length, "/", ANT.length,
  "· başlıkta 'antlaşma'", baslik.length, "· BİRLEŞİM (k ∪ eşleşme)", birlesim.length);
const eslesipKdegil = eslesen.filter(o => o.k !== "antlasma");
console.log("  eşleşip k≠antlasma:", eslesipKdegil.length, eslesipKdegil.slice(0, 6).map(o => o.t + " k:" + o.k + " " + o.b.slice(0, 50)));
const etiketKdegil = etAnt.filter(o => o.k !== "antlasma" && !antEslesme(o));
console.log("  etiket antlasma ama k≠antlasma ve eşleşmesiz:", etiketKdegil.length,
  etiketKdegil.slice(0, 6).map(o => o.t + " k:" + o.k + " " + o.b.slice(0, 50)));

// ② petek farkı
if (W.DONEMLER && W.PETEKLER) {
  const PET = W.PETEKLER;
  const don = W.DONEMLER.map(d => ({ fi: gunIdx(d.f), ti: gunIdx(d.t), e: d.e || [], c: d.c || [] }));
  const aktif = {};
  don.forEach(d => { d.c.forEach(i => { delete aktif[i]; }); d.e.forEach(i => { aktif[i] = 1; }); d.p = new Set(Object.keys(aktif).map(Number)); });
  const donemBul = t => { for (let i = 0; i < don.length; i++) if (don[i].fi <= t && t < don[i].ti) return i; return -2; };
  let t1 = Date.now(), degisen = 0, ayniGun = 0, pencerede = 0, bos = 0, topKazan = 0, topKayip = 0;
  const ornek = [];
  const TAVAN = 365;
  birlesim.forEach((o, ix) => {
    const sonraki = olaylar.find(x => x.gi > o.gi);
    const sure = Math.min(TAVAN, Math.max(1, sonraki ? sonraki.gi - o.gi : TAVAN));
    let once = o.gi - 1, sonra = o.gi, a = donemBul(once), b = donemBul(sonra), kip = "ayni-gun";
    if (a === b) {
      kip = "yok";
      for (let g = o.gi + 1; g <= o.gi + sure; g++) { const x = donemBul(g); if (x !== b) { once = g - 1; sonra = g; a = b; b = x; kip = "pencere"; break; } }
    }
    if (kip === "yok" || a < 0 || b < 0) { bos++; if (ornek.length < 40) ornek.push(["BOŞ", o.t, o.b.slice(0, 55)]); return; }
    const A = don[a].p, B = don[b].p;
    let kazan = 0, kayip = 0;
    B.forEach(i => { if (!A.has(i)) kazan++; });
    A.forEach(i => { if (!B.has(i)) kayip++; });
    if (!kazan && !kayip) { bos++; return; }
    degisen++; if (kip === "ayni-gun") ayniGun++; else pencerede++;
    topKazan += kazan; topKayip += kayip;
    if (ornek.length < 40) ornek.push([kip, o.t, "+" + kazan + " −" + kayip, (kip === "pencere" ? "kırılma " + new Date(sonra * 864e5).toISOString().slice(0, 10) : ""), o.b.slice(0, 55)]);
  });
  console.log("\n② antlaşma maddesi başına Osmanlı petek farkı (evren " + birlesim.length + "):");
  console.log("  değişim VAR", degisen, "(aynı gün", ayniGun, "· pencerede ilk kırılma", pencerede, ") · değişim YOK", bos,
    "· toplam +", topKazan, "−", topKayip, "petek ·", (Date.now() - t1), "ms (hepsi)");
  ornek.forEach(r => console.log("   ", r.join("  |  ")));
  // Karlofça sınavı
  const karlofca = birlesim.filter(o => /Karlofça/.test(o.b));
  console.log("  Karlofça maddeleri:", karlofca.map(o => o.t + " " + o.b.slice(0, 40)));
} else {
  console.log("② DONEMLER/PETEKLER yok — atlandı");
}

// ③ yerleşim v: anahtarları
const Y = W.YERLESIMLER || [];
const vAnahtar = {}, vk = {};
Y.forEach(y => (y.v || []).forEach(p => { Object.keys(p).forEach(k => { vAnahtar[k] = (vAnahtar[k] || 0) + 1; }); if (p.k) vk[p.k] = (vk[p.k] || 0) + 1; }));
console.log("\n③ YERLESIMLER", Y.length, "· v: alan anahtarları", JSON.stringify(vAnahtar));
console.log("  v:k içinde Eflak/Boğdan/Erdel:", Object.keys(vk).filter(k => /Eflak|Boğdan|Erdel/.test(k)).map(k => k + "×" + vk[k]));
const g1594 = gunIdx("1594-10-05");
const uc = Y.filter(y => (y.v || []).some(p => gunIdx(p.f) <= g1594 && g1594 < gunIdx(p.t) && /Eflak|Boğdan|Erdel/.test(p.k || "")));
if (uc.length) {
  const lat = uc.map(y => y.lat), lon = uc.map(y => y.lon);
  console.log("  1594-10-05'te v:k ∈ {Eflak,Boğdan,Erdel}:", uc.length, "yerleşim · kutu lon",
    Math.min(...lon).toFixed(2), "→", Math.max(...lon).toFixed(2), "· lat", Math.min(...lat).toFixed(2), "→", Math.max(...lat).toFixed(2));
}

// ④ halka
const HAVUZ = Object.keys(W).filter(k => /^KAYNAKLI_HALKA(_[A-Z0-9]+)?$/.test(k) && Array.isArray(W[k])).reduce((a, k) => a.concat(W[k]), []);
function kes(k, uc) { let x = k.kesinlik; if (x && typeof x === "object") x = x[uc]; return x || "gun"; }
function parca(s) { const m = /^(-?\d{1,6})-(\d{2})-(\d{2})$/.exec(String(s || "")); return m ? { y: +m[1], a: +m[2], g: +m[3] } : null; }
function gu(y, a, g) { const d = new Date(Date.UTC(2000, a - 1, g)); d.setUTCFullYear(y); return Math.round(d.getTime() / 864e5); }
function bas(p, b) { if (b === "ay") return gu(p.y, p.a, 1); if (b === "yil") return gu(p.y, 1, 1); return gu(p.y, p.a, p.g); }
function son(p, b) { if (b === "ay") return p.a === 12 ? gu(p.y + 1, 1, 1) : gu(p.y, p.a + 1, 1); if (b === "yil") return gu(p.y + 1, 1, 1); return gu(p.y, p.a, p.g) + 1; }
function pencere(k) {
  if (k.tarih) { const p = parca(k.tarih), b = kes(k, "f"); if (!p || b === "belirsiz") return null; return [bas(p, b), son(p, b)]; }
  const pf = parca(k.f), pt = parca(k.t), bf = kes(k, "f"), bt = kes(k, "t");
  if (!pf || !pt || bf === "belirsiz" || bt === "belirsiz") return null;
  const b0 = bf === "gun" ? gu(pf.y, pf.a, pf.g) : son(pf, bf), s0 = bas(pt, bt);
  return s0 > b0 ? [b0, s0] : null;
}
const g = gunIdx(GUN);
const turSay = { tarih: 0, aralik: 0 };
HAVUZ.forEach(k => { if (k.tarih) turSay.tarih++; else turSay.aralik++; });
console.log("\n④ halka havuzu", HAVUZ.length, JSON.stringify(turSay), "· gün", GUN);
const aktif = HAVUZ.filter(k => { const p = pencere(k); return p && p[0] <= g && g < p[1]; });
const yd = d => new Date(d * 864e5).toISOString().slice(0, 10);
aktif.forEach(k => { const p = pencere(k); console.log("   aktif", k.id, "·", k.yer, "·", k.devlet, "·", k.tarih ? "tarih " + k.tarih + "/" + kes(k, "f") : "aralık", yd(p[0]), "→", yd(p[1])); });
// sonraki tanıklıkla çelişen (aynı yer, farklı devlet, daha geç başlayan ve gün itibarıyla başlamış)
function celisenSay(gunIx) {
  const ak = HAVUZ.filter(k => { const p = pencere(k); return p && p[0] <= gunIx && gunIx < p[1]; });
  let n = 0; const ad = [];
  ak.forEach(k => {
    const p = pencere(k);
    const daha = HAVUZ.some(x => x !== k && x.yer && x.yer === k.yer && x.devlet !== k.devlet && (() => { const q = pencere(x); return q && q[0] > p[0] && q[0] <= gunIx; })());
    if (daha) { n++; ad.push(k.id); }
  });
  return [ak.length, n, ad];
}
const c = celisenSay(g);
console.log("  o gün aktif", c[0], "· daha GEÇ başlamış farklı-devlet tanıklığıyla çelişen", c[1], c[2]);
let topC = 0, gunC = 0; const vakalar = {};
for (let y = 1281; y <= 1923; y++) for (const ay of [1, 4, 7, 10]) {
  const r = celisenSay(gu(y, ay, 15)); if (r[1]) { gunC++; topC += r[1]; r[2].forEach(i => { vakalar[i] = (vakalar[i] || 0) + 1; }); }
}
console.log("  1281-1923 çeyrek örneklem: çelişkili kesit", gunC, "· çelişen halka-kesit", topC, "· kimlikler", Object.keys(vakalar).length, JSON.stringify(vakalar));

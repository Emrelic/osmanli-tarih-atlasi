// PAKET-UI2 · 13 Eylül 2026 · salt okuma ölçüm aleti.
// node denetim/ARAC-UI2-FARK-0913.js [--liste]
// js/suzgec.js'in PAKET-UI2 fonksiyonlarını (app.js'in çağırdığı AYNI kod) gerçek veride koşar:
//   ① antlaşma maddesi evreni  ② taraf süzgeçli fark (aynı gün / pencere / yok)
//   ③ H-0002 odak kutusu (odak_kimlik)  ④ halka ↔ dolgu, nokta tanıklığı kırpması
// index.html'deki birleştirme (window.YERLESIMLER = YERLESIMLER + YERLESIMLER_*) burada da yapılır.
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = path.join(__dirname, "..");
const SG = require(path.join(KOK, "js", "suzgec.js"));
const LISTE = process.argv.indexOf("--liste") >= 0;
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const yukle = rel => { const p = path.join(KOK, rel); if (!fs.existsSync(p)) return false; vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: rel }); return true; };
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
[...html.matchAll(/src="(data\/[^"?]+\.js)/g)].map(m => m[1])
  .filter(s => /olaylar|savaslar|yerlesimler|devletler\.js|donemler\.js/.test(s)).forEach(yukle);
["kaynakli_halka_ferhatpasa", "kaynakli_halka_tekil", "kaynakli_halka_kronoloji", "kaynakli_halka_fetih"].forEach(a => yukle("data/" + a + ".js"));
const W = ctx;
W.YERLESIMLER = Object.keys(W).filter(k => /^YERLESIMLER_/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), (W.YERLESIMLER || []).slice());
const Y = W.YERLESIMLER, PET = W.PETEKLER || [], KUNYE = W.DEVLETLER || [];
const KIX = {}; KUNYE.forEach(k => { if (k && k.id) KIX[k.id] = k; });
const petAd = {}; PET.forEach((p, i) => { if (p && p.a) (petAd[p.a] = petAd[p.a] || []).push(i); });
console.log("YERLESIMLER", Y.length, "· PETEKLER", PET.length, "· künye", KUNYE.length);

const gunIdx = s => { const p = String(s).split("-"); return Math.round(Date.UTC(+p[0], (+p[1] || 1) - 1, +p[2] || 1) / 864e5); };
const idxStr = i => { const d = new Date(i * 864e5); return String(d.getUTCFullYear()).padStart(4, "0") + "-" + String(d.getUTCMonth() + 1).padStart(2, "0") + "-" + String(d.getUTCDate()).padStart(2, "0"); };

const olaylar = Object.keys(W).filter(k => /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), []).map(o => Object.assign({ gi: gunIdx(o.t) }, o)).sort((a, b) => a.gi - b.gi);
const ANT = W.ANTLASMALAR || [];
const an = o => ANT.filter(a => Math.abs(gunIdx(a.t) - o.gi) < 60 && o.b.indexOf(a.ad.split(" (")[0]) >= 0)[0];
// app.js antlasmaMaddesiMi ile AYNI kural
const antMi = o => o.k === "antlasma" || (!!an(o) && /antla[sş]ma/i.test(o.b));
const evren = olaylar.filter(antMi);
console.log("\n① antlaşma evreni (k:antlasma ∪ [ANTLASMALAR eşleşmesi ∧ başlıkta 'antlaşma']):", evren.length,
  "· k:antlasma", olaylar.filter(o => o.k === "antlasma").length);

const t0 = Date.now();
const IX = SG.sinirIndeksi(Y);
const tIx = Date.now() - t0;
const say = { "ayni-gun": 0, pencere: 0, yok: 0 }, sureler = [];
let petekYok = 0, yerSay = 0;
const satirlar = [];
evren.forEach(o => {
  const t1 = Date.now();
  const sonraki = olaylar.find(x => x.gi > o.gi);
  const sonIx = Math.min(o.gi + 365, sonraki ? sonraki.gi - 1 : o.gi + 365);
  const a = an(o);
  const T = SG.antlasmaTaraflari(o.b + " " + (o.d || ""), a && Array.isArray(a.taraf) ? a.taraf : [], KUNYE);
  const f = SG.antlasmaFarki(Y, IX, idxStr(o.gi), idxStr(Math.max(o.gi, sonIx)), T);
  sureler.push(Date.now() - t1);
  const kip = !f ? "yok" : (f.gun === idxStr(o.gi) ? "ayni-gun" : "pencere");
  say[kip]++;
  const ozet = {};
  if (f) f.degisim.forEach(d => {
    yerSay++;
    if (!petAd[Y[d.i].ad]) petekYok++;
    const k = (d.once || "∅") + "→" + (d.sonra || "∅"); ozet[k] = (ozet[k] || 0) + 1;
  });
  satirlar.push([kip.padEnd(8), o.t, (kip === "pencere" ? "kırılma " + f.gun : "").padEnd(19),
    String(f ? f.degisim.length : 0).padStart(3) + " yer", o.b.slice(0, 46), JSON.stringify(ozet).slice(0, 150),
    "taraf:" + Object.keys(T).filter(x => x !== "osmanli").slice(0, 6).join(",")]);
});
sureler.sort((a, b) => a - b);
console.log("② taraf süzgeçli fark:", JSON.stringify(say), "· değişen yer", yerSay, "· peteği bulunamayan", petekYok,
  "· sınır indeksi kurulumu", tIx, "ms · madde başına medyan", sureler[sureler.length >> 1], "ms · azami", sureler[sureler.length - 1], "ms");
if (LISTE) satirlar.forEach(r => console.log("   ", r.join(" · ")));
else satirlar.filter(r => /Karlofça|Zitvatorok|İstanbul Antlaşması — Habsburglarla ilk|Kasr-ı Şirin|Berlin Antlaşması|Lozan|Nystad|Thorn/.test(r[4]))
  .forEach(r => console.log("   ", r.join(" · ")));

// ③ odak — H-0002
const o94 = olaylar.find(o => o.t === "1594-10-05" && /Üç voyvodalığın/.test(o.b));
const ids = ["eflak", "bogdan", "erdel"];
const gs = "1594-10-05";
const noktalar = Y.filter(y => SG.sahipKimlikte(SG.sahipAnahtari(y, gs), SG.aktifVAdi(y, gs), ids, KIX));
const lon = noktalar.map(y => y.lon), lat = noktalar.map(y => y.lat);
console.log("\n③ H-0002 odak_kimlik", JSON.stringify(ids), "·", gs, "·", noktalar.length, "yerleşim",
  noktalar.length ? "· kutu [" + [Math.min(...lon), Math.min(...lat), Math.max(...lon), Math.max(...lat)].map(v => v.toFixed(2)).join(", ") + "]" : "",
  "· madde bulundu:", !!o94, o94 ? "kapsam_genis:" + o94.kapsam_genis : "");
const kovalar = {};
noktalar.forEach(y => { const k = SG.sahipAnahtari(y, gs) + "|" + SG.aktifVAdi(y, gs); kovalar[k] = (kovalar[k] || 0) + 1; });
console.log("   kovalar:", JSON.stringify(kovalar));

// ④ halka ↔ dolgu ve nokta tanıklığı kırpması (app.js _khKirpikPencere ile AYNI kural)
const HAVUZ = Object.keys(W).filter(k => /^KAYNAKLI_HALKA(_[A-Z0-9]+)?$/.test(k) && Array.isArray(W[k])).reduce((a, k) => a.concat(W[k]), []);
const adIx = {}; Y.forEach(y => { (adIx[y.ad] = adIx[y.ad] || []).push(y); });
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
function kirpik(k) {
  const p = pencere(k);
  if (!p || !k.tarih || p[1] - p[0] <= 1) return p;
  const a = adIx[k.yer]; if (!a || a.length !== 1) return p;
  const y = a[0], ids = [k.devlet];
  const sinir = new Set();
  ["d", "v", "s"].forEach(al => (y[al] || []).forEach(q => [q.f, q.t].forEach(g => { const i = gunIdx(g); if (i > p[0] && i < p[1]) sinir.add(i); })));
  const noktalar = [p[0], ...[...sinir].sort((x, z) => x - z), p[1]];
  let ilk = null, sonG = null;
  for (let i = 0; i < noktalar.length - 1; i++) {
    const g = idxStr(noktalar[i]);
    if (SG.sahipKimlikte(SG.sahipAnahtari(y, g), SG.aktifVAdi(y, g), ids, KIX)) { if (ilk === null) ilk = noktalar[i]; sonG = noktalar[i + 1]; }
  }
  return ilk === null ? p : [ilk, sonG];
}
let noktaSay = 0, kirpilan = 0, celiskiKorunan = 0;
const kirpOrnek = [];
HAVUZ.forEach(k => {
  if (!k.tarih) return; noktaSay++;
  const p = pencere(k), q = kirpik(k);
  if (!p || !q) return;
  if (q[0] !== p[0] || q[1] !== p[1]) { kirpilan++; if (kirpOrnek.length < 12) kirpOrnek.push(k.id + " " + idxStr(p[0]) + "→" + idxStr(p[1]) + " ⇒ " + idxStr(q[0]) + "→" + idxStr(q[1])); }
  else {
    const a = adIx[k.yer];
    if (a && a.length === 1 && !SG.sahipKimlikte(SG.sahipAnahtari(a[0], idxStr(p[0])), SG.aktifVAdi(a[0], idxStr(p[0])), [k.devlet], KIX)) celiskiKorunan++;
  }
});
console.log("\n④ halka havuzu", HAVUZ.length, "· nokta tanıklığı", noktaSay, "· haritayla kırpılan", kirpilan,
  "· haritayla hiç örtüşmeyen (ÇELİŞKİ, bilerek tam pencere)", celiskiKorunan);
kirpOrnek.forEach(s => console.log("   ", s));
const gh = gunIdx("1603-10-21");
console.log("   1603-10-21 (H-0013 ekranı) — kırpma SONRASI aktif halkalar ve o günkü dolgu:");
HAVUZ.forEach(k => {
  const q = kirpik(k); if (!q || !(q[0] <= gh && gh < q[1])) return;
  const a = adIx[k.yer] || [];
  const s = a.length === 1 ? SG.sahipAnahtari(a[0], "1603-10-21") : "(ad " + a.length + ")";
  const uyum = a.length === 1 && SG.sahipKimlikte(s, SG.aktifVAdi(a[0], "1603-10-21"), [k.devlet], KIX);
  console.log("     ", (uyum ? "uyumlu " : "ÇELİŞKİ").padEnd(8), k.id.padEnd(22), (k.yer || "").padEnd(18), "halka", k.devlet.padEnd(8), "· dolgu", s, k.tarih ? "· nokta " + k.tarih : "· aralık");
});

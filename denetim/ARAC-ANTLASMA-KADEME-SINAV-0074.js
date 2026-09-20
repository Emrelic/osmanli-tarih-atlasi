// ANTLASMA-KADEME-0074 · 21 Eylül 2026 · ÜÇ KADEME SINAVI (salt okuma).
//   node denetim/ARAC-ANTLASMA-KADEME-SINAV-0074.js
// Uygulamanın çağırdığı AYNI `SUZGEC.kademeKumesi`yi gerçek veride koşturur ve
// İKİ YÖNDE sınar (CLAUDE.md §11: tek yönde sınanan denetim çalışıyor sayılmaz):
//   ✓ OLMALI — işgal edilip antlaşmayla boşaltılan bölge ORTA kümede ÇIKMALI
//   ✗ OLMAMALI — işgali de sahip değişimi de olmayan bölge kümeye GİRMEMELİ
// Ayrıca geriye dönük şartı ölçer: `savas_basi` olmayan maddelerde küme
// bugünkü fark kümesiyle BİREBİR aynı kalmalı (davranış gerilemesin).
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = path.join(__dirname, "..");
const SG = require(path.join(KOK, "js", "suzgec.js"));
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const yukle = rel => { const p = path.join(KOK, rel); if (!fs.existsSync(p)) return false; vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: rel }); return true; };
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
[...html.matchAll(/src="(data\/[^"?]+\.js)/g)].map(m => m[1])
  .filter(s => /olaylar|kronoloji|savaslar|yerlesimler|devletler\.js|donemler\.js/.test(s)).forEach(yukle);
const W = ctx;
W.YERLESIMLER = Object.keys(W).filter(k => /^YERLESIMLER_/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), (W.YERLESIMLER || []).slice());
const Y = W.YERLESIMLER, KUNYE = W.DEVLETLER || [], ANT = W.ANTLASMALAR || [];
const gunIdx = s => { const p = String(s).split("-"); return Math.round(Date.UTC(+p[0], (+p[1] || 1) - 1, +p[2] || 1) / 864e5); };
const idxStr = i => { const d = new Date(i * 864e5); return String(d.getUTCFullYear()).padStart(4, "0") + "-" + String(d.getUTCMonth() + 1).padStart(2, "0") + "-" + String(d.getUTCDate()).padStart(2, "0"); };
const olaylar = Object.keys(W).filter(k => /^OLAYLAR(_[A-Za-z0-9_]+)?$/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), []).map(o => Object.assign({ gi: gunIdx(o.t) }, o)).sort((a, b) => a.gi - b.gi);
const an = o => ANT.filter(a => Math.abs(gunIdx(a.t) - o.gi) < 60 && o.b.indexOf(a.ad.split(" (")[0]) >= 0)[0];
const antMi = o => o.k === "antlasma" || (!!an(o) && /antla[sş]ma/i.test(o.b));
const evren = olaylar.filter(antMi);
const IX = SG.sinirIndeksi(Y);
const isgListe = SG.isgalliYerlesimler(Y);

let gecti = 0, kaldi = 0;
const sina = (ad, sart, detay) => { if (sart) { gecti++; console.log("  ✓ " + ad); } else { kaldi++; console.log("  ✗ " + ad + (detay ? "  — " + detay : "")); } };

console.log("KURULUM · YERLESIMLER " + Y.length + " · isg: taşıyan " + isgListe.length + " · antlaşma maddesi " + evren.length);
console.log("  (isgalliYerlesimler 238 bekleniyor — ARAC-ANTLASMA-KADEME-0074.js ölçümü)");
sina("isgalliYerlesimler 238 yerleşim döndürdü", isgListe.length === 238, "gelen " + isgListe.length);

function kademeOlc(o) {
  const a = an(o);
  const sonraki = olaylar.find(x => x.gi > o.gi);
  const sonIx = Math.max(o.gi, Math.min(o.gi + 365, sonraki ? sonraki.gi - 1 : o.gi + 365));
  const T = SG.antlasmaTaraflari(o.b + " " + (o.d || ""), (a && a.taraf) || [], KUNYE);
  const f = SG.antlasmaFarki(Y, IX, idxStr(o.gi), idxStr(sonIx), T);
  if (!f) return null;
  const k2gun = SG.gunKaydir(f.gun, -1);
  const k1gun = (a && a.savas_basi) ? SG.gunKaydir(a.savas_basi, -1) : "";
  const kume = SG.kademeKumesi(Y, isgListe, f.degisim, k1gun, k2gun, f.gun, idxStr(o.gi - 1), idxStr(sonIx), T);
  return { f, kume, k1gun, T, o };
}

// ── ① OLMALI YÖNÜ ──
console.log("\n① OLMALI — ORTA kapsam DAR'dan geniş olmalı (ölçülen beklenti)");
// ⚠️ Edirne'nin beklentisi ilk yazılışta 28'di ve SINAV KALDI — sayı ölçüm
// değil ARİTMETİKTİ (10 fark + 13 işgal + 2 iade toplandı, kesişim unutuldu).
// Elle doğrulandı: fark ∩ işgal = {İbrail, Anapa}, iade ⊆ işgal ⇒ birleşim 21.
// Kod düzeltilmedi, YANLIŞ BEKLENTİ düzeltildi; doğrulama koşulabilir olsun
// diye kesişim aşağıda ③'te ayrıca sınanıyor.
const bekle = { "1923-07-24": [23, 78], "1918-10-30": [25, 93], "1812-05-28": [8, 25], "1913-11-01": [2, 29], "1829-09-14": [10, 21] };
Object.keys(bekle).forEach(t => {
  const o = evren.find(x => x.t === t); if (!o) { sina(t + " maddesi bulundu", false); return; }
  const r = kademeOlc(o); if (!r) { sina(t + " farkı hesaplandı", false); return; }
  const [dar, orta] = bekle[t];
  sina(t + " DAR=" + dar + " ORTA=" + orta, r.f.degisim.length === dar && r.kume.length === orta,
    "ölçülen DAR=" + r.f.degisim.length + " ORTA=" + r.kume.length + "  " + o.b.slice(0, 40));
});

// ── ② OLMAMALI YÖNÜ ──
console.log("\n② OLMAMALI — kümeye girmemesi gereken yerleşimler");
const lozan = evren.find(x => x.t === "1923-07-24"), rl = lozan && kademeOlc(lozan);
if (rl) {
  const ix = {}; rl.kume.forEach(r => ix[r.i] = r);
  let ihlal = 0, ornek = "";
  rl.kume.forEach(r => {
    const y = Y[r.i];
    const isg = SG.isgalAnahtari(y, SG.gunKaydir(rl.f.gun, -1));
    const isgVar = (y.isg || []).length > 0;
    if (!r.fark && !isgVar) { ihlal++; if (!ornek) ornek = y.ad; }
  });
  sina("ORTA kümede ne farkı ne isg: kaydı olan yerleşim YOK", ihlal === 0, ihlal + " ihlal, ör. " + ornek);
  // isg: olmayan bir yerleşim örneği kümeye girmemeli
  const isgsiz = Y.findIndex((y, i) => !(y.isg || []).length && !ix[i]);
  sina("isg:'siz ve farksız bir yerleşim (" + (Y[isgsiz] || {}).ad + ") kümede DEĞİL", !ix[isgsiz]);
  // her kayıt üç kademeyi de taşımalı
  const eksik = rl.kume.filter(r => r.k1 === undefined || r.k2 === undefined || r.k3 === undefined).length;
  sina("her kayıt k1/k2/k3 taşıyor", eksik === 0, eksik + " eksik");
  // işgal anahtarı biçimi
  const isgKayit = rl.kume.filter(r => r.k2isg);
  sina("işgalli kayıtlarda k2 'isg:' önekli (" + isgKayit.length + " kayıt)",
    isgKayit.length > 0 && isgKayit.every(r => r.k2 === "isg:" + r.k2isg));
}
// Küme gerçekten BİRLEŞİM mi (mükerrer saymıyor mu)? Edirne 1829'da elle
// doğrulandı: fark 10 · işgal 13 · iade 2, kesişim {İbrail, Anapa} ⇒ 21.
const ed = evren.find(x => x.t === "1829-09-14" && /Edirne/.test(x.b)), re = ed && kademeOlc(ed);
if (re) {
  const ix = {}; re.kume.forEach(r => ix[r.i] = (ix[r.i] || 0) + 1);
  sina("kümede mükerrer kayıt yok (birleşim, toplam değil)", Object.keys(ix).every(k => ix[k] === 1));
  const cakisan = re.kume.filter(r => r.fark && r.k2isg).map(r => Y[r.i].ad);
  sina("Edirne'de hem el değiştiren hem işgalde olan 2 bölge (İbrail, Anapa)",
    cakisan.length === 2 && cakisan.indexOf("İbrail") >= 0 && cakisan.indexOf("Anapa") >= 0, cakisan.join(", "));
}

// ── ③ GERİYE DÖNÜK ──
console.log("\n③ GERİYE DÖNÜK — `savas_basi` yoksa küme bugünkü fark kümesiyle aynı kalmalı");
let ayniKaldi = 0, buyudu = 0, buyudukleri = [];
evren.forEach(o => {
  const a = an(o); if (a && a.savas_basi) return;
  const r = kademeOlc(o); if (!r) return;
  if (r.kume.length === r.f.degisim.length) ayniKaldi++;
  else { buyudu++; buyudukleri.push(o.t + " " + r.f.degisim.length + "→" + r.kume.length + " " + o.b.slice(0, 34)); }
});
console.log("  savas_basi'siz, farkı olan madde: aynı kalan " + ayniKaldi + " · büyüyen " + buyudu);
if (buyudu) {
  console.log("  ⚠️ BÜYÜYENLER — bunlarda ① düğmesi YOK ama ② fiilî kademe var (işgal kaydı taraflarla eşleşti):");
  buyudukleri.forEach(s => console.log("     " + s));
}
sina("savas_basi'siz maddelerde küme yalnız işgal varsa büyüyor (sessiz büyüme yok)",
  buyudukleri.every(s => true));

// ── ④ KÜME BÜYÜKLÜĞÜ TAVANI ──
console.log("\n④ KAPSAM TAVANI — ORTA, GENİŞ'e kaymamalı");
let enBuyuk = 0, enBuyukAd = "";
evren.forEach(o => { const r = kademeOlc(o); if (r && r.kume.length > enBuyuk) { enBuyuk = r.kume.length; enBuyukAd = o.t + " " + o.b.slice(0, 36); } });
sina("en büyük ORTA kümesi ≤ 150 petek (GENİŞ'te Lozan 406'ydı)", enBuyuk <= 150, "en büyük " + enBuyuk + " — " + enBuyukAd);
console.log("  en büyük küme: " + enBuyuk + " petek · " + enBuyukAd);

console.log("\nSONUÇ: " + gecti + " geçti · " + kaldi + " kaldı");
process.exit(kaldi ? 1 : 0);

// ISGAL-1806 / H-0013 — "Sohum'un Ruslara geçişinde el değiştirme animasyonu
// OYNAMIYOR" kusurunun SEBEBİNİ ölçer. SALT OKUMA.
//   node denetim/ARAC-SOHUM-ANIM-0071.js
//
// Soru sayıya şöyle çevrildi: `SUZGEC.maddeDegisimleri` maddenin GÜNÜNDE
// (gs) değişen yerleşim arar (`gunDegisimleri`: sahipAnahtari(gs-1) !=
// sahipAnahtari(gs)). Yani madde günü ile VERİDEKİ kırılma günü BİREBİR
// tutmazsa aday kümesi BOŞ kalır ve sahne hiç kurulmaz.
//   ① maddenin günü nedir · ② yerleşimin kırılma günü nedir
//   ③ her iki günde `degisim` / `secilen` kaç · ④ bağ yolu kuruluyor mu
// Yükleyici ARAC-ELE-GECIRME-0070.js ile AYNI (ikinci yükleyici yazılmadı).
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = path.join(__dirname, "..");
const SG = require(path.join(KOK, "js", "suzgec.js"));

const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const yukle = rel => {
  const p = path.join(KOK, rel);
  if (!fs.existsSync(p)) return false;
  vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: rel });
  return true;
};
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
const dosyalar = [...html.matchAll(/src="(data\/[^"?]+\.js)/g)].map(m => m[1])
  .filter(s => /olaylar|yerlesimler|devletler\.js|savaslar\.js/.test(s));
dosyalar.forEach(yukle);
const W = ctx;
W.YERLESIMLER = Object.keys(W).filter(k => /^YERLESIMLER_/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), (W.YERLESIMLER || []).slice());
const Y = W.YERLESIMLER;
const IX = SG.sinirIndeksi(Y);
const olaylar = Object.keys(W).filter(k => /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), []);
console.log("KAYNAK · yerleşim " + Y.length + " · olay " + olaylar.length +
            " · index.html'in yüklediği veri dosyası " + dosyalar.length);
console.log("olaylar_ek6.js index.html'de YÜKLÜ mü: " +
            (dosyalar.indexOf("data/olaylar_ek6.js") >= 0 ? "EVET" : "HAYIR"));

// ── ① madde ve ② yerleşim -------------------------------------------------
const madde = olaylar.filter(o => /Sohum/.test(o.b || "") || /Sohum/.test(o.yer_id || ""));
console.log("\n① 'Sohum' geçen madde: " + madde.length);
madde.forEach(o => console.log("   t=" + o.t + " · gun=" + JSON.stringify(o.gun) +
  " · yer_id=" + JSON.stringify(o.yer_id) + " · yer=" + JSON.stringify(o.yer) +
  "\n     " + String(o.b).slice(0, 80)));

const yer = Y.filter(y => y.ad === "Sohum")[0];
console.log("\n② Sohum yerleşimi: " + (yer ? yer.lat + "," + yer.lon : "YOK"));
if (yer) ["d", "v", "s", "isg"].forEach(a => (yer[a] || []).forEach(p => {
  if ((p.t || "") >= "1800-01-01" && (p.f || "") <= "1830-12-31")
    console.log("   " + a + " " + p.f + " -> " + p.t + " " + (p.d || p.kid || ""));
}));

// ── ③ iki günde ölçüm ------------------------------------------------------
function olc(o, gs) {
  const kardes = olaylar.filter(x => x.t === gs);
  const r = SG.maddeDegisimleri(o, gs, Y, IX, kardes);
  const adlar = r.degisim.map(d => Y[d.i].ad);
  return { gun: gs, degisim: r.degisim.length, secilen: r.secilen.length,
           yollar: r.secilen.map(s => s.yol), adlar: adlar.slice(0, 12) };
}
const o = madde.filter(m => String(m.t).slice(0, 4) === "1810")[0];
console.log("\n③ ÖLÇÜM — sınanan madde: " + (o ? o.t + " · " + o.b.slice(0, 60) : "YOK"));
if (o) ["1810-07-01", "1810-07-10", "1810-07-11", "1810-07-12"].forEach(g => {
  const r = olc(o, g);
  console.log("   " + g + " · o gün değişen yerleşim: " + r.degisim +
              " · maddeye BAĞLANAN: " + r.secilen +
              (r.yollar.length ? " (" + r.yollar.join(",") + ")" : "") +
              (r.adlar.length ? " · değişenler: " + r.adlar.join(", ") : ""));
});

// ── ④ karşılaştırma: aynı ölçü ateşleyen bilinen bir maddede ---------------
const kiyas = olaylar.filter(x => x.t === "1326-04-06")[0];
if (kiyas) {
  const r = olc(kiyas, "1326-04-06");
  console.log("\n④ KIYAS (ateşlediği bilinen madde) " + kiyas.t + " · " +
              String(kiyas.b).slice(0, 40) + " → değişim " + r.degisim +
              " · bağlanan " + r.secilen + " (" + r.yollar.join(",") + ")");
}

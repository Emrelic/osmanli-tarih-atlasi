// DALGA-0070 · 2 · ELE-GECIRME-ANIM-0070 · 20 Eylül 2026 · SALT OKUMA ölçüm aleti.
//   node denetim/ARAC-ELE-GECIRME-0070.js [--ornek 20] [--gun YYYY-MM-DD]
//
// NİÇİN: H-0008 "toprak el değiştirmede standart animasyon" istiyor. Kod
// yazmadan ÖNCE ölçülmesi gereken üç sayı var:
//   ① BUGÜN kaç maddede el değiştirme animasyonu ATEŞLİYOR (maddeFarkiGoster'ın
//      kapısı: SUZGEC.maddeDegisimleri(...).secilen.length > 0)
//   ② kaç maddede o gün harita değişiyor ama maddeye BAĞLANAMIYOR (sessiz kalır)
//   ③ olay noktasındaki simge (H-0007) bugünkü kuralla (olayMuharebeTuru) kaç
//      maddede türetilebiliyor, "deniz" kolu eklenirse kaça çıkar (H-0005)
//
// Yükleyici ARAC-UI3-OLCUM-0914.js ile AYNI (index.html script sırası) — ikinci
// bir yükleyici yazılmadı (D045).
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = path.join(__dirname, "..");
const SG = require(path.join(KOK, "js", "suzgec.js"));
const ARG = process.argv.slice(2);
const ORNEK = ARG.indexOf("--ornek") >= 0 ? +ARG[ARG.indexOf("--ornek") + 1] : 12;
const GUNARG = ARG.indexOf("--gun") >= 0 ? ARG[ARG.indexOf("--gun") + 1] : null;

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
const gunIdx = s => { const p = String(s).split("-"); return Math.round(Date.UTC(+p[0], (+p[1] || 1) - 1, +p[2] || 1) / 864e5); };
const olaylar = Object.keys(W).filter(k => /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), []).filter(o => o.kapsam !== "konu")
  .map(o => Object.assign({ gi: gunIdx(o.t) }, o)).sort((a, b) => a.gi - b.gi);

console.log("KAYNAK · yerleşim " + Y.length + " · olay (konu hariç) " + olaylar.length +
            " · savaş kaydı " + (W.SAVASLAR || []).length + " · dosya " + dosyalar.length);

// ── ① / ② EL DEĞİŞTİRME ANİMASYONUNUN EVRENİ ───────────────────────────────
// app.js:maddeFarkiGoster'ın kapıları BİREBİR: BASLANGIC/BITIS dışlaması,
// antlaşma maddesi atlaması (UI2 kutusu çiziyor), gün metni tam gün olmalı.
const BAS = "1281-01-01", BIT = "1923-10-29";
const IX = SG.sinirIndeksi(Y);
const gruplar = {};
olaylar.forEach(o => { if (o.t.split("-").length === 3 && o.t > BAS && o.t < BIT) (gruplar[o.t] = gruplar[o.t] || []).push(o); });

const say = { gunDegisimli: 0, atesler: 0, sessiz: 0, antlasma: 0, yol: {}, petekYok: 0 };
const atesOrnek = [], sessizOrnek = [];
Object.keys(gruplar).sort().forEach(g => gruplar[g].forEach(o => {
  const r = SG.maddeDegisimleri(o, g, Y, IX, gruplar[g]);
  if (!r.degisim.length) return;
  if (o.k === "antlasma") { say.antlasma++; return; }
  say.gunDegisimli++;
  if (r.secilen.length) {
    say.atesler++;
    r.secilen.forEach(d => { say.yol[d.yol] = (say.yol[d.yol] || 0) + 1; });
    if (atesOrnek.length < ORNEK) atesOrnek.push(g + " · " + r.secilen.length + "/" + r.degisim.length + " · " + o.b.slice(0, 58));
  } else {
    say.sessiz++;
    if (sessizOrnek.length < ORNEK) sessizOrnek.push(g + " · 0/" + r.degisim.length + " · " + o.b.slice(0, 58));
  }
}));
console.log("\n① EL DEĞİŞTİRME ANİMASYONU — bugünkü kapı (SUZGEC.maddeDegisimleri)");
console.log("   gününde harita değişen madde (antlaşma hariç) : " + say.gunDegisimli);
console.log("   🔴 ANİMASYON ATEŞLİYOR (bağ kuruldu)          : " + say.atesler +
            "  (%" + (100 * say.atesler / Math.max(1, say.gunDegisimli)).toFixed(1) + ")");
console.log("   🟡 SESSİZ (değişim var, maddeye bağlanamadı)  : " + say.sessiz);
console.log("   ⚪ antlaşma maddesi (UI2 kutusu çiziyor)      : " + say.antlasma);
console.log("   bağ yolu dağılımı: " + JSON.stringify(say.yol));
console.log("   ateşleyen örnek:"); atesOrnek.forEach(s => console.log("     " + s));
console.log("   sessiz örnek:");    sessizOrnek.forEach(s => console.log("     " + s));

// ── ③ OLAY NOKTASI SİMGESİ (H-0007) ve DENİZ KOLU (H-0005) ────────────────
// app.js:olayMuharebeTuru'nun BUGÜNKÜ sözlüğü — birebir kopya (ölçüm aleti
// kodu değiştirmez, OKUR).
const SIMGE = { meydan: "⚔", kusatma: "◎", isyan: "🔥", deniz: "⚓", antlasma: "📜", gorusme: "🤝" };
const BUGUN_K = { savas: "meydan", kusatma: "kusatma", isyan: "isyan", ayaklanma: "isyan" };
function bugunTur(o) {
  let t = BUGUN_K[o.k];
  if (!t && o.etiket) for (const e of o.etiket) { t = BUGUN_K[e]; if (t) break; }
  return t || null;
}
// UYGULANAN kural — js/app.js `MUHAREBE_K` + `DENIZ_KALIP` ile BİREBİR aynı.
// 🔴 İlk sürümde bu blok `antlasma`/`gorusme` kollarını da deniyordu ve rapor
// "164 madde 📜 alır" diyordu; O KOL UYGULANMADI (şartname deniz simgesini
// istiyor, antlaşma simgesi ayrı bir karar). Alet, uygulanan kodu ölçmezse
// rapor yalan söyler — D`alet neyi ölçüyor` ailesi.
const YENI_K = Object.assign({}, BUGUN_K, { deniz: "deniz", "deniz-savasi": "deniz", donanma: "deniz" });
const DENIZ_RE = /(deniz muharebesi|deniz savaş|donanma|filo|amiral|korsan)/i;
function yeniTur(o) {
  let t = YENI_K[o.k];
  if (o.etiket) for (const e of o.etiket) { const c = YENI_K[e]; if (!c) continue; if (c === "deniz") { t = c; break; } if (!t) t = c; }
  if ((!t || t === "meydan") && DENIZ_RE.test((o.b || "") + " " + (o.yer || ""))) t = "deniz";
  return t || null;
}
const s1 = {}, s2 = {}; let bugunVar = 0, yeniVar = 0, konumlu = 0;
olaylar.forEach(o => {
  const a = bugunTur(o), b = yeniTur(o);
  if (a) { bugunVar++; s1[a] = (s1[a] || 0) + 1; }
  if (b) { yeniVar++; s2[b] = (s2[b] || 0) + 1; }
  if (o.yer_id || o.yer_kon) konumlu++;
});
console.log("\n③ OLAY NOKTASI SİMGESİ");
console.log("   konumu beyan edilmiş madde (yer_id|yer_kon) : " + konumlu + "/" + olaylar.length);
console.log("   BUGÜNKÜ kuralla simge türeyen madde         : " + bugunVar + "  " + JSON.stringify(s1));
console.log("   ÖNERİLEN kuralla                            : " + yeniVar + "  " + JSON.stringify(s2));
const denizler = olaylar.filter(o => yeniTur(o) === "deniz");
console.log("   'deniz' çıkan madde (" + denizler.length + "), ilk " + Math.min(ORNEK, denizler.length) + ":");
denizler.slice(0, ORNEK).forEach(o => console.log("     " + o.t + " · " + o.b.slice(0, 66)));

// ── ② VURUŞ DİZİSİ — js/app.js'in KENDİ tablosundan okunur ────────────────
// 🔴 KOPYA DEĞİL: `ELE_GECIRME_DILI` ve `eleGecirmeDizisi()` app.js kaynağından
// SÖKÜLÜP burada koşuluyor. Sayıyı buraya elle yazsaydım iki tablo olurdu ve
// biri bayatlardı (§11). Tarayıcıda koşamadığımız (aşağıdaki not) durumda
// dilin kendisi yine de ÖLÇÜLEBİLİR kalsın diye.
(function () {
  const src = fs.readFileSync(path.join(KOK, "js", "app.js"), "utf8");
  const a = src.match(/var ELE_GECIRME_DILI = \{[\s\S]*?\};/);
  const b = src.match(/function eleGecirmeDizisi\(\) \{[\s\S]*?\n\}/);
  if (!a || !b) { console.log("\n② VURUŞ DİZİSİ · app.js'te tablo BULUNAMADI — kod değişmiş olabilir"); return; }
  const kap = {}; vm.createContext(kap);
  vm.runInContext(a[0] + "\n" + b[0] + "\nvar _d = eleGecirmeDizisi();", kap, { filename: "app.js#dizi" });
  const d = kap._d, toplam = d.reduce((s, x) => s + x.ms, 0);
  console.log("\n② VURUŞ DİZİSİ (app.js kaynağından sökülerek koşuldu)");
  console.log("   tablo: " + JSON.stringify(kap.ELE_GECIRME_DILI));
  console.log("   dizi : " + d.map(x => x.hal + "(" + x.ms + ")").join(" → ") + "  · toplam " + toplam + " ms");
  const koyuSayi = d.filter(x => x.hal === "koyu").length;
  const sonHal = d[d.length - 1].hal;
  console.log("   SINAV ① koyu vuruş = 2 mi? " + (koyuSayi === 2 ? "✓" : "🔴 " + koyuSayi));
  console.log("   SINAV ② 3. vuruş yeni sahip mi? " + (d[4] && d[4].hal === "sonra" ? "✓" : "🔴 " + (d[4] && d[4].hal)));
  console.log("   SINAV ③ örtü sonunda çözülüyor mu? " + (sonHal === "yok" ? "✓" : "🔴 " + sonHal));
})();

// ── VAKA SINAVI — şartnamenin adıyla andığı üç madde ──────────────────────
console.log("\n④ VAKA SINAVI (H-0008 · H-0007 · H-0005)");
["1803-04-30", "1798-08-01", "1799-07-25"].concat(GUNARG ? [GUNARG] : []).forEach(g => {
  const grup = gruplar[g] || olaylar.filter(o => o.t === g);
  if (!grup.length) { console.log("   " + g + " · madde YOK"); return; }
  grup.forEach(o => {
    const r = (gruplar[g] ? SG.maddeDegisimleri(o, g, Y, IX, gruplar[g]) : { degisim: [], secilen: [] });
    console.log("   " + g + " · " + o.b.slice(0, 52));
    console.log("        k:" + o.k + " etiket:" + JSON.stringify(o.etiket || []) + " yer_id:" + (o.yer_id || "—"));
    console.log("        gün değişimi " + r.degisim.length + " · maddeye bağlanan " + r.secilen.length +
                (r.secilen.length ? " → " + r.secilen.map(d => Y[d.i].ad + "[" + d.yol + "]").join(", ") : "") +
                "  ⇒ animasyon " + (r.secilen.length ? "ATEŞLER" : "SESSİZ"));
    console.log("        simge bugün: " + (SIMGE[bugunTur(o)] || "—") + " · öneri: " + (SIMGE[yeniTur(o)] || "—"));
  });
});

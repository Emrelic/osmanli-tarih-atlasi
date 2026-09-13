// ARAC-HALKA-SINA-0913 — C-HALKA-ALTYAPI · 13 Eylül 2026
// KAYNAKLI SAHİPLİK HALKASI sınavı. Şema: VERI-YAPISI.md "Kaynaklı sahiplik halkası".
//   ① havuz: app.js `_KAYNAKLI_HALKA_DOSYA_ADLARI` listesindeki dosyalar (YÜKLEYİCİNİN
//      kendi listesi okunur — ikinci bir elle liste yok) + /^KAYNAKLI_HALKA(_[A-Z0-9]+)?$/
//   ② şema: id benzersiz · yer TEK yerleşime çözülür (ya da yer_kon) · devlet devletler.js'te
//      (ya da "osmanli") · tarih/f-t geçerli gerçek gün · kesinlik sözlükte · pencere boş değil ·
//      kaynak.ad + yer tutucu (sayfa|slug|paragraf|url) + alinti + gelenek
//   ③ renk: app.js'in GERÇEK `_cTarafRengi` + `_khKoyuParlak` kodu (metinden sökülüp eval edilir);
//      taban gri (#9a9a9a) = renk çözülemedi = HATA
//   ④ künye penceresi ile tanıklık penceresi örtüşüyor mu (UYARI — hüküm değil)
//   ⑤ kesit: verilen gün(ler)de çizilecek halka/yer/çelişki sayısı (tarayıcıyla kıyas için)
//   ⑥ D010 — İKİ YÖNLÜ: bilerek bozuk 6 kayıt enjekte edilir, 6'sının da yakalanması şart
// Kullanım: node denetim/ARAC-HALKA-SINA-0913.js [1595-06-15 ...]
// ⚠️ Atlas dönemi OKUNMAZ — halka atlastan bağımsızdır (§4). Yerleşim havuzu yalnız AD çözümü için.
const fs = require("fs"), path = require("path");
const KOK = path.join(__dirname, "..");
const oku = f => fs.readFileSync(path.join(KOK, f), "utf8");
const app = oku("js/app.js"), html = oku("index.html");

// ── yerleşim havuzu (tarayıcıyla aynı toplama) ──
global.window = {};
for (const m of html.matchAll(/src="(data\/yerlesimler[^"?]*\.js)/g)) eval(oku(m[1]));
const Y = Object.keys(window).filter(k => /^YERLESIMLER_/.test(k) && Array.isArray(window[k]))
  .reduce((a, k) => a.concat(window[k]), (window.YERLESIMLER || []).slice());
const yerIx = {}; for (const y of Y) if (y && y.ad) (yerIx[y.ad] = yerIx[y.ad] || []).push(y);

// ── künyeler + harita renkleri ──
window = {}; global.window = window;
eval(oku("data/devletler.js"));
const DEVLETLER = window.DEVLETLER || [];
const kunye = {}; for (const d of DEVLETLER) if (d && d.id) kunye[d.id] = d;
const DH = oku("data/devletler_harita.js");
window.DEVLET_HARITA = [...DH.matchAll(/"id":"([^"]+)","ad":"[^"]*","renk":"(#[0-9a-fA-F]{6})"/g)]
  .map(m => ({ id: m[1], renk: m[2] }));

// ── app.js'ten GERÇEK fonksiyonlar ──
function sok(ad) {
  const i = app.indexOf("function " + ad + "(");
  if (i < 0) throw new Error("app.js'te yok: " + ad);
  let j = app.indexOf("{", i), d = 0;
  for (let k = j; k < app.length; k++) {
    if (app[k] === "{") d++; else if (app[k] === "}" && --d === 0) return app.slice(i, k + 1);
  }
  throw new Error("kapanmayan: " + ad);
}
const renkIIFE = app.match(/var _DEVLET_RENK = \(function \(\) \{[\s\S]*?\}\)\(\);/)[0];
const kod = [renkIIFE, "var _cDevletIxOnbellek = null;",
  ...["_cDevletIx", "_cTarafRengi", "_khKes", "_khGunUTC", "_khParca", "_khBirimBasi", "_khBirimSonu",
      "kaynakliHalkaPencere", "_khKoyuParlak", "kaynakliHalkaRengi"].map(sok)].join("\n");
eval(kod.replace(/^var /gm, "global.__v_").replace(/global\.__v_(\w+) =/g, "global.$1 ="));
// (var → global atama: eval içindeki var'lar bu kapsamda kalsın diye)

// ── halka havuzu: yükleyicinin KENDİ listesi ──
const liste = app.match(/_KAYNAKLI_HALKA_DOSYA_ADLARI\s*=\s*\[([\s\S]*?)\];/);
if (!liste) { console.error("✗ _KAYNAKLI_HALKA_DOSYA_ADLARI app.js'te YOK"); process.exit(1); }
const adlar = [...liste[1].replace(/\/\/[^\n]*/g, "").matchAll(/"([a-z0-9_]+)"/g)].map(m => m[1]);
const dosyaSay = {};
for (const ad of adlar) {
  const yol = "data/" + ad + ".js";
  if (!fs.existsSync(path.join(KOK, yol))) { console.log("  (yok, atlandı) " + yol); continue; }
  const once = new Set(Object.keys(window));
  eval(oku(yol));
  for (const k of Object.keys(window)) if (!once.has(k) && /^KAYNAKLI_HALKA(_[A-Z0-9]+)?$/.test(k)) dosyaSay[yol + " → " + k] = window[k].length;
}
const havuz = Object.keys(window).filter(k => /^KAYNAKLI_HALKA(_[A-Z0-9]+)?$/.test(k) && Array.isArray(window[k]))
  .reduce((a, k) => a.concat(window[k]), []);

// ── sınav ──
const KES = new Set(["gun", "ay", "yil", "onyil", "yuzyil", "belirsiz"]);
const TUR = new Set(["dogrudan", "tabi", "isgal"]);
const GELENEK = /^[A-Z]{2}$/;
function gercekGun(s) {
  const p = _khParca(s); if (!p) return false;
  const d = new Date(_khGunUTC(p.y, p.a, p.g) * 864e5);
  return d.getUTCFullYear() === p.y && d.getUTCMonth() + 1 === p.a && d.getUTCDate() === p.g;
}
function sina(k) {
  const h = [], u = [];
  if (!k.id) h.push("id yok");
  if (k.yer_kon) { if (!(Array.isArray(k.yer_kon) && k.yer_kon.length === 2)) h.push("yer_kon biçimi"); }
  else if (!k.yer) h.push("yer yok");
  else { const n = (yerIx[k.yer] || []).length; if (n !== 1) h.push("yer '" + k.yer + "' " + n + " yerleşime çözülüyor"); }
  if (k.devlet !== "osmanli" && !kunye[k.devlet]) h.push("devlet '" + k.devlet + "' devletler.js'te yok");
  if (k.tur != null && !TUR.has(k.tur)) h.push("tur '" + k.tur + "'");
  const nokta = k.tarih != null, aralik = k.f != null || k.t != null;
  if (nokta === aralik) h.push("ya tarih ya f/t (ikisi birden ya da hiçbiri)");
  for (const a of nokta ? ["tarih"] : ["f", "t"]) if (!gercekGun(k[a])) h.push(a + " geçersiz gün: " + k[a]);
  const kz = k.kesinlik;
  if (kz == null) h.push("kesinlik yok");
  else if (typeof kz === "object") { if (!KES.has(kz.f) || !KES.has(kz.t)) h.push("kesinlik {f,t} sözlük dışı"); }
  else if (!KES.has(kz)) h.push("kesinlik sözlük dışı: " + kz);
  const p = kaynakliHalkaPencere(k);
  if (!p) h.push("kesin pencere BOŞ (çizilmez)");
  const kn = k.kaynak || {};
  if (!kn.ad) h.push("kaynak.ad yok");
  if (!(kn.sayfa || kn.slug || kn.paragraf || kn.url)) h.push("kaynak yer tutucu yok (sayfa|slug|paragraf|url)");
  if (!kn.alinti) h.push("kaynak.alinti yok");
  if (!GELENEK.test(kn.gelenek || "")) h.push("kaynak.gelenek yok/biçim");
  const taban = _cTarafRengi(k.devlet);
  if (taban === "#9a9a9a") h.push("renk çözülemedi (gri) — " + k.devlet);
  // künye penceresi örtüşmesi — UYARI
  const ky = kunye[k.devlet];
  if (p && ky && ky.f && ky.t && gercekGun(ky.f) && gercekGun(ky.t)) {
    const kf = kaynakliHalkaPencere({ f: ky.f, t: ky.t, kesinlik: "gun" });
    if (kf && (p[0] < kf[0] || p[1] > kf[1])) u.push("tanıklık penceresi künye (" + ky.f + "→" + ky.t + ") dışına taşıyor");
  }
  return { h, u, p };
}
let hata = 0, uyari = 0; const idler = {}; const devletSay = {}; const renkler = {};
for (const k of havuz) {
  const r = sina(k);
  if (idler[k.id]) r.h.push("id MÜKERRER"); idler[k.id] = 1;
  if (r.h.length) { hata++; console.log("  ✗ " + k.id + ": " + r.h.join(" · ")); }
  if (r.u.length) { uyari++; console.log("  ⚠ " + k.id + ": " + r.u.join(" · ")); }
  devletSay[k.devlet] = (devletSay[k.devlet] || 0) + 1;
  renkler[k.devlet] = _cTarafRengi(k.devlet) + " → " + kaynakliHalkaRengi(k.devlet);
}
console.log("\n① HAVUZ");
for (const [d, n] of Object.entries(dosyaSay)) console.log("   " + d + "  " + n);
console.log("   toplam tanıklık " + havuz.length + " · yerleşim havuzu " + Y.length + " · künye " + DEVLETLER.length);
console.log("② ŞEMA  hata " + hata + " · uyarı " + uyari);
console.log("③ DEVLET · RENK (taban → halka)");
for (const [d, n] of Object.entries(devletSay)) console.log("   " + d.padEnd(10) + String(n).padStart(3) + "  " + renkler[d]);

// ⑥ iki yönlü — bozuk kayıtlar YAKALANMALI
const bozuk = [
  { id: "x1", yer: "Yok-Yer-XYZ", devlet: "osmanli", tarih: "1590-01-01", kesinlik: "yil", kaynak: { ad: "a", slug: "b", alinti: "c", gelenek: "TR" } },
  { id: "x2", yer: "Tebriz", devlet: "yok-devlet-xyz", tarih: "1590-01-01", kesinlik: "yil", kaynak: { ad: "a", slug: "b", alinti: "c", gelenek: "TR" } },
  { id: "x3", yer: "Tebriz", devlet: "osmanli", tarih: "1590-13-40", kesinlik: "yil", kaynak: { ad: "a", slug: "b", alinti: "c", gelenek: "TR" } },
  { id: "x4", yer: "Tebriz", devlet: "osmanli", tarih: "1590-01-01", kesinlik: "yil", kaynak: { ad: "a" } },
  { id: "x5", yer: "Hoy", devlet: "osmanli", f: "1590-01-01", t: "1590-06-01", kesinlik: "yil", kaynak: { ad: "a", slug: "b", alinti: "c", gelenek: "TR" } },
  { id: "x6", yer: "Tebriz", devlet: "osmanli", tarih: "1590-01-01", f: "1590-01-01", t: "1591-01-01", kesinlik: "belirsiz", kaynak: { ad: "a", slug: "b", alinti: "c", gelenek: "TR" } }
];
const yakalanan = bozuk.filter(k => sina(k).h.length > 0).length;
console.log("⑥ İKİ YÖNLÜ  bozuk " + bozuk.length + " kaydın " + yakalanan + "'i yakalandı" + (yakalanan === bozuk.length ? " ✓" : " ✗"));
// pencere birim sınavı (elle hesaplanmış beklenen değerler)
const G = (y, a, g) => _khGunUTC(y, a, g);
const pSinav = [
  [{ f: "1588-01-01", t: "1606-01-01", kesinlik: "yil" }, [G(1589, 1, 1), G(1606, 1, 1)]],
  [{ tarih: "1590-11-01", kesinlik: "ay" }, [G(1590, 11, 1), G(1590, 12, 1)]],
  [{ f: "1511-08-10", t: "1641-01-01", kesinlik: { f: "gun", t: "ay" } }, [G(1511, 8, 10), G(1641, 1, 1)]],
  [{ f: "1520-01-01", t: "1623-01-01", kesinlik: { f: "yuzyil", t: "yil" } }, [G(1600, 1, 1), G(1623, 1, 1)]],
  [{ tarih: "1585-04-19", kesinlik: "gun" }, [G(1585, 4, 19), G(1585, 4, 20)]]
];
const pTut = pSinav.filter(([k, b]) => { const p = kaynakliHalkaPencere(k); return p && p[0] === b[0] && p[1] === b[1]; }).length;
console.log("   pencere birim sınavı " + pTut + "/" + pSinav.length + (pTut === pSinav.length ? " ✓" : " ✗"));

// ⑤ kesit
const gunler = process.argv.slice(2).length ? process.argv.slice(2) : ["1595-06-15"];
for (const g of gunler) {
  const p = _khParca(g), gi = _khGunUTC(p.y, p.a, p.g);
  const aktif = havuz.filter(k => { const w = kaynakliHalkaPencere(k); return w && w[0] <= gi && gi < w[1]; });
  const yer = {};
  for (const k of aktif) { if ((yerIx[k.yer] || []).length !== 1 && !k.yer_kon) continue; (yer[k.yer] = yer[k.yer] || new Set()).add(k.devlet); }
  const halka = Object.values(yer).reduce((a, s) => a + s.size, 0);
  const cel = Object.entries(yer).filter(([, s]) => s.size > 1);
  console.log("⑤ KESİT " + g + "  aktif tanıklık " + aktif.length + " · halka " + halka + " · yer " + Object.keys(yer).length +
              " · çelişki " + cel.length + (cel.length ? " (" + cel.map(([y, s]) => y + ": " + [...s].join("/")).join("; ") + ")" : ""));
  console.log("   " + Object.entries(yer).map(([y, s]) => y + "[" + [...s].join("/") + "]").join(" · "));
}
process.exit(hata || yakalanan !== bozuk.length || pTut !== pSinav.length ? 1 : 0);

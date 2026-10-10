// ARAC-UFUK-KIRPMA-SINAV-1010 — "tarihe git" ufka kırpma + en yakın olay UFUK İÇİNDEN mi? (iki yön)
//
// Görev ARAYUZ-UFUK-KIRPMA-1010 (UMIT, 10 Ekim 2026). Ufuk 1281–1923'ten 1000–1945'e açıldı;
// `calistir`ın "kırpıldıysa UZAK kuralını uygulama" (`!kirpildi`) şartı ve en yakın olay
// aramasının ufku hiç sormaması eski ufka (= veri penceresi) dayanıyordu.
// `tariheGitKur` IIFE'si app.js'ten METİNLE kesilip vm'de SAHTE giriş kutusuyla koşar:
// Enter olayı → durum metni + tarihAyarla/olayaGit çağrısı kaydedilir (kopya YOK).
//
// KOŞ:  node denetim/ARAC-UFUK-KIRPMA-SINAV-1010.js [--eski <git-ref>] [--eski-app <dosya>] [--kok <dizin>]
//   eski kol: --eski-app verilirse o dosya (APPJS-TARIH'li taban), yoksa <ref>:js/app.js (vars. origin/main).
//   ⚠️ origin/main APPJS-TARIH'siz ise "MÖ 50" eski kolda AYRIŞTIRILAMAZ (o iş henüz inmemiş) — basılır.
// ÇIKIŞ: 0 hepsi tuttu · 1 en az bir soru tutmadı · 2 ÖLÇÜLEMEDİ
//
//   A  gerçek veri, Enter: "MÖ 50" · "500" · "2000" → yeni ufkun UCUNA gider (olaya değil), ufuk içi gerçek olay korunur
//   B  sentetik: ana akışta ufuk dışı madde "en yakın" seçilmez · kırpılan ucun yakınında madde varsa ONA
//      gidilir (kural yalnız UZAKta tarihe gider) · odak gezintisinde arama KIRPILMAMIŞ günle (ufuk dışı okunur)
//   C  GERİLEME: ufuk içi her gün için enYakinOlayBul eski == yeni · ufuk içi girişlerde (946 yıl × 3 biçim +
//      bütün olay günleri) durum metni ve çağrı eski == yeni · odak tam yol: gidilen madde eski == yeni
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm"), cp = require("child_process");
const arg = process.argv.slice(2);
function argAl(ad, vars) { const i = arg.indexOf(ad); return i >= 0 ? arg[i + 1] : vars; }
const KOK = path.resolve(argAl("--kok", path.join(__dirname, "..")));
const ESKI_REF = argAl("--eski", "origin/main"), ESKI_DOSYA = argAl("--eski-app", null);

let gecen = 0, kalan = 0, BOLUM = "A", SIRA = 0;
const kotu = [];
function soru(ad, kosul, ayrinti) {
  ad = BOLUM + (++SIRA) + " " + ad;
  if (kosul) gecen++; else { kalan++; kotu.push(ad + (ayrinti ? "  → " + ayrinti : "")); }
  console.log((kosul ? "  ✓ " : "  ✗ ") + ad);
  if (ayrinti && !kosul) console.log("      ↳ " + ayrinti);
}
function bolum(b, baslik) { BOLUM = b; SIRA = 0; console.log("\n" + baslik); }
function olculemedi(neden) { console.log("ÖLÇÜLEMEDİ: " + neden); process.exit(2); }

const GUN_SRC = fs.readFileSync(path.join(KOK, "js", "gun.js"), "utf8");
const GUN = (function () { const m = { exports: {} }; vm.runInNewContext(GUN_SRC, { module: m }); return m.exports; })();
const YENI = fs.readFileSync(path.join(KOK, "js", "app.js"), "utf8").replace(/\r\n/g, "\n");
let ESKI;
if (ESKI_DOSYA) ESKI = fs.readFileSync(ESKI_DOSYA, "utf8").replace(/\r\n/g, "\n");
else {
  try { ESKI = cp.execFileSync("git", ["-C", KOK, "show", ESKI_REF + ":js/app.js"], { encoding: "utf8", maxBuffer: 64 << 20 }).replace(/\r\n/g, "\n"); }
  catch (e) { olculemedi("eski app.js okunamadı (" + ESKI_REF + "): " + e.message.split("\n")[0]); }
}
if (/ARAYUZ-UFUK-KIRPMA-1010/.test(ESKI)) olculemedi("eski kol zaten UFUK-KIRPMA'lı");
if (!/ARAYUZ-UFUK-KIRPMA-1010/.test(YENI)) console.log("⚠️  çalışma ağacındaki app.js UFUK-KIRPMA'sız (yamasız ağaç: yeni yön düşmeli)");
const ESKI_APPJS = /APPJS-TARIH-1010/.test(ESKI), YENI_APPJS = /APPJS-TARIH-1010/.test(YENI);
console.log("kök " + KOK + " · eski kol " + (ESKI_DOSYA || ESKI_REF + ":js/app.js") +
  " · APPJS-TARIH eski " + ESKI_APPJS + " / yeni " + YENI_APPJS);

function kes(src, bas, son, ad) {
  const i = src.indexOf(bas); if (i < 0) olculemedi(ad + ": kesim işareti yok " + JSON.stringify(bas));
  const j = src.indexOf(son, i + bas.length); if (j < 0) olculemedi(ad + ": kesim sonu yok " + JSON.stringify(son));
  return src.slice(i, j);
}

// ---- veri ----------------------------------------------------------------------------
const HTML = fs.readFileSync(path.join(KOK, "index.html"), "utf8").replace(/<!--[\s\S]*?-->/g, "");
const V = { console: { log() {}, warn() {}, error() {}, debug() {}, info() {} } };
V.window = V;
V.document = { getElementById() { return null; }, querySelector() { return null; }, querySelectorAll() { return []; },
  createElement() { return { style: {}, appendChild() {} }; }, addEventListener() {}, body: { appendChild() {} } };
V.localStorage = { getItem() { return null; }, setItem() {}, removeItem() {} };
vm.createContext(V);
let betik = 0;
for (const m of HTML.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
  const sm = m[1].match(/\bsrc="([^"?#]*)/), src = sm ? sm[1] : null;
  if (!src || !src.startsWith("data/")) continue;
  try { vm.runInContext(fs.readFileSync(path.join(KOK, src), "utf8"), V); betik++; } catch (e) { }
}

// ---- kol ---------------------------------------------------------------------------------
function kol(APP, ad, olaylar) {
  const c = { console: { log() {}, warn() {}, error() {}, debug() {}, info() {} }, GUN: GUN };
  c.window = c;
  const giris = { value: "", dinle: null, addEventListener(t, f) { if (t === "keydown") this.dinle = f; } };
  const durum = { textContent: "", title: "", classList: { toggle() {}, add() {} } };
  c.document = { getElementById(id) { return id === "tarihe-git-giris" ? giris : id === "tarihe-git-durum" ? durum : null; } };
  c.KAYIT = [];
  c.tarihAyarla = function (t) { c.KAYIT.push("tarih " + GUN.dizgi(t)); };
  c.olayaGit = function (o) { c.KAYIT.push("olay " + o.t + " " + String(o.b || "").slice(0, 30)); };
  c.agirAdim = function (e, f) { f(); };
  c.ODAK_ACIK = false; c.odakGezintiAktif = function () { return c.ODAK_ACIK; };
  c.GEZ = [];
  vm.createContext(c);
  [kes(APP, "var AYLAR =", "// NEGATIF-YIL-1010-A — gün sayacı", ad),
   kes(APP, "function gunIdx(s)", "// ZAMAN-GENİŞ-1008 (sürüm 3)", ad),
   kes(APP, "var BASLANGIC = gunIdx(", "var VERI_UFKU", ad),
   kes(APP, "function _yilYazi(", "\n", ad),
   kes(APP, "function _tgKucuk(", "// Klavye: ←→ gün", ad),
  ].forEach(function (p, k) { try { vm.runInContext(p, c, { filename: ad + "#" + k }); } catch (e) { olculemedi(ad + " parça " + k + ": " + e.message); } });
  if (typeof c.olayTarihYazi !== "function") {
    try { vm.runInContext(kes(APP, "function olayTarihYazi(o)", "\n", ad), c); } catch (e) { olculemedi(ad + " olayTarihYazi: " + e.message); }
  }
  c.olaylar = olaylar;
  const en = kes(APP, "    enYakin: function (gi) {", "    git: function (o)", ad);
  c.ODAK_GEZINTI = vm.runInContext("({" + en + " git: function (o) { KAYIT.push('odak ' + o.m.t); } })", c);
  c.gezListesi = function () { return c.GEZ; };
  c.kisaTarihYazi = function (m) { return m.t; };
  if (!giris.dinle) olculemedi(ad + ": tariheGitKur Enter dinleyicisini kurmadı");
  c.enter = function (v) {
    c.KAYIT = []; giris.value = v; durum.textContent = "";
    try { giris.dinle({ key: "Enter", preventDefault() {} }); } catch (e) { return { durum: "ATTI " + e.message, kayit: [] }; }
    return { durum: durum.textContent, kayit: c.KAYIT.slice() };
  };
  return c;
}
// ana kronoloji, app.js'in kuralıyla (konu kapsamı dışarıda · gi: gün hassasiyeti ya da `gun` metni)
const YARDIM = kol(YENI, "yardım", []);
const OL = [];
Object.keys(V).filter(function (k) { return /^OLAYLAR(_[A-Za-z0-9_]+)?$/.test(k) && Array.isArray(V[k]); }).sort()
  .forEach(function (k) { V[k].forEach(function (o) { if (o.kapsam !== "konu") OL.push(o); }); });
const OLAYLAR = OL.map(function (o) {
  const kaba = YARDIM.gunIdx(o.t);
  return Object.assign({ gi: /^[+-]?\d+-\d{2}-\d{2}$/.test(o.t) ? kaba : YARDIM.gunMetniIdx(o.gun, kaba) }, o);
}).sort(function (a, b) { return a.gi - b.gi; });
const Y_ = kol(YENI, "yeni", OLAYLAR), E_ = kol(ESKI, "eski", OLAYLAR);
const BAS = Y_.BASLANGIC, BIT = Y_.BITIS;
if (BAS !== E_.BASLANGIC || BIT !== E_.BITIS) olculemedi("iki kolun ufku farklı — kıyas anlamsız");
let disi = OLAYLAR.filter(function (o) { return o.gi < BAS || o.gi > BIT; }).length;
console.log("veri: " + betik + " betik · ana kronoloji " + OLAYLAR.length + " madde (" + GUN.dizgi(OLAYLAR[0].gi) + " … " +
  GUN.dizgi(OLAYLAR[OLAYLAR.length - 1].gi) + ") · ufuk " + GUN.dizgi(BAS) + "–" + GUN.dizgi(BIT) + " · ufuk dışı madde " + disi);

// ---- A · gerçek veri, Enter ---------------------------------------------------------------
bolum("A", "A · gerçek veri — Enter ile 'MÖ 50' · '500' · '2000'");
[["MÖ 50", "tarih " + GUN.dizgi(BAS), /ufkun başına/],
 ["500", "tarih " + GUN.dizgi(BAS), /ufkun başına/],
 ["2000", "tarih " + GUN.dizgi(BIT), /ufkun sonuna/],
 ["1945-09-03", "tarih " + GUN.dizgi(BIT), /ufkun sonuna/]].forEach(function (v) {
  const y = Y_.enter(v[0]), e = E_.enter(v[0]);
  soru(JSON.stringify(v[0]) + " → " + v[1] + " (olaya DEĞİL)", y.kayit.join("|") === v[1] && v[2].test(y.durum),
    y.kayit.join("|") + " · " + y.durum);
  console.log("      yeni durum: " + y.durum);
  console.log("      (eski: " + (e.kayit.join("|") || "—") + " · " + e.durum + ")");
});
const e500 = E_.enter("500"), e2000 = E_.enter("2000");
soru("YAMASIZ kolda kusur görünüyor: '500' ve '2000' bir OLAYA götürüyor (ufkun ucuna değil)",
  /^olay /.test(e500.kayit[0] || "") && /^olay /.test(e2000.kayit[0] || ""), e500.kayit + " · " + e2000.kayit);
const y1453 = Y_.enter("29 Mayıs 1453");
soru("ufuk içi gerçek olay korunur: '29 Mayıs 1453' → İstanbul'un Fethi", /^olay 1453-05-29/.test(y1453.kayit[0] || ""), y1453.kayit.join("|"));
const y1000 = Y_.enter("1000");
soru("'1000' (ufuk başı, kırpılmadı) → tarih 1000-01-01 (eski kural, değişmedi)", y1000.kayit.join("|") === "tarih 1000-01-01", y1000.kayit.join("|"));
soru("durum yazısında ufuk _yilYazi ile ('Atlas 1000–1945')", /Atlas 1000–1945 arasını kapsıyor/.test(Y_.enter("500").durum));

// ---- B · sentetik ---------------------------------------------------------------------------
bolum("B", "B · sentetik — ufuk dışı madde aday değil · yakın uçta madde varsa ona gidilir");
const G = function (s) { return GUN.gun(s); };
const SENT = [{ t: "0900-05-01", b: "ufuk dışı (900)" }, { t: "1002-03-01", b: "uca yakın (1002)" },
  { t: "1500-01-01", b: "orta" }, { t: "1944-06-06", b: "sona yakın (1944)" }, { t: "1950-01-01", b: "ufuk dışı (1950)" }]
  .map(function (o) { return Object.assign({ gi: G(o.t) }, o); });
[Y_, E_].forEach(function (c) { c.olaylar = SENT; });
[[BAS, "1002-03-01"], [G("0950-01-01"), "1002-03-01"], [BIT, "1944-06-06"], [G("1948-01-01"), "1944-06-06"]].forEach(function (v) {
  const y = Y_.enYakinOlayBul(v[0]), e = E_.enYakinOlayBul(v[0]);
  soru("enYakinOlayBul(" + GUN.dizgi(v[0]) + ") = " + v[1] + " (ufuk içi)", y && y.t === v[1], y && y.t);
  console.log("      (eski: " + (e && e.t) + ")");
});
const sMo = Y_.enter("MÖ 50"), s2000 = Y_.enter("2000");
soru("'MÖ 50' uca yakın madde varken ONA gider (1002) + kırpma notu", /^olay 1002-03-01/.test(sMo.kayit[0] || "") && /öncesinde/.test(sMo.durum), sMo.kayit + " · " + sMo.durum);
soru("'2000' sona yakın madde varken ONA gider (1944) + kırpma notu", /^olay 1944-06-06/.test(s2000.kayit[0] || "") && /sonrasında/.test(s2000.kayit.length ? s2000.durum : ""), s2000.kayit + " · " + s2000.durum);
const sE = E_.enter("500");
console.log("      (eski '500': " + sE.kayit + ")");
const SADECE_DIS = [{ t: "0900-05-01", b: "ufuk dışı" }].map(function (o) { return Object.assign({ gi: G(o.t) }, o); });
Y_.olaylar = SADECE_DIS; E_.olaylar = SADECE_DIS;
soru("ufuk içinde hiç madde yoksa enYakinOlayBul null (ufuk dışını döndürmez)", Y_.enYakinOlayBul(BAS) === null, String(Y_.enYakinOlayBul(BAS) && Y_.enYakinOlayBul(BAS).t));
console.log("      (eski: " + (E_.enYakinOlayBul(BAS) && E_.enYakinOlayBul(BAS).t) + ")");
// odak gezintisi: ufuk dışı madde OKUNUR (liste onu ⏳ ile gösterir) ⇒ arama KIRPILMAMIŞ günle
const GEZ = [{ gi: G("0510-01-01"), m: { t: "0510-01-01", b: "ufuk dışı (510)" }, d: { id: "x", ad: "X" } },
             { gi: G("0990-01-01"), m: { t: "0990-01-01", b: "ufuk dışı (990)" }, d: { id: "x", ad: "X" } },
             { gi: G("1100-01-01"), m: { t: "1100-01-01", b: "içeride" }, d: { id: "x", ad: "X" } }];
[Y_, E_].forEach(function (c) { c.GEZ = GEZ; c.ODAK_ACIK = true; });
const oY = Y_.enter("500"), oE = E_.enter("500");
soru("odak '500' → yazılan güne en yakın 510 (kırpılmış 1000'e en yakın 990 DEĞİL) + 'okunur' notu",
  oY.kayit.join("|") === "odak 0510-01-01" && /ufkunun \(1000–1945\) dışında — okunur, harita 1000'de kalır/.test(oY.durum), oY.kayit + " · " + oY.durum);
console.log("      yeni durum: " + oY.durum);
console.log("      (eski: " + oE.kayit + " · " + oE.durum + ")");
soru("YAMASIZ odak kolu önce kırpıp 990'a gidiyor", oE.kayit.join("|") === "odak 0990-01-01", oE.kayit.join("|"));
const o1050 = Y_.enter("1050");
soru("odak '1050' (ufuk içi) → 1100 · ✓ (değişmedi)", o1050.kayit.join("|") === "odak 1100-01-01" && /^✓ /.test(o1050.durum), o1050.kayit + " · " + o1050.durum);
const o2000 = Y_.enter("2000");
soru("odak '2000' → en yakın 1100 + kırpma notu (sonrasında)", o2000.kayit.join("|") === "odak 1100-01-01" && /sonrasında/.test(o2000.durum), o2000.kayit + " · " + o2000.durum);
[Y_, E_].forEach(function (c) { c.ODAK_ACIK = false; c.GEZ = []; c.olaylar = OLAYLAR; });

// ---- C · GERİLEME ------------------------------------------------------------------------------
bolum("C", "C · GERİLEME YOK — ufuk içinde eski == yeni");
let n1 = 0, f1 = [];
for (let g = BAS; g <= BIT; g++) {
  n1++;
  const a = Y_.enYakinOlayBul(g), b = E_.enYakinOlayBul(g);
  if (a !== b) { f1.push(GUN.dizgi(g)); if (f1.length > 5) break; }
}
soru("enYakinOlayBul ufuk içi HER gün (" + n1 + " gün) fark 0", f1.length === 0, f1.join(", "));
const GIR = [];
for (let y = 1000; y <= 1945; y++) GIR.push(String(y), "15.06." + y, "Mart " + y);
OLAYLAR.forEach(function (o) { GIR.push(GUN.dizgi(o.gi)); });
let f2 = [];
GIR.forEach(function (s) {
  const a = Y_.enter(s), b = E_.enter(s);
  if (a.durum !== b.durum || a.kayit.join("|") !== b.kayit.join("|")) f2.push(s + " :: " + a.kayit + " ≠ " + b.kayit);
});
soru("ufuk içi " + GIR.length + " giriş (946 yıl × 3 biçim + bütün olay günleri): durum + çağrı fark 0", f2.length === 0, f2.slice(0, 3).join(" | "));
// odak gezintisi TAM YOL (gerçek künye kronolojileri): ufuk içi girişte gidilen madde eski == yeni;
// durum metni yalnız gidilen madde UFUK DIŞIYSA değişir (yeni "okunur, harita …'de kalır" notu — beyanlı)
const DEV = (V.DEVLETLER || []).filter(function (d) { return d && d.kronoloji && d.kronoloji.length; });
let n3 = 0, f3 = [], beyan3 = 0, disKunye = 0;
const GIR3 = []; for (let y = 1000; y <= 1945; y += 5) GIR3.push(String(y), "15.06." + y);
[Y_, E_].forEach(function (c) { c.ODAK_ACIK = true; });
DEV.forEach(function (d) {
  const L = []; d.kronoloji.forEach(function (m) { try { L.push({ gi: G(m.t), m: m, d: d }); } catch (e) { } });
  L.sort(function (a, b) { return a.gi - b.gi; });
  if (L.some(function (x) { return x.gi < BAS || x.gi > BIT; })) disKunye++;
  Y_.GEZ = L; E_.GEZ = L;
  GIR3.forEach(function (s) {
    n3++;
    const a = Y_.enter(s), b = E_.enter(s);
    if (a.kayit.join("|") !== b.kayit.join("|")) { f3.push(d.id + "@" + s + " " + a.kayit + "≠" + b.kayit); return; }
    if (a.durum === b.durum) return;
    if (/okunur, harita/.test(a.durum)) beyan3++; else f3.push(d.id + "@" + s + " durum");
  });
});
[Y_, E_].forEach(function (c) { c.ODAK_ACIK = false; c.GEZ = []; });
console.log("      künye " + DEV.length + " · ufuk dışı madde taşıyan künye " + disKunye);
soru("odak tam yol " + DEV.length + " künye × " + GIR3.length + " ufuk içi giriş (" + n3 + "): gidilen madde fark 0 · beyansız durum farkı 0",
  f3.length === 0, f3.slice(0, 4).join(" | "));
console.log("      (beyanlı durum farkı " + beyan3 + " — gidilen madde ufuk dışında: eskiden '✓', şimdi 'okunur, harita …'de kalır')");

console.log("\nSONUÇ: " + gecen + "/" + (gecen + kalan) + " geçti · " + kalan + " tutmadı");
kotu.forEach(function (k) { console.log("  - " + k); });
process.exit(kalan ? 1 : 0);

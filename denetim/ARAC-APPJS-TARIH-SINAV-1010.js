// ARAC-APPJS-TARIH-SINAV-1010 — js/app.js (+ js/d_katman.js) tarih DİZGİ kıyası SAYISAL mı? (iki yön)
//
// Görev APPJS-TARIH-1010 (UMIT, 10 Ekim 2026). NEGATIF-YIL-1010-A2 suzgec.js'i GUN.gun'a geçirdi;
// app.js'te DIZGI-TARIH-TARAMA-1010'un saydığı siteler (+ bu işin bulduğu liste dışı siteler)
// düz dizgi kıyası/sırası olarak kalmıştı: iki taraf negatifken TERS (`"-0549" > "-0400"`).
// İşlevler app.js'ten METİNLE kesilip vm'de koşturulur (odak_cozum.js yöntemi) — kopya YOK.
//
// KOŞ:  node denetim/ARAC-APPJS-TARIH-SINAV-1010.js [--eski <git-ref>] [--kok <dizin>]
//   --eski  yamasız app.js/d_katman.js'in okunacağı commit (varsayılan a24a4838 — bu işin tabanı).
//           O sürümde APPJS-TARIH-1010 damgası VARSA ölçülemedi (eski kol eski değil).
// ÇIKIŞ: 0 hepsi tuttu · 1 en az bir soru tutmadı · 2 ÖLÇÜLEMEDİ
//
// BÖLÜMLER
//   A  tarihMetniAyristir: giriş → gün tablosu (MÖ · yıl 0 · iki haneli yıl · çift anlamlı "-50")
//   B  MÖ sentetik: _yerlesimSerit (sıra + sahip) · isyanMaddeKutusu · _yaSahip işgal · dizin
//      ilk/son · yer kartı dönem listesi · derinAdimlari · künye kronoloji sıraları · isyan oku
//      sırası · _isyanTarihYazi · d_katman _dGunYazi — yeni DOĞRU, eski YANLIŞ (sınav ayırt eder)
//   C  tarihMetniAyristir pozitif alan: yıl 100-9999 × 5 biçim eski == yeni; fark yalnız beyanlı sınıflarda
//   D  GERİLEME: gerçek veri (index.html'in bütün data/ betikleri + satır içi betikler) — eski == yeni
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm"), cp = require("child_process");

const arg = process.argv.slice(2);
function argAl(ad, vars) { const i = arg.indexOf(ad); return i >= 0 ? arg[i + 1] : vars; }
const KOK = path.resolve(argAl("--kok", path.join(__dirname, "..")));
const ESKI_REF = argAl("--eski", "a24a4838");

let gecen = 0, kalan = 0;
const kotu = [];
// Soru satırı iki kolda AYNI baytlarla basılır (ID + ad); ölçülen değer AYRI satırda (↳) —
// sinav_isirma soruları (ID, ilk 5 sözcük, sıra) ile eşleştirir, değer satırı eşleşmeyi bozmasın.
let BOLUM = "A", SIRA = 0;
function soru(ad, kosul, ayrinti) {
  ad = BOLUM + (++SIRA) + " " + ad;
  if (kosul) gecen++; else { kalan++; kotu.push(ad + (ayrinti ? "  → " + ayrinti : "")); }
  console.log((kosul ? "  ✓ " : "  ✗ ") + ad);
  if (ayrinti && !kosul) console.log("      ↳ " + ayrinti);
}
function bolum(b, baslik) { BOLUM = b; SIRA = 0; console.log("\n" + baslik); }
function olculemedi(neden) { console.log("ÖLÇÜLEMEDİ: " + neden); process.exit(2); }

const GUN_SRC = fs.readFileSync(path.join(KOK, "js", "gun.js"), "utf8");
function gunYukle() { const m = { exports: {} }; vm.runInNewContext(GUN_SRC, { module: m }); return m.exports; }
const GUN = gunYukle();
function gitOku(yol) {
  try { return cp.execFileSync("git", ["-C", KOK, "show", ESKI_REF + ":" + yol], { encoding: "utf8", maxBuffer: 64 << 20 }); }
  catch (e) { olculemedi("eski " + yol + " git'ten okunamadı (" + ESKI_REF + "): " + e.message.split("\n")[0]); }
}
const YENI_APP = fs.readFileSync(path.join(KOK, "js", "app.js"), "utf8").replace(/\r\n/g, "\n");
const YENI_DK = fs.readFileSync(path.join(KOK, "js", "d_katman.js"), "utf8").replace(/\r\n/g, "\n");
const ESKI_APP = gitOku("js/app.js").replace(/\r\n/g, "\n"), ESKI_DK = gitOku("js/d_katman.js").replace(/\r\n/g, "\n");
if (/APPJS-TARIH-1010/.test(ESKI_APP)) olculemedi("--eski " + ESKI_REF + " zaten APPJS-TARIH'li — yamasız kol değil");
if (!/APPJS-TARIH-1010/.test(YENI_APP)) console.log("⚠️  çalışma ağacındaki app.js APPJS-TARIH'siz (yamasız ağaçta koşuyor: yeni yön düşmeli)");
// suzgec: iki kolda da ÇALIŞMA AĞACININKİ (A2) — bu sınav yalnız app.js'in farkını ölçer.
const SUZ_SRC = fs.readFileSync(path.join(KOK, "js", "suzgec.js"), "utf8");
// A2'siz ağaçta (ör. sinav_isirma A kolu = origin/main) ölçmeye DEVAM eder ama söyler: o zaman
// `_yaSahip`in sahip yarısı suzgec'in dizgi kıyasından gelir ve MÖ sorusu A2 yüzünden de düşer.
if (!/NEGATIF-YIL-1010-A2/.test(SUZ_SRC)) console.log("⚠️  js/suzgec.js A2'siz — bu iş A2'nin üstüne kurulur; _yaSahip MÖ sorusu A2'ye de bağlı");

// ---- kesici --------------------------------------------------------------------
function kes(src, bas, son, ad) {
  const i = src.indexOf(bas);
  if (i < 0) olculemedi(ad + ": kesim işareti yok " + JSON.stringify(bas));
  const j = src.indexOf(son, i + bas.length);
  if (j < 0) olculemedi(ad + ": kesim sonu yok " + JSON.stringify(son));
  return src.slice(i, j);
}
function rx(src, re, ad) { const m = re.exec(src); if (!m) olculemedi(ad + ": desen yok " + re); return m[1]; }

function belge() {
  function el() {
    return { className: "", textContent: "", title: "", children: [], style: {},
             appendChild(x) { this.children.push(x); return x; }, addEventListener() {} };
  }
  return { createElement: el, getElementById() { return null; }, querySelector() { return null; } };
}

function kol(APP, DK, ad) {
  const c = { console: { log() {}, warn() {}, error() {}, debug() {}, info() {} }, GUN: GUN };
  c.window = c;
  c.document = belge();
  c.haritaHazir = false; c.harita = null;
  c.devletAdi = function (id) { return "AD(" + id + ")"; };
  c._DEVLET_RENK = {}; c._KID_YABANCI_UST = {};
  vm.createContext(c);
  const m = { exports: {} }; const sc = { module: m, console: c.console, GUN: GUN };
  vm.runInNewContext(SUZ_SRC, sc, { filename: "suzgec.js" }); c.SUZGEC = m.exports;
  const parca = [
    kes(APP, "var AYLAR =", "// NEGATIF-YIL-1010-A — gün sayacı", ad),
    kes(APP, "function gunIdx(s)", "// \"gun\" metninden kesin", ad),
    kes(APP, "function isoDizgi(s)", "// ZAMAN-GENİŞ-1008 (sürüm 3)", ad),
    kes(APP, "function _yilYazi(", "\n", ad),
    kes(APP, "function _khGunStr(i)", "function _khKirpikPencere(", ad),
    kes(APP, "function _isyanTarihYazi(s, kes)", "// ---------- Bağlamsal lejant", ad),
    kes(APP, "function _yerlesimSerit(y)", "// Çubuğu çizer.", ad),
    kes(APP, "function _yaSahip(e, t)", "function yerAraBul(", ad),
    kes(APP, "function _tgKucuk(", "// `olaylar[]`", ad),
    kes(APP, "function kronoGun(t)", "function kronoTemsilEdiliyor(", ad),
    kes(APP, "var DERIN_OYNAT_MS", "function derinDugmeGuncelle(", ad),
    kes(DK, "function _dGunYazi(s)", "function _dPencereSatiri(", ad + " d_katman"),
  ];
  parca.forEach(function (p, k) {
    try { vm.runInContext(p, c, { filename: ad + "#" + k }); }
    catch (e) { olculemedi(ad + " parça " + k + " koşmadı: " + e.message); }
  });
  const serit = kes(APP, "function _yerlesimSerit(y)", "// Çubuğu çizer.", ad);
  c.__sahipYap = vm.runInContext("(function (y) {" + kes(serit, "  function sahip(gun) {", "  // Ardışık aralıkları", ad) +
                                 " return sahip; })", c);
  c.__donemler = vm.runInContext("(" + kes(APP, "function donemler(y) {", "    // 🆕 T-0126", ad) + ")", c);
  c.__ilkSon = vm.runInContext("(function (s) {" +
    rx(APP, /(var ilk = s\.don\.reduce[^\n]*\n\s*var son = s\.don\.reduce[^\n]*)/, ad) + " return [ilk, son]; })", c);
  c.__nkSira = vm.runInContext("(" + rx(APP, /nk\.sort\((function \(a, b\) \{[^\n]*?\})\);/, ad) + ")", c);
  c.__ixSira = vm.runInContext("(" + rx(APP, /ix\[id\]\.kronoloji\.sort\((function \(a, b\) \{[^\n]*?\})\);/, ad) + ")", c);
  c.__derinSira = vm.runInContext("(" + rx(APP, /derin\.concat\(ek\)\.sort\((function \(x, y\) \{[\s\S]*?\n\s*\})\) : derin;/, ad) + ")", c);
  return c;
}
const Y_ = kol(YENI_APP, YENI_DK, "yeni"), E_ = kol(ESKI_APP, ESKI_DK, "eski");
console.log("kök " + KOK + " · eski kol " + ESKI_REF + ":js/app.js + js/d_katman.js · suzgec iki kolda A2");

function ayr(c, s) { const r = c.tarihMetniAyristir(s); return r.hata ? "HATA" : GUN.dizgi(r.gi); }
function ayrGuvenli(c, s) { try { return ayr(c, s); } catch (e) { return "ATTI " + e.message; } }

// ---- A · tarihMetniAyristir ------------------------------------------------------
bolum("A", "A · tarihMetniAyristir — giriş → gün (astronomik: MÖ n = 1 − n)");
const TABLO = [
  ["1453", "1453-01-01"], ["1453-05-29", "1453-05-29"], ["29.05.1453", "1453-05-29"], ["29 Mayıs 1453", "1453-05-29"],
  ["mayis 1453", "1453-05-01"], ["50", "0050-01-01"], ["0050", "0050-01-01"], ["29.05.53", "0053-05-29"],
  ["MS 50", "0050-01-01"], ["M.S. 50", "0050-01-01"], ["1", "0001-01-01"],
  ["MÖ 50", "-0049-01-01"], ["M.Ö. 50", "-0049-01-01"], ["50 MÖ", "-0049-01-01"], ["mö 50", "-0049-01-01"],
  ["MÖ50", "-0049-01-01"], ["MO 50", "-0049-01-01"], ["15 Mart MÖ 44", "-0043-03-15"], ["15.03.44 MÖ", "-0043-03-15"],
  ["Mayıs MÖ 44", "-0043-05-01"], ["MÖ 44-03-15", "-0043-03-15"], ["1 Ocak MÖ 1", "0000-01-01"],
  ["31 Aralık MÖ 1", "0000-12-31"], ["29 Şubat MÖ 5", "-0004-02-29"], ["M.Ö. 3000", "-2999-01-01"],
  ["12000 MÖ", GUN.dizgi(GUN.gunSayisi(-11999, 1, 1))],
  ["-0049-03-15", "-0049-03-15"], ["-0049", "-0049-01-01"], ["-2999-01-01", "-2999-01-01"],
  ["-50", "HATA"], ["-5-03-01", "HATA"], ["0", "HATA"], ["MÖ 0", "HATA"], ["MÖ -50", "HATA"], ["MÖ MÖ 5", "HATA"],
  ["MÖ", "HATA"], ["30.02.1453", "HATA"], ["29 Şubat 1900", "HATA"], ["29 Şubat 2000", "2000-02-29"],
  ["29 Şubat MÖ 4", "HATA"], ["13.13.1453", "HATA"], ["", "HATA"], ["Marş 1453", "HATA"],
];
let eskiYanlisMo = 0;
TABLO.forEach(function (v) {
  const y = ayrGuvenli(Y_, v[0]), e = ayrGuvenli(E_, v[0]);
  soru("yeni " + JSON.stringify(v[0]) + " → " + v[1], y === v[1], y);
  console.log("      (eski kol: " + e + (e === v[1] ? "" : "  ← YAMASIZ FARK") + ")");
  if (/MÖ|M\.Ö|mö|MO|^-|^50$/.test(v[0]) && v[1] !== "HATA" && e !== v[1]) eskiYanlisMo++;
});
soru("YAMASIZ kolda kusur görünüyor: \"50\" → 1950 · \"MÖ 50\" girilemez", ayr(E_, "50") === "1950-01-01" && ayr(E_, "MÖ 50") === "HATA",
  ayr(E_, "50") + " · " + ayr(E_, "MÖ 50"));
console.log("      (eski kolun yanlış ya da reddettiği MÖ/kısa yıl girdisi: " + eskiYanlisMo + ")");
const hm = Y_.tarihMetniAyristir("-50").hata || "";
soru("\"-50\" hatası iki doğru yazımı gösteriyor (MÖ 50 · -0049)", /MÖ 50/.test(hm) && /-0049/.test(hm), hm);
soru("tariheGit durum satırı yılı _yilYazi ile basıyor (MÖ'de \"-49\" değil \"MÖ 50\")",
  /_durumYaz\("ℹ️ " \+ _yilYazi\(hedefGi\)/.test(YENI_APP));

// ---- B · MÖ sentetik ----------------------------------------------------------------
bolum("B", "B · MÖ sentetik — yeni doğru, eski yanlış");
const PERS = { ad: "Persepolis(sentetik)", lat: 29.9, lon: 52.9,
  s: [{ d: "ahameni", f: "-0549-01-01", t: "-0329-10-01" },
      { d: "makedonya", f: "-0329-10-01", t: "-0311-01-01" },
      { d: "selevkos", f: "-0311-01-01", t: "0001-01-01" }],
  v: [{ kid: "medya", k: "Medya", f: "-0600-01-01", t: "-0549-01-01" }],
  isg: [{ d: "iskit", f: "-0400-03-01", t: "-0399-03-01" }] };
function seritOzet(c, y) { return c._yerlesimSerit(y).taban.map(function (p) { return p.f + ">" + p.ad; }).join(" | "); }
const BEK_SERIT = "-0600-01-01>Osmanlı | -0549-01-01>AD(ahameni) | -0329-10-01>AD(makedonya) | -0311-01-01>AD(selevkos)";
const sY = seritOzet(Y_, PERS), sE = seritOzet(E_, PERS);
soru("_yerlesimSerit MÖ: dört dilim, artan sıra, doğru sahip", sY === BEK_SERIT, sY);
soru("  eski kol FARKLI (dizgi sırası ters / sahip yanlış)", sE !== BEK_SERIT, sE);
console.log("      (eski: " + sE + ")");
[["-0400-06-15", "AD(ahameni)"], ["-0329-10-01", "AD(makedonya)"], ["-0329-09-30", "AD(ahameni)"], ["-0580-01-01", "Osmanlı"],
 ["0000-12-31", "AD(selevkos)"], ["0001-01-01", null]].forEach(function (v) {
  const r = Y_.__sahipYap(PERS)(v[0]), re = E_.__sahipYap(PERS)(v[0]);
  soru("sahip(PERS, " + v[0] + ") = " + v[1], (r ? r.ad : null) === v[1], JSON.stringify(r));
  console.log("      (eski: " + (re ? re.ad : null) + ")");
});
// isyanMaddeKutusu
const ITm = { maddeler: [{ t: "-0495-01-01", b: "İsyan" }],
  pencereler: [{ kimlik: "eflak", tur: "isyan", f: "-0500-01-01", t: "-0490-01-01", kaynak: [] },
               { kimlik: "bogdan", tur: "isyan", f: "-0480-01-01", t: "-0470-01-01", kaynak: [] }] };
function isyanSat(c, gs) {
  c.window.ISYAN_TARAMA = ITm;
  const kap = c.document.createElement("div");
  c.isyanMaddeKutusu({ t: "-0495-01-01", b: "İsyan x", gi: GUN.gun(gs) }, kap);
  return kap.children.length ? kap.children[0].children.slice(1, 3).map(function (x) { return x.textContent; }) : [];
}
const iY = isyanSat(Y_, "-0495-01-01"), iE = isyanSat(E_, "-0495-01-01");
soru("isyanMaddeKutusu MÖ: 1. pencere ▣ bu gün taralı · 2. pencere henüz başlamadı",
  /^▣ .*bu gün taralı/.test(iY[0] || "") && /henüz başlamadı/.test(iY[1] || ""), JSON.stringify(iY));
soru("  isyan satırında MÖ tarih yazısı (1 Ocak MÖ 501 → 1 Ocak MÖ 491)", /1 Ocak MÖ 501 → 1 Ocak MÖ 491/.test(iY[0] || ""), iY[0]);
console.log("      (eski: " + JSON.stringify(iE) + ")");
soru("  eski kol FARKLI", JSON.stringify(iE) !== JSON.stringify(iY));
// _yaSahip
const eYer = { tip: "yer", m: { s: { _orij: PERS } } };
const yaY = Y_._yaSahip(eYer, GUN.gun("-0400-12-01")), yaE = E_._yaSahip(eYer, GUN.gun("-0400-12-01"));
soru("_yaSahip MÖ -0400-12-01 = ahameni · işgal: iskit", yaY === "AD(ahameni) · işgal: AD(iskit)", yaY);
console.log("      (eski: " + JSON.stringify(yaE) + ")");
soru("  eski kol işgali kaçırıyor", yaE.indexOf("işgal") < 0, yaE);
// dizin ilk/son + dönem listesi
const don = PERS.s.concat(PERS.v);
const isY = Y_.__ilkSon({ don: don }), isE = E_.__ilkSon({ don: don });
soru("dizin ilk = -0600-01-01 · son = 0001-01-01", isY[0].f === "-0600-01-01" && isY[1].t === "0001-01-01", isY[0].f + " → " + isY[1].t);
console.log("      (eski: " + isE[0].f + " → " + isE[1].t + ")");
const dY = Y_.__donemler(PERS).map(function (p) { return p.f; }).join(" "), dE = E_.__donemler(PERS).map(function (p) { return p.f; }).join(" ");
soru("yer kartı dönem listesi artan", dY === "-0600-01-01 -0549-01-01 -0400-03-01 -0329-10-01 -0311-01-01", dY);
console.log("      (eski: " + dE + ")");
// derinAdimlari
const dO = { b: "Gaugamela(sentetik)", alt_kronoloji: [
  { t: "-0330-10-01", b: "savaş", kaynak: "x" }, { t: "-0333-11-05", b: "İssos", kaynak: "x" },
  { t: "0050-03-01", b: "MS", kaynak: "x" }, { t: "1453-02-30", b: "geçersiz", kaynak: "x" }, { t: "-0330", b: "yıl", kaynak: "x" }] };
const daY = Y_.derinAdimlari(dO), daE = E_.derinAdimlari(dO);
const daYs = daY.adimlar.map(function (a) { return a.t; }).join(" ");
soru("derinAdimlari: MÖ adımlar KABUL + sayısal sıra · geçersiz gün ve yıl ELENİR (2)",
  daYs === "-0333-11-05 -0330-10-01 0050-03-01" && daY.elenen === 2, daYs + " · elenen " + daY.elenen);
console.log("      (eski: " + daE.adimlar.map(function (a) { return a.t; }).join(" ") + " · elenen " + daE.elenen + ")");
soru("  eski kol MÖ adımı eliyor", daE.adimlar.every(function (a) { return a.t.charAt(0) !== "-"; }));
// sıralayıcılar
const KR = ["-0550-01-01", "-0330", "-0330-10-01", "-0329-01", "0001-01-01", "1453"].map(function (t) { return { t: t }; });
const BEK_KR = "-0550-01-01 -0330 -0330-10-01 -0329-01 0001-01-01 1453";
["__ixSira", "__derinSira", "__nkSira"].forEach(function (k) {
  const y = KR.slice().reverse().sort(Y_[k]).map(function (m) { return m.t; }).join(" ");
  const e = KR.slice().reverse().sort(E_[k]).map(function (m) { return m.t; }).join(" ");
  soru("sıralayıcı " + k + " MÖ artan", y === BEK_KR, y);
  console.log("      (eski: " + e + (e === BEK_KR ? "" : "  ← ters") + ")");
});
// gösterim
soru("_isyanTarihYazi(-0500-03-01) = 1 Mart MÖ 501", Y_._isyanTarihYazi("-0500-03-01") === "1 Mart MÖ 501", Y_._isyanTarihYazi("-0500-03-01"));
console.log("      (eski: " + JSON.stringify(E_._isyanTarihYazi("-0500-03-01")) + ")");
soru("_dGunYazi(-0329-10-01) = 1 Ekim MÖ 330", Y_._dGunYazi("-0329-10-01") === "1 Ekim MÖ 330", Y_._dGunYazi("-0329-10-01"));
console.log("      (eski: " + JSON.stringify(E_._dGunYazi("-0329-10-01")) + ")");
function dgG(c) { try { return c._dGunYazi("1453-02-30"); } catch (e) { return "ATTI " + e.message; } }
soru("_dGunYazi geçersiz gün ATMAZ, ham basar (1453-02-30)", dgG(Y_) === "1453-02-30", dgG(Y_));
console.log("      (eski: " + JSON.stringify(dgG(E_)) + " — A'dan beri gunIdx ATAR; eski desen geçersiz günü süzmüyordu)");
soru("tarihSira geçersiz tarihte ATAR (sessiz değil)", typeof Y_.tarihSira === "function" &&
  (function () { try { Y_.tarihSira("1453-13-01", "1453"); return false; } catch (e) { return true; } })());

// ---- C · tarihMetniAyristir pozitif alan -------------------------------------------------
bolum("C", "C · tarihMetniAyristir pozitif alan — eski == yeni (yıl ≥ 100, geçerli gün)");
const AYL = Y_.AYLAR;
let cAyni = 0, cFark = [], cBeyan = { kisaYil: 0, gecersizGun: 0 }, cToplam = 0;
for (let yil = 1; yil <= 9999; yil += (yil < 120 ? 1 : 7)) {
  [[1, 1], [2, 28], [2, 29], [2, 30], [5, 29], [12, 31], [4, 31]].forEach(function (ag) {
    const a = ag[0], g = ag[1];
    const gecerli = g <= GUN.ayUzunlugu(yil, a);
    [String(yil), yil + "-" + ("0" + a).slice(-2) + "-" + ("0" + g).slice(-2), g + "." + a + "." + yil,
     g + " " + AYL[a - 1] + " " + yil, AYL[a - 1].toLowerCase() + " " + yil, yil + "-" + a].forEach(function (s) {
      cToplam++;
      const y = ayrGuvenli(Y_, s), e = ayrGuvenli(E_, s);
      if (y === e) { cAyni++; return; }
      if (yil < 100) { cBeyan.kisaYil++; return; }                 // beyanlı: "50" artık MS 50 (eskiden 1950)
      if (!gecerli && y === "HATA") { cBeyan.gecersizGun++; return; } // beyanlı: 30 Şubat artık hata
      cFark.push(s + " eski " + e + " yeni " + y);
    });
  });
}
soru("pozitif alan " + cToplam + " giriş: beyansız fark 0 (aynı " + cAyni + " · beyanlı: yıl<100 " + cBeyan.kisaYil +
  " · geçersiz gün " + cBeyan.gecersizGun + ")", cFark.length === 0, cFark.slice(0, 5).join(" | "));

// ---- D · GERİLEME: gerçek veri -------------------------------------------------------
bolum("D", "D · GERİLEME YOK — gerçek veride eski == yeni");
const HTML = fs.readFileSync(path.join(KOK, "index.html"), "utf8").replace(/<!--[\s\S]*?-->/g, "");
const ctx = { console: { log() {}, warn() {}, error() {}, debug() {}, info() {} } };
ctx.window = ctx;
ctx.document = { getElementById() { return null; }, querySelector() { return null; }, querySelectorAll() { return []; },
  createElement() { return { style: {}, appendChild() {} }; }, addEventListener() {}, body: { appendChild() {} } };
ctx.localStorage = { getItem() { return null; }, setItem() {}, removeItem() {} };
vm.createContext(ctx);
let betik = 0; const yukHata = [];
for (const m of HTML.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
  const sm = m[1].match(/\bsrc="([^"?#]*)/), src = sm ? sm[1] : null;
  if (src && !src.startsWith("data/")) continue;              // js/*: uygulama, veri değil
  try {
    if (!src) vm.runInContext(m[2], ctx);
    else { vm.runInContext(fs.readFileSync(path.join(KOK, src), "utf8"), ctx, { filename: src }); betik++; }
  } catch (e) { yukHata.push((src || "satır içi") + ": " + e.message.slice(0, 60)); }
}
const Y = ctx.YERLESIMLER || [];
console.log("  veri: " + betik + " betik · yükleme hatası " + yukHata.length + (yukHata.length ? " (" + yukHata.join(" | ").slice(0, 200) + ")" : "") +
  " · YERLESIMLER " + Y.length);
if (Y.length < 1000) olculemedi("YERLESIMLER " + Y.length + " — birleştirme betiği koşmadı");
const KUR = [];
const UCLAR = new Set();
Y.forEach(function (y) { ["d", "v", "s", "isg"].forEach(function (a) { (y[a] || []).forEach(function (p) { UCLAR.add(p.f); UCLAR.add(p.t); }); }); });
let moUc = 0; UCLAR.forEach(function (u) { if (String(u).charAt(0) === "-") moUc++; });
console.log("  dönem ucu (ayrık) " + UCLAR.size + " · MÖ uç " + moUc);
// D1 _yerlesimSerit — bütün yerleşimler
let d1 = 0, d1f = [];
Y.forEach(function (y) { const a = JSON.stringify(Y_._yerlesimSerit(y)), b = JSON.stringify(E_._yerlesimSerit(y)); if (a === b) d1++; else d1f.push(y.ad); });
soru("_yerlesimSerit " + Y.length + " yerleşim: fark 0", d1f.length === 0, d1f.slice(0, 5).join(", "));
// D2 sahip + _yaSahip — (yerleşim, gün) çiftleri: kendi uçları ±1 + 51 küresel gün
const KURESEL = [];
for (let yil = 1000; yil <= 1945; yil += 19) KURESEL.push(GUN.gun(yil + "-06-15"));
let ciftS = 0, farkS = [], ciftY = 0, farkY = [];
Y.forEach(function (y) {
  const gunler = new Set(KURESEL);
  ["d", "v", "s", "isg"].forEach(function (a) { (y[a] || []).forEach(function (p) {
    [GUN.gun(p.f), GUN.gun(p.t)].forEach(function (g) { gunler.add(g - 1); gunler.add(g); gunler.add(g + 1); });
  }); });
  const sy = Y_.__sahipYap(y), se = E_.__sahipYap(y), e = { tip: "yer", m: { s: { _orij: y } } };
  gunler.forEach(function (g) {
    const gs = GUN.dizgi(g);
    ciftS++;
    const a = JSON.stringify(sy(gs)), b = JSON.stringify(se(gs));
    if (a !== b) farkS.push(y.ad + "@" + gs);
    if (y.isg && y.isg.length) {
      ciftY++;
      if (Y_._yaSahip(e, g) !== E_._yaSahip(e, g)) farkY.push(y.ad + "@" + gs);
    }
  });
});
soru("sahip(): " + ciftS + " (yerleşim, gün) çifti fark 0", farkS.length === 0, farkS.slice(0, 5).join(", "));
soru("_yaSahip: " + ciftY + " işgalli (yerleşim, gün) çifti fark 0", farkY.length === 0, farkY.slice(0, 5).join(", "));
// D3 dizin ilk/son + dönem listesi
let d3 = 0, d3f = [];
Y.forEach(function (y) {
  const don = (y.d || []).concat(y.v || []);
  if (don.length) {
    const a = Y_.__ilkSon({ don: don }), b = E_.__ilkSon({ don: don });
    if (a[0] !== b[0] || a[1] !== b[1]) d3f.push("ilkson " + y.ad);
  }
  if (JSON.stringify(Y_.__donemler(y)) !== JSON.stringify(E_.__donemler(y))) d3f.push("donemler " + y.ad);
  d3++;
});
soru("dizin ilk/son + yer kartı dönem listesi " + d3 + " yerleşim: fark 0 (aynı NESNE seçiliyor)", d3f.length === 0, d3f.slice(0, 5).join(", "));
// D4 kronoloji sıraları
const DEV = ctx.DEVLETLER || [];
const kListe = [];
DEV.forEach(function (d) { if (d && d.kronoloji && d.kronoloji.length > 1) kListe.push(d.kronoloji); });
Object.keys(ctx).filter(function (k) { return /^KRONOLOJI_/.test(k) && Array.isArray(ctx[k]); }).forEach(function (k) { kListe.push(ctx[k]); });
const OL = []; Object.keys(ctx).filter(function (k) { return /^OLAYLAR/.test(k) && Array.isArray(ctx[k]); }).forEach(function (k) { ctx[k].forEach(function (o) { OL.push(o); }); });
kListe.push(OL.filter(function (o) { return o && typeof o.t === "string"; }));
let kMadde = 0, kFark = [];
kListe.forEach(function (L, i) {
  kMadde += L.length;
  ["__ixSira", "__derinSira", "__nkSira"].forEach(function (k) {
    // ters + karışık başlangıç sırası: sıralayıcı farkı stabil sıralamaya saklanamasın
    [L.slice(), L.slice().reverse()].forEach(function (B, j) {
      const a = B.slice().sort(Y_[k]), b = B.slice().sort(E_[k]);
      for (let n = 0; n < a.length; n++) if (a[n] !== b[n]) { kFark.push(k + " liste " + i + "/" + j + " @" + n + " " + a[n].t + " ≠ " + b[n].t); break; }
    });
  });
});
soru("kronoloji sıralayıcıları (3 site) " + kListe.length + " liste · " + kMadde + " madde × 2 başlangıç sırası: fark 0", kFark.length === 0, kFark.slice(0, 4).join(" | "));
// D5 isyanMaddeKutusu — gerçek ISYAN_TARAMA, pencere uçları ±1 + bağlı maddelerin günleri
const IT = ctx.ISYAN_TARAMA;
let d5 = 0, d5f = [];
if (IT && IT.pencereler && IT.maddeler) {
  const gun5 = new Set();
  IT.pencereler.forEach(function (p) { [GUN.gun(p.f), GUN.gun(p.t)].forEach(function (g) { gun5.add(g - 1); gun5.add(g); gun5.add(g + 1); }); });
  IT.maddeler.forEach(function (m) { gun5.add(GUN.gun(m.t)); });
  for (let yil = 1500; yil <= 1800; yil += 3) gun5.add(GUN.gun(yil + "-03-01"));
  [Y_, E_].forEach(function (c) { c.window.ISYAN_TARAMA = IT; });
  const mad = IT.maddeler[0];
  gun5.forEach(function (g) {
    const o = { t: mad.t, b: mad.b + " x", gi: g };
    const ka = Y_.document.createElement("div"), kb = E_.document.createElement("div");
    Y_.isyanMaddeKutusu(o, ka); E_.isyanMaddeKutusu(o, kb);
    d5++;
    if (JSON.stringify(ka) !== JSON.stringify(kb)) d5f.push(GUN.dizgi(g));
  });
  soru("isyanMaddeKutusu " + IT.pencereler.length + " pencere × " + d5 + " gün: metin fark 0", d5f.length === 0, d5f.slice(0, 5).join(", "));
} else soru("ISYAN_TARAMA yüklendi", false, "yok");
// D6 derinAdimlari — gerçek alt_kronoloji
let d6 = 0, d6f = [];
OL.forEach(function (o) { if (o && o.alt_kronoloji) { d6++; if (JSON.stringify(Y_.derinAdimlari(o)) !== JSON.stringify(E_.derinAdimlari(o))) d6f.push(o.b); } });
soru("derinAdimlari " + d6 + " madde (alt_kronoloji): fark 0", d6f.length === 0, d6f.slice(0, 3).join(", "));
// D7 _isyanTarihYazi + _dGunYazi — gerçek tarih dizgileri
const DIZ = new Set(UCLAR);
kListe.forEach(function (L) { L.forEach(function (m) { if (m && m.t != null) DIZ.add(String(m.t)); }); });
let d7f = [];
DIZ.forEach(function (s) {
  if (Y_._dGunYazi(s) !== E_._dGunYazi(s)) d7f.push("dGun " + s);
  ["yil", "ay", "gun"].forEach(function (k) { if (Y_._isyanTarihYazi(s, k) !== E_._isyanTarihYazi(s, k)) d7f.push("isyanYazi " + k + " " + s); });
});
soru("_dGunYazi + _isyanTarihYazi " + DIZ.size + " gerçek tarih dizgisi: fark 0", d7f.length === 0, d7f.slice(0, 5).join(", "));

console.log("\nSONUÇ: " + gecen + "/" + (gecen + kalan) + " geçti · " + kalan + " tutmadı");
// tekrar listesi ÖZETTEN SONRA (sinav_isirma özette okumayı durdurur, ikinci kez saymaz)
kotu.forEach(function (k) { console.log("  - " + k); });
process.exit(kalan ? 1 : 0);

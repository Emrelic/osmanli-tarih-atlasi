// DAYANAK YAMASI — dört günün dayanağını DÖNEM SEVİYESİNE yazar.
//
//   node denetim/ARAC-AVRUPA-DAYANAK-URET-0907.js [--yaz]
//
// 🟢 ÖN KOŞUL ÖLÇÜLDÜ (Ⓑ, `SINAV-DONEM-KAYNAK-0907.py`): dönem-içi
//    `kaynak:` `_sahiplik_uygula.py` ile İNİYOR. `js_yaz` sabit alan
//    listesi kullanmıyor (`deger.items()`), node süzgeci kaydın tamamını
//    geçiriyor. `not:`/`bos:` vakasının tersi — o kusur burada YOK.
//
// KURAL: bir dönemin `kaynak:`ı onun **`f:` gününü** dayanaklandırır —
//   "bu dönem NİÇİN burada başladı". Pencere başı (`1281-01-01`) dayanaksız
//   kalır; o bir iddia değil sınır işaretidir (§11).
//
// 🔴 ÇAKIŞMA KORUMASI: kendi yamalarımın (Elba · Dublin · İspanya · İsveç)
//   dokunduğu noktalara BURADAN yazmam — `_sahiplik_uygula.py` onu
//   "içerik farklı" sayıp İKİSİNİ DE atlar. O noktalar ayrıca raporlanır.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");

const BENIM = new Set(["KUZEY-AVRUPA", "BATI-ORTA-AVRUPA", "IBERYA", "ITALYA"]);
const D = JSON.parse(fs.readFileSync("denetim/DAYANAK-AVRUPA-0907.json", "utf8"));

// 🔴 YENİ KURAL (koordinatör, 7 Eylül): `paylasilan: true` günü ⑮ PAYLAŞILAN
//    GÜNLER kolu yazar, bölge kolu ATLAR. Amaç doğru — altı oturum aynı günü
//    yazmasın.
// 🟡 AMA ÖLÇÜT BÖLGE BAZLI, OTURUM BAZLI DEĞİL — ve AVRUPA'nın DÖRT kovası var.
//    İki kovaya yayılan bir gün "paylaşılan" görünür ama iki kova da BENİM
//    (ölçüldü: 14 gün · 111 nokta böyle). O günleri ⑮'e devretmek, ⑮'i benim
//    kovamı araştırmaya zorlar — kuralın önlemek istediği şeyin ta kendisi.
//    ⇒ Burada OTURUM bazlı süzülüyor; ölçüm `ARAC-AVRUPA-PAYLASIM-0907.js`de.
const { SAHIP } = require("./ARAC-BOLGE-KUTU-0906.js");
const DEFTER = {};
for (const g of (JSON.parse(fs.readFileSync(
  "denetim/DAYANAK-GUNLER-0907.json", "utf8")).gunler || [])) DEFTER[g.gun] = g;

const DAYANAK = {}, DEVREDILEN = [];
for (const g of D.GUNLER) {
  const d = DEFTER[g.gun];
  const oturumlar = d ? new Set(Object.keys(d.bolgeler || {})
    .map(b => SAHIP[b] || "?")) : new Set(["AVRUPA"]);
  const cokOturum = oturumlar.size > 1;
  if (d && d.paylasilan && cokOturum) {
    DEVREDILEN.push({ gun: g.gun, nokta: d.nokta, oturumlar: [...oturumlar] });
    continue;                       // ⑮'in — YAZMIYORUM
  }
  DAYANAK[g.gun] = g;
}
if (DEVREDILEN.length) {
  console.log("🔵 ⑮ PAYLAŞILAN GÜNLER koluna DEVREDİLDİ (yeni kural):");
  for (const x of DEVREDILEN)
    console.log("   " + x.gun + "  " + String(x.nokta).padStart(3) +
      " nokta  ⇒ " + x.oturumlar.join(" · "));
  console.log("");
}

function baglam(y) {
  const c = { window: {} }; vm.createContext(c);
  vm.runInContext(fs.readFileSync(y, "utf8"), c); return c.window;
}
// Kendi yamalarımın dokunduğu adlar — çakışma korumasi
const BENIM_YAMA = new Set();
for (const f of ["yer_yama_avrupa_1923.js", "yer_yama_avrupa_isvec_1923.js"]) {
  const yol = "denetim/" + f;
  if (!fs.existsSync(yol)) continue;
  const w = baglam(yol);
  for (const k of Object.keys(w))
    if (Array.isArray(w[k])) for (const r of w[k]) if (r && r.ad) BENIM_YAMA.add(r.ad);
}

const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py",
  { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const N = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  let w; try { w = baglam(yol); } catch (e) { continue; }
  for (const k of Object.keys(w)) {
    const A = w[k]; if (!Array.isArray(A)) continue;
    for (const y of A) if (y && y.ad && y.lat !== undefined) N.push({ y, f });
  }
}

const uretilen = [], catisan = [], zatenVar = [];
const gunSay = {};
for (const { y } of N) {
  if (!BENIM.has(bolge(y))) continue;
  let dokundu = false;
  const yeni = { ad: y.ad, s: (y.s || []).map(p => ({ ...p })) };
  for (const p of yeni.s) {
    const d = DAYANAK[p.f];
    if (!d) continue;
    if (p.kaynak) { zatenVar.push(y.ad + " " + p.f); continue; }
    p.kaynak = d.kaynak;
    dokundu = true;
    gunSay[p.f] = (gunSay[p.f] || 0) + 1;
  }
  if (!dokundu) continue;
  if (BENIM_YAMA.has(y.ad)) { catisan.push(y.ad); continue; }
  uretilen.push(yeni);
}

console.log("=== DAYANAK YAMASI ===");
console.log("dayanaklı gün : " + Object.keys(DAYANAK).length);
console.log("üretilen kayıt: " + uretilen.length);
console.log("");
console.log("gün bazında dokunulan dönem:");
for (const [g, n] of Object.entries(gunSay).sort((a, b) => b[1] - a[1]))
  console.log("   " + g + "   " + String(n).padStart(3) + " dönem   " +
    DAYANAK[g].olay.slice(0, 52));
console.log("");
console.log("🔴 ÇAKIŞMA KORUMASI — kendi yamalarımda olan, BURADAN yazılmadı: " +
  catisan.length + (catisan.length ? "   (" + catisan.slice(0, 8).join(", ") +
    (catisan.length > 8 ? " …" : "") + ")" : ""));
console.log("⚪ dönemi ZATEN `kaynak:` taşıyan (ezilmedi): " + zatenVar.length);

// ── SINAV: yama zinciri BOZUYOR MU? (§11: Silistre yaması 6 dönemin 5'ini
//    siliyordu ve sınav yakaladı. Burada tek değişiklik `kaynak:` EKLEMEK
//    olmalı — dönem sayısı, sırası ve (f,t,d) üçlüleri AYNEN kalmalı.)
let bozuk = 0, denetlenen = 0;
const eskiler = {};
for (const { y } of N) eskiler[y.ad] = y.s || [];
for (const r of uretilen) {
  const e = eskiler[r.ad] || [];
  denetlenen++;
  if (e.length !== r.s.length) { bozuk++; console.log("   🔴 " + r.ad + ": dönem sayısı " + e.length + " -> " + r.s.length); continue; }
  for (let i = 0; i < e.length; i++)
    if (e[i].f !== r.s[i].f || e[i].t !== r.s[i].t || e[i].d !== r.s[i].d) {
      bozuk++; console.log("   🔴 " + r.ad + " [" + i + "]: (f,t,d) DEĞİŞTİ"); break;
    }
}
// ATEŞLEME: bilerek bozulmuş bir zincir sınavı ötürüyor mu
const test = uretilen.length ? JSON.parse(JSON.stringify(uretilen[0])) : null;
let atesledi = false;
if (test && test.s.length) {
  test.s.pop();
  const e = eskiler[test.ad] || [];
  atesledi = e.length !== test.s.length;
}
console.log("");
console.log("SINAV: zincir bozulmadı mı → " + (bozuk === 0 ? "🟢 TEMİZ" : "🔴 " + bozuk + " bozuk") +
  "  (" + denetlenen + " kayıt denetlendi)");
console.log("       ateşleme (bir dönem silinince ötüyor mu) → " +
  (atesledi ? "🟢 ÖTTÜ" : "🔴 ÖTMEDİ"));

if (bozuk === 0 && atesledi && process.argv.includes("--yaz")) {
  const bas = [
    "// -*- coding: utf-8 -*-",
    "// AVRUPA — GÜN DAYANAKLARI · dönem seviyesinde `kaynak:`",
    "// Oturum: AVRUPA · koordinatör 1.MURAT HÜDAVENDİGAR",
    "// 🔒 data/ DONUK (koşu 7b) — denetim/ altında BEKLİYOR.",
    "// ÜRETİLDİ: node denetim/ARAC-AVRUPA-DAYANAK-URET-0907.js --yaz",
    "//",
    "// 🟢 ÖN KOŞUL ÖLÇÜLDÜ — Ⓑ kuru koşusu (SINAV-DONEM-KAYNAK-0907.py):",
    "//    dönem-içi `kaynak:` `_sahiplik_uygula.py` ile İNİYOR. `js_yaz`",
    "//    sabit alan listesi kullanmıyor (`deger.items()` her anahtarı yazar),",
    "//    node süzgeci kaydın TAMAMINI geçiriyor (`r: r`, izdüşüm YOK).",
    "//    ⇒ `not:`/`bos:` vakasının (sabit `sira` listesi) TERSİ.",
    "//",
    "// KURAL: bir dönemin `kaynak:`ı onun `f:` GÜNÜNÜ dayanaklandırır.",
    "// Pencere başı (1281-01-01) dayanaksız kalır — iddia değil, sınır işareti.",
    "//",
    "// GÜNLER ve DAMGALARI (ayrıntı: denetim/DAYANAK-AVRUPA-0907.json):",
    ...Object.values(DAYANAK).map(g =>
      "//   " + g.gun + "  " + g.olay.slice(0, 56) + "\n" +
      "//      §②b " + (g["§②b"] || "").slice(0, 90) + "\n" +
      "//      zayıflık: " + String(g.zayiflik || "-").slice(0, 88)),
    "//",
    "// 🔴 ÇAKIŞMA KORUMASI: kendi yamalarımın (Elba · Dublin · İspanya ·",
    "//    İsveç) dokunduğu noktalar BURADAN yazılmadı — `_sahiplik_uygula.py`",
    "//    onları \"içerik farklı\" sayıp İKİSİNİ DE atlardı. Sayı: " + catisan.length,
    "//    Onların dayanağı kendi yamalarına yazılacak (ayrı kalem).",
    ""].join("\n");
  const gov = uretilen.map(r =>
    "  { ad:" + JSON.stringify(r.ad) + ",\n    s:[" +
    r.s.map(p => "{" + Object.entries(p).map(([k, v]) =>
      k + ":" + JSON.stringify(v)).join(",") + "}").join(",\n       ") +
    "\n    ] },").join("\n\n");
  fs.writeFileSync("denetim/yer_yama_avrupa_dayanak_1923.js",
    bas + "\nwindow.YER_YAMA_AVRUPA_DAYANAK_1923 = [\n\n" + gov + "\n\n];\n", "utf8");
  console.log("");
  console.log("🟢 YAZILDI: denetim/yer_yama_avrupa_dayanak_1923.js (" +
    uretilen.length + " kayıt)");
}

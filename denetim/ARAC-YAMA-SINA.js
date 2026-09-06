// GENEL YAMA KABUL SINAVI — herhangi bir `yer_yama_*.js` için.
//
// 🔴 NİÇİN GENEL: ilk sınavım tek yamaya gömülüydü. İkinci yamayı
//   sınamak için kopyalasaydım iki alet doğar ve AYRIŞIRLAR (§11:
//   "bir bilgi iki yerde duruyorsa, biri güncellenince öteki bayatlar").
//
// SINADIKLARI
//   ① dosya node ile yükleniyor · küresel ad BENZERSİZ (§7: ayrı dosya
//      ayrı ad alanı DEĞİLDİR — KADEME_YAMA'da 5 dosya tek ad kullandı
//      ve tek bağlamda okunsa 400 kayıt sessizce yok olurdu)
//   ② uygulayıcının SÜZGECİNDEN geçiyor mu (`r.ad` şartı — `_kademe_uygula`
//      vakasında 38/38 kayıt `yerlesim` taşıdığı için ELENMİŞTİ)
//   ③ hedef CANLI veride var mı ve TEK mi
//   ④ dönem kaybı · süreksizlik · ters dönem · uçların korunması
//      (YONTEM §⑥ Silistre: uygulayıcı `s:` dizisinin TAMAMINI değiştirir)
//   ⑤ HAYALET: her dönem künyesinin ömrü içinde mi
//      🔴 üç haneli yıl tuzağı: dizgi karşılaştırması "1600" < "987" der;
//         demet karşılaştırması kullanılıyor
//   ⑥ RENK: her kimlik `renkler.py` BOYALAR'da mı (§8: yoksa BOYANMAZ)
//
// kullanım: node denetim/ARAC-YAMA-SINA.js <yama.js> [ek-kunye.json ...]
//   ek-kunye.json: İNMEMİŞ künye düzeltmesi — {"ONERI":{id,alan,yeni}}
//   biçiminde; ⑤ sınavı onu İNMİŞ sayar (iki dosya BİRLİKTE iner).
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");

const YAMA = process.argv[2];
if (!YAMA) { console.log("kullanim: node denetim/ARAC-YAMA-SINA.js <yama.js> [oneri.json]"); process.exit(2); }
let kusur = 0;
const de = (k, ok, ek) => {
  console.log((ok ? "🟢 " : "🔴 ") + k + (ek ? "   " + ek : ""));
  if (!ok) kusur++;
};
console.log("SINAV: " + YAMA + "\n");

// ---- ① ----
global.window = {};
eval(fs.readFileSync(YAMA, "utf8"));
const adlar = Object.keys(global.window);
de("dosya yükleniyor · TEK küresel ad", adlar.length === 1, adlar.join(","));
const Yama = global.window[adlar[0]];
de("ad alanı dosya adıyla uyumlu (§7)",
  adlar[0].toLowerCase().replace(/_/g, "") ===
  path.basename(YAMA, ".js").toLowerCase().replace(/_/g, ""),
  adlar[0] + "  ⇔  " + path.basename(YAMA));
de("kayıt var", Array.isArray(Yama) && Yama.length > 0, String(Yama.length) + " kayıt");

// ---- ② ----
de("her kayıtta `ad` (uygulayıcı süzgeç şartı)",
  Yama.every(r => typeof r.ad === "string" && r.ad));
de("her kayıtta dolu `s` dizisi", Yama.every(r => Array.isArray(r.s) && r.s.length));
de("dönem alanları tam (f/t/d)", Yama.every(r => r.s.every(p => p.f && p.t && p.d)));

// ---- CANLI veri ----
const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const canli = [];
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) canli.push([y, f]);
}

// ---- ③ ④ ----
for (const r of Yama) {
  const e = canli.filter(([y]) => y.ad === r.ad);
  de("hedef tek ve mevcut: " + r.ad, e.length === 1,
    e.length ? e.map(x => x[1]).join(" + ") : "BULUNAMADI");
  if (e.length !== 1) continue;
  const y = e[0][0];
  const kayip = y.s.filter(a => !r.s.some(b => b.d === a.d && b.f === a.f));
  const kimlikKayip = kayip.filter(a => !r.s.some(b => b.f <= a.f && a.f < b.t));
  de("  dönem kapsaması korundu", kimlikKayip.length === 0,
    kimlikKayip.map(a => a.d + " " + a.f).join(" · "));
  de("  zincir sürekli", r.s.slice(1).every((p, i) => r.s[i].t === p.f));
  de("  ters/sıfır dönem yok", r.s.every(p => p.f < p.t));
  de("  uçlar korundu",
    y.s[0].f === r.s[0].f && y.s[y.s.length - 1].t === r.s[r.s.length - 1].t,
    y.s[0].f + ".." + y.s[y.s.length - 1].t);
}

// ---- ⑤ ----
global.window = {};
eval(fs.readFileSync("data/devletler.js", "utf8"));
const OMUR = {};
for (const d of Object.keys(global.window).filter(k => Array.isArray(global.window[k]))
  .flatMap(k => global.window[k])) if (d && d.id) OMUR[d.id] = [d.f, d.t];
for (const j of process.argv.slice(3)) {
  const o = JSON.parse(fs.readFileSync(j, "utf8")).ONERI;
  if (o && OMUR[o.id]) {
    OMUR[o.id] = o.alan === "t" ? [OMUR[o.id][0], o.yeni] : [o.yeni, OMUR[o.id][1]];
    console.log("   (öneri İNMİŞ sayıldı: " + o.id + " " + o.alan + ": " + o.yeni + " — " + j + ")");
  }
}
const g = s => s.split("-").map(Number);
const kEsit = (a, b) => { const [p, q] = [g(a), g(b)];
  for (let i = 0; i < 3; i++) if (p[i] !== q[i]) return p[i] < q[i]; return true; };
const kimlikler = new Set();
for (const r of Yama) for (const p of r.s) {
  kimlikler.add(p.d);
  const o = OMUR[p.d];
  if (!o) { de("künye VAR: " + p.d, false, "(" + r.ad + ")"); continue; }
  de("künye içinde: " + r.ad + " · " + p.d,
    kEsit(o[0], p.f) && kEsit(p.t, o[1]),
    p.f + ".." + p.t + "  künye " + o[0] + ".." + o[1]);
}

// ---- ⑥ RENK ----
// 🔴 `renkler.py` koşu sırasında DONUK ama OKUMAK yazmak değildir.
//    §8: BOYALAR'da olmayan kimlik BOYANMAZ ⇒ harita deliği.
//    §11: renk `harita:` ANAHTARINA bakar, `id`ye DEĞİL — dolaylama şart.
try {
  // 🔴 `renkler.py` İÇE AKTARILIRKEN EKRANA YAZIYOR ve o satır JSON'a
  //   karışıyor. İlk sürümüm bunu "⚪ ölçülemedi" diye raporladı — oysa
  //   bozuk olan alet değil BENİM OKUMAM (§11 · C13 ④: aletin cevabını
  //   DOĞRU YERDEN okuduğunu göster). Çare: içe aktarma gürültüsünü
  //   ayrı bir tampona al, JSON'u YALNIZ gerçek stdout'a bas.
  const py = "import sys,json,io,contextlib;sys.path.insert(0,'arac');"
    + "buf=io.StringIO()\n"
    + "with contextlib.redirect_stdout(buf): import renkler as R\n"
    + "sys.stdout.write(json.dumps(sorted(R.BOYALAR.keys())))";
  const B = new Set(JSON.parse(execFileSync("py", ["-c", py], { encoding: "utf8" })));
  global.window = {};
  eval(fs.readFileSync("data/devletler.js", "utf8"));
  const HAR = {};
  for (const d of Object.keys(global.window).filter(k => Array.isArray(global.window[k]))
    .flatMap(k => global.window[k])) if (d && d.id) HAR[d.id] = d.harita || d.id;
  for (const id of [...kimlikler].sort())
    de("renk VAR: " + id, B.has(HAR[id] || id),
      "boya anahtarı: " + (HAR[id] || id));
} catch (e) {
  console.log("⚪ RENK ÖLÇÜLEMEDİ — " + String(e.message).slice(0, 90));
  console.log("   (bir HTTP kodu gibi: ölçülemedi ≠ temiz. Kalem AÇIK.)");
}

console.log("\n" + (kusur ? "🔴 " + kusur + " KUSUR" : "🟢 SINAV TEMİZ — kusur 0"));
process.exit(kusur ? 1 : 0);

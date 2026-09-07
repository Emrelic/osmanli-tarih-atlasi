// ARAC-FETRET-MANDA-0907 — 28 cakismanin GERCEK sorusunu olcer.
//
// NICIN: HUKUM-CAKISMA-MANDA-FETRET-0907.md "FETRET'in baslangic gunleri
// kaynaga sorulmadan devralinamaz" dedi ve `olcmedim` damgasi vurdu.
// Damgayi kaldirmak icin uc sey olculur:
//   (1) FETRET dosyasinin `kaynak:` alani 1917-03-11'i BEYAN EDIYOR MU?
//       -> grep ile olculdu: dosyada TEK kaynak metni var, tamami
//          ilhanli/celayirli (1335-1340) hakkinda. "1917" 0 kez geciyor.
//       => FETRET o gunu IDDIA ETMIYOR, TASIYOR.
//   (2) CANLI veri (yerlesimler.js) o gunu zaten tasiyor mu?
//   (3) MANDA o gunu DEGISTIRIYOR mu, yoksa o da mi tasiyor?
//
// SESSIZ SIFIR KORUMASI: her dosya icin kayit sayisi kontrol edilir,
// 0 cikarsa THROW. (CLAUDE.md §11 — "0, 'yok' ile 'bakmadim' arasinda
// ayrim yapmaz".)
const fs = require("fs"), vm = require("vm"), path = require("path");
const KOK = path.dirname(__dirname);

function yukle(rel) {
  const p = path.join(KOK, rel);
  if (!fs.existsSync(p)) throw new Error("DOSYA YOK: " + rel);
  const ctx = { window: {}, console: { log() {} } };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(p, "utf8"), ctx);
  const anahtarlar = Object.keys(ctx.window);
  if (!anahtarlar.length) throw new Error("BOS AD ALANI: " + rel);
  let en = null;
  for (const a of anahtarlar) {
    const v = ctx.window[a];
    if (Array.isArray(v) && (!en || v.length > en.length)) en = v;
  }
  if (!en || !en.length) throw new Error("SIFIR KAYIT: " + rel);
  return en;
}

const CANLI = yukle("data/yerlesimler.js");
const MANDA = yukle("data/yer_yama_manda_0906.js");
const FETRET = yukle("data/yer_yama_ok109_fetret.js");
console.log("yuklendi: canli %d · manda %d · fetret %d",
  CANLI.length, MANDA.length, FETRET.length);

const ix = (A) => { const m = new Map(); for (const r of A) if (r && r.ad) m.set(r.ad, r); return m; };
const cM = ix(CANLI), mM = ix(MANDA), fM = ix(FETRET);

// ingiltere doneminin BASLANGIC gunu
function ingBas(r) {
  if (!r || !Array.isArray(r.s)) return null;
  const p = r.s.filter(x => x.d === "ingiltere").map(x => x.f).sort();
  return p.length ? p[0] : null;
}

const ortak = [...fM.keys()].filter(a => mM.has(a));
console.log("\nFETRET n MANDA ortak ad: %d", ortak.length);

const satir = [];
for (const ad of ortak) {
  satir.push({
    ad,
    canli: ingBas(cM.get(ad)),
    manda: ingBas(mM.get(ad)),
    fetret: ingBas(fM.get(ad)),
  });
}

const kova = new Map();
for (const s of satir) {
  const k = (s.canli || "-") + " | " + (s.manda || "-") + " | " + (s.fetret || "-");
  if (!kova.has(k)) kova.set(k, []);
  kova.get(k).push(s.ad);
}
console.log("\n%s", "=".repeat(72));
console.log("ingiltere doneminin BASLANGIC gunu — CANLI | MANDA | FETRET");
console.log("%s", "=".repeat(72));
const sirali = [...kova.entries()].sort((a, b) => b[1].length - a[1].length);
for (const [k, adlar] of sirali) {
  console.log("%s   x%d", k, adlar.length);
  console.log("    " + adlar.slice(0, 8).join(" · ") + (adlar.length > 8 ? " …" : ""));
}

// HUKUM MALZEMESI: kim CANLIDAN AYRILIYOR?
let mFark = 0, fFark = 0, ikisi = 0;
for (const s of satir) {
  const mf = s.manda && s.canli && s.manda !== s.canli;
  const ff = s.fetret && s.canli && s.fetret !== s.canli;
  if (mf) mFark++;
  if (ff) fFark++;
  if (mf && ff) ikisi++;
}
console.log("\n%s", "-".repeat(72));
console.log("CANLIDAN AYRILAN:  MANDA %d · FETRET %d · ikisi birden %d",
  mFark, fFark, ikisi);
console.log("=> Sifir olan taraf, o gunu DEGISTIRMIYOR: TASIYOR.");

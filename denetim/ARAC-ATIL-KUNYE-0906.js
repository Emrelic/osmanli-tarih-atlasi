// ATIL KUNYE TARAMASI — manda vakasi bir DESEN mi?
//
// Manda vakasinda (6 Eylul) su bulundu: `suriye-lubnan-mandasi` ·
// `irak-kralligi` · `filistin-mandasi` — kunyesi VAR, penceresi 1923'u
// TUTUYOR, RENGI VAR, ve veride SIFIR kez kullaniliyor. Toprak metropol
// kimligiyle boyaniyor.
// Bu alet ayni deseni DUNYA CAPINDA arar.
//
// KOVA AYRIMI SART (§11 "olculemedi != temiz"):
//   A ATIL+RENKLI   1923'u tutuyor · rengi var · veride 0  -> HAZIR
//   B ATIL+RENKSIZ  1923'u tutuyor · rengi YOK · veride 0  -> renk gerekir
//   C ATIL, 1923 DISI  penceresi 1923'u tutmuyor           -> bu tarama
//                       icin ILGISIZ (tarihi kunye olabilir)
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const G = "1923-10-28";
function baglam(y) { const d = { window: {} }; vm.createContext(d); vm.runInContext(fs.readFileSync(y, "utf8"), d); return d.window; }

const D = baglam("data/devletler.js").DEVLETLER || [];
// renk: harita: varsa o, yoksa id  (CLAUDE.md §11 — id'ye BAKMA)
// renkler.py ice aktarilirken stdout'a TANI basiyor ⇒ JSON stdout'tan
// OKUNMAZ, yardimci onu dosyaya yazar.
execSync("py denetim/_boyalar_dok.py", { encoding: "utf-8", maxBuffer: 1 << 24 });
const RENK = JSON.parse(fs.readFileSync("denetim/_boyalar.json", "utf8"));
const renkOf = (k) => RENK[k.harita ? k.harita : k.id] || null;

const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py", { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const kullanim = {};      // kimlik -> donem sayisi (s: + isg:, TUM zaman)
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  let w; try { w = baglam(yol); } catch (e) { continue; }
  for (const k of Object.keys(w)) {
    const A = w[k];
    if (!Array.isArray(A)) continue;
    for (const r of A) for (const kat of ["s", "isg"]) for (const p of (r[kat] || []))
      if (p.d) kullanim[p.d] = (kullanim[p.d] || 0) + 1;
  }
}

const A = [], B = [], C = [];
for (const k of D) {
  if (kullanim[k.id]) continue;                       // veride VAR
  if (k.harita && kullanim[k.harita]) continue;       // paylasilan anahtar KULLANILIYOR
  const tutar = (!k.f || k.f <= G) && (!k.t || k.t > G);
  const r = renkOf(k);
  const kayit = { id: k.id, ad: k.ad || "", f: k.f, t: k.t, bolge: k.bolge || "?", renk: r };
  if (!tutar) C.push(kayit);
  else if (r) A.push(kayit);
  else B.push(kayit);
}
const say = (L) => L.length;
console.log("=== ATIL KUNYE TARAMASI ===  toplam kunye " + D.length +
  " · veride kullanilan " + Object.keys(kullanim).length);
console.log("");
console.log("A · ATIL + 1923'u TUTUYOR + RENGI VAR   : " + say(A) + "   -> HAZIR, yalniz veri gerekiyor");
A.sort((a, b) => (a.bolge || "").localeCompare(b.bolge || ""));
for (const x of A) console.log("    " + x.id.padEnd(26) + x.renk + "  " + (x.f || "?") + "->" + (x.t || "?") +
  "  [" + x.bolge + "]  " + x.ad.slice(0, 42));
console.log("");
console.log("B · ATIL + 1923'u TUTUYOR + RENGI YOK   : " + say(B) + "   -> renk de gerekiyor");
for (const x of B) console.log("    " + x.id.padEnd(26) + "         " + (x.f || "?") + "->" + (x.t || "?") +
  "  [" + x.bolge + "]  " + x.ad.slice(0, 42));
console.log("");
console.log("C · ATIL ama 1923 DISI                  : " + say(C) + "   -> bu taramanin konusu DEGIL");
const cb = {};
for (const x of C) cb[x.bolge] = (cb[x.bolge] || 0) + 1;
for (const [b, n] of Object.entries(cb).sort((a, c) => c[1] - a[1]).slice(0, 10))
  console.log("    " + b.padEnd(24) + n);

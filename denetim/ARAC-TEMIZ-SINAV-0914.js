// PAKET-TEMIZ — "metin alanları dışında fark 0" sınavı (yalnız OKUR).
//   node denetim/ARAC-TEMIZ-SINAV-0914.js ONCE_DIZINI            (ONCE_DIZINI: düzenlemeden önce alınmış kopyalar)
//   node denetim/ARAC-TEMIZ-SINAV-0914.js --head                  (karşılaştırma tabanı git HEAD)
// Her dosyanın önce/sonra hâli AYRI bağlamda değerlendirilir, bütün yapraklar yol → değer olarak düzleştirilir.
// İzinli değişim: METIN kümesindeki anahtarların DİZGE değerleri · yeni eklenen ic_not_* anahtarları ·
// padisahlar lakap/esler dizisinin boşaltılması. Başka HER fark (t · kapsam · onem · etiket · yer_id · f · kaynak slug'ı
// dışındaki alanlar · kayıt sayısı · anahtar sırası dışı) HATA sayılır.
const fs = require("fs"), path = require("path"), cp = require("child_process");
const KOK = path.join(__dirname, "..");
const J = JSON.parse(fs.readFileSync(path.join(KOK, "denetim", "TEMIZ-DUZENLE-0914.json"), "utf8"));
const dosyalar = [...new Set(J.kayitlar.map((r) => r.dosya))];
const METIN = new Set(["b", "d", "gun", "metin", "not", "bag", "kaynak", "tartisma", "akis", "kuvvet", "komutan", "dayanak",
  "baskent", "yergi", "skandal", "olum_sebep", "dogum", "dogum_yer", "olum", "sanatci", "eser", "yil"]);
const arg = process.argv[2];
function yukle(src) {
  const w = {}; new Function("window", src)(w); return w;
}
function duz(x, yol, out) {
  if (Array.isArray(x)) { out[yol + ".#len"] = x.length; x.forEach((v, i) => duz(v, yol + "[" + i + "]", out)); }
  else if (x && typeof x === "object") { for (const k of Object.keys(x)) duz(x[k], yol + "." + k, out); }
  else out[yol] = x;
  return out;
}
let hata = 0, izinli = 0, eklenen = 0;
for (const f of dosyalar) {
  const once = arg === "--head" ? cp.execSync("git show HEAD:data/" + f, { cwd: KOK, maxBuffer: 1 << 28 }).toString("utf8")
                                : fs.readFileSync(path.join(arg, f), "utf8");
  const sonra = fs.readFileSync(path.join(KOK, "data", f), "utf8");
  const A = duz(yukle(once), "", {}), B = duz(yukle(sonra), "", {});
  const anahtarlar = new Set([...Object.keys(A), ...Object.keys(B)]);
  let dh = 0;
  for (const k of anahtarlar) {
    if (A[k] === B[k]) continue;
    const son = k.replace(/\[\d+\]$/, "").split(".").pop().replace(/\[\d+\]$/, "");
    if (/(^|\.)ic_not[\w]*$/.test(k) && !(k in A)) { eklenen++; continue; }
    // önceden var olan ic_not_* dizgesine not EKLENMESİ (" · " ile) — iç not alanı, izinli
    if (/(^|\.)ic_not[\w]*$/.test(k) && typeof A[k] === "string" && typeof B[k] === "string" && B[k].startsWith(A[k])) { izinli++; continue; }
    if (!(k in A) || !(k in B)) {
      // padisahlar: "bulunamadı" dizisinin boşaltılması → [0] silinir, #len 1→0
      if (f === "padisahlar.js" && /\.(lakap|esler)(\[0\]|\.#len)$/.test(k)) { izinli++; continue; }
      hata++; dh++; if (dh <= 8) console.log("  ✗ " + f + " " + k + " : " + JSON.stringify(A[k]) + " → " + JSON.stringify(B[k])); continue;
    }
    if (f === "padisahlar.js" && /\.(lakap|esler)\.#len$/.test(k)) { izinli++; continue; }
    if (typeof A[k] === "string" && typeof B[k] === "string" && (METIN.has(son) || /\.(lakap|esler)\[\d+\]$/.test(k))) { izinli++; continue; }
    hata++; dh++; if (dh <= 8) console.log("  ✗ " + f + " " + k + " : " + JSON.stringify(A[k]).slice(0, 80) + " → " + JSON.stringify(B[k]).slice(0, 80));
  }
  console.log((dh ? "✗ " : "✓ ") + f + " · metin farkı " + "ok" + (dh ? " · İZİNSİZ " + dh : ""));
}
console.log("dosya", dosyalar.length, "· izinli metin değişimi", izinli, "· eklenen ic_not", eklenen, "· İZİNSİZ FARK", hata);
process.exit(hata ? 1 : 0);

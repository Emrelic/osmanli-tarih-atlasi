// PAKET-KRON2 — okur alanlarında (d · gun · b) üretim/meta notu ADAYI tarar (yalnız OKUR).
//   node denetim/ARAC-KRON2-META-TARA-0913.js [CIKTI.json]
// Evren: data/olaylar*.js (ÇEKİRDEK) + data/kronoloji*.js (KUYRUK), her dosya ayrı `window`.
// Madde = `t` ve `b` dizgesi taşıyan nesne. Desen listesi şartnameden + genişletme.
// Aday ≠ kusur: her aday OKUNUR, karar elle verilir.
const fs = require("fs"), path = require("path");
const DATA = path.join(__dirname, "..", "data");
const DESEN = [
  ["tdv-yalniz", /TDV[^.;]{0,40}(yalnız|yalniz|sadece)[^.;]{0,30}(yıl|yil|ay)/i],
  ["gun-vermiyor", /gün(ü)?\s*(vermiyor|vermez|belirtmiyor|bildirmiyor|yok)/i],
  ["ay-gun-belirtmiyor", /ay\/gün/i],
  ["haritada", /haritada/i],
  ["veriye", /veri(ye|de|si|nin|den)\b|veri[ -]?(seti|katman)/i],
  ["atlas", /atlas/i],
  ["bulunamadi", /bulunamad/i],
  ["olculemedi", /ölçülemedi|olculemedi|ölçülmedi|ölçüldü/i],
  ["ders-kimlik", /\bD1\d\d\b|\bD0\d\d\b/],
  ["paragraf", /§/],
  ["yama", /\byama/i],
  ["kosu", /\bkoşu/i],
  ["uyari-isaret", /⚠️|🔴|🟢|🟡|📌/],
  ["dosya-adi", /\b[a-z_0-9]+\.(js|py|json|md)\b/i],
  ["oturum", /\boturum|\bKITA \d|\bPAKET-|koordinatör/i],
  ["denetim", /denetle|Değişmez \d|degismez/i],
  ["kunye", /künye/i],
  ["yerlesim-kaydi", /yerleşim (kaydı|noktası|verisi)|petek|kırılma/i],
  ["renk", /\brenkte\b|renkle (boyan|göster)|tâbi renk/i],
  ["kaynak-meta", /kaynak (bulunamad|göstermiyor|yok)|kaynaksız|slug/i],
  ["hassasiyet", /temsilî tarih|yıl kodu|YYYY|-01-01/i],
  // 2. tur genişletme (ilk turun kaçırabileceği üretim kalıpları)
  ["yer-id", /yer_id|uçuş hedefi|kapsam_genis/i],
  ["kayitli-degil", /kayıtlı değil|kayıtlarında yok|kaydı yok|kayıtlarda yok/i],
  ["tercih", /bir tercihtir|tercihtir|TARİH HAKKINDA/i],
  ["yerlestirildi", /(güne|tarihe|yıla|dönemine|ortasına|başına) (yerleştirildi|bağlandı|konuldu)/i],
  ["vermez", /(ay|yıl|gün)\s*ver(mez|miyor)/i],
  ["olcmedim", /ölçmedim|bu oturum/i],
  ["esas-alindi", /esas alındı|kapsamamaktadır|kapsamıyor/i],
];
const out = [];
const sayac = {};
let dosyaSay = 0, maddeSay = 0;
for (const f of fs.readdirSync(DATA).sort()) {
  if (!/^(olaylar|kronoloji).*\.js$/.test(f)) continue;
  const kova = f.startsWith("olaylar") ? "cekirdek" : "kuyruk";
  const w = {};
  try { new Function("window", fs.readFileSync(path.join(DATA, f), "utf8"))(w); }
  catch (e) { console.log("HATA " + f + ": " + e.message); continue; }
  dosyaSay++;
  const gez = (x, derin) => {
    if (!x || derin > 5) return;
    if (Array.isArray(x)) { x.forEach((y) => gez(y, derin + 1)); return; }
    if (typeof x !== "object") return;
    if (typeof x.t === "string" && typeof x.b === "string") {
      maddeSay++;
      for (const alan of ["b", "gun", "d"]) {
        const s = x[alan];
        if (typeof s !== "string" || !s) continue;
        const bulunan = [];
        for (const [ad, re] of DESEN) {
          const m = s.match(re);
          if (m) bulunan.push([ad, m.index]);
        }
        if (!bulunan.length) continue;
        for (const [ad] of bulunan) sayac[ad] = (sayac[ad] || 0) + 1;
        out.push({ dosya: f, kova, t: x.t, b: x.b, alan, desen: bulunan.map((z) => z[0]),
          metin: s, ic_not_var: Object.keys(x).filter((k) => k.startsWith("ic_not")) });
      }
      return;
    }
    for (const k of Object.keys(x)) gez(x[k], derin + 1);
  };
  for (const k of Object.keys(w)) gez(w[k], 0);
}
const alanAday = {}; out.forEach((o) => (alanAday[o.alan + "/" + o.kova] = (alanAday[o.alan + "/" + o.kova] || 0) + 1));
console.log("dosya", dosyaSay, "madde", maddeSay, "aday alan", out.length,
  "aday madde", new Set(out.map((o) => o.dosya + "|" + o.t + "|" + o.b)).size);
console.log("alan/kova", JSON.stringify(alanAday));
console.log("desen", JSON.stringify(sayac));
if (process.argv[2]) fs.writeFileSync(process.argv[2], JSON.stringify(out, null, 1));

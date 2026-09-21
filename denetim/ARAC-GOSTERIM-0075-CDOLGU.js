// GOSTERIM-0075 / H-0039 — C katmanı (`hukuki-sinir-dolgu`) DİKDÖRTGEN örtüsü envanteri.
// SALT OKUR. Kullanım:  node denetim/ARAC-GOSTERIM-0075-CDOLGU.js [depo-kökü]
// Ölçüt: js/app.js `_hukukiSinirGuncelle` hangi kayda OPAK dolgu (fill-opacity:1) basıyor?
//   dolgu basar : hat.tur ∈ {cetvel, dogal-tanimsiz, paralel, meridyen, bolge} VE kapsama.kutu (ya da poligon) var
//                 VE kapsama.dolgu !== false           (15 Eylül düzeltmesi: `dolgu:false` → yalnız hat)
//   dolgu basmaz: nokta-kumesi · kutu yok · dolgu:false
// Çıktı: her kaydın kutusu (km²), penceresi (yıl), ve HANGİ YILLARDA aynı anda kaç kutu açık.
const fs = require("fs"), path = require("path");
const kok = process.argv[2] || path.resolve(__dirname, "..");
global.window = {};
const dosyalar = ["data/hukuki_sinirlar.js"].concat(
  fs.readdirSync(path.join(kok, "data")).filter(f => /^hukuki_sinirlar.+\.js$/.test(f)).map(f => "data/" + f));
for (const d of dosyalar) {
  const y = path.join(kok, d);
  if (!fs.existsSync(y)) continue;
  try { new Function("window", fs.readFileSync(y, "utf8"))(global.window); } catch (e) { console.error("okunamadı", d, e.message); }
}
const K = window.HUKUKI_SINIRLAR || [];
const TURLER = new Set(["cetvel", "dogal-tanimsiz", "paralel", "meridyen", "bolge"]);
function km2(k) {
  const la = (k.lat_min + k.lat_max) / 2 * Math.PI / 180;
  return (k.lon_max - k.lon_min) * 111.32 * Math.cos(la) * (k.lat_max - k.lat_min) * 110.57;
}
const yil = s => s ? +String(s).slice(0, 4) : 1923;
const satir = [];
for (const k of K) {
  const kap = k.kapsama || {}, tur = (k.hat || {}).tur;
  const dolgu = TURLER.has(tur) && (kap.kutu || (kap.tur === "poligon" && kap.nokta_dizisi)) && kap.dolgu !== false;
  satir.push({ id: k.id, tur, dolgu: !!dolgu, kutu_km2: kap.kutu ? Math.round(km2(kap.kutu)) : null,
    f: k.f, t: k.t, yil: yil(k.t) - yil(k.f), taraflar: (k.taraflar || []).join("/") });
}
const d = satir.filter(s => s.dolgu).sort((a, b) => (b.kutu_km2 || 0) - (a.kutu_km2 || 0));
console.log(JSON.stringify({ kayit: K.length, dolgu_basan: d.length, dolgusuz: satir.length - d.length,
  toplam_kutu_yili: d.reduce((a, s) => a + s.yil, 0) }, null, 1));
for (const s of d.slice(0, 40)) console.log(String(s.kutu_km2).padStart(9), "km²", String(s.yil).padStart(4), "yıl ", s.f, "→", s.t || "—", s.id);
const H = d.find(s => s.id === "ii-erzurum-sattularap-1847");
console.log("\nŞattülarap:", JSON.stringify(H));
fs.writeFileSync(path.join(kok, "denetim", "GOSTERIM-0075-CDOLGU.json"), JSON.stringify(satir, null, 1));

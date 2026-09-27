// EKOKUMA-0077-A — DOSYA DOĞRULAYICI (KRONO-0076-B doğrulayıcısından uyarlandı)
// ① dosya JS olarak yükleniyor mu ② şema alanları tam mı
// ③ geliştirici sesi var mı ④ her `olay:` çapası GERÇEK bir kronoloji
//    maddesine tutuyor mu (app.js'in _ekNorm + _ekBagEslesir mantığıyla)
const fs = require("fs");
const path = require("path");

const KOK = "C:\\atlas\\data";
const YAMA = "C:\\atlas\\data\\ekokuma_p77a.js";

// --- app.js'ten BİREBİR kopya
function _ekNorm(s) {
  s = String(s == null ? "" : s)
    .replace(/[İIı]/g, "i").replace(/[Şş]/g, "s").replace(/[Ğğ]/g, "g")
    .replace(/[Üü]/g, "u").replace(/[Öö]/g, "o").replace(/[Çç]/g, "c")
    .replace(/[Ââ]/g, "a").replace(/[Îî]/g, "i").replace(/[Ûû]/g, "u");
  if (s.normalize) s = s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return s.toLowerCase().replace(/['\u2018\u2019`\u02bc]/g, "").replace(/\s+/g, " ").trim();
}
function _ekBagEslesir(v, o) {
  if (v == null) return false;
  var s = String(v), i = s.indexOf("|");
  if (i < 0) return s === o.t;
  if (s.slice(0, i) !== o.t) return false;
  var ayirt = _ekNorm(s.slice(i + 1));
  return !ayirt || _ekNorm(o.b).indexOf(ayirt) >= 0;
}

// --- ① yama yükleniyor mu
global.window = {};
try {
  new Function(fs.readFileSync(YAMA, "utf8"))();
} catch (e) {
  console.log("🔴 YAMA YUKLENMEDI (sozdizimi):", e.message);
  process.exit(1);
}
const kartlar = global.window.EKOKUMA_P77A;
if (!Array.isArray(kartlar)) { console.log("🔴 window.EKOKUMA_P77A dizi degil"); process.exit(1); }
console.log("① SOZDIZIMI OK · kart sayisi:", kartlar.length);

// --- ② şema
const ZORUNLU = ["id", "tur", "metin", "kesinlik", "olay", "kaynak"];
let semaHata = 0;
const idler = new Set();
kartlar.forEach((k, i) => {
  ZORUNLU.forEach(a => { if (!k[a]) { console.log("  🔴 kart", i, k.id || "?", "eksik alan:", a); semaHata++; } });
  if (!k.ad && !k.kisa) { console.log("  🔴 kart", i, k.id, "ne ad ne kisa var"); semaHata++; }
  if (idler.has(k.id)) { console.log("  🔴 MUKERRER id:", k.id); semaHata++; }
  idler.add(k.id);
  if (!Array.isArray(k.olay)) { console.log("  🔴", k.id, "olay dizi degil"); semaHata++; }
});
console.log("② SEMA:", semaHata === 0 ? "OK (0 hata)" : "🔴 " + semaHata + " hata");

// --- ③ geliştirici sesi
// 🔴 `/Emre/i` KULLANILMAZ: "emretti" kelimesinin içinde yanlış ateşliyor
// (ilk koşuda tam bu oldu — süzgeç YANLIŞ POZİTİF verdi). Özel ad olarak,
// kelime sınırıyla ve büyük harfe duyarlı aranır.
const YASAK = [/\bD\d{3}\b/, /\bH-\d{4}\b/, /\bEmre\b/, /bu oturum/i, /\.js\b/, /\bdenetim\//,
               /CLAUDE\.md/i, /koordinat[öo]r/i, /YAMA-/];
let sesHata = 0;
// B9: süzgeç önce BİLİNEN POZİTİF bir ihlalle ateşlenir
const B9_SES = "Bunu Emre söyledi, bkz. D123 ve H-0456 (bu oturum, app.js).";
const b9ses = YASAK.filter(re => B9_SES.match(re)).length;
console.log("   B9 POZITIF KANIT (yasak sesle dolu deneme cumlesi):",
            b9ses >= 5 ? "SUZGEC CALISIYOR (" + b9ses + "/9 kalip yakaladi)" : "🔴 SUZGEC KOR");
if (b9ses < 5) process.exit(1);
kartlar.forEach(k => {
  const okurMetni = [k.metin, k.kisa || "", k.ad || ""].join("\n");
  YASAK.forEach(re => {
    const m = okurMetni.match(re);
    if (m) { console.log("  🔴 GELISTIRICI SESI:", k.id, "->", JSON.stringify(m[0])); sesHata++; }
  });
});
console.log("③ GELISTIRICI SESI (okura giden alanlar: metin·kisa·ad):",
            sesHata === 0 ? "OK (0 ihlal)" : "🔴 " + sesHata + " ihlal");

// --- ④ çapa sınavı: gerçek kronoloji maddelerini yükle
const olaylar = [];
for (const f of fs.readdirSync(KOK)) {
  if (!f.endsWith(".js")) continue;
  const t = fs.readFileSync(path.join(KOK, f), "utf8");
  // t:"YYYY-MM-DD" ... b:"..."  (aynı kayıt içinde, kaba ama yeterli)
  const re = /t:\s*"(\d{4}-\d{2}-\d{2})"[\s\S]{0,400}?\bb:\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(t)) !== null) olaylar.push({ t: m[1], b: m[2].replace(/\\"/g, '"'), dosya: f });
  const re2 = /"t"\s*:\s*"(\d{4}-\d{2}-\d{2})"[\s\S]{0,400}?"b"\s*:\s*"((?:[^"\\]|\\.)*)"/g;
  while ((m = re2.exec(t)) !== null) olaylar.push({ t: m[1], b: m[2].replace(/\\"/g, '"'), dosya: f });
}
console.log("   (kronoloji havuzu:", olaylar.length, "madde)");

// B9 SINAVI: bilinen POZITIF bir capa once ateslenir
const b9 = olaylar.some(o => _ekBagEslesir("1915-03-18|Çanakkale Zaferi", o));
console.log("   B9 POZITIF KANIT (1915-03-18|Çanakkale Zaferi):", b9 ? "TUTTU" : "🔴 TUTMADI — SINAV KIRIK, hukum verme");
if (!b9) process.exit(1);

let capaHata = 0;
kartlar.forEach(k => {
  k.olay.forEach(v => {
    const tutan = olaylar.filter(o => _ekBagEslesir(v, o));
    if (tutan.length === 0) {
      console.log("  🔴 CAPA TUTMUYOR:", k.id, "->", v);
      capaHata++;
    } else {
      // Çapa bir KRONOLOJİ dosyasına tutmalı; devletler.js/kimlikler.js gibi
      // künye dosyasına tutan çapa arayüzde BAĞLANMAZ.
      const kron = tutan.filter(o => /^(olaylar|kronoloji)/.test(o.dosya));
      const etiketDosya = tutan.filter(o => /^(etiket_yama|yer_yama)/.test(o.dosya));
      let damga = "OK";
      if (kron.length === 0 && etiketDosya.length === 0) { damga = "🔴 YALNIZ KUNYE DOSYASI — BAGLANMAZ"; capaHata++; }
      else if (kron.length === 0) damga = "🟡 yalniz yama dosyasi";
      console.log("  " + (damga === "OK" ? "✓" : "!"), k.id.padEnd(42), v.padEnd(42),
                  "-> " + tutan.length + " madde [" + (kron[0] || tutan[0]).dosya + "] " + damga);
    }
  });
});
console.log("④ CAPA:", capaHata === 0 ? "OK (hepsi tutuyor)" : "🔴 " + capaHata + " capa tutmuyor");

// --- ⑤ ters yön sınavı: gün kaydırılmış sahte çapa TUTMAMALI
const neg = olaylar.some(o => _ekBagEslesir("1915-03-19|Çanakkale Zaferi", o));
console.log("⑤ NEGATIF KANIT (1915-03-19|Çanakkale Zaferi tutmamali):", neg ? "🔴 TUTTU — sinav gevsek" : "OK (tutmadi)");

// --- ⑥ kimlik çakışması: öteki bütün EKOKUMA/MERAK dosyalarındaki id'lerle
let cakisma = 0;
const digerId = new Set();
for (const f of fs.readdirSync(KOK)) {
  if (!/^(ekokuma|merak)/.test(f) || f === "ekokuma_p77a.js") continue;
  const t = fs.readFileSync(path.join(KOK, f), "utf8");
  let m; const re = /\bid\s*:\s*"([^"]+)"/g;
  while ((m = re.exec(t)) !== null) digerId.add(m[1]);
}
kartlar.forEach(k => { if (digerId.has(k.id)) { console.log("  🔴 ID CAKISMASI:", k.id); cakisma++; } });
// pozitif kanıt: bilinen bir id kümede olmalı
console.log("⑥ ID CAKISMASI (" + digerId.size + " canli id):", cakisma === 0 ? "OK (0)" : "🔴 " + cakisma,
            "· B9:", digerId.has("statu-hicaz-mekke-serifligi") ? "kume dolu" : "🔴 KUME BOS");

console.log("\nSONUC:", (semaHata + sesHata + capaHata + cakisma + (neg ? 1 : 0)) === 0 ? "DOSYA GECERLI" : "🔴 DUZELTME GEREKLI");

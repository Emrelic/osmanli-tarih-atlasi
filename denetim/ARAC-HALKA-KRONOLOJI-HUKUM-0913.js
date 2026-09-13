// ARAC-HALKA-KRONOLOJI-HUKUM-0913 — HALKA-KRONOLOJI · 13 Eylül 2026
// ELLE OKUMA HÜKÜMLERİ (örneklem/sayım) ve isabet hesabı. Hükümler madde metni (b · d · gun · kaynak)
// okunarak verildi; ölçüt SABİT: "madde metni bu yerin bu tarihte (verilen hassasiyetle) bu devlete
// geçtiğini / onun elinde olduğunu AÇIKÇA söylüyor mu". Kaynak gövdesi OKUNMADI (madde metnine karşı ölçüm).
// Kullanım: node denetim/ARAC-HALKA-KRONOLOJI-HUKUM-0913.js
const L = require("./ARAC-HALKA-KRONOLOJI-YUKLE-0913.js");
const TUR = [
  { tur: 1, havuz: 111, n: 50, yanlis: {
      "kr-sakiz-venedik-1695": "kazanan TERS — 'Venedik donanmasını yenen … geri aldı' (Osmanlı)",
      "kr-varna-osmanli-1391": "gun '1391 dolayı' — yıl bile kesin değil",
      "kr-adana-osmanli-1516": "bölge→şehir: 'Adana merkezli Ramazanoğulları Beyliği'",
      "kr-zaklise-venedik-1482": "tur:tabi YANLIŞ — haraç Venedik'in Osmanlı'ya ödediği",
      "kr-manama-portekiz-1521": "bölge→şehir (Bahreyn adası) + tur:tabi Hürmüz'e ait",
      "kr-van-akkoyunlu-1467": "'Van gölü havzası' coğrafî bölge",
      "kr-silistre-rusya-1811": "tahliye maddesi; ele geçirme 1810",
      "kr-kiel-isvec-1814": "yer antlaşma YERİ; devredilen Norveç",
      "kr-suveys-osmanli-1517-2": "gün Ridâniye'den taşınmış; kaynak alanı veri dosyasına dayanıyor",
      "kr-amasra-osmanli-1461": "gün/yıl Trabzon seferinden taşınmış",
      "kr-tilimsan-merini-1348": "kazanan TERS — 'Merînî hâkimiyetine son verdi'",
      "kr-kasgar-ingiltere-1877": "'subaylar İngilizlere teslim edildi' — yer değil kişi" } },
  { tur: 2, havuz: 92, n: 50, yanlis: {
      "kr-sam-osmanli-1516": "27 Eylül VARIŞ günü; giriş on iki gün sonra",
      "kr-erzurum-osmanli-1518": "metin '1518-19' diyor",
      "kr-anabolu-venedik-1686": "gun 'birkaç gün içinde' — gün/ay yaklaşık",
      "kr-kiel-isvec-1814": "'Kiel'de imzalanan' — olay yeri",
      "kr-malatya-memluk-1322": "kaynak 'ikincil özetten derlendi'; 1315 fethiyle çelişir",
      "kr-sumnu-osmanli-1388": "metin '1388-1389 kışında'",
      "kr-istanbul-venedik-1204": "'Ege adaları … Venedik'e düştü' — İstanbul değil",
      "kr-alacahisar-osmanli-1454": "'izleyen yıllarda' — yıl belirsiz",
      "kr-maku-osmanli-1574": "'almakla görevlendirdi' — ele geçirme değil görevlendirme" } },
  { tur: 3, havuz: 84, n: 50, yanlis: {
      "kr-sam-osmanli-1516": "S19 kaçırdı ('teslim' Hama/Humus'a ait)",
      "kr-lefkosa-memluk-1426": "SEFER — yağma/esir, kalıcı tasarruf değil",
      "kr-diyarbakir-selcuklu-1240": "t 06-01 ama metin yalnız '(1240)' — ay tahmini",
      "kr-kandehar-babur-imparatorlugu-1545": "t 04-01, metin ayı anmıyor — ay tahmini" } },
  { tur: 4, havuz: 80, n: 80, sayim: true, yanlis: {
      "kr-mora-venedik-1715": "kazanan TERS — 'Venedik'e bırakılan Mora … geri alındı'; yer bölge (Mora)" } }
];
// Tur 5 (SON): 77 kayıt = tur 4 sayımının 77 DOĞRU kaydı (düşen 3: mora · suveys-1517 · bagdat-karakoyunlu-1411-2).
// Yeni kayıt 0 ⇒ 77'nin 77'si elle okunmuş ve doğru bulunmuş. Şüphe notu (yanlış SAYILMADI, madde düzeyinde):
const SUPHE = {
  "kr-tunus-osmanli-1534": "madde günü 22 Eylül; madde gövdesi yalnız 'Ağustos 1534'te yola çıktı' diyor — gün madde içinde desteklenmiyor ama çelişmiyor",
  "kr-derbend-osmanli-1583": "madde 1583 diyor; tohum fp-derbend-tdv TDV 5 Ekim 1578 — aynı devlet, farklı başlangıç",
  "kr-batum-osmanli-1479": "'Acaristan (Batum ve çevresi)' — bölge adıyla birlikte anılıyor, Batum açıkça sayılmış",
  "kr-mekke-suud-birinci-1806": "metin 'Vehhâbîler' diyor; künye eşlemesi suud-birinci (Dir'iyye devleti)"
};
global.window = {}; eval(L.oku("data/kaynakli_halka_kronoloji.js"));
const KR = window.KAYNAKLI_HALKA_KRONOLOJI, idler = KR.map(r => r.id);
// TURET-0913 ile AYNI örneklem çekimi (mulberry32 tohum 20260913)
let s = 20260913 >>> 0; const rnd = () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const ix = idler.map((_, i) => i); for (let i = ix.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [ix[i], ix[j]] = [ix[j], ix[i]]; }
const orn = ix.slice(0, 50).map(i => idler[i]);
const gorulmus = new Set(); // tur 1-3 örneklemlerinde görülen id'ler — sayım 4 dışındakiler ayar sırasında görüldü
console.log("TUR  havuz  n   yanlış  isabet");
for (const t of TUR) { const y = Object.keys(t.yanlis).length; console.log(String(t.tur).padEnd(5) + String(t.havuz).padEnd(7) + String(t.n).padEnd(4) + String(y).padEnd(8) + ((t.n - y) / t.n * 100).toFixed(1) + "%" + (t.sayim ? "  (SAYIM, tüm havuz)" : "")); }
// Önceki turda YANLIŞ bulunup kimliği korunan, kusuru bir kuralla DÜZELTİLEN kayıtlar: düzeltme GERÇEK veride sınanır
// (sınanmazsa yanlış sayılmaya devam eder — "kural yazıldı" ≠ "kusur gitti")
const kayit = id => KR.find(r => r.id === id);
const DUZELTILDI = {
  "kr-zaklise-venedik-1482": ["S1 tur otomatik yazılmaz", r => r.tur === undefined],
  "kr-diyarbakir-selcuklu-1240": ["S21 ay tahmini ⇒ yıl", r => r.kesinlik === "yil" && r.tarih === "1240-01-01"],
  "kr-kandehar-babur-imparatorlugu-1545": ["S21 ay tahmini ⇒ yıl", r => r.kesinlik === "yil" && r.tarih === "1545-01-01"],
  "kr-anabolu-venedik-1686": ["S16b 'birkaç gün içinde / TDV yalnız yıl verir' ⇒ yıl", r => r.kesinlik === "yil" && r.tarih === "1686-01-01"]
};
const hala = id => { if (!TUR.some(t => t.yanlis[id])) return false; const dz = DUZELTILDI[id], r = kayit(id); return !(dz && r && dz[1](r)); };
for (const [id, [k, f]] of Object.entries(DUZELTILDI)) { const r = kayit(id); console.log("  düzeltme sınavı " + id + " · " + k + " · " + (r ? (f(r) ? "✓ veride düzelmiş" : "✗ HÂLÂ KUSURLU") : "kayıt yok")); }
const sonYanlis = orn.filter(hala);
const tumYanlis = idler.filter(hala);
console.log("  son 77 kaydın tamamında hâlâ yanlış: " + tumYanlis.length + (tumYanlis.length ? " (" + tumYanlis.join(", ") + ")" : ""));
console.log("5    " + String(KR.length).padEnd(7) + "50  " + String(sonYanlis.length).padEnd(8) + ((50 - sonYanlis.length) / 50 * 100).toFixed(1) + "%  (SON örneklem; 77 kaydın tamamı tur 4 sayımında elle okundu)");
console.log("\nŞÜPHE NOTLARI (yanlış sayılmadı): " + Object.keys(SUPHE).filter(k => idler.includes(k)).length);
for (const [k, v] of Object.entries(SUPHE)) if (idler.includes(k)) console.log("  " + k + ": " + v);
console.log("\n⚠️ AYAR SIZINTISI: kural tur 1-4 hükümleriyle sıkılaştırıldı; son örneklemdeki kayıtların çoğu önceki turlarda da görüldü.");
console.log("   Ayar sırasında HİÇ örnekleme girmeyip yalnız tur 4 sayımında ilk kez okunan kayıtlar ayrıca raporda sayıldı.");
module.exports = { TUR, SUPHE };

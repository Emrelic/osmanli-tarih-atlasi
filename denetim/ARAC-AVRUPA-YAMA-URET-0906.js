// AVRUPA YAMASI — CANLI VERİDEN ÜRETİR, ELLE YAZMAZ (YONTEM §⑥).
//
//   node denetim/ARAC-AVRUPA-YAMA-URET-0906.js [--yaz]
//
// 🔴 NİÇİN ÜRETİCİ: Silistre elle yazıldı ve yama 6 dönemin 5'ini SİLİYORDU.
//   Burada mevcut zincir OKUNUR ve gün üzerinden BÖLÜNÜR; hiçbir dönem elle
//   kopyalanmaz. Zincirin TAMAMI alınır — süzgeç YOK (§11: bir ölçüm filtresi
//   dört ortaçağ kırılmasını silen bir yama yazdırmıştı).
//
// SINAV (C13 dört ayak, aynı betikte):
//   ① GEÇME      künye önerisi uygulanmış hâlde temiz mi
//   ② ATEŞLEME   bilerek bozulmuş zincirde ötüyor mu
//   ③ GİRDİ      gerçek data/yerlesimler*.js'ten okunuyor, enjekte DEĞİL
//   ④ ÇIKTI      ön koşul BUGÜNKÜ künyeyle ayrıca koşulur ve ÖTMELİ
const fs = require("fs"), vm = require("vm");

const TOLERANS = 400;
const KALEMLER = [
  { ad: "Elba",
    bol: { "1815-06-09": "toskana", "1861-03-17": "italya" },
    kaynak: "Treccani, Enciclopedia Italiana, 'Piombino' — 1548 GEÇİCİ işgal " +
      "('...di occupare, SIA PURE TEMPORANEAMENTE, Piombino'), 1557 iade ('SOLO NEL 1557 ... " +
      "Cosimo si decise a renderlo a Iacopo VI'), 1805 Elisa Bonaparte, 1815 Viyana Kongresi " +
      "Nihai Senedi ile Toskana'ya birleştirme ('Caduto Napoleone, con l'atto finale del " +
      "congresso di Vienna, Piombino fu unita alla Toscana'). TDV kapsam dışı — 'piza' slug 302 " +
      "ölü, Batı Avrupa TDV kapsamı %0 (§4). Britannica 'Elba' HTTP 403 ⇒ ÖLÇÜLEMEDİ, " +
      "'kaynak yok' DEĞİL." },
  { ad: "Dublin",
    bol: { "1922-12-06": "irlanda-serbest-devlet" },
    kaynak: "RTÉ Century Ireland (İrlanda ulusal yayıncısının Boston College ortaklı akademik " +
      "tarih projesi): 'The constitution of the Irish Free State became law on 6 December 1922.' " +
      "İkinci bağımsız teyit: 6 Aralık 1922'de George V'in bildirisiyle Serbest Devlet kuruldu ve " +
      "Dublin başkenti oldu. TDV kapsam dışı — Batı Avrupa TDV kapsamı %0 (§4)." },
];

// KALEM ③ — İSPANYA ÖNCÜL TACLARI. Dokuz nokta 1281'den beri doğrudan
// `ispanya` yazıyor, oysa `kastilya` (1230-09-23→1479-01-20) ve `aragon`
// (1164→1479-01-20) künyeleri VAR ve `ispanya`nın `f:`siyle GÜN GÜN BİTİŞİK.
// EMSAL EZİCİ: 22 nokta `kastilya` · 11 nokta `aragon` · 7 nokta `granada`
// kullanıyor (Toledo · Valladolid · Burgos · Zaragoza · Girona · Alicante …).
// Bu bir YENİ TARİH İDDİASI DEĞİL — mevcut konvansiyona katılım.
const KAYNAK_ISPANYA =
  "İÇ TUTARLILIK DÜZELTMESİ — yeni tarih iddiası YOK. `kastilya` (künye kaynağı: " +
  "TDV `kastilya--ispanya`) ve `aragon` (TDV `aragon`) künyeleri 1479-01-20'de " +
  "bitiyor, `ispanya` künyesi (TDV `ispanya`) AYNI GÜN başlıyor; künyelerin kendi " +
  "`ozet` alanları geçişi tarif ediyor ('Katolik Kralların evliliğiyle Aragon ile " +
  "birleşerek İspanya'nın çekirdeğini oluşturdu'). Atlasın EMSALİ: 22 nokta " +
  "`kastilya`, 11 nokta `aragon`, 7 nokta `granada` ile zincirlenmiş; bu dokuz nokta " +
  "o konvansiyonun DIŞINDA kalmıştı. Gün 1479-01-20'yi atlasta 60 kayıt kullanıyor " +
  "(YONTEM §③ komşu kuralı). Taç ataması coğrafî: Madrid/Sevilla Kastilya Tacı, " +
  "Barselona/Valensiya/Balear/Sardinya Aragon Tacı.";
const AR = { "1479-01-20": "aragon" }, KA = { "1479-01-20": "kastilya" };
for (const [ad, onc] of [["Madrid", KA], ["Sevilla", KA], ["Barselona", AR],
["Valensiya", AR], ["Mayorka (Palma)", AR], ["Menorka (Mahon)", AR], ["İbiza", AR],
["Kalyari (Cagliari)", AR], ["Sasari (Sassari)", AR]])
  KALEMLER.push({ ad, oncesi: onc, kaynak: KAYNAK_ISPANYA });
// Künye düzeltmesi BELLEKTE uygulanır — yama tek başına inemez, ikisi BİRLİKTE ölçülür.
const KUNYE_ONERISI = { piombino: { t: "1815-06-09" } };

function baglam(y) {
  const c = { window: {} }; vm.createContext(c);
  vm.runInContext(fs.readFileSync(y, "utf8"), c); return c.window;
}
const KUN = {};
for (const k of (baglam("data/devletler.js").DEVLETLER || [])) KUN[k.id] = k;

// ③ GİRDİ — gerçek dosyalardan
const KAYIT = {};
for (const f of fs.readdirSync("data").filter(x => /^yerlesimler.*\.js$/.test(x))) {
  let w; try { w = baglam("data/" + f); } catch (e) { continue; }
  for (const k of Object.keys(w)) {
    const A = w[k]; if (!Array.isArray(A)) continue;
    for (const y of A) if (y && y.ad && KALEMLER.some(z => z.ad === y.ad)) KAYIT[y.ad] = { y, f };
  }
}
const gn = (s) => Math.round(Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +s.slice(8, 10)) / 864e5);

// `bol`     : o günde böl, günden SONRAKİ parçaya yeni kimlik ata
// `oncesi`  : o günde böl, günden ÖNCEKİ parçaya yeni kimlik ata
//             (Kastilya/Aragon vakası: ardıl DOĞRU, ÖNCÜL eksik)
function bol(zincir, harita, oncesi) {
  harita = harita || {}; oncesi = oncesi || {};
  let z = zincir.map(p => ({ f: p.f, t: p.t, d: p.d }));
  for (const g of [...Object.keys(harita), ...Object.keys(oncesi)].sort()) {
    const c = [];
    for (const p of z) {
      if (p.f < g && g < p.t) { c.push({ f: p.f, t: g, d: p.d }); c.push({ f: g, t: p.t, d: p.d }); }
      else c.push(p);
    }
    z = c;
  }
  for (const p of z) {
    if (harita[p.f]) p.d = harita[p.f];
    for (const [g, kim] of Object.entries(oncesi)) if (p.t === g) p.d = kim;
  }
  return z;
}

// 🔴 İKİ YANLIŞ POZİTİF ÖLÇÜLDÜ VE DÜZELTİLDİ — ikisi de aletin kusuruydu:
//   ① `oncesi` kipinde muafiyet YÖNÜ tersti. `bol` günün SONRASINI değiştirir
//      (muafiyet t >= gün), `oncesi` ÖNCESİNİ (muafiyet t < gün). Ters yön
//      423 sahte "KAYBOLAN" üretti — kasıtlı kimlik değişimini kayıp sandı.
//   ② `ceneviz` ve `sardinya` "KÜNYE YOK" diye ötüyordu; ikisi de PAYLAŞILAN
//      BOYA ANAHTARI (`id` değil, birden çok künyenin `harita:` hedefi —
//      ARAC-KIMLIK-BOYA-0906 bunları "TASARIM, kusur DEĞİL" diye sayıyor).
//      §11: renk `harita:` anahtarına bakar, `id`ye DEĞİL.
// 🟢 VE SINAV ARTIK FARK ÖLÇÜYOR: eski zincirde de var olan bir kusur bu
//    yamanın kusuru DEĞİLDİR (§11: "taşımanın GETİRDİĞİ ile ZATEN ORADA
//    OLANI ayırmak — yoksa taşımaya haksız yüklenir").
const HARITA_HEDEFI = new Set();
for (const k of Object.values(KUN)) if (k.harita) HARITA_HEDEFI.add(k.harita);

function kusurlar(zincir, eski, yeni, gunler, kip) {
  const h = [];
  const kap = (g, d) => yeni.some(p => p.f <= g && g < p.t && p.d === d);
  if (zincir === yeni)
    for (const p of eski)
      for (let g = gn(p.f); g < gn(p.t); g += 1500) {
        const t = new Date(g * 864e5).toISOString().slice(0, 10);
        const muaf = gunler.some(b => kip === "oncesi" ? t < b : t >= b);
        if (!kap(t, p.d) && !muaf) h.push("KAYBOLAN: " + t + " " + p.d);
      }
  const s = zincir.slice().sort((a, b) => a.f < b.f ? -1 : 1);
  for (let i = 1; i < s.length; i++) {
    if (s[i].f > s[i - 1].t) h.push("BOŞLUK: " + s[i - 1].t + " -> " + s[i].f);
    if (s[i].f < s[i - 1].t) h.push("ÖRTÜŞME: " + s[i].f + " < " + s[i - 1].t);
  }
  for (const p of zincir) {
    const k = KUN[p.d];
    if (!k) {
      if (!HARITA_HEDEFI.has(p.d)) h.push("KÜNYE YOK: " + p.d);
      continue;                       // paylaşılan boya anahtarı — pencere YOK
    }
    if (k.t && gn(p.t) - gn(k.t) > TOLERANS)
      h.push("KÜNYE AŞIMI: " + p.d + " " + (gn(p.t) - gn(k.t)) + " gün");
    if (k.f && gn(k.f) - gn(p.f) > TOLERANS)
      h.push("KÜNYE ERKEN: " + p.d + " " + (gn(k.f) - gn(p.f)) + " gün");
  }
  return h;
}

function sina(eski, yeni, gunler, ad, kip) {
  const oncekiler = new Set(kusurlar(eski, eski, yeni, gunler, kip));
  const simdi = kusurlar(yeni, eski, yeni, gunler, kip);
  const yeniKusur = simdi.filter(x => !oncekiler.has(x));
  const devralinan = simdi.filter(x => oncekiler.has(x));
  console.log("   --- " + ad + ": " + (yeniKusur.length ? "" : "🟢 TEMİZ") +
    (devralinan.length ? "   (⚪ " + devralinan.length + " kusur MEVCUTTU, yama getirmedi)" : ""));
  for (const x of yeniKusur) console.log("      🔴 " + x);
  return yeniKusur.length;
}

let onKosulOttu = 0, gecmeHata = 0, atesOttu = 0;
const URETILEN = [];
for (const kalem of KALEMLER) {
  const r = KAYIT[kalem.ad];
  console.log("");
  console.log("=".repeat(74));
  console.log("KALEM: " + kalem.ad + (r ? "   data/" + r.f : "   🔴 BULUNAMADI"));
  console.log("=".repeat(74));
  if (!r) { gecmeHata++; continue; }
  const ESKI = r.y.s || [];
  console.log("  GİRDİ (canlı):");
  for (const p of ESKI) console.log("     " + p.f + " > " + p.t + "  " + p.d);
  const YENI = bol(ESKI, kalem.bol, kalem.oncesi);
  console.log("  ÜRETİLEN:");
  for (const p of YENI) {
    const k = KUN[p.d] || {};
    const as = k.t ? gn(p.t) - gn(k.t) : 0;
    console.log("     " + p.f + " > " + p.t + "  " + p.d.padEnd(24) +
      "künye " + (k.f || "?") + ">" + (k.t || "?") +
      (as > 0 ? "  AŞIM " + as + (as > TOLERANS ? " 🔴" : " 🟢 tol.içi") : "  🟢"));
  }
  const gunler = [...Object.keys(kalem.bol || {}), ...Object.keys(kalem.oncesi || {})];
  onKosulOttu += sina(ESKI, YENI, gunler, "④ ÖN KOŞUL (BUGÜNKÜ künyeyle)", kalem.oncesi ? "oncesi" : "bol") > 0 ? 1 : 0;
  URETILEN.push({ kalem, ESKI, YENI, gunler, kip: kalem.oncesi ? "oncesi" : "bol" });
}

// Künye önerisi bellekte uygulanır, sınav TEKRARLANIR
for (const [id, y] of Object.entries(KUNYE_ONERISI)) if (KUN[id]) Object.assign(KUN[id], y);
console.log("");
console.log("↳ künye önerisi bellekte uygulandı: " + JSON.stringify(KUNYE_ONERISI));
for (const u of URETILEN) {
  console.log("  " + u.kalem.ad + ":");
  gecmeHata += sina(u.ESKI, u.YENI, u.gunler, "① GEÇME (künye ÖNERİSİYLE)", u.kip);
  const bozuk = u.YENI.map(p => ({ ...p }));
  if (bozuk.length > 1) bozuk[bozuk.length - 2].t = "1750-01-01";
  atesOttu += sina(u.ESKI, bozuk, u.gunler, "② ATEŞLEME (bilerek bozuk)", u.kip) > 0 ? 1 : 0;
}

console.log("");
console.log("C13: geçme=" + (gecmeHata === 0 ? "🟢 TEMİZ" : "🔴 " + gecmeHata) +
  " · ateşleme=" + atesOttu + "/" + URETILEN.length +
  " · ön koşul ÖTTÜ=" + onKosulOttu + "/" + URETILEN.length +
  " (piombino künyesi dar olduğu için ÖTMESİ BEKLENİR)");

if (gecmeHata === 0 && atesOttu === URETILEN.length && process.argv[2] === "--yaz") {
  const bas = fs.readFileSync("denetim/_yama_basligi_avrupa.txt", "utf8");
  const gov = URETILEN.map(u =>
    "  { ad:" + JSON.stringify(u.kalem.ad) + ",\n    s:[" +
    u.YENI.map(p => "{f:" + JSON.stringify(p.f) + ",t:" + JSON.stringify(p.t) +
      ",d:" + JSON.stringify(p.d) + "}").join(",\n       ") +
    "\n    ],\n    kaynak:" + JSON.stringify(u.kalem.kaynak) + " },").join("\n\n");
  fs.writeFileSync("denetim/yer_yama_avrupa_1923.js",
    bas + "\nwindow.YER_YAMA_AVRUPA_1923 = [\n\n" + gov + "\n\n];\n", "utf8");
  console.log("");
  console.log("🟢 YAZILDI: denetim/yer_yama_avrupa_1923.js  (" + URETILEN.length + " kayıt)");
}

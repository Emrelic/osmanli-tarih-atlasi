// ELBA YAMASI — CANLI VERİDEN ÜRETİR, ELLE YAZMAZ (YONTEM §⑥).
//
// 🔴 NİÇİN ÜRETİCİ: Silistre elle yazıldı ve yama 6 dönemin 5'ini SİLİYORDU.
//   Burada mevcut `s:` zinciri OKUNUR ve gün üzerinden BÖLÜNÜR; hiçbir
//   dönem elle kopyalanmaz.
//
// SINAV (aynı betikte, C13):
//   ① KAYBOLAN DÖNEM   eski zincirin her parçası yenide kapsanıyor mu
//   ② BOŞLUK           ardışık dönemler bitişik mi (Değişmez 1)
//   ③ KÜNYE AŞIMI      her dönem künyesini kaç gün aşıyor (tolerans 400)
//   ④ ATEŞLEME         bilerek bozuk bir zincir verilince sınav ötüyor mu
const fs = require("fs"), vm = require("vm");

const HEDEF = "Elba";
const BOL = ["1815-06-09", "1861-03-17"];   // yeni kırılma günleri
const YENI_KIMLIK = { "1815-06-09": "toskana", "1861-03-17": "italya" };
const TOLERANS = 400;

function baglam(y) {
  const c = { window: {} }; vm.createContext(c);
  vm.runInContext(fs.readFileSync(y, "utf8"), c); return c.window;
}
const KUN = {};
for (const k of (baglam("data/devletler.js").DEVLETLER || [])) KUN[k.id] = k;

// GİRDİ: gerçek dosyadan (C13 ③)
let kayit = null;
for (const f of fs.readdirSync("data").filter(x => /^yerlesimler.*\.js$/.test(x))) {
  let w; try { w = baglam("data/" + f); } catch (e) { continue; }
  for (const k of Object.keys(w)) {
    const A = w[k]; if (!Array.isArray(A)) continue;
    for (const y of A) if (y && y.ad === HEDEF) kayit = { y, dosya: f };
  }
}
if (!kayit) { console.log("🔴 " + HEDEF + " BULUNAMADI"); process.exit(2); }
console.log("=== GİRDİ (canlı veriden) — " + HEDEF + " · data/" + kayit.dosya + " ===");
const ESKI = kayit.y.s || [];
for (const p of ESKI) console.log("   " + p.f + " > " + p.t + "  " + p.d);

const gn = (s) => Math.round(Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +s.slice(8, 10)) / 864e5);

// ÜRETİM — mevcut dönemleri bölme günlerinden BÖL
function bol(zincir, gunler) {
  let z = zincir.map(p => ({ f: p.f, t: p.t, d: p.d }));
  for (const g of gunler.slice().sort()) {
    const c = [];
    for (const p of z) {
      if (p.f < g && g < p.t) { c.push({ f: p.f, t: g, d: p.d }); c.push({ f: g, t: p.t, d: p.d }); }
      else c.push(p);
    }
    z = c;
  }
  for (const p of z) if (YENI_KIMLIK[p.f]) p.d = YENI_KIMLIK[p.f];
  return z;
}
const YENI = bol(ESKI, BOL);
console.log("");
console.log("=== ÜRETİLEN ZİNCİR ===");
for (const p of YENI) {
  const k = KUN[p.d] || {};
  const a1 = k.f ? gn(p.f) - gn(k.f) : null, a2 = k.t ? gn(p.t) - gn(k.t) : null;
  const as = Math.max(a2 || 0, a1 !== null && a1 < 0 ? -a1 : 0);
  console.log("   " + p.f + " > " + p.t + "  " + p.d.padEnd(10) +
    "  künye " + (k.f || "?") + ">" + (k.t || "?") +
    (as > 0 ? "   AŞIM " + as + " gün " + (as > TOLERANS ? "🔴" : "🟢 tolerans içi") : "   🟢"));
}

// SINAV
function sina(eski, yeni, ad) {
  const hata = [];
  // ① kaybolan gün-kimlik çifti
  const kap = (g, d) => yeni.some(p => p.f <= g && g < p.t && p.d === d);
  for (const p of eski) {
    for (let g = gn(p.f); g < gn(p.t); g += 1500) {
      const t = new Date(g * 864e5).toISOString().slice(0, 10);
      if (!kap(t, p.d) && !BOL.some(b => t >= b))
        hata.push("KAYBOLAN: " + t + " " + p.d + " artık yok");
    }
  }
  // ② boşluk / örtüşme
  const s = yeni.slice().sort((a, b) => a.f < b.f ? -1 : 1);
  for (let i = 1; i < s.length; i++) {
    if (s[i].f > s[i - 1].t) hata.push("BOŞLUK: " + s[i - 1].t + " -> " + s[i].f);
    if (s[i].f < s[i - 1].t) hata.push("ÖRTÜŞME: " + s[i].f + " < " + s[i - 1].t);
  }
  // ③ künye aşımı
  for (const p of yeni) {
    const k = KUN[p.d]; if (!k) { hata.push("KÜNYE YOK: " + p.d); continue; }
    if (k.t && gn(p.t) - gn(k.t) > TOLERANS)
      hata.push("KÜNYE AŞIMI: " + p.d + " " + (gn(p.t) - gn(k.t)) + " gün > " + TOLERANS);
    if (k.f && gn(k.f) - gn(p.f) > TOLERANS)
      hata.push("KÜNYE ERKEN: " + p.d + " " + (gn(k.f) - gn(p.f)) + " gün > " + TOLERANS);
  }
  console.log("");
  console.log("--- SINAV: " + ad + " ---");
  if (!hata.length) console.log("   🟢 TEMİZ");
  else for (const h of hata) console.log("   🔴 " + h);
  return hata.length;
}
const gecme0 = sina(ESKI, YENI, "ÖN KOŞUL (BUGÜNKÜ künyeyle — ötmeli)");

// Künye önerisi BELLEKTE uygulanır: yama tek başına inemez, ikisi BİRLİKTE ölçülür.
const KUNYE_ONERISI = { piombino: { t: "1815-06-09" } };
for (const [id, y] of Object.entries(KUNYE_ONERISI)) Object.assign(KUN[id], y);
console.log("");
console.log("   ↳ künye önerisi bellekte uygulandı: piombino t: 1548-01-01 -> 1815-06-09");
const gecme = sina(ESKI, YENI, "GEÇME (künye önerisi UYGULANMIŞ hâlde)");

// ④ ATEŞLEME — bilerek bozuk zincir
const bozuk = YENI.map(p => ({ ...p }));
bozuk[1].t = "1750-01-01";                       // boşluk aç
const ates = sina(ESKI, bozuk, "ATEŞLEME (bilerek bozuk)");
console.log("");
console.log("C13: geçme=" + (gecme === 0 ? "🟢 TEMİZ" : "🔴") +
  " · ateşleme=" + (ates > 0 ? "🟢 ÖTTÜ (" + ates + ")" : "🔴 ÖTMEDİ"));

if (gecme === 0 && ates > 0 && process.argv[2] === "--yaz") {
  const yol = "denetim/yer_yama_avrupa_1923.js";
  const gov = YENI.map(p => "{f:" + JSON.stringify(p.f) + ",t:" + JSON.stringify(p.t) +
    ",d:" + JSON.stringify(p.d) + "}").join(",\n     ");
  const m = [
    "// -*- coding: utf-8 -*-",
    "// AVRUPA — 1923 SINIR DENETİMİ · yerleşim sahiplik yaması",
    "// Oturum: AVRUPA · koordinatör 1.MURAT HÜDAVENDİGAR",
    "// 🔒 data/ DONUK (koşu 7b) — bu dosya denetim/ altında BEKLİYOR.",
    "// ÜRETİLDİ, elle yazılmadı: denetim/ARAC-AVRUPA-YAMA-URET-0906.js --yaz",
    "//",
    "// KALEM: piombino — künye t:1548-01-01, veri 1923-10-29 (375,8 yıl).",
    "// ÖLÇÜM iki AYRI kusur buldu, çareleri TERS yönde (§3.5.0):",
    "//   ② KÜNYE DAR   1548 bir SON değil; Treccani (Enciclopedia Italiana):",
    "//      'nel 1548 ... permettere a costui di presidiare e fortificare",
    "//       Portoferraio e infine di occupare, SIA PURE TEMPORANEAMENTE,",
    "//       Piombino' ve 'solo nel 1557 ... Cosimo si decise a renderlo a",
    "//       Iacopo VI.' ⇒ 1548 GEÇİCİ bir işgal, prenslik 1557'de İADE edildi.",
    "//   ① VERİ FAZLA  Prenslik 1815'te bitti: 'Caduto Napoleone, con l'atto",
    "//      finale del congresso di Vienna, Piombino fu unita alla Toscana.'",
    "//      ⇒ 1815-1923 arası (108,4 yıl) GERÇEK anakronizm; 1548-1815 arası",
    "//        (267,4 yıl) ise veri DOĞRU, künye DAR.",
    "//",
    "// GÜN SEÇİMİ — ikisi de KOMŞUNUN kullandığı gün (YONTEM §③) VE çekirdekte",
    "// 0 gün uzaklıkta, konusu BİREBİR ilgili maddesi var:",
    "//   1815-06-09  36 kayıt kullanıyor · çekirdek: 'Viyana Kongresi Nihai Senedi'",
    "//   1861-03-17  36 kayıt kullanıyor · çekirdek: 'İtalya Krallığı'nın ilânı'",
    "//   (1860-03-22 = toskana künyesinin t:'si — atlasta HİÇBİR kayıt kullanmıyor,",
    "//    ve o gün çekirdekte en yakın madde 66 gün ve ALAKASIZ ⇒ KULLANILMADI.)",
    "//",
    "// EMSAL — Toskana kutusundaki 3 nokta AYNISINI yapıyor, ölçüldü:",
    "//   Floransa · Pisa · Siena  hepsi 'toskana' -> 1861-03-17 -> 'italya'",
    "//   toskana künyesi 1860-03-22'de bitiyor ⇒ 360 gün aşım, tolerans 400 (🟢)",
    "// Napolyon ara dönemleri (1801/1805/1809/1814) YAZILMADI: emsal noktaların",
    "// HİÇBİRİ onları ifade etmiyor (Floransa 1281->1861 tek blok) ⇒ tek başıma",
    "// bir tanecik açmıyorum (§11: model ifade edemiyorsa veri SUSAR).",
    "//",
    "// 🔴 KÜNYE ÖN KOŞULU: bu yama TEK BAŞINA İNEMEZ — `piombino` künyesinin",
    "//   t:'1548-01-01' -> '1815-06-09' GENİŞLETİLMESİ gerekiyor, yoksa dönem",
    "//   künyeyi 96.767 gün aşar. Künye önerisi: denetim/YAMA-KUNYE-AVRUPA-0906.json",
    "//   Renk: piombino #d86c24 · toskana #b484f3 · italya #74a074 — ÜÇÜ DE VAR.",
    "",
    "window.YER_YAMA_AVRUPA_1923 = [",
    "",
    "  { ad:" + JSON.stringify(HEDEF) + ",",
    "    s:[" + gov,
    "    ],",
    "    kaynak:\"Treccani, Enciclopedia Italiana, 'Piombino' — 1548 geçici işgal " +
    "('sia pure temporaneamente'), 1557 iade ('solo nel 1557 ... renderlo a Iacopo VI'), " +
    "1805 Elisa Bonaparte, 1815 Viyana Kongresi Nihai Senedi ile Toskana'ya birleştirme " +
    "('con l'atto finale del congresso di Vienna, Piombino fu unita alla Toscana'). " +
    "TDV kapsam dışı — 'piza' slug 302 ölü, Batı Avrupa TDV kapsamı %0 (§4). " +
    "Britannica 'Elba' HTTP 403 ⇒ ÖLÇÜLEMEDİ, 'kaynak yok' DEĞİL.\" },",
    "",
    "];",
    ""].join("\n");
  fs.writeFileSync(yol, m, "utf8");
  console.log("");
  console.log("🟢 YAZILDI: " + yol);
}

// DUNYA-KRONO-0081 · H-0044 — "Osmanlı kronolojisi boyunca dünyanın en önemli olayları anılıyor mu?"
// Evren: data/olaylar*.js (ANA kronoloji, `olaylar`) + data/kronoloji*.js (KUYRUK / devlet kronolojileri).
// Liste: 1281-1923 arası 50 dünya olayı (Osmanlı'nın kendi olayları HARİÇ); arama `b` + `d` alanında regex.
// Kullanım: node denetim/ARAC-DUNYA-KRONO-0081-KAPSAM.js
const fs = require("fs"), path = require("path"), vm = require("vm");
const D = path.join(__dirname, "..", "data");
function yukle(desen) {
  const ctx = { window: {} }; ctx.window.window = ctx.window; vm.createContext(ctx);
  const out = [];
  for (const f of fs.readdirSync(D).filter(f => desen.test(f)).sort()) {
    const once = new Set(Object.keys(ctx.window));
    try { vm.runInContext(fs.readFileSync(path.join(D, f), "utf8"), ctx, { filename: f }); }
    catch (e) { console.error("OKUNAMADI", f, e.message); continue; }
    for (const k of Object.keys(ctx.window)) if (!once.has(k) && Array.isArray(ctx.window[k]))
      for (const m of ctx.window[k]) if (m && m.t) out.push(Object.assign({ _dosya: f }, m));
  }
  return out;
}
const ANA = yukle(/^olaylar.*\.js$/);
// kronoloji*.js dosyaları DEVLETLER künyesine iliştirilen dizilerdir; biçimleri karışık, yalnız `t`/`b` alınır
const KUY = yukle(/^kronoloji.*\.js$/);
// devletler.js içindeki gömülü kronoloji: DEVLETLER[i].kronoloji
const dctx = { window: {} }; dctx.window.window = dctx.window; vm.createContext(dctx);
vm.runInContext(fs.readFileSync(path.join(D, "devletler.js"), "utf8"), dctx);
const KUNYE = [];
for (const d of (dctx.window.DEVLETLER || [])) for (const m of (d.kronoloji || [])) if (m && m.t) KUNYE.push(Object.assign({ _dosya: "devletler.js:" + d.id }, m));

const LISTE = [
  ["1291", "Akka'nın düşüşü — Haçlıların Levant'tan atılması", /Akk[aâ]/i, 1291, 1291],
  ["1337", "Yüzyıl Savaşları'nın başlaması", /Yüzyıl Savaş/i, 1337, 1340],
  ["1347", "Kara Ölüm (büyük veba)", /Kara Ölüm|büyük veba|Black Death/i, 1346, 1353],
  ["1368", "Ming hanedanının kuruluşu", /Ming/i, 1368, 1368],
  ["1415", "Portekiz'in Septe'yi (Ceuta) alması — denizaşırı yayılmanın başı", /Sept[eia]|Ceuta/i, 1415, 1415],
  ["1450", "Gutenberg matbaası", /Gutenberg|matbaa/i, 1440, 1460],
  ["1453b", "Yüzyıl Savaşları'nın sonu", /Yüzyıl Savaş|Castillon/i, 1453, 1453],
  ["1455", "Güller Savaşı", /Güller Savaş/i, 1455, 1487],
  ["1492a", "Gırnata'nın düşüşü", /Gırnata|Granada|Benî Ahmer|Beni Ahmer/i, 1492, 1492],
  ["1492b", "Kolomb'un Amerika'ya varışı", /Kolomb|Columbus/i, 1492, 1493],
  ["1494", "Tordesillas Antlaşması", /Tordesillas/i, 1494, 1494],
  ["1498", "Vasco da Gama'nın Hindistan'a varışı", /Vasco|Gama/i, 1497, 1499],
  ["1517", "Luther — Reform'un başlangıcı", /Luther|Reform/i, 1517, 1521],
  ["1519", "Macellan seferi — dünyanın dolaşılması", /Macellan|Magellan|Elcano/i, 1519, 1522],
  ["1521", "Tenochtitlan'ın düşüşü — Aztek'in sonu", /Tenochtitl|Aztek/i, 1519, 1521],
  ["1526", "I. Panipat — Bâbürlü Devleti'nin kuruluşu", /Panipat|Bâbür|Babür/i, 1526, 1526],
  ["1533", "Cuzco'nun düşüşü — İnka", /Cuzco|İnka|Inka/i, 1532, 1533],
  ["1555", "Augsburg Din Barışı", /Augsburg/i, 1555, 1555],
  ["1572", "Saint-Barthélemy katliamı", /Barth[ée]lemy|Bartelemi/i, 1572, 1572],
  ["1581", "Felemenk'in bağımsızlık ilânı", /Felemenk|Hollanda|Utrecht Birliği/i, 1579, 1581],
  ["1588", "İspanyol Armadası'nın yenilgisi", /Armada/i, 1588, 1588],
  ["1598", "Nantes Fermanı", /Nantes/i, 1598, 1598],
  ["1600", "İngiliz / Felemenk Doğu Hindistan Şirketleri", /Doğu Hindistan Şirket|East India|VOC/i, 1600, 1602],
  ["1603", "Tokugawa şogunluğu", /Tokugawa|Edo/i, 1600, 1603],
  ["1618", "Otuz Yıl Savaşları'nın başlaması", /Otuz Yıl|Prag.*pencere/i, 1618, 1618],
  ["1644", "Ming'in düşüşü — Çing hanedanı", /Çing|Qing|Mançu|Ming/i, 1644, 1644],
  ["1648", "Vestfalya Barışı", /Vestfalya|Westfal/i, 1648, 1648],
  ["1649", "I. Charles'ın idamı — İngiliz İç Savaşı", /Charles|İngiliz İç Savaş|Cromwell/i, 1642, 1649],
  ["1688", "İngiliz Şanlı Devrimi", /Şanlı Devrim|Glorious|William/i, 1688, 1689],
  ["1703", "Büyük Petro — Petersburg'un kuruluşu", /Petersburg|Petro/i, 1703, 1703],
  ["1713", "Utrecht Antlaşması — İspanya Veraset Savaşı'nın sonu", /Utrecht|Veraset/i, 1713, 1714],
  ["1756", "Yedi Yıl Savaşları", /Yedi Yıl/i, 1756, 1763],
  ["1776", "ABD Bağımsızlık Bildirgesi", /Bağımsızlık Bildirge|Amerika Birleşik|ABD/i, 1776, 1776],
  ["1789", "Fransız İhtilâli", /Bastil|Fransız İhtil|Fransız Devrim/i, 1789, 1789],
  ["1804", "Napolyon'un imparatorluğu", /Napolyon|Napoléon/i, 1804, 1804],
  ["1815a", "Waterloo", /Waterloo/i, 1815, 1815],
  ["1815b", "Viyana Kongresi", /Viyana Kongre/i, 1814, 1815],
  ["1821", "Latin Amerika bağımsızlıkları (Meksika/Peru/Brezilya)", /bağımsızlı/i, 1810, 1825],
  ["1839", "Afyon Savaşı", /Afyon Savaş/i, 1839, 1842],
  ["1848", "1848 devrimleri", /1848|Milletler Baharı/i, 1848, 1848],
  ["1857", "Büyük Hint Ayaklanması — Britanya Hindistanı", /Sipahi|Hint Ayaklan|Britanya Hindistan|Raj/i, 1857, 1858],
  ["1861a", "İtalya Krallığı'nın ilânı", /İtalya Krall|İtalya birli/i, 1861, 1861],
  ["1861b", "ABD İç Savaşı", /İç Savaş|Gettysburg|Konfedera/i, 1861, 1865],
  ["1868", "Meiji Restorasyonu", /Meiji/i, 1867, 1868],
  ["1871", "Alman İmparatorluğu'nun ilânı", /Alman İmparatorluğ|Versay.*Alman|Almanya birli/i, 1871, 1871],
  ["1885", "Berlin Konferansı — Afrika'nın paylaşılması", /Berlin Konferans|Afrika'nın paylaş/i, 1884, 1885],
  ["1905", "Rus-Japon Savaşı (Tsushima)", /Rus-Japon|Tsuşima|Tsushima|Port Arthur/i, 1904, 1905],
  ["1912", "Çin Cumhuriyeti — Çing'in sonu", /Çin Cumhuriyet|Sun Yat|Çing/i, 1911, 1912],
  ["1917", "Bolşevik İhtilâli", /Bolşevik|Ekim Devrim|Rus İhtil/i, 1917, 1917],
  ["1919", "Versay Antlaşması", /Versay|Versailles/i, 1919, 1919],
];
// yalnizB: yalnız başlık (b) — madde o olayın KENDİSİ mi; değilse d içinde ANILIYOR mu
function ara(evren, rx, y1, y2, yalnizB) {
  return evren.filter(m => { const y = +String(m.t).slice(0, 4); return y >= y1 && y <= y2 && rx.test((m.b || "") + (yalnizB ? "" : " " + (m.d || ""))); });
}
const sonuc = {}, satirlar = [];
for (const [k, ad, rx, y1, y2] of LISTE) {
  const a = ara(ANA, rx, y1, y2, true), an = ara(ANA, rx, y1, y2, false),
        q = ara(KUY, rx, y1, y2, true).concat(ara(KUNYE, rx, y1, y2, true));
  // ANA = ana kronolojide BAŞLIK · KUY+an = kuyrukta başlık, anada yalnız metinde anılıyor
  // KUYRUK = yalnız kuyruk/künye · anılır = yalnız metinde · YOK
  const hal = a.length ? "ANA" : q.length ? (an.length ? "KUY+an" : "KUYRUK") : (an.length ? "anılır" : "YOK");
  sonuc[hal] = (sonuc[hal] || 0) + 1;
  const ornek = (a[0] || q[0] || an[0]);
  satirlar.push(`${hal.padEnd(6)} ${k.padEnd(5)} ${ad}` + (ornek ? `  ← ${ornek.t} "${String(ornek.b).slice(0, 60)}" [${ornek._dosya}]` : ""));
}
console.log(satirlar.join("\n"));
console.log("\nLİSTE " + LISTE.length + ": " + JSON.stringify(sonuc));
// ANA kronolojide kapsam:"dis" yüzyıl dağılımı
const yy = {};
for (const m of ANA) { const y = +String(m.t).slice(0, 4); if (y < 1281 || y > 1923) continue;
  const c = Math.floor(y / 100) + 1; yy[c] = yy[c] || { tum: 0, dis: 0 }; yy[c].tum++; if (m.kapsam === "dis") yy[c].dis++; }
console.log("\nANA kronoloji 1281-1923 · yüzyıl: tüm madde / kapsam:'dis'");
for (const c of Object.keys(yy).sort((a, b) => a - b)) console.log(`  ${c}. yy  ${yy[c].tum}  /  ${yy[c].dis}`);
// "dış haber" adayı havuzu: kuyruk + künye kronolojisinde dunya puanına göre (1281-1923)
const havuz = {};
for (const m of KUY.concat(KUNYE)) { const y = +String(m.t).slice(0, 4); if (y < 1281 || y > 1923) continue;
  const p = m.dunya != null ? m.dunya : "yok"; havuz[p] = (havuz[p] || 0) + 1; }
console.log("\nKUYRUK+künye 1281-1923 · dunya puanı dağılımı: " + JSON.stringify(havuz));
console.log(`\nevren: ANA ${ANA.length} madde · KUYRUK ${KUY.length} · künye kronolojisi ${KUNYE.length}`);

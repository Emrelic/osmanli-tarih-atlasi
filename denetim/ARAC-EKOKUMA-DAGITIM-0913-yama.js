// ARAC-EKOKUMA-DAGITIM-0913-yama.js — ek okuma kartlarının bağ alanlarını (olay/baglanti/t) yeniden dağıtır.
// Her değişiklik KART id'sine ÇIPALI: yalnız `id:"<id>"` ile bir sonraki `id:` arasındaki dilimde aranır
// ve TAM OLARAK BİR kez bulunmazsa betik HİÇBİR DOSYAYA YAZMADAN çıkar (D001 · D068).
// Gerekçeler: denetim/EKOKUMA-DAGITIM-0913.md. Kullanım: node denetim/ARAC-EKOKUMA-DAGITIM-0913-yama.js [--kuru]
const fs = require("fs"), path = require("path");
const D = path.join(__dirname, "..", "data");
const NOT = "// 13 Eylül 2026 · EKOKUMA-DAGITIM-0913: bağ alanları (olay/baglanti/t) içerik okunarak yeniden dağıtıldı —\n// gerekçe ve çakışma listesi denetim/EKOKUMA-DAGITIM-0913.md. Kart METİNLERİNE dokunulmadı.\n";
const Y = [
 // ── ekokuma.js
 ["ekokuma.js","zimmi-cizye-millet-duzeni",'olay:["1453-05-29","1421-06-01","1856-02-18"]','olay:["1453-05-29","1839-11-03","1856-02-18"]'],
 ["ekokuma.js","antlasma-karlofca-1699",'olay:["1699-01-26"]','olay:["1699-01-26","1703-01-01"]'],
 ["ekokuma.js","antlasma-berlin-1878",'olay:["1878-07-13"]','olay:["1878-07-13","1878-07-29"]'],
 // ── merak.js
 ["merak.js","karaman-nicin-zor",'baglanti:["1381-01-01","1386-06-01","1397-07-01","1468-01-01","1473-01-01"]','baglanti:["1381-01-01","1381-06-01","1386-06-01","1397-07-01","1415-03-01","1468-01-01","1473-01-01"]'],
 ["merak.js","gurcistan-nicin-alinmadi",'baglanti:["1606-01-01","1723-06-15","1723-08-01"]','baglanti:["1490-01-01","1555-05-29","1606-01-01","1639-05-17","1723-06-15","1723-08-01"]'],
 ["merak.js","kardes-katli-karsilastirmali",'baglanti:["1477-01-01","1513-04-24","1553-10-05","1562-07-23","1603-12-23"]','baglanti:["1477-01-01","1513-04-24","1553-10-05","1562-07-23","1595-01-27","1603-12-23"]'],
 ["merak.js","kadinlar-saltanati",'baglanti:["1534-01-01","1558-04-15","1595-02-01","1651-09-02"]','baglanti:["1534-01-01","1558-04-15","1583-12-07","1595-02-01","1651-09-02"]'],
 ["merak.js","kapitulasyon-zaaf-mi-arac-mi",'baglanti:["1352-01-01","1536-02-18","1580-06-01","1740-05-30"]','baglanti:["1352-01-01","1536-02-18","1580-01-01","1740-05-30","1914-09-09","1923-07-24"]'],
 ["merak.js","i-murad-sehadeti",'baglanti:["1389-06"]','baglanti:["1389-06-15"]'],
 ["merak.js","haclilar-nicin-basarisiz",'baglanti:["1396-09","1444-06-12","1444-08-01","1444-11"]','baglanti:["1396-09-25","1444-06-12","1444-08-01","1444-11-10"]'],
 ["merak.js","canakkale-hisar-ve-zincir",'baglanti:["1452-08-31","1453-04-06","1453-04-22","1453-05-29"]','baglanti:["1354-03-02","1366-08-01","1376-09-01","1395-08-01","1452-08-31","1453-04-06","1453-04-22","1453-05-29"]'],
 ["merak.js","timur-sehzadeleri-baglanma",'baglanti:["1402-07-28","1402-08-01"','baglanti:["1402-03-13","1402-07-28","1402-08-01"'],
 // ── ekokuma_antlasma2.js
 ["ekokuma_antlasma2.js","antlasma-belgrad-1739",'olay: ["1739-09-18"]','olay: ["1739-09-18", "1739-10-03"]'],
 ["ekokuma_antlasma2.js","sebep-sonuc-kasr-i-sirin-1639",'olay: ["1638-12-24", "1639-05-17", "1746-09-04", "1847-05-31"]','olay: ["1638-12-24", "1639-05-17", "1736-03-08", "1746-09-04", "1847-05-31"]'],
 ["ekokuma_antlasma2.js","sebep-sonuc-belgrad-1739",'olay: ["1739-07-22", "1739-09-18", "1739-10-03"]','olay: ["1738-08-01", "1739-07-22", "1739-09-18", "1739-10-03"]'],
 ["ekokuma_antlasma2.js","sebep-sonuc-bukres-1812",'olay: ["1804-02-14", "1806-12-22", "1812-05-28", "1813-10-05"]','olay: ["1804-02-14", "1806-12-22", "1812-05-28", "1813-10-05", "1815-04-23"]'],
 ["ekokuma_antlasma2.js","sebep-sonuc-edirne-1829",'olay: ["1827-10-20", "1828-04-26", "1829-09-14", "1830-02-03"]','olay: ["1821-03-25", "1827-07-06", "1827-10-20", "1828-04-26", "1829-09-14", "1830-02-03", "1834-01-01"]'],
 ["ekokuma_antlasma2.js","sebep-sonuc-paris-1856",'olay: ["1853-10-04", "1856-02-18", "1856-03-30"]','olay: ["1853-10-04", "1856-02-18", "1856-03-30", "1877-04-24", "1878-07-13"]'],
 // ── ekokuma_magazin.js  (magazin kuralı YALNIZ `t`yi okur; `olay` bugün etkisiz — rapor §3)
 ["ekokuma_magazin.js","yavuz-baba-zehir-soylentisi",'t:"1512-04-24", olay:["1512-04-24"]','t:"1512-05-26", olay:["1512-05-26","1512-04-24"]'],
 ["ekokuma_magazin.js","hurrem-nikah-buyu-soylentisi",'t:"1558-04-15", olay:["1558-04-15"]','t:"1534-01-01", olay:["1534-01-01"]'],
 ["ekokuma_magazin.js","abdulhamid-hal-korkusu-hafiye",'olay:["1876-08-31"]','olay:["1876-08-31","1878-05-20"]'],
 // ── ekokuma_mimari.js
 ["ekokuma_mimari.js","mimari-sultanahmet",'olay:["1609-08-09"]','olay:["1606-10-11","1609-08-09"]'],
 // ── ekokuma_edebiyat.js
 ["ekokuma_edebiyat.js","baki-kanuni-mersiyesi",'olay:["1566-09-01"]','olay:["1566-09-01","1566-09-07"]'],
 ["ekokuma_edebiyat.js","baki-selim-culusiyesi",'olay:["1566-09-30"]','olay:["1566-09-24","1566-09-30"]'],
 ["ekokuma_edebiyat.js","nedim-lale-devri",'olay:["1718-01-01"]','olay:["1718-01-01","1718-05-09"]'],
 ["ekokuma_edebiyat.js","nedim-olumu",'olay:["1730-06-01"]','olay:["1730-06-01","1730-09-25"]'],
 // ── ekokuma_savas.js
 ["ekokuma_savas.js","savas-inebahti-1571",'olay:["1571-10-07"]','olay:["1570-07-23","1571-10-07","1572-06-01","1572-06-13","1573-03-07","1574-08-25"]'],
 ["ekokuma_savas.js","savas-preveze-1538",'olay:["1538-09"]','olay:["1537-10-01","1538-09"]'],
 ["ekokuma_savas.js","savas-cerbe-1560",'olay:["1560-01-01","1560-05-14","1560-07-30"]','olay:["1560-03-12","1560-05-14","1560-07-30"]'],
 ["ekokuma_savas.js","savas-mohac-1526",'olay:["1526-08-29"]','olay:["1526-08-29","1526-09-01"]'],
 ["ekokuma_savas.js","savas-caldiran-1514",'olay:["1514-08"]','olay:["1514-08","1514-09-06","1514-09-15","1515-05-19","1515-06-13","1515-09-19"]'],
 ["ekokuma_savas.js","savas-ridaniye-1517",'olay:["1517-01-22"]','olay:["1516-12-21","1517-01-22","1517-01-27","1517-02-15","1517-04-13"]'],
 ["ekokuma_savas.js","savas-mercidabik-1516",'olay:["1516-08"]','olay:["1516-07-30","1516-08","1516-08-28","1516-08-29","1516-09-27"]'],
 ["ekokuma_savas.js","savas-ankara-1402",'olay:["1402-07-28"]','olay:["1399-11-01","1400-08-01","1401-02-01","1402-03-13","1402-07-28","1402-08-01","1402-09-15","1403-03-09"]'],
 ["ekokuma_savas.js","savas-nigbolu-1396",'olay:["1396-09"]','olay:["1395-01-01","1396-09-25"]'],
 ["ekokuma_savas.js","savas-kosova-1389",'olay:["1389-06-15"]','olay:["1388-08-27","1389-06-15"]'],
 ["ekokuma_savas.js","savas-varna-1444",'olay:["1444-11-10"]','olay:["1444-06-12","1444-11-10"]'],
 // ── ekokuma_sh104.js
 ["ekokuma_sh104.js","topkapi-sarayi-insasi",'olay:["1453-05-29","1478-09-01"]','olay:["1453-05-29","1478-01-01","1478-09-01"]'],
 // ── ekokuma_tartisma.js
 ["ekokuma_tartisma.js","ingiltere-kapitulasyon-1580-tartisma",'olay:["1578-01-01","1580-01-01","1581-09-11"]','olay:["1580-01-01"]'],
 // ── ekokuma_kadin.js
 ["ekokuma_kadin.js","kimdir-hurrem-sultan",'olay:["1534-01-01","1555-09-29","1558-04-15"]','olay:["1534-01-01","1536-03-15","1553-10-05","1555-09-29","1558-04-15"]'],
 ["ekokuma_kadin.js","kimdir-nurbanu-sultan",'olay:["1583-12-07"]','olay:["1574-12-22","1583-12-07"]'],
 ["ekokuma_kadin.js","kimdir-safiye-sultan",'olay:["1595-01-16","1598-04-09","1603-01-01"]','olay:["1595-01-16","1595-02-01","1598-04-09","1603-01-01","1603-12-22","1665-10-30"]'],
 ["ekokuma_kadin.js","kimdir-kosem-sultan",'olay:["1623-09-10","1640-02-09","1651-09-02"]','olay:["1623-09-10","1640-02-09","1648-08-08","1651-09-02"]'],
 ["ekokuma_kadin.js","kimdir-mihrimah-sultan",'olay:["1547-01-01","1555-09-29","1566-01-01"]','olay:["1544-12-02","1547-01-01","1555-09-29","1566-01-01"]'],
 ["ekokuma_kadin.js","tartisma-kadinlar-saltanati",'olay:["1595-01-16","1651-09-02"]','olay:["1595-02-01","1651-09-02"]'],
 // ── ekokuma_ekonomi.js
 ["ekokuma_ekonomi.js","iltizam-malikane-esham-zinciri",'olay:["1650-01-01","1695-01-01","1775-06-01"]','olay:["1650-01-01","1695-01-01","1774-07-21","1775-06-01"]'],
 ["ekokuma_ekonomi.js","kapitulasyon-diplomatik-araçtan-mali-bagimliliga",'olay:["1352-01-01","1536-02-18","1740-05-30","1838-08-16","1914-09-09"]','olay:["1352-01-01","1536-02-18","1580-01-01","1612-07-06","1740-05-30","1838-08-16","1914-09-09","1923-07-24"]'],
];
const kuru = process.argv.includes("--kuru");
const metin = {}, hata = [];
for (const [f, id, eski, yeni] of Y) {
  const s = metin[f] ?? (metin[f] = fs.readFileSync(path.join(D, f), "utf8"));
  const re = new RegExp('id:\\s*"' + id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + '"');
  const m = re.exec(s);
  if (!m) { hata.push(`${f} · ${id}: id BULUNAMADI`); continue; }
  const bas = m.index, sonId = s.slice(bas + m[0].length).search(/\bid:\s*"/);
  const son = sonId < 0 ? s.length : bas + m[0].length + sonId;
  const dilim = s.slice(bas, son);
  const n = dilim.split(eski).length - 1;
  if (n !== 1) { hata.push(`${f} · ${id}: eski metin ${n} kez (1 olmalı)`); continue; }
  metin[f] = s.slice(0, bas) + dilim.replace(eski, () => yeni) + s.slice(son);
}
if (hata.length) { console.error("✗ YAMA DURDU, hiçbir dosya yazılmadı:\n  " + hata.join("\n  ")); process.exit(1); }
let dosya = 0;
for (const [f, s0] of Object.entries(metin)) {
  let s = s0;
  if (!s.includes("EKOKUMA-DAGITIM-0913")) s = s.replace(/^window\.(EKOKUMA[A-Z0-9_]*|MERAK)\s*=\s*\[/m, m => NOT + m);
  if (!s.includes("EKOKUMA-DAGITIM-0913")) { console.error("✗ not satırı eklenemedi: " + f); process.exit(1); }
  // ayrıştırılabilirlik + değişken adı korunuyor mu
  global.window = {}; eval(s);
  const adlar = Object.keys(window);
  if (adlar.length !== 1) { console.error("✗ " + f + " beklenmeyen değişkenler: " + adlar); process.exit(1); }
  if (!kuru) fs.writeFileSync(path.join(D, f), s);
  dosya++;
  console.log(`${kuru ? "(kuru) " : ""}✓ ${f} · window.${adlar[0]} · ${window[adlar[0]].length} kart`);
}
console.log(`✓ ${Y.length} değişiklik · ${dosya} dosya${kuru ? " (YAZILMADI)" : ""}`);

// D4-ORTADOGU · GERİYE SARMA G8-G10 (1606 → 1281) — aday olayların atlasta VAR OLUP OLMADIĞINI sayar.
// Salt okuma. Evren: data/olaylar*.js (ÇEKİRDEK) + data/kronoloji*.js (KUYRUK). Eşleşme: ±PENCERE gün VE anahtar kelime.
// Aday listesi bir KAYNAK DEĞİLDİR — yalnız "atlasta var mı" sorusunun anahtarıdır; günler burada kaba (yıl) tutulur.
// Kullanım: node denetim/ARAC-D4-G8G10-SAYIM-0917.js
const fs = require('fs'), path = require('path');
const kok = path.join(__dirname, '..', 'data');
global.window = {};
const dosyaOf = {};
for (const f of fs.readdirSync(kok).filter(f => /^(olaylar|kronoloji).*\.js$/.test(f))) {
  const once = new Set(Object.keys(window));
  try { eval(fs.readFileSync(path.join(kok, f), 'utf8')); } catch (e) {}
  for (const k of Object.keys(window)) if (!once.has(k)) dosyaOf[k] = f;
}
const M = [];
for (const k of Object.keys(window)) if (Array.isArray(window[k])) for (const o of window[k])
  if (o && o.t && o.b) M.push({ t: String(o.t), b: o.b, dosya: dosyaOf[k] || '?' });

// [dalga, yıl-başı, yıl-sonu, anahtar regex, etiket]
const ADAY = [
  ['G8', 1534, 1534, /Bağdat/, 'Irakeyn: Bağdat fethi'],
  ['G8', 1536, 1536, /Tebriz|Irakeyn/, 'Irakeyn seferi sonu'],
  ['G8', 1546, 1546, /Basra/, 'Basra'],
  ['G8', 1548, 1549, /İran seferi|Tebriz|Van/, '1548 İran seferi / Van'],
  ['G8', 1550, 1550, /Lahsa|Hasa/, 'Lahsa'],
  ['G8', 1553, 1554, /Nahçıvan|Nahcıvan|İran seferi/, '1553-54 Nahçıvan seferi'],
  ['G8', 1555, 1555, /Amasya/, 'Amasya Antlaşması'],
  ['G8', 1578, 1578, /Çıldır/, 'Çıldır / 1578 savaşı'],
  ['G8', 1583, 1583, /Meşale|Demirkapı|Derbend/, 'Meşaleler Savaşı / Derbend'],
  ['G8', 1585, 1585, /Tebriz/, 'Tebriz fethi 1585'],
  ['G8', 1590, 1590, /Ferhad|Ferhat|İstanbul Antlaşması|Safev/, 'Ferhat Paşa Antlaşması'],
  ['G8', 1603, 1604, /Tebriz|Revan|Abbas/, 'Şah Abbas karşı taarruzu'],
  ['G8', 1605, 1605, /Sûfiyan|Sufiyan|Urmiye/, 'Sûfiyan'],
  ['G8', 1529, 1529, /Cezayir|Penon|Peñón/, 'Cezayir Peñón'],
  ['G8', 1534, 1535, /Tunus/, 'Tunus 1534-35'],
  ['G8', 1538, 1538, /Aden|Yemen|Hind/, 'Hint seferi / Aden'],
  ['G8', 1551, 1551, /Trablus/, 'Trablusgarp fethi'],
  ['G8', 1554, 1554, /Fas|Tilimsan|Tlemcen/, 'Tilimsan / Fas'],
  ['G8', 1557, 1557, /Habeş|Musavva|Massava/, 'Habeş eyaleti'],
  ['G8', 1569, 1570, /Tunus|Yemen/, '1569-70 Tunus / Yemen'],
  ['G8', 1574, 1574, /Tunus|Halkulvad/, 'Tunus fethi 1574'],
  ['G8', 1578, 1578, /Vâdi|Vadi|Alcácer|Kasr/, 'Vâdi\'l-mehâzin'],
  ['G9', 1473, 1473, /Otlukbeli/, 'Otlukbeli'],
  ['G9', 1467, 1469, /Karakoyunlu|Cihan ?şah/i, 'Karakoyunlu sonu'],
  ['G9', 1501, 1501, /Safevî|Safevi|Şerur|İsmâil|İsmail/, 'Safevî kuruluşu / Şerur'],
  ['G9', 1503, 1508, /Akkoyunlu|Bağdat/, 'Akkoyunlu sonu / Bağdat 1508'],
  ['G9', 1507, 1515, /Hürmüz|Portekiz/, 'Portekiz Hürmüz'],
  ['G9', 1514, 1514, /Çaldıran/, 'Çaldıran'],
  ['G9', 1514, 1514, /Tebriz/, 'Tebriz 1514'],
  ['G9', 1515, 1515, /Dulkadir|Turnadağ|Kemah|Diyarbekir|Diyarbakır/, '1515 Dulkadir/Diyarbekir'],
  ['G9', 1516, 1516, /Mercidabık|Merc/, 'Mercidabık'],
  ['G9', 1517, 1517, /Ridaniye|Kahire|Memlük|Memlûk/, 'Ridaniye / Memlûk sonu'],
  ['G9', 1517, 1517, /Hicaz|Mekke|Haremeyn/, 'Hicaz'],
  ['G9', 1516, 1519, /Cezayir|Oruç|Hızır|Barbaros/, 'Cezayir 1516-19'],
  ['G9', 1497, 1510, /Vasco|Portekiz|Hint/, 'Portekiz Hint Okyanusu'],
  ['G10', 1291, 1291, /Akkâ|Akka/, 'Akkâ 1291 — Haçlıların sonu'],
  ['G10', 1295, 1295, /Gazan|İslâm/, 'Gazan Han İslâm'],
  ['G10', 1335, 1335, /Ebû Saîd|Ebu Said|İlhanlı/, 'İlhanlı sonu'],
  ['G10', 1340, 1360, /Celâyir|Celayir|Çoban|Muzaffer/, 'İlhanlı ardılları'],
  ['G10', 1370, 1370, /Timur/, 'Timur tahta'],
  ['G10', 1387, 1387, /Timur|İsfahan/, 'Timur İsfahan'],
  ['G10', 1393, 1393, /Bağdat|Timur/, 'Timur Bağdat 1393'],
  ['G10', 1395, 1395, /Terek|Toktamış/, 'Terek 1395'],
  ['G10', 1400, 1401, /Halep|Şam|Dımaşk|Bağdat/, 'Timur Suriye/Bağdat 1400-01'],
  ['G10', 1402, 1402, /Ankara/, 'Ankara Savaşı'],
  ['G10', 1405, 1405, /Timur/, 'Timur ölümü'],
  ['G10', 1406, 1410, /Karakoyunlu|Kara Yusuf|Tebriz/, 'Karakoyunlu Tebriz'],
  ['G10', 1420, 1420, /Karakoyunlu|Şahruh|Kara Yusuf/, '1420'],
  ['G10', 1350, 1453, /Akkoyunlu/, 'Akkoyunlu (herhangi)'],
  ['G10', 1428, 1437, /Merîn|Merini|Hafsî|Hafsi|Ziyân|Zeyyân/, 'Mağrip hanedanları'],
  ['G10', 1415, 1415, /Septe|Sebte|Ceuta/, 'Sebte 1415'],
  ['G10', 1291, 1453, /Memlük.*(Kıbrıs|Ermeni|Sis)|Sis/, 'Memlûk–Kilikya/Kıbrıs'],
];
const say = {};
for (const [dg, y0, y1, re, etiket] of ADAY) {
  const hit = M.filter(o => { const y = +o.t.slice(0, 4); return y >= y0 && y <= y1 && re.test(o.b); });
  const cek = hit.filter(o => /^olaylar/.test(o.dosya)).length;
  const k = dg + (hit.length ? ' VAR' : ' YOK');
  say[k] = (say[k] || 0) + 1;
  console.log(`${dg.padEnd(3)} ${String(y0).padEnd(4)} ${etiket.padEnd(34)} ${hit.length ? 'VAR ' + hit.length + ' (çekirdek ' + cek + ')' : '— YOK —'}  ${hit.slice(0, 2).map(o => o.t + ' ' + o.b.slice(0, 50)).join(' | ')}`);
}
console.log(JSON.stringify(say));

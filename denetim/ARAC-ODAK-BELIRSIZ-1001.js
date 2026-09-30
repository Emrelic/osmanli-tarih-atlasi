// ARAC-ODAK-BELIRSIZ — "cozuluyor ama YANLIS YERE" sinifini olcer.
//
// 🔴 SORDUGU SORU, kapinin BUGUN SORMADIGI soru:
//    Bir `yer_id` / `odak_yer` degeri BIRDEN COK noktaya mi cozuluyor,
//    ve o noktalar birbirinden UZAK mi?
//
// Kapi (`arac/odak_cozum.js`) "cozuluyor mu" sorar: `SEHIR.has(o.yer_id)`.
// Havuz hem tam adi hem parantezsiz kokU tasir:
//     SEHIR.add(y.ad);  SEHIR.add(y.ad.split(" (")[0]);   // "app.js'in TEK esnekligi"
// Olculdu: 5483 ad / 4146 kayit ⇒ 1337 ad bu esneklikten geliyor. Esneklik
// dogru eslesmeleri KURTARIR ("Kurtuba" → "Kurtuba (Córdoba)") ama ayni kokU
// paylasan UZAK noktalar arasinda SESSIZ yanlis eslesme URETIR.
//
// 1 Ekim 2026'da bulunan DORT CANLI yanlis yonlendirme (hepsi kapidan geciyordu):
//    Perth → AVUSTRALYA    ama maddeler ISKOCYA (1005 Alba · 1034 Duncan)
//    Radom → SUDAN         ama madde LEHISTAN (1505 NIHIL NOVI)
//    Mora  → ISVEC         ama maddeler YUNANISTAN (Mora despotlugu)
//    Sûr   → UMMAN         ama madde LUBNAN (1124 Kudus Kralligi)
// Dorduna da atlasin TAM adi yazildi ve kapandi (612ea048).
//
// 🔴 NICIN `kusur` KOVASINA KONULMADI: kalan 18 kullanim BUGUN DOGRU
//    cozuluyor — cunku Italya'nin kaydinin adi TAM OLARAK "Roma" ve dizide
//    Queensland'den ONCE geliyor. `kusur` kovasi 0 tolerans tasir; bu 18'i
//    kusur saymak, DOGRU veride kapi otmesi demek olurdu ve kapiya guveni
//    bozar. ⇒ Ayri kova + BEYANLI LISTE (`BILINEN_BELIRSIZ`), tavan degil.
//    Ayni desen: `denetle.py`nin `BILINEN_AYRI` ve `BEYAN_EDILEN_BOSLUK`
//    kumeleri — "cıplak tavan baska bir yerde doganı gizler".
//
// 🔴 KIRILGANLIK BEYANI: 18 kullanimın dogrulugu VERIDEN degil YUKLEME
//    SIRASINDAN geliyor. Bir yerlesim dosyasi yeniden siralanir, bir paket
//    sirasi degisir ya da ikiz nokta daha erken yuklenen bir dosyaya tasinirsa
//    "Roma"nın 42 maddesi SESSIZCE Avustralya'yi gosterir. Kalici care
//    `denetim/ODAK-YANLIS-KITA-1001.md §5`te: cozucu TAM ad eslesmesini
//    parantezsiz kok eslesmesinden ONCE aramali (js/ degisikligi).
//
// KULLANIM:  node denetim/ARAC-ODAK-BELIRSIZ-1001.js [--esik 13] [--hepsi]
//   --hepsi : beyanli listeyi de bas (varsayilan: yalniz BEYANSIZ olanlar)
// CIKIS:  0 temiz · 1 BEYANSIZ belirsizlik var
'use strict';
const fs = require('fs');
const vm = require('vm');
const K = 'C:/atlas/';

// ---- BEYANLI LISTE — 1 Ekim 2026'da olculdu, HEPSI DOGRU cozuluyor ------
// Her satir: ad → o adin DOGRU cozuldugu nokta (gozle dogrulandi).
// 🔴 Bu bir TAVAN DEGIL ADLI LISTEDIR: yeni bir belirsiz ad dogunca oter,
//    eskisi kapandiginda gizlemez.
const BILINEN_BELIRSIZ = {
  // 42 maddede kullaniliyor (29'u kronoloji_italya.js) — Italya'nin kaydinin
  // adi TAM OLARAK "Roma", ikizi "Roma (Queensland)". Dizi sirasi Italya'yi
  // once veriyor. EN KIRILGAN kalem: 42 madde tek bir sıraya bagli.
  'Roma': 'Roma [41,903/12,496] — Italya',
  'La Paz': 'La Paz [-16,5/-68,15] — Bolivya',
  'Santa Fe': 'Santa Fe [35,687/-105,938] — New Mexico',
  'York': 'York [53,959/-1,081] — Ingiltere',
  'Plymouth': 'Plymouth [50,376/-4,143] — Ingiltere',
};

const esikIdx = process.argv.indexOf('--esik');
const ESIK = esikIdx > -1 ? parseFloat(process.argv[esikIdx + 1]) : 13;
const HEPSI = process.argv.indexOf('--hepsi') > -1;

function ctxYeni() {
  const c = { console: { log() {}, warn() {} } };
  c.window = c;
  vm.createContext(c);
  return c;
}
function yukle(c, f) {
  try { vm.runInContext(fs.readFileSync(K + f, 'utf8'), c, { filename: f }); return true; }
  catch (e) { return false; }
}

// ---- havuz: app.js:3101 suzgeci (d/v/s TASIYANLAR) + parantez esnekligi ----
const ctx = ctxYeni();
const veri = fs.readdirSync(K + 'data');
for (const f of veri) if (/^yerlesimler/.test(f) && f.endsWith('.js')) yukle(ctx, 'data/' + f);
const havuz = new Map();          // ad -> [{ad, lat, lon}]
function ekle(ad, kayit) {
  if (!ad) return;
  if (!havuz.has(ad)) havuz.set(ad, []);
  havuz.get(ad).push(kayit);
}
let kayitSayi = 0;
for (const k of Object.keys(ctx)) {
  if (!/^YERLESIMLER/.test(k) || !Array.isArray(ctx[k])) continue;
  for (const y of ctx[k]) {
    if (!y || typeof y.ad !== 'string' || !y.ad) continue;
    if (!((y.d && y.d.length) || (y.v && y.v.length) || (y.s && y.s.length))) continue;
    kayitSayi++;
    const kayit = { ad: y.ad, lat: y.lat, lon: y.lon };
    ekle(y.ad, kayit);
    const kok = y.ad.split(' (')[0];
    if (kok !== y.ad) ekle(kok, kayit);
  }
}

// ---- belirsiz adlar: >=2 kayit VE koordinatlari UZAK ----------------------
const belirsiz = new Map();       // ad -> {adaylar, sapma}
for (const [ad, liste] of havuz) {
  if (liste.length < 2) continue;
  let enUzak = 0;
  for (let i = 0; i < liste.length; i++) {
    for (let j = i + 1; j < liste.length; j++) {
      const a = liste[i], b = liste[j];
      if (typeof a.lat !== 'number' || typeof b.lat !== 'number') continue;
      const d = Math.abs(a.lat - b.lat) + Math.abs(a.lon - b.lon);
      if (d > enUzak) enUzak = d;
    }
  }
  if (enUzak > ESIK) belirsiz.set(ad, { adaylar: liste, sapma: enUzak });
}

// ---- kullanim: hangi madde hangi belirsiz adi yaziyor ---------------------
const kullanim = new Map();       // ad -> [{dosya, t, b}]
const hedef = veri.filter(f => /^(olaylar|kronoloji)/.test(f) && f.endsWith('.js') && !/^paket_/.test(f));
let maddeSayi = 0;
for (const f of hedef) {
  const c2 = ctxYeni();
  if (!yukle(c2, 'data/' + f)) continue;
  for (const k of Object.keys(c2)) {
    if (!/^(OLAYLAR|KRONOLOJI)/.test(k) || !Array.isArray(c2[k])) continue;
    for (const m of c2[k]) {
      if (!m || typeof m !== 'object') continue;
      maddeSayi++;
      for (const alan of ['yer_id', 'odak_yer']) {
        let v = m[alan];
        if (!v) continue;
        if (!Array.isArray(v)) v = [v];
        for (const ad of v) {
          const s = String(ad).trim();
          if (!belirsiz.has(s)) continue;
          if (!kullanim.has(s)) kullanim.set(s, []);
          kullanim.get(s).push({ dosya: f, t: m.t || '?', b: String(m.b || '').slice(0, 54), alan: alan });
        }
      }
    }
  }
}

// ---- rapor ---------------------------------------------------------------
console.log('havuz: %d kayit (d/v/s) · %d ad (parantez esnekligi dahil) · esik %d°',
  kayitSayi, havuz.size, ESIK);
console.log('taranan madde: %d · belirsiz ad: %d · bunlardan KULLANILAN: %d',
  maddeSayi, belirsiz.size, kullanim.size);
console.log('');

const beyansiz = [];
for (const [ad, liste] of kullanim) {
  if (BILINEN_BELIRSIZ[ad]) continue;
  beyansiz.push([ad, liste]);
}

if (HEPSI) {
  console.log('🟢 BEYANLI (dogru cozuldugu gozle dogrulandi):');
  for (const [ad, liste] of kullanim) {
    if (!BILINEN_BELIRSIZ[ad]) continue;
    console.log('   %s  →  %s   (%d madde)', ad.padEnd(14), BILINEN_BELIRSIZ[ad], liste.length);
  }
  console.log('');
}

if (!beyansiz.length) {
  console.log('✓ BEYANSIZ belirsiz odak: 0');
  console.log('  (beyanli %d ad — `--hepsi` ile dokUmU gorulur)', Object.keys(BILINEN_BELIRSIZ).length);
  process.exit(0);
}

console.log('🔴 BEYANSIZ BELIRSIZ ODAK: %d ad — kamera YANLIS yere ucabilir', beyansiz.length);
console.log('   (kapi bunlari GORMEZ: hepsi "cozuluyor")');
for (const [ad, liste] of beyansiz) {
  const b = belirsiz.get(ad);
  console.log('');
  console.log('  "%s"  (sapma %s°, %d madde)', ad, b.sapma.toFixed(0), liste.length);
  for (const a of b.adaylar) console.log('        aday: %s [%s/%s]', a.ad, a.lat, a.lon);
  for (const u of liste.slice(0, 4)) {
    console.log('        kullanim: %s  %s  %s  (%s)',
      u.dosya.replace(/^kronoloji_|^olaylar_/, '').slice(0, 26).padEnd(27), u.t, u.b, u.alan);
  }
}
console.log('');
console.log('CARE: belirsiz kok DEGIL, atlasin TAM adi yazilir.');
console.log('      ornek: yer_id:"Perth" → yer_id:"Perth (İskoçya)"');
console.log('      Gercekten dogru cozuluyorsa BILINEN_BELIRSIZ listesine');
console.log('      GEREKCESIYLE eklenir (tavan degil, ADLI liste).');
process.exit(1);

// ARAC-ODAK-ONER — odaksız maddeye, BAŞLIK METNİNDEN `yer_id` ÖNERİR.
//
// 🔴 ÖNERİR, UYGULAMAZ. Çıktı `denetim/ODAK-ONERI-1001.json`; uygulamayı
//    ayrı bir adım ve ayrı bir karar yapar. Sebebi `D242`: bir adın
//    ÇÖZÜLMESİ, DOĞRU yere çözüldüğü anlamına gelmez.
//
// NİÇİN: 1 Ekim 2026'da yayın kapısı "YENİ KAPSAM: 6 dosyada 245 odaksız"
//   dedi. 245'in 245'inde `yer_id: null` — yani çözülecek bir alan YOK,
//   atanacak bir ad gerekiyor. Ama maddelerin ÇOĞU yer adını başlıkta
//   taşıyor: "Bandiagara'dan Mossi ülkesine", "Shimabara İsyanı",
//   "Opobo devletini ilân etti".
//
// HAVUZ — kapının KENDİ havuzu birebir (arac/odak_cozum.js):
//     d/v/s taşıyan yerleşimler · tam ad + parantezsiz kök
//   Başka bir havuz kurmak "kapıda çözülmeyen" öneri üretirdi.
//
// EŞLEŞME — üç kademe, hepsi TAM KELİME sınırında:
//   ① tam ad       "Bandiagara"        → havuzdaki tam ad
//   ② ekli hâl     "Bandiagara'dan"    → Türkçe kesme + ek
//   ③ ekli hâl     "Shimabara İsyanı"  → ad + boşluk + kelime
//   ⚠️ Alt dizgi eşleşmesi YASAK: "Van" → "Vanuatu", "Ur" → "Urfa".
//
// 🔴 ELENENLER — ve niçin eleme ÖNERMEKTEN önemli:
//   · BELİRSİZ ad (iki uzak noktaya çözülüyor) → ÖNERİLMEZ, ayrı kovaya.
//     `ARAC-ODAK-BELIRSIZ-1001.js`in bulduğu sınıf: "Mora" sekiz maddede
//     İsveç'e uçuyordu ve kapı bunu GÖRMÜYORDU çünkü "çözülüyordu".
//   · BİRDEN ÇOK aday ad geçiyorsa → ÖNERİLMEZ. "Fransa Fildişi Sahili
//     sömürgesini kurdu" cümlesinde hangi nokta odaktır, bu araç bilemez.
//   · Maddenin kendi `dunya`/`onem` alanı önemsizse bile ELENMEZ — bu araç
//     yalnız ADI ölçer, değeri değil.
//
// KULLANIM:  node denetim/ARAC-ODAK-ONER-1001.js [--yaz]
// ÇIKIŞ:     0 her zaman (bu bir KAPI değil, bir ÖNERİCİ)
'use strict';
const fs = require('fs');
const vm = require('vm');
const K = 'C:/atlas/';
const YAZ = process.argv.indexOf('--yaz') > -1;

const HEDEF = [
  'kronoloji_cok_once1281_anadolu.js', 'kronoloji_cok_once1281_ortadogu.js',
  'kronoloji_cok_once1281_hint_amerika.js', 'kronoloji_cok_ince_gd_asya.js',
  'kronoloji_cok_once1281_avrupa.js', 'kronoloji_cok_ince_bati_afrika.js',
];
const ESIK = 13;   // belirsizlik eşiği (derece), ARAC-ODAK-BELIRSIZ ile AYNI

// ─────────────────────────────────────────────────────────────────────────────
// 🔴 ADI YERLEŞİM OLAN AMA METİNDE BAŞKA ŞEY DEMEK OLAN ADLAR
//
// BU, BELİRSİZLİK SINAVININ GÖRMEDİĞİ AYRI BİR SINIFTIR ve onu ilk koşu
// ortaya çıkardı. `ARAC-ODAK-BELIRSIZ` "aynı ad, iki UZAK nokta" arar; bu
// adların havuzda TEK noktası var ⇒ belirsiz SAYILMAZLAR. Ama metin o yeri
// kastetmiyor:
//
//   Bulgar  → havuz: 54,976/49,03  = İDİL (Volga) BULGAR, Kazan yakını
//             madde: "II. Basileios Bulgar Devleti'ni yıkıp…" = BALKAN
//             ⇒ ~2.000 km sapma, ve hiçbir kapı ötmezdi
//   David   → havuz: 8,43/-82,43   = DAVID, PANAMA
//             madde: "Taşir kralı David Anhoghin" = Ermeni KRALI (kişi adı)
//   Sena    → havuz: -17,45/35,03  = SENA, MOZAMBİK
//             madde: "Lakşmanasena Sena tahtına çıktı" = Bengal HANEDANI
//   Roman   → havuz: 46,925/26,93  = ROMAN, ROMANYA
//             madde: "Roman Mstislaviç … öldü" = Rus KNEZİ (kişi adı)
//
// 📌 Üçü KİŞİ/HANEDAN adı, biri DEVLET adı. Ortak nokta: eşleşen kelime
//    maddenin ÖZNESİ, mekânı değil. Bir aracın bunu dizgiden ayırt etmesi
//    için cümleyi ANLAMASI gerekir ⇒ otomatik çare yok, ADLI LİSTE var.
// ⚠️ Liste bir TAVAN DEĞİL: yeni bir ad doğarsa öteki önerilerin arasına
//    karışır ve ancak GÖZLE yakalanır. Bu yüzden araç ÖNERİR, UYGULAMAZ.
//    Uygulayan kişi 57 kalemi tek tek okumak zorundadır — kısayolu yoktur.
// ─────────────────────────────────────────────────────────────────────────────
const KISI_YA_DA_DEVLET = {
  'Bulgar': 'havuzdaki nokta İdil Bulgar (Kazan); Balkan Bulgar devleti kastediliyor',
  'David': 'kişi adı (Ermeni kralı); havuzdaki nokta David, PANAMA',
  'Sena': 'Bengal hanedanı; havuzdaki nokta Sena, MOZAMBİK',
  'Roman': 'kişi adı (Roman Mstislaviç); havuzdaki nokta Roman, ROMANYA',
};

function ctxYeni() {
  const c = { console: { log() {}, warn() {} } };
  c.window = c; vm.createContext(c); return c;
}
function yukle(c, f) {
  try { vm.runInContext(fs.readFileSync(K + f, 'utf8'), c, { filename: f }); return true; }
  catch (e) { return false; }
}

// ---- havuz (kapının havuzu birebir) --------------------------------------
const ctx = ctxYeni();
for (const f of fs.readdirSync(K + 'data'))
  if (/^yerlesimler/.test(f) && f.endsWith('.js')) yukle(ctx, 'data/' + f);

const havuz = new Map();           // ad -> [{ad,lat,lon}]
function ekle(ad, k) {
  if (!ad) return;
  if (!havuz.has(ad)) havuz.set(ad, []);
  havuz.get(ad).push(k);
}
for (const key of Object.keys(ctx)) {
  if (!/^YERLESIMLER/.test(key) || !Array.isArray(ctx[key])) continue;
  for (const y of ctx[key]) {
    if (!y || typeof y.ad !== 'string' || !y.ad) continue;
    if (!((y.d && y.d.length) || (y.v && y.v.length) || (y.s && y.s.length))) continue;
    const k = { ad: y.ad, lat: y.lat, lon: y.lon };
    ekle(y.ad, k);
    const kok = y.ad.split(' (')[0];
    if (kok !== y.ad) ekle(kok, k);
  }
}

// belirsiz adlar (aynı ad, uzak noktalar) — ÖNERİLMEZ
const belirsiz = new Set();
for (const [ad, L] of havuz) {
  if (L.length < 2) continue;
  let en = 0;
  for (let i = 0; i < L.length; i++) for (let j = i + 1; j < L.length; j++) {
    const a = L[i], b = L[j];
    if (typeof a.lat !== 'number' || typeof b.lat !== 'number') continue;
    const d = Math.abs(a.lat - b.lat) + Math.abs(a.lon - b.lon);
    if (d > en) en = d;
  }
  if (en > ESIK) belirsiz.add(ad);
}

// ---- aday adlar: uzundan kısaya (en uzun eşleşme kazanır) ----------------
const adlar = [...havuz.keys()].filter(a => a.length >= 4).sort((a, b) => b.length - a.length);
function kacar(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
// Türkçe harf sınırı: kelime karakteri SAYILMAYAN yerde başlasın/bitsin
const HARF = "A-Za-zÇĞİÖŞÜçğıöşüÂâÎîÛû0-9";
const deseni = new Map();
for (const a of adlar) deseni.set(a, new RegExp(`(^|[^${HARF}])${kacar(a)}($|[^${HARF}])`));

function bul(metin) {
  const tut = [];
  for (const a of adlar) {
    if (!deseni.get(a).test(metin)) continue;
    // daha uzun bir adın içinde kalıyorsa atla ("Benin" ⊂ "Benin Şehri")
    if (tut.some(t => t.includes(a))) continue;
    tut.push(a);
    if (tut.length > 3) break;
  }
  return tut;
}

// ---- odaksız maddeleri tara ---------------------------------------------
const oneri = [], elenen = { belirsiz: [], coklu: [], bulunamadi: [], kisi_devlet: [] };
let tarandi = 0;
for (const f of HEDEF) {
  const c = ctxYeni();
  if (!yukle(c, 'data/' + f)) { console.log('🔴 yüklenemedi: ' + f); continue; }
  for (const key of Object.keys(c)) {
    if (!/^KRONOLOJI/.test(key) || !Array.isArray(c[key])) continue;
    for (const m of c[key]) {
      if (!m || typeof m !== 'object') continue;
      if (m.yer_id || m.odak_yer || m.odak_kimlik || m.odak_kutu_kaynak) continue;
      tarandi++;
      const b = String(m.b || '');
      const ad = bul(b);
      const kayit = { dosya: f, t: m.t || '?', b: b.slice(0, 80) };
      if (!ad.length) { elenen.bulunamadi.push(kayit); continue; }
      const kd = ad.filter(a => KISI_YA_DA_DEVLET[a]);
      if (kd.length) {
        elenen.kisi_devlet.push({ ...kayit, ad: kd, niye: kd.map(a => KISI_YA_DA_DEVLET[a]) });
        continue;
      }
      const bz = ad.filter(a => belirsiz.has(a));
      if (bz.length) { elenen.belirsiz.push({ ...kayit, ad: bz }); continue; }
      if (ad.length > 1) { elenen.coklu.push({ ...kayit, ad }); continue; }
      const nokta = havuz.get(ad[0])[0];
      oneri.push({ ...kayit, yer_id: ad[0], lat: nokta.lat, lon: nokta.lon });
    }
  }
}

console.log('havuz: %d ad · belirsiz ad: %d · eşik %d°', havuz.size, belirsiz.size, ESIK);
console.log('taranan ODAKSIZ madde: %d  (kapı: 245)', tarandi);
console.log('');
console.log('  ✓ TEK ADLI ÖNERİ      : %d', oneri.length);
console.log('  ⚪ birden çok ad       : %d  (hangisi odak, araç bilemez)', elenen.coklu.length);
console.log('  🔴 BELİRSİZ ad         : %d  (iki kıtaya çözülüyor — D242)', elenen.belirsiz.length);
console.log('  🔴 KİŞİ/HANEDAN/DEVLET : %d  (havuzda tek nokta ama metin BAŞKA şey diyor)',
            elenen.kisi_devlet.length);
console.log('  ⚪ hiç ad bulunamadı   : %d', elenen.bulunamadi.length);
console.log('');
const kapanabilir = (100 * oneri.length / (tarandi || 1)).toFixed(0);
console.log('  ⇒ 245 odaksızın %%%s\'i TEK bir adla mekanik kapanabilir.', kapanabilir);
console.log('');
// 🔴 Node'un console.log'u printf GENİŞLİĞİNİ (`%-36s`) TANIMAZ — dizgiyi
//    olduğu gibi basar ve tablo okunmaz hâle gelir. Hizalama elle yapılır.
//    (1 Ekim 2026'da ilk koşuda tam bu oldu: başlıklar `%-36s` diye çıktı.)
const pad = (s, n) => String(s).slice(0, n).padEnd(n);
for (const o of oneri.slice(0, 14))
  console.log('   %s %s  %s → %s', pad(o.dosya.replace('kronoloji_cok_', ''), 26),
              o.t, pad(o.b, 52), o.yer_id);
if (oneri.length > 14) console.log('   … %d öneri daha', oneri.length - 14);
if (elenen.belirsiz.length) {
  console.log('\n  🔴 BELİRSİZ (önerilMEDİ, elle bakılmalı):');
  for (const o of elenen.belirsiz.slice(0, 6))
    console.log('   %s %s  %s', pad(o.dosya.replace('kronoloji_cok_', ''), 26), o.t, o.ad.join(', '));
}

if (YAZ) {
  const yol = K + 'denetim/ODAK-ONERI-1001.json';
  fs.writeFileSync(yol, JSON.stringify({
    not: ('ONERIDIR, UYGULANMADI. Her kalem: dosya · t · b · onerilen yer_id. '
        + 'Havuz kapinin kendi havuzu (d/v/s + parantezsiz kok). BELIRSIZ adlar '
        + 've birden cok ad gecen maddeler BILEREK DISARIDA (D242: cozulmesi '
        + 'dogru yere cozuldugu anlamina gelmez). Uygulamadan once '
        + 'ARAC-ODAK-BELIRSIZ-1001.js iki yonde kosturulur.'),
    olculen: { taranan: tarandi, oneri: oneri.length, coklu: elenen.coklu.length,
               belirsiz: elenen.belirsiz.length, bulunamadi: elenen.bulunamadi.length },
    oneri, elenen,
  }, null, 1) + '\n');
  console.log('\n✓ YAZILDI: denetim/ODAK-ONERI-1001.json');
}
process.exit(0);

// ÖLÇÜM — `d:` alanı KÜNYE id'si mi, yoksa BOYA ANAHTARI mı?
//
// 🔴 DOĞUŞU (5 Eylül 2026): `NEHİR SÜRTÜNME` hayalet nöbetçisini yazarken
// `isg:` alanında 18 kaydın `d:"avusturya"` yazdığını, oysa künye id'sinin
// `habsburg` olduğunu buldu (`harita:"avusturya"`). Ve dürüstçe yazdı:
// *"`s:` alanındaki 899 künyesizin kaçının aynı sebepten olduğunu ÖLÇMEDİM."*
// Bu betik onu ölçer.
//
// ÖLÇÜLEN (5 Eylül 05:33 · girdi.GIRDI_DOSYALARI = 77 dosya):
//   dönem (s+v+isg)  12.438   ·  künye id ile 11.521  ·  HARİTA ANAHTARI 915
//   hiçbiri 2  (ikisi de `__BOSLUK__` — beyan edilmiş kasıtlı boşluk, muaf)
//
// 🟢 VE SONUÇ "915 KUSUR" DEĞİL: dağılım gösteriyor ki bu bir İKİNCİ
//   KİMLİK UZAYI, ve çoğu TASARIM:
//     suleyman-celebi → fetret-suleyman   214   Fetret devri künyeleri
//     musa-celebi · mehmed-celebi · isa-celebi  333   (aynı aile)
//     sirbistan → 4 künye (nemanjic · despotluk · prenslik · krallık)  29
//     bulgaristan → 3 · suud → 3 · arnavutluk → 2
//     avusturya → habsburg  163   ← TEK EŞLEŞME, birebir doğrulanabilir
//
// ⇒ `harita:` anahtarı KABA bir sözlüktür: bir anahtar BİRDEN ÇOK künyeyi
//   temsil edebilir ve `d:"sirbistan"` yazmak *"ardışık Sırp devletleri"*
//   demenin meşru yoludur. Kusur, veri yazımında DEĞİL — **hayalet
//   denetiminin o uzayı GÖREMEMESİNDE.**
//
// 🟢 ÇARESİ (öneri, uygulanmadı): `d:` bir künye id değilse ve bir `harita:`
//   anahtarıysa, dönemi o anahtarı paylaşan künyelerin pencerelerinin
//   BİRLEŞİMİYLE sına. Hiçbiriyle kesişmiyorsa İHLAL. Böylece 915 dönem
//   "görünmez" olmaktan çıkıp DENETLENEBİLİR olur.
//
// KULLANIM:  py denetim/ARAC-HARITA-ANAHTAR-0905-kos.py
const fs = require('fs');
const path = require('path');
const KOK = process.argv[2];

global.window = {};
eval(fs.readFileSync(path.join(KOK, 'data', 'devletler.js'), 'utf8'));
const D = window.DEVLETLER || [];
const idler = new Set(D.map(d => d.id));
const harita = new Map();
for (const d of D) if (d.harita) {
  if (!harita.has(d.harita)) harita.set(d.harita, []);
  harita.get(d.harita).push(d.id);
}

const dosyalar = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
const say = { toplam: 0, kunyeli: 0, harita_anahtari: 0, hicbiri: 0 };
const ornek = {};
const alanSay = {};
let okunamayan = 0;

for (const rel of dosyalar) {
  const p = path.join(KOK, rel);
  // 🔴 SESSİZ ATLAMA YASAK: ilk sürümüm dosyayı bulamayınca sessizce geçti
  //   ve "0 dönem" bastı — 0, "yok" ile "bakmadım"ı ayırmaz.
  if (!fs.existsSync(p)) { console.log('🔴 DOSYA YOK: ' + rel); okunamayan++; continue; }
  global.window = {};
  try { eval(fs.readFileSync(p, 'utf8')); }
  catch (e) { console.log('🔴 OKUNAMADI: ' + rel + ' — ' + e.message); okunamayan++; continue; }
  for (const k of Object.keys(global.window)) {
    const arr = global.window[k];
    if (!Array.isArray(arr)) continue;
    for (const y of arr) {
      if (!y || typeof y !== 'object') continue;
      for (const alan of ['s', 'v', 'isg']) {
        for (const d of (y[alan] || [])) {
          const kim = d && d.d;
          if (!kim) continue;
          say.toplam++;
          alanSay[alan] = (alanSay[alan] || 0) + 1;
          if (idler.has(kim)) { say.kunyeli++; continue; }
          if (harita.has(kim)) {
            say.harita_anahtari++;
            const key = kim + ' -> ' + harita.get(kim).join('|');
            ornek[key] = (ornek[key] || 0) + 1;
          } else {
            say.hicbiri++;
            ornek['(HICBIRI) ' + kim] = (ornek['(HICBIRI) ' + kim] || 0) + 1;
          }
        }
      }
    }
  }
}

console.log('künye ' + D.length + ' · benzersiz harita anahtarı ' + harita.size
            + ' · okunamayan dosya ' + okunamayan);
console.log('dönem (s+v+isg): ' + say.toplam + '  ' + JSON.stringify(alanSay));
console.log('  künye id ile        : ' + say.kunyeli);
console.log('  🔴 HARİTA ANAHTARI  : ' + say.harita_anahtari);
console.log('  ⚪ HİÇBİRİ          : ' + say.hicbiri);
console.log('');
for (const [k, n] of Object.entries(ornek).sort((a, b) => b[1] - a[1]).slice(0, 30))
  console.log('  ' + String(n).padStart(5) + '  ' + k);

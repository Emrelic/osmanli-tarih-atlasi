// SUZGEC-DIZIN-TAMLIK-II v2 — kapsayan kunyeye gore grupla, sonra
// "bu imparatorluk zaten tabi/vassal kunye tutuyor mu" onceligini olc.
global.window = {};
eval(require('fs').readFileSync('data/devletler.js', 'utf8'));
const D = window.DEVLETLER;
const byId = {};
for (const d of D) byId[d.id] = d;

function gunNo(s) {
  const [y, m, g] = s.split('-').map(Number);
  return Date.UTC(y, m - 1, g) / 86400000;
}

const olcum = JSON.parse(require('fs').readFileSync('denetim/OLCUM-DIZIN-TAMLIK-0911.json', 'utf8'));
const adaylar = olcum.metod_b_tekil_ardil_adaylari;

const byBolge = {};
for (const d of D) (byBolge[d.bolge] = byBolge[d.bolge] || []).push(d);

// bir kunyenin devletler.js'te TABI/VASSAL emsali VAR MI? (tabi: alani
// olan herhangi bir kunye, "ust" olarak BU id'yi gosteriyor mu?)
// tabi: alani {f,t,ust} seklinde -- ust bir metin (devlet adi) OLABILIR,
// id degil; bu yuzden ad ESLESTIRMESI de deniyoruz (kaba, ama D107
// geregi "tahmin ETTIM" diye ACIKCA yaziliyor).
const tabiKunyeSayisi = {};
for (const d of D) {
  if (d.tabi) {
    for (const t of d.tabi) {
      const ust = (t.ust || '').toLowerCase();
      tabiKunyeSayisi[ust] = (tabiKunyeSayisi[ust] || 0) + 1;
    }
  }
}
console.log('tabi: alaninda gecen UST guc adlari (kac kunye tabi):');
console.log(JSON.stringify(tabiKunyeSayisi, null, 1));

// her aday icin en yakin "kapsayan" kunyeyi bul (ayni bolgede, t'sine
// en yakin baslayan/aktif olan)
function kapsayanBul(k, bolge) {
  const tG = gunNo(k.t);
  const bolgeKunyeleri = byBolge[bolge] || [];
  let en = null, enFark = Infinity;
  for (const d2 of bolgeKunyeleri) {
    if (d2.id === k.id) continue;
    const f2 = gunNo(d2.f), t2 = gunNo(d2.t);
    if (f2 <= tG && tG < t2) {  // tam o anda aktif
      const fark = 0;
      if (fark < enFark) { en = d2; enFark = fark; }
    } else if (Math.abs(f2 - tG) <= 365 * 5) {
      const fark = Math.abs(f2 - tG);
      if (fark < enFark) { en = d2; enFark = fark; }
    }
  }
  return en;
}

const gruplar = {};
for (const a of adaylar) {
  const k = byId[a.id];
  if (!k) continue;
  const kap = kapsayanBul(k, a.bolge);
  const kapId = kap ? kap.id : '(YOK)';
  gruplar[kapId] = gruplar[kapId] || [];
  gruplar[kapId].push(a.id);
}

const siraliGruplar = Object.entries(gruplar).sort((a, b) => b[1].length - a[1].length);
console.log('\nEN BUYUK 20 "KAPSAYAN KUNYE" GRUBU (kac aday bu kunyeye devrediyor gorunuyor):');
for (const [kapId, ids] of siraliGruplar.slice(0, 20)) {
  const kap = byId[kapId];
  console.log(`  ${kapId} (${kap ? kap.bolge : '?'}, ${kap ? kap.tur : '?'})  -> ${ids.length} aday`);
}
console.log('\ntoplam grup sayisi:', siraliGruplar.length);
console.log('"(YOK)" grubu (kapsayan bulunamadi):', (gruplar['(YOK)']||[]).length);

require('fs').writeFileSync(
  process.env.GRUP_OUT || 'gruplar.json',
  JSON.stringify(siraliGruplar, null, 1)
);

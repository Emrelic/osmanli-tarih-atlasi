// TOPLU KÜNYE Mİ, GERÇEK POLITY Mİ? — ve niçin bu ayrım iş sırasını belirliyor.
//
// DOĞUŞU (5 Eylül 2026, `NEHİR SÜRTÜNME` · Makdisu): "`somali` bir SÜZEREN
// mi, ANAKRONİK bir ETİKET mi?" sorusunu şöyle kapattı:
//   ***"`somali` künyesinin kendi adı `Somali SULTANLIKLARI` — ÇOĞUL.
//      Bu bir TOPLU KÜNYE, bir polity değil. Ve bir TOPLU ETİKET SÜZEREN
//      OLAMAZ: kimse 'Somali Sultanlıkları'na tâbi olmaz, çünkü öyle bir
//      merci yok."***
//
// ⇒ VE BU, 41'lik "künye var, veri kullanmıyor" kovasının OPERASYONEL
//   AYIRICISI — hangi kalem BUGÜN yazılabilir, hangisi Emre'nin `v:`
//   kararına BAĞLI:
// ```
// ikame kimlik GERÇEK POLITY  → EZİLMİŞ TÂBİİYET olabilir → çare MODELDE,
//                               ve `v:` kararına bağlı (evfat · kutlughanli)
// ikame kimlik TOPLU ETİKET   → ANAKRONİK ETİKET          → çare VERİDE,
//                               ve BUGÜN yazılabilir (makdisu ✅)
// ```
// ⚠️ BU BİR TARAMA, HÜKÜM DEĞİL: ad kalıbı bir ipucudur. Bir künye çoğul
//   adla anılıp yine de tek bir merci olabilir (`osmanli` değil ama
//   `bulgar-carligi` gibi tekil olanlar da toplu olabilir). Her aday
//   künyenin `ozet` alanı ELDEN okunur.
const fs = require('fs');
const path = require('path');
const KOK = process.argv[2];

global.window = {};
eval(fs.readFileSync(path.join(KOK, 'data', 'devletler.js'), 'utf8'));
const D = window.DEVLETLER || [];

// ÇOĞUL / TOPLULUK işaretleri — Türkçe çokluk ekleri ve topluluk adları
const TOPLU = /(?:lıklar|likler|luklar|lükler|beylikleri|krallıkları|devletleri|hanlıkları|emirlikleri|sultanlıkları|prenslikleri|cumhuriyetleri|şehirleri|konfederasyon|birliği|kabileleri|halkları|toplulukları)/i;

const topluKunye = D.filter(d => TOPLU.test(d.ad || ''));
console.log('künye ' + D.length + ' · ad kalıbı TOPLU görünen: ' + topluKunye.length);
console.log('');
for (const d of topluKunye)
  console.log('  ' + (d.id || '?').padEnd(30) + (d.f || '?') + ' → ' + (d.t || '?')
              + '  [' + (d.bolge || '-') + ']  ' + (d.ad || ''));

// ── ve asıl soru: bu toplu künyeler VERİDE İKAME olarak kullanılıyor mu?
const dosyalar = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
const kullanim = new Map();
for (const rel of dosyalar) {
  const p = path.join(KOK, rel);
  if (!fs.existsSync(p)) { console.log('🔴 DOSYA YOK: ' + rel); continue; }
  global.window = {};
  try { eval(fs.readFileSync(p, 'utf8')); } catch (e) { continue; }
  for (const k of Object.keys(global.window)) {
    const a = global.window[k];
    if (!Array.isArray(a)) continue;
    for (const y of a) {
      if (!y || typeof y !== 'object') continue;
      for (const alan of ['s', 'v', 'isg'])
        for (const per of (y[alan] || []))
          if (per && per.d) {
            if (!kullanim.has(per.d)) kullanim.set(per.d, []);
            kullanim.get(per.d).push([y.ad, per.f, per.t]);
          }
    }
  }
}

console.log('');
console.log('=== TOPLU KÜNYELERİN VERİDEKİ KULLANIMI ===');
console.log('(çok kullanılan bir toplu etiket, altındaki tekil kimlikleri EZİYOR olabilir)');
console.log('');
const satir = [];
for (const d of topluKunye) {
  const k = kullanim.get(d.id) || [];
  if (!k.length) continue;
  // künye penceresinden ÖNCE başlayan dönemler — `makdisu` deseninin imzası
  // 🔴 3 HANELİ YIL TUZAĞI: `"1281-01-01" < "543-01-01"` dizgi olarak TRUE
  //   ("1" < "5") ⇒ `nube` (f:543) için 47 dönemin 47'si "künyeden ÖNCE"
  //   göründü, hepsi YANLIŞ POZİTİF. Bu tuzak aynı gece ÜÇ kez çıktı ve
  //   üçünde de FARKLI YÖNE saptırdı (yanlış negatif · sızıntı · yanlış
  //   pozitif). Çare: yılı DAİMA 4 haneye pedle.
  const ped = s => (s && s.length && s.indexOf('-') < 4)
    ? '0'.repeat(4 - s.indexOf('-')) + s : s;
  const erken = k.filter(([, f]) => f && d.f && ped(f) < ped(d.f));
  satir.push([k.length, erken.length, d.id, d.f, d.t, d.ad]);
}
satir.sort((a, b) => b[1] - a[1] || b[0] - a[0]);
for (const [n, e, id, f, t, ad] of satir) {
  console.log('  ' + String(n).padStart(4) + ' dönem · ' + String(e).padStart(3)
              + ' KÜNYEDEN ÖNCE   ' + id.padEnd(26) + f + '→' + t + '  ' + ad);
  if (e) {
    const ornek = (kullanim.get(id) || []).filter(([, ff]) => ff < f).slice(0, 4);
    console.log('        ' + ornek.map(([a, ff]) => a + ' ' + ff).join(' · '));
  }
}

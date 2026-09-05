// 🔴🔴 `isg:` DEĞİŞMEZ 2'YE GÖRÜNMEZ — kaç gün?
//
// DOĞUŞU (5 Eylül 2026, `NEHİR SÜRTÜNME` · Tunus yaması sınanırken):
// `Değişmez 2` yalnız `d:` ve `v:` dönemlerinin uçlarını **kırılma** sayar
// (`CLAUDE.md`in kendi komutu: `(y.d||[]).concat(y.v||[])`). `isg:` HİÇ
// sayılmıyor. Oysa haritada `isg:` **taralı bir işgal örtüsü** çiziyor —
// yani ekranda GÖRÜNÜR bir değişim var ve denetim onu HİÇ SORMUYOR.
//
//   BOSNA  `d:` 1448→1908 KESİNTİSİZ · `isg:` 1878-07-29 başlıyor
//          ⇒ 1878-07-29'da hiçbir kırılma YOK — işgal görünmez
//   MISIR  `v:` 1805→1914 KESİNTİSİZ · `isg:` 1882-09-13 başlıyor  ⇒ aynı
//
// 📌 Girit vakasının KARDEŞİ:
//   GİRİT  madde DOĞRU, gövde YANLIŞ    → denetim gövdeyi sorgulamıyor
//   BARDO  gövde DEĞİŞİYOR, kırılma YOK → denetim değişimi göremiyor
//
// BU BETİK: her `isg:` döneminin BAŞI ve SONU için
//   (a) o gün `d:`/`v:` tarafında bir kırılma VAR MI (yani Değişmez 2
//       o günü zaten görüyor mu)?
//   (b) ±30 gün içinde bir kronoloji maddesi VAR MI?
// ⇒ (a) YOK ve (b) YOK olan günler, haritada görünüp denetimde görünmeyen
//   ve ÜSTELİK anlatısı da olmayan değişimlerdir.
const fs = require('fs');
const path = require('path');
const KOK = process.argv[2];

// kronoloji
global.window = {};
const K = path.join(KOK, 'data');
for (const f of fs.readdirSync(K))
  if (/^(olaylar|kronoloji).*\.js$/.test(f)) {
    try { eval(fs.readFileSync(path.join(K, f), 'utf8')); } catch (e) {}
  }
const madde = [];
for (const k of Object.keys(global.window)) {
  const a = global.window[k];
  if (!Array.isArray(a)) continue;
  for (const o of a) if (o && o.t) madde.push(o);
}
const tam = s => (s.length === 7 ? s + '-01' : s);
const gun = s => Math.round(Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1,
                                     +(s.slice(8, 10) || 1)) / 864e5);
const maddeGun = madde.map(o => gun(tam(o.t))).sort((a, b) => a - b);
function maddeVar(g) {
  const t = gun(tam(g));
  for (const m of maddeGun) if (Math.abs(m - t) <= 30) return true;
  return false;
}

// veri — `d:`/`v:` kırılma günleri VE `isg:` uçları
const dosyalar = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
const dvKirilma = new Set();
const isgUc = [];
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
      for (const per of (y.d || []).concat(y.v || []))
        for (const d of [per.f, per.t]) if (d) dvKirilma.add(d);
      for (const per of (y.isg || []))
        for (const [d, uc] of [[per.f, 'başı'], [per.t, 'sonu']])
          if (d) isgUc.push([d, uc, y.ad, per.d || '?']);
    }
  }
}

const gorunmez = [], anlatisiz = [];
for (const [d, uc, ad, kim] of isgUc) {
  if (dvKirilma.has(d)) continue;          // Değişmez 2 o günü zaten görüyor
  gorunmez.push([d, uc, ad, kim]);
  if (!maddeVar(d)) anlatisiz.push([d, uc, ad, kim]);
}

console.log('`d:`/`v:` kırılma günü (benzersiz): ' + dvKirilma.size);
console.log('`isg:` uç (başı+sonu)            : ' + isgUc.length);
console.log('');
console.log('🔴 DEĞİŞMEZ 2 GÖRMÜYOR (o gün d:/v: kırılması YOK): ' + gorunmez.length);
console.log('🔴 ve ÜSTELİK ±30 günde MADDE de YOK              : ' + anlatisiz.length);
console.log('');
const grup = new Map();
for (const [d, uc, ad, kim] of gorunmez) {
  const a = d + '|' + uc + '|' + kim;
  if (!grup.has(a)) grup.set(a, []);
  grup.get(a).push(ad);
}
console.log('benzersiz (gün · uç · işgalci) üçlüsü: ' + grup.size);
for (const [a, adlar] of [...grup].sort((x, y) => y[1].length - x[1].length).slice(0, 20)) {
  const [d, uc, kim] = a.split('|');
  console.log('  ' + d + '  ' + uc.padEnd(5) + ' isg:' + kim.padEnd(14)
              + adlar.length + ' nokta' + (maddeVar(d) ? '   (madde VAR)' : '   🔴 MADDE YOK'));
  console.log('     ' + adlar.slice(0, 5).join(' · ') + (adlar.length > 5 ? ' …' : ''));
}

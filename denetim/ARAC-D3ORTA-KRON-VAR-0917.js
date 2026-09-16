// D3-AVRUPA-ORTA — mükerrer kronoloji taraması (GERIYE-SARMA ADIM 2: "önce mevcut maddeleri say")
// Kullanım: node denetim/ARAC-D3ORTA-KRON-VAR-0917.js "1815-06-09|Viyana" "1846-11-16|Krakov" ...
//   her sorgu için: aynı gün (±N gün) ve anahtar kelimeyi taşıyan maddeleri, dosyasıyla basar.
//   Kendi dosyamız (kronoloji_sinir_avrupa_orta.js) HARİÇ tutulur.
const fs = require('fs');
const PAY = Number(process.env.PAY || 3);   // gün
const dosyalar = fs.readdirSync('data').filter(f => /^(olaylar|kronoloji).*\.js$/.test(f) && f !== 'kronoloji_sinir_avrupa_orta.js');
const satirlar = [];
for (const f of dosyalar) {
  for (const l of fs.readFileSync('data/' + f, 'utf8').split('\n')) {
    const m = l.match(/\bt\s*:\s*"(\d{3,4}-\d{2}-\d{2})"/);
    if (m) satirlar.push({ f, t: m[1].padStart(10, '0'), l });
  }
}
const gun = s => Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +s.slice(8, 10)) / 864e5;
const norm = s => s.toLocaleLowerCase('tr').normalize('NFKD').replace(/[̀-ͯ]/g, '');
for (const q of process.argv.slice(2)) {
  const [t, k] = q.split('|');
  const kn = norm(k || '');
  const bul = satirlar.filter(s => Math.abs(gun(s.t) - gun(t)) <= PAY && (!k || norm(s.l).includes(kn)));
  const yil = satirlar.filter(s => s.t.slice(0, 4) === t.slice(0, 4) && k && norm(s.l).includes(kn) && !bul.includes(s));
  console.log(`${q}  →  ±${PAY}g: ${bul.length}  · aynı yıl başka gün: ${yil.length}`);
  for (const s of bul.concat(yil).slice(0, 6)) {
    const b = (s.l.match(/\bb\s*:\s*"([^"]*)"/) || [])[1] || '';
    console.log(`     ${s.t}  ${s.f.padEnd(28)} ${b.slice(0, 70)}`);
  }
}

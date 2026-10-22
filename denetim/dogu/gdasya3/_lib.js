// gdasya3 üretici kitaplığı: kaynak etiketi + alıntı doğrulama
const fs = require('fs');
const D = 'C:/Users/user/AppData/Local/Temp/claude/C--atlas--claude-worktrees-loving-brattain-e1cca0/6caf8387-0483-4635-b50e-aaab3d8a58c2/scratchpad/';
const DOSYA = { coedes: 'coedes.txt', hall: 'hall.txt', suv: 'suv.txt', taylor: 'taylor.txt', scott: 'scott83.txt' };
const metin = {};
function norm(s) {
  return s.replace(/¬\s+/g, '').replace(/(\w)-\s*\n\s*(\w)/g, '$1$2').replace(/\s+/g, ' ').replace(/[“”]/g, '"').replace(/[’‘]/g, "'").toLowerCase();
}
function normB(s) { return s.replace(/¬\s+/g, '').replace(/(\w)-\s*\n\s*(\w)/g, '$1-$2').replace(/\s+/g, ' ').replace(/[“”]/g, '"').replace(/[’‘]/g, "'").toLowerCase(); }
function yukle(k) { if (!metin[k]) { const t = fs.readFileSync(D + DOSYA[k], 'utf8'); metin[k] = [norm(t), normB(t)]; } return metin[k]; }
const kayip = [];
let dogru = 0, parcaSay = 0;
function dogrula(k, q) {
  const [a, b] = yukle(k);
  const parcalar = q.split(/\s*\.\.\.\s*/).filter(Boolean);
  for (const p of parcalar) {
    parcaSay++;
    const n = norm(p), nb = normB(p);
    if (a.includes(n) || b.includes(nb) || a.includes(nb) || b.includes(n)) dogru++; else kayip.push(k + ': ' + p);
  }
}
const ET = {
  coedes: 'Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm ',
  hall: 'Hall, D. G. E., A History of South-East Asia, 4. baskı (London: Macmillan, 1981); archive.org/details/a-history-of-south-east-asia-4th-ed (djvu tam metni bu oturumda okundu), Bölüm ',
  suv: 'Majumdar, R. C., Ancient Indian Colonies in the Far East, cilt II: Suvarnadvipa, Part I: Political History (Dacca, 1937); archive.org/details/Suvarnadvipa (djvu tam metni bu oturumda okundu), ',
  taylor: 'Taylor, K. W., A History of the Vietnamese (Cambridge: Cambridge University Press, 2013); archive.org/details/cambridge-concise-histories-k.-w.-taylor-a-history-of-the-vietnamese-cambridge-university-press-2013 (djvu tam metni bu oturumda okundu), ',
  scott: 'Scott, W. H., "Filipinos in China before 1500", Asian Studies 21 (1983), s. 1-19; asj.upd.edu.ph/mediabox/archive/ASJ-21-1983/scott.pdf (PDF tam metni bu oturumda okundu), '
};
// K(kaynakAnahtari, konum, [alıntılar]) -> etiketli kaynak metni (alıntılar doğrulanır)
function K(k, konum, qs) {
  qs = [].concat(qs);
  for (const q of qs) dogrula(k, q);
  return ET[k] + konum + ': ' + qs.map(q => '«' + q + '»').join(' · ');
}
const J = (...p) => p.filter(Boolean).join(' | ');
function rapor() { return { parcaSay, dogru, kayip }; }
module.exports = { K, J, rapor };

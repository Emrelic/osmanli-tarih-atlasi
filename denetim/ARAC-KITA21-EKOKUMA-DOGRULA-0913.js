// KITA 21 — data/ekokuma_antlasma2.js DOGRULAYICI
// Kullanim: node k21_dogrula.js <proje_koku> <kart_dosyasi>
// Ongoru (D022, kosmadan once yazildi): 16 kart · 8 antlasma + 8 sebep-sonuc · 0 HATA · 1 UYARI (yukleyici)
const fs = require('fs'), path = require('path');
const [KOK, DOSYA] = process.argv.slice(2);
const H = [], U = [];
const hata = (id, m) => H.push(`${id}: ${m}`);

function yukleWin(yol) { global.window = {}; eval(fs.readFileSync(yol, 'utf8')); return window; }

// cekirdek t kumesi (Degismez 2 evreni — buton bu maddelerde cikar)
const CT = new Set();
for (const f of fs.readdirSync(path.join(KOK, 'data')).filter(f => f.startsWith('olaylar') && f.endsWith('.js'))) {
  try { const W = yukleWin(path.join(KOK, 'data', f)); for (const k of Object.keys(W)) if (Array.isArray(W[k])) for (const o of W[k]) CT.add(String(o.t)); } catch (e) {}
}
const AT = new Set((yukleWin(path.join(KOK, 'data/savaslar.js')).ANTLASMALAR || []).map(a => a.t));
const digerId = new Set();
for (const [f, ad] of [['data/ekokuma.js', 'EKOKUMA'], ['data/merak.js', 'MERAK'], ['data/ekokuma_sh104.js', 'EKOKUMA_SH104']]) {
  try { for (const k of (yukleWin(path.join(KOK, f))[ad] || [])) digerId.add(k.id); } catch (e) { U.push(`${f} okunamadi: ${e.message}`); }
}

let K;
try { K = yukleWin(DOSYA).EKOKUMA_ANTLASMA2; } catch (e) { console.log('🔴 EVAL HATASI:', e.message); process.exit(1); }
if (!Array.isArray(K)) { console.log('🔴 window.EKOKUMA_ANTLASMA2 dizi degil'); process.exit(1); }

const TUR = new Set(['antlasma', 'sebep-sonuc']);
const KES = new Set(['kesin', 'tartismali', 'iddia', 'rivayet']);
const TARIH = /^\d{4}-\d{2}-\d{2}$/;
const gorulen = new Set();
const say = {};
for (const k of K) {
  const id = k.id || '(idsiz)';
  say[k.tur] = (say[k.tur] || 0) + 1;
  if (!k.id) hata(id, 'id yok');
  if (gorulen.has(k.id)) hata(id, 'mukerrer id (dosya ici)');
  if (digerId.has(k.id)) hata(id, 'id baska ekokuma/merak dosyasinda VAR');
  gorulen.add(k.id);
  if (!TUR.has(k.tur)) hata(id, 'tur tanimsiz: ' + k.tur);
  if (!KES.has(k.kesinlik)) hata(id, 'kesinlik gecersiz: ' + k.kesinlik);
  if (typeof k.kaynak !== 'string' || !k.kaynak.startsWith('TDV:')) hata(id, 'kaynak yok/TDV: ile baslamiyor');
  if (!Array.isArray(k.olay) || !k.olay.length) hata(id, 'olay bos');
  for (const t of (k.olay || [])) if (!CT.has(t)) hata(id, `olay "${t}" hicbir cekirdek maddenin t'si DEGIL — buton cikmaz`);
  if (typeof k.metin !== 'string' || k.metin.length < 200) hata(id, 'metin yok/kisa (' + (k.metin || '').length + ')');
  if (k.tur === 'antlasma') {
    if (!AT.has(k.olay && k.olay[0])) hata(id, 'antlasma kartinin gunu ANTLASMALAR temel kartiyla eslesmiyor');
    for (const a of Object.keys(k)) if (!['id', 'tur', 'olay', 'metin', 'kesinlik', 'kaynak'].includes(a)) hata(id, 'SON CARE dalinin cizmedigi alan: ' + a);
    // ekKartHtml SON CARE simulasyonu: baslik yok; ozet/metin/kisa/not/bag/aciklama dizgileri basilir
    const basilan = ['ozet', 'metin', 'kisa', 'not', 'bag', 'aciklama'].filter(a => typeof k[a] === 'string' && k[a]).length;
    if (!basilan) hata(id, 'SON CARE dalinda HICBIR sey basilmaz');
  }
  if (k.tur === 'sebep-sonuc') {
    for (const u of ['sebep', 'sonuc']) {
      if (!k[u] || typeof k[u].b !== 'string' || !k[u].b) hata(id, u + '.b yok');
      if (!k[u] || !TARIH.test(k[u].t || '')) hata(id, u + '.t YYYY-MM-DD degil');
    }
    if (typeof k.bag !== 'string' || !k.bag.startsWith('Önemi:')) hata(id, 'bag (onemi) yok');
    if (typeof k.kisa !== 'string' || !k.kisa) hata(id, 'kisa (buton ipucu) yok');
    else if (k.kisa.length > 52) U.push(`${id}: kisa ${k.kisa.length} kr — butonda 51'de kirpilir`);
    if (!Array.isArray(k.zincir)) hata(id, 'zincir dizi degil');
  }
}

const app = fs.readFileSync(path.join(KOK, 'js/app.js'), 'utf8');
if (!app.includes('ekokuma_antlasma2')) U.push('YUKLEYICI: js/app.js "ekokuma_antlasma2" gecmiyor — kartlar ekrana GELMEZ (D099, KITA 12 istegi M-3656)');

console.log(`kart ${K.length} · tur ${JSON.stringify(say)} · cekirdek t kumesi ${CT.size} · ANTLASMALAR ${AT.size}`);
console.log(`HATA ${H.length}`); H.forEach(h => console.log('  🔴 ' + h));
console.log(`UYARI ${U.length}`); U.forEach(u => console.log('  🟡 ' + u));
process.exit(H.length ? 1 : 0);

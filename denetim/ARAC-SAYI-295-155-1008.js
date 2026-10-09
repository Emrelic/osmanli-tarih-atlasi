// ARAC-SAYI-295-155-1008.js — "1923-10-29'u aşan künye" sorusunu İKİ ölçütle sayar (9 Ekim 2026).
// YALNIZ OKUR. Kullanım:  node denetim/ARAC-SAYI-295-155-1008.js <devletler.js yolu> [<ikinci yol>]
// Değerler node vm ile GERÇEKTEN eval edilir (regex yok) — ölçüt B'nin regex'i yalnız
// koordinatörün yöntemini YENİDEN ÜRETMEK için ayrıca, ham metin üzerinde koşar.
const fs = require('fs'), vm = require('vm');
const UC = '1923-10-29';
// SAYIM'ın pad()'i: 1-3 haneli pozitif yıl 4 haneye; MÖ ('-…') dokunulmaz.
const pad = t => (typeof t !== 'string') ? t : t.replace(/^(\d{1,3})(?=-|$)/, m => m.padStart(4, '0'));

function oku(yol) {
  const ham = fs.readFileSync(yol, 'utf8');
  const ctx = { window: {} }; ctx.self = ctx.window; vm.createContext(ctx);
  vm.runInContext(ham, ctx, { timeout: 20000 });
  return { ham, D: ctx.window.DEVLETLER };
}

function olc(yol) {
  const { ham, D } = oku(yol);
  const r = { yol, kunye: D.length };
  const ids = new Map();               // SAYIM gibi: ilk görülen id
  for (const k of D) if (k && k.id && !ids.has(k.id)) ids.set(k.id, k);
  r.benzersiz_id = ids.size;
  const L = [...ids.values()];
  const tp = k => (typeof k.t === 'string') ? pad(k.t) : null;
  // ── Ölçüt A (SAYIM, ARAC-SONRA1923-SAYIM.py:162): t yok VEYA pad(t) > UC
  r.A = L.filter(k => tp(k) === null || tp(k) > UC).map(k => k.id).sort();
  r.A_t_yok = L.filter(k => tp(k) === null).map(k => k.id);
  r.A_ge = L.filter(k => tp(k) === null || tp(k) >= UC).map(k => k.id);   // t >= UC
  r.t_esit_UC = L.filter(k => tp(k) === UC).map(k => k.id);
  r.A_padsiz = L.filter(k => typeof k.t !== 'string' || k.t > UC).map(k => k.id).sort();
  r.pad_tuzagi = r.A_padsiz.filter(i => !r.A.includes(i));
  r.f_sonra = L.filter(k => typeof k.f === 'string' && pad(k.f) > UC).map(k => k.id);
  r.f_sonra_A_icinde = r.f_sonra.filter(i => r.A.includes(i)).length;
  r.t_1945_09_02 = L.filter(k => k.t === '1945-09-02').length;
  r.t_dagilim = {};
  for (const i of r.A) { const t = ids.get(i).t || '(yok)'; r.t_dagilim[t] = (r.t_dagilim[t] || 0) + 1; }
  // ── Ölçüt B (koordinatörün regex'i, yeniden üretim): ham metinde HER t:"…" > UC, pad'siz
  const re = /\bt\s*:\s*"([^"]*)"/g; let m; const bt = [];
  while ((m = re.exec(ham))) bt.push(m[1]);
  r.B_regex_padsiz = bt.filter(t => t > UC).length;
  r.B_regex_padli = bt.filter(t => pad(t) > UC).length;
  r.B_regex_toplam_t = bt.length;
  // B'nin bileşenleri — eval ile, nesne YOLU üzerinden
  const kat = { kunye_t: 0, kronoloji_t: 0, baska_ic_t: {} };
  const katP = { kunye_t: 0, kronoloji_t: 0, baska_ic_t: 0 };
  function yuru(x, yol, ust) {
    if (x == null || typeof x !== 'object') return;
    if (Array.isArray(x)) { x.forEach(e => yuru(e, yol, ust)); return; }
    if (typeof x.t === 'string') {
      const sinif = ust ? 'kunye_t' : (/\.kronoloji$/.test(yol) ? 'kronoloji_t' : 'baska_ic_t');
      if (x.t > UC) {
        if (sinif === 'baska_ic_t') kat.baska_ic_t[yol] = (kat.baska_ic_t[yol] || 0) + 1; else kat[sinif]++;
      }
      if (pad(x.t) > UC) katP[sinif]++;
    }
    for (const k of Object.keys(x)) if (x[k] && typeof x[k] === 'object') yuru(x[k], yol + '.' + k, false);
  }
  for (const k of D) yuru(k, 'K', true);
  r.B_bilesen_padsiz = kat; r.B_bilesen_padli = katP;
  return r;
}

const sonuc = process.argv.slice(2).map(olc);
if (sonuc.length === 2) {
  const [a, b] = sonuc;
  sonuc.push({ A_fark: { yalniz_ilk: a.A.filter(i => !b.A.includes(i)), yalniz_ikinci: b.A.filter(i => !a.A.includes(i)) } });
}
process.stdout.write(JSON.stringify(sonuc, null, 1));

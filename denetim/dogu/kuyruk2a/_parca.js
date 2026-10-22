// mevcut parcalari (tum kume yama dosyalari + sinir dosyalari) sehir bazinda toplar -> _parca.json
const vm = require('vm'), fs = require('fs');
const R = 'denetim/dogu/';
const bos = JSON.parse(fs.readFileSync(R + 'kuyruk_bosluk2.json', 'utf8'));
const hedef = bos.map(b => b.ad).filter(a => !/Aror|Gvalyar|Jambi|Kannauc|Pyongyang|Quang|Siy|Urasoe/.test(a));
const out = {}; hedef.forEach(a => out[a] = { yama: [], sinir: [] });
for (const d of fs.readdirSync(R)) {
  const p = R + d; if (!fs.statSync(p).isDirectory() || d === 'kuyruk2a') continue;
  for (const f of fs.readdirSync(p)) {
    if (!/^(yama_|kronoloji_sinir_)/.test(f) || !f.endsWith('.js')) continue;
    const sb = { window: {} }; vm.createContext(sb);
    try { vm.runInContext(fs.readFileSync(p + '/' + f, 'utf8'), sb) } catch (e) { continue }
    for (const k in sb.window) {
      const a = sb.window[k]; if (!Array.isArray(a)) continue;
      for (const r of a) {
        const nm = r.ad || r.yer_id; if (!out[nm]) continue;
        if (r.s_onek) out[nm].yama.push({ dosya: d + '/' + f, onek: r.s_onek });
        else if (r.yer_id) out[nm].sinir.push(Object.assign({ dosya: d + '/' + f }, r));
      }
    }
  }
}
fs.writeFileSync(R + 'kuyruk2a/_parca.json', JSON.stringify(out, null, 1));
for (const a in out) console.log(a, 'yama', out[a].yama.map(y => y.dosya + '(' + y.onek.length + ')').join(','), 'sinir', out[a].sinir.length);

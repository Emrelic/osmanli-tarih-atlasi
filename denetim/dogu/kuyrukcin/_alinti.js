// node _alinti.js -> yama_kuyrukcin.js kaynak alanlarindaki 「..」 ve «..» (CJK) alintilarini onbellekteki wikisource metinlerinde sinar
const fs = require('fs'), path = require('path'), vm = require('vm');
const CACHE = 'C:/Users/user/AppData/Local/Temp/claude/C--atlas--claude-worktrees-loving-brattain-e1cca0/6caf8387-0483-4635-b50e-aaab3d8a58c2/scratchpad/ws';
const DIR = 'C:/atlas/.claude/worktrees/dogu/denetim/dogu/kuyrukcin/';
let corpus = '';
for (const f of fs.readdirSync(CACHE)) if (f.endsWith('.txt')) {
  let t = fs.readFileSync(path.join(CACHE, f), 'utf8');
  t = t.replace(/\{\{YL\|([^}]*)\}\}/g, '$1').replace(/\[\[[^|\]]*\|([^\]]*)\]\]/g, '$1').replace(/\[\[([^\]]*)\]\]/g, '$1').replace(/\{\{[^}]*\}\}/g, '').replace(/<ref>[\s\S]*?<\/ref>/g, '').replace(/-\{([^}]*)\}-/g, '$1').replace(/'''/g, '').replace(/\s+/g, '');
  corpus += '\n' + t;
}
const sb = { window: {} }; vm.createContext(sb); vm.runInContext(fs.readFileSync(DIR + 'yama_kuyrukcin.js', 'utf8'), sb);
const Y = sb.window.YAMA_DOGU_KUYRUKCIN;
const onc = require('./_onceki.js'); let oncMetin = '';
for (const a of Object.keys(onc)) for (const p of onc[a]) oncMetin += p.kaynak.replace(/\s+/g, '');
const cjk = /[\u4e00-\u9fff]/;
let toplam = 0, hata = 0;
for (const y of Y) for (const p of y.s_onek) {
  const re = /[「«]([^」»]+)[」»]/g; let m;
  while ((m = re.exec(p.kaynak))) {
    for (let fr of m[1].split('…')) {
      fr = fr.replace(/\s+/g, '').replace(/^[，。；：、「」『』]+|[，。；：、「」『』]+$/g, '');
      const n = (fr.match(/[\u4e00-\u9fff]/g) || []).length;
      if (n < 4) continue;
      if (oncMetin.includes(fr)) continue;   // onceki kumelerin alintisi: onlarin sorumlulugu
      toplam++;
      if (!corpus.includes(fr)) { hata++; console.log('YOK:', y.ad, p.f, p.d, '|', fr.slice(0, 60)); }
    }
  }
}
console.log('alinti parcasi', toplam, 'bulunamayan', hata);

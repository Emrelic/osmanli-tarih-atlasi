"""mevcut_kunyeler.json (devletler.js dökümü) -> 1281 öncesi başlayan künyelerin TSV'si.
Kullanım (worktree kökünden): py denetim/once1281/mevcut_tsv_uret.py"""
import json, re, collections, io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = json.load(open('denetim/once1281/mevcut_kunyeler.json', encoding='utf-8'))


def yil(s):
    m = re.match(r'(-?\d+)', s or '')
    return int(m.group(1)) if m else None


pre = [d for d in D if yil(d['f']) is not None and yil(d['f']) < 1281]
pre.sort(key=lambda d: (d['bolge'], yil(d['f'])))
with open('denetim/once1281/mevcut_once1281.tsv', 'w', encoding='utf-8') as f:
    f.write('id\tad\ttur\tbolge\tf\tt\tbaskent\n')
    for d in pre:
        f.write('\t'.join(str(d.get(k) or '') for k in ['id', 'ad', 'tur', 'bolge', 'f', 't', 'baskent']) + '\n')
print(len(pre), collections.Counter(d.get('tur') for d in pre))
print([(d['id'], d['f'], d['t']) for d in pre if yil(d['f']) < -3000][:60])

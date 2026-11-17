# -*- coding: utf-8 -*-
"""LAB kayıtlarında kaynağı Britannica olan tanıkları (ilk.tanik, olay[].tanik, kur/ark tanik) listeler: BRITANNICA-YZ/tanik_listesi.json (YZ-özeti bloğu denetimi için; EMRELİC 17 Kasım)."""
import io, json, os, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
out = []
for f in ('hint', 'orta_asya', 'afrika_gb'):
    js = open('data/sehir_tarihce_%s.js' % f, encoding='utf-8').read()
    for x in json.loads(js[js.index('['):js.rindex(']')+1]):
        def ekle(alan, o):
            if not o or not o.get('tanik'): return
            k = o.get('kaynak') or ''
            if not re.search(r'britannica', k, re.I): return
            m = re.search(r'https?://(?:www\.)?britannica\.com/[^\s)\]\'"]+', k)
            out.append({'dosya': f, 'id': x['id'], 'alan': alan, 'url': m.group(0).rstrip('.,;') if m else None, 'kaynak': k[:200], 'tanik': o['tanik']})
        ekle('ilk', x.get('ilk')); ekle('kur', x.get('kur')); ekle('ark', x.get('ark'))
        for i, o in enumerate(x.get('olay') or []): ekle('olay[%d]' % i, o)
os.makedirs('denetim/SEHIR-DUNYA-1116/BRITANNICA-YZ', exist_ok=True)
json.dump(out, open('denetim/SEHIR-DUNYA-1116/BRITANNICA-YZ/tanik_listesi.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('Britannica tanık girdisi', len(out), '| URL\'li', sum(1 for o in out if o['url']), '| benzersiz URL', len({o['url'] for o in out if o['url']}), '| şehir', len({o['id'] for o in out}))

"""arac/girdi_listesi.py GIRDI_DOSYALARI → denetim/dogu/_log/girdi.txt (node araçları için) ·
renkler.py BOYALAR (+ harita: takma adıyla boyalı künyeler) → denetim/dogu/_log/boyalar.json (boyalı kimlikler).
Kullanım: py -I denetim/dogu/girdi_yaz.py   (dongu.py çağırır; BOYALAR için künye bloğu EKLENMEDEN önce de sonra da aynı sonuç — yeni künyelerde harita: yok)"""
import contextlib, io, json, os, re, sys
KOK = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
sys.path.insert(0, os.path.join(KOK, 'arac'))
ns = {}
exec(open(os.path.join(KOK, 'arac', 'girdi_listesi.py'), encoding='utf-8').read(), ns)
os.makedirs(os.path.join(KOK, 'denetim', 'dogu', '_log'), exist_ok=True)
open(os.path.join(KOK, 'denetim', 'dogu', '_log', 'girdi.txt'), 'w', encoding='utf-8').write('\n'.join(ns['GIRDI_DOSYALARI']))
with contextlib.redirect_stdout(io.StringIO()):
    import renkler
boya = set(renkler.BOYALAR)
import girdi
boyali = set(boya)
for k in girdi.oku_devletler():
    h = k.get('harita')
    if k.get('id') and h and h in boya:
        boyali.add(k['id'])
json.dump(sorted(boyali), open(os.path.join(KOK, 'denetim', 'dogu', '_log', 'boyalar.json'), 'w', encoding='utf-8'), ensure_ascii=False)
print('girdi dosyası', len(ns['GIRDI_DOSYALARI']), '· boyalı kimlik', len(boyali))

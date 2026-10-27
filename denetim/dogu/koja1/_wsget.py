# -*- coding: utf-8 -*-
# kullanim: py _wsget.py <lang> <baslik> [<baslik>...]  -> _kaynak/<lang>_<baslik>.txt (duz metin)
import sys, os, json, urllib.request, urllib.parse, re, io, time
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '_kaynak')
os.makedirs(D, exist_ok=True)
lang = sys.argv[1]
for t in sys.argv[2:]:
    u = 'https://%s.wikisource.org/w/api.php?action=query&prop=revisions&rvprop=content&rvslots=main&format=json&formatversion=2&redirects=1&titles=%s' % (lang, urllib.parse.quote(t))
    r = urllib.request.Request(u, headers={'User-Agent': 'AtlasResearch/1.0 (emremre07@gmail.com)'})
    for k in range(3):
        try:
            j = json.load(urllib.request.urlopen(r, timeout=60)); break
        except Exception as e:
            print('hata', e); time.sleep(3); j = None
    if not j: continue
    p = j['query']['pages'][0]
    if 'revisions' not in p:
        print('YOK', t); continue
    s = p['revisions'][0]['slots']['main']['content']
    s = re.sub(r'\{\{[^{}]*\}\}', '', s)
    s = re.sub(r'<[^>]+>', '', s)
    fn = os.path.join(D, lang + '_' + t.replace('/', '_') + '.txt')
    open(fn, 'w', encoding='utf-8').write(s)
    print(t, len(s), fn)
    time.sleep(0.5)

# -*- coding: utf-8 -*-
# kullanim: py _wd.py wd "<ad>" [lang]   -> Wikidata arama + P625 ;  py _wd.py osm "<ad>"  -> Nominatim
import sys, io, json, urllib.request, urllib.parse, time
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
UA = {'User-Agent': 'AtlasResearch/1.0 (emremre07@gmail.com)'}
def get(u):
    for k in range(3):
        try:
            return json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=40))
        except Exception as e:
            print('hata', e); time.sleep(2)
mode, q = sys.argv[1], sys.argv[2]
lang = sys.argv[3] if len(sys.argv) > 3 else 'en'
if mode == 'wd':
    j = get('https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&limit=6&language=%s&search=%s' % (lang, urllib.parse.quote(q)))
    for r in j['search']:
        qid = r['id']
        e = get('https://www.wikidata.org/wiki/Special:EntityData/%s.json' % qid)
        c = e['entities'][qid]['claims'].get('P625')
        co = c[0]['mainsnak']['datavalue']['value'] if c else None
        print(qid, r.get('label'), '|', r.get('description'), '|', (co['latitude'], co['longitude']) if co else None)
        time.sleep(0.3)
else:
    j = get('https://nominatim.openstreetmap.org/search?format=json&limit=5&q=%s' % urllib.parse.quote(q))
    for r in j:
        print(r['lat'], r['lon'], r['display_name'][:100], r.get('type'))
    time.sleep(1.1)

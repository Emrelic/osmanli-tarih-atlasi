"""Wikipedia basliklari -> Wikidata QID -> P625 koordinat. Kullanim: py koord_wikidata.py "Baslik1|Baslik2" """
import sys, io, json, urllib.request, urllib.parse
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
def get(u):
    r = urllib.request.Request(u, headers={'User-Agent': 'atlas-koord/1.0 (denetim)'})
    return json.load(urllib.request.urlopen(r, timeout=30))
tit = sys.argv[1]
d = get('https://en.wikipedia.org/w/api.php?action=query&prop=pageprops&ppprop=wikibase_item&redirects=1&format=json&titles=' + urllib.parse.quote(tit))
q = {}
for p in d['query']['pages'].values():
    q[p.get('pageprops', {}).get('wikibase_item')] = p.get('title')
ids = [k for k in q if k]
e = get('https://www.wikidata.org/w/api.php?action=wbgetentities&props=claims&format=json&ids=' + '|'.join(ids))
for k, v in e['entities'].items():
    c = v.get('claims', {}).get('P625')
    if c:
        val = c[0]['mainsnak']['datavalue']['value']
        print(k, q[k], round(val['latitude'], 4), round(val['longitude'], 4))
    else:
        print(k, q[k], 'P625 YOK')

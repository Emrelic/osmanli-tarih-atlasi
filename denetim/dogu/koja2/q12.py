import sys, json, time, urllib.request, urllib.parse
sys.stdout.reconfigure(encoding='utf8')
def j(u):
    req = urllib.request.Request(u, headers={'User-Agent': 'atlas-tarih-research/1.0 (emremre07@gmail.com)'})
    return json.load(urllib.request.urlopen(req, timeout=40))
for q in sys.argv[1:]:
    d = j('https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&language=en&limit=5&search=' + urllib.parse.quote(q))
    for x in d.get('search', []):
        qid = x['id']
        time.sleep(1)
        e = j('https://www.wikidata.org/wiki/Special:EntityData/' + qid + '.json')['entities'][qid]
        c = e.get('claims', {}).get('P625')
        pos = c[0]['mainsnak']['datavalue']['value'] if c else None
        print(q, qid, x.get('label'), x.get('description'), (pos['latitude'], pos['longitude']) if pos else None)
    time.sleep(1.5)

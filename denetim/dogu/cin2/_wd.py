import sys, io, json, subprocess, urllib.parse
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
# kullanim: py _wd.py "Dongjingcheng" ...  (Wikidata etiketi -> koordinat)
for ad in sys.argv[1:]:
    q = 'SELECT ?i ?l ?d WHERE { ?i rdfs:label "%s"@en; wdt:P625 ?l . OPTIONAL{?i schema:description ?d FILTER(lang(?d)="en")} } LIMIT 6' % ad
    r = subprocess.run(['curl', '-sL', '-m', '40', '-A', 'atlas-research/1.0', '-G', 'https://query.wikidata.org/sparql', '--data-urlencode', 'query=' + q, '-H', 'Accept: application/sparql-results+json'], capture_output=True)
    try:
        j = json.loads(r.stdout.decode('utf-8'))
        for b in j['results']['bindings']:
            print(ad, '|', b['i']['value'].split('/')[-1], '|', b['l']['value'], '|', b.get('d', {}).get('value', ''))
        if not j['results']['bindings']: print(ad, '| YOK')
    except Exception as e:
        print(ad, 'HATA', e)

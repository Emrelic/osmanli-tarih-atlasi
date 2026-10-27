import sys, json, time, urllib.request, urllib.parse
sys.stdout.reconfigure(encoding='utf8')
GN = r'C:\Users\user\AppData\Local\Temp\claude\C--atlas\2e265d3a-21c7-47e9-ac13-c26e0cabd3c6\scratchpad\gaz-geonames1000\cities1000.txt'
names = sys.argv[1:]
rows = []
for line in open(GN, encoding='utf8'):
    p = line.split('\t')
    if p[1] in names or p[2] in names:
        rows.append((p[0], p[1], p[4], p[5], p[8], p[14]))
for r in rows: print('GN', r)
for n in names:
    u = 'https://nominatim.openstreetmap.org/search?format=json&limit=3&q=' + urllib.parse.quote(n)
    req = urllib.request.Request(u, headers={'User-Agent': 'atlas-tarih-research/1.0 (emremre07@gmail.com)'})
    try:
        for x in json.load(urllib.request.urlopen(req, timeout=40)):
            print('OSM', n, x['lat'], x['lon'], x['display_name'][:90])
    except Exception as e:
        print('OSM ERR', n, e)
    time.sleep(1.5)

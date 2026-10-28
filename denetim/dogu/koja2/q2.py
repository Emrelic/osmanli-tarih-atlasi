import sys, json, urllib.request, urllib.parse, time
sys.stdout.reconfigure(encoding='utf8')
def req(u):
    r = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0 atlas-research'})
    return json.load(urllib.request.urlopen(r, timeout=60))
for h, p in (('zh.wikisource.org', '百錬抄'), ('zh.wikisource.org', '扶桑略記'), ('zh.wikisource.org', '日本'), ('zh.wikisource.org','玉葉'), ('ja.wikisource.org','百錬抄'),('ja.wikisource.org','扶桑略記'),('ja.wikisource.org','玉葉')):
    d = req(f"https://{h}/w/api.php?action=query&list=allpages&aplimit=60&format=json&apprefix=" + urllib.parse.quote(p))
    print(h, p, [x['title'] for x in d['query']['allpages']])
    time.sleep(1.5)

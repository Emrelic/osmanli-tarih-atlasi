import sys, json, urllib.request, urllib.parse, re

def _req(u):
    r = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0 atlas-research'})
    return json.load(urllib.request.urlopen(r, timeout=60))

def get(host, title):
    u = f"https://{host}/w/api.php?action=query&prop=revisions&rvprop=content&rvslots=main&format=json&formatversion=2&titles=" + urllib.parse.quote(title)
    p = _req(u)['query']['pages'][0]
    if 'revisions' not in p:
        return None
    return p['revisions'][0]['slots']['main']['content']

def search(host, q, n=20):
    u = f"https://{host}/w/api.php?action=query&list=search&format=json&srlimit={n}&srsearch=" + urllib.parse.quote(q)
    return [x['title'] for x in _req(u)['query']['search']]

if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf8')
    cmd = sys.argv[1]
    if cmd == 'get':
        t = get(sys.argv[2], sys.argv[3])
        if t is None:
            print('YOK'); sys.exit()
        if len(sys.argv) > 4:
            pat = sys.argv[4]
            w = int(sys.argv[5]) if len(sys.argv) > 5 else 150
            for m in re.finditer(pat, t):
                print('>>', t[max(0, m.start() - w):m.end() + w].replace('\n', ' '))
                print()
        else:
            print(len(t)); print(t[:3000])
    else:
        print(search(sys.argv[2], sys.argv[3]))

"""TDV fetcher with cache: py tdv.py slug1 slug2 ...  |  py tdv.py --ara kelime"""
import sys, os, time, json, re, html, urllib.request, urllib.parse, http.client

D = os.path.dirname(os.path.abspath(__file__))
C = os.path.join(D, 'cache'); os.makedirs(C, exist_ok=True)
UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AtlasKaynakDogrula/1.0'
son = [0.0]

def bekle():
    dt = time.time() - son[0]
    if dt < 1.6: time.sleep(1.6 - dt)
    son[0] = time.time()

class NoRedir(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k): return None
op = urllib.request.build_opener(NoRedir)

def getir(url, hdr=None):
    bekle()
    r = urllib.request.Request(url, headers={'User-Agent': UA, **(hdr or {})})
    try:
        with op.open(r, timeout=40) as f:
            return f.status, f.read().decode('utf-8', 'replace'), None
    except urllib.error.HTTPError as e:
        return e.code, '', e.headers.get('Location')
    except Exception as e:
        return 0, '', repr(e)

def govde(h):
    t = re.search(r'<title>(.*?)</title>', h, re.S)
    t = html.unescape(t.group(1)).strip() if t else ''
    # article body: take text of <div class="... text ..."> heuristically: strip tags of main
    b = re.sub(r'<script.*?</script>|<style.*?</style>', ' ', h, flags=re.S)
    b = re.sub(r'<br\s*/?>|</p>', '\n', b)
    b = re.sub(r'<[^>]+>', ' ', b)
    b = html.unescape(b)
    b = re.sub(r'[ \t\r]+', ' ', b)
    b = re.sub(r'\n\s*\n+', '\n', b)
    return t, b

def madde(slug):
    p = os.path.join(C, slug + '.json')
    if os.path.exists(p):
        return json.load(open(p, encoding='utf-8'))
    for den in range(3):
        st, h, loc = getir('https://islamansiklopedisi.org.tr/' + urllib.parse.quote(slug))
        if st in (503, 0):
            time.sleep(8 * (den + 1)); continue
        break
    t, b = govde(h) if h else ('', '')
    o = {'slug': slug, 'status': st, 'loc': loc, 'title': t, 'len': len(b), 'body': b}
    if st in (200, 302, 404):
        json.dump(o, open(p, 'w', encoding='utf-8'), ensure_ascii=False)
    return o

def ara(q):
    st, h, loc = getir('https://islamansiklopedisi.org.tr/ajax_search_auto.php?sp=aa&=ac&q=' + urllib.parse.quote(q),
                       {'X-Requested-With': 'XMLHttpRequest', 'Referer': 'https://islamansiklopedisi.org.tr/'})
    return st, h

if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    if sys.argv[1] == '--ara':
        for q in sys.argv[2:]:
            st, h = ara(q); print('ARA', q, st, h[:1500]); print()
    else:
        for s in sys.argv[1:]:
            o = madde(s); print(s, o['status'], o['loc'], '|', o['title'], '| len', o['len'])

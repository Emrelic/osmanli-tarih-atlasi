"""py web.py ad url  -> cache/web_<ad>.json (status, title, body)"""
import sys, os, json, time, re, html, urllib.request
sys.stdout.reconfigure(encoding='utf-8')
D = os.path.dirname(os.path.abspath(__file__))
UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36'
ad, url = sys.argv[1], sys.argv[2]
p = os.path.join(D, 'cache', 'web_' + ad + '.json')
time.sleep(1.6)
try:
    r = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept-Language': 'en-US,en;q=0.9', 'Accept': 'text/html'})
    with urllib.request.urlopen(r, timeout=40) as f:
        st, h, fin = f.status, f.read().decode('utf-8', 'replace'), f.geturl()
except urllib.error.HTTPError as e:
    st, h, fin = e.code, '', url
except Exception as e:
    st, h, fin = 0, '', repr(e)
t = re.search(r'<title>(.*?)</title>', h, re.S)
t = html.unescape(t.group(1)).strip() if t else ''
b = re.sub(r'<script.*?</script>|<style.*?</style>', ' ', h, flags=re.S)
b = re.sub(r'<br\s*/?>|</p>|</h\d>|</li>', '\n', b)
b = html.unescape(re.sub(r'<[^>]+>', ' ', b))
b = re.sub(r'[ \t\r]+', ' ', b); b = re.sub(r'\n\s*\n+', '\n', b)
json.dump({'url': url, 'final': fin, 'status': st, 'title': t, 'body': b}, open(p, 'w', encoding='utf-8'), ensure_ascii=False)
print(ad, st, fin, '|', t, '| len', len(b))

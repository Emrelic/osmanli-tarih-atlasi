"""Kullanim: py _srch.py "<arama>" [n=10]  -> zh.wikisource tam metin aramasi: baslik + parca."""
import sys, io, json, subprocess, urllib.parse, re, html
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
q = sys.argv[1]; n = sys.argv[2] if len(sys.argv) > 2 else '10'
url = 'https://zh.wikisource.org/w/api.php?action=query&list=search&format=json&srlimit=%s&srsearch=%s' % (n, urllib.parse.quote(q))
r = subprocess.run(['curl', '-sL', '-m', '40', '-A', 'Mozilla/5.0', url], capture_output=True)
j = json.loads(r.stdout.decode('utf-8', 'replace'))
for x in j.get('query', {}).get('search', []):
    s = html.unescape(re.sub(r'<[^>]+>', '', x['snippet']))
    print(x['title'], '|', s.replace('\n', ' '))

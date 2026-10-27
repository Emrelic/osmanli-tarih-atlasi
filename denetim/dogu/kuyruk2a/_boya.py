import re, json, subprocess, io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
renk = io.open('arac/renkler.py', encoding='utf8').read()
js = io.open('denetim/dogu/kuyruk2a/yama_kuyruk2a.js', encoding='utf8').read()
ids = sorted(set(re.findall(r'"d": "([a-z0-9\-_]+)"', js)))
ids = [i for i in ids if i != '__BOSLUK__']
yok = [i for i in ids if not re.search(r'["\']' + re.escape(i) + r'["\']\s*:', renk)]
print('kullanilan', len(ids), 'BOYALAR disinda', len(yok))
print(' '.join(yok))

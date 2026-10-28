"""Kullanim: py getmetin.py URL ANAHTAR [pencere]  -> sayfayi indirir, etiketleri atar, ANAHTAR cevresini basar."""
import sys, re, io, urllib.request
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
u, key = sys.argv[1], sys.argv[2]
w = int(sys.argv[3]) if len(sys.argv) > 3 else 700
r = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
try:
    t = urllib.request.urlopen(r, timeout=40).read().decode('utf-8', 'ignore')
except Exception as e:
    print('HATA', u, e); sys.exit(0)
t = re.sub(r'<script.*?</script>', ' ', t, flags=re.S); t = re.sub(r'<style.*?</style>', ' ', t, flags=re.S)
t = re.sub(r'<[^>]+>', ' ', t); t = re.sub(r'\s+', ' ', t)
print('UZUNLUK', len(t))
n = 0
for m in re.finditer(key, t):
    print('...', t[max(0, m.start() - 150):m.start() + w], '...'); n += 1
    if n >= 3: break
if n == 0: print('ANAHTAR YOK; ilk 300:', t[:300])

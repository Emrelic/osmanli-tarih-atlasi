# -*- coding: utf-8 -*-
"""PILOT_A/B.json ad_kaynak girdilerinin 'kanit' alıntısını kaynak sayfasında arar (açık sayfa; TDV/Banglapedia/encyclopedia.com).
Her URL ≥10 sn arayla bir kez çekilir; kanit normalize edilmiş sayfa metninde geçiyorsa OK, geçmiyorsa 'YOK', sayfa çekilemezse 'ERISILEMEDI'.
Çıktı: KANIT-DOGRULAMA.tsv (id, ad, dil, kaynak, durum). SALT OKUR (yalnız GET)."""
import csv, html, io, json, os, re, sys, time, unicodedata, urllib.request
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = os.path.dirname(os.path.abspath(__file__))
def norm(s):
    s = unicodedata.normalize('NFKD', html.unescape(s or '')).lower()
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return re.sub(r'[^\w]+', ' ', s).strip()
def sayfa(u, onbellek={}):
    if u in onbellek: return onbellek[u]
    time.sleep(10)
    try:
        r = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0 (akademik-okuma)'})
        t = urllib.request.urlopen(r, timeout=40).read().decode('utf-8', 'replace')
        t = re.sub(r'<script.*?</script>|<style.*?</style>', ' ', t, flags=re.S)
        t = norm(re.sub(r'<[^>]+>', ' ', t))
    except Exception as e:
        t = None
    onbellek[u] = t
    return t
out = []
GIRDI = sys.argv[1:] or ['PILOT_A.json', 'PILOT_B.json']          # örn: DALGA2_1.json
CIKTI = os.environ.get('KANIT_CIKTI', 'KANIT-DOGRULAMA.tsv')
for f in GIRDI:
    for s in json.load(open(os.path.join(D, f), encoding='utf-8')):
        for e in s['ad_kaynak']:
            m = re.search(r'https?://[^\s)\]]+', e.get('kaynak', ''))
            if not m: out.append([s['id'], e['ad'], e.get('dil', ''), e.get('kaynak', '')[:80], 'URL_YOK']); continue
            u = m.group(0).rstrip('.,;')
            if not re.search(r'islamansiklopedisi|banglapedia|encyclopedia\.com', u):
                out.append([s['id'], e['ad'], e.get('dil', ''), u, 'DOGRULANMADI_(kaynak_türü)']); continue
            t = sayfa(u)
            if t is None: d = 'ERISILEMEDI'
            else: d = 'OK' if norm(e.get('kanit', '')) and norm(e['kanit']) in t else 'YOK'
            out.append([s['id'], e['ad'], e.get('dil', ''), u, d])
with open(os.path.join(D, CIKTI), 'w', encoding='utf-8', newline='') as fo:
    w = csv.writer(fo, delimiter='\t'); w.writerow(['id', 'ad', 'dil', 'kaynak_url', 'durum']); w.writerows(out)
from collections import Counter
print(Counter(r[4] for r in out))

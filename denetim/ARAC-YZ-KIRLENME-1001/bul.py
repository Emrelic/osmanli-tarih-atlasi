"""py bul.py slug kelime1 [kelime2 ...] -> sentences containing any keyword (case-insens.)"""
import json, re, sys, os
sys.stdout.reconfigure(encoding='utf-8')
D = os.path.dirname(os.path.abspath(__file__))
s = sys.argv[1]
b = json.load(open(os.path.join(D, 'cache', s + '.json'), encoding='utf-8'))['body'].replace('\n', ' ')
cs = re.split(r'(?<=[.!?])\s+(?=[A-ZÇĞİÖŞÜ“"‘(0-9])', b)
for i, c in enumerate(cs):
    if any(k.lower() in c.lower() for k in sys.argv[2:]) and len(c) < 900 and 'data-width' not in c:
        print(f'[{s}#{i}]', c.strip())

import json, math, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
o = json.load(open('denetim/once1281/amerika/yerlesim_am.json', encoding='utf8'))
def km(a, b):
    p1, p2 = math.radians(a['lat']), math.radians(b['lat']); dl = math.radians(b['lon'] - a['lon']); dp = p2 - p1
    h = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 12742 * math.asin(math.sqrt(h))
n = 0
for i in range(len(o)):
    for j in range(i + 1, len(o)):
        a, b = o[i], o[j]
        if abs(a['lat'] - b['lat']) > 0.1: continue
        d = km(a, b)
        if d < 3:
            n += 1; print(round(d, 2), a['ad'], '|', b['ad'])
print('cift<3km', n)

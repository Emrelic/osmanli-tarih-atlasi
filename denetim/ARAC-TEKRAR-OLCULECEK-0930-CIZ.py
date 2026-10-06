# 🔴 BEYAN (UMIT-W56e, 6 Eki 2026): başka makinenin yolunu okur ve YAZAR (govde modülünü oradan içe aktarır, PNG'yi oraya yazar), bu makinede koşamaz: C:\Users\emrem\AppData\Local\Temp\claude\C--atlas\44714e9d-a694-4c62-bbc0-2660851ade3d\scratchpad
"""py ciz.py <id> <gun> la0 la1 lo0 lo1 -> scratchpad/ciz-<id>.png (gövdeler yarı saydam, binme koyu, noktalar)"""
import json, sys, os, io, contextlib
sys.path.insert(0, 'C:/Users/emrem/AppData/Local/Temp/claude/C--atlas/44714e9d-a694-4c62-bbc0-2660851ade3d/scratchpad')
import govde as G
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from shapely.geometry import box, shape, Polygon
from shapely.ops import unary_union
from shapely import make_valid
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
S = 'C:/Users/emrem/AppData/Local/Temp/claude/C--atlas/44714e9d-a694-4c62-bbc0-2660851ade3d/scratchpad/'
vid, gun = sys.argv[1], sys.argv[2]
la0, la1, lo0, lo1 = map(float, sys.argv[3:7])
kat, K, latm, _, _ = G.sorgu(gun, la0, lo0, la1, lo1)
DH = {d['id']: d.get('renk') for d in G.Havuz('devletler_harita.js', 'DEVLET_PARCALAR', 'DEVLET_PARCA_HALKA')._json('DEVLET_HARITA')}
renk = {'OSMANLI': '#8e0b22', 'tabi(OSM)': '#d98a95'}
fig, ax = plt.subplots(figsize=(7, 7 * (la1 - la0) / (lo1 - lo0) + 0.6), dpi=90)
gl = json.load(open(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "veri-kaynak", "ne_10m_land.geojson"), encoding='utf-8'))
kara = unary_union([make_valid(shape(f['geometry'])).intersection(K) for f in gl['features'] if shape(f['geometry']).intersects(K)])

def ciz(g, **kw):
    for p in (g.geoms if hasattr(g, 'geoms') else [g]):
        if p.geom_type == 'Polygon' and not p.is_empty:
            x, y = p.exterior.xy
            ax.fill(x, y, **kw)
        elif hasattr(p, 'geoms'):
            ciz(p, **kw)

ciz(kara, color='#eeeeee', lw=0)
ks = list(kat.items())
for ad, g in ks:
    c = renk.get(ad) or DH.get(ad.replace('isg:', '')) or '#888888'
    ciz(g, color=c, alpha=0.45, lw=0.6, ec='k', label=ad)
for i in range(len(ks)):
    for j in range(i + 1, len(ks)):
        a, b = ks[i][0], ks[j][0]
        if {a, b} <= {'OSMANLI', 'tabi(OSM)'} or a.startswith('isg') or b.startswith('isg'):
            continue
        x = ks[i][1].intersection(ks[j][1])
        if not x.is_empty and G.km2(x, latm) >= 1:
            ciz(x, color='black', alpha=0.9, lw=0)
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac"))
with contextlib.redirect_stdout(io.StringIO()):
    import girdi
    Y = girdi.yukle()
Y = Y[0] if isinstance(Y, tuple) else Y
for y in Y:
    if la0 <= y['lat'] <= la1 and lo0 <= y['lon'] <= lo1:
        ax.plot(y['lon'], y['lat'], 'k.', ms=3)
        ax.annotate(y['ad'][:14], (y['lon'], y['lat']), fontsize=6)
ax.set_xlim(lo0, lo1); ax.set_ylim(la0, la1)
ax.set_title('%s %s (siyah=binme)' % (vid, gun), fontsize=8)
h = [plt.Rectangle((0, 0), 1, 1, color=renk.get(a) or DH.get(a.replace('isg:', '')) or '#888', alpha=0.5) for a, _ in ks]
ax.legend(h, [a for a, _ in ks], fontsize=6, loc='lower left')
plt.tight_layout()
plt.savefig(S + 'ciz-%s.png' % vid.replace('/', '_'))
print('yazildi', S + 'ciz-%s.png' % vid.replace('/', '_'))

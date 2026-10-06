# 🔴 BEYAN (UMIT-W56e, 6 Eki 2026): başka makinenin yolunu okur (govde modülünü oradan içe aktarır), bu makinede koşamaz: C:\Users\emrem\AppData\Local\Temp\claude\C--atlas\44714e9d-a694-4c62-bbc0-2660851ade3d\scratchpad
"""py toplu.py vakalar.json -> her vaka için katman km², binme (OSM-içi ve isg∩OSM hariç), boyanmayan kara.
vakalar.json: [[id, gun, la0, la1, lo0, lo1], ...]  (GEOMETRI-0916 biçimi)"""
import json, sys, math
sys.path.insert(0, 'C:/Users/emrem/AppData/Local/Temp/claude/C--atlas/44714e9d-a694-4c62-bbc0-2660851ade3d/scratchpad')
import govde as G
from shapely.geometry import box, shape
from shapely.ops import unary_union
from shapely import make_valid
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

V = json.load(open(sys.argv[1], encoding='utf-8'))
D = G.Havuz('donemler.js', 'PARCALAR', 'PARCA_HALKA')
DON = D._json('DONEMLER')
H = G.Havuz('devletler_harita.js', 'DEVLET_PARCALAR', 'DEVLET_PARCA_HALKA')
DH = H._json('DEVLET_HARITA')
import os  # MUTLAK-KOK-DENETIM-1006: kök için
js = open(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data", "devirler.js"), encoding='utf-8').read()
k = js.index('window.ISGALLER = ') + len('window.ISGALLER = ')
I = json.loads(js[k:js.index(';\n', k)])
MASKE = sys.argv[2] if len(sys.argv) > 2 else 'motor_kara'
gj = json.load(open(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "veri-kaynak", "%s.geojson") % ('motor_kara' if MASKE == 'motor_kara' else 'ne_10m_land'), encoding='utf-8'))
KARA = [make_valid(shape(f['geometry'])) for f in (gj['features'] if 'features' in gj else [gj])]
from shapely.strtree import STRtree
KT = STRtree(KARA)
GOL = []
if MASKE != 'motor_kara':
    gl = json.load(open(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "veri-kaynak", "ne_10m_lakes.geojson"), encoding='utf-8'))
    GOL = [make_valid(shape(f['geometry'])) for f in gl['features']]
GT = STRtree(GOL) if GOL else None
from shapely.geometry import Polygon


def kes(p, K, KB):
    return p is not None and G.kutu_bbox_kesisir(p.bounds, KB)


def ic_cift(a, b):
    osm = {'OSMANLI', 'tabi(OSM)'}
    if a in osm and b in osm:
        return True
    if (a.startswith('isg:') and b in osm) or (b.startswith('isg:') and a in osm):
        return True
    return False


out = []
for vid, gun, la0, la1, lo0, lo1 in V:
    K = box(lo0, la0, lo1, la1); KB = (lo0, la0, lo1, la1); latm = (la0 + la1) / 2
    kat = {}
    for d in DON:
        if d['f'] <= gun < d['t']:
            for alan, ad in (('o', 'OSMANLI'), ('v', 'tabi(OSM)')):
                gs = [D.parca(pi) for pi in d.get(alan) or []]
                gs = [p.intersection(K) for p in gs if kes(p, K, KB)]
                if gs:
                    kat[ad] = unary_union(gs)
    for dv in DH:
        for dn in dv.get('dnm') or []:
            if dn['f'] <= gun < dn['t']:
                gs = [H.parca(pi) for pi in dn.get('g') or []]
                gs = [p.intersection(K) for p in gs if kes(p, K, KB)]
                if gs:
                    u = unary_union(gs)
                    if not u.is_empty:
                        kat[dv['id']] = unary_union([kat[dv['id']], u]) if dv['id'] in kat else u
    for x in I:
        if x['f'] <= gun < x['t']:
            pr = json.loads(x['parca']) if isinstance(x['parca'], str) else x['parca']
            gs = [make_valid(Polygon(p[0], [h for h in p[1:] if len(h) >= 4])).intersection(K) for p in pr if len(p[0]) >= 4]
            u = unary_union(gs) if gs else None
            if u is not None and not u.is_empty:
                kat['isg:' + x['id']] = u
    kat = {a: g for a, g in kat.items() if G.km2(g, latm) >= 0.5}
    ks = list(kat.items())
    binme = []
    for i in range(len(ks)):
        for j in range(i + 1, len(ks)):
            if ic_cift(ks[i][0], ks[j][0]):
                continue
            x = ks[i][1].intersection(ks[j][1])
            if not x.is_empty and G.km2(x, latm) >= 1:
                binme.append((ks[i][0], ks[j][0], round(G.km2(x, latm))))
    kara = unary_union([KARA[i].intersection(K) for i in KT.query(K)])
    if GT is not None:
        gq = [GOL[i].intersection(K) for i in GT.query(K)]
        if gq:
            kara = kara.difference(unary_union(gq))
    U = unary_union([g for _, g in ks]) if ks else Polygon()
    bos = kara.difference(U)
    deniz_boya = U.difference(kara)
    r = {'id': vid, 'gun': gun, 'kutu': [la0, la1, lo0, lo1], 'kutu_km2': round(G.km2(K, latm)),
         'kara_km2': round(G.km2(kara, latm)),
         'katman': {a: round(G.km2(g, latm)) for a, g in sorted(ks, key=lambda t: -t[1].area)},
         'binme': binme, 'binme_toplam': sum(b[2] for b in binme),
         'boyanmayan_kara': round(G.km2(bos, latm)), 'denize_tasan_boya': round(G.km2(deniz_boya, latm))}
    out.append(r)
    print(json.dumps(r, ensure_ascii=False))
json.dump(out, open(sys.argv[1].replace('.json', '-SONUC-%s.json' % MASKE), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

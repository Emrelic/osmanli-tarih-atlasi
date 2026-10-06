# 🔴 BEYAN (UMIT-W56e, 6 Eki 2026): başka makinenin yolunu okur ve YAZAR (.ofs önbelleği), bu makinede koşamaz: C:\Users\emrem\AppData\Local\Temp\claude\C--atlas\44714e9d-a694-4c62-bbc0-2660851ade3d\scratchpad
"""GÖVDE SORGUSU — düşük bellek (mmap + halka ofset dizini).

  py govde.py <GUN> <lat1> <lon1> <lat2> <lon2> [--noktalar]

Kaynak: `arac/kodla.py coz-c` ile scratchpad'e çözülmüş
  donemler.js (Osmanlı DONEMLER: o=doğrudan, v=tâbi)
  devletler_harita.js (DEVLET_HARITA: yabancı dnm[].g)
Basar: kutudaki her kimliğin km²'si, kimlikler arası BİNME km², kutuda
BOYANMAYAN kara payı (kara maskesi yok — kutu alanı − boyalı birleşimi;
deniz de 'boyanmamış' sayılır, bu yüzden ayrıca motor_kara ile keserim).
"""
import mmap, json, sys, os, math, pickle
from shapely.geometry import Polygon, box, shape
from shapely.ops import unary_union
from shapely import make_valid
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
S = 'C:/Users/emrem/AppData/Local/Temp/claude/C--atlas/44714e9d-a694-4c62-bbc0-2660851ade3d/scratchpad/'


class Havuz:
    def __init__(self, dosya, halka_deg, parca_deg):
        self.f = open(S + dosya, 'rb')
        self.m = mmap.mmap(self.f.fileno(), 0, access=mmap.ACCESS_READ)
        self.ph = self._json(parca_deg)
        on = S + dosya + '.' + halka_deg + '.ofs'
        if os.path.exists(on) and os.path.getmtime(on) > os.path.getmtime(S + dosya):
            self.ofs = pickle.load(open(on, 'rb'))
        else:
            self.ofs = self._ofs(halka_deg)
            pickle.dump(self.ofs, open(on, 'wb'))

    def _aralik(self, deg):
        k = self.m.find(('window.%s = ' % deg).encode())
        e = self.m.find(b';\n', k)
        return k + len('window.%s = ' % deg), e

    def _json(self, deg):
        a, e = self._aralik(deg)
        return json.loads(self.m[a:e])

    def _ofs(self, deg):
        a, e = self._aralik(deg)
        bas = [a + 1]
        son = []
        i = a + 1
        while True:
            j = self.m.find(b']],[[', i, e)
            if j < 0:
                break
            son.append(j + 2)
            bas.append(j + 3)
            i = j + 3
        son.append(e - 1)
        return list(zip(bas, son))

    def halka(self, i):
        a, b = self.ofs[i]
        return json.loads(self.m[a:b])

    def parca(self, pi):
        hs = [self.halka(h) for h in self.ph[pi]]
        if len(hs[0]) < 4:
            return None
        p = Polygon(hs[0], [h for h in hs[1:] if len(h) >= 4])
        if not p.is_valid:
            p = make_valid(p)
        return p


def km2(g, lat):
    # yerel eşit-alan yaklaşığı: derece² → km²
    return g.area * 111.32 * 110.57 * math.cos(math.radians(lat))


def kutu_bbox_kesisir(bb, K):
    return not (bb[2] < K[0] or bb[0] > K[2] or bb[3] < K[1] or bb[1] > K[3])


def sorgu(gun, lat1, lon1, lat2, lon2):
    K = box(lon1, lat1, lon2, lat2)
    KB = (lon1, lat1, lon2, lat2)
    latm = (lat1 + lat2) / 2
    kat = {}
    # Osmanlı
    D = Havuz('donemler.js', 'PARCALAR', 'PARCA_HALKA')
    DON = D._json('DONEMLER')
    osm = [d for d in DON if d['f'] <= gun < d['t']]
    for d in osm:
        for alan, ad in (('o', 'OSMANLI'), ('v', 'tabi(OSM)')):
            gs = []
            for pi in d.get(alan) or []:
                p = D.parca(pi)
                if p is not None and kutu_bbox_kesisir(p.bounds, KB):
                    gs.append(p.intersection(K))
            if gs:
                kat[ad] = unary_union(gs)
    # yabancı
    H = Havuz('devletler_harita.js', 'DEVLET_PARCALAR', 'DEVLET_PARCA_HALKA')
    DH = H._json('DEVLET_HARITA')
    for dv in DH:
        for dn in dv.get('dnm') or []:
            if dn['f'] <= gun < dn['t']:
                gs = []
                for pi in dn.get('g') or []:
                    p = H.parca(pi)
                    if p is not None and kutu_bbox_kesisir(p.bounds, KB):
                        gs.append(p.intersection(K))
                if gs:
                    u = unary_union(gs)
                    if not u.is_empty:
                        kat[dv['id']] = unary_union([kat[dv['id']], u]) if dv['id'] in kat else u
    # işgal (devirler.js ISGALLER — Osmanlı toprağındaki işgaller)
    js = open(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data", "devirler.js"), encoding='utf-8').read()
    k = js.index('window.ISGALLER = ') + len('window.ISGALLER = ')
    I = json.loads(js[k:js.index(';\n', k)])
    for x in I:
        if x['f'] <= gun < x['t']:
            pr = x['parca']
            pr = json.loads(pr) if isinstance(pr, str) else pr
            gs = []
            for poly in pr:
                if len(poly[0]) >= 4:
                    p = make_valid(Polygon(poly[0], [h for h in poly[1:] if len(h) >= 4]))
                    gs.append(p.intersection(K))
            if gs:
                u = unary_union(gs)
                if not u.is_empty:
                    kat['isg:' + x['id']] = u
    return kat, K, latm, len(osm), len(DH)


if __name__ == '__main__':
    a = sys.argv[1:]
    gun = a[0]
    lat1, lon1, lat2, lon2 = map(float, a[1:5])
    kat, K, latm, nosm, ndh = sorgu(gun, lat1, lon1, lat2, lon2)
    print('GUN %s KUTU %s-%sK / %s-%sD · kutu %.0f km² · EVREN: Osmanlı dönemi o gün %d · DEVLET_HARITA %d kimlik'
          % (gun, lat1, lat2, lon1, lon2, km2(K, latm), nosm, ndh))
    for k, g in sorted(kat.items(), key=lambda x: -x[1].area):
        print('  %-28s %10.0f km²' % (k, km2(g, latm)))
    ks = list(kat.items())
    print('BİNME (>=1 km²):')
    nb = 0
    for i in range(len(ks)):
        for j in range(i + 1, len(ks)):
            x = ks[i][1].intersection(ks[j][1])
            if not x.is_empty and km2(x, latm) >= 1:
                nb += 1
                print('  %s ∩ %s = %.0f km²' % (ks[i][0], ks[j][0], km2(x, latm)))
    print('  toplam çift: %d' % nb)
    U = unary_union([g for _, g in ks]) if ks else None
    bos = K.difference(U) if U is not None else K
    # kara ile kes
    kara_yol = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "veri-kaynak", "motor_kara.geojson")
    try:
        gj = json.load(open(kara_yol, encoding='utf-8'))
        fs = gj['features'] if 'features' in gj else [gj]
        kara = unary_union([make_valid(shape(f['geometry'])).intersection(K) for f in fs])
        print('BOYANMAYAN KARA (motor_kara ∩ kutu − boyalı): %.0f km²  · kutudaki kara %.0f km²'
              % (km2(bos.intersection(kara), latm), km2(kara, latm)))
    except Exception as ex:
        print('BOYANMAYAN (deniz dahil): %.0f km² · kara maskesi okunamadı: %s' % (km2(bos, latm), ex))

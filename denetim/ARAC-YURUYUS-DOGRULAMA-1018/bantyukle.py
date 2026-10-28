"""Uretilmis ufuk bantlari (data/ufuk_bantlari.js, coz-c ile acilmis) yukleyici.
Halka havuzu tembel: yalniz istenen halkalar float64'e cevrilir."""
import json, re, os, pickle
import numpy as np

SP = os.environ.get("YDOG_DIZIN") or os.path.join(__import__("tempfile").gettempdir(), "ydog1018")
os.makedirs(SP, exist_ok=True)
BETIK_DIZIN = os.path.dirname(os.path.abspath(__file__))
HAM = os.path.join(SP, "ufuk_bantlari.js")
ONBELLEK = os.path.join(SP, "bant_indeks.pkl")


def _indeks():
    if os.path.exists(ONBELLEK):
        return pickle.load(open(ONBELLEK, "rb"))
    d = open(HAM, "rb").read()
    a = d.index(b"window.UFUK_BANT_PARCALAR = ") + len(b"window.UFUK_BANT_PARCALAR = ")
    b = d.index(b"\nwindow.UFUK_BANT_PARCA = ")
    havuz_bas, havuz_son = a, b          # [[[x,y],..],[..]] metni (sonda ';' olabilir)
    metin = d[havuz_bas:havuz_son].rstrip().rstrip(b";")
    assert metin[:2] == b"[[" and metin[-2:] == b"]]", (metin[:5], metin[-5:])
    # halka sinirlari: "]],[["
    ayr = [m.start() for m in re.finditer(rb"\]\],\[\[", metin)]
    bas = [2] + [x + 5 for x in ayr]          # halka govdesi (ilk '[[' sonrasi)
    son = ayr + [len(metin) - 2]
    # halka k metni = metin[bas:son]  (noktalar "x,y],[x,y")
    rest = d[b:]
    j = rest.index(b"window.UFUK_BANT_PARCA = ") + len(b"window.UFUK_BANT_PARCA = ")
    k = rest.index(b"\nwindow.UFUK_BANT = ")
    parca = json.loads(rest[j:k].rstrip().rstrip(b";"))
    l = k + len(b"\nwindow.UFUK_BANT = ")
    m = rest.index(b"\nwindow.UFUK_BANT_IZI = ")
    bant = json.loads(rest[l:m].rstrip().rstrip(b";"))
    izi = rest[m + len(b"\nwindow.UFUK_BANT_IZI = "):].strip()
    return metin, bas, son, parca, bant, izi


class Bant:
    def __init__(self):
        self.metin, self.bas, self.son, self.parca, self.bant, self.izi = _indeks()
        self.nhalka = len(self.bas)

    def halka(self, k):
        t = self.metin[self.bas[k]:self.son[k]]
        t = t.replace(b"[", b"").replace(b"]", b"")
        return np.fromstring(t, sep=",").reshape(-1, 2)

    def poligon(self, p):
        """PARCA[p] = halka indeksleri; ilki dis halka, kalani delik."""
        from shapely.geometry import Polygon
        hs = [self.halka(h) for h in self.parca[p]]
        return Polygon(hs[0], hs[1:]).buffer(0)

    def kayit_geom(self, kayit):
        from shapely.ops import unary_union
        return unary_union([self.poligon(p) for p in kayit["g"]])

# -*- coding: utf-8 -*-
"""YAYIN KAPISI — 570.000 km² TABIYE MI GECTI, YOKSA KAYBOLDU MU?

Ongoru ②: "hicbir nokta esigin ALTINA dusmez" — yani TOPLAM boyali alan
~degismemeli, yalniz dogrudan <-> tabi arasinda yer degistirmeli.

Olcum: ESKI donemler.js (git HEAD) ile YENI donemler.js'i AYNI olcutle
karsilastir. Kod kopyalanmiyor; `uret_devirler.py`nin duzeltilmis
`coz()`u ice aktariliyor.
"""
import io, os, re, json, subprocess, sys
sys.path.insert(0, os.path.join(os.environ["ATLAS_KOK"], "arac"))
from shapely.geometry import Polygon
from shapely.ops import unary_union

KOK = os.environ["ATLAS_KOK"]
GUN = "1800-06-15"

def yaz(s):
    print(str(s).encode("ascii", "replace").decode("ascii"))

def pencere(metin, degisken):
    i = metin.find("window." + degisken)
    if i < 0:
        return None
    i = metin.find("=", i) + 1
    d = 0
    j = i
    metinde = False
    while j < len(metin):
        c = metin[j]
        if metinde:
            if c == "\\":
                j += 2
                continue
            if c == '"':
                metinde = False
        elif c == '"':
            metinde = True
        elif c in "[{":
            d += 1
        elif c in "]}":
            d -= 1
            if d == 0:
                j += 1
                break
        j += 1
    g = metin[i:j]
    g = re.sub(r'([{,]\s*)([A-Za-z_]\w*)\s*:', r'\1"\2":', g)
    g = re.sub(r',(\s*[\]}])', r'\1', g)
    return json.loads(g)

def coz(dizi, havuz, halka):
    if not dizi:
        return []
    out = []
    for x in dizi:
        if not isinstance(x, int):
            out.append(x); continue
        if not halka:
            out.append(havuz[x]); continue
        ph = halka[x] if 0 <= x < len(halka) else None
        if not ph:
            raise SystemExit("PARCA_HALKA deligi: %d" % x)
        out.append([havuz[h] for h in ph])
    return out

def alan(parcalar):
    pl = []
    for p in parcalar:
        try:
            g = (Polygon(p[0], p[1:]) if (p and isinstance(p[0][0], (list, tuple))
                                          and len(p) > 1)
                 else Polygon(p[0] if (p and isinstance(p[0][0], (list, tuple))) else p))
            g = g.buffer(0)
            if not g.is_empty:
                pl.append(g)
        except Exception:
            continue
    if not pl:
        return 0.0
    return unary_union(pl).area * 111 * 111 * 0.75

def olc(metin, etiket):
    D = pencere(metin, "DONEMLER")
    PAR = pencere(metin, "PARCALAR")
    PH = pencere(metin, "PARCA_HALKA")
    d = [x for x in D if x["f"] <= GUN < x["t"]] or [x for x in D if x["f"] <= GUN]
    son = d[-1]
    a_dog = alan(coz(son.get("o"), PAR, PH))
    a_tab = alan(coz(son.get("v"), PAR, PH))
    yaz("%-8s  dogrudan %10.0f  tabi %10.0f  TOPLAM %10.0f km²"
        % (etiket, a_dog, a_tab, a_dog + a_tab))
    return a_dog, a_tab

yaz("GUN: " + GUN)
yaz("")
yeni = io.open(os.path.join(KOK, "data", "donemler.js"), encoding="utf-8").read()
p = subprocess.run(["git", "-C", KOK, "show", "HEAD:data/donemler.js"],
                   capture_output=True)
eski = p.stdout.decode("utf-8", "replace")

e_d, e_t = olc(eski, "ESKI")
y_d, y_t = olc(yeni, "YENI")
yaz("")
yaz("dogrudan fark : %+10.0f km²" % (y_d - e_d))
yaz("tabi     fark : %+10.0f km²" % (y_t - e_t))
yaz("TOPLAM   fark : %+10.0f km²" % ((y_d + y_t) - (e_d + e_t)))
yaz("")
kayip = (e_d + e_t) - (y_d + y_t)
if abs(kayip) < 0.02 * (e_d + e_t):
    yaz("[OK] TOPLAM ~DEGISMEDI (%%%.2f) -> alan TABIYE GECTI, KAYBOLMADI"
        % (100.0 * kayip / (e_d + e_t)))
else:
    yaz("[!!] TOPLAM %.0f km² DUSTU (%%%.1f) -> ALAN KAYBOLDU, YAYIN DURMALI"
        % (kayip, 100.0 * kayip / (e_d + e_t)))

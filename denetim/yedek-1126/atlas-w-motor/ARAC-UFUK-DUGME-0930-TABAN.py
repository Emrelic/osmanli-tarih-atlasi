# UFUK-DUGME-0930 — (a) ölçümü: taban bant (≤5) ile boyalı A gövdesi AYNI geometri mi?
#
# Motor (arac/uret_petek.py ~7870): taban bandın devlet-dönemi =
#   unary_union(PETEK_D[j] for j in aktif)  ve  PETEK_GOVDE[j] == PETEK_D[j]
#   (petek_govde.js aynı PETEK_D'den yazılıyor, ~7990).
# Boyalı A (Osmanlı): DONEMLER[k].o → PARCA_HALKA → PARCALAR.
# Aktif küme: DONEMLER yalnız eklenen (e) / çıkan (c) petek indekslerini
# tutar (donemler.js başlığı) ⇒ baştan biriktirilir.
#
# Bellek: donemler.js (57 MB) JSON olarak YÜKLENMEZ — PARCALAR halka
# sınırları bayt taramasıyla bulunur, yalnız gereken halkalar çözülür.
# Kapsam: yalnız OSMANLI dönemleri (yabancı A devletler_harita.js 177 MB,
# RAM darboğazında yüklenmedi) ⇒ sonuç Osmanlı için ÖLÇÜLDÜ, yabancı için
# ÖLÇÜLMEDİ.
import json, random, re, math, statistics, sys
from shapely.geometry import Polygon, MultiPolygon
from shapely.ops import unary_union
from shapely.validation import make_valid

import os  # MUTLAK-KOK-DENETIM-1006: kök için
KOK = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data")
b = open(KOK + r"\donemler.js", "rb").read()

_DEC = json.JSONDecoder()
def yukle(buf, ad):
    # Satır sonu CRLF ya da LF olabilir ⇒ bitişi raw_decode bulur.
    i = buf.find(b"window." + ad + b" = ") + len(b"window." + ad + b" = ")
    return _DEC.raw_decode(buf[i:i + 60_000_000].decode("utf-8"))[0]

def blok(ad):
    # PARCALAR JSON olarak ÇÖZÜLMEZ (bellek) — yalnız [bas, son) sınırı.
    i = b.find(b"window." + ad + b" = ") + len(b"window." + ad + b" = ")
    j = b.find(b"]];", i) + 2          # dış dizinin kapanışı (halka "]]" + "]")
    return i, j

DON = yukle(b, b"DONEMLER")
PH = yukle(b, b"PARCA_HALKA")
pi_, pj = blok(b"PARCALAR")
# PARCALAR = [halka, halka, ...]; halka = [[x,y],...]. Halkalar arası ayraç "]],[["
# bir halkanın içinde geçemez (içeride yalnız "],[").
bas = [pi_ + 1]
for m in re.finditer(rb"\]\],\[\[", b[pi_:pj]):
    bas.append(pi_ + m.start() + 3)
def halka(k):
    s = bas[k]
    e = (bas[k + 1] - 1) if k + 1 < len(bas) else (pj - 1)
    return json.loads(b[s:e])

g = open(KOK + r"\petek_govde.js", "rb").read()
GP = yukle(g, b"PETEK_GOVDE_PARCA")
GV = yukle(g, b"PETEK_GOVDE")
del g

def poli(parca):
    p = Polygon(parca[0], parca[1:])
    return p if p.is_valid else make_valid(p)

def alan_km2(geo):
    # yerel eşit-alan yaklaşımı: boylam × cos(enlem merkezi)
    if geo.is_empty: return 0.0
    c = geo.centroid.y
    k = math.cos(math.radians(c)) * 111.32 * 110.57
    return geo.area * k

aktif = set()
ornek_evren = []
for k, d in enumerate(DON):
    for x in d.get("e", []): aktif.add(x)
    for x in d.get("c", []): aktif.discard(x)
    if d.get("o"):
        ornek_evren.append((k, frozenset(aktif)))
random.seed(930)
ornek = random.sample(ornek_evren, 30)

satir = []
for k, ak in sorted(ornek):
    d = DON[k]
    a_par = []
    for o in d["o"]:
        hs = [halka(h) for h in PH[o]]
        a_par.append(poli(hs))
    # 🔴 İlk koşu yalnız `o` (doğrudan) ile medyan %25 verdi, taban hep
    #    BÜYÜK ⇒ aktif küme tâbiyi de (`v`) kapsıyor. A = o ∪ v.
    for o in d.get("v", []):
        a_par.append(poli([halka(h) for h in PH[o]]))
    A = unary_union(a_par)
    t_par = []
    for j in ak:
        if j < len(GV):
            for p in GV[j]:
                t_par.append(poli(GP[p]))
    T = unary_union(t_par) if t_par else Polygon()
    aa, ta = alan_km2(A), alan_km2(T)
    sd = alan_km2(A.symmetric_difference(T))
    satir.append((d["f"], d["t"], len(ak), aa, ta,
                   abs(ta - aa) / aa * 100 if aa else float("nan"),
                   sd / aa * 100 if aa else float("nan")))

print("f          t           petek   A km²      taban km²   |Δalan|%  simfark%")
for r in satir:
    print("%s %s %6d %10.0f %11.0f %8.3f %9.3f" % r)
fa = [r[5] for r in satir]; fs = [r[6] for r in satir]
print("MEDYAN |Δalan| %%: %.3f · MEDYAN simetrik fark %%: %.3f · en büyük simfark %%: %.3f"
      % (statistics.median(fa), statistics.median(fs), max(fs)))
print("evren: %d Osmanlı dönemi (o dolu), örnek 30, tohum 930" % len(ornek_evren))

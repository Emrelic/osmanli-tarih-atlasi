# -*- coding: utf-8 -*-
"""ADIM 1 v3 — TEMIZ SINIFLANDIRMA + 13 VAKANIN TEK TEK SINANMASI

v2'nin kusuru: bir parca hem A2'ye hem C2'ye girebiliyordu (siniflandirma
kovalari ortusuyordu). Bu surumde her parca TEK kovaya duser:

  IHLAL     parca, KENDI NOKTALARI OLAN baska bir bilesende      <- ADA KURALI hedefi
  BOGAZ     parca AYNI bilesende ama duz hat denizden geciyor    <- KARA-KISITLI hedefi
  BOSLUK    parca NOKTASIZ bilesende                             <- TASARIM (motor:1015)
  KARA      parca ayni bilesende, hat tamamen karada             <- normal

Olcut kaynagi: uret_petek.py:1014-1015 (noktasiz parca = eski davranis) ve
uret_petek.py:1107-1109 ("hat denizi kesiyor mu", esik yok).
Olculen sey: petek_govde.js — motorun SON asamada yazdigi govde (satir 2820),
yani ada kurali + kara-kisitli sahiplik + col tavani UYGULANDIKTAN SONRA.

Salt okuma.
"""
import json, os, sys, math, pickle, time, unicodedata

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
SCR = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\a5479cb4-16ee-4def-832f-307c172e7614\scratchpad"
sys.path.insert(0, os.path.join(KOK, "arac"))

from shapely.geometry import box, Point, Polygon, MultiPolygon, LineString
from shapely.ops import unary_union
from shapely.strtree import STRtree
import shapely

R = 6371.0088
BOLGE = unary_union([box(-12, -11, 146, 82), box(-25, 60, -12, 82)])


def km2(g):
    if g is None or g.is_empty:
        return 0.0
    ps = g.geoms if isinstance(g, MultiPolygon) else [g]
    T = 0.0
    for p in ps:
        if not isinstance(p, Polygon):
            continue
        for ring, sg in [(p.exterior, 1)] + [(h, -1) for h in p.interiors]:
            cs = list(ring.coords); s = 0.0
            for i in range(len(cs) - 1):
                lo1, la1 = math.radians(cs[i][0]), math.radians(cs[i][1])
                lo2, la2 = math.radians(cs[i + 1][0]), math.radians(cs[i + 1][1])
                s += (lo2 - lo1) * (2 + math.sin(la1) + math.sin(la2))
            T += sg * abs(s * R * R / 2)
    return T


import girdi
YERLER = girdi.yukle(sessiz=True)
with open(os.path.join(SCR, "kara_maskesi.pkl"), "rb") as f:
    KARA = pickle.load(f)

komp = [k for k in (list(KARA.geoms) if KARA.geom_type == "MultiPolygon" else [KARA])
        if not k.is_empty and k.area > 1e-9]
komp.sort(key=lambda k: -k.area)
agac = STRtree(komp)
pt = [Point(y["lon"], y["lat"]) for y in YERLER]

tk = [-1] * len(YERLER)
for i, p in enumerate(pt):
    ad_ = [int(j) for j in agac.query(p)]
    b = next((j for j in ad_ if komp[j].intersects(p)), -1)
    if b < 0:
        b = min(ad_ or range(len(komp)), key=lambda j: komp[j].distance(p))
    tk[i] = b
noktali = set(tk)
nokta_sayisi = {}
for j in tk:
    nokta_sayisi[j] = nokta_sayisi.get(j, 0) + 1

shapely.prepare(KARA)
print("bilesen %d · noktali %d · noktasiz %d · yerlesim %d"
      % (len(komp), len(noktali), len(komp) - len(noktali), len(YERLER)), flush=True)

KOVA = {"IHLAL": [], "BOGAZ": [], "BOSLUK": [], "KARA": []}
per_yer = {}

with open(os.path.join(SCR, "petek.ndjson"), encoding="utf-8") as f:
    for satir in f:
        o = json.loads(satir)
        i, parts = o["i"], o["parts"]
        if not parts:
            continue
        kj, ad, tp = tk[i], YERLER[i]["ad"], pt[i]
        for ring in parts:
            try:
                poly = Polygon(ring[0], ring[1:]) if len(ring) > 1 else Polygon(ring[0])
            except Exception:
                continue
            if not poly.is_valid:
                poly = poly.buffer(0)
            if poly.is_empty or poly.intersects(tp):
                continue                                    # tohumun kendi parcasi
            a = km2(poly)
            if a < 1.0:
                continue
            hedef = poly.representative_point()
            pj = next((int(j) for j in agac.query(hedef) if komp[int(j)].intersects(hedef)), None)
            hat = LineString([(tp.x, tp.y), (hedef.x, hedef.y)])
            karada = shapely.covers(KARA, hat)
            d = hat.difference(KARA)
            su = 0.0 if d.is_empty else d.length * 111.32
            uz = hat.length * 111.32
            if pj is not None and pj != kj and pj in noktali:
                kova = "IHLAL"
            elif pj is not None and pj != kj:
                kova = "BOSLUK"
            elif karada:
                kova = "KARA"
            else:
                kova = "BOGAZ"
            kayit = (a, ad, i, su, uz, nokta_sayisi.get(pj, 0))
            KOVA[kova].append(kayit)
            per_yer.setdefault(ad, []).append((kova, a, su, uz))

print()
for k in ("IHLAL", "BOGAZ", "BOSLUK", "KARA"):
    v = KOVA[k]
    print("%-7s  %5d parca  %12.0f km²" % (k, len(v), sum(x[0] for x in v)))

print()
print("=" * 84)
print("h17#3b TARAMASI — TOHUMUNDAN DENIZLE AYRI PARCALAR, EN BUYUK 20")
print("(IHLAL + BOGAZ + BOSLUK · su acikligi >= 5 km · alan >= 200 km²)")
print("=" * 84)
hepsi = [(a, ad, i, su, uz, ns, k)
         for k in ("IHLAL", "BOGAZ", "BOSLUK")
         for (a, ad, i, su, uz, ns) in KOVA[k]
         if su >= 5.0 and a >= 200.0]
hepsi.sort(reverse=True)
print("  %10s %8s %8s  %-7s %-26s %s" % ("km²", "su km", "hat km", "kova", "yerlesim", "hedefte nokta"))
for a, ad, i, su, uz, ns, k in hepsi[:20]:
    print("  %10.0f %8.1f %8.0f  %-7s %-26s %d" % (a, su, uz, k, ad[:26], ns))
print("  ---- toplam bu suzgecte: %d parca · %.0f km²"
      % (len(hepsi), sum(x[0] for x in hepsi)))

# ---- 13 VAKA ----
print()
print("=" * 84)
print("13 VAKANIN TEK TEK SINANMASI — bugun (r1140 ciktisi) hala var mi")
print("=" * 84)
VAKA = [
    ("h1#6",   "Marmara Adasi -> Kapidag/Erdek",      ["Marmara", "Erdek", "Kapıdağ", "Avşa"]),
    ("h1#8",   "Midilli -> Ayvalik/Altinoluk/Edremit", ["Midilli", "Ayvalık", "Edremit", "Behramkale"]),
    ("h1#10",  "Zakintos -> karsi kiyi",               ["Zakintos", "Zante", "Kefalonya", "Ayamavra"]),
    ("h4#7",   "Derbend -> Hazar'in ote yakasi",       ["Derbend", "Derbent"]),
    ("h4#8",   "Baku -> Hazar karsi taraf",            ["Bakü", "Baku"]),
    ("h8#2",   "(ayni desen)",                         ["Bakü", "Derbend"]),
    ("h10#29", "Vehran/Oran -> Ispanya anakarasi",     ["Vehran", "Oran", "Merselkebir"]),
    ("h12#5",  "Karesi ilhaki -> Gelibolu",            ["Kilitbahir", "Gelibolu", "Çimpe", "Biga", "Karesi"]),
    ("h15#19", "Oran/Merselkebir -> Ispanya",          ["Vehran", "Oran", "Merselkebir"]),
    ("h17#3",  "Biga ucu Behramkale <- Midilli",       ["Biga", "Behramkale", "Midilli"]),
    ("h17#14", "Karesi -> Avrupa tarafi",              ["Kilitbahir", "Gelibolu", "Biga"]),
    ("h17#15", "Cimpe -> Saroz kuzeyi",                ["Çimpe", "Gelibolu", "Kilitbahir", "İpsala", "Enez"]),
    ("h18",    "Savoy Hacli seferi (Gelibolu)",        ["Gelibolu", "Kilitbahir", "Çimpe"]),
]
adlar = {y["ad"] for y in YERLER}
for kod, tarif, aday in VAKA:
    satirlar = []
    for a_ in aday:
        eslesen = [nm for nm in adlar if a_.lower() in nm.lower()]
        for nm in eslesen:
            for (kova, a, su, uz) in per_yer.get(nm, []):
                if kova in ("IHLAL", "BOGAZ", "BOSLUK") and su >= 2.0 and a >= 50.0:
                    satirlar.append((a, nm, kova, su, uz))
    yok = [a_ for a_ in aday if not any(a_.lower() in nm.lower() for nm in adlar)]
    if satirlar:
        satirlar.sort(reverse=True)
        print("  %-8s %-38s >>> VAR  (%d parca)" % (kod, tarif[:38], len(satirlar)))
        for a, nm, kova, su, uz in satirlar[:3]:
            print("             %-24s %8.0f km²  su %5.1f km  hat %5.0f km  [%s]"
                  % (nm[:24], a, su, uz, kova))
    else:
        print("  %-8s %-38s     YOK" % (kod, tarif[:38]))
    if yok:
        print("             !! veride bulunamayan ad: %s" % ", ".join(yok))

with open(os.path.join(SCR, "denizasiri_v3.json"), "w", encoding="utf-8") as f:
    json.dump({k: [{"km2": a, "ad": ad, "i": i, "su_km": su, "hat_km": uz, "hedef_nokta": ns}
                   for a, ad, i, su, uz, ns in sorted(v, reverse=True)]
               for k, v in KOVA.items()}, f, ensure_ascii=False, indent=1)
print()
print("ayrinti: scratchpad/denizasiri_v3.json")

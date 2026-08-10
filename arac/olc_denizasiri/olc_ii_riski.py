# -*- coding: utf-8 -*-
"""ADIM 2b — (ii) SECENEGININ RISKI

Koordinatorun sorusu:
  "Dijkstra bilesene kisitlansaydi, Oslo/Konigsberg/Azak/Tromso (+Bergen,
   Alesund) kac km2 kaybederdi?  0 ise (ii) GUVENLI, >0 ise (ii) OLU."

(ii) = kara-izgarasi Dijkstra'si YALNIZ tohumun GERCEK maske bileseninde
       yayilsin.  Etkisi: bir petegin, tohumunun bileseninden BASKA bir
       bilesende tuttugu toprak artik ona verilemez.
   ⇒ KAYIP = petegin, tohumun bileseni DISINDA kalan alani.

⚠️ Noktasiz bilesenler (BOSLUK kovasi) bu olcumde AYRI raporlanir: onlari
   Dijkstra zaten devretmiyor (motor :1015 "noktasiz parca: eski davranis"),
   yani (ii) onlara dokunmaz. Ikisini karistirmamak icin ayirdim.

Salt okuma. Kosu yok, kod degisikligi yok.
"""
import json, os, sys, math, pickle

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
SCR = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\a5479cb4-16ee-4def-832f-307c172e7614\scratchpad"
sys.path.insert(0, os.path.join(KOK, "arac"))

from shapely.geometry import Point, Polygon, MultiPolygon
from shapely.strtree import STRtree
import girdi

R = 6371.0088


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


YERLER = girdi.yukle(sessiz=True)
KARA = pickle.load(open(os.path.join(SCR, "kara_maskesi.pkl"), "rb"))
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

parcalar = {}
for satir in open(os.path.join(SCR, "petek.ndjson"), encoding="utf-8"):
    o = json.loads(satir)
    pl = []
    for ring in o["parts"]:
        try:
            p = Polygon(ring[0], ring[1:]) if len(ring) > 1 else Polygon(ring[0])
        except Exception:
            continue
        if not p.is_valid:
            p = p.buffer(0)
        if not p.is_empty:
            pl.append(p)
    parcalar[o["i"]] = pl


def rapor(i):
    """(toplam, noktali_bilesende_kayip, noktasiz_bilesende_kayip)"""
    kj = tk[i]
    kg = komp[kj]
    top = kayip_n = kayip_b = 0.0
    for p in parcalar.get(i, []):
        a = km2(p)
        top += a
        dis = p.difference(kg)
        if dis.is_empty or dis.area < 1e-12:
            continue
        # dis parcalarini hedef bilesene gore ayir
        gs = dis.geoms if isinstance(dis, MultiPolygon) else [dis]
        for g in gs:
            if g.is_empty or not isinstance(g, Polygon):
                continue
            m = g.representative_point()
            pj = next((int(j) for j in agac.query(m) if komp[int(j)].intersects(m)), None)
            aa = km2(g)
            if pj is None:
                continue
            if pj in noktali:
                kayip_n += aa
            else:
                kayip_b += aa
    return top, kayip_n, kayip_b


HEDEF = ["Oslo", "Königsberg", "Azak", "Tromsø", "Bergen", "Ålesund"]
print("=" * 96)
print("(ii) RISK OLCUMU — 'Dijkstra bilesene kisitlansaydi bunlar kac km² kaybederdi?'")
print("  motorun kabul testi (uret_petek.py:1111): bu vakalar 0 km² KAYBETMELIDIR")
print("=" * 96)
print("  %-22s %10s %14s %14s  %s" % ("yerlesim", "petek km²", "NOKTALI kayip", "noktasiz kayip", "hukum"))
kirmizi = 0
for h in HEDEF:
    bulundu = False
    for i, y in enumerate(YERLER):
        if y["ad"] == h or y["ad"].startswith(h + " "):
            bulundu = True
            top, kn, kb = rapor(i)
            hk = "GECER (0 km²)" if kn < 1.0 else ">>> DUSER"
            if kn >= 1.0:
                kirmizi += 1
            print("  %-22s %10.0f %14.0f %14.0f  %s" % (y["ad"][:22], top, kn, kb, hk))
    if not bulundu:
        print("  %-22s %10s %14s %14s  !! VERIDE BULUNAMADI" % (h, "-", "-", "-"))

print()
print("  => %s" % ("(ii) GUVENLI — dort mesru vaka 0 km² kaybediyor" if kirmizi == 0
                   else "(ii) OLU — %d mesru vaka toprak kaybediyor, kabul testi DUSER" % kirmizi))

# --- genel: (ii) butun atlasta ne kadar toprak tasir ---
print()
print("=" * 96)
print("GENEL ETKI — (ii) butun atlasta ne kadar topragi SAHIPSIZ birakirdi")
print("=" * 96)
tn = tb = 0.0
kayb = []
for i in range(len(YERLER)):
    if i not in parcalar:
        continue
    top, kn, kb = rapor(i)
    tn += kn; tb += kb
    if kn >= 1.0:
        kayb.append((kn, YERLER[i]["ad"]))
kayb.sort(reverse=True)
print("  NOKTALI bilesende kayip : %10.0f km²  (%d yerlesim)   <- (ii) bunu keser" % (tn, len(kayb)))
print("  noktasiz bilesende      : %10.0f km²                  <- (ii) BUNA DOKUNMAZ" % tb)
print("     (motor :1015 'noktasiz parca: eski davranis' — Dijkstra zaten devretmiyor)")
print()
print("  NOKTALI kaybin tamami:")
for a, ad in kayb:
    print("    %-24s %10.0f km²" % (ad[:24], a))

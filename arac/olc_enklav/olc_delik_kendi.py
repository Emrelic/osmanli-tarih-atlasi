# -*- coding: utf-8 -*-
"""② DELIK ENVANTERI — KENDI BIRLESIMIM.  EVREN: motorun ARA URUNU.

🔴🔴 BU BETIGIN EVRENI EKRAN DEGILDIR. ONCE BUNU OKU.
Hucreleri `petek_govde.js`ten alip sahibe gore BIRLESTIRIR. Ama motor govdeyi
kurarken ayrica `kapat()` ve `delikleri_doldur()` uyguluyor. Yani buradan
cikan delikler MOTORUN DOLDURDUGU deliklerdir — EKRANDA GORUNMEZLER.

11 Agustos 2026'da tam bu tuzaga dustum: bu olcumu yapip "3-8 delik var"
diye rapor ettim. Yayindaki cikti olculunce kapali kara adaciginin ZATEN
OLMADIGI gorundu. Olcum dogruydu, EVRENI yanlisti.

⇒ NE ISE YARAR: "delikleri_doldur ne is yapiyor" sorusunu cevaplar, yani
  motorun HANGI DELIKLERI kapattigini adiyla dokerr. Ekrani olcmek icin
  `olc_delik_yayin.py` kullan.

NE OLCER: her kesitte, bir sahibin govdesinin interior ring'i olan, KARA ile
kesilmis, boyali olan her sey cikarilmis alanlar. Parametresiz olcut.
   M1  delikte SAHIPSIZ HUCRE var    -> hucre var, sahip yazilmamis
   M2  delikte HIC NOKTA yok         -> tavanin kestigi toprak
   M3  nokta var ve hepsi SAHIPLI    -> gercek siyasi enklav, DOKUNULMAZ
   🔒  icinde kasitli_bosluk noktasi -> DOKUNULMAZ

Kosum:  py arac/olc_enklav/olc_delik_kendi.py [gun ...]
"""
import sys
import time
import _ortak as O
import girdi
from shapely.geometry import Polygon, MultiPolygon, Point
from shapely.ops import unary_union
from shapely.strtree import STRtree

t0 = time.time()
Y = girdi.yukle(sessiz=True)
GOV, HUCRE = O.oku_petek_govde()
print("HIZALAMA SINAVI:")
O.hizalama_sinavi(Y, GOV)          # ayrisirsa cikis kodu 2 ile DURUR

NOKTA = [Point(y["lon"], y["lat"]) for y in Y]
N_AGAC = STRtree(NOKTA)
K_PARCA = O.oku_kara()
K_AGAC = STRtree(K_PARCA)
print(f"hucre {len(HUCRE)} · KARA parcasi {len(K_PARCA)} ({time.time()-t0:.0f} sn)")


def kara_kes(g):
    ps = [K_PARCA[int(q)] for q in K_AGAC.query(g)]
    if not ps:
        return Polygon()
    try:
        return g.intersection(unary_union(ps))
    except Exception:
        return g.buffer(0).intersection(unary_union(ps).buffer(0))


GUNLER = sys.argv[1:] or ["1300-06-15", "1400-06-15", "1500-06-15",
                          "1600-06-15", "1700-06-15", "1800-06-15",
                          "1900-06-15"]
ESIK = 100.0
OZET = {}

for g in GUNLER:
    t = time.time()
    sah = [O.sahip(y, g) for y in Y]
    per = {}
    for i, s in enumerate(sah):
        if s is None or HUCRE[i].is_empty:
            continue
        per.setdefault(s, []).append(HUCRE[i])
    GOVDE = {k: unary_union(v) for k, v in per.items()}
    boyali = unary_union(list(GOVDE.values()))

    ham = 0.0
    kayit = []
    for k, gv in GOVDE.items():
        for p in (gv.geoms if gv.geom_type == "MultiPolygon" else [gv]):
            if p.is_empty or p.geom_type != "Polygon":
                continue
            for h in p.interiors:
                halka = Polygon(h)
                if halka.area <= 0:
                    continue
                kalan0 = halka.difference(boyali)
                if kalan0.is_empty:
                    continue
                ham += O.km2(kalan0)
                # 🔴 KARA KESIMI SART — atlanirsa her GOL delik gorunur
                kalan = kara_kes(kalan0)
                if kalan.is_empty:
                    continue
                for q in (kalan.geoms if kalan.geom_type == "MultiPolygon"
                          else [kalan]):
                    if q.is_empty or q.geom_type != "Polygon":
                        continue
                    a = O.km2(q)
                    if a < ESIK:
                        continue
                    ic = [int(x) for x in N_AGAC.query(q)
                          if q.contains(NOKTA[int(x)])]
                    sh = [i for i in ic if sah[i] is None]
                    kb = [i for i in ic if Y[i].get("kasitli_bosluk")]
                    kayit.append((a, k, q.centroid, ic, sh, kb))

    kayit.sort(reverse=True, key=lambda x: x[0])
    kara_top = sum(d[0] for d in kayit)
    kbv = [d for d in kayit if d[5]]
    m1 = [d for d in kayit if d[4] and not d[5]]
    m2 = [d for d in kayit if not d[3] and not d[5]]
    m3 = [d for d in kayit if d[3] and not d[4] and not d[5]]
    osm = [d for d in kayit if d[1] in ("OSMANLI", "tabi")]
    OZET[g] = (ham, kara_top, len(kayit), len(kbv), len(m1),
               sum(d[0] for d in m1), len(m2), sum(d[0] for d in m2),
               len(m3), len(osm))
    print()
    print("=" * 78)
    print(f"KESIT {g}")
    print(f"   halka icindeki boyanmamis alan (HAM) : {ham:>12,.0f} km²")
    print(f"   bunun KARA olani (GERCEK delik)      : {kara_top:>12,.0f} km²  "
          f"({len(kayit)} adet ≥{ESIK:.0f} km²)")
    print(f"   ⇒ SU (gol / ic deniz), ELENDI        : {ham-kara_top:>12,.0f} km²")
    print(f"   🔒 kasitli_bosluk noktali : {len(kbv):>4}  DOKUNULMAZ")
    print(f"   M1 sahipsiz hucreli       : {len(m1):>4} · {sum(d[0] for d in m1):>11,.0f} km²")
    print(f"   M2 hic nokta yok (tavan)  : {len(m2):>4} · {sum(d[0] for d in m2):>11,.0f} km²")
    print(f"   M3 gercek siyasi enklav   : {len(m3):>4}  DOKUNULMAZ")
    print(f"   Osmanli/tabi govdesinde   : {len(osm):>4}")
    for a, k, c, ic, sh, kb in kayit[:12]:
        ad = ", ".join(Y[i]["ad"] for i in ic[:2]) or "(nokta YOK)"
        cins = "🔒KB" if kb else ("M1" if sh else ("M2" if not ic else "M3"))
        print(f"      {cins:<4} {a:>10,.0f} km² {k:<20} "
              f"{c.y:6.2f}K {c.x:7.2f}D  {ad[:34]}")
    print(f"   ({time.time()-t:.0f} sn)")

print()
print("=" * 96)
print(f"{'gun':<13}{'HAM':>11}{'KARA':>11}{'SU':>11}{'adet':>6}"
      f"{'KB':>4}{'M1':>4}{'M1km²':>10}{'M2':>4}{'M2km²':>9}{'M3':>4}{'OSM':>5}")
for g in GUNLER:
    ham, ka, n, kn, n1, a1, n2, a2, n3, no = OZET[g]
    print(f"{g:<13}{ham:>11,.0f}{ka:>11,.0f}{ham-ka:>11,.0f}{n:>6}"
          f"{kn:>4}{n1:>4}{a1:>10,.0f}{n2:>4}{a2:>9,.0f}{n3:>4}{no:>5}")
print()
print("11 Agu 2026 tabani (2308 nokta): 3-8 delik · 5.510-154.291 km² ·")
print("KB 0/7 kesit · M3 0/7 kesit. Bu sayilardan SAPMA, tabanin kaydigini")
print("ya da motorun degistigini gosterir — hangisi oldugunu ÖLÇ, tahmin etme.")

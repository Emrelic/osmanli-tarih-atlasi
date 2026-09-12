# -*- coding: utf-8 -*-
"""KITA 13 — IS④ TABANI: iki seritte BUGUN ne var? (SALT OKUR)

🔴 KOORDINATORUN UYARISI AYNEN UYGULANIYOR: bir adi "yok" ilan etmeden
   once ① normallestiriciyle ara ② KOMSULUKTAN da bak. Kendi turumda
   "Dogubeyazit ATLASTA YOK" dedigim vaka tam buydu — veride
   "Dogubayazit" olarak vardi (e<->a) ve ancak KOMSU TARAMASINDA gorundu.
   Bu yuzden bu alet her aday icin UC sey basar:
     ① tam/alt-dizgi ad eslesmesi
     ② adin en yakin 3 KOMSUSU (koordinat verilmisse)
     ③ kutu icindeki TUM noktalar
"""
import os, sys, io, importlib.util

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

_s = importlib.util.spec_from_file_location(
    "n", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_m = importlib.util.module_from_spec(_s)
_s.loader.exec_module(_m)
norm = _m.norm

import girdi

Y = girdi.yukle(sessiz=True)

KUTULAR = [
    ("LIBYA KIYISI (Berka/Cyrenaica)", 29.5, 33.5, 19.0, 25.5),
    ("MISIR BATI COLU", 24.0, 31.5, 24.0, 31.5),
]

# aday ad + (lat, lon) — koordinatlar ONERIDIR, dogrulanacak
ADAYLAR = [
    ("Tobruk",            32.077, 23.971),
    ("Derne",             32.766, 22.639),
    ("Bingazi",           32.117, 20.068),
    ("Mercu (Marj)",      32.500, 20.883),
    ("Beyda (el-Beyda)",  32.763, 21.750),
    ("Ecdâbiye",          30.755, 20.225),
    ("Avcile (Awjila)",   29.108, 21.287),
    ("Dâhile (Dakhla)",   25.492, 29.000),
    ("Hârice (Kharga)",   25.451, 30.546),
    ("Farâfra",           27.058, 27.970),
    ("Bahriye (Bahariya)", 28.349, 28.864),
    ("Sîve (Siwa)",       29.203, 25.519),
]

print("# taban: %d nokta · %d girdi dosyasi"
      % (len(Y), len(girdi.GIRDI_DOSYALARI)))
print()
print("=" * 84)
print("① KUTU İÇİ — o şeritte bugün kaç nokta var")
for ad, la1, la2, lo1, lo2 in KUTULAR:
    ic = [y for y in Y
          if y.get("lat") is not None and y.get("lon") is not None
          and la1 <= y["lat"] <= la2 and lo1 <= y["lon"] <= lo2]
    print("   %-34s %3d nokta   (%s-%sK / %s-%sD)"
          % (ad, len(ic), la1, la2, lo1, lo2))
    for y in sorted(ic, key=lambda z: z["lon"]):
        print("        %-30s %8.3f %8.3f" % (y.get("ad"), y["lat"], y["lon"]))

print()
print("=" * 84)
print("② ADAY ADLAR — ÜÇ AYRI SINAV")
for ad, la, lo in ADAYLAR:
    n = norm(ad.split(" (")[0])
    tam = [y for y in Y if norm(y.get("ad", "")) == n]
    alt = [y for y in Y if n in norm(y.get("ad", "")) and y not in tam]
    # komşuluk sınavı — koordinata en yakın üç nokta
    k = []
    for z in Y:
        zla, zlo = z.get("lat"), z.get("lon")
        if zla is None or zlo is None:
            continue
        k.append((girdi.km(la, lo, zla, zlo), z))
    k.sort(key=lambda x: x[0])
    print("-" * 84)
    durum = ("🟢 VAR (tam)" if tam else
             "🟡 VAR (alt-dizgi)" if alt else "🔴 ad eşleşmesi YOK")
    print("   %-22s %s" % (ad, durum))
    for y in (tam + alt)[:2]:
        print("        eşleşen: %s  (%.3f, %.3f)"
              % (y.get("ad"), y.get("lat"), y.get("lon")))
    print("        en yakın 3 komşu (önerilen koordinata göre):")
    for d, z in k[:3]:
        im = "  ⚠️ 3 KM ALTI" if d < 3 else ""
        print("           %7.1f km  %s%s" % (d, z.get("ad"), im))

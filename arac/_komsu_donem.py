# -*- coding: utf-8 -*-
"""CATALCA — kaydi YOK. Komsularindan olcup yaz.

UYGULAMA-0019: "Catalca Hatti 1912'nin en kritik cephesi — kolun bir
yerlesim eksigiyle basliyor. Yeni nokta = yerlesimler*.js = sende."

🔴 Once 3 km mukerrer taramasi (CLAUDE.md §11), sonra komsu donemleri.
"""
import math
import sys

sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import girdi  # noqa: E402

Y = girdi.yukle() if hasattr(girdi, "yukle") else girdi.oku()
if isinstance(Y, tuple):
    Y = Y[0]

CATALCA = (41.1436, 28.4611)     # Catalca ilce merkezi


def km(a, b):
    la = math.radians((a[0] + b[0]) / 2)
    return math.hypot((a[1] - b[1]) * 111.32 * math.cos(la),
                      (a[0] - b[0]) * 110.57)


print("=== ① MUKERRER TARAMASI (3 km) ===")
yakin = []
for y in Y:
    if y.get("lat") is None:
        continue
    d = km(CATALCA, (y["lat"], y["lon"]))
    if d < 3:
        yakin.append((d, y["ad"]))
if yakin:
    for d, a in sorted(yakin):
        print("   🔴 %.2f km  %s" % (d, a))
else:
    print("   🟢 3 km icinde nokta YOK — yeni kayit guvenli")

print()
print("=== ② EN YAKIN 8 KOMSU ve DONEMLERI ===")
komsu = []
for y in Y:
    if y.get("lat") is None:
        continue
    d = km(CATALCA, (y["lat"], y["lon"]))
    if d < 90:
        komsu.append((d, y))
komsu.sort(key=lambda x: x[0])
for d, y in komsu[:8]:
    print("   %-26s %6.1f km  k:%s m:%s" % (y["ad"][:26], d, y.get("k"), y.get("m")))
    for a in ("s", "d", "v"):
        for p in (y.get(a) or []):
            print("        %s %s → %s %s" % (a, p.get("f"), p.get("t"), p.get("d", "")))

# -*- coding: utf-8 -*-
"""TABAN SINAVI — evren değişti mi, ve ölçümlerim hâlâ geçerli mi?

🔴 `§11`: *"BİR ALETİN EVRENİ DEĞİŞİNCE, ALET DEĞİŞMEDEN SESSİZCE
YANILIR."* 7 Ağustos'ta üç oturum aynı gün bu tuzağa düştü ve üçünde
de kod bir satır bile değişmemişti — değişen TABANDI.

Benim bütün "KIRMIZI 0" raporlarım 2731 noktaya · 441 künyeye karşı
ölçülmüştü. Koordinatör 3014 nokta · 591 künye bildirdi. Bu betik
ÖNCE tabanın gerçekten değiştiğini doğrular, SONRA sınavları yeniden
koşturur — çünkü değişmemiş bir tabana karşı "yeniden ölçtüm" demek,
hiç ölçmemekten kötüdür.

PROJE KÖKÜNDEN:  py denetim/ARAC-KAMERIKA-0903-taban-sina.py
"""
import io
import json
import math
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, "arac")
import girdi                                              # noqa: E402

G, KU, B, D = 15.0, 72.0, -170.0, -52.0

Y = girdi.yukle(sessiz=True)
print("=== TABAN ===")
print("  bağlı nokta      : 2731 → %d   (%+d)" % (len(Y), len(Y) - 2731))
print("  girdi dosyası    : 72 → %d" % len(girdi.GIRDI_DOSYALARI))

NOK = [(y["lat"], y["lon"], y.get("ad", "?")) for y in Y
       if isinstance(y.get("lat"), (int, float))
       and isinstance(y.get("lon"), (int, float))]
ic = [n for n in NOK if G <= n[0] <= KU and B <= n[1] <= D]
print("  KUTUMDAKİ nokta  : 98 → %d   (%+d)" % (len(ic), len(ic) - 98))

s = io.open("data/devletler.js", encoding="utf-8").read()
ids = set(re.findall(r'id\s*:\s*"([^"]+)"', s))
print("  künye            : 441 → %d   (%+d)" % (len(ids), len(ids) - 441))

DOS = ("denetim/KUNYE-KAMERIKA-0903.json",
       "denetim/KUNYE-KAMERIKA-0903-parti2.json",
       "denetim/KUNYE-KAMERIKA-0903-parti3.json",
       "denetim/KUNYE-KAMERIKA-0903-parti4.json")
benim = [k["id"] for d in DOS for k in json.load(io.open(d, encoding="utf-8"))]
inmeyen = [k for k in benim if k not in ids]
print("  BENİM 46 KÜNYEM  : inmiş %d · İNMEYEN %d %s"
      % (len(benim) - len(inmeyen), len(inmeyen), inmeyen or ""))

if len(Y) == 2731:
    print("\n🔴 TABAN DEĞİŞMEMİŞ — bu sınav ANLAMSIZ, koordinatörün")
    print("   bildirdiği 3014 ile uyuşmuyor. ÖNCE bunu sor.")
    sys.exit(1)


def km(a, b, c, d):
    t = math.pi / 180.0
    dp, dl = (c - a) * t, (d - b) * t
    h = (math.sin(dp / 2) ** 2
         + math.cos(a * t) * math.cos(c * t) * math.sin(dl / 2) ** 2)
    return 6371.0 * 2 * math.asin(math.sqrt(min(1.0, h)))


Z = json.load(io.open("denetim/ZINCIR-KAMERIKA-0903.json", encoding="utf-8"))
print("\n=== SINAV — 377 adayım YENİ evrene karşı ===")

# ① 3 km
yakin = []
for a in Z:
    for p in NOK:
        d = km(a["lat"], a["lon"], p[0], p[1])
        if d < 3.0:
            yakin.append("%.2f km  %s ↔ %s" % (d, a["ad"], p[2]))
print("① 3 km (bağlı evren %d nokta) : %s"
      % (len(NOK), "🟢 0" if not yakin else "🔴 %d" % len(yakin)))
for y in yakin:
    print("     " + y)

# ② ad çakışması
adlar = set(p[2] for p in NOK)
cak = [a["ad"] for a in Z if a["ad"] in adlar]
print("② ad çakışması               : %s"
      % ("🟢 0" if not cak else "🔴 %d %s" % (len(cak), cak)))

# ③ künye — zincirdeki her kimlik VAR mı
kul = set(p["d"] for a in Z for p in a["s"])
yok = sorted(k for k in kul if k not in ids)
print("③ zincirdeki kimlik %d · devletler.js'te YOK: %s"
      % (len(kul), "🟢 0" if not yok else "🔴 %d %s" % (len(yok), yok)))

# ④ hayalet — YENİ ömürlerle
omur = {}
for m in re.finditer(r'id\s*:\s*"([^"]+)"', s):
    pass
import subprocess                                          # noqa: E402
subprocess.run(["node", "denetim/ARAC-KAMERIKA-0903-omur.js"],
               stdout=io.open("denetim/_omur.json", "w", encoding="utf-8"))
omur = json.load(io.open("denetim/_omur.json", encoding="utf-8-sig"))


def gun(v):
    p = v.split("-")
    return (int(p[0]), int(p[1]), int(p[2]))


hay = []
for a in Z:
    for p in a["s"]:
        if p["d"] not in omur:
            continue
        kf, kt = omur[p["d"]]
        if gun(p["f"]) < gun(kf) or gun(p["t"]) > gun(kt):
            hay.append("%s · %s · %s..%s vs künye %s..%s"
                       % (a["ad"], p["d"], p["f"], p["t"], kf, kt))
print("④ hayalet (YENİ ömürlerle)   : %s"
      % ("🟢 0" if not hay else "🔴 %d" % len(hay)))
for h in hay[:10]:
    print("     " + h)
print("\nkünye ömrü okunan: %d" % len(omur))

# -*- coding: utf-8 -*-
"""UYGULA-4 ÖN SINAVI — yamayı indirmeden ÖNCE sorulacaklar.

    py denetim/ARAC-UYGULA4-ONSINAV-0918.py

① Yeni nokta (Kuban deltası bozkırı 45,50/37,80) için D002: ad çakışması
   (Türkçe normalleştirilmiş) + 3 km eşiği + en yakın beş komşu.
② Belgrad kaydının bugünkü `isg:`/`d:`/`s:` hâli.
③ 1789-10-13 ve 1791-08-04 günlerine ±30 günde kronoloji maddesi VAR MI
   (Değişmez 2i'nin soracağı soru — yamayı indirmeden önce bilinmeli).
🔴 Hiçbir şey YAZMAZ.
"""
import io, os, re, sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac"))
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass
import girdi

CEVIR = {ord(a): b for a, b in zip("İIıŞşĞğÜüÖöÇçÂâÎîÛû’'`", "iiisSgGuUoOcCaAiiuu   ")}


def norm(s):
    return re.sub(r"[^a-z0-9]+", "", s.translate(CEVIR).lower())


Y = girdi.yukle(sessiz=True)
print("yerleşim:", len(Y))

YENI = ("Kuban deltası bozkırı", 45.50, 37.80)
print("\n① D002 — yeni nokta:", YENI[0])
n = norm(YENI[0])
ayni = [y for y in Y if norm(y["ad"]) == n]
benzer = [y["ad"] for y in Y if n in norm(y["ad"]) or norm(y["ad"]) in n]
print("   aynı ad:", len(ayni), "· içeren/içerilen:", benzer[:6])
mes = sorted(((girdi.km(YENI[1], YENI[2], y["lat"], y["lon"]), y["ad"]) for y in Y))[:5]
for d, a in mes:
    print(f"   {d:8.1f} km  {a}")
print("   3 km eşiği:", "🔴 İHLAL" if mes[0][0] < 3 else "✓ temiz")

print("\n② Belgrad")
b = [y for y in Y if y["ad"] == "Belgrad"]
for y in b:
    print("   d:", [(p["f"], p["t"]) for p in y.get("d", [])])
    print("   s:", [(p["f"], p["t"], p.get("d")) for p in y.get("s", [])])
    print("   isg:", y.get("isg", "YOK"))

print("\n③ ±30 günde madde (çekirdek + kuyruk)")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
mad = []
for f in sorted(os.listdir(os.path.join(KOK, "data"))):
    if not (f.startswith("olaylar") or f.startswith("kronoloji")) or not f.endswith(".js"):
        continue
    t = io.open(os.path.join(KOK, "data", f), encoding="utf-8").read()
    for m in re.finditer(r't:\s*"(\d{4}-\d{2}-\d{2})"[^\n]{0,400}?b:\s*"([^"]{0,90})', t):
        mad.append((m.group(1), m.group(2), f))
print("   taranan madde:", len(mad))


def gun(s):
    from datetime import date
    return date(int(s[:4]), int(s[5:7]), int(s[8:10])).toordinal()


for hedef in ("1789-10-13", "1791-08-04", "1789-11-01"):
    yak = sorted(((abs(gun(t) - gun(hedef)), t, b, f) for t, b, f in mad))[:3]
    print(f"   {hedef}:")
    for d, t, b, f in yak:
        im = "🟢" if d <= 30 else "🔴"
        print(f"      {im} {d:5d} gün · {t} · {b[:70]} · {f}")

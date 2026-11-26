# -*- coding: utf-8 -*-
"""TR-1923-SINIR — ZİNCİR SINAVI: yeni sınır köylerinin 1281-1918 sahipliği, EN YAKIN
mevcut kayıtla (1923 yakası ne olursa olsun) uyuşuyor mu?

Niçin: yazıcı zinciri "aynı yakada, 1923 sahibi aynı" en yakın kayıttan alıyor. O kayıt
133 km uzakta olabiliyor (Qaţţīnah ← Rakka). 1923'te doğru, 1400'de yanlış boyayabilir.
Sınav: 1281-1918 arası 5 yılda bir örnek; köyün sahibi ≠ en yakın mevcut kaydın sahibi
olan örnek oranı. Karşılaştırma OSMANLI/tâbi eşdeğer sayılır.
"""
import sys, io, os, math, contextlib
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, "arac")
import girdi


def km(a, b, c, d):
    r = math.pi / 180
    return 6371 * math.hypot((d - b) * r * math.cos((a + c) / 2 * r), (c - a) * r)


def sahip(y, g):
    for k in ("d", "v"):
        for p in y.get(k) or []:
            if p["f"] <= g < p["t"]:
                return "OSMANLI"
    for p in y.get("s") or []:
        if p["f"] <= g < p["t"]:
            return p.get("d")
    return None


with contextlib.redirect_stdout(io.StringIO()), contextlib.redirect_stderr(io.StringIO()):
    Y = girdi.yukle(sessiz=True)
yeni = [y for y in Y if str(y.get("neden", "")).startswith("TR-1923-SINIR")]
eski = [y for y in Y if not str(y.get("neden", "")).startswith("TR-1923-SINIR") and y.get("tur") != "bolge"]
gunler = ["%d-06-15" % yl for yl in range(1285, 1919, 5)]
print(f"yeni köy {len(yeni)} · örnek gün {len(gunler)}")
for y in yeni:
    d, n = min((km(y["lat"], y["lon"], e["lat"], e["lon"]), e) for e in eski if True)
    fark = [g for g in gunler if sahip(y, g) != sahip(n, g)]
    ilk = fark[0] if fark else "-"
    print(f"  {y['ad'][:28]:28} en yakın {n['ad'][:24]:24} {d:5.1f} km · uyuşmayan {len(fark):3}/{len(gunler)}"
          + (f" · ilk {ilk}: {sahip(y, ilk)} ≠ {sahip(n, ilk)}" if fark else ""))

# -*- coding: utf-8 -*-
"""KITA 13 · 0044 — VAN GÖLÜ ÇEVRESİ KUTU TARAMASI (SALT OKUR)

İki soruya tek çıktıda cevap:
  ① Emre'nin "margin" ve "bakur" yazımları atlasta NE? — AD TAHMİNİ YOK:
     kutu içindeki TÜM noktalar basılır, ve aday kök dizgiler (merg,
     bargir, bakir, bakur, muradiye) normalleştirilmiş adda aranır.
     `CLAUDE.md §4` + ORTAK kurallar: "atlasta YOK" demeden önce KOMŞULUK.
  ② Van'ın fethi öncesi/sonrası (1548-06-15 / 1548-10-01) her noktanın
     SAHİBİ — motorun sırasıyla (d: > v: > s: > isg:).

Kutu: 36,8-40,2°K / 41,5-46,0°D  (Bitlis · Van · Hakkâri · Urmiye batısı ·
Doğubayazıt · Hoy)
"""
import os, sys, io, importlib.util

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

_spec = importlib.util.spec_from_file_location(
    "n", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_m = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_m)
norm = _m.norm

import girdi

Y = girdi.yukle(sessiz=True)
LA1, LA2, LO1, LO2 = 36.8, 40.2, 41.5, 46.0
GUNLER = ["1548-06-15", "1548-10-01"]
KOKLER = ["merg", "bargir", "bakir", "bakur", "muradiye", "hosap", "mahmud",
          "pinyan", "albak", "somay", "ercis", "adilcevaz", "ahlat"]


def sahip(y, g):
    for p in (y.get("d") or []):
        if p["f"] <= g < p["t"]:
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p["f"] <= g < p["t"]:
            return "tabi:" + str(p.get("d"))
    for p in (y.get("s") or []):
        if p["f"] <= g < p["t"]:
            return p.get("d")
    for p in (y.get("isg") or []):
        if p["f"] <= g < p["t"]:
            return "isg:" + str(p.get("d"))
    return "SAHIPSIZ"


ic = [y for y in Y if y.get("lat") is not None and y.get("lon") is not None
      and LA1 <= y["lat"] <= LA2 and LO1 <= y["lon"] <= LO2]
ic.sort(key=lambda y: (-y["lat"], y["lon"]))

print("# taban: %d nokta · %d girdi dosyası" % (len(Y), len(girdi.GIRDI_DOSYALARI)))
print("# kutu %.1f-%.1fK / %.1f-%.1fD → %d nokta" % (LA1, LA2, LO1, LO2, len(ic)))
print()
print("%-30s %7s %7s   %-14s %-14s" % ("ad", "lat", "lon", GUNLER[0], GUNLER[1]))
for y in ic:
    a, b = sahip(y, GUNLER[0]), sahip(y, GUNLER[1])
    im = "  ← DEĞİŞTİ" if a != b else ""
    print("%-30s %7.3f %7.3f   %-14s %-14s%s"
          % (y["ad"][:30], y["lat"], y["lon"], a, b, im))

print()
print("=" * 78)
print("② KÖK DİZGİ ARAMASI — BÜTÜN ATLASTA (kutu dışı dâhil)")
for k in KOKLER:
    bul = [y for y in Y if k in norm(y.get("ad", ""))]
    if bul:
        for y in bul:
            print("  %-10s → %-30s (%.3f, %.3f)" % (k, y["ad"], y["lat"], y["lon"]))
    else:
        print("  %-10s → ARANDI, YOK" % k)

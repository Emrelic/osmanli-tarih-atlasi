# -*- coding: utf-8 -*-
# SINIR-ARABISTAN-0078 — 1923-09-01'de Arabistan kapsamındaki hatların envanteri
import sys, json, re, glob, math
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
GUN = sys.argv[1] if len(sys.argv) > 1 else "1923-09-01"

def kayitlar(yol):
    out = []
    for sat in open(yol, encoding="utf-8"):
        s = sat.strip().rstrip(",")
        if s.startswith('{"id"'):
            out.append(json.loads(s))
    return out

def km(h):
    t = 0
    for (a, b), (c, d) in zip(h, h[1:]):
        x = math.radians(c - a) * math.cos(math.radians((b + d) / 2)); y = math.radians(d - b)
        t += 6371 * math.hypot(x, y)
    return t

# Arabistan kutusu: 34-60°D, 12-33°K (Hicaz-Necid-Yemen-Umman-Kuveyt-Tarafsızlar)
def kutuda(h):
    return any(34 <= x <= 60 and 12 <= y <= 32.5 for x, y in h)

toplam = 0; hepsi = 0
for yol in sorted(glob.glob("data/d_sinirlar*.js")):
    for k in kayitlar(yol):
        hepsi += 1
        h = k.get("hat") or []
        if isinstance(h, list) and h and isinstance(h[0][0], list):
            parca = h
        else:
            parca = [h]
        if not any(p and kutuda(p) for p in parca):
            continue
        akt = k.get("f", "") <= GUN < k.get("t", "9999")
        L = sum(km(p) for p in parca if p)
        print(("AKTİF " if akt else "      ") + f"{yol[5:]:32} {k['id']:40} {k.get('sinif','?'):3} {k.get('f')}→{k.get('t')} {L:7.1f} km  {k.get('taraflar')}")
        if akt: toplam += L
print(f"\nokunan kayıt (pozitif kontrol): {hepsi} · Arabistan kutusunda aktif toplam {toplam:.1f} km")

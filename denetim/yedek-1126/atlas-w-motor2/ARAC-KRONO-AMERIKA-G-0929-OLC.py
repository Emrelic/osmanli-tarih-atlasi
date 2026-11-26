# -*- coding: utf-8 -*-
"""KRONO-AMERIKA-G-0929 — rapor sayıları (yalnız okur)."""
import json, io, os, collections
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
d = json.load(io.open(os.path.join(KOK, "denetim", "SENKRON-DEFTER-0929.json"), encoding="utf-8"))
p = d["paket"]["PAKETSIZ:guney-amerika"]
print({k: p[k] for k in list(p)[:10]})
k = p["kayit"]
ac = [r for r in k if not (r.get("kuyrukta_kapali") or r.get("kunyede_kapali"))]
print("kayıt", len(k), "açık kayıt", len(ac), "| yerleşim-gün çifti")
c = collections.Counter((r["eski"], r["yeni"]) for r in ac)
for (e, y), n in c.most_common(30):
    print(n, e, "->", y)
print()
print("eski=ispanyol-peru (kayıt):", sum(1 for r in ac if r["eski"] == "ispanyol-peru"))
print("eski=—  (yerleşim doğumu):", sum(1 for r in ac if r["eski"] == "—"))
print("yil_temsili:", sum(1 for r in ac if r.get("yil_temsili")))
print("Beyan noktası:", sum(1 for r in ac if r["yerlesim"].startswith("Beyan")))

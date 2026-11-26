# -*- coding: utf-8 -*-
"""KRONO-AMERIKA-G-0929 — 232 net aday sınıflaması (gerçek yazıldı / artefakt / ölçülemedi). Yalnız OKUR."""
import json, io, os, re, collections, datetime
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
d = json.load(io.open(os.path.join(KOK, "denetim", "SENKRON-DEFTER-0929.json"), encoding="utf-8"))
k = d["paket"]["PAKETSIZ:guney-amerika"]["kayit"]
js = io.open(os.path.join(KOK, "data", "kronoloji_cok_guney_amerika.js"), encoding="utf-8").read()
E = json.loads(js[js.index("= [") + 2: js.rindex("];") + 1])

def gun(s):
    return datetime.date(int(s[:4]), int(s[5:7]), int(s[8:10]))

mt = [(gun(e["t"]), e["b"]) for e in E]
grp = collections.OrderedDict()
for r in sorted(k, key=lambda r: r["gun"]):
    if r.get("kuyrukta_kapali") or r.get("kunyede_kapali"):
        continue
    grp.setdefault((r["gun"], r["eski"], r["yeni"]), []).append(r)

sinif = collections.OrderedDict()
say = collections.Counter()
for (g, e, y), rs in grp.items():
    dg = gun(g)
    yakin = [b for (t, b) in mt if abs((t - dg).days) <= 30]
    yt = all(r.get("yil_temsili") for r in rs)
    beyan = all(r["yerlesim"].startswith("Beyan") for r in rs)
    if yakin:
        c = "A-YAZILDI"
    elif beyan:
        c = "B-ARTEFAKT-beyan-dolgu-noktasi"
    elif yt:
        c = "C-ARTEFAKT-yil-temsili"
    elif e == "—":
        c = "D-OLCULEMEDI-yerlesim-kurulusu(tarih/onem dogrulanmadi)"
    else:
        c = "E-OLCULEMEDI-devir(eslesen madde yok)"
    say[c] += 1
    sinif.setdefault(c, []).append((g, e, y, [r["yerlesim"] for r in rs][:3]))
with io.open(os.path.join(KOK, "denetim", "KRONO-AMERIKA-G-0929-SINIF-LISTESI.txt"), "w", encoding="utf-8") as f:
    for c in sinif:
        f.write("== %s (%d grup)\n" % (c, len(sinif[c])))
        for (g, e, y, ad) in sinif[c]:
            f.write("  %s  %s -> %s  | %s\n" % (g, e, y, "; ".join(ad)))
print("net aday grubu:", len(grp), "| madde:", len(E))
for c, n in sorted(say.items()):
    print(n, c)
print()
for c in sinif:
    if c.startswith(("E-", "B-", "C-")):
        print("==", c)
        for x in sinif[c]:
            print("  ", x)

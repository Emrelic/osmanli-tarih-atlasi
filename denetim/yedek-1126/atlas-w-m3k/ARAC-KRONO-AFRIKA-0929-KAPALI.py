# KRONO-AFRIKA-0929 — defterdeki açık aday gruplarının, künye içi kronolojide (devletler.js `kronoloji:[`)
# ya da başka kronoloji dosyalarında ZATEN kapalı olup olmadığını ölçer.
# Kural: aday grubunun yeni/eski künyesinin kendi kronolojisinde ±366 gün içinde madde var mı?
import re, io, json, sys, glob, os, datetime
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
dev = io.open(os.path.join(KOK, "data", "devletler.js"), encoding="utf-8").read()
bloklar = {}
for b in re.split(r'\n(?=\{ id:")', dev):
    m = re.match(r'\{ id:"([^"]+)"', b)
    if m:
        bloklar[m.group(1)] = b
kayit = re.compile(r't:\s*"(\d{3,4}-\d\d-\d\d)"[^{}]{0,300}?b:\s*"([^"]+)"')

def gun(s):
    y, a, d = s.split("-")
    return datetime.date(int(y), int(a), int(d)).toordinal()

def kunye_maddeleri(kid):
    b = bloklar.get(kid, "")
    return [(m.group(1), m.group(2)) for m in kayit.finditer(b)]

d = json.load(io.open(os.path.join(KOK, "denetim", "SENKRON-DEFTER-0929.json"), encoding="utf-8"))
for bolge in ["bati", "dogu", "guney", "orta"]:
    v = d["paket"]["PAKETSIZ:%s-afrika" % bolge]
    gr = {}
    for r in v["kayit"]:
        if r["kuyrukta_kapali"] or r["kunyede_kapali"]:
            continue
        gr.setdefault((r["gun"], r["eski"], r["yeni"]), []).append(r["yerlesim"])
    print("==", bolge)
    for (g, e, y), l in gr.items():
        yakin = []
        for kid in {e, y} - {"—", "__BOSLUK__"}:
            for t, b in kunye_maddeleri(kid):
                try:
                    fark = abs(gun(t) - gun(g))
                except Exception:
                    continue
                if fark <= 366:
                    yakin.append(f"{kid}:{t}:{b[:70]}")
        durum = "KAPALI? " + " || ".join(yakin[:2]) if yakin else "AÇIK"
        print(f"{g} {e}->{y} ({len(l)}) {durum}")

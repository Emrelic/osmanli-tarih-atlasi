# -*- coding: utf-8 -*-
"""ARAC-NEHIR-VB2-0912 — Viabundus Nodes/Edges: GECIT dugum ve kenarlarinin
TURU ve SAYISI. Ve cografi kapsam (bbox) — atlasin hangi kismini kapatiyor?
"""
import io, os, json, zipfile, collections, csv

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
Z = os.path.join(KOK, "veri-kaynak", "viabundus", "Viabundus-1.3-CSV.zip")

with zipfile.ZipFile(Z) as f:
    ham = f.read("Nodes.csv").decode("utf-8", errors="replace")
rd = list(csv.DictReader(io.StringIO(ham)))
print("Nodes.csv satir:", len(rd))
print("sutunlar:", list(rd[0].keys()))
print("")
for sut in rd[0].keys():
    dl = sut.lower()
    if dl in ("type", "kind", "category", "class", "nodetype", "function"):
        c = collections.Counter(r.get(sut) for r in rd)
        print("[%s] dagilim:" % sut)
        for k, v in c.most_common(20):
            print("   %-28s %d" % (k, v))

# --- gecit ile ilgili dugumler ---------------------------------------------
ANAHTAR = ("bridge", "ferry", "ford", "brück", "brug", "pont")
gecit = []
for r in rd:
    s = " ".join(str(v or "") for v in r.values()).lower()
    if any(a in s for a in ANAHTAR):
        gecit.append(r)
print("")
print("GECITLE ILGILI dugum (ad/tur/aciklama iceren):", len(gecit))

# --- Edges: ferry kenarlari ve UZUNLUK dagilimi -----------------------------
with zipfile.ZipFile(Z) as f:
    ham2 = f.read("Edges.csv").decode("utf-8", errors="replace")
rd2 = list(csv.DictReader(io.StringIO(ham2)))
tip = collections.Counter(r["Type"] for r in rd2)
print("")
print("Edges.csv Type dagilimi:", dict(tip))
fer = [r for r in rd2 if r["Type"] == "ferry"]
uz = []
for r in fer:
    try:
        uz.append(float(r["Length"]))
    except (TypeError, ValueError):
        pass
if uz:
    uz.sort()
    print("FERIBOT kenari uzunlugu (Length alani, birim veri belgesinde):")
    print("   n=%d  min %.3f  medyan %.3f  ort %.3f  max %.3f"
          % (len(uz), uz[0], uz[len(uz)//2], sum(uz)/len(uz), uz[-1]))

# --- cografi kapsam: Edges geojson'dan bbox (akitarak degil, tam okuma) -----
GJ = os.path.join(KOK, "veri-kaynak", "viabundus", "Viabundus-1.3-Edges.geojson")
print("")
print("Edges.geojson %.1f MB — bbox olculuyor..." % (os.path.getsize(GJ)/1e6))
d = json.load(io.open(GJ, encoding="utf-8"))
x0 = y0 = 1e9
x1 = y1 = -1e9
ferry_n = 0
for ft in d["features"]:
    if (ft.get("properties") or {}).get("Type") == "ferry":
        ferry_n += 1
    g = ft.get("geometry") or {}
    def gez(c):
        global x0, y0, x1, y1
        if isinstance(c[0], (int, float)):
            x0 = min(x0, c[0]); x1 = max(x1, c[0])
            y0 = min(y0, c[1]); y1 = max(y1, c[1])
        else:
            for q in c:
                gez(q)
    if g.get("coordinates"):
        gez(g["coordinates"])
print("   kapsam bbox: lon %.2f .. %.2f   lat %.2f .. %.2f" % (x0, x1, y0, y1))
print("   geojson icinde ferry kenari:", ferry_n)

hedef = os.path.join(KOK, "denetim", "NEHIR-VIABUNDUS2-0912.json")
io.open(hedef, "w", encoding="utf-8").write(json.dumps({
    "nodes_satir": len(rd), "nodes_sutun": list(rd[0].keys()),
    "gecitle_ilgili_dugum": len(gecit),
    "edges_tip": dict(tip), "ferry_kenar": len(fer),
    "ferry_uzunluk": {"n": len(uz), "min": uz[0] if uz else None,
                      "medyan": uz[len(uz)//2] if uz else None,
                      "max": uz[-1] if uz else None},
    "bbox": {"lon": [x0, x1], "lat": [y0, y1]},
}, ensure_ascii=False, indent=1))
print("")
print("yazildi:", hedef)

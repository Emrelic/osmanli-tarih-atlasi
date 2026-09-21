# -*- coding: utf-8 -*-
"""GOSTERIM-0075 / H-0048-2 — sıfır genişlikli İĞNE (halka içinde geri dönüş) araması.
`ARAC-GOSTERIM-0075-IGNE.py` alan tabanlıydı (tampon açma) ve sıfır alanlı bir iğneyi GÖREMEZ. Bu alet HAM HALKA
köşelerine bakar: ardışık iki kenar arasındaki dönüş ≥ 170° ve iki kenardan biri ≥ MIN_KM ise "geri dönüş iğnesi".
Ayrıca halka kendi üstüne biniyor mu (geçerlilik). Kutu içinde `o`,`v`,`h` halkaları ve o günün yabancı halkaları.
SALT OKUR. py denetim/ARAC-GOSTERIM-0075-IGNE2.py <KOK> <gun> lon0 lat0 lon1 lat1
"""
import io, os, sys, json, math, time
KOK = sys.argv[1]; GUN = sys.argv[2]; lon0, lat0, lon1, lat1 = (float(x) for x in sys.argv[3:7])
MIN_KM = 15.0
BURASI = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def satir_json(yol, degisken):
    for satir in io.open(yol, encoding="utf-8"):
        if satir.startswith("window." + degisken + " "):
            i = satir.index("=") + 1
            return json.loads(satir[i:].rstrip().rstrip(";\n").rstrip(";"))
    raise KeyError(degisken)

t0 = time.time()
DON = os.path.join(KOK, "data", "donemler.js"); DEV = os.path.join(KOK, "data", "devletler_harita.js")
PARCALAR = satir_json(DON, "PARCALAR"); PARCA_HALKA = satir_json(DON, "PARCA_HALKA"); DONEMLER = satir_json(DON, "DONEMLER")
D_PARCALAR = satir_json(DEV, "DEVLET_PARCALAR"); D_PARCA_HALKA = satir_json(DEV, "DEVLET_PARCA_HALKA")
DEVLET_HARITA = satir_json(DEV, "DEVLET_HARITA")
print("ayrıştırma %.1f sn" % (time.time() - t0), flush=True)

def gecerli(f, t, g): return (not f or f <= g) and (not t or g < t)
def km(a, b):
    la = math.radians((a[1] + b[1]) / 2)
    return math.hypot((b[0] - a[0]) * 111.32 * math.cos(la), (b[1] - a[1]) * 110.57)
def kutuda(r): return any(lon0 <= p[0] <= lon1 and lat0 <= p[1] <= lat1 for p in r)
def igneler(r):
    out = []
    n = len(r) - 1 if r[0] == r[-1] else len(r)
    for i in range(n):
        a, b, c = r[i - 1], r[i], r[(i + 1) % n]
        ab, bc = km(a, b), km(b, c)
        if ab < 1e-6 or bc < 1e-6: continue
        u = ((b[0] - a[0]) * math.cos(math.radians(b[1])), b[1] - a[1]); v = ((c[0] - b[0]) * math.cos(math.radians(b[1])), c[1] - b[1])
        cos = (u[0] * v[0] + u[1] * v[1]) / (math.hypot(*u) * math.hypot(*v) or 1)
        ang = math.degrees(math.acos(max(-1, min(1, cos))))       # 0 = düz devam · 180 = tam geri dönüş
        if ang >= 170 and max(ab, bc) >= MIN_KM:
            out.append({"kose": [round(b[0], 3), round(b[1], 3)], "donus_derece": round(ang, 1), "kenar_km": [round(ab, 1), round(bc, 1)]})
    return out

SON = {}
for d in DONEMLER:
    if not gecerli(d.get("f"), d.get("t"), GUN): continue
    for alan in ("o", "v", "h"):
        idx = []
        for e in d.get(alan) or []:
            if isinstance(e, int): idx.append(e)
            elif isinstance(e, dict): idx.extend(e.get("g") or [])
        n_halka = 0; liste = []
        for i in idx:
            for hi in PARCA_HALKA[i]:
                r = PARCALAR[hi]; n_halka += 1
                if not kutuda(r): continue
                for ig in igneler(r): ig["parca"] = i; ig["halka"] = hi; ig["halka_koseleri"] = len(r); liste.append(ig)
        SON["OSM-" + alan] = {"halka": n_halka, "igne": len(liste), "ornek": liste[:6]}
        print("OSM-%s · halka %d · kutuda iğne %d" % (alan, n_halka, len(liste)))
        for x in liste[:6]: print("    ", x)
    break
for dv in DEVLET_HARITA:
    for d in dv.get("dnm") or []:
        if not gecerli(d.get("f"), d.get("t"), GUN): continue
        liste = []
        for i in (d.get("g") or []):
            for hi in D_PARCA_HALKA[i]:
                r = D_PARCALAR[hi]
                if not kutuda(r): continue
                for ig in igneler(r): ig["parca"] = i; liste.append(ig)
        if liste:
            SON[dv["id"]] = {"igne": len(liste), "ornek": liste[:6]}
            print("%s · kutuda iğne %d" % (dv["id"], len(liste)))
            for x in liste[:4]: print("    ", x)
        break
io.open(os.path.join(BURASI, "denetim", "GOSTERIM-0075-IGNE2.json"), "w", encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
print("yazıldı · %.1f sn" % (time.time() - t0))

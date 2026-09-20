# -*- coding: utf-8 -*-
"""H-0008 SEBEP TESTI 2 — ayni PARCA indeksi iki devlete birden mi verilmis?

devletler_harita.js'te her devletin dnm[].g alani DEVLET_PARCA_HALKA havuzuna
indekstir. Eger bir gun icin AYNI indeks iki devletin g listesinde birden
geciyorsa, cakisma URETILEN DOSYADA acikca yazilidir (geometri kazasi degil).
Cikti: denetim/HARITA-DURUM-0074-PARCA.json
"""
import io, os, sys, json

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def _satir_json(yol, degisken):
    for satir in io.open(yol, encoding="utf-8"):
        if satir.startswith("window." + degisken + " "):
            return json.loads(satir[satir.index("=")+1:].rstrip().rstrip(";\n").rstrip(";"))
    raise KeyError(degisken)

DEV = os.path.join(KOK, "data", "devletler_harita.js")
DEVLET_HARITA = _satir_json(DEV, "DEVLET_HARITA")
print("devlet:", len(DEVLET_HARITA))

def gecerli(f, t, g):
    return (not f or f <= g) and (not t or g < t)

SON = {}
for gun in (sys.argv[1:] or ["1850-01-01", "1828-02-22", "1700-01-01"]):
    sahip = {}
    for dv in DEVLET_HARITA:
        for d in dv.get("dnm") or []:
            if not gecerli(d.get("f"), d.get("t"), gun): continue
            for i in d.get("g") or []:
                sahip.setdefault(i, []).append(dv["id"])
            break
    coklu = {i: k for i, k in sahip.items() if len(set(k)) > 1}
    cift = {}
    for i, k in coklu.items():
        ks = sorted(set(k))
        for a in range(len(ks)):
            for b in range(a+1, len(ks)):
                c = "%s + %s" % (ks[a], ks[b])
                cift[c] = cift.get(c, 0) + 1
    SON[gun] = {"gun": gun, "o_gun_kullanilan_parca": len(sahip),
                "IKI_DEVLETE_BIRDEN_verilen_parca": len(coklu),
                "cift": dict(sorted(cift.items(), key=lambda x: -x[1])[:25])}
    print("%s | kullanilan parca %6d | IKI DEVLETE BIRDEN %6d | cift %d"
          % (gun, len(sahip), len(coklu), len(cift)))
    for c, n in list(SON[gun]["cift"].items())[:10]:
        sys.stdout.buffer.write(("    %-52s %5d parca\n" % (c[:52], n)).encode("utf-8", "replace"))

io.open(os.path.join(KOK, "denetim", "HARITA-DURUM-0074-PARCA.json"), "w",
        encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
print("yazildi")

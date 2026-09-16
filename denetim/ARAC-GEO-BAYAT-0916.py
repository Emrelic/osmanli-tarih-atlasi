# -*- coding: utf-8 -*-
"""GEOMETRI 0916 — iki hipotezin sınavı (YALNIZ OKUR). Girdi: OLCUM-GEO-0916.json.

HİPOTEZ-1 (örtüşme/boşluk = BAYAT GÖVDE):
  `_yabanci_devlet_faz1` bir devletin gövdesini yalnız KENDİ yerleşimlerinin
  s/d/v tarihlerinde yeniden kurar (`ts`). Komşu bir yerleşimin kur:/bit:'i
  `petek_epok` geometrisini değiştirir ama o devletin `ts`ine girmez ⇒ eski
  gövde, komşunun yeni gövdesiyle örtüşür / arada boşluk kalır.
  SINAV: her örtüşmede ESKİ dönemin (f küçük olan) başlangıcı ile gün arasında,
  örtüşme noktasına 300 km içinde kur:/bit: olayı var mı, ve o gün eski
  devletin ts'inde mi?  ÖNGÖRÜ (ölçümden önce yazıldı): örtüşmelerin ≥%70'inde
  ts DIŞI bir epok olayı bulunur.
  🔴 ÇÜRÜTÜCÜ: olay YOKSA mekanizma başka (ör. PUAN kapısı / B2-B3 süsü).

HİPOTEZ-2 (düz kenarlı üçgen = paylaştırılmış ölü petek):
  Üçgen gövdenin altındaki taban petek, o gün kur:'u gelmemiş bir yerleşimin.
"""
import json, math, os, sys
sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

Y = girdi.yukle(sessiz=True)
O = json.load(open(os.path.join(KOK, "denetim", "OLCUM-GEO-0916.json"), encoding="utf-8"))


def km(a, b):
    return girdi.km(a[1], a[0], b[1], b[0])


def ts_of(did):
    ts = set()
    for y in Y:
        if any(sp["d"] == did for sp in y.get("s") or []):
            for sp in y["s"]:
                if sp["d"] == did:
                    ts.add(sp["f"]); ts.add(sp["t"])
            for dn in (y.get("d") or []) + (y.get("v") or []):
                ts.add(dn["f"]); ts.add(dn["t"])
    return ts


TS = {}
sonuc = {"h1": [], "h2": []}
n_ort = n_olayli = 0
for v in O["vakalar"]:
    for o in v["ortusme"]:
        if o["a"].startswith("OSM"):
            eski, yeni = o["b"], o["a"]
            fe, fy = o["b_dnm"]["f"], o["a_dnm"]["f"]
        elif o["b"].startswith("OSM"):
            eski, yeni = o["a"], o["b"]
            fe, fy = o["a_dnm"]["f"], o["b_dnm"]["f"]
        else:
            (eski, fe), (yeni, fy) = sorted([(o["a"], o["a_dnm"]["f"]), (o["b"], o["b_dnm"]["f"])],
                                            key=lambda x: x[1])
        if eski not in TS:
            TS[eski] = ts_of(eski)
        for p in o["parca"]:
            if p["km2"] < 20:
                continue
            n_ort += 1
            olay = []
            for y in Y:
                if "lat" not in y:
                    continue
                d = km(p["nokta"], (y["lon"], y["lat"]))
                if d > 300:
                    continue
                for k in ("kur", "bit"):
                    t = y.get(k)
                    if t and fe < t <= v["gun"]:
                        olay.append({"ad": y["ad"], k: t, "km": round(d), "eski_ts_icinde": t in TS[eski]})
            disari = [x for x in olay if not x["eski_ts_icinde"]]
            if disari:
                n_olayli += 1
            sonuc["h1"].append({"vaka": v["id"], "eski": eski, "eski_f": fe, "yeni": yeni, "yeni_f": fy,
                                "km2": p["km2"], "nokta": p["nokta"],
                                "ts_disi_epok_olayi": sorted(disari, key=lambda x: x["km"])[:5]})
sonuc["h1_ozet"] = {"ortusme_parcasi_>=20km2": n_ort, "ts_disi_olayli": n_olayli,
                    "oran": round(n_olayli / n_ort, 3) if n_ort else None}

# HİPOTEZ-2: üçgen noktaları (ekran görüntüsünden piksel→derece, ±0,2°)
UCGEN = [("H-0012", "1605-10-03", (44.5, 44.0)), ("H-0012", "1605-10-03", (44.2, 43.3)),
         ("H-0124", "1679-01-01", (44.8, 44.5)), ("H-0124", "1679-01-01", (45.2, 43.8)),
         ("H-0069", "1642-02-26", (39.9, 47.0)), ("H-0069", "1642-02-26", (39.6, 47.7)),
         ("H-0069", "1642-02-26", (39.7, 46.2))]
en_yakin = lambda p, n=4: sorted(((km(p, (y["lon"], y["lat"])), y) for y in Y if "lat" in y),
                                 key=lambda x: x[0])[:n]
for vid, gun, p in UCGEN:
    sat = []
    for d, y in en_yakin(p):
        sahip = None
        for k, lab in (("d", "OSMANLI"), ("v", "TABI")):
            if any(x["f"] <= gun < x["t"] for x in y.get(k) or []):
                sahip = lab
        if not sahip:
            sahip = next((x["d"] for x in y.get("s") or [] if x["f"] <= gun < x["t"]), None)
        sat.append({"ad": y["ad"], "km": round(d), "kur": y.get("kur"), "bit": y.get("bit"),
                    "sahip_gunde": sahip, "k": y.get("k")})
    sonuc["h2"].append({"vaka": vid, "gun": gun, "nokta": p, "en_yakin": sat})

json.dump(sonuc, open(os.path.join(KOK, "denetim", "OLCUM-GEO-BAYAT-0916.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
print("H1:", sonuc["h1_ozet"])
for r in sonuc["h1"]:
    print(f"  {r['vaka']:9} {r['eski']:16} {r['eski_f']} × {r['yeni']:14} {r['km2']:6} km²  ",
          [(x['ad'], x.get('kur') or x.get('bit'), x['km']) for x in r['ts_disi_epok_olayi'][:3]])
print("H2:")
for r in sonuc["h2"]:
    print(f"  {r['vaka']} {r['nokta']}", [(x['ad'], x['km'], x['kur'], x['sahip_gunde']) for x in r['en_yakin']])

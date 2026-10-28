# -*- coding: utf-8 -*-
# NOKTA-KAFKAS-0077 — kendi dosyamı (data/yerlesimler_p77_kafkas.js) girdi_listesi'ne DOKUNMADAN
# bellekte ekleyip sınar: ad çakışması · 3 km · alan kütüğü · BOYALAR kimliği · dönem
# kapsaması (1281-01-01 / kur → 1923-10-29 boşluksuz, çakışmasız, sıfır uzunluksuz).
# ATEŞLEME: --atesle bilerek bozuk bir kopya (sıfır uzunluk + delik + renksiz kimlik) sınar;
# alet bunları YAKALAMAZSA temiz sonucu geçersizdir (§11 "boş küme her öngörüyü doğrular").
import sys, os, copy
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
import renkler

BENIM = "yerlesimler_p77_kafkas.js"
BAS, SON = "1281-01-01", "1923-10-29"


def sina(benim, hepsi):
    kusur = []
    adlar = {y["ad"]: y["_k"] for y in hepsi}
    boya = set(renkler.BOYALAR) | {"__BOSLUK__"}
    for y in benim:
        if y["ad"] in adlar:
            kusur.append(f"AD ÇAKIŞMASI {y['ad']} ({adlar[y['ad']]})")
        for z in hepsi:
            d = girdi.km(y["lat"], y["lon"], z["lat"], z["lon"])
            if d < girdi.YAKINLIK_ESIK_KM:
                kusur.append(f"3 KM: {y['ad']} ↔ {z['ad']} {d:.1f} km")
        for alan in y:
            if alan not in girdi.BILINEN_ALANLAR:
                kusur.append(f"ALAN {y['ad']}.{alan}")
        pen = []
        for kat in ("s", "d", "v"):
            for p in y.get(kat) or []:
                for alan in p:
                    if alan not in girdi.BILINEN_DONEM_ALANLARI:
                        kusur.append(f"DÖNEM ALANI {y['ad']}.{kat}.{alan}")
                if p["f"] >= p["t"]:
                    kusur.append(f"SIFIR/TERS {y['ad']} {kat} {p['f']}..{p['t']}")
                if kat == "s" and p["d"] not in boya:
                    kusur.append(f"RENKSİZ {y['ad']} {p['d']}")
                pen.append((p["f"], p["t"], kat))
        pen.sort()
        imlec = y.get("kur") or BAS
        for f, t, kat in pen:
            if f > imlec:
                kusur.append(f"DELİK {y['ad']} {imlec}..{f}")
            if f < imlec:
                kusur.append(f"ÇAKIŞMA {y['ad']} {f} < {imlec}")
            imlec = max(imlec, t)
        if imlec != SON:
            kusur.append(f"SON {y['ad']} {imlec} != {SON}")
    return kusur


hepsi = []
for ad in girdi.GIRDI_DOSYALARI:
    for y in girdi.oku_dosya(ad):
        y["_k"] = ad
        hepsi.append(y)
benim = girdi.oku_dosya(BENIM)
print(f"evren: {len(girdi.GIRDI_DOSYALARI)} dosya / {len(hepsi)} nokta · benim: {len(benim)} nokta")

if "--atesle" in sys.argv:
    bozuk = copy.deepcopy(benim)
    bozuk[0]["s"][1]["t"] = bozuk[0]["s"][1]["f"]        # sıfır uzunluk + delik
    bozuk[1]["s"][2]["d"] = "boyasi-olmayan-kimlik"      # renksiz
    bozuk.append(dict(benim[0], ad="Rize", lat=41.021, lon=40.524))  # ad çakışması + 3 km
    k = sina(bozuk, hepsi)
    print("ATEŞLEME —", len(k), "kusur yakalandı (beklenen ≥ 5):")
    for s in k:
        print("  ", s)
    sys.exit(0 if len(k) >= 5 else 1)

k = sina(benim, hepsi)
print("kusur:", len(k))
for s in k:
    print("  ", s)
sys.exit(1 if k else 0)   # çıkış kodu: 0 temiz · 1 kusur (CLAUDE.md §3)

# -*- coding: utf-8 -*-
"""Üç iş: (a) MÖ adlarını devir listesine ayır, (b) tek tanıklı + (c) alias doğrulama partilerini üret,
(d) yt_ kayıtlarına hafif otomatik tarama (sızıntı denetimi). Salt okunur, yalnız denetim/yer-arastirma/ yazar.
Kullanım: py denetim/ARAC-YER-ANALIZ-1021.py"""
import sys, io, os, re, json, glob, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KL = os.path.join(KOK, "denetim", "yer-arastirma")
env = json.load(open(os.path.join(KOK, "denetim", "ONCE1281-YER-ENVANTER.json"), encoding="utf-8"))
tum = {}
for s in ("yok", "bolge", "dogal_nesne", "atlasta"):
    for r in env[s]:
        tum.setdefault(r["ad"], r)
p50 = {r["ad"]: r for r in json.load(open(os.path.join(KL, "parti_50_sonuc.json"), encoding="utf-8"))["sonuclar"]}

# (a) MÖ devri: yil_maks < 0 ve çözülmemiş
mo = []
for ad, s in p50.items():
    r = tum.get(ad)
    if r and r["yil_maks"] < 0 and s["durum"] != "cift_tanik":
        mo.append({"ad": ad, "durum_cevrimdisi": s["durum"], "madde_sayisi": r["n"], "yil_araligi": [r["yil_min"], r["yil_maks"]],
                   "ornek_maddeler": r["ornek"], "tek_tanik_koord": s.get("tek_tanik_koord"), "not": s.get("not")})
mo.sort(key=lambda x: -x["madde_sayisi"])
json.dump({"aciklama": "MÖ (yıl<0) kronoloji adları; çevrimdışı Pleiades+GeoNames ile çift tanık çıkmadı. VERI-MO-ARKEO'ya devir.", "adlar": mo},
          open(os.path.join(KL, "MO-DEVIR-1021.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("MÖ devri:", len(mo))

# (b) ikinci tanık: tek_tanik + (madde>=2 ya da büyük/başkent adayı) ; MS (yil_maks>=0)
tek = []
for ad, s in p50.items():
    r = tum.get(ad)
    if r and s["durum"] == "tek_tanik" and r["yil_maks"] >= 0 and r["n"] >= 2:
        tek.append({"ad": ad, "madde_sayisi": r["n"], "yil_araligi": [r["yil_min"], r["yil_maks"]], "ornek_maddeler": r["ornek"],
                    "tek_tanik_koord": s.get("tek_tanik_koord") or {"lat": s.get("lat"), "lon": s.get("lon")}, "ilk_tanik_not": s.get("not")})
tek.sort(key=lambda x: -x["madde_sayisi"])
print("ikinci tanık adayı (n>=2, MS):", len(tek))
for i in range(0, len(tek), 30):
    json.dump({"sinif": "ikinci_tanik", "adlar": tek[i:i + 30]}, open(os.path.join(KL, "parti_7%d_girdi.json" % (i // 30 + 1)), "w", encoding="utf-8"), ensure_ascii=False, indent=1)

# (c) alias doğrulama partileri
al = json.load(open(os.path.join(KL, "ALIAS-ORTACAG.json"), encoding="utf-8"))["alias"]
liste = [{"ad": k, "alias": v} for k, v in al.items() if v]
for i in range(0, len(liste), 30):
    json.dump({"sinif": "alias_dogrula", "adlar": liste[i:i + 30]}, open(os.path.join(KL, "parti_8%d_girdi.json" % (i // 30 + 1)), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("alias:", len(liste))

# (d) yt_ kayıtları: hafif otomatik tarama
sorun = []
for f in sorted(glob.glob(os.path.join(KOK, "data", "yerlesimler_once1281_yt_*.js"))):
    s = open(f, encoding="utf-8").read()
    for m in re.finditer(r'\{ ad:"([^"]*)", tur:"([^"]*)", lat:(-?[\d.]+), lon:(-?[\d.]+)', s):
        ad, tur, lat, lon = m.group(1), m.group(2), float(m.group(3)), float(m.group(4))
        blok = s[m.start(): s.find("},\n", m.start()) + 2]
        if re.search(r"\(.*\(.*\)", ad):
            sorun.append((os.path.basename(f), ad, "iç içe parantez"))
        if len(ad) > 50:
            sorun.append((os.path.basename(f), ad, "ad çok uzun"))
        if re.search(r"fort-2|findspot|cemetery|bath|temple|tomb", blok) and tur != "bolge":
            sorun.append((os.path.basename(f), ad, "Pleiades yerleşim olmayan tür izi"))
        if "ALIAS" in blok and "alias_teyit:false" in blok:
            sorun.append((os.path.basename(f), ad, "alias teyitsiz"))
        if tur == "bolge" and "çift tanık değil" not in blok and "TEMSİLCİ" not in blok:
            sorun.append((os.path.basename(f), ad, "bölge beyanı eksik"))
        if abs(lat) > 90 or abs(lon) > 180:
            sorun.append((os.path.basename(f), ad, "koordinat aralık dışı"))
json.dump(sorun, open(os.path.join(KL, "YT-TARAMA-1021.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("tarama sorunları:", len(sorun))
import collections
print(collections.Counter(x[2] for x in sorun))
for x in sorun[:60]:
    print(x)

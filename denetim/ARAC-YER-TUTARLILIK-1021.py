# -*- coding: utf-8 -*-
"""Kıta/bölge tutarlılık süzgeci: yt_ kayıtlarının koordinatı, adı anan maddelerin devlet bölgesiyle (devletler.js bolge) uyuşuyor mu?
Kullanım: py -I denetim/ARAC-YER-TUTARLILIK-1021.py <veri.json>   -> denetim/yer-arastirma/TUTARLILIK-1021.json
Kaba kutu + 6° marj: yalnız KITALAR ARASI yanlış eşleşmeyi (Monte Verde->İtalya türü) yakalar; ince hata yakalamaz."""
import sys, io, os, re, json, glob
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
from ad_esanlam import sadelestir as N

KUTU = {  # lat_min, lat_max, lon_min, lon_max
 "dogu-asya": (18, 60, 95, 150), "balkanlar": (34, 48, 13, 30), "guney-asya": (5, 38, 60, 95), "guneydogu-asya": (-12, 28, 92, 142),
 "dogu-afrika": (-15, 20, 28, 55), "bati-afrika": (3, 28, -20, 16), "anadolu": (34, 43, 25, 46), "orta-avrupa": (44, 56, 4, 26),
 "kuzey-amerika": (15, 72, -170, -50), "italya": (35, 48, 6, 19), "bati-avrupa": (41, 61, -11, 9), "arabistan": (12, 33, 33, 60),
 "dogu-avrupa": (44, 62, 20, 50), "orta-asya": (35, 52, 50, 90), "kuzey-afrika": (18, 38, -14, 35), "iran": (24, 40, 43, 64),
 "kafkasya": (38, 45, 38, 51), "guney-amerika": (-56, 13, -82, -34), "guney-afrika": (-36, -5, 11, 40), "suriye-filistin": (28, 38, 33, 43),
 "misir-sudan": (2, 32, 20, 39), "orta-afrika": (-12, 12, 8, 32), "orta-amerika-karayip": (8, 27, -92, -60), "mezopotamya": (28, 38, 38, 49),
 "okyanusya": (-48, 0, 110, 180), "iberya": (35, 44, -10, 4), "orta-amerika": (8, 24, -108, -82), "sibirya-bozkir": (45, 75, 50, 180),
 "kuzey-avrupa": (54, 72, 4, 32)}
MARJ = 6


def icinde(lat, lon, k):
    a, b, c, d = KUTU[k]
    return a - MARJ <= lat <= b + MARJ and c - MARJ <= lon <= d + MARJ


w = json.load(open(sys.argv[1], encoding="utf-8"))["win"]
dev = {d["id"]: d.get("bolge") for d in w["DEVLETLER"] if d.get("id")}
adbolge = {}          # norm ad -> {bolge etiketleri}
n_madde = {}
for k, v in w.items():
    if not isinstance(v, list):
        continue
    for it in v:
        if not (isinstance(it, dict) and it.get("b") and isinstance(it.get("t"), str)):
            continue
        ids = [x if isinstance(x, str) else (x or {}).get("id") for alan in ("taraflar", "devletler") for x in (it.get(alan) or [])]
        if isinstance(it.get("devlet"), str):
            ids.append(it["devlet"])
        et = {dev[i] for i in ids if i in dev and dev[i]}
        if not et:
            continue
        for fld in ("yer_id", "yer"):
            val = it.get(fld)
            if isinstance(val, str):
                for p in re.split(r"[;,/·→]| ve ", val):
                    for a in [re.sub(r"\([^)]*\)", " ", p)] + re.findall(r"\(([^)]*)\)", p):
                        n = N(a)
                        if len(n) >= 3:
                            adbolge.setdefault(n, set()).update(et)
sonuc = []
for f in sorted(glob.glob(os.path.join(KOK, "data", "yerlesimler_once1281_yt_*.js"))):
    s = open(f, encoding="utf-8").read()
    for b in re.split(r"\n(?=\{ ad:)", s)[1:]:
        m = re.match(r'\{ ad:"([^"]*)", tur:"([^"]*)", lat:(-?[\d.]+), lon:(-?[\d.]+)', b)
        k = re.search(r"kronolojide (.*?) adıyla geçer", b)
        if not m:
            continue
        ad, lat, lon = m.group(1), float(m.group(3)), float(m.group(4))
        kron = k.group(1) if k else ad
        et = adbolge.get(N(kron)) or adbolge.get(N(re.sub(r"\s*\(.*", "", ad))) or set()
        if not et:
            durum = "etiket_yok"
        elif any(icinde(lat, lon, e) for e in et if e in KUTU):
            durum = "uyumlu"
        else:
            durum = "UYUMSUZ"
        sonuc.append({"ad": ad, "kronoloji_adi": kron, "lat": lat, "lon": lon, "devlet_bolgeleri": sorted(et), "durum": durum, "dosya": os.path.basename(f)})
json.dump(sonuc, open(os.path.join(KOK, "denetim", "yer-arastirma", "TUTARLILIK-1021.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
import collections
print(collections.Counter(x["durum"] for x in sonuc))
for x in sonuc:
    if x["durum"] == "UYUMSUZ":
        print(x["ad"], x["lat"], x["lon"], x["devlet_bolgeleri"])

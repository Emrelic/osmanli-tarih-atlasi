# -*- coding: utf-8 -*-
"""KRON-ANTIK yer-eksik listesi (TSV) -> Pleiades + GeoNames çevrimdışı doğrulama -> parti_101_sonuc.json
Kullanım: py -I denetim/ARAC-YER-ANTIK-1021.py <tsv> <gaz-kok> <geonames cities1000.txt>
TSV koordinatı 'genel bilgi' notludur: TANIK SAYILMAZ, yalnız aynı adlı çok Pleiades kaydını ayırt etmek için ipucudur (25 km).
cift_tanik = Pleiades kaydı (ad eşleşmesi + TSV ipucu ≤25 km) + GeoNames adlı yerleşim (Pleiades noktasına ≤10 km, ad eşleşmesi)."""
import sys, io, os, re, json, csv, math, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
csv.field_size_limit(10 ** 9)
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
from ad_esanlam import sadelestir as N

TSV, GAZ, GEO = sys.argv[1], sys.argv[2], sys.argv[3]


def km(a, b):
    p = math.pi / 180
    h = math.sin((b[0] - a[0]) * p / 2) ** 2 + math.cos(a[0] * p) * math.cos(b[0] * p) * math.sin((b[1] - a[1]) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(h))


def fl(x):
    try:
        return float(x)
    except Exception:
        return None


places = {}
with open(os.path.join(GAZ, "gaz-pleiades", "pleiades-places-latest.csv"), encoding="utf-8", newline="") as f:
    for r in csv.DictReader(f):
        la, lo = fl(r["reprLat"]), fl(r["reprLong"])
        if la is not None:
            places[r["id"]] = {"id": r["id"], "title": r["title"], "lat": la, "lon": lo, "prec": r["locationPrecision"], "tip": r["featureTypes"]}
pidx = collections.defaultdict(set)


def pekle(ad, pid):
    for parca in re.split(r"[/,;]", ad or ""):
        n = N(re.sub(r"\(.*?\)", "", parca))
        if len(n) >= 3 and pid in places:
            pidx[n].add(pid)


for pid, p in places.items():
    pekle(p["title"], pid)
with open(os.path.join(GAZ, "gaz-pleiades", "pleiades-names-latest.csv"), encoding="utf-8", newline="") as f:
    for r in csv.DictReader(f):
        pid = r["pid"].rsplit("/", 1)[-1]
        pekle(r["nameTransliterated"], pid)
        pekle(r["nameAttested"], pid)
gidx = collections.defaultdict(list)
with open(GEO, encoding="utf-8") as f:
    for ln in f:
        a = ln.rstrip("\n").split("\t")
        if len(a) < 15:
            continue
        g = {"id": a[0], "ad": a[1], "lat": float(a[4]), "lon": float(a[5]), "ulke": a[8], "nufus": int(a[14] or 0)}
        for ad in [a[1], a[2]] + a[3].split(","):
            n = N(ad)
            if len(n) >= 3:
                gidx[n].append(g)


def adlar(ad, modern):
    s = set()
    for x in (ad, modern):
        x = x or ""
        s.add(re.sub(r"\s*\(.*?\)", "", x).strip())
        for i in re.findall(r"\(([^)]*)\)", x):
            s.update(z.strip() for z in re.split(r"[;,/]", i))
        s.update(z.strip() for z in re.split(r"[/;]", re.sub(r"\(.*?\)", "", x)))
    return [z for z in s if z]


YER = re.compile("settlement|fort|port|urban|tell|city|palace|temple|sanctuary|battlefield|findspot|tomb|pyramid|necropolis|cemetery|mine|archaeological|theatre|bath")
sonuclar = []
for r in csv.DictReader(open(TSV, encoding="utf-8"), delimiter="\t"):
    ad = r["ad"]
    hint = (fl(r["lat"]), fl(r["lon"]))
    isimler = adlar(ad, r["modern_ad"])
    pc = {}
    for n in {N(i) for i in isimler}:
        for pid in pidx.get(n, ()):
            p = places[pid]
            d = km(hint, (p["lat"], p["lon"])) if hint[0] is not None else 0.0
            if d <= 25 and (YER.search(p["tip"] or "") or not p["tip"]):
                pc[pid] = (d, p)
    if hint[0] is None and pc:        # ipucu yok: ad tek bir yere çözülmeli (≤25 km küme)
        nok = [v[1] for v in pc.values()]
        if any(km((nok[0]["lat"], nok[0]["lon"]), (q["lat"], q["lon"])) > 25 for q in nok):
            sonuclar.append({"ad": ad, "modern_ad": r["modern_ad"], "ilgili_devlet": r["ilgili_devlet"], "durum": "belirsiz", "not": "TSV koordinatı yok; ad birden çok uzak Pleiades kaydına çözülüyor"})
            continue
    out = {"ad": ad, "modern_ad": r["modern_ad"], "tsv_ipucu": [hint[0], hint[1]], "ilgili_devlet": r["ilgili_devlet"]}
    if not pc:
        out.update(durum="cozulemedi", not_="Pleiades'te ad eşleşmesi + TSV ipucu ≤25 km yok")
        sonuclar.append(out)
        continue
    d, p = sorted(pc.values(), key=lambda x: (x[1]["prec"] != "precise", x[0]))[0]
    pt = (p["lat"], p["lon"])
    gy = []
    for n in {N(i) for i in isimler}:
        for g in gidx.get(n, ()):
            if km(pt, (g["lat"], g["lon"])) <= 10:
                gy.append(g)
    tanik = [{"kaynak": "Pleiades", "url_veya_atif": "pleiades.stoa.org/places/%s (%s, %s, %s)" % (p["id"], p["title"], p["tip"], p["prec"]), "lat": p["lat"], "lon": p["lon"]}]
    if gy:
        g = sorted(gy, key=lambda g: -g["nufus"])[0]
        tanik.append({"kaynak": "GeoNames", "url_veya_atif": "geonames.org/%s (%s, %s)" % (g["id"], g["ad"], g["ulke"]), "lat": g["lat"], "lon": g["lon"]})
        out.update(durum="cift_tanik", esanlam_modern=g["ad"], ulke_modern=g["ulke"])
    else:
        out.update(durum="tek_tanik", tek_tanik_koord={"lat": p["lat"], "lon": p["lon"], "kaynak": "Pleiades " + p["id"]})
    out.update(lat=p["lat"], lon=p["lon"], tur="harabe" if re.search("tell|archaeological|ruin", p["tip"] or "") else "sehir", konum_kesinligi="kesin" if p["prec"] == "precise" else "yaklasik", tanik=tanik,
               not_="KRON-ANTIK TSV ipucuna %.1f km; Pleiades kümesi %d kayıt; TSV koordinatı genel bilgi (tanık değil). %s" % (d, len(pc), "" if gy else "GeoNames adlı yerleşim yok (harabe)."))
    sonuclar.append(out)
for s in sonuclar:
    if "not_" in s:
        s["not"] = s.pop("not_")
PNO = int(sys.argv[4]) if len(sys.argv) > 4 else 101
json.dump({"parti": PNO, "yontem": "cevrimdisi Pleiades+GeoNames; TSV listesi", "sonuclar": sonuclar}, open(os.path.join(KOK, "denetim", "yer-arastirma", "parti_%d_sonuc.json" % PNO), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(collections.Counter(s["durum"] for s in sonuclar))

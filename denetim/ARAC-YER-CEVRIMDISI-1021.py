# -*- coding: utf-8 -*-
"""Çevrimdışı gazetteer eşleme: envanterdeki 'yok' + 'bolge' adlarını Pleiades CSV + GeoNames cities15000 ile eşler.
Kullanım: py -I denetim/ARAC-YER-CEVRIMDISI-1021.py <gaz-klasoru-koku> <çıktı sonuc.json>
  gaz klasörü = içinde gaz-pleiades/ ve gaz-geonames/ olan klasör. Veri güvenilmez-veri: yalnız okunur.
Sonuç durumları: cift_tanik (Pleiades+GeoNames ≤10 km, tekil küme) · tek_tanik · belirsiz (birden çok uzak aday) ·
  bolge_nokta (Pleiades region/province temsilci noktası) · yok."""
import sys, io, os, re, json, csv, math, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
csv.field_size_limit(10 ** 9)
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
from ad_esanlam import sadelestir as N

GAZ = sys.argv[1]
CIK = sys.argv[2]
env = json.load(open(os.path.join(KOK, "denetim", "ONCE1281-YER-ENVANTER.json"), encoding="utf-8"))


def km(a, b):
    p = math.pi / 180
    h = math.sin((b[0] - a[0]) * p / 2) ** 2 + math.cos(a[0] * p) * math.cos(b[0] * p) * math.sin((b[1] - a[1]) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(h))


def fl(x):
    try:
        return float(x)
    except Exception:
        return None


# ---- Pleiades ----
places = {}
with open(os.path.join(GAZ, "gaz-pleiades", "pleiades-places-latest.csv"), encoding="utf-8", newline="") as f:
    for r in csv.DictReader(f):
        la, lo = fl(r["reprLat"]), fl(r["reprLong"])
        places[r["id"]] = {"id": r["id"], "title": r["title"], "lat": la, "lon": lo, "prec": r["locationPrecision"],
                           "tip": r["featureTypes"], "min": fl(r["minDate"]), "max": fl(r["maxDate"]), "bbox": r["bbox"]}
pidx = collections.defaultdict(set)      # norm ad -> {place id}


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
        pekle(r["title"], pid)

# ---- GeoNames ----
gidx = collections.defaultdict(list)
gsay = 0
with open(os.path.join(GAZ, "gaz-geonames", "cities15000.txt"), encoding="utf-8") as f:
    for ln in f:
        a = ln.rstrip("\n").split("\t")
        if len(a) < 15:
            continue
        g = {"id": a[0], "ad": a[1], "lat": float(a[4]), "lon": float(a[5]), "ulke": a[8], "nufus": int(a[14] or 0)}
        gsay += 1
        for ad in [a[1], a[2]] + a[3].split(","):
            n = N(ad)
            if len(n) >= 3 and g not in gidx[n]:
                gidx[n].append(g)

BOLGE_TIP = re.compile(r"region|province|people|island|archipelago|territory|district")
DOGAL_TIP = re.compile(r"river|mountain|lake|sea|bay|strait|pass|cape|channel|plain|valley|cave|road|bridge")


def adaylar_adlar(ad):
    s = {ad}
    s.add(re.sub(r"\s*\(.*?\)", "", ad))
    for i in re.findall(r"\(([^)]*)\)", ad):
        s.update(x.strip() for x in re.split(r"[;,/]", i))
    s.add(re.sub(r"\s+(Kalesi|Kale|Şehri|Kenti|şehri|kenti|Höyük|Höyüğü|Harabeleri)$", "", ad))
    s.add(re.sub(r"^(Tell|Tel|Tappe|Tepe)\s+", "", ad))
    return [x for x in s if x]


def esle(r):
    yil_a, yil_b = r["yil_min"], r["yil_maks"]
    pc = {}
    gc = {}
    for ad in adaylar_adlar(r["ad"]):
        n = N(ad)
        for pid in pidx.get(n, ()):
            p = places[pid]
            if p["lat"] is not None:
                pc[pid] = p
        for g in gidx.get(n, ()):
            gc[g["id"]] = g
    # zaman süzgeci: antik yerlerde yıl aralığı çakışmayan Pleiades adaylarını geri sıraya at
    def zaman_uyar(p):
        if p["min"] is None or p["max"] is None:
            return True
        return p["min"] <= yil_b + 200 and p["max"] >= yil_a - 200
    pl = [p for p in pc.values() if zaman_uyar(p)] or list(pc.values())
    gl = list(gc.values())
    sonuc = {"ad": r["ad"], "n_pleiades": len(pl), "n_geonames": len(gl)}
    bolgemi = [p for p in pl if BOLGE_TIP.search(p["tip"] or "") and not re.search("settlement|fort|port|temple|urban", p["tip"] or "")]
    dogalmi = [p for p in pl if DOGAL_TIP.search(p["tip"] or "") and not re.search("settlement|fort|port|urban", p["tip"] or "")]
    yerlesim = [p for p in pl if re.search("settlement|fort|port|urban|tell|city|palace", p["tip"] or "")]
    if pl and not yerlesim and not bolgemi and not dogalmi:
        sonuc.update(durum="belirsiz", not_="Pleiades adayları yerleşim değil (%s)" % "; ".join(p["title"] + ":" + (p["tip"] or "") for p in pl[:3]))
        return sonuc
    gl_yayili = len(gl) > 1 and any(km((a["lat"], a["lon"]), (b["lat"], b["lon"])) > 50 for a in gl for b in gl)
    if pl and len(bolgemi) == len(pl):
        p = bolgemi[0]
        sonuc.update(durum="bolge_nokta", lat=p["lat"], lon=p["lon"], tanik=[{"kaynak": "Pleiades", "url_veya_atif": "pleiades.stoa.org/places/" + p["id"], "lat": p["lat"], "lon": p["lon"]}],
                     not_="Pleiades bölge/temsilci noktası (%s, tip: %s); BÖLGE TEMSİLCİSİ: yer bilinmiyor, bölge kaynakta" % (p["title"], p["tip"]))
        return sonuc
    if pl and len(dogalmi) == len(pl):
        sonuc.update(durum="dogal", not_=dogalmi[0]["title"] + " (" + dogalmi[0]["tip"] + ")")
        return sonuc
    pl = yerlesim or pl
    # küme: Pleiades adayları arasında ≤10 km olanlar tek yer sayılır
    kumeler = []
    for p in pl:
        for k in kumeler:
            if km((p["lat"], p["lon"]), (k[0]["lat"], k[0]["lon"])) <= 10:
                k.append(p)
                break
        else:
            kumeler.append([p])
    eslesen = []
    for k in kumeler:
        merkez = k[0]
        gy = sorted([g for g in gl if km((g["lat"], g["lon"]), (merkez["lat"], merkez["lon"])) <= 10], key=lambda g: -g["nufus"])
        eslesen.append((k, gy))
    if not pl:
        if gl and all(km((g["lat"], g["lon"]), (gl[0]["lat"], gl[0]["lon"])) <= 10 for g in gl):
            g = gl[0]
            sonuc.update(durum="tek_tanik", tek_tanik_koord={"lat": g["lat"], "lon": g["lon"], "kaynak": "GeoNames " + g["id"] + " " + g["ad"]}, lat=g["lat"], lon=g["lon"],
                         not_="yalnız GeoNames (Pleiades eşleşmesi yok)")
        elif gl:
            sonuc.update(durum="belirsiz", not_="GeoNames %d aday: %s" % (len(gl), "; ".join("%s %s,%s" % (g["ad"], g["lat"], g["lon"]) for g in gl[:4])))
        else:
            sonuc.update(durum="yok")
        return sonuc
    # tekil küme?
    ciftli = [e for e in eslesen if e[1]]
    if len(kumeler) == 1 or len(ciftli) == 1:
        k, gy = (ciftli[0] if len(ciftli) == 1 else eslesen[0])
        p = sorted(k, key=lambda p: (p["prec"] != "precise", -(1 if p["tip"] and "settlement" in p["tip"] else 0)))[0]
        tanik = [{"kaynak": "Pleiades", "url_veya_atif": "pleiades.stoa.org/places/" + p["id"] + " (" + p["title"] + ", " + (p["tip"] or "") + ", " + p["prec"] + ")", "lat": p["lat"], "lon": p["lon"]}]
        if gy and gl_yayili:
            sonuc.update(durum="belirsiz", not_="Aynı ad birden çok uzak yerde (GeoNames): " + "; ".join("%s %s,%s" % (g["ad"], g["lat"], g["lon"]) for g in gl[:4]))
            return sonuc
        if gy:
            g = gy[0]
            tanik.append({"kaynak": "GeoNames", "url_veya_atif": "geonames.org/" + g["id"] + " (" + g["ad"] + ", " + g["ulke"] + ")", "lat": g["lat"], "lon": g["lon"]})
            sonuc.update(durum="cift_tanik")
        else:
            sonuc.update(durum="tek_tanik", tek_tanik_koord={"lat": p["lat"], "lon": p["lon"], "kaynak": "Pleiades " + p["id"]})
        sonuc.update(lat=p["lat"], lon=p["lon"], tanik=tanik, konum_kesinligi="kesin" if p["prec"] == "precise" else "yaklasik",
                     pleiades_tip=p["tip"], pleiades_donem=[p["min"], p["max"]],
                     not_="Çevrimdışı eşleme: Pleiades CSV + GeoNames cities15000 (ad+10 km). Pleiades kümesi %d kayıt. %s" % (len(k), "" if len(kumeler) == 1 else "Birden çok Pleiades kümesi; GeoNames ile eşleşen seçildi."))
        return sonuc
    sonuc.update(durum="belirsiz", not_="%d ayrı Pleiades kümesi: %s" % (len(kumeler), "; ".join("%s %.3f,%.3f" % (k[0]["title"], k[0]["lat"], k[0]["lon"]) for k in kumeler[:5])))
    return sonuc


sonuclar = []
for sinif in ("yok", "bolge"):
    for r in env[sinif]:
        s = esle(r)
        s["sinif"] = sinif
        sonuclar.append(s)
for s in sonuclar:
    if "not_" in s:
        s["not"] = s.pop("not_")
sayi = collections.Counter((s["sinif"], s["durum"]) for s in sonuclar)
json.dump({"parti": 50, "yontem": "cevrimdisi Pleiades+GeoNames", "pleiades_yer": len(places), "geonames_sehir": gsay, "sonuclar": sonuclar},
          open(CIK, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(json.dumps({f"{a}/{b}": v for (a, b), v in sorted(sayi.items())}, ensure_ascii=False))

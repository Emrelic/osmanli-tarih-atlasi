# -*- coding: utf-8 -*-
"""K3-OLCUM'daki tarihçesiz k3 yerleşimlerden LAB bölgelerindekileri LISTE.tsv'ye kat=3 olarak ekler (Emre onaylı; LAB, 17 Kasım 2026).
Adım 1 (varsayılan): aday listesi üretir (k3_adaylar.tsv): mevcut LISTE satırıyla aynı ad ya da ≤5 km olanlar ELENİR.
Adım 2: py k3_liste_ekle.py ekle <bugun_sonuc.tsv> : GeoNames arama sonucu (E/boş) ile satırları LISTE'ye yazar.
bugun_var: GeoNames aramasında aynı normalize ad ≤25 km'de bir PPL varsa E (bugun_kaynak: GeoNames arama sayfası); yoksa BOŞ (ölçülmedi: H/D uydurulmaz)."""
import csv, io, math, os, re, sys, unicodedata
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
D = os.path.dirname(os.path.abspath(__file__))
BLOK = {"guney-asya": "hint", "orta-asya": "orta-asya-mogolistan", "sibirya-bozkir": "orta-asya-mogolistan", "bati-afrika": "afrika-guney-bati", "orta-afrika": "afrika-guney-bati", "guney-afrika": "afrika-guney-bati"}
def norm(s):
    s = unicodedata.normalize("NFD", (s or "").replace("İ", "i").replace("I", "ı").lower())
    s = "".join(c for c in s if unicodedata.category(c) != "Mn").replace("ı", "i")
    return re.sub(r"[^a-z0-9]+", " ", re.sub(r"\(.*?\)", "", s)).strip()
def km(a, b, c, d):
    p = math.pi / 180; x = math.sin((c - a) * p / 2) ** 2 + math.cos(a * p) * math.cos(c * p) * math.sin((d - b) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(x))
def liste(blok):
    rd = csv.DictReader(open(os.path.join(D, blok, "LISTE.tsv"), encoding="utf-8"), delimiter="\t")
    return rd.fieldnames, list(rd)
def adaylar():
    k3 = list(csv.DictReader(open(os.path.join(D, "K3-OLCUM", "K3-TARIHCESIZ-TUM.tsv"), encoding="utf-8"), delimiter="\t"))
    out = []
    mevcut = {}
    for blok in set(BLOK.values()):
        c, rows = liste(blok); mevcut[blok] = rows
    for x in k3:
        if x["tarihce_tanik"] != "yok" or x["bolge"] not in BLOK or not x["lat"]: continue
        blok = BLOK[x["bolge"]]; lat, lon = float(x["lat"]), float(x["lon"]); ad = x["ad"]
        if x["bolge"] == "sibirya-bozkir" and lon < 47: continue   # Volga/Rusya-Ukrayna batısı HAVVA'nın bölgesi
        var = False
        for y in mevcut[blok]:
            if norm(ad) in (norm(y["ad_1900"]), norm(y["ad_modern"]), norm(y["atlas_en_yakin"])): var = True; break
            if y["lat"] and km(lat, lon, float(y["lat"]), float(y["lon"])) <= 5: var = True; break
        if not var: out.append((blok, ad, lat, lon, x["bolge"], x["sahip_devlet"], x["id"]))
    return out
if len(sys.argv) < 2 or sys.argv[1] != "ekle":
    A = adaylar()
    with open(os.path.join(D, "k3_adaylar.tsv"), "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, delimiter="\t"); w.writerow(["blok", "ad", "lat", "lon", "bolge", "sahip_devlet", "atlas_id"]); w.writerows(A)
    print(len(A), "aday (LISTE'de olmayan)")
    print("|".join("%s~%s~%s" % (a[1], a[2], a[3]) for a in A))
else:
    sonuc = {}
    for l in open(sys.argv[2], encoding="utf-8").read().split("\n"):
        p = l.split("\t")
        if len(p) >= 2 and p[0]: sonuc[p[0]] = p[1:]
    A = adaylar(); eklenen = {}
    for blok, ad, lat, lon, bolge, sahip, aid in A:
        cols, rows = liste(blok)
        r = sonuc.get(ad, ["", ""])
        y = {c: "" for c in cols}
        y.update(blok=blok, kat="3", ad_1900="", ad_modern=ad, lat=str(lat), lon=str(lon), koord_yolu="atlas-yerlesim", giris="atlas-k3",
                 not_="atlas k:3 yerleşimi, tarihçesiz (K3-OLCUM); atlas bölgesi %s, çoğunluk sahip %s" % (bolge, sahip),
                 bugun_var=r[0], bugun_kaynak=(r[1] if r[0] else "ölçülmedi (GeoNames aramasında ≤25 km aynı ad yok)"))
        rows.append(y)
        with open(os.path.join(D, blok, "LISTE.tsv"), "w", encoding="utf-8", newline="") as f:
            w = csv.DictWriter(f, fieldnames=cols, delimiter="\t"); w.writeheader(); w.writerows(rows)
        eklenen[blok] = eklenen.get(blok, 0) + 1
    print("eklenen:", eklenen)

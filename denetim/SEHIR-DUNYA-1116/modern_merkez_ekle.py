# -*- coding: utf-8 -*-
"""LISTE.tsv'lere EKSİK MODERN BÖLGE MERKEZLERİ (Emre onaylı; LAB, 17 Kasım 2026). Mevcut satırlar SİLİNMEZ.
Kaynak: GeoNames ülke 'Administrative Division' sayfalarındaki birinci kademe (admin1: eyalet/il/bölge/oblast/aymag/province) MERKEZİ + GeoNames arama sayfasındaki PPLA/PPLC koordinatı (sayfa okuma, 17 Kasım).
NOT: bunlar birinci kademe merkezleridir (k:2 düzeyi); koordinatör 'k:3' demişti — admin2 (ilçe/kaza) merkezleri bu turda alınmadı (GeoNames admin2 sayfaları ayrı tarama ister). kat sütununa '2' yazıldı, not_ alanında beyan.
Eşleştirme: aynı bloktaki mevcut satırla (a) normalize ad aynı (ad_1900/ad_modern/atlas_en_yakın) ya da (b) ≤5 km ise EKLENMEZ.
Girdi: modern_merkez_ham.txt (iso|ad|lat|lon). Blok eşlemesi: Hint IN,PK,BD,NP,LK,BT,MV · Orta Asya KZ,UZ,TM,KG,TJ,MN · Afrika diğerleri."""
import csv, io, math, os, re, sys, unicodedata
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
D = os.path.dirname(os.path.abspath(__file__))
HINT = {"IN", "PK", "BD", "NP", "LK", "BT", "MV"}; ORTA = {"KZ", "UZ", "TM", "KG", "TJ", "MN"}
BLOK = lambda iso: "hint" if iso in HINT else ("orta-asya-mogolistan" if iso in ORTA else "afrika-guney-bati")
ULKE = {"IN": "Hindistan", "PK": "Pakistan", "BD": "Bangladeş", "NP": "Nepal", "LK": "Sri Lanka", "BT": "Butan", "MV": "Maldivler", "KZ": "Kazakistan", "UZ": "Özbekistan", "TM": "Türkmenistan", "KG": "Kırgızistan", "TJ": "Tacikistan", "MN": "Moğolistan"}
def norm(s):
    s = unicodedata.normalize("NFD", (s or "").replace("İ", "i").replace("I", "ı").lower())
    s = "".join(c for c in s if unicodedata.category(c) != "Mn").replace("ı", "i")
    return re.sub(r"[^a-z0-9]+", " ", re.sub(r"\(.*?\)", "", s)).strip()
def km(a, b, c, d):
    p = math.pi / 180; x = math.sin((c - a) * p / 2) ** 2 + math.cos(a * p) * math.cos(c * p) * math.sin((d - b) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(x))
ham = {}
for s in open(os.path.join(D, "modern_merkez_ham.txt"), encoding="utf-8").read().split("\n"):
    p = s.split("|")
    if len(p) != 4: continue
    try: ham.setdefault(BLOK(p[0]), []).append((p[0], p[1], float(p[2]), float(p[3])))
    except ValueError: pass
for blok, L in ham.items():
    yol = os.path.join(D, blok, "LISTE.tsv")
    rd = csv.DictReader(open(yol, encoding="utf-8"), delimiter="\t"); cols = rd.fieldnames; rows = list(rd)
    var_ad = set(); var_nokta = []
    for x in rows:
        for a in (x["ad_1900"], x["ad_modern"], x["atlas_en_yakin"]):
            if a: var_ad.add(norm(a))
        if x["lat"] and x["lon"]:
            try: var_nokta.append((float(x["lat"]), float(x["lon"])))
            except ValueError: pass
    eklenen = 0; atlanan = 0; goruldu = set()
    for iso, ad, lat, lon in L:
        k = (iso, norm(ad))
        if k in goruldu: continue
        goruldu.add(k)
        if norm(ad) in var_ad or any(km(lat, lon, a, b) <= 5 for a, b in var_nokta):
            atlanan += 1; continue
        y = {c: "" for c in cols}
        y.update(blok=blok, kat="2", ad_modern=ad, modern_ulke=ULKE.get(iso, iso), lat=str(lat), lon=str(lon), koord_yolu="geonames-arama-sayfasi(17Kas)",
                 giris="modern-merkez", not_="modern birinci kademe (eyalet/il/bölge) merkezi: GeoNames Administrative Division sayfası + arama sayfası PPLA/PPLC koordinatı (k:2 düzeyi; k:3 admin2 ayrı tarama)",
                 bugun_var="E", bugun_kaynak="GeoNames admin1 merkezi (17 Kasım 2026)", eslesme="")
        rows.append(y); eklenen += 1
        var_ad.add(norm(ad)); var_nokta.append((lat, lon))
    with open(yol, "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=cols, delimiter="\t"); w.writeheader(); w.writerows(rows)
    print(blok, "ham", len(L), "eklenen", eklenen, "zaten var", atlanan, "toplam satır", len(rows))

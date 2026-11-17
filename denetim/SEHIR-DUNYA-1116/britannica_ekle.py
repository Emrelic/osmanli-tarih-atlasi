# -*- coding: utf-8 -*-
"""britannica_eksik_adaylar.tsv + britannica_koord.txt (GeoNames arama sayfası, 17 Kasım) → LISTE.tsv kat=3 (LAB, 17 Kasım 2026).
Elenenler (koordinat/kalite): Johannesburg (ilk PPL sonucu Soweto konumunda: yanlış), Temirtau (admin1 'Karagandy' satırıyla aynı koordinat), Sharyn Gol (koordinat yok), 'küçük'/'şirket kasabası' notlu adaylar.
Satır: giris='britannica-eksik', kat='3', bugun_var='E', bugun_kaynak='Britannica ülke maddesi <URL> (anılıyor); koordinat GeoNames aramasında ilk PPL/PPLA/PPLC sonucu (TAHMİN)'."""
import csv, io, os, re, sys, unicodedata
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
D = os.path.dirname(os.path.abspath(__file__))
HINT = {"PK", "BD", "NP", "LK", "BT", "MV", "IN"}; ORTA = {"KZ", "UZ", "TM", "KG", "TJ", "MN", "AF"}
ULKE = {"PK": "Pakistan", "NP": "Nepal", "LK": "Sri Lanka", "BT": "Butan", "KZ": "Kazakistan", "UZ": "Özbekistan", "TJ": "Tacikistan", "AF": "Afganistan", "NG": "Nijerya", "TG": "Togo", "CV": "Yeşil Burun", "CI": "Fildişi Sahili", "EH": "Batı Sahra", "CD": "Kongo DC", "CG": "Kongo Cum.", "AO": "Angola", "GA": "Gabon", "ZA": "Güney Afrika", "ZW": "Zimbabve", "MZ": "Mozambik", "BW": "Botsvana"}
def norm(s):
    s = unicodedata.normalize("NFD", (s or "").replace("İ", "i").replace("I", "ı").lower())
    s = "".join(c for c in s if unicodedata.category(c) != "Mn").replace("ı", "i")
    return re.sub(r"[^a-z0-9]+", " ", re.sub(r"\(.*?\)", "", s)).strip()
cand = list(csv.DictReader(open(os.path.join(D, "britannica_eksik_adaylar.tsv"), encoding="utf-8"), delimiter="\t"))
koord = {}
for l in open(os.path.join(D, "britannica_koord.txt"), encoding="utf-8").read().split("\n"):
    p = l.split("|")
    if len(p) == 5: koord[(p[0], norm(p[1]))] = (float(p[2]), float(p[3]), p[4])
def ara(c):
    ad = norm(c["sehir"].split("(")[0])
    for (iso, k), v in koord.items():
        if k == ad or k in ad or ad in k or k.replace("jayewardenepura ", "") == ad.replace("sri jayewardenepura ", ""):
            return iso, v
    return None, None
ekle = {}
for c in cand:
    if re.search(r"küçük|şirket|kraliyet|banliyö|yakını", c["not"]): continue
    iso, v = ara(c)
    if not v: continue
    ekle.setdefault("hint" if iso in HINT else ("orta-asya-mogolistan" if iso in ORTA else "afrika-guney-bati"), []).append((iso, c, v))
for blok, L in ekle.items():
    yol = os.path.join(D, blok, "LISTE.tsv")
    rd = csv.DictReader(open(yol, encoding="utf-8"), delimiter="\t"); cols = rd.fieldnames; rows = list(rd)
    var = {norm(x[a]) for x in rows for a in ("ad_1900", "ad_modern") if x[a]}
    n = 0
    for iso, c, (lat, lon, pk) in L:
        if norm(c["sehir"]) in var: continue
        y = {k: "" for k in cols}
        y.update(blok=blok, kat="3", ad_modern=c["sehir"], modern_ulke=ULKE.get(iso, iso), lat=str(lat), lon=str(lon), koord_yolu="geonames-arama-sayfasi(17Kas)", giris="britannica-eksik",
                 not_="Britannica ülke maddesinde anılan bölge/büyük şehir: " + c["cumle"][:140], bugun_var="E",
                 bugun_kaynak="Britannica ülke maddesi " + c["britannica_url"] + " (anılıyor); koordinat GeoNames aramasında ilk PPL/PPLA/PPLC sonucu (TAHMİN, ad çakışması riski)")
        rows.append(y); n += 1
    with open(yol, "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=cols, delimiter="\t"); w.writeheader(); w.writerows(rows)
    print(blok, "eklenen", n, "adayın içinden", len(L))

# -*- coding: utf-8 -*-
"""LISTE.tsv'lere bugun_var / bugun_ad / bugun_kaynak sütunları (LAB, 17 Kasım 2026; Emre onaylı).
bugun_var: E = bugün aynı yerde var · H = terk/yıkık/yok (antik yer; modern nokta ≥3 km ya da yerleşim terk) · D = ad/yer değişti (güncel karşılık bugun_ad) · boş = BİLİNMİYOR (uydurulmaz).
Kural (otomatik, yalnız GeoNames koordinatı bulunmuş modern şehirlerde): koord_yolu 'modern-*' ise yerleşim bugün vardır: ad_1900 ≈ ad_modern ⇒ E; farklı ise D (bugun_ad = ad_modern). GeoNames'te bulunamayan (koordinatsız) satır ⇒ boş.
H (elle, kaynaklı): antik/yıkık yer olarak BORC.md'lerde belirlenenler (listede H_ADLAR). Betik idempotent; mevcut satırlar silinmez."""
import csv, difflib, io, os, re, sys, unicodedata
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
D = os.path.dirname(os.path.abspath(__file__))
def norm(s):
    s = unicodedata.normalize("NFD", (s or "").replace("İ", "i").replace("I", "ı").lower())
    s = "".join(c for c in s if unicodedata.category(c) != "Mn").replace("ı", "i")
    return re.sub(r"[^a-z0-9]+", " ", re.sub(r"\(.*?\)", "", s)).strip()
H_ADLAR = {  # antik/yıkık/terk (BORC.md A bölümleri + kaynaklı kayıtlar); kaynak: ilgili BORC.md
 "Umgungundlovu", "Mapungubwe", "Büyük Zimbabve", "Khami", "Danangombe", "Awdaghust", "Kumbî Sâlih", "Niani", "Oyo-İle", "Birni N'gazargamu",
 "Köhne Ürgenç", "Balasagun", "Sığnak", "Gaochang", "Ordu-Balık", "Merv", "Vijayanagara", "Gaur", "Polonnaruwa", "Valabhi", "Taksila", "Bhutambilika",
}
KAYNAK_H = "BORC.md (antik/yıkık yer; modern nokta ≥3 km)"
def isle(yol):
    with open(yol, encoding="utf-8") as f:
        rd = csv.DictReader(f, delimiter="\t"); cols = rd.fieldnames; rows = list(rd)
    for c in ("bugun_var", "bugun_ad", "bugun_kaynak"):
        if c not in cols: cols.append(c)
    say = {"E": 0, "D": 0, "H": 0, "": 0}
    for x in rows:
        if x.get("bugun_var"): say[x["bugun_var"]] = say.get(x["bugun_var"], 0) + 1; continue
        ad = x["ad_1900"] or x["ad_modern"]
        h = any(norm(a) == norm(ad) or norm(a) == norm(x.get("not_", "").split("yer_id:")[-1].split("(")[0]) for a in H_ADLAR)
        if h:
            x["bugun_var"], x["bugun_kaynak"] = "H", KAYNAK_H
        elif x.get("lat") and x.get("koord_yolu", "").startswith("modern"):
            am = x["ad_modern"] or x["ad_1900"]
            a1, a2 = norm(x["ad_1900"]), norm(x["ad_modern"])
            benzer = (not a2) or a1 == a2 or a1 in a2 or a2 in a1 or difflib.SequenceMatcher(None, a1, a2).ratio() >= 0.6   # yazım/çevriyazı farkı ≠ ad değişimi
            if benzer:
                x["bugun_var"], x["bugun_kaynak"] = "E", "GeoNames koordinatı bulundu (" + x["koord_yolu"] + ")"
            else:
                x["bugun_var"], x["bugun_ad"], x["bugun_kaynak"] = "D", x["ad_modern"], "GeoNames ad_modern (" + x["koord_yolu"] + ")"
        for c in ("bugun_var", "bugun_ad", "bugun_kaynak"): x.setdefault(c, "")   # kronolojiden gelen atlas noktaları ve koordinatsızlar: bugünkü durum ölçülmedi (boş)
        say[x["bugun_var"]] = say.get(x["bugun_var"], 0) + 1
    with open(yol, "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=cols, delimiter="\t"); w.writeheader(); w.writerows(rows)
    return len(rows), say
if __name__ == "__main__":
    for yol in ("afrika-guney-bati", "hint", "orta-asya-mogolistan"):
        n, s = isle(os.path.join(D, yol, "LISTE.tsv"))
        print(yol, n, "satır; bugun_var:", {k or "boş": v for k, v in s.items()})

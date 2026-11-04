"""KRONOLOJI-1104 — eski takvim (Jülyen) şüphesi taraması.

Kural (CLAUDE.md, Emre 4 Kasım 2026): 1582-10-15 sonrası atlas günü Gregoryendir; geç geçen
yerlerin (Britanya/İrlanda 1752-09-14'e, Rusya 1918-02-14'e dek) kaynak günü çevrilir.
Bu betik kuyruktaki (KUYRUK-KASA-PAZAR.tsv) satırlardan, tarihi bu pencerelere düşen ve
metni/kaynağı Britanya-İrlanda ya da Rusya'ya işaret edenleri listeler. Ölçümdür; veri
yazmaz, kuyruğu değiştirmez. Çıktı: denetim/KRONOLOJI-1104/TAKVIM-TARAMA-ESKI.tsv.
Sınıf: kaynağın takvim kanadı bilinmeden gün uygulanmaz (BEKLE adayı).
"""
import csv
import os
import re

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(KOK, "denetim", "KRONOLOJI-1104")

BRITANYA = re.compile(r"ingiliz|ingiltere|britanya|\bbritish\b|\bbritain\b|england|english|irlanda|ireland|irish|iskoç|iskoc|"
                      r"scotland|scottish|galler|wales|hansard|rushworth|celt\b|\bdnb\b|odnb|london gazette|"
                      r"jacobite|stuart|cromwell|kilkenny|ulster|dublin|edinburgh|london", re.I)
RUSYA = re.compile(r"\brus\b|rusya|russia|russian|moskova|moscow|petersburg|petersburg|romanov|çar\b|tsar|"
                   r"kazak|cossack|novgorod|ukrayna|hetman", re.I)


def gun(t):
    m = re.match(r"^(-?\d{4})-(\d{2})-(\d{2})", t or "")
    return (int(m.group(1)), int(m.group(2)), int(m.group(3))) if m else None


def main():
    giris = os.path.join(D, "KUYRUK-KASA-PAZAR.tsv")
    cikis = os.path.join(D, "TAKVIM-TARAMA-ESKI.tsv")
    say = {"britanya": 0, "rusya": 0}
    satirlar = []
    with open(giris, encoding="utf-8") as f:
        for r in csv.DictReader(f, delimiter="\t"):
            g = gun(r.get("tarih_atlas", ""))
            if not g or g[1:] == (1, 1):
                continue  # yıl hassasiyeti (YYYY-01-01) takvimden etkilenmez
            metin = " ".join(r.get(k, "") for k in ("dosya_satir", "uyum", "kaynak", "okunan_cumle"))
            kanat = None
            if (1582, 10, 15) <= g <= (1752, 9, 13) and BRITANYA.search(metin):
                kanat, fark = "britanya", ("+10" if g < (1700, 3, 1) else "+11")
            elif (1582, 10, 15) <= g <= (1918, 2, 13) and RUSYA.search(metin):
                kanat = "rusya"
                fark = "+10" if g < (1700, 3, 1) else "+11" if g < (1800, 3, 1) else "+12" if g < (1900, 3, 1) else "+13"
            if not kanat:
                continue
            say[kanat] += 1
            satirlar.append([kanat, fark, r["parti"], r["no"], r["is"], r["dosya_satir"], r["tarih_atlas"],
                             r.get("kaynak", "")[:200], r.get("uyum", "")[:300]])
    with open(cikis, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, delimiter="\t")
        w.writerow(["kanat", "jul_greg_fark_gun", "parti", "no", "is", "dosya_satir", "tarih_atlas", "kaynak", "uyum"])
        w.writerows(satirlar)
    print("takvim şüphesi: britanya %d, rusya %d -> %s" % (say["britanya"], say["rusya"], os.path.relpath(cikis, KOK)))


if __name__ == "__main__":
    main()

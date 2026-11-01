"""D1/D2 tablolarını ikiye süz: gun.tsv (teyit) ve yil.tsv (teyit-yil). HARİÇ satırlar dışarıda."""
import csv, glob, os, sys
d, cikdir = sys.argv[1], sys.argv[2]
alan = ["anahtar", "dosya", "t", "b", "hukum", "yeni_kaynak", "kaynak_kodu", "kaynak_tarihi", "not", "tablo"]
# Emre kararı: Wikisource-EB1911 = C; D1-08'de basılı künyeyle aklanmış iki satır
HARIC = [("D1-08", "Kaheti", "1492"), ("D1-08", "Lenkoran", "1813"),
         ("D2-02", "yufiri#4", "0915")]  # Bosworth erenow kopyasından okundu (erenow = C)


def haric(tablo, r):
    for tb, ad, yil in HARIC:
        metin = r["b"] + " " + r["anahtar"] + " " + r.get("yeni_kaynak", "")
        if tablo.startswith(tb) and r["t"].startswith(yil) and ad.lower() in metin.lower():
            return True
    return False


yaz = {}
say = {"teyit": 0, "teyit-yil": 0, "haric": 0}
for h, ad in (("teyit", "gun.tsv"), ("teyit-yil", "yil.tsv")):
    f = open(os.path.join(cikdir, ad), "w", encoding="utf-8", newline="")
    w = csv.DictWriter(f, fieldnames=alan, delimiter="\t", lineterminator="\n", extrasaction="ignore")
    w.writeheader()
    yaz[h] = (f, w)
for p in sorted(glob.glob(os.path.join(d, "D[12]-0*.cikti.tsv"))):
    tablo = os.path.basename(p)
    for r in csv.DictReader(open(p, encoding="utf-8"), delimiter="\t"):
        h = (r.get("hukum") or "").strip()
        if h not in yaz:
            continue
        if haric(tablo, r):
            say["haric"] += 1
            print("HARIC:", tablo, r["t"], r["b"][:60])
            continue
        r["tablo"] = tablo
        yaz[h][1].writerow(r)
        say[h] += 1
for f, _ in yaz.values():
    f.close()
print(say)

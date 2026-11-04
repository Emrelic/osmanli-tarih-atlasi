"""KRONOLOJI-1104 — açık kalanlar (CEKILEMEDI + BULUNAMADI) tek liste, tarayıcı okuması için (SALT OKUR).
→ denetim/KRONOLOJI-1104/ACIK-LISTE.tsv : parti, no, sonuc, dosya_satir, baslik, tarih_atlas, denenen_kaynak, not

    py arac/kronoloji_acik.py
"""
import csv, glob, os, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(KOK, "denetim", "KRONOLOJI-1104")


# Tarayıcıda okunup karara bağlananlar (tarayici_sonuc.tsv, SONUC-61): Safi, Cizzah.
COZULDU = {("001-050", "21"), ("001-050", "41")}


def basliklar():
    b = {}
    for ad, parti in (("oncelik.tsv", "001-050"), ("liste2.tsv", "L2")):
        with open(os.path.join(D, ad), encoding="utf-8") as f:
            for r in csv.DictReader(f, delimiter="\t"):
                b[(parti, r["no"])] = r.get("baslik", "")
    return b


def main():
    B = basliklar()
    satir = []
    for yol in sorted(glob.glob(os.path.join(D, "oneri_*_dogrulama.tsv"))):
        parti = os.path.basename(yol).replace("oneri_", "").replace("_dogrulama.tsv", "")
        anahtar = "L2" if parti.startswith("L2") else "001-050"
        with open(yol, encoding="utf-8") as f:
            for r in csv.DictReader(f, delimiter="\t"):
                s = (r.get("sonuc") or "").strip()
                if s not in ("CEKILEMEDI", "BULUNAMADI"):
                    continue
                no = (r.get("no") or "").replace("L2-", "").split("-")[0]
                if (anahtar, no) in COZULDU:
                    continue
                satir.append([parti, r.get("no", ""), s, r.get("dosya_satir", ""), B.get((anahtar, no), ""),
                              r.get("tarih_atlas", ""), r.get("kaynak", ""), r.get("uyum", "")])
    yol = os.path.join(D, "ACIK-LISTE.tsv")
    with open(yol, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, delimiter="\t")
        w.writerow(["parti", "no", "sonuc", "dosya_satir", "baslik", "tarih_atlas", "denenen_kaynak", "not"])
        w.writerows(satir)
    print("açık: %d → %s" % (len(satir), os.path.relpath(yol, KOK)))
    for s in satir:
        print(" | ".join([s[0] + "#" + s[1], s[2], s[5], s[4][:70], s[6][:90]]))


if __name__ == "__main__":
    main()

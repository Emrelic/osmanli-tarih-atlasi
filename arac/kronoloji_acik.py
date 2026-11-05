"""KRONOLOJI-1104 — açık kalanlar (CEKILEMEDI + BULUNAMADI) tek liste, tarayıcı okuması için (SALT OKUR).
→ denetim/KRONOLOJI-1104/ACIK-LISTE.tsv : parti, no, sonuc, dosya_satir, baslik, tarih_atlas, denenen_kaynak, not

    py arac/kronoloji_acik.py
"""
import csv, glob, os, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(KOK, "denetim", "KRONOLOJI-1104")


# Tarayıcıda okunup karara bağlananlar (tarayici_sonuc.tsv, SONUC-61): Safi, Cizzah.
COZULDU = {("001-050", "21"), ("001-050", "41"), ("001-050", "10"),
           ("L2", "9"), ("L2", "35"), ("L2", "38"), ("L2", "20"),   # oneri_TARAYICI_dogrulama.tsv
           ("L2", "2"), ("L2", "3"), ("L2", "4"), ("L2", "7"), ("L2", "42"), ("L2", "47"),   # oneri_TARAYICI2
           ("001-050", "14"), ("001-050", "18"), ("L2", "18"), ("L2", "23"), ("L2", "28"),
           ("L2", "84"), ("L2", "89"), ("L2", "83"),   # oneri_TARAYICI3
           ("L2", "54"), ("L2", "64"), ("L2", "75"), ("L2", "80"), ("L2", "60"), ("L2", "95"), ("L2", "73"),   # TARAYICI4
           ("L2", "102"),   # TARAYICI5 (L2-138 zaten TARIH_DUZELT idi)
           ("L2", "203"), ("L2", "213"), ("L2", "236"),   # TARAYICI6
           ("L2", "269"), ("L2", "278"),   # TARAYICI7
           # 251-300'de aranmayıp L2_301-325_ek'te çözülenler
           ("L2", "254"), ("L2", "257"), ("L2", "259"), ("L2", "261"), ("L2", "281"),
           ("L2", "286"), ("L2", "287"), ("L2", "288"), ("L2", "300"),
           ("L2", "187"),   # TARAYICI7 eki
           ("L2", "345"), ("L2", "433"),   # TARAYICI8
           ("L2", "441"), ("L2", "1609")}   # koordinatör tarih kararları (METIN [TARIH])


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
    yollar = sorted(glob.glob(os.path.join(D, "oneri_*_dogrulama.tsv")))
    # YENI* partileri (yeniden arama) önceki partideki aynı numaralı satırın yerine geçer
    yenilenen = set()
    for yol in yollar:
        if "_YENI" in os.path.basename(yol):
            with open(yol, encoding="utf-8") as f:
                yenilenen |= {r.get("no", "") for r in csv.DictReader(f, delimiter="\t")}
    for yol in yollar:
        parti = os.path.basename(yol).replace("oneri_", "").replace("_dogrulama.tsv", "")
        anahtar = "L2" if parti.startswith("L2") else "001-050"
        yeni_parti = "_YENI" in os.path.basename(yol)
        with open(yol, encoding="utf-8") as f:
            for r in csv.DictReader(f, delimiter="\t"):
                s = (r.get("sonuc") or "").strip()
                if s not in ("CEKILEMEDI", "BULUNAMADI"):
                    continue
                if not yeni_parti and r.get("no", "") in yenilenen:
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

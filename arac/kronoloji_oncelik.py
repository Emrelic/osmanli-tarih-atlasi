"""KRONOLOJI-1104 — kaynak denetimi öncelik listesi (SALT OKUR).

Girdi: denetim/KAYNAK-GUVEN-1014/d2_yalniz_suzulen_tanikli.tsv (py arac/kaynak_guven.py üretir).
Senaryo S2 (güvensiz + boş + bulunamadı süzülünce Değişmez 2/2s'de açılan kırılma) satırlarının
TANIK maddelerini tekilleştirir, her birine dosya:satır bulur, kaç kırılmanın tek tanığı olduğuna göre
sıralar → denetim/KRONOLOJI-1104/oncelik.tsv

    py arac/kronoloji_oncelik.py [--senaryo S2-guvensiz+bos+bulunamadi]
"""
import argparse, collections, csv, os, re, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GIRDI = os.path.join(KOK, "denetim", "KAYNAK-GUVEN-1014", "d2_yalniz_suzulen_tanikli.tsv")
CIKTI = os.path.join(KOK, "denetim", "KRONOLOJI-1104", "oncelik.tsv")
TANIK = re.compile(r"^(data/\S+\.js) (\w+)\[(\d+)\] (\S+) \[(\w+)\] (.*)$")


def satir_bul(dosya, dizi, sira, tarih, baslik):
    """Dizideki sira'ncı maddenin satırı: önce t:"<tarih>" + başlığın ilk sözcükleriyle, yoksa yalnız tarihle."""
    yol = os.path.join(KOK, dosya)
    try:
        satirlar = open(yol, encoding="utf-8").read().split("\n")
    except OSError:
        return 0
    ilk = baslik[:25]
    adaylar = [n for n, s in enumerate(satirlar, 1) if ('"%s"' % tarih) in s]
    for n in adaylar:
        pencere = "\n".join(satirlar[n - 1:n + 4])
        if ilk and ilk in pencere:
            return n
    return adaylar[0] if adaylar else 0


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--senaryo", default="S2-guvensiz+bos+bulunamadi")
    a = ap.parse_args()
    madde = {}
    kirilma = collections.Counter()
    tek_tanik = collections.Counter()
    with open(GIRDI, encoding="utf-8") as f:
        for r in csv.DictReader(f, delimiter="\t"):
            if r["senaryo"] != a.senaryo:
                continue
            taniklar = r["taniklar"].split(" || ")
            kaynaklar = r["tanik_kaynaklari"].split(" || ")
            for i, t in enumerate(taniklar):
                m = TANIK.match(t.strip())
                if not m:
                    continue
                dosya, dizi, sira, tarih, damga, baslik = m.groups()
                anahtar = (dosya, dizi, int(sira))
                kirilma[anahtar] += 1
                if len(taniklar) == 1:
                    tek_tanik[anahtar] += 1
                madde.setdefault(anahtar, {"tarih": tarih, "damga": damga, "baslik": baslik,
                                           "kaynak": kaynaklar[i] if i < len(kaynaklar) else "",
                                           "degismez": set(), "kirilma_tarih": set()})
                madde[anahtar]["degismez"].add(r["degismez"])
                madde[anahtar]["kirilma_tarih"].add(r["tarih"])
    sirali = sorted(madde, key=lambda k: (-tek_tanik[k], -kirilma[k], k))
    os.makedirs(os.path.dirname(CIKTI), exist_ok=True)
    with open(CIKTI, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, delimiter="\t")
        w.writerow(["no", "dosya_satir", "dizi_sira", "tarih", "damga", "degismez", "kirilma", "tek_tanik",
                    "baslik", "simdiki_kaynak"])
        for n, k in enumerate(sirali, 1):
            m = madde[k]
            satir = satir_bul(k[0], k[1], k[2], m["tarih"], m["baslik"])
            w.writerow([n, "%s:%d" % (k[0], satir), "%s[%d]" % (k[1], k[2]), m["tarih"], m["damga"],
                        ",".join(sorted(m["degismez"])), kirilma[k], tek_tanik[k], m["baslik"], m["kaynak"]])
    print("senaryo %s · tanık madde %d · tek tanık olduğu kırılması olan %d → %s"
          % (a.senaryo, len(madde), sum(1 for k in madde if tek_tanik[k]), os.path.relpath(CIKTI, KOK)))
    damga = collections.Counter(madde[k]["damga"] for k in madde)
    dosya = collections.Counter(k[0] for k in madde)
    print("damga:", dict(damga))
    print("dosya:", dosya.most_common(12))


if __name__ == "__main__":
    main()

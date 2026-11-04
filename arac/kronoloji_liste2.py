"""KRONOLOJI-1104 ikinci liste — Değişmez 2 evrenine YENİ alınacak maddeler (SALT OKUR).

Evren: `data/kronoloji_*.js` (kronoloji_sinir* HARİÇ — onlar zaten D2 evreninde) + künye-kronoloji
maddeleri. Damga: güvensiz (guvensiz_maddeler.tsv) + bulunamadı (bulunamadi_dayanakli.tsv); ikisi de
`py arac/kaynak_guven.py` çıktısı. Sıra: başlık TOPRAK DEĞİŞİMİ anlatıyorsa önce (sınır kırılmasına
tanık olma olasılığı yüksek), sonra yüzyıl (Osmanlı çekirdeği 1281-1923 önce), sonra dosya.
→ denetim/KRONOLOJI-1104/liste2.tsv

    py arac/kronoloji_liste2.py
"""
import collections, csv, os, re, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KG = os.path.join(KOK, "denetim", "KAYNAK-GUVEN-1014")
CIKTI = os.path.join(KOK, "denetim", "KRONOLOJI-1104", "liste2.tsv")
TOPRAK = re.compile(r"fethi|fetih|alındı|alınışı|aldı|ele geçir|katıldı|katılması|ilhak|devr|bağlandı|bağlanması|"
                    r"işgal|çekil|terk|bıraktı|teslim|antlaşma|barış|sınır|kuruldu|kuruluş|yıkıl|çöktü|sona er|"
                    r"→|geçti|kaybı|kaybetti|kurtar|bağımsız", re.I)


def yeni_evren(r):
    if r["evren"] != "dosya":
        return True                                   # künye-kronoloji
    d = r["dosya"]
    return d.startswith("data/kronoloji_") and not d.startswith("data/kronoloji_sinir")


def yil(t):
    m = re.match(r"^(-?\d+)", t or "")
    return int(m.group(1)) if m else 0


def main():
    satirlar = []
    for ad, damga in (("guvensiz_maddeler.tsv", "guvensiz"), ("bulunamadi_dayanakli.tsv", "bulunamadi")):
        with open(os.path.join(KG, ad), encoding="utf-8") as f:
            for r in csv.DictReader(f, delimiter="\t"):
                if not yeni_evren(r):
                    continue
                y = yil(r.get("t"))
                satirlar.append({
                    "evren": r["evren"], "dosya": r.get("dosya", ""), "anahtar": r["anahtar"], "damga": damga,
                    "t": r.get("t", ""), "b": r.get("b", ""), "kaynak": r.get("kaynak", ""),
                    "toprak": 1 if TOPRAK.search(r.get("b", "")) else 0,
                    "cekirdek": 1 if 1281 <= y <= 1923 else 0,
                })
    satirlar.sort(key=lambda s: (-s["toprak"], -s["cekirdek"], s["damga"] != "bulunamadi", s["t"], s["anahtar"]))
    os.makedirs(os.path.dirname(CIKTI), exist_ok=True)
    with open(CIKTI, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, delimiter="\t")
        w.writerow(["no", "evren", "dosya", "anahtar", "damga", "toprak", "cekirdek", "t", "baslik", "simdiki_kaynak"])
        for n, s in enumerate(satirlar, 1):
            w.writerow([n, s["evren"], s["dosya"], s["anahtar"], s["damga"], s["toprak"], s["cekirdek"],
                        s["t"], s["b"], s["kaynak"]])
    c = collections.Counter((s["evren"], s["damga"]) for s in satirlar)
    print("toplam %d → %s" % (len(satirlar), os.path.relpath(CIKTI, KOK)))
    print("evren×damga:", dict(c))
    print("toprak değişimi anlatan: %d · bunların Osmanlı çekirdeği (1281-1923): %d"
          % (sum(s["toprak"] for s in satirlar), sum(s["toprak"] and s["cekirdek"] for s in satirlar)))


if __name__ == "__main__":
    main()

"""KRONOLOJI-1104 — liste 2'nin işlenmemiş kısmını koordinatör sırasına dizer (SALT OKUR).

Sıra (EMRELİC 1 KASIM, 4 Kasım 2026):
  ① Osmanlı/İslâm çekirdeği VE toprak değişimi   ② Osmanlı/İslâm çekirdeğinin kalanı (TDV kapsamı)
  ③ kalan toprak değişimi                         ④ geri kalan her şey
"Osmanlı/İslâm çekirdeği" (TDV kapsamı vekili): madde 1281-1923 arasında VE
  · künye maddesiyse künyenin kendi kaynağı TDV'yi anıyor (islamansiklopedisi / "TDV"), ya da
  · başlık/dosya Osmanlı-İslâm sözlüğünden bir terim taşıyor.
İşlenmiş olanlar (liste2 no ≤ --islenen) atlanır; çıktıdaki no liste2 no'sudur (dosya adları değişmez).
→ denetim/KRONOLOJI-1104/liste2_sira.tsv

    py arac/kronoloji_liste2_sira.py --islenen 450
"""
import argparse, collections, csv, os, re, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(KOK, "denetim", "KRONOLOJI-1104")
TERIM = re.compile(r"Osmanl|osmanli|Sultan|sultan|Paşa|paşa|pasa|Bey(lik|liği)|beylik|Rumeli|Anadolu|anadolu|Kırım|kirim|"
                   r"Hanlığı|hanlig|Emirliği|emirlig|Halife|halife|Safev|safevi|Memlük|memluk|Kaçar|kacar|Hidiv|hidiv|"
                   r"Eyalet|eyalet|Sancak|sancak|Mısır|misir|Irak|irak|Suriye|suriye|Arabistan|arabistan|Yemen|yemen|"
                   r"Cezayir|cezayir|Tunus|tunus|Trablus|trablus|Bosna|bosna|Sırp|sirp|Bulgar|bulgar|Eflak|eflak|Boğdan|bogdan|"
                   r"Mora|mora|Girit|girit|Kafkas|kafkas|Dağıstan|dagistan|İran|iran|Afgan|afgan|Buhara|buhara|Hive|hive|Hokand|hokand")


def kunye_tdv():
    """devletler.js: id → künyenin kendi kaynağında TDV geçiyor mu (künye satırı, kronoloji[] öncesi)."""
    tdv = {}
    with open(os.path.join(KOK, "data", "devletler.js"), encoding="utf-8") as f:
        for sat in f:
            m = re.search(r'\{\s*id:\s*"([^"]+)"', sat)
            if m:
                bas = sat.split("kronoloji:")[0]
                tdv[m.group(1)] = bool(re.search(r"islamansiklopedisi|TDV", bas))
    return tdv


def yil(t):
    m = re.match(r"^(-?\d+)", t or "")
    return int(m.group(1)) if m else 0


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--islenen", type=int, default=450)
    a = ap.parse_args()
    TDV = kunye_tdv()
    satir = []
    with open(os.path.join(D, "liste2.tsv"), encoding="utf-8") as f:
        for r in csv.DictReader(f, delimiter="\t"):
            if int(r["no"]) <= a.islenen:
                continue
            y = yil(r["t"])
            kid = r["anahtar"].split("#")[0] if r["evren"].startswith("kunye") else ""
            osm = 1281 <= y <= 1923 and (TDV.get(kid, False) or bool(TERIM.search(r["baslik"] + " " + r["dosya"] + " " + kid)))
            toprak = r["toprak"] == "1"
            sira = 1 if (osm and toprak) else 2 if osm else 3 if toprak else 4
            satir.append((sira, r))
    satir.sort(key=lambda s: (s[0], int(s[1]["no"])))
    yol = os.path.join(D, "liste2_sira.tsv")
    with open(yol, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, delimiter="\t")
        w.writerow(["sira_no", "kademe", "no"] + [k for k in satir[0][1].keys() if k != "no"])
        for i, (s, r) in enumerate(satir, 1):
            w.writerow([i, s, r["no"]] + [r[k] for k in r if k != "no"])
    c = collections.Counter(s for s, _ in satir)
    print("işlenmemiş %d → %s · kademe: %s" % (len(satir), os.path.relpath(yol, KOK), dict(sorted(c.items()))))


if __name__ == "__main__":
    main()

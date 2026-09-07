# -*- coding: utf-8 -*-
"""BUDAMA-0907 · KADEME BÖLÜMÜ — tek dev commit DEĞİL

🔴 NİÇİN: 21 oturumun paylaştığı bir depoda tek dev commit, bir gerileme
   çıkarsa neyin bozulduğunu ÖLÇÜLEMEZ kılar. Her kademe ayrı commit,
   ayrı sınav, ayrı `git revert` hedefi.

BÖLME ÖLÇÜTÜ: kazanca göre azalan sıra.
  K1 = en çok kazandıran 20 ders — en yüksek kazanç, en az kayıt,
       ve bir gerileme çıkarsa GERİ ALINMASI en ucuz kademe.
  K2-K5 = kalan, dörde bölünmüş.
Her kademe kendi `git revert`i ile geri alınabilir; ders başına geri alma
`ARAC-BUDAMA-GERIAL-0907.py`de.
"""
import os
import sys
import json

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PLAN = os.path.join(KOK, "denetim", "BUDAMA-PLAN-0907")


def main():
    e = json.load(open(os.path.join(PLAN, "ESLEME-0907.json"), encoding="utf-8"))
    ders = sorted(e["esleme"], key=lambda x: -(x["eski_token"] - x["kalan_token"]))
    for x in ders:
        x["kazanc"] = x["eski_token"] - x["kalan_token"]

    kademeler = [("K1", ders[:20])]
    kalan = ders[20:]
    n = (len(kalan) + 3) // 4
    for i in range(4):
        kademeler.append(("K%d" % (i + 2), kalan[i * n:(i + 1) * n]))

    print("KADEME BÖLÜMÜ — %d ders, 5 kademe, 5 ayrı commit" % len(ders))
    print()
    print("  %-4s %6s %10s %10s %10s" % ("kad", "ders", "eski tok", "kalan tok", "KAZANÇ"))
    print("  " + "-" * 46)
    kum = 0
    cikti = {}
    for ad, grup in kademeler:
        if not grup:
            continue
        k = sum(x["kazanc"] for x in grup)
        kum += k
        print("  %-4s %6d %10d %10d %10d" % (
            ad, len(grup), sum(x["eski_token"] for x in grup),
            sum(x["kalan_token"] for x in grup), k))
        cikti[ad] = [x["slug"] for x in grup]
    print("  " + "-" * 46)
    print("  %-4s %6d %10s %10s %10d" % ("TOP", len(ders), "", "", kum))
    print()
    print("  KÜMÜLATİF — her kademeden sonra §11 kaç token olur")
    su = e["eski_token"]
    for ad, grup in kademeler:
        if not grup:
            continue
        su -= sum(x["kazanc"] for x in grup)
        print("    %s sonrası §11: %6d token" % (ad, su))

    with open(os.path.join(PLAN, "KADEME-0907.json"), "w", encoding="utf-8") as f:
        json.dump(cikti, f, ensure_ascii=False, indent=1)
    print()
    print("  yazıldı: denetim/BUDAMA-PLAN-0907/KADEME-0907.json")
    return 0


if __name__ == "__main__":
    sys.exit(main())

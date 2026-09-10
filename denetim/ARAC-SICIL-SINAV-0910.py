# -*- coding: utf-8 -*-
"""ARAC-SICIL-SINAV-0910 — kumelemenin KENDISINI sinar.

🔴 Bir eslestiricinin ciktisi, eslestiriciyi dogrulamaz (D140). Bu alet iki
sey yapar:
  ① SABIT TOHUMLU rastgele ornek (n=40) doker — atama ELLE denetlenir
  ② her kume icin: hukum dagilimi · dogrulanmis commit listesi · paket araligi
     (SICIL kaydinin KARAR metnini yazmak icin gereken taban)

Kullanim:
  py denetim/ARAC-SICIL-SINAV-0910.py            → kume kunyeleri
  py denetim/ARAC-SICIL-SINAV-0910.py --ornek    → 40'lik rastgele ornek
  py denetim/ARAC-SICIL-SINAV-0910.py --not KID  → o kumenin commit'li notlari
"""
import json, io, os, sys, glob, collections, random

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden"
G = "denetim/OLCUM-SICIL-KUME-0910.json"

d = json.load(io.open(G, encoding="utf-8"))
ms = d["maddeler"]
bas = d["kume_basliklari"]
SIRA = [k for k in bas]


def kume_kunyeleri():
    for kid in SIRA:
        uy = [m for m in ms if m["kume"] == kid]
        if not uy:
            continue
        h = collections.Counter(m["hukum"] for m in uy)
        cm = sorted({m["delil_commit"] for m in uy if m["delil_commit"]})
        pk = sorted({m["paket"].replace("parti-", "").replace("emrelic-", "E")
                     for m in uy})
        print("=" * 76)
        print(kid, "·", bas[kid])
        print("  madde %d | hukum %s" % (len(uy), dict(h)))
        print("  DOGRULANMIS commit (%d): %s" % (len(cm), ", ".join(cm) or "-"))
        print("  paket: %s" % ", ".join(pk))


def ornek(n=40, tohum=20260910):
    # 🔴 TOHUM DEGISTIRILEBILIR OLMALI: ilk ornek kurallari DUZELTMEK icin
    #    kullanildi; ayni ornekle olculen isabet orani "sinavi kendi uzerinde
    #    calisilmis" bir orandir. Ikinci olcum BASKA tohumla yapilir.
    r = random.Random(tohum)
    sec = r.sample(ms, n)
    for m in sorted(sec, key=lambda x: x["kume"]):
        print("%-20s %s|%s| %s" % (m["kume"],
                                   m["paket"].replace("parti-", ""), m["no"],
                                   m["baslik"][:88]))


def notlar(kid, sinir=6):
    hedef = [(m["paket"], m["no"]) for m in ms
             if m["kume"] == kid and m["delil_commit"]][:sinir]
    if not hedef:
        hedef = [(m["paket"], m["no"]) for m in ms if m["kume"] == kid][:sinir]
    hset = set(hedef)
    for p in sorted(glob.glob(os.path.join(KOK, "parti-*"))):
        ad = os.path.basename(p)
        if not any(a == ad for a, _ in hset):
            continue
        cev = json.load(io.open(os.path.join(p, "CEVAP.json"), encoding="utf-8"))
        for no, m in sorted((cev.get("maddeler") or {}).items()):
            if (ad, no) in hset:
                print("-" * 74)
                print(ad, no, "|", m.get("hukum"), "|", m.get("delil_commit") or "-")
                print((m.get("not") or "").replace("\n", " ")[:700])


if "--ornek" in sys.argv:
    i = sys.argv.index("--ornek")
    t = int(sys.argv[i + 1]) if len(sys.argv) > i + 1 and sys.argv[i + 1].isdigit() \
        else 20260910
    ornek(tohum=t)
elif "--not" in sys.argv:
    notlar(sys.argv[sys.argv.index("--not") + 1])
else:
    kume_kunyeleri()

# -*- coding: utf-8 -*-
"""IZ-YOK DENETIM A — DILIM 1 dokumcusu.

Kutu paketlerinden delil_atlas == "iz-yok" maddelerini, Emre'nin KENDI
sozu (PARTI.json) ve hukum notu (CEVAP.json) yan yana olacak sekilde doker.

SALT OKUR. Hicbir sey yazmaz (stdout haric).

Kullanim:
    py denetim/ARAC-IZYOK-A-DOKUM-0910.py --say
    py denetim/ARAC-IZYOK-A-DOKUM-0910.py <paket-adi> [madde-no ...]
"""
import json, os, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden"

# DILIM 1 — sartnamede yazili 14 paket. Adlar OLCULEREK secildi:
# "0008+ -> parti-emrelic-00XX" okumasi, iz-yok sayilari 89 ettigi icin
# dogrulandi (paralel kasa serisi ayri ve dilimde degil).
DILIM1 = ["parti-0002", "parti-0003", "parti-0004", "parti-0006", "parti-0007",
          "parti-emrelic-0008", "parti-emrelic-0010", "parti-emrelic-0012",
          "parti-emrelic-0013", "parti-emrelic-0014", "parti-emrelic-0015",
          "parti-emrelic-0017", "parti-emrelic-0018", "parti-emrelic-0019"]


def oku(paket):
    c = json.load(open(os.path.join(KOK, paket, "CEVAP.json"), encoding="utf-8"))
    p = json.load(open(os.path.join(KOK, paket, "PARTI.json"), encoding="utf-8"))
    sozler = {m["no"]: m for m in p.get("maddeler", [])}
    return c.get("maddeler", {}), sozler


def izyok(maddeler):
    return [k for k, v in maddeler.items()
            if isinstance(v, dict) and v.get("delil_atlas") == "iz-yok"]


def main():
    if len(sys.argv) > 1 and sys.argv[1] == "--say":
        t = 0
        for pk in DILIM1:
            m, _ = oku(pk)
            n = len(izyok(m))
            t += n
            print("%-22s iz-yok %3d" % (pk, n))
        print("DILIM 1 TOPLAM:", t)
        return

    paket = sys.argv[1]
    istenen = set(sys.argv[2:])
    maddeler, sozler = oku(paket)
    for no in izyok(maddeler):
        if istenen and no not in istenen:
            continue
        v = maddeler[no]
        s = sozler.get(no, {})
        print("=" * 78)
        print("### %s :: %s   [hukum=%s | ilerleten=%s]"
              % (paket, no, v.get("hukum"), v.get("ilerleten")))
        print("--- EMRE'NIN SOZU: %s" % s.get("baslik", "(baslik yok)"))
        print((s.get("metin", "(metin yok)") or "").strip())
        g = s.get("gorseller") or []
        if g:
            print("--- GORSEL: %d adet: %s" % (len(g), ", ".join(g)))
        print("--- HUKUM NOTU:")
        print((v.get("not", "") or "").strip())


main()

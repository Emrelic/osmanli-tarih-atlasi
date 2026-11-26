# -*- coding: utf-8 -*-
"""KALEM Ⓒ ikinci tur — `ingiltere`nin 61'i TEK CİNS Mİ? · SINIR-KAFRIKA-0907

Birinci tur `ingiltere` dönemlerinin ALTI ayrı `f` günü taşıdığını
gösterdi. `ingiliz-sudani` künyesi **1899-01-19**'da başlıyor ⇒ ondan
ÖNCE başlayan bir dönem o kimliği **kullanamaz.**

⇒ SORU: 61'in kaçı `ingiliz-sudani` yazılabilirdi, kaçı YAZILAMAZDI?
Bu ayrım yapılmazsa 61'in tamamı tutarsız sayılır ve bir kısmı
HAKSIZ YERE kusur damgası yer.

🔴 ÖLÇÜYORUM, DÜZELTMİYORUM (1.MURAT M-3225 · `data/` donuk).
"""
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

from shapely.geometry import shape, Point  # noqa: E402

GUN = "1923-10-28"
KUNYE_F = "1899-01-19"   # ingiliz-sudani kunyesinin baslangici


def main():
    Y = girdi.yukle()
    gj = json.load(io.open(os.path.join(KOK, "veri-kaynak",
                   "ne_10m_admin_0_countries.geojson"), encoding="utf-8"))
    pg = None
    for ft in gj["features"]:
        if ft["properties"].get("ADMIN") == "Sudan":
            pg = shape(ft["geometry"]).buffer(0)
    ic = [y for y in Y if y.get("lon") is not None
          and pg.covers(Point(y["lon"], y["lat"]))]

    yazilabilir, yazilamaz = [], []
    for y in ic:
        for p in (y.get("s") or []):
            if p.get("d") != "ingiltere":
                continue
            if not (p["f"] <= GUN < p["t"]):
                continue
            if p["f"] >= KUNYE_F:
                yazilabilir.append((y, p))
            else:
                yazilamaz.append((y, p))

    print("=" * 74)
    print("`ingiltere` DONEMLERI — KUNYE KISITI ILE AYRILDI")
    print("=" * 74)
    print("   `ingiliz-sudani` KUNYESI: %s -> 1923-10-29" % KUNYE_F)
    print("")
    print("   🔴 YAZILABILIRDI (f >= %s) : %d" % (KUNYE_F, len(yazilabilir)))
    print("   🟢 YAZILAMAZDI  (f <  %s) : %d" % (KUNYE_F, len(yazilamaz)))
    print("")
    print("   --- YAZILAMAZ olanlar, ADIYLA (kunye onlari kapsamiyor) ---")
    for y, p in sorted(yazilamaz, key=lambda x: x[1]["f"]):
        print("      %-24s %s -> %s   %7.3f %8.3f  [%s]"
              % (y["ad"], p["f"], p["t"], y["lat"], y["lon"], y.get("_kaynak")))

    print("")
    print("   --- YAZILABILIR olanlarin `f` dagilimi ---")
    dag = {}
    for y, p in yazilabilir:
        dag[p["f"]] = dag.get(p["f"], 0) + 1
    for f, n in sorted(dag.items(), key=lambda x: -x[1]):
        print("      %s  x%d" % (f, n))

    # 1885-1898 arasi Sudan'da MEHDI devleti vardi — kullaniliyor mu?
    print("")
    print("=" * 74)
    print("YAN SORU — `mehdi` kunyesi Sudan'da KULLANILIYOR MU?")
    print("=" * 74)
    D = {d["id"]: d for d in girdi.oku_devletler()}
    k = D.get("mehdi")
    print("   kunye: %s" % (("%s -> %s | %s" % (k.get("f"), k.get("t"),
          str(k.get("ad"))[:44])) if k else "🔴 YOK"))
    kul = []
    for y in ic:
        for p in (y.get("s") or []):
            if p.get("d") == "mehdi":
                kul.append((y["ad"], p.get("f"), p.get("t")))
    print("   Sudan poligonunda `mehdi` donemi: %d" % len(kul))
    for u in kul[:10]:
        print("      %-24s %s -> %s" % u)
    print("")
    print("   ⚠️ YAZILAMAZ kumesinin donemleri 1884-1891 arasinda BASLIYOR")
    print("      ve Mehdi Devleti 1881-03-01 → 1898-09-02 arasi ayakta.")
    print("      Bu AYRI bir soru — OLCTUM, HUKUM VERMIYORUM.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

# -*- coding: utf-8 -*-
"""SINIR SAPMASI OLCERI — HAZIR KITA OPUS 86, 30 Agustos 2026.

Trakya kolunda kullanildi ve sartnamenin "sapma = cift mesafesinin
yarisi" vekilini CURUTTU (varsayim ~19,6 km, olcum 3,3 km).
Devrediliyor ki ayni aleti ikinci kez yazan olmasin.

📌 NICIN VEKIL KOTUYDU: bisektor konumunu MESAFE degil, iki noktanin
sinira gore DIZILIMI belirler. 40 km'lik bir cift, ikisi de sinira esit
uzaklıktaysa 0 km sapma verir; 12 km'lik bir cift ikisi de ayni yakadaysa
6 km verir. Mesafe sapmayi SINIRLAR, olcmez.

KULLANIM
    py denetim/olc_sinir_sapma.py <ULKE> <KOMSU>[,<KOMSU>...] \
       [--kutu minlon minlat maxlon maxlat] [--gun 1923-06-15]

    py denetim/olc_sinir_sapma.py Turkey Greece,Bulgaria \
       --kutu 25.5 40.5 29.0 42.5

ULKE adlari Natural Earth `ADMIN` alanindandir (Turkey · Syria · Iraq ·
Iran · Georgia · Armenia · Greece · Bulgaria ...).

YONTEM
  ① ULKE sinirinin KOMSU'lara DEGEN kismini cikar
  ② hat boyunca ~2 km'de bir ornek al
  ③ her ornekte  d_IC = en yakin OSMANLI/tabi nokta
                 d_DIS = en yakin yabanci nokta
  ④ Voronoi kenari ikisinin ORTASINDAN gecer =>
        SAPMA = (d_DIS - d_IC) / 2
        +  atlas siniri DISARI tasiyor  (OSMANLI FAZLA)
        -  atlas siniri ICERI cekiyor   (OSMANLI EKSIK)

🔴🔴 ETIKETLEME UYARISI — ORHANGAZI'nin M-1761'deki sarti:
Bu alet BUGUNKU sinira olcer. Sonucu "BUGUNKU sinira sapma" diye
etiketle; "1923 sinirina sapma" DEME. Trakya'da ikisi ayni (Lozan'dan
beri degismedi) ama her kolda degil:
    Hatay 1939'da Turkiye'ye katildi   Musul 1926'ya kadar tartismali
    Batum 1921'de Gurcistan'a
Ikisinin ayrildigi kesimler ZATEN AYRICA bulgudur.
"""
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
from shapely.geometry import shape, box  # noqa: E402
from shapely.ops import unary_union  # noqa: E402
import girdi  # noqa: E402


def sahip(y, g):
    if (y.get("kur") and y["kur"] > g) or (y.get("bit") and y["bit"] <= g):
        return None
    for p in (y.get("d") or []):
        if p["f"] <= g < p["t"]:
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p["f"] <= g < p["t"]:
            return "tabi"
    for p in (y.get("s") or []):
        if p["f"] <= g < p["t"]:
            return p.get("d") or "?"
    return None


def main(argv):
    if len(argv) < 3:
        print(__doc__)
        return 2
    ulke, komsular = argv[1], [x.strip() for x in argv[2].split(",") if x.strip()]
    gun = argv[argv.index("--gun") + 1] if "--gun" in argv else "1923-06-15"
    if "--kutu" in argv:
        i = argv.index("--kutu")
        kutu = box(*[float(argv[i + k]) for k in range(1, 5)])
    else:
        kutu = None

    Y = girdi.yukle(sessiz=True)
    ic = [y for y in Y if sahip(y, gun) in ("OSMANLI", "tabi")]
    dis = [y for y in Y if sahip(y, gun) not in (None, "OSMANLI", "tabi")]
    print(u"%s · OSMANLI/tabi %d nokta · yabanci %d nokta" % (gun, len(ic), len(dis)))
    if not ic or not dis:
        print(u"🔴 bir taraf BOS — olcum yapilamaz")
        return 1

    g = json.load(io.open(os.path.join(KOK, "veri-kaynak",
                                       "ne_10m_admin_0_countries.geojson"),
                          encoding="utf-8"))
    poly = {}
    for f in g["features"]:
        ad = (f["properties"].get("ADMIN") or "").strip()
        if ad == ulke or ad in komsular:
            poly[ad] = shape(f["geometry"]).buffer(0)
    eksik = [a for a in [ulke] + komsular if a not in poly]
    if eksik:
        print(u"🔴 POLIGON BULUNAMADI: %s  (ADMIN adini kontrol et)" % ", ".join(eksik))
        return 1

    sin = poly[ulke].boundary
    if kutu is not None:
        sin = sin.intersection(kutu)
    hat = sin.intersection(unary_union([poly[k].buffer(0.02) for k in komsular]))
    if hat.is_empty:
        print(u"🔴 KARA SINIRI BULUNAMADI — kutu yanlis olabilir")
        return 1

    ornek = []
    for h in (list(hat.geoms) if hasattr(hat, "geoms") else [hat]):
        if h.geom_type not in ("LineString", "MultiLineString"):
            continue
        for pr in (list(h.geoms) if h.geom_type == "MultiLineString" else [h]):
            n = max(2, int(pr.length / 0.02))
            for i in range(n + 1):
                pt = pr.interpolate(pr.length * i / n)
                ornek.append((pt.y, pt.x))
    if len(ornek) < 3:
        print(u"🔴 ornek sayisi %d — hat cok kisa" % len(ornek))
        return 1

    kayit = []
    for la, lo in ornek:
        dic, yic = min((girdi.km(la, lo, y["lat"], y["lon"]), y) for y in ic)
        ddi, ydi = min((girdi.km(la, lo, y["lat"], y["lon"]), y) for y in dis)
        kayit.append((la, lo, (ddi - dic) / 2.0, yic["ad"], ydi["ad"]))

    print(u"\n=== 5 KM'YI ASAN KESIMLER ===")
    i, ihl = 0, 0.0
    while i < len(kayit):
        if abs(kayit[i][2]) <= 5:
            i += 1
            continue
        j = i
        while j + 1 < len(kayit) and abs(kayit[j + 1][2]) > 5:
            j += 1
        seg = kayit[i:j + 1]
        enk = max(seg, key=lambda r: abs(r[2]))
        uz = sum(girdi.km(seg[k][0], seg[k][1], seg[k + 1][0], seg[k + 1][1])
                 for k in range(len(seg) - 1))
        ihl += uz
        print(u"\n  %.4fK %.4fD -> %.4fK %.4fD  (%d ornek, ~%.0f km)"
              % (seg[0][0], seg[0][1], seg[-1][0], seg[-1][1], len(seg), uz))
        print(u"     en kotu %+.1f km @ %.4f/%.4f   %s"
              % (enk[2], enk[0], enk[1],
                 u"OSMANLI FAZLA" if enk[2] > 0 else u"OSMANLI EKSIK"))
        print(u"     o noktada en yakin cift: %s <-> %s" % (enk[3], enk[4]))
        i = j + 1

    s = sorted(abs(r[2]) for r in kayit)
    tp = sum(girdi.km(kayit[k][0], kayit[k][1], kayit[k + 1][0], kayit[k + 1][1])
             for k in range(len(kayit) - 1))
    print(u"\n=== SAPMA DAGILIMI (%d ornek) ===" % len(s))
    print(u"  ortanca %.1f km · en kotu %.1f km" % (s[len(s) // 2], s[-1]))
    print(u"  <=5 km: %d (%%%.0f) · 5-15: %d · >15: %d"
          % (sum(1 for x in s if x <= 5), 100.0 * sum(1 for x in s if x <= 5) / len(s),
             sum(1 for x in s if 5 < x <= 15), sum(1 for x in s if x > 15)))
    print(u"  kara sinir hatti ~%.0f km · 5 km'yi asan ~%.0f km (%%%.0f)"
          % (tp, ihl, 100.0 * ihl / tp if tp else 0))
    print(u"\n⚠️ Bu sonuc BUGUNKU sinira sapmadir. 1923 siniri farkliysa"
          u" (Hatay · Musul · Batum) o kesimler AYRICA bulgudur.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))

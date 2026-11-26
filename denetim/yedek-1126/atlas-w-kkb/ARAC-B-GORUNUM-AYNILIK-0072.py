# -*- coding: utf-8 -*-
"""BIT BIT AYNILIK SINAVI — B-GORUNUM-0072, M-4848'in (2). sarti.

1.MURAT: *"Bolge bolge hesaplanan cikti, tek parca hesaplananla AYNI
olmali. Sinavi yaz ve IKI YONDE kos."*

IKI YON ne demek — burada acikca:
  YON 1 (aynilik)  : ayni kesit, iki yolla (butun / devlet) hesaplanir ve
                     parcalar WKB duzeyinde karsilastirilir. Beklenen: ayni.
  YON 2 (duyarlilik): sinav gercekten AYIRT EDEBILIYOR MU? Devlet yolunun
                     ciktisi KASTEN bozulur (bir parca atilir) ve sinavin
                     "FARKLI" demesi beklenir. Bu yon olmadan "ayni cikti"
                     bir sey ispatlamaz — karsilastirici hep "ayni" diyor
                     olabilir. (Bu depoda ogrenilmis bir ders: bos kume
                     her ongoruyu dogrular.)

ONBELLEK BU SINAVDA KAPALIDIR (MOTOR_ONBELLEK_KAPALI=1 zorlanir): sinav
hesabi karsilastirir, onbellegi degil.

Kosus: py denetim/ARAC-B-GORUNUM-AYNILIK-0072.py [kesit_sayisi]
"""
import os
import sys

os.environ["MOTOR_ONBELLEK_KAPALI"] = "1"

sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__))), "arac"))
import shapely  # noqa: E402
import dolgu as D  # noqa: E402


def imza(parcalar):
    """Parca listesinin sirasiz, bit duzeyinde imzasi.
    Sira onemli DEGIL (iki yol farkli sirada uretebilir), GEOMETRI onemli."""
    out = []
    for p in parcalar:
        out.append((p["kim"], p["cins"],
                    shapely.to_wkb(p["g"], output_dimension=2).hex()))
    return sorted(out)


def kesit_govdeleri(a, araliklar, d, y, geo_onb):
    canli = {}
    for ai, (f, t, kim, kaynak, idx) in enumerate(araliklar):
        if f <= a < t:
            canli.setdefault((kim, kaynak), [[], []])
            canli[(kim, kaynak)][0].extend(idx)
            canli[(kim, kaynak)][1].append(ai)
    govdeler = []
    for (kim, kaynak), (idx, ailer) in canli.items():
        an = (kim, tuple(ailer))
        g = geo_onb.get(an)
        if g is None:
            if kaynak == "o":
                g = D._coz(idx, d["PARCALAR"], d["PARCA_HALKA"])
            else:
                g = D._coz(idx, y["DEVLET_PARCALAR"], y["DEVLET_PARCA_HALKA"])
            geo_onb[an] = g
        if not g.is_empty:
            govdeler.append((kim, g))
    return govdeler


def main():
    kesit_sayisi = int(sys.argv[1]) if len(sys.argv) > 1 else 2
    print("AYNILIK SINAVI - kesit %d - onbellek KAPALI" % kesit_sayisi,
          flush=True)
    kara = D._kara_yukle()
    kara_ix = D.KaraIndeks(kara)
    araliklar, tarihler, d, y = D._kesitler()
    tarihler = tarihler[:kesit_sayisi]
    geo_onb = {}

    ayni, farkli = 0, 0
    duyar_gecti, duyar_kaldi = 0, 0
    for n, a in enumerate(tarihler, 1):
        gov = kesit_govdeleri(a, araliklar, d, y, geo_onb)

        D.YOL = "butun"
        p_butun, _r1 = D.kesit_dolgu(list(gov), kara, kara_ix)
        D.YOL = "devlet"
        p_devlet, _r2 = D.kesit_dolgu(list(gov), kara, kara_ix)

        i1, i2 = imza(p_butun), imza(p_devlet)
        durum = "AYNI" if i1 == i2 else "FARKLI"
        if i1 == i2:
            ayni += 1
        else:
            farkli += 1
        print("  %2d/%d %s  butun %4d parca - devlet %4d parca -> %s"
              % (n, len(tarihler), a, len(p_butun), len(p_devlet), durum),
              flush=True)
        if i1 != i2:
            s1, s2 = set(i1), set(i2)
            yalniz1 = sorted(s1 - s2)[:5]
            yalniz2 = sorted(s2 - s1)[:5]
            print("     yalniz BUTUN'de : %d (ornek %s)"
                  % (len(s1 - s2), [(k, c, w[:24]) for k, c, w in yalniz1]))
            print("     yalniz DEVLET'te: %d (ornek %s)"
                  % (len(s2 - s1), [(k, c, w[:24]) for k, c, w in yalniz2]))

        # YON 2 - duyarlilik: kasten bozulan cikti FARKLI demeli.
        if p_devlet:
            bozuk = list(p_devlet[1:])
            if imza(p_butun) != imza(bozuk):
                duyar_gecti += 1
            else:
                duyar_kaldi += 1

    print()
    print("--- SONUC ---")
    print("  YON 1 (aynilik)   : %d kesit AYNI - %d kesit FARKLI"
          % (ayni, farkli))
    print("  YON 2 (duyarlilik): %d kesitte bozma YAKALANDI - %d kesitte "
          "KACIRILDI" % (duyar_gecti, duyar_kaldi))
    if farkli == 0 and duyar_kaldi == 0 and ayni > 0:
        print("  HUKUM: GECTI - iki yol ayni, ve sinav bozmayi ayirt edebiliyor.")
        return 0
    print("  HUKUM: KALDI")
    return 1


if __name__ == "__main__":
    sys.exit(main())

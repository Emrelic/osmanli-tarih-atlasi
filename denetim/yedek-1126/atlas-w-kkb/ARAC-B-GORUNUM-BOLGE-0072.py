# -*- coding: utf-8 -*-
"""BOLGE BIRIMI OLCUMU — B-GORUNUM-0072, 1.MURAT'in M-4848 (1). sarti.

*"Bolge biriminin TANIMINI olcuyle sec, cografi sezgiyle degil."*

UC ADAY TANIM OLCULUYOR. Hepsi ayni sorunun cevabi: bir devletin dolgu
parcalari hesaplanirken KIMLERIN govdesi OKUNUYOR? Anahtar onlari TAM
tasimali (eksik tasirsa sessizce bayat sonuc).

  A) BAGLI BILESEN (transitif kapanis) — zarf komsulugu grafiginin bagli
     bileseni. EN GUVENLI, ama olculdu: en buyuk bilesen govdelerin
     %91'ini yutuyor ⇒ ise yaramiyor (bu betigin ilk kosusu, 20 Eylul).
  B) 1 SICRAMA — devletin kendisi + zarfi degen komsulari.
     `kesit_dolgu`nun cogu adimi (engel, cikarma, cekisme, cins) YALNIZ
     dogrudan komsuyu okur; bagimlilik TRANSITIF DEGILDIR.
  C) 2 SICRAMA — B'ye ek olarak komsularin komsulari.
     Gerekce: cekisme, komsunun CIKARMA SONRASI talebini kullaniyor
     (t_j = ham_t_j - komsu govdeleri); yani j'nin kendi komsulari da
     dolayli olarak okunuyor.

KENAR TANIMI (hepsinde ayni): i~j  <=>  genisletilmis_zarf(i) n
genisletilmis_zarf(j) != bos. genisletilmis_zarf(i) = govde zarfi, her
yone r derece buyutulmus (r = kapanis yaricapinin derece karsiligi).
NICIN ZARF: `kesit_dolgu` komsuyu her yerde STRtree ile (yani zarfla)
ariyor; zarf komsulugu gercek komsulugun SUPERSETI ⇒ guvenli yon.

OLCULEN: her tanim icin (a) birimin ortalama buyuklugu (b) TEK bir
devlet degisince kac birimin anahtari bozulur, yani yeniden hesap payi.
OLCMEDIGI: sureyi. Dolgu HESAPLANMAZ, yalniz grafik kurulur.

Kosus: py denetim/ARAC-B-GORUNUM-BOLGE-0072.py [kesit] [devlet_id]
"""
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__))), "arac"))
import dolgu as D  # noqa: E402


def genis_zarf(g, r_km):
    x0, y0, x1, y1 = g.bounds
    r = D._derece(r_km, g.centroid.y)
    return (x0 - r, y0 - r, x1 + r, y1 + r)


def kesisiyor(a, b):
    return not (a[2] < b[0] or b[2] < a[0] or a[3] < b[1] or b[3] < a[1])


def komsuluk(zarflar):
    n = len(zarflar)
    k = [set() for _ in range(n)]
    for i in range(n):
        for j in range(i + 1, n):
            if kesisiyor(zarflar[i], zarflar[j]):
                k[i].add(j)
                k[j].add(i)
    return k


def bilesenler(komsu):
    n = len(komsu)
    ust = list(range(n))

    def bul(i):
        while ust[i] != i:
            ust[i] = ust[ust[i]]
            i = ust[i]
        return i

    for i in range(n):
        for j in komsu[i]:
            a, b = bul(i), bul(j)
            if a != b:
                ust[a] = b
    kova = {}
    for i in range(n):
        kova.setdefault(bul(i), []).append(i)
    return sorted(kova.values(), key=len, reverse=True)


def main():
    kesit_sayisi = int(sys.argv[1]) if len(sys.argv) > 1 else 12
    sina = sys.argv[2] if len(sys.argv) > 2 else "bizans"
    r_km = D.YARICAP_KM
    print("BOLGE OLCUMU - yaricap %.0f km - kesit %d - sinav devleti %s"
          % (r_km, kesit_sayisi, sina), flush=True)

    D._kara_yukle()
    araliklar, tarihler, d, y = D._kesitler()
    print("  %d aralik - %d kesit" % (len(araliklar), len(tarihler)), flush=True)
    tarihler = tarihler[:kesit_sayisi]

    geo_onb = {}
    top = {"n": 0, "govde": 0, "bilesen": 0, "enbuyuk": 0,
           "b1": 0, "b2": 0, "iskA": 0, "iskB": 0, "iskC": 0}
    for n, a in enumerate(tarihler, 1):
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
                    g = D._coz(idx, y["DEVLET_PARCALAR"],
                               y["DEVLET_PARCA_HALKA"])
                geo_onb[an] = g
            if not g.is_empty:
                govdeler.append((kim, g))
        govdeler.sort(key=lambda kg: kg[0])
        nn = len(govdeler)
        zarflar = [genis_zarf(g, r_km) for _k, g in govdeler]
        komsu = komsuluk(zarflar)
        bs = bilesenler(komsu)
        hedef = set(i for i, (k, _g) in enumerate(govdeler) if k == sina)

        # 1 sicrama / 2 sicrama kumeleri
        bir = [komsu[i] | {i} for i in range(nn)]
        iki = [set(bir[i]) for i in range(nn)]
        for i in range(nn):
            for j in list(bir[i]):
                iki[i] |= bir[j]

        # Tek devlet degisince: anahtari o devleti TASIYAN her birim bozulur.
        iskA = sum(len(b) for b in bs if hedef & set(b))
        iskB = sum(1 for i in range(nn) if bir[i] & hedef)
        iskC = sum(1 for i in range(nn) if iki[i] & hedef)

        top["n"] += 1
        top["govde"] += nn
        top["bilesen"] += len(bs)
        top["enbuyuk"] += len(bs[0])
        top["b1"] += sum(len(x) for x in bir) / float(nn)
        top["b2"] += sum(len(x) for x in iki) / float(nn)
        top["iskA"] += iskA
        top["iskB"] += iskB
        top["iskC"] += iskC
        print("    %3d/%d %s  govde %3d | bilesen %2d (en buyuk %3d) | "
              "1-sic ort %.1f | 2-sic ort %.1f | iskalayan A %3d B %3d C %3d"
              % (n, len(tarihler), a, nn, len(bs), len(bs[0]),
                 sum(len(x) for x in bir) / float(nn),
                 sum(len(x) for x in iki) / float(nn), iskA, iskB, iskC),
              flush=True)

    k = max(1, top["n"])
    gov = top["govde"] / float(k)
    print()
    print("--- OZET (kesit basina ortalama, %d kesit) ---" % k)
    print("  govde                        : %.1f" % gov)
    print("  A) bagli bilesen sayisi      : %.1f  (en buyuk %.1f = %%%.1f)"
          % (top["bilesen"] / k, top["enbuyuk"] / k,
             100.0 * top["enbuyuk"] / k / gov))
    print("  B) 1 sicrama birim buyuklugu : %.1f govde (%%%.1f)"
          % (top["b1"] / k, 100.0 * top["b1"] / k / gov))
    print("  C) 2 sicrama birim buyuklugu : %.1f govde (%%%.1f)"
          % (top["b2"] / k, 100.0 * top["b2"] / k / gov))
    print()
    print("  TEK DEVLET ('%s') DEGISINCE YENIDEN HESAP PAYI:" % sina)
    print("    A) bagli bilesen : %%%.1f" % (100.0 * top["iskA"] / k / gov))
    print("    B) 1 sicrama     : %%%.1f" % (100.0 * top["iskB"] / k / gov))
    print("    C) 2 sicrama     : %%%.1f" % (100.0 * top["iskC"] / k / gov))
    print()
    print("  NOT: A'nin payi 'iskalayan govde / govde'dir (bilesen bir")
    print("       butun olarak yeniden hesaplanir). B ve C'de birim TEK")
    print("       DEVLETTIR, yani pay dogrudan 'kac devletin anahtari bozuldu'.")


if __name__ == "__main__":
    main()

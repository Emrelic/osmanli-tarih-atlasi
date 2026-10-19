# -*- coding: utf-8 -*-
"""B GÖRÜNÜMÜ — paralel üretilmiş `dolgu` parçalarını TEK dosyaya birleştirir.

`MOTOR_DOLGU_BAS`/`MOTOR_DOLGU_SON` ile kesit aralıkları ayrı süreçlerde koşulur
(her biri kendi `MOTOR_DOLGU_CIKTI`sına yazar). Bu betik o dosyaları kesit sırasıyla
okur, halka/parça havuzlarını TEK havuzda yeniden indeksler ve kesit sınırında
birebir aynı kalan kayıtların dönemini uzatır (tek süreçli çıktıyla aynı sonuç).

    py arac/dolgu_birlestir.py <cikti.js> <parca1.js> <parca2.js> …   (kesit sırasıyla)
"""
import io
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import dolgu as D   # noqa: E402  (Havuz + js_yaz; modül yan etkisi: yalnız sabitler/önbellek kurulumu)


def oku(yol):
    s = io.open(yol, encoding="utf-8").read()

    def al(ad):
        a = "window." + ad + " = "
        i = s.find(a)
        if i < 0:
            return None
        return json.loads(s[i + len(a):s.find(";\n", i)])
    return al("DOLGU_PARCALAR"), al("DOLGU_PARCA_HALKA"), al("DOLGU"), al("DOLGU_IZI")


def main():
    cikti, parcalar = sys.argv[1], sys.argv[2:]
    if not parcalar:
        raise SystemExit(__doc__)
    havuz = D.Havuz()
    kayit = []
    izi = None
    for yol in parcalar:
        halka, parca, dolgu, iz = oku(yol)
        if dolgu is None:
            raise SystemExit("okunamadı: " + yol)
        izi = izi or iz
        # eski indeks → yeni parça indeksi
        yeni_parca = {}
        for pi, hs in enumerate(parca):
            ks = []
            for h in hs:
                kh = json.dumps(halka[h], separators=(",", ":"))
                j = havuz.halka_ix.get(kh)
                if j is None:
                    j = len(havuz.halka)
                    havuz.halka.append(halka[h])
                    havuz.halka_ix[kh] = j
                ks.append(j)
            pk = json.dumps(ks, separators=(",", ":"))
            j = havuz.parca_ix.get(pk)
            if j is None:
                j = len(havuz.parca)
                havuz.parca.append(ks)
                havuz.parca_ix[pk] = j
            yeni_parca[pi] = j
        gelen = [{"f": r["f"], "t": r["t"], "k": r["k"], "c": r["c"],
                  "p": [yeni_parca[x] for x in r["p"]]} for r in dolgu]
        # sınır birleştirme: önceki parçanın son kesidi ile bu parçanın ilk kesidi
        # BİREBİR aynı kayıt kümesiyse dönemi uzat (kayıt açma).
        if kayit and gelen:
            son_t = kayit[-1]["t"]
            ilk_f = gelen[0]["f"]
            onceki = [r for r in kayit if r["t"] == son_t]
            ilk = [r for r in gelen if r["f"] == ilk_f]
            im = lambda L: sorted((r["k"], r["c"], tuple(r["p"])) for r in L)
            if son_t == ilk_f and im(onceki) == im(ilk):
                bit = max(r["t"] for r in ilk)
                for r in onceki:
                    r["t"] = bit
                gelen = [r for r in gelen if r not in ilk]
                # ilk kesidin kayıtları atıldıysa, onların `t`si uzatılmış olanlarla aynı kalır
        kayit.extend(gelen)
    if izi is not None:
        izi = dict(izi)
        izi["birlestirilen_parca"] = len(parcalar)
    boy = D.js_yaz(cikti, kayit, havuz, izi=izi)
    print("birleştirildi: %d dosya → %s · %d kayıt · %d halka · %d parça · %.1f MB"
          % (len(parcalar), cikti, len(kayit), len(havuz.halka), len(havuz.parca), boy / 1048576.0))


if __name__ == "__main__":
    main()

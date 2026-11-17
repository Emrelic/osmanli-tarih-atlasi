# -*- coding: utf-8 -*-
"""K3-TARIHCESIZ — bir bloğun 1900 kat 1-3 şehirlerinden tarihçesi OLMAYANLAR (HAVVA 16 Kasım 2026).

LAB ve EMRELİC'in öteki bloklarda AYNI ölçümü kullanması için denetim/ altında durur.

TANIM (belgelenmiş, LAB'ın 1.501/586 ölçümüyle birebir AYNI DEĞİLDİR — LAB'ın betiği repoda yok):
  küme   = denetim/SEHIR-1900-LISTE-1013/LISTE.tsv satırları (kat 1-3), ülkeye göre blok.
  tarihçeli = `arac/sehir_liste_f1.py` ölçümü: data/sehir_tarihce_*.js içinde
              (a) koordinatı ≤3 km kayıt VAR ya da (b) ad eşleşmesi (ad_modern/ad_1900/atlas_ad,
              normalleştirilmiş) VAR ve koordinat varsa ≤30 km. Çift yönlü: koordinatsız satırı
              'yok' saymaz; tarihçe kaydının koordinatı yoksa yalnız ad eşleşmesi sayılır.
  tarihçesiz = tarihce_id boş. Ek bilgi: atlas_var (koordinat atlas yerleşiminden), yer_kat_var
              (YER_KAT adı ya da ≤3 km), koord_var.
KULLANIM  py -I denetim/SEHIR-DUNYA-1116/k3_tarihcesiz.py <blok>     (önce arac/sehir_liste_f1.py)
"""
import csv
import io
import json
import os
import re
import sys

KOK = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(KOK, "arac"))
import sehir_liste_f1 as f1  # noqa: E402


def yer_kat():
    with open(os.path.join(KOK, "data", "yer_kat.js"), encoding="utf-8") as f:
        s = f.read()
    i = s.index("=") + 1
    k = s.rindex("]") + 1
    return json.loads(re.sub(r",\s*([\]}])", r"\1", s[i:k]))


def main(blok):
    liste = os.path.join(KOK, "denetim", "SEHIR-DUNYA-1116", blok, "LISTE.tsv")
    cikti = os.path.join(KOK, "denetim", "SEHIR-DUNYA-1116", blok, "K3-TARIHCESIZ.tsv")
    with open(liste, encoding="utf-8") as f:
        rows = list(csv.DictReader(f, delimiter="\t"))
    yk = yer_kat()
    ykad = {f1.norm(e["ad"]) for e in yk}
    kolon = ["id", "kat", "ulke", "ad_1900", "ad_modern", "lat", "lon", "koord_kaynak", "atlas_var",
             "yer_kat_var", "kaynak_1900", "not"]
    n = 0
    with open(cikti, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, delimiter="\t", lineterminator="\n")
        w.writerow(kolon)
        for r in rows:
            if r["tarihce_id"]:
                continue
            lat = r["lat"]
            lon = r["lon"]
            atlas = r["koord_kaynak"].startswith("atlas")
            ykv = f1.norm(r["ad_modern"]) in ykad or f1.norm(r["ad_1900"]) in ykad
            if not ykv and lat != "":
                ykv = any(f1.km(float(lat), float(lon), e["lat"], e["lon"]) <= 3 for e in yk
                          if e.get("lat") is not None)
            w.writerow([r["id"], r["kat"], r["ulke"], r["ad_1900"], r["ad_modern"], lat, lon, r["koord_kaynak"],
                        "1" if atlas else "0", "1" if ykv else "0", r["kaynak_1900"], r["not"]])
            n += 1
    print("%s: %d şehir tarihçesiz (LISTE %d) → %s" % (blok, n, len(rows), cikti))


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print(__doc__)
        sys.exit(2)
    main(sys.argv[1])

# -*- coding: utf-8 -*-
"""ŞEHİR F1 LİSTE — blok bazında koordinatlı şehir listesi (HAVVA 16 Kasım 2026).

1900 listesinden (denetim/SEHIR-1900-LISTE-1013/LISTE.tsv) bloğun ülkelerini seçer;
her satıra atlas yerleşiminden KOORDİNAT (ad eşleşmesi, normalleştirilmiş) ve
`data/sehir_tarihce_*.js` içinde 3 km içinde tarihçe kaydı var mı ekler.
Koordinatı bulunamayan satır BOŞ bırakılır (uydurma yok) → F2 araştırması doldurur.

KULLANIM  py -I arac/sehir_liste_f1.py <blok> <cikti.tsv>
bloklar: yakin-dogu · balkanlar · dogu-avrupa
"""
import csv
import glob
import io
import math
import os
import re
import sys
import unicodedata

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

BLOK = {
    "yakin-dogu": ["Türkiye", "Suriye", "Ürdün", "İsrail", "Filistin", "Suudi", "Katar",
                   "BAE", "Birleşik Arap", "Kuveyt", "Bahreyn", "Umman", "Yemen", "Lübnan", "Irak", "Kıbrıs"],
    "balkanlar": ["Sırbistan", "Hırvatistan", "Bosna", "Slovenya", "Karadağ", "Makedonya",
                  "Kosova", "Romanya", "Bulgaristan", "Yunanistan", "Arnavutluk", "Yugoslavya"],
    "dogu-avrupa": ["Litvanya", "Letonya", "Estonya", "Ukrayna", "Belarus", "Beyaz Rusya", "Rusya",
                    "Moldova"],
}
# Sibirya / Uzak Doğu: EMRELİC'in bloğu (Emre, 16 Kasım 2026); Kuzey Kafkasya bizde kalır.
SIBIRYA_UST = {"Tobolskaya guberniya", "Tomskaya guberniya", "Eniseyskaya guberniya",
               "Irkutskaya guberniya", "Yakutskaya oblast", "Zabaykalskaya oblast",
               "Primorskaya oblast", "ostrov Sakhalin"}
_ESL = str.maketrans({"ı": "i", "İ": "i", "ş": "s", "Ş": "s", "ğ": "g", "Ğ": "g", "ç": "c",
                      "Ç": "c", "ö": "o", "Ö": "o", "ü": "u", "Ü": "u", "â": "a", "Â": "a",
                      "î": "i", "Î": "i", "û": "u", "Û": "u", "’": "'", "‘": "'"})


def norm(s):
    if not s:
        return ""
    s = unicodedata.normalize("NFKD", s.translate(_ESL))
    return "".join(c for c in s if not unicodedata.combining(c)).lower().strip()


def km(a, b, c, d):
    p = math.pi / 180
    x = (math.sin((c - a) * p / 2)) ** 2 + math.cos(a * p) * math.cos(c * p) * (math.sin((d - b) * p / 2)) ** 2
    return 12742 * math.asin(math.sqrt(x))


def atlas_indeks():
    import girdi
    idx = {}
    for y in girdi.yukle(sessiz=True):
        if "lat" in y and "lon" in y:
            idx.setdefault(norm(y["ad"]), []).append((y["lat"], y["lon"], y["ad"]))
    return idx


def tarihce_noktalari():
    """data/sehir_tarihce_*.js içindeki (id, lat, lon)."""
    import json
    out = []
    for p in glob.glob(os.path.join(KOK, "data", "sehir_tarihce_*.js")):
        with open(p, encoding="utf-8") as f:
            s = f.read()
        i = s.index("=") + 1
        k = s.rindex("]") + 1
        for e in json.loads(re.sub(r",\s*([\]}])", r"\1", s[i:k])):
            out.append((e["id"], e.get("lat"), e.get("lon"), e.get("ad", ""), e.get("atlas_ad") or ""))
    return out


def tarihce_bul(th, adlar, lat, lon):
    """(tarihçe kaydı, kaynak notu): önce 3 km, sonra ad eşleşmesi (koordinat varsa ≤30 km)."""
    if lat != "":
        yak = [(km(lat, lon, e[1], e[2]), e) for e in th if e[1] is not None and km(lat, lon, e[1], e[2]) <= 3]
        if yak:
            return min(yak, key=lambda x: x[0])[1], "3km"
    adset = {norm(a) for a in adlar if a}
    for e in th:
        if norm(e[3]) in adset or norm(e[4]) in adset or norm(e[0]) in adset:
            if lat == "" or e[1] is None or km(lat, lon, e[1], e[2]) <= 30:
                return e, "ad"
    return None, ""


def main(blok, cikti):
    ul = BLOK[blok]
    with open(os.path.join(KOK, "denetim", "SEHIR-1900-LISTE-1013", "LISTE.tsv"), encoding="utf-8") as f:
        rows = list(csv.DictReader(f, delimiter="\t"))
    sel = [r for r in rows if any(u in r["modern_ulke"] or u in r["ulke_1900"] for u in ul)
           and not (blok == "yakin-dogu" and "Rusya" in r["modern_ulke"])]
    atl = atlas_indeks()
    th = tarihce_noktalari()
    os.makedirs(os.path.dirname(os.path.abspath(cikti)), exist_ok=True)
    kolon = ["id", "kat", "ulke", "ad_1900", "ad_modern", "lat", "lon", "koord_kaynak",
             "atlas_ad", "atlas_km", "tarihce_id", "adlar_tarih_sirali", "kaynak_1900", "not"]
    n_k = n_t = 0
    sib = []
    n_sel = 0
    with open(cikti, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, delimiter="\t", lineterminator="\n")
        w.writerow(kolon)
        for r in sel:
            adaylar = []
            for ad in (r["atlas_aday"].split("|")[0].strip(), r["ad_modern"], r["ad_1900"]):
                for e in atl.get(norm(ad), []):
                    adaylar.append(e)
            lat = lon = ""
            kk = ""
            atl_ad = ""
            if adaylar:
                lat, lon, atl_ad = adaylar[0]
                kk = "atlas-yerlesim-ad-eslesmesi"
                n_k += 1
            tid = ""
            e, nasil = tarihce_bul(th, (r["ad_modern"], r["ad_1900"], atl_ad), lat, lon)
            if e:
                tid = e[0]
                n_t += 1
                if lat == "" and e[1] is not None:
                    lat, lon = e[1], e[2]
                    kk = "tarihce-kaydi (bagimsiz teyit YOK)"
                    n_k += 1
            satir = [norm(r["ad_modern"] or r["ad_1900"]).replace(" ", "-"), r["kat"], r["modern_ulke"],
                     r["ad_1900"], r["ad_modern"], lat, lon, kk, atl_ad, "", tid, "", r["kaynak"],
                     r["not"]]
            # Urallar'ın doğusu (Sibirya/Uzak Doğu) EMRELİC'in bloğu: ayrı dosya
            if blok == "dogu-avrupa" and "Rusya" in r["modern_ulke"]:
                dogu = r["ust_birim"] in SIBIRYA_UST or (lat != "" and lon >= 60)
                if dogu:
                    sib.append(satir)
                    n_k -= 1 if lat != "" else 0
                    n_t -= 1 if tid else 0
                    continue
            n_sel += 1
            w.writerow(satir)
    if sib:
        yol = os.path.join(os.path.dirname(os.path.abspath(cikti)), "LISTE-SIBIRYA-UZAKDOGU.tsv")
        with open(yol, "w", encoding="utf-8", newline="") as f:
            w2 = csv.writer(f, delimiter="\t", lineterminator="\n")
            w2.writerow(kolon)
            w2.writerows(sib)
        print("  Urallar'ın doğusu (EMRELİC bloğu): %d şehir → %s" % (len(sib), yol))
    print("%s: %d şehir · koordinatı atlas eşleşmesinden bulunan %d · tarihçe kaydı (3 km) olan %d · "
          "koordinatsız %d → %s" % (blok, n_sel, n_k, n_t, n_sel - n_k, cikti))


if __name__ == "__main__":
    if len(sys.argv) != 3 or sys.argv[1] not in BLOK:
        print(__doc__)
        sys.exit(2)
    main(sys.argv[1], sys.argv[2])

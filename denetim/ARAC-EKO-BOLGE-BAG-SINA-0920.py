# -*- coding: utf-8 -*-
"""EKO-BOLGE-0073 · kart bag SINAVI (20 Eylul 2026).

SORU: data/ekokuma_bolge0073.js icindeki her `olay:` bagi
      ("YYYY-AA-GG|ayirt") veride GERCEKTEN bir maddeye tutuyor mu?

OLCUT app.js `_ekBagEslesir` ile AYNI: gun TAM ESIT olacak, `|`den sonraki
ayirt edici maddenin `b:` basliginda (normallestirilmis) GECECEK.
Normallestirici app.js `_ekNorm`u taklit eder: kucult + aksan/kesme sadelestir.

EVREN: data/olaylar*.js + data/kronoloji*.js  (index.html'in yukledigi kume
degil, TUM dosyalar; ayrica index.html'de yuklu mu diye AYRICA damgalanir).

Kullanim: py denetim/ARAC-EKO-BOLGE-BAG-SINA-0920.py
Cikti   : ekrana ozet + denetim/EKO-BOLGE-BAG-0920.json
"""
import os, re, json, sys, unicodedata

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KART = os.path.join(KOK, "data", "ekokuma_bolge0073.js")
INDEX = os.path.join(KOK, "index.html")

PAT_T = re.compile(r't:"(\d{4}(?:-\d{2}){0,2})"')
PAT_B = re.compile(r'(?<![A-Za-z_])b:"((?:[^"\\]|\\.)*)"')


def norm(s):
    """js/app.js `_ekNorm` ile HARFI HARFINE ayni (satir 9660 civari)."""
    s = "" if s is None else str(s)
    for a, b in (("İ", "i"), ("I", "i"), ("ı", "i"), ("Ş", "s"), ("ş", "s"),
                 ("Ğ", "g"), ("ğ", "g"), ("Ü", "u"), ("ü", "u"), ("Ö", "o"),
                 ("ö", "o"), ("Ç", "c"), ("ç", "c"), ("Â", "a"), ("â", "a"),
                 ("Î", "i"), ("î", "i"), ("Û", "u"), ("û", "u")):
        s = s.replace(a, b)
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = s.lower()
    for c in ("'", "‘", "’", "`", "ʼ"):
        s = s.replace(c, "")
    return re.sub(r"\s+", " ", s).strip()


def olaylari_oku():
    kayit = []
    dizin = os.path.join(KOK, "data")
    for ad in sorted(os.listdir(dizin)):
        if not ad.endswith(".js"):
            continue
        if not (ad.startswith("olaylar") or ad.startswith("kronoloji")):
            continue
        yol = os.path.join(dizin, ad)
        for i, satir in enumerate(open(yol, encoding="utf-8"), 1):
            mt, mb = PAT_T.search(satir), PAT_B.search(satir)
            if mt and mb:
                kayit.append({"t": mt.group(1), "b": mb.group(1),
                              "dosya": "data/" + ad, "satir": i})
    return kayit


def baglari_oku():
    metin = open(KART, encoding="utf-8").read()
    kartlar = []
    for m in re.finditer(r'\{\s*id:"([^"]+)",\s*tur:"([^"]+)"', metin):
        kid, tur = m.group(1), m.group(2)
        kuyruk = metin[m.end():m.end() + 30000]
        mo = re.search(r'\bolay:\[([^\]]*)\]', kuyruk)
        baglar = re.findall(r'"((?:[^"\\]|\\.)*)"', mo.group(1)) if mo else []
        kartlar.append({"id": kid, "tur": tur, "baglar": baglar})
    return kartlar


def turler_oku():
    app = open(os.path.join(KOK, "js", "app.js"), encoding="utf-8").read()
    i = app.find("var EKOKUMA_TUR = {")
    govde = app[i:app.find("\n};", i)]
    return set(re.findall(r'^\s*"([a-z\-]+)":\s*\{', govde, re.M))


def main():
    olaylar = olaylari_oku()
    kartlar = baglari_oku()
    turler = turler_oku()
    index = open(INDEX, encoding="utf-8").read()

    rapor = {"evren_madde": len(olaylar), "kart": len(kartlar),
             "tanimsiz_tur": [], "bag": [], "ozet": {}}
    tut = kop = 0
    for k in kartlar:
        if k["tur"] not in turler:
            rapor["tanimsiz_tur"].append({"id": k["id"], "tur": k["tur"]})
        for bag in k["baglar"]:
            gun, _, ayirt = bag.partition("|")
            na = norm(ayirt)
            esler = [o for o in olaylar
                     if o["t"] == gun and (not na or na in norm(o["b"]))]
            yuklu = [o for o in esler if o["dosya"] in index]
            satir = {"kart": k["id"], "bag": bag, "eslesen": len(esler),
                     "index_te_yuklu": len(yuklu),
                     "ornek": [o["dosya"] + ":" + str(o["satir"]) + " · " + o["b"]
                               for o in esler[:3]]}
            rapor["bag"].append(satir)
            if esler:
                tut += 1
            else:
                kop += 1

    rapor["ozet"] = {"toplam_bag": tut + kop, "tutan": tut, "kopuk": kop,
                     "index_te_yuklu_olmayan":
                         sum(1 for s in rapor["bag"]
                             if s["eslesen"] and not s["index_te_yuklu"])}
    cikti = os.path.join(KOK, "denetim", "EKO-BOLGE-BAG-0920.json")
    json.dump(rapor, open(cikti, "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)

    print("evren: %d madde (data/olaylar*.js + data/kronoloji*.js)" % len(olaylar))
    print("kart : %d · tanimsiz tur: %d" % (len(kartlar), len(rapor["tanimsiz_tur"])))
    for s in rapor["bag"]:
        im = "OK " if s["eslesen"] else "KOP"
        uy = "" if s["index_te_yuklu"] else "   [!] index.html'de YUKLU DEGIL"
        print("%s %-46s %-34s eslesen=%d%s" % (im, s["kart"][:46], s["bag"], s["eslesen"], uy))
        for o in s["ornek"]:
            print("      " + o)
    print("OZET: %s" % json.dumps(rapor["ozet"], ensure_ascii=False))
    print("-> " + cikti)


if __name__ == "__main__":
    main()

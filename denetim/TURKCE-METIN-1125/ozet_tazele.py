# -*- coding: utf-8 -*-
"""TURKCE-METIN-1125 — SALT İMLA değişen Türkçe metinlerin çeviri özetini tazeler.

salt_imla.json: Türkçesi yalnız harf işareti / noktalama / büyük-küçük harf bakımından
değişen kayıtlar (anlam aynı ⇒ mevcut çeviri geçerli). Betik, data/ceviri_<dil>_<tur>*.js
dosyalarında yalnız O KAYDIN satırında, yalnız ESKİ özeti birebir tutan alanı yeni özete
çevirir. Özet tutmuyorsa (zaten bayat ya da başkası yeniden çevirmiş) DOKUNMAZ.
Dosyaları bölmez, sıralamaz. Çeviri dalları BİRLEŞTİKTEN SONRA koşturulur:

    py denetim/TURKCE-METIN-1125/ozet_tazele.py --kuru
    py denetim/TURKCE-METIN-1125/ozet_tazele.py
    py arac/ceviri.py yaz        # data/ceviri_dizin.js sürümleri
    py arac/ceviri.py denetim
"""
import io, json, os, re, sys

BURA = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(os.path.dirname(BURA))
sys.path.insert(0, os.path.join(KOK, "arac"))
from ceviri import ozet  # noqa: E402

KURU = "--kuru" in sys.argv
liste = json.load(io.open(os.path.join(BURA, "salt_imla.json"), encoding="utf-8"))
harita = {}
for k in liste:
    harita.setdefault((k["tur"], k["id"]), []).append((ozet(k["eski"]), ozet(k["yeni"])))

say = {}
data = os.path.join(KOK, "data")
for ad in sorted(os.listdir(data)):
    m = re.match(r"^ceviri_([a-z]+)_(olay|devlet)(_\d+)?\.js$", ad)
    if not m:
        continue
    dil, tur = m.group(1), m.group(2)
    yol = os.path.join(data, ad)
    with io.open(yol, encoding="utf-8", newline="") as f:
        satirlar = f.read().split("\n")
    degisti = False
    for i, s in enumerate(satirlar):
        if not s.startswith('"'):
            continue
        try:
            kimlik, _ = json.JSONDecoder().raw_decode(s)
        except ValueError:
            continue
        for eski, yeni in harita.get((tur, kimlik), []):
            hedef = '"%s"]' % eski
            if hedef in satirlar[i]:
                satirlar[i] = satirlar[i].replace(hedef, '"%s"]' % yeni)
                say[(dil, tur)] = say.get((dil, tur), 0) + 1
                degisti = True
    if degisti and not KURU:
        with io.open(yol, "w", encoding="utf-8", newline="") as f:
            f.write("\n".join(satirlar))

print("liste: %d alan · %s" % (len(liste), "KURU KOŞU" if KURU else "YAZILDI"))
for k in sorted(say):
    print("  %s %-6s %d" % (k[0], k[1], say[k]))
print("toplam tazelenen:", sum(say.values()))

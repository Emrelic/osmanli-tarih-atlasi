# -*- coding: utf-8 -*-
"""KRONO-0076-A — H-0036 (Kars) ve H-0043 (Bosna/Yenipazar) YATAY OLCUMU.

Hukmu ben vermiyorum (H-0036 HARITA-0076'nin, H-0043 SINIR-BERLIN-0076'nin).
Bu betik yalnizca SAYIYI uretir. Hicbir dosyaya YAZMAZ.

🔴 AYRISTIRICI: motorun kendi yukleyicisi (arac/girdi.yukle) kullanilir.
Elle yazilan bir duzenli ifade ayristiricisi ONCE denendi ve YANILDI:
3921 yerlesim yerine 2731 buldu, Osmanli donemlerini (kayit duzeyindeki `d:`
dizisi) "SAHIPSIZ" sandi ve kayit sinirlarini kaydirip Yenipazar'a komsu
kaydin devletini yapistirdi. Sahiplik DORT kovadadir ve dordu de okunur:
  d:  Osmanli dogrudan · v: tabi · s: yabanci devlet · isg: isgal
"""
import io, os, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

Y = girdi.yukle(sessiz=True)
print("ayristirilan yerlesim: %d  (girdi dosyasi: %d)" % (len(Y), len(girdi.GIRDI_DOSYALARI)))

def sahip(y, gun):
    """O gun kim sahipti — dort kovanin DORDU de dokulur, ilki dondurulmez.

    🔴 Bu fonksiyonun ilk hali ilk esleseni donduruyordu; `d:` (Osmanli) once
    sorulduugu icin AYNI GUNDE duran bir `isg:` (isgal) kaydini GIZLIYORDU.
    Isgal sorusu tam da bu partinin sorusu oldugundan kusur olcumu yalan
    yapardi: "Bosna'da isgal YOK" hukmu, aranmadigi icin bos cikan kumeden
    dogardi. Simdi butun kovalar birlestirilip basilir.
    """
    bulunan = []
    for kova, etiket in (("d", "OSMANLI"), ("v", "tabi:"), ("s", ""), ("isg", "ISGAL:")):
        for p in y.get(kova) or []:
            f, t = p.get("f", ""), p.get("t", "")
            if f <= gun < (t or "9999-12-31"):
                bulunan.append("OSMANLI" if kova == "d"
                               else etiket + (p.get("d") or p.get("kid") or "?"))
    return "+".join(bulunan) if bulunan else "SAHIPSIZ"

def kutu(y, lat0, lat1, lon0, lon1):
    return lat0 <= y["lat"] <= lat1 and lon0 <= y["lon"] <= lon1

def dokum(baslik, bolge, gun_a, gun_b):
    print()
    print("=" * 78)
    print(baslik)
    print("=" * 78)
    print("bolgedeki yerlesim: %d" % len(bolge))
    print("%-26s %-8s %-8s %-22s %-22s" % ("yer", "lat", "lon", gun_a, gun_b))
    fark = 0
    for y in sorted(bolge, key=lambda y: y["ad"]):
        a, b = sahip(y, gun_a), sahip(y, gun_b)
        if a != b:
            fark += 1
        print("%-26s %-8s %-8s %-22s %-22s%s"
              % (y["ad"][:26], y["lat"], y["lon"], a, b, "   <-- DEGISTI" if a != b else ""))
    print("iki gun arasinda sahibi degisen: %d / %d" % (fark, len(bolge)))

dokum("H-0036 — KARS CEVRESI (lat 39.5-41.8 · lon 41.0-45.0)",
      [y for y in Y if kutu(y, 39.5, 41.8, 41.0, 45.0)], "1877-11-17", "1877-11-19")

dokum("H-0036b — AYNI BOLGE, SAVAS BOYUNCA (93 Harbi basi -> Ayastefanos)",
      [y for y in Y if kutu(y, 39.5, 41.8, 41.0, 45.0)], "1877-04-24", "1878-03-03")

dokum("H-0043 — BOSNA-HERSEK + YENIPAZAR (lat 42.0-45.5 · lon 15.0-21.0)",
      [y for y in Y if kutu(y, 42.0, 45.5, 15.0, 21.0)], "1878-07-28", "1878-07-30")

print()
print("ARANAN ADLAR (H-0043'te tek tek sorulanlar):")
for aranan in ["Yenipazar", "Udbina", "Cetin", "Bihac", "Bihać", "Brod", "Jasenovac", "Novi Pazar"]:
    bul = [y for y in Y if aranan.lower() in y["ad"].lower()]
    if bul:
        for y in bul:
            print("  %-12s -> %-28s lat %7.3f lon %7.3f | 1878-07-28: %-18s | 1878-07-30: %-18s | 1879-01-01: %-18s [%s]"
                  % (aranan, y["ad"], y["lat"], y["lon"],
                     sahip(y, "1878-07-28"), sahip(y, "1878-07-30"), sahip(y, "1879-01-01"),
                     y.get("_kaynak", "?")))
    else:
        print("  %-12s -> BULUNAMADI (bu adda yerlesim noktasi YOK)" % aranan)

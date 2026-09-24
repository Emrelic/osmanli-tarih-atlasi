# -*- coding: utf-8 -*-
"""A-AVRUPA-0078 — denetle.py'yi data/yerlesimler_a78_avrupa.js BAĞLIYMIŞ gibi koşturur.
girdi.py'ye ve denetle.py'ye DOKUNMAZ: listeye/kaynağa yalnız BELLEKTE müdahale eder.
  py denetim/A-AVRUPA-0078-sarmal.py            # dosya ekli
  py denetim/A-AVRUPA-0078-sarmal.py --taban    # dosyasız (karşılaştırma tabanı)
  ... --d7duzelt   # _d7_komsuluk ızgara kusurunun düzeltilmiş hâliyle (yalnız ölçüm)
🔴 --d7duzelt NİÇİN: _d7_komsuluk boylam hücresini de D7_BAG_KM/111 derece alır ve
   yalnız ±1 hücre tarar; 58° enlemde 150 km ≈ 2,5° boylam olduğu için 1,35°'den
   uzak (hücre farkı 2) çiftler KOMŞU SAYILMAZ. Ölçüldü: Porkhov–Staraya Russa
   109 km, hücre 21↔23, komşu değil. Yama: dj aralığı enleme göre genişletilir.
"""
import sys, os, runpy
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi
DOSYA = "yerlesimler_a78_avrupa.js"
taban = "--taban" in sys.argv
d7 = "--d7duzelt" in sys.argv
sys.argv = [sys.argv[0]] + [a for a in sys.argv[1:] if a not in ("--taban", "--d7duzelt")]
if not taban and DOSYA not in girdi.GIRDI_DOSYALARI:
    girdi.GIRDI_DOSYALARI.append(DOSYA)
print("SARMAL:", "TABAN (dosyasız)" if taban else "DOSYA EKLİ", "·", len(girdi.GIRDI_DOSYALARI),
      "girdi dosyası", "· D7 IZGARA DÜZELTİLMİŞ" if d7 else "")
yol = os.path.join(KOK, "arac", "denetle.py")
if not d7:
    runpy.run_path(yol, run_name="__main__")
else:
    kaynak = open(yol, encoding="utf-8").read()
    eski = ("        for di in (-1, 0, 1):\n"
            "            for dj in (-1, 0, 1):\n"
            "                for j in kutu.get((ai + di, aj + dj), ()):")
    yeni = ("        import math as _m\n"
            "        _dj = int(1 / max(_m.cos(_m.radians(min(abs(y['lat']) + hucre, 89.0))), 0.05)) + 1\n"
            "        for di in (-1, 0, 1):\n"
            "            for dj in range(-_dj, _dj + 1):\n"
            "                for j in kutu.get((ai + di, aj + dj), ()):")
    assert kaynak.count(eski) == 1, "yama noktası bulunamadı — denetle.py değişmiş"
    kaynak = kaynak.replace(eski, yeni)
    g = {"__name__": "__main__", "__file__": yol}
    exec(compile(kaynak, yol, "exec"), g)

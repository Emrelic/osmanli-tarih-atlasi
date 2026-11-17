# -*- coding: utf-8 -*-
"""ZAMAN DİLİMLİ PARÇA SINAVI (P1 ②, 16 Kasım 2026) — iki hedef, tek komut.

    py arac/denetle_dilim.py [dizin=data] [tarih_sayisi=40]

Her hedef (devlet, donem) için `kodla.py dilim_sina`:
  ① manifest ↔ dosya: gömülü sha256 = sha256(ikili) = manifest kısa sha, boyut tutuyor,
     manifestte olmayan parça dosyası yok
  ② havuzdaki HER halka TAM BİR parçada, baytları tam havuzla BİREBİR (eksi sıfır dâhil)
  ③ parçalardan kurulan tam akış = havuz akışı
  ④ ≥30 tarih (sabit tohum + uçlar + 1281/1453/1683/1914/1990): o yıl ETKİN her dönemin
     her halkası, tarayıcının seçtiği parçalarda (js/geo_coz.js kuralı) VAR
Bellek: tam havuz ÇÖZÜLMEZ, bayt dilimleriyle kıyaslanır (devlet ~10 sn, ~0,3 GB).
Çıkış: 0 temiz · 1 ihlal · 2 ölçülemedi (manifest yok / dosya okunamadı).
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import kodla  # noqa: E402


def main(argv):
    dizin = argv[0] if argv else "data"
    n = int(argv[1]) if len(argv) > 1 else 40
    if n < 30:
        print("🔴 tarih sayısı en az 30 olmalı")
        return 2
    man = kodla._manifest_oku(dizin)
    if not man:
        print("⚪ dilim sınavı: %s/%s YOK — ölçülemedi" % (dizin, kodla.DILIM_MANIFEST))
        return 2
    hata = 0
    for hedef in ("devlet", "donem"):
        if hedef not in man:
            print("🔴 dilim sınavı: manifestte %s kaydı YOK" % hedef)
            return 2
        try:
            hata += kodla.dilim_sina(dizin, hedef, tarih_sayisi=n)
        except Exception as e:                               # noqa: BLE001
            print("🔴 dilim sınavı %s ÖLÇEMEDİ: %s" % (hedef, str(e)[:120]))
            return 2
    print("%s dilim sınavı: hata %d" % ("✓" if not hata else "✗", hata))
    return 1 if hata else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))

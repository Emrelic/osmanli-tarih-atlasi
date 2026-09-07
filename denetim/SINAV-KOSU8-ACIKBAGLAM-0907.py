# -*- coding: utf-8 -*-
u"""Ⓗ KOVASININ BELGE BAĞLAMI — «yok» ne demek istiyor?

    SINAV-KOSU8-0907 · 7 Eylül 2026

`SINAV-KOSU8-ACIKUZANTI-0907.py` kovayı 12 yola indirdi: bu dosyalar
ne diskte var, ne git geçmişinde, ne başka bir uzantıyla. Ama
*"dosya yok"* tek başına bir **hüküm değil** — üç ayrı şey demek
olabilir:
```
Ⓑ BEKLEYEN     belge zaten «koşu bitmeden yazılmaz» diyor
               ⇒ borç DEĞİL, DOĞRU DAVRANIŞ
Ⓘ İPTAL        iş sonradan iptal edilmiş ya da devredilmiş
Ⓞ AÇIK BORÇ    gerçekten yapılacak ve yapılmamış
```
🔴 Ve ilk kova zaten **ölçüldü**: `data/sinir_ciftleri.js`in kendi
belgesi *"koşu bitmeden YAZILMAZ"* diyor. Yani Ⓗ kovası **homojen
değil** ve içinde en az bir **doğru davranış** var.

⇒ Bu alet hüküm VERMEZ; her satırın **bağlamını** basar ki elle
okunabilsin. `§11`: *"ölçmediğini «ölçmedim» diye yaz"* — bir belge
satırının ne demek istediğine karar vermek **okuma** işidir, ve
otomatik bir ölçüt onu **sahte bir kesinlikle** kapatır.

    py denetim/SINAV-KOSU8-ACIKBAGLAM-0907.py
    py denetim/SINAV-KOSU8-ACIKBAGLAM-0907.py --yol data/yer_yama_k85.js
"""
from __future__ import unicode_literals

import io
import os
import re
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ALET = os.path.join(KOK, "denetim", "SINAV-KOSU8-ACIKUZANTI-0907.py")
BAGLAM = 2

# Belgenin KENDİSİ «henüz yazılmadı» diyorsa, o bir borç değil bir NİYET.
BEKLEYEN_RX = re.compile(
    r"ko(?:ş|s)u\s*(?:\d+[ab]?\s*)?bit(?:m|e)|yaz(?:ı|i)lmaz|"
    r"hen(?:ü|u)z\s+yaz|TASLAK|yaz(?:ı|i)lmayacak|sonra\s+yaz", re.I)


def yukle():
    import importlib.util
    o = importlib.util.spec_from_file_location("_uz0907", ALET)
    m = importlib.util.module_from_spec(o)
    o.loader.exec_module(m)
    return m


def main():
    mod = yukle()
    yollar = mod.yollari_al()

    iY = sys.argv.index("--yol") if "--yol" in sys.argv else -1
    tek = sys.argv[iY + 1] if iY >= 0 else None

    # Ⓗ kovasını yeniden kur — aletin KENDİ kapılarıyla, kopyalamadan
    hedefler = {}
    for yol, yerler in yollar.items():
        if tek and yol != tek:
            continue
        if mod.uzanti_varyanti(yol):
            continue
        gec, _k = mod.gitte_vardi_mi(yol)
        if gec:
            continue
        if mod.kok_adiyla_gitte(yol):
            continue
        hedefler[yol] = yerler

    print("═" * 78)
    print("Ⓗ KOVASI — BELGE BAĞLAMI (hüküm YOK, okuma İÇİN)")
    print("═" * 78)
    print("yol: %d · satır: %d"
          % (len(hedefler), sum(len(v) for v in hedefler.values())))
    print("")

    bekleyen = 0
    for yol in sorted(hedefler):
        print("─" * 78)
        print("🔴 %s   (%d yerde)" % (yol, len(hedefler[yol])))
        for yer in hedefler[yol]:
            dosya, no = yer.rsplit(":", 1)
            no = int(no)
            tam = os.path.join(KOK, dosya)
            try:
                with io.open(tam, encoding="utf-8", errors="replace") as f:
                    satirlar = f.read().splitlines()
            except (IOError, OSError):
                print("   %s  ⚫ dosya okunamadı" % yer)
                continue
            print("   %s" % yer)
            bas = max(0, no - 1 - BAGLAM)
            son = min(len(satirlar), no + BAGLAM)
            for i in range(bas, son):
                im = " →" if i == no - 1 else "  "
                s = satirlar[i].strip()
                if len(s) > 150:
                    s = s[:150] + "…"
                print("     %s %s" % (im, s))
            pencere = " ".join(satirlar[bas:son])
            if BEKLEYEN_RX.search(pencere):
                bekleyen += 1
                print("     ⚠️ BELGE KENDİ «henüz yazılmaz» DİYOR "
                      "⇒ borç değil, BEKLEYEN olabilir")
        print("")

    print("─" * 78)
    print("ÖZET")
    print("  yol %d · satır %d" % (len(hedefler),
                                   sum(len(v) for v in hedefler.values())))
    print("  ⚠️ belge kendi «henüz yazılmaz» diyen satır: %d" % bekleyen)
    print("")
    print("⚠️ BU ALET HÜKÜM VERMEZ. «henüz yazılmaz» işareti bir İPUCU;")
    print("   kararı okuyan verir. Otomatik bir ölçüt bu kovayı SAHTE BİR")
    print("   KESİNLİKLE kapatır — ve bu projede o hata dört kez ölçüldü.")
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())

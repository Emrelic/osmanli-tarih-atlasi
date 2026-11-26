# -*- coding: utf-8 -*-
"""KITA 9 — cikti dosyalarinin AYRISTIRILABILIRLIK sinavi (sartname §3-5).

"Bu gece bir dosya tam bu yuzden coktu ve olu oldugu icin cokmesi
GORUNMUYORDU." -> her JSON ciktisi yazildiktan SONRA bu aletle sinanir.

Ek olarak VERI-YURUME-0912.json icin ICERIK sinavi yapar:
   her sayisal deger tasiyan dugumun `kaynak` alani VAR MI (§3-2).
   Eksikse ADIYLA basar ve exit(1) verir — sessiz gecmez (D068).

kullanim: py denetim/ARAC-YURUME-SINA-0912.py
"""
import json, io, os, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.abspath(__file__))

DOSYALAR = ["ONGORU-YURUME-0912.json", "VERI-YURUME-0912.json"]
KAYNAK_ZORUNLU = "VERI-YURUME-0912.json"
# ongoru dosyasinda kaynak ARANMAZ: tanimi geregi kaynaksiz (D107 "okumadim")

DAMGA = {"bulunamadi", "bulunamadı", "olculemedi", "ölçülemedi",
         "okumadim", "okumadım"}


def sayisal_yapraklar(d, yol=""):
    """icinde sayi TASIYAN her sozluk dugumunu (yol, dugum) olarak verir"""
    if isinstance(d, dict):
        kendi_sayisi = any(
            isinstance(v, (int, float))
            or (isinstance(v, list) and v and all(isinstance(x, (int, float)) for x in v))
            for k, v in d.items() if k not in ("kaynak", "kaynak_turu"))
        if kendi_sayisi:
            yield yol or "<kok>", d
        for k, v in d.items():
            yield from sayisal_yapraklar(v, yol + "/" + str(k))
    elif isinstance(d, list):
        for i, v in enumerate(d):
            yield from sayisal_yapraklar(v, yol + "[%d]" % i)


hata = 0
for ad in DOSYALAR:
    y = os.path.join(KOK, ad)
    if not os.path.exists(y):
        print("  ATLANDI (henuz yok): %s" % ad)
        continue
    try:
        d = json.load(io.open(y, encoding="utf-8"))
    except Exception as e:
        print("  🔴 AYRISTIRILAMADI %s -> %s" % (ad, e))
        hata += 1
        continue
    print("  🟢 AYRISTI  %-28s ust duzey anahtar: %d · %d bayt"
          % (ad, len(d), os.path.getsize(y)))

    if ad == KAYNAK_ZORUNLU:
        eksik, damgali, kaynakli = [], 0, 0
        for yol, dugum in sayisal_yapraklar(d):
            k = dugum.get("kaynak")
            if k is None:
                eksik.append(yol)
            elif str(k).strip().lower() in DAMGA:
                damgali += 1
            else:
                kaynakli += 1
        print("     kaynakli dugum: %d · damgali (bulunamadi/olculemedi): %d"
              % (kaynakli, damgali))
        if eksik:
            print("     🔴 KAYNAKSIZ SAYISAL DUGUM: %d" % len(eksik))
            for e in eksik[:40]:
                print("        " + e)
            hata += 1
        else:
            print("     🟢 KAYNAKSIZ sayisal dugum YOK")

print()
if hata:
    print("SINAV BASARISIZ — %d dosya" % hata)
    sys.exit(1)
print("SINAV TEMIZ")

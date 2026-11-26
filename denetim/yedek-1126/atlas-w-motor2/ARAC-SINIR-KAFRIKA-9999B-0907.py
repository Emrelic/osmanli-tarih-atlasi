# -*- coding: utf-8 -*-
"""KALEM Ⓐ ikinci tur — kaydın KENDİ BEYANI var mı? · SINIR-KAFRIKA-0907

`denetle.py:1585` bu vakayı "🟢 KASITLI VE BEYANLI" diye yargılamış ve
kaydın kendi `neden:` alanını ALINTILIYOR. İddiayı devralmıyorum:
kaydın ham alanlarını döküp beyanın GERÇEKTEN orada olduğunu ölçüyorum.

🔴 `§11`: bir yorumdaki iddia, hayatta kalan veri hakkında bir TAAHHÜTTÜR
   ve güven verdiği için kimse onu ölçmez. Bu proje o dersi bir kez
   `yakinlikKm` vakasında ödedi.
"""
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402


def main():
    Y = girdi.yukle()
    hedef = [y for y in Y if "efs" in y["ad"]]
    print("=== SEFSAVEN — YUKLENMIS KAYDIN BUTUN ALANLARI ===")
    for y in hedef:
        for k in sorted(y.keys()):
            v = y[k]
            if isinstance(v, list):
                print("   %-10s [%d oge]" % (k, len(v)))
            else:
                print("   %-10s %s" % (k, str(v)[:400]))

    print("")
    print("=== HAM DOSYA SATIRI — girdi.py'nin OKUMADIGI alanlar da gorunsun ===")
    yol = os.path.join(KOK, "data", "yerlesimler_h2_kuzeyafrika.js")
    s = io.open(yol, encoding="utf-8", errors="replace").read()
    i = s.find("Şefşâven")
    if i < 0:
        print("   🔴 ad ham dosyada BULUNAMADI (normallestirme gerekebilir)")
    else:
        bas = s.rfind("{", 0, i)
        # kaydin sonunu bul: bir sonraki satir basi '{' ya da dizi sonu
        son = s.find("\n  {", i)
        if son < 0:
            son = i + 3000
        ham = s[bas:son]
        print(ham[:2600])
        print("")
        print("   --- alan taramasi ---")
        for alan in ("neden", "bos", "not", "kaynak", "kur", "ikiz"):
            m = re.search(r'\b' + alan + r'\s*:\s*"([^"]{0,400})"', ham)
            print("   %-8s %s" % (alan + ":", m.group(1) if m else "YOK"))
    return 0


if __name__ == "__main__":
    sys.exit(main())

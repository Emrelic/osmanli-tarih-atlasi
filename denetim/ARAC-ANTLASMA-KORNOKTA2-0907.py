# -*- coding: utf-8 -*-
"""ANTLASMA-KORNOKTA2-0907 — kör noktanın ARKASINDA kusur var mı?

🔴 BİRİNCİ DENEMEM GÜRÜLTÜ ÜRETTİ ve kaydediyorum: `taraf` içindeki
   `osmanli` kimliğini 10 kayıtta da "künyesiz" diye işaretledim ve
   *"kör nokta KUSUR SAKLIYOR"* diye hüküm verdim. YANLIŞ —
```
   denetle_anakronizm.py:314   if kimlik == "osmanli": continue
                               # "çekirdek katman, ömrü ayrı iş"
   ve GÖRÜNEN 31 kaydın 28'inde de `osmanli` VAR
```
   ⇒ Bayrağım kör noktaya ÖZGÜ değildi; denetçinin ZATEN ATLADIĞI bir
   kimliği kusur saydım. `§11`: *bir aleti taklit eden ölçüm, onun
   EŞİĞİNİ ve KURAL DALLARINI da taşımalı.*

🟢 ÇARE: TAKLİT ETMİYORUM — DENETÇİYİ KOŞTURUYORUM. `oku_pencere`
   geçici olarak node çıktısıyla değiştirilip `savas_taraflari()` İKİ KEZ
   çağrılıyor: 31 kayıtla (bugünkü hâl) ve 41 kayıtla (düzeltilmiş hâl).
   Fark, kör noktanın gerçekten ne sakladığıdır.
"""
import json
import os
import subprocess
import sys

ARAC = os.path.join(os.path.dirname(__file__), "..", "arac")
sys.path.insert(0, ARAC)
sys.argv = [sys.argv[0]]
import girdi  # noqa: E402
import denetle as d  # noqa: E402
import denetle_anakronizm as A  # noqa: E402

KOK = os.path.join(os.path.dirname(__file__), "..")


def node_dizi(dizi):
    js = ("const fs=require('fs'),vm=require('vm');const c={window:{}};"
          "vm.createContext(c);vm.runInContext("
          "fs.readFileSync('data/savaslar.js','utf8'),c);"
          "process.stdout.write(JSON.stringify(c.window.%s));" % dizi)
    r = subprocess.run(["node", "-e", js], capture_output=True, cwd=KOK)
    return json.loads(r.stdout.decode("utf-8"))


def main():
    D = A.oku_devletler()
    om = A.omurler(D)
    gercek = d.oku_pencere

    def kos(etiket, tam):
        if tam:
            tamlist = node_dizi("ANTLASMALAR")

            def sahte(yol, dizi):
                if dizi == "ANTLASMALAR":
                    return tamlist
                return gercek(yol, dizi)
            d.oku_pencere = sahte
        else:
            d.oku_pencere = gercek
        try:
            r = A.savas_taraflari(om, D)
        finally:
            d.oku_pencere = gercek
        return r

    print("=== DENETÇİ KOŞTURULDU (taklit EDİLMEDİ) ===\n")
    print("── ① BUGÜNKÜ HÂL: oku_pencere 31 kayıt ──")
    a = kos("31", False)
    print("\n── ② DÜZELTİLMİŞ: ANTLASMALAR node'dan, 41 kayıt ──")
    b = kos("41", True)

    def say(r):
        if isinstance(r, tuple):
            return [len(x) if hasattr(x, "__len__") else x for x in r]
        return r
    print("\n=== SONUÇ ===")
    print("   31 kayıtla : %s" % (say(a),))
    print("   41 kayıtla : %s" % (say(b),))
    if isinstance(a, tuple) and isinstance(b, tuple):
        for i, (x, y) in enumerate(zip(a, b)):
            lx = len(x) if hasattr(x, "__len__") else x
            ly = len(y) if hasattr(y, "__len__") else y
            if lx != ly:
                print("   🔴 dönüşün %d. ögesi DEĞİŞTİ: %s -> %s"
                      % (i, lx, ly))
                if hasattr(x, "__iter__") and hasattr(y, "__iter__"):
                    ex = set(map(str, x)) if not isinstance(x, dict) else set(x)
                    ey = set(map(str, y)) if not isinstance(y, dict) else set(y)
                    for z in sorted(ey - ex):
                        print("      YENİ: %s" % str(z)[:110])
    return 0


if __name__ == "__main__":
    sys.exit(main())

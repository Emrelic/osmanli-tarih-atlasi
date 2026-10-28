"""ODAK-OSMANLI-ANADOLU-0080 — iş maddelerini TAM alanlarıyla döker.

Kullanım: py denetim/ODAK-OSMANLI-ANADOLU-0080-dok.py > <çıktı>
Yalnız okur. Sınıflama `arac/odak_olc.py:sinifla` ile BİREBİR aynıdır (içe aktarılır).
"""
import json
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import odak_olc  # noqa: E402
# W32b (6 Ekim 2026): T4 — _oku · sinifla · yer_havuzu 26741c10 (27 Eyl) ile odak_olc'tan KALDIRILDI;
# betik AttributeError ile çöküp ÇIKIŞ 1 ("ihlal") veriyordu. Artık açılışta ÇIKIŞ 2,
# veriye HİÇBİR ŞEY yazılmadan. Taşıma: arac/odak_cozum.js (W36: ODAK-ASYA-0080-uygula).
import olcu_kapisi_1006 as _w32_ok
_w32_ok.api(odak_olc, ['_oku', 'sinifla', 'yer_havuzu'], "odak_olc")

DOSYALAR = ["kronoloji_anadolu.js", "kronoloji_macaristan.js", "olaylar_p0068b.js",
            "olaylar_p0917taraf.js", "olaylar_p0063.js", "olaylar_ek4.js",
            "olaylar_p0057b.js"]

havuz = odak_olc.yer_havuzu()
for f in DOSYALAR:
    d, h = odak_olc._oku(os.path.join(KOK, "data", f))
    if h:
        print("AYRISTIRILAMADI", f, h)
        continue
    print("#### %s  (window.%s)" % (f, d["ad"]))
    for i, o in enumerate(d["kayit"]):
        sn, _ = odak_olc.sinifla(o, havuz)
        if sn not in ("BEYANLI", "ODAKSIZ"):
            continue
        z = {k: v for k, v in o.items() if k not in ("ek_okuma", "gorsel", "gorsel_kaynak")}
        print("[%s #%d] %s" % (sn, i, json.dumps(z, ensure_ascii=False)))

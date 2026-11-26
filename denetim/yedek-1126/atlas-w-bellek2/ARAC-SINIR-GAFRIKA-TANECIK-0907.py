# -*- coding: utf-8 -*-
"""ARAC-SINIR-GAFRIKA-TANECIK-0907 — TDV'nin SINIR ANTLASMASI taneciginde
konusup konusmadigini OLCER.

NICIN   `ARAC-...-TDV-0907` sluglarin CANLI oldugunu olctu (Bati %87 ·
        Dogu %82). Ama `§4`un kendi ayrimi var:
           COGRAFI boşluk      TDV o bolgeyi HIC gormuyor
           TANECIKLIK boşlugu  goruyor ama O KADAR INCE konusmuyor
        Kademe C'nin ihtiyaci bir SINIR ANTLASMASI adi ve tarihi.
        Canli bir ulke maddesi bunu tasimayabilir — ve tasimiyorsa
        "TDV'de yok" degil, "TDV bu tanecikte SUSUYOR" yazilir.

SORAR   "bu govdede, SINIR kelimesiyle AYNI CUMLEDE bir ANTLASMA/ANLASMA/
         PROTOKOL ve bir YIL geciyor mu?"
SORMAZ  "gecen cumle DOGRU sinirdan mi bahsediyor" — govde okunur, hukum
        insana aittir. Bu alet yalniz ADAY CUMLE cikarir.
"""
import io
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from importlib import import_module                                # noqa: E402

G = import_module("ARAC-SINIR-GAFRIKA-GOVDE-0907".replace("-", "_")) \
    if False else None

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

# tire iceren modul adi import edilemez -> kaynagi dogrudan yukluyoruz
_yol = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                    "ARAC-SINIR-GAFRIKA-GOVDE-0907.py")
_ns = {"__name__": "_govde_modul", "__file__": _yol}
exec(compile(io.open(_yol, encoding="utf-8").read(), _yol, "exec"), _ns)
govde = _ns["govde"]

SLUGLAR = ["nijerya", "kamerun", "cad", "gana", "togo", "benin", "nijer",
           "mali", "senegal", "gine", "fildisi-sahili", "burkina-faso",
           "kenya", "uganda", "tanzanya", "somali", "eritre", "habesistan",
           "zaire", "mozambik", "zambiya", "zimbabve", "malavi",
           "guney-afrika-cumhuriyeti", "sudan"]

ANT = ("antlaşma", "anlaşma", "protokol", "konvansiyon", "mukavele")
YIL = re.compile(r"(?<!\d)(1[6-9]\d\d|20[0-2]\d)(?!\d)")
SINIR = re.compile(r"(?<![0-9A-Za-zÇĞİÖŞÜçğıöşü])(sınır|hudut)", re.IGNORECASE)


def main():
    tasiyan, susan, olculemeyen = [], [], []
    for s in SLUGLAR:
        m, hal, _ = govde(s)
        if m is None:
            olculemeyen.append((s, hal))
            print("%-26s %s" % (s, hal))
            continue
        aday = []
        for c in re.split(r"(?<=[.!?])\s+", m):
            if SINIR.search(c) and YIL.search(c) and any(
                    a in c.lower() for a in ANT):
                aday.append(c.strip())
        if aday:
            tasiyan.append((s, len(m), aday))
            print("%-26s %6d kar · ADAY CUMLE %d" % (s, len(m), len(aday)))
            for c in aday[:2]:
                print("      » %s" % c[:300])
        else:
            susan.append((s, len(m)))
            print("%-26s %6d kar · ⚪ sinir+antlasma+yil ayni cumlede YOK"
                  % (s, len(m)))

    t = len(tasiyan) + len(susan)
    print("\n=== SONUC (payda: govdesi ALINABILEN %d madde) ===" % t)
    print("  🟢 sinir antlasmasi ADAY cumlesi TASIYAN : %d" % len(tasiyan))
    print("  ⚪ o tanecikte SUSAN                     : %d" % len(susan))
    print("  🔴 govdesi ALINAMAYAN (olculemedi)       : %d" % len(olculemeyen))
    if t:
        print("  ⇒ tanecik kapsamasi %%%.0f" % (100.0 * len(tasiyan) / t))
    print("\n⚠️ 'ADAY cumle' HUKUM DEGILDIR — cumlenin gercekten O KENARI"
          " tarihleyip tarihlemedigi AYRICA okunur (`§4⑧`).")
    return 0


if __name__ == "__main__":
    sys.exit(main())

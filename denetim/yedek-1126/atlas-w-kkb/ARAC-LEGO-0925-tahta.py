# -*- coding: utf-8 -*-
"""MOTOR-LEGO-0925: tahtada bu ada giden/gelen son mesajları tam metinle basar."""
import json
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
AD = sys.argv[1] if len(sys.argv) > 1 else "MOTOR-LEGO-0925"
import os  # MUTLAK-KOK-DENETIM-1006: kök için
d = json.load(open(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "oturumlar", "tahta.json"), encoding="utf-8"))
m = d if isinstance(d, list) else d.get("mesajlar", d)
for x in m:
    if AD in (x.get("kimden"), x.get("kime")):
        print(f"--- {x['no']} {x['zaman']} {x['kimden']} -> {x['kime']} [{x.get('hal')}]")
        print(x["mesaj"])

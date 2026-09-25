# -*- coding: utf-8 -*-
"""YUK-BOLME-0925 — ARAC-YUK-ACILIS-SINAV-0925.js ciktisini ozetle: hazirlik, ana iplik
serisi (5 sn), geo dilimi ve buyuk dosyalarin inis zamani."""
import json, os, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
for et in sys.argv[1:]:
    r = json.load(open(os.path.join(KOK, "denetim", "YUK-BOLME-0925-SINAV-%s.json" % et), encoding="utf-8"))
    t = r["turlar"][0]
    print("=== %s  hazir %s ms · DCL %s · yigin %.0f MB · Script %.1f s · Task %.1f s" % (
        et, t["harita_hazir_ms"], t["son"]["dcl"], t["metrik"]["JSHeapUsedSize"] / 1048576,
        t["metrik"]["ScriptDuration"], t["metrik"]["TaskDuration"]))
    S = t["seri"]; on = S[0]
    for s in S[1:]:
        if s["t"] - on["t"] < 3000 and s is not S[-1]:
            continue
        dt = (s["t"] - on["t"]) / 1000.0
        print("   %5.1f-%5.1f sn  mesgul %3.0f%%  betik %3.0f%%  yigin %5d MB" % (
            on["t"] / 1000, s["t"] / 1000, 100 * (s["g"] - on["g"]) / dt, 100 * (s["s"] - on["s"]) / dt, s["h"]))
        on = s
    for k in sorted(t["istek"], key=lambda k: -k["bayt"])[:5]:
        print("   %-45s bas %6s bit %6s  %6.2f MB" % (k["u"][-45:], k["basMs"], k["bitMs"], k["bayt"] / 1048576))
    for k in t["istek"]:
        if "/geo/" in k["u"]:
            print("   GEO %-40s bas %6s bit %6s  %6.2f MB" % (k["u"][-40:], k["basMs"], k["bitMs"], k["bayt"] / 1048576))

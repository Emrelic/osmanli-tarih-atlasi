# -*- coding: utf-8 -*-
"""Döküm JSON'undan bir dosyanın maddelerini okunur basar: py bas.py <yuk.json> <dosya-parcasi> [d_uzunluk]"""
import io, json, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
L = json.load(io.open(sys.argv[1], encoding="utf-8"))
n = int(sys.argv[3]) if len(sys.argv) > 3 else 260
for i, o in enumerate(L):
    if sys.argv[2] not in o["dosya"]:
        continue
    print("#%d %s %s | %s | dv=%s %s | kg=%s kapsam=%s sinir=%s" % (
        i, o["sinif_olc"][:3], o["t"], o["b"], o.get("devlet"), o.get("devletler", ""),
        o.get("kapsam_genis", ""), o.get("kapsam", ""), o.get("sinir_id", "")))
    print("    D:", (o.get("d") or "")[:n].replace("\n", " "))
    print("    K:", (o.get("kaynak") or "")[:160])

# -*- coding: utf-8 -*-
"""Tahtadan numarali mesaji TAM oku:  py <bu> 5024 [5025 ...]"""
import io, json, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
d = json.load(open(r"C:\atlas\oturumlar\tahta.json", encoding="utf-8"))
ms = d["mesajlar"] if isinstance(d, dict) and "mesajlar" in d else d
istenen = [a.lstrip("M-") for a in sys.argv[1:]] or ["-1"]
if istenen == ["-1"]:
    for m in ms[-5:]:
        print(m.get("no"), m.get("kimden"), "->", m.get("kime"))
    sys.exit()
for hedef in istenen:
    for m in ms:
        if str(m.get("no")).lstrip("M-") == hedef:
            print("=" * 78)
            print("M-%s  %s -> %s" % (m.get("no"), m.get("kimden"), m.get("kime")))
            print("=" * 78)
            print(m.get("mesaj", ""))
            break
    else:
        print("M-%s bulunamadi" % hedef)

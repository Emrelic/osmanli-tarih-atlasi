# -*- coding: utf-8 -*-
"""EKOKUMA-0077-B — kronoloji çapa taraması (0076-B çapa aletini kullanır).
Kullanım: py denetim/EKOKUMA-0077-B-tara.py <anahtar> [<anahtar> ...]
Her anahtar için normalleştirilmiş eşleşen maddeleri (gün | dosya | metin) basar.
"""
import importlib.util
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
K = os.path.dirname(os.path.abspath(__file__))
sp = importlib.util.spec_from_file_location("capa", os.path.join(K, "EKOKUMA-0076-B-capa.py"))
capa = importlib.util.module_from_spec(sp)
sp.loader.exec_module(capa)

if not capa.sina():
    print("capa sinavi KALDI")
    sys.exit(1)
hepsi = capa.maddeler()
print("evren:", len(hepsi))
for a in sys.argv[1:]:
    n = capa.norm(a)
    bul = [(g, os.path.basename(d), b) for d, g, b in hepsi if n in capa.norm(b)]
    print("==", a, len(bul))
    for g, d, b in sorted(bul)[:25]:
        print("  ", g, "|", d, "|", b[:110])

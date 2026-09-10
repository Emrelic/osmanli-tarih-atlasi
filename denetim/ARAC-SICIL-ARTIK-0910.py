# -*- coding: utf-8 -*-
"""ARAC-SICIL-ARTIK-0910 — ARTIK kovasindaki maddelerin TAM metnini doker.

Elle atama (ARAC-SICIL-KUME-0910 icindeki ELLE tablosu) ancak maddenin
kendisi OKUNARAK yapilir. Bu alet onu okunur hale getirir.
"""
import json, io, os, sys, glob

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden"

hedef = set()
for satir in io.open("denetim/OLCUM-SICIL-KUME-0910.json", encoding="utf-8"):
    pass
d = json.load(io.open("denetim/OLCUM-SICIL-KUME-0910.json", encoding="utf-8"))
for m in d["maddeler"]:
    if m["kume"] == "ARTIK":
        hedef.add((m["paket"], m["no"]))

for p in sorted(glob.glob(os.path.join(KOK, "parti-*"))):
    ad = os.path.basename(p)
    if not any(a == ad for a, _ in hedef):
        continue
    cev = json.load(io.open(os.path.join(p, "CEVAP.json"), encoding="utf-8"))
    par = {}
    py_ = os.path.join(p, "PARTI.json")
    if os.path.exists(py_):
        for m in json.load(io.open(py_, encoding="utf-8")).get("maddeler", []):
            par[m.get("no")] = m
    for no, m in sorted((cev.get("maddeler") or {}).items()):
        if (ad, no) not in hedef:
            continue
        print("=" * 78)
        print(ad, no, "|", m.get("hukum"), "|", m.get("delil_atlas"))
        met = (par.get(no, {}).get("metin") or "(metin yok)").replace("\n", " ")
        print("SIKAYET:", met[:420])
        print("CEVAP  :", (m.get("not") or "").replace("\n", " ")[:340])

# -*- coding: utf-8 -*-
"""Boyasiz kunyelerin metninde gecen BASKA kunye adlari/id'leri (ardil-oncul kaniti adaylari)."""
import io, os, sys, json, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
from renkler import BOYALAR
D = girdi.oku_devletler()
M = {d["id"]: d for d in D}
J = json.load(io.open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "kunye_boya_eslesme.json"), encoding="utf-8"))


def kisa(ad):
    return re.split(r"\s*[\(/—,]", ad)[0].strip()


adlar = {}
for d in D:
    k = kisa(d["ad"])
    if len(k) >= 7:
        adlar.setdefault(k.lower(), []).append(d["id"])

for i in J["kunye_boyasiz"]:
    d = M[i]
    metin = " ".join(str(d.get(a) or "") for a in ("ozet", "ic_not", "ic_not_f", "ic_not_t", "not", "ad_not"))
    for kr in d.get("kronoloji") or []:
        metin += " " + str(kr.get("b") or "")
    ml = metin.lower()
    bulunan = set()
    for oid in M:
        if oid != i and len(oid) >= 6 and re.search(r"(?<![a-z0-9-])" + re.escape(oid) + r"(?![a-z0-9-])", ml):
            bulunan.add(oid)
    for k, idl in adlar.items():
        if k in ml:
            for oid in idl:
                if oid != i:
                    bulunan.add(oid)
    print(i, "->", sorted((b, b in BOYALAR) for b in bulunan)[:25])

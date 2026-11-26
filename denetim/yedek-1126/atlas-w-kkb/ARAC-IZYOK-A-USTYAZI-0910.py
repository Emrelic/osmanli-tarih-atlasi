# -*- coding: utf-8 -*-
"""IZ-YOK DENETIM A — yama dosyalarinin KENDI BEYANINI okur (SALT OKUR).

⏳ BEKLEYEN kovasinin sarti sudur: *dosyanin KENDISI* bekletildigini
soylemeli. Bu alet ust yaziyi basar ve BEKLEME BEYANI adaylarini
isaretler — ama HUKMU VERMEZ, cunku bir kelimenin gecmesi bir beyan
degildir (D159: alt-dizgi aramasi bir adi baska kelimenin icinde bulur).
Hukum, ust yazinin OKUNMASIYLA verilir.
"""
import json, os, re, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

ISARET = re.compile(
    r"BEKLE|bekliyor|beklet|UYGULANMA|uygulanmadi|uygulanmasin|ASKIDA|"
    r"ONAY|karar bekl|TASLAK|ONERI|öneri|YAZMA YOK|dogrudan yazma",
    re.I)

ham = json.load(open(sys.argv[1], encoding="utf-8"))
istenen = None
if len(sys.argv) > 2:
    istenen = set(open(sys.argv[2], encoding="utf-8").read().split())

for dosya, gov in sorted(ham.items()):
    if istenen and dosya not in istenen:
        continue
    u = (gov.get("ustyazi") or "").strip()
    bayrak = "⏳?" if ISARET.search(u) else "  "
    print("=" * 74)
    print("%s %s   (%d bayt)" % (bayrak, dosya, gov.get("bayt", 0)))
    if not u:
        print("    (UST YAZI YOK — dosya kendini tarif etmiyor)")
    else:
        for s in u.split("\n")[:14]:
            print("    " + s.strip()[:110])

# -*- coding: utf-8 -*-
"""TEKILLESTIRME SINAVI — bu bir NO-OP olmali.

Mukerrer ust-seviye anahtarlarin IKIZI BIREBIR AYNI olanlari silindi.
JS zaten SONUNCUYU okuyordu ⇒ ayristirilmis veri DEGISMEMELI.
Degisiyorsa splice hatalidir ve geri alinir.

Kullanim:
    py denetim/ARAC-TEKILLE-SINAV-0907.py once   -> anlik goruntu al
    (tekillestir)
    py denetim/ARAC-TEKILLE-SINAV-0907.py sonra  -> karsilastir
"""
import hashlib
import json
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi   # noqa: E402

KIP = sys.argv[1] if len(sys.argv) > 1 else "once"
ANLIK = os.path.join(os.environ.get("TEMP", "."), "_tekille_once.json")

Y = girdi.yukle(sessiz=True)
if len(Y) < 3000:
    raise SystemExit("SESSIZ SIFIR: %d" % len(Y))

izler = {}
for y in Y:
    ad = y.get("ad")
    if not ad:
        continue
    izler[ad] = hashlib.sha256(
        json.dumps(y, sort_keys=True, ensure_ascii=False).encode("utf-8")
    ).hexdigest()[:16]

if KIP == "once":
    with open(ANLIK, "w", encoding="utf-8") as f:
        json.dump(izler, f)
    print("ANLIK GORUNTU: %d kayit -> %s" % (len(izler), ANLIK))
else:
    with open(ANLIK, encoding="utf-8") as f:
        onceki = json.load(f)
    eksik = [a for a in onceki if a not in izler]
    yeni = [a for a in izler if a not in onceki]
    degisen = [a for a in izler if a in onceki and izler[a] != onceki[a]]
    print("=" * 62)
    print("  kayit ONCE %d · SONRA %d" % (len(onceki), len(izler)))
    print("  KAYBOLAN %d · YENI %d · DEGISEN %d"
          % (len(eksik), len(yeni), len(degisen)))
    print("=" * 62)
    for a in (eksik + yeni + degisen)[:15]:
        print("   %s" % a)
    if eksik or yeni or degisen:
        raise SystemExit("🔴 NO-OP DEGIL — tekillestirme VERIYI DEGISTIRDI, GERI AL")
    print("🟢 NO-OP DOGRULANDI — ayristirilmis veri BIREBIR ayni")

# -*- coding: utf-8 -*-
"""KAYNAK-ARAYUZ-1014 — site (js/kaynak_damga.js) ile ölçüm (arac/kaynak_guven.py) EŞİT Mİ?

Evren: arac/kaynak_guven.py evren_yukle() — index.html'in yüklediği bütün kronoloji/olay
dosyaları + devletler.js künye kronolojileri + künye `kaynak` alanları. Her madde iki dilde
damgalanır; damga, alt neden ve parça kademeleri madde madde karşılaştırılır.

Çıkış: 0 eşit · 1 fark var (ilk 30 fark basılır) · 2 ölçülemedi.
Kullanım: py denetim/KAYNAK-ARAYUZ-1014/esit_sina.py
"""
import json
import os
import subprocess
import sys

KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".."))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)

import kaynak_guven as kg  # noqa: E402


def main():
    try:
        T, _sha = kg.tablo_oku()
        S = kg.Siniflayici(T)
        _dosyalar, F, KK, KU = kg.evren_yukle()
    except Exception as e:  # noqa: BLE001
        print("ÖLÇÜLEMEDİ:", e)
        return 2
    evren = F + KK + KU
    girdi, py = [], []
    for i, m in enumerate(evren):
        girdi.append({"i": i, "kaynak": m["kaynak"], "t": m["t"]})
        r = S.damgala(m["kaynak"], m["t"])
        py.append((r["damga"], r["alt"], [x[1] for x in r["parcalar"]]))
    p = subprocess.run(["node", os.path.join("denetim", "KAYNAK-ARAYUZ-1014", "esit_sina.js")],
                       input=json.dumps(girdi, ensure_ascii=False).encode("utf-8"),
                       capture_output=True)
    if p.returncode != 0:
        print("ÖLÇÜLEMEDİ: node", p.stderr.decode("utf-8", "replace")[:500])
        return 2
    js = json.loads(p.stdout.decode("utf-8"))
    if len(js) != len(py):
        print("ÖLÇÜLEMEDİ: sayı tutmuyor", len(js), len(py))
        return 2
    fark = []
    for x in js:
        a = py[x["i"]]
        b = (x["damga"], x["alt"], x["kad"])
        if a[0] != b[0] or a[1] != b[1] or list(a[2]) != list(b[2]):
            fark.append((x["i"], a, b))
    say = {}
    for d, _a, _k in py:
        say[d] = say.get(d, 0) + 1
    print("evren: %d madde (dosya %d · künye kronolojisi %d · künye %d)" % (len(evren), len(F), len(KK), len(KU)))
    print("damga (Python):", dict(sorted(say.items())))
    print("FARK: %d" % len(fark))
    for i, a, b in fark[:30]:
        m = evren[i]
        print("  %s %s t=%s\n    kaynak: %s\n    py=%s\n    js=%s" % (m["evren"], m["anahtar"], m["t"],
              str(m["kaynak"])[:160], a, b))
    return 1 if fark else 0


if __name__ == "__main__":
    sys.exit(main())

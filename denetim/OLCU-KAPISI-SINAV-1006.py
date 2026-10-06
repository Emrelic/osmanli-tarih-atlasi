# -*- coding: utf-8 -*-
u"""OLCU-KAPISI-SINAV-1006 — olcu_kapisi_1006.py + OLCU-KAPISI-1006.js İKİ YÖNDE (salt okuma).

    py denetim/OLCU-KAPISI-SINAV-1006.py      çıkış 0 geçti · 1 kaldı

Her dal ayrı süreçtir: ölçülemedi yolu sys.exit(2)/process.exit(2) yapar.
GERÇEK koşul dalı: bu ağaçta gerçekten olmayan bir dosya (data/__w32_yok__.js) ve
gerçekten olan bir dosya (index.html) T1'e verilir — yapay kanca kullanılmadan.
"""
import os
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(KOK, "denetim")
GECTI = KALDI = 0


def sina(ad, sart, detay=""):
    global GECTI, KALDI
    if sart:
        GECTI += 1
        print("  ✓ " + ad)
    else:
        KALDI += 1
        print("  ✗ " + ad + ("  — " + detay if detay else ""))


def py(govde, env=None):
    k = "import sys; sys.path.insert(0, %r); import olcu_kapisi_1006 as K\n" % D + govde
    return subprocess.run([sys.executable, "-c", k], cwd=KOK, capture_output=True, text=True,
                          encoding="utf-8", env=dict(os.environ, PYTHONIOENCODING="utf-8", **(env or {})))


def js(govde, env=None):
    k = "const K = require(%r);\n" % os.path.join(D, "OLCU-KAPISI-1006.js").replace("\\", "/") + govde
    return subprocess.run(["node", "-e", k], cwd=KOK, capture_output=True, text=True,
                          encoding="utf-8", env=dict(os.environ, **(env or {})))


def bekle(ad, r, kod, metin=None):
    sina("%s → çıkış %d" % (ad, kod), r.returncode == kod and (metin is None or metin in r.stdout),
         "çıkış %s · %s" % (r.returncode, (r.stdout + r.stderr).strip()[:140]))


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    for dil, kos in (("PY", py), ("JS", js)):
        q = (lambda s: s) if dil == "PY" else (lambda s: s.replace("[", "[").replace("True", "true"))
        print("\n%s — T1 dosya" % dil)
        bekle("+ var olan dosya (index.html)", kos("K.dosya(['index.html'])" + (";" if dil == "JS" else "")), 0)
        bekle("− GERÇEKTEN olmayan dosya", kos("K.dosya(['data/__w32_yok__.js'])"), 2, "T1 girdi yok")
        bekle("− üretilmiş dosya yapay eksik + üretme ipucu", kos("K.dosya(['data/donemler.js'])",
              {"OLCU_KAPISI_YAPAY_EKSIK": "data/donemler.js"}), 2, "coz-c data data/donemler.js donem")
        print("%s — T4 api" % dil)
        if dil == "PY":
            bekle("+ var olan ad", kos("import os; K.api(os, ['path'], 'os')"), 0)
            bekle("− kaldırılmış ad", kos("import os; K.api(os, ['yer_havuzu'], 'os')"), 2, "T4 API yok: os.yer_havuzu")
        else:
            bekle("+ var olan ad", kos("K.api(require('path'), ['join'], 'path')"), 0)
            bekle("− kaldırılmış ad", kos("K.api(require('path'), ['yer_havuzu'], 'path')"), 2, "T4 API yok: path.yer_havuzu")
        print("%s — kova / bitir (ihlal 1 ezer, kova yine basılır)" % dil)
        bekle("+ boş kova, kod 0", kos("K.bitir(0)"), 0)
        bekle("− kova dolu, kod 0", kos("K.kova('x'); K.bitir(0)"), 2, "KOVASI (1): x")
        bekle("− kova dolu, İHLAL 1", kos("K.kova('x'); K.bitir(1)"), 1, "KOVASI (1): x")
        bekle("+ boş kova, ihlal 1", kos("K.bitir(1)"), 1)
    print("\nSONUÇ: %d geçti · %d kaldı" % (GECTI, KALDI))
    sys.exit(1 if KALDI else 0)

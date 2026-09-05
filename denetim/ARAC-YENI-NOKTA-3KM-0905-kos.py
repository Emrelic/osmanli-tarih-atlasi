# -*- coding: utf-8 -*-
"""ARAC-YENI-NOKTA-3KM-0905.js koşturucusu.

🔴 VE BU SARMALAYICI BİR DERSİN KAYDI (5 Eylül 2026).
İlk sürümde girdi dosyası listesini **JS içinde bir regex** `arac/girdi.py`
kaynağından çıkarıyordu. Regex hiçbir şey eşleştirmedi, betik
`atlas noktasi: 0` bastı ve **148 yama kaydının 148'ini "YENİ" ilan etti** —
oysa gerçek 48. `Tunus`, `Rodos`, `Sisam` gibi atlasta kesin var olan
kayıtlar "yeni nokta" göründü.

⇒ `CLAUDE.md §11`: *"veri zaten bir dilde yazılıysa, o dilin
yorumlayıcısını çağır."* Liste artık **Python'un kendisinden** geliyor
(`import girdi`), JS onu argümanla alıyor. Ayrıştırıcı yazılmadı.

⚠️ Ve ikinci ders: betik `0` bastı ama **DURMADI**. `0`, "yok" ile
"bakmadım" arasında ayrım yapmaz. Artık dosya listesi boşsa ya da atlas
0 nokta okursa çıkış kodu 2 ile DURUYOR.
"""
import json
import os
import subprocess
import sys
import tempfile

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS = os.path.join(KOK, "denetim", "ARAC-YENI-NOKTA-3KM-0905.js")

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

# --- girdi dosyalarını PYTHON'un kendisinden al, ayrıştırma ---
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

dosyalar = list(girdi.GIRDI_DOSYALARI)
print("girdi dosyasi (girdi.py'den): %d" % len(dosyalar))
if not dosyalar:
    print("🔴 GIRDI_DOSYALARI BOŞ — ölçüm yapılamaz, DURDUM")
    sys.exit(2)

with tempfile.NamedTemporaryFile("w", suffix=".json", delete=False,
                                 encoding="utf-8") as fh:
    json.dump(dosyalar, fh)
    liste = fh.name

try:
    r = subprocess.run(["node", JS, KOK, liste], cwd=KOK, capture_output=True,
                       text=True, encoding="utf-8", errors="replace")
    print(r.stdout)
    if r.stderr.strip():
        print("--- stderr ---")
        print(r.stderr)
    sys.exit(r.returncode)
finally:
    try:
        os.unlink(liste)
    except OSError:
        pass

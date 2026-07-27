# -*- coding: utf-8 -*-
"""
Sürüm damgalama — tarayıcı önbelleği yüzünden kullanıcının eski dosyaları
görmesini engeller. Her yayından ÖNCE çalıştırın:

    py arac/surum_damgala.py

index.html içindeki yerel js/css bağlantılarına ?v=<zaman damgası> ekler
(unpkg gibi dış adreslere dokunmaz).
"""
import re, os, sys, io, subprocess
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "index.html")

# Sürüm etiketi: son commit'in kısa özeti yoksa artan sayaç
try:
    n = subprocess.check_output(["git", "rev-list", "--count", "HEAD"], cwd=KOK).decode().strip()
except Exception:
    n = "0"
SURUM = "r" + str(int(n) + 1)

h = open(YOL, encoding="utf-8").read()
h, a = re.subn(r'(src="(?:js|data)/[^"?]+\.js)(?:\?v=[^"]*)?"', r'\1?v=' + SURUM + '"', h)
h, b = re.subn(r'(href="css/[^"?]+\.css)(?:\?v=[^"]*)?"', r'\1?v=' + SURUM + '"', h)
open(YOL, "w", encoding="utf-8").write(h)
print(f"Sürüm damgası: {SURUM}  ({a} betik, {b} stil dosyası güncellendi)")

# -*- coding: utf-8 -*-
# OSMANLI-IC-0082 — TDV sayfasinin govdesini duz metne cevirir ve anahtar kelime cevresini basar.
# Kullanim: py denetim/ARAC-OSMANLI-IC-0082-TDV.py <html> <kelime> [<kelime> ...] [--pencere N]
import re, html, sys
sys.stdout.reconfigure(encoding="utf-8")
args = sys.argv[1:]
pen = 220
if "--pencere" in args:
    i = args.index("--pencere"); pen = int(args[i + 1]); del args[i:i + 2]
dosya, kelimeler = args[0], args[1:]
t = open(dosya, encoding="utf-8").read()
t = re.sub(r"<script.*?</script>|<style.*?</style>", "", t, flags=re.S)
t = html.unescape(re.sub(r"<[^>]+>", " ", t))
t = re.sub(r"\s+", " ", t)
open(dosya + ".txt", "w", encoding="utf-8").write(t)
print("uzunluk", len(t))
for k in kelimeler:
    ms = list(re.finditer(k, t))
    print(f"### {k}: {len(ms)}")
    for m in ms:
        print("  ..." + t[max(0, m.start() - pen):m.end() + pen] + "...")

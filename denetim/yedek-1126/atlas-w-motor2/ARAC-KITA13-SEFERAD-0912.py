# -*- coding: utf-8 -*-
"""KITA 13 — `SEFERLER`in 61 kaydi HANGI seferler? (SALT OKUR)

Ongoru ③ CURUDU: SEFERLER kumesi koordinat TASIYOR (`yol:` dizisi, 61/61).
⇒ O halde soru degisti: ozellik VAR, veri VAR — Emre nicin GORMUYOR?

Iki aday:
  (a) ISTEDIGI SEFERLER kumede YOK (Mora · Caldiran · Misir/Ridaniye)
      -> VERI bosluğu, ozellik bosluğu DEGIL
  (b) katman kapali / tetiklenmiyor -> ARAYUZ

Bu alet (a)yi olcer: 61 kaydi tarihe gore siralar ve paketin sordugu
seferleri ADIYLA arar.
"""
import json, os, subprocess, sys, io, tempfile, importlib.util

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

_spec = importlib.util.spec_from_file_location(
    "n", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_m = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_m)
norm = _m.norm

BETIK = """
const fs=require('fs');
global.window={};
eval(fs.readFileSync(process.argv[2],'utf8'));
console.log(JSON.stringify(global.window.SEFERLER||[]));
"""
yol = os.path.join(tempfile.gettempdir(), "_kita13_seferad.js")
io.open(yol, "w", encoding="utf-8").write(BETIK)
r = subprocess.run(["node", yol, os.path.join(KOK, "data", "savaslar.js")],
                   capture_output=True, text=True, encoding="utf-8",
                   errors="replace")
S = json.loads(r.stdout)

print("# SEFERLER: %d kayit · hepsinde `yol:` var mi: %s"
      % (len(S), all("yol" in x for x in S)))
print("# nokta sayisi (yol uzunlugu) toplam: %d"
      % sum(len(x.get("yol") or []) for x in S))
print()
print("--- TARIHE GORE ---")
for x in sorted(S, key=lambda z: z.get("f", "")):
    print("  %s → %s  %-10s %-8s %2d nokta  %s"
          % (x.get("f"), x.get("t"), x.get("tur"), x.get("sonuc"),
             len(x.get("yol") or []), x.get("ad")))

print()
print("--- PAKETIN SORDUGU SEFERLER VERIDE VAR MI ---")
ARANAN = [("H-0001 Mora seferi", ["mora", "modon", "koron"]),
          ("H-0011 Caldiran guzergahi", ["caldiran", "1514"]),
          ("H-0016 Misir / Ridaniye harekati", ["misir", "ridaniye", "kahire",
                                                "1516", "1517"]),
          ("(kiyas) Mercidabik", ["mercidabik"])]
for etiket, anahtarlar in ARANAN:
    bulunan = []
    for x in S:
        n = norm(x.get("ad", "")) + " " + (x.get("f") or "")
        if any(a in n for a in anahtarlar):
            bulunan.append("%s (%s)" % (x.get("ad"), x.get("f")))
    print("  %-36s -> %s" % (etiket, bulunan if bulunan else "ARANDI, YOK"))

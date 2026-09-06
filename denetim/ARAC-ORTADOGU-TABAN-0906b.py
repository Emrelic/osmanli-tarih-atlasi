# -*- coding: utf-8 -*-
"""ORTADOĞU TABANI — İKİ ÖLÇÜT, ve ikisi AYNI SAYIYI VERMİYOR.

🔴 Şartname "Ortadoğu-İran 450 + Kuzey Afrika 182 = 632" diyor ama
   BÖLGE TANIMI hiçbir alette YAZILI DEĞİL: `ARAC-1923-TRIYAJ-0906.js`
   `BOLGE_KUTU` yalnız SEKİZ AVRUPA kutusu tanımlıyor; Ortadoğu ve
   Kuzey Afrika kutusu YOK.
   ⇒ Sayı ölçüte bağlı, ve ölçüt yazılı olmadığı için DEVRALINAMAZ.

İKİ ÖLÇÜT ölçülüyor, ikisi de basılıyor:
   Ⓐ COĞRAFÎ  noktanın koordinatı bir kutuda mı
   Ⓑ KİMLİK   noktanın 1923'teki SAHİBİNİN künye `bolge:`si
              {arabistan · iran · misir-sudan · kuzey-afrika}
🔴 VERİ YAZMAZ.
"""
import io
import json
import os
import subprocess
import sys
import tempfile

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import girdi  # noqa: E402

GUN = "1923-10-28"
BOLGELER = {"arabistan", "iran", "misir-sudan", "kuzey-afrika"}

JS = ("const fs=require('fs'),vm=require('vm');const c={window:{}};"
      "vm.createContext(c);vm.runInContext("
      "fs.readFileSync('data/devletler.js','utf8'),c);"
      "const k=Object.keys(c.window).find(x=>Array.isArray(c.window[x]));"
      "process.stdout.write(JSON.stringify(c.window[k]));")
fd, p = tempfile.mkstemp(suffix=".js")
os.write(fd, JS.encode("utf-8"))
os.close(fd)
r = subprocess.run(["node", p], capture_output=True)
os.unlink(p)
KUNYE = {k["id"]: k for k in json.loads(r.stdout.decode("utf-8"))}


def sahip(z, g):
    for p in (z.get("d") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return "OSMANLI"
    for p in (z.get("v") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return "OSMANLI-tabi"
    for p in (z.get("s") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return p.get("d") or "(kimliksiz)"
    return None


Y = girdi.yukle(sessiz=True)
S = {z["ad"]: sahip(z, GUN) for z in Y}

# ── Ⓐ COĞRAFÎ — Anadolu · Hindistan · Kafkasya DIŞARIDA
KUTU = {
    "ORTADOĞU-İRAN": lambda z: (12 <= z["lat"] <= 40 and 34 <= z["lon"] <= 64
                                and not (36 <= z["lat"] <= 42
                                         and z["lon"] <= 45)),
    "KUZEY AFRİKA": lambda z: (19 <= z["lat"] <= 38
                               and -18 <= z["lon"] <= 26),
}
print("═══ Ⓐ COĞRAFÎ ÖLÇÜT")
ta = 0
for ad, f in KUTU.items():
    ic = [z for z in Y if z.get("lat") is not None and f(z)]
    sz = sum(1 for z in ic if S[z["ad"]] is None)
    ta += len(ic)
    print("   %-16s %4d nokta · sahipsiz %d · kimlik %d"
          % (ad, len(ic), sz,
             len({S[z["ad"]] for z in ic if S[z["ad"]]})))
print("   TOPLAM %d   (şartname 632 · fark %+d)" % (ta, ta - 632))

# ── Ⓑ KİMLİK BÖLGESİ
print("\n═══ Ⓑ KİMLİK BÖLGESİ ÖLÇÜTÜ  {%s}" % " · ".join(sorted(BOLGELER)))
ic = [z for z in Y
      if S[z["ad"]] and KUNYE.get(S[z["ad"]], {}).get("bolge") in BOLGELER]
kim = {}
for z in ic:
    kim[S[z["ad"]]] = kim.get(S[z["ad"]], 0) + 1
print("   TOPLAM %d nokta · kimlik %d   (şartname 632 · fark %+d)"
      % (len(ic), len(kim), len(ic) - 632))
for k, n in sorted(kim.items(), key=lambda x: -x[1]):
    print("      %-26s %3d   [%s]" % (k, n, KUNYE[k].get("bolge")))

# ── AYRIŞMA: coğrafî içinde AMA kimlik bölgesi dışında
cog = {z["ad"] for ad, f in KUTU.items()
       for z in Y if z.get("lat") is not None and f(z)}
kbl = {z["ad"] for z in ic}
print("\n═══ İKİ ÖLÇÜT NEREDE AYRIŞIYOR")
print("   coğrafî İÇİNDE, kimlik bölgesi DIŞINDA : %d" % len(cog - kbl))
d = {}
for a in cog - kbl:
    s = S.get(a) or "(sahipsiz)"
    d[s] = d.get(s, 0) + 1
for k, n in sorted(d.items(), key=lambda x: -x[1])[:10]:
    b = KUNYE.get(k, {}).get("bolge", "—")
    print("      %-26s %3d   [%s]" % (k, n, b))
print("   kimlik bölgesinde AMA coğrafî DIŞINDA  : %d" % len(kbl - cog))

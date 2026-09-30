# -*- coding: utf-8 -*-
"""Yer adı tarayıcı: yerleşim + şehir dosyalarındaki `ad` değerlerinde alt dizgi arar.
py <bu> ad1 ad2 ...   |   --dogrula : kronoloji_cok_senkron_0930.js'teki yer_id'leri TAM eşitlikle sınar."""
import sys, io, re, glob, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
dosyalar = [os.path.join(KOK, "data", os.path.basename(f)) for f in girdi.GIRDI_DOSYALARI]
dosyalar.append(os.path.join(KOK, "data", "sehirler.js"))
ADLAR = set()
for f in dosyalar:
    if not os.path.exists(f):
        continue
    t = open(f, encoding="utf-8").read()
    for m in re.finditer(r"""["']?ad["']?\s*:\s*["']([^"']+)["']""", t):
        ADLAR.add(m.group(1))
print("evren ad:", len(ADLAR), "dosya:", len(dosyalar))
if "--dogrula" in sys.argv:
    t = open(os.path.join(KOK, "data", "kronoloji_cok_senkron_0930.js"), encoding="utf-8").read()
    ids = re.findall(r"""yer_id\s*:\s*"([^"]+)\"""", t)
    kirik = [i for i in ids if i not in ADLAR]
    print("yer_id:", len(ids), "cozulmeyen:", len(kirik), kirik)
    print("madde:", len(re.findall(r"^\s*\{\s*t:", t, re.M)))
else:
    for q in sys.argv[1:]:
        print(q, "→", sorted(a for a in ADLAR if q in a)[:5])

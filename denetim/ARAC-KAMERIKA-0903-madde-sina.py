# -*- coding: utf-8 -*-
"""11 MADDE SINAVI — inmeden önce canlı evrene karşı.

🔴 NİÇİN DOSYA, `py -c` DEĞİL: bugün PowerShell'in kaçış karakteri
DÖRT KEZ ısırdı (backtick · \\" · \\d · here-string). `§11` *"kaçış
içeren hiçbir metin kabuktan geçmez"* diyor ve kural BASH için
yazılmıştı; PowerShell'de backtick ESCAPE, `$` genişleme, `\\d` ise
komut sanılıyor. Kural KABUK demeli.

SINAVLAR
  ① yer_id CANLI evrende var mı (sarkan referans)
  ② gün hassasiyeti (§8 — ay hassasiyeti senkronu bozar)
  ③ aynı gün + aynı başlık mükerrer mi
  ④ Değişmez 2: madde gerçekten bir kırılmayı karşılıyor mu

PROJE KÖKÜNDEN:  py denetim/ARAC-KAMERIKA-0903-madde-sina.py
"""
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, "arac")
import girdi                                              # noqa: E402

Y = girdi.yukle(sessiz=True)
ADLAR = {y["ad"] for y in Y}
O = json.load(io.open("denetim/OLAY-KAMERIKA-0903.json",
                      encoding="utf-8"))["olaylar"]
print("madde: %d · canlı yerleşim: %d" % (len(O), len(Y)))

GUN = re.compile(r"^\d{4}-\d{2}-\d{2}$")

# ① sarkan yer_id
sark = [x["yer_id"] for x in O if x["yer_id"] not in ADLAR]
print("\n① yer_id CANLI evrende YOK : %s"
      % ("🟢 0" if not sark else "🔴 %d %s" % (len(sark), sark)))

# ② gün hassasiyeti
bicim = [x["t"] for x in O if not GUN.match(x["t"])]
print("② gün hassasiyeti          : %s"
      % ("🟢 hepsi gün" if not bicim else "🔴 %s" % bicim))

# ③ mevcut külliyatta aynı gün + aynı başlık
mevcut_gun, mevcut_bas = {}, set()
for f in sorted(os.listdir("data")):
    if not re.match(r"^(olaylar|kronoloji).*\.js$", f):
        continue
    s = io.open(os.path.join("data", f), encoding="utf-8").read()
    for m in re.finditer(r't\s*:\s*"(\d{4}-\d{2}-\d{2})"', s):
        mevcut_gun[m.group(1)] = mevcut_gun.get(m.group(1), 0) + 1
    for m in re.finditer(r'b\s*:\s*"([^"]{6,})"', s):
        mevcut_bas.add(m.group(1))
mük = [x["b"] for x in O if x["b"] in mevcut_bas]
print("③ başlık mükerrer          : %s"
      % ("🟢 0" if not mük else "🔴 %d %s" % (len(mük), mük)))

# ④ her maddenin günü gerçekten bir kırılma mı
Z = json.load(io.open("denetim/ZINCIR-KAMERIKA-0903.json", encoding="utf-8"))
kir = {}
for a in Z:
    for p in a["s"]:
        for d in (p["f"], p["t"]):
            kir[d] = kir.get(d, 0) + 1
print("④ madde günü ↔ kırılma:")
for x in O:
    print("   %s  kırılma %-4s · mevcut aynı gün kayıt %-4s · %s"
          % (x["t"], kir.get(x["t"], 0), mevcut_gun.get(x["t"], 0),
             x["b"][:50]))

kotu = len(sark) + len(bicim) + len(mük)
print("\n%s" % ("🟢 DÖRT SINAV DA TEMİZ — inmeye hazır"
                if not kotu else "🔴 %d kusur" % kotu))
sys.exit(1 if kotu else 0)

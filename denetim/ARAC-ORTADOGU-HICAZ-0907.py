# -*- coding: utf-8 -*-
"""② HİCAZ · YEMEN — "kusur mu `harita:` konvansiyonu mu?"

🔴 Koordinatörün şartı: hüküm vermeden önce HANGİ KATMANDA konuştuğunu
   yaz. `harita:` dolaylaması iki yerde ayrı çalışıyor.
   Bu ölçüm ÜÇ KATMANI AYRI AYRI sorar:
      Ⓐ KÜNYE   `devletler.js`te `id` olarak VAR MI
      Ⓑ BOYA    `renkler.BOYALAR`da ANAHTAR olarak VAR MI (çizilir mi)
      Ⓒ DENETİM `denetle.py`nin künye araması onu BULUYOR MU
   Üçü AYRI cevap verebilir; "konvansiyon" hükmü ancak Ⓑ 🟢 ve Ⓐ 🔴
   ise verilebilir.
🔴 VERİ YAZMAZ.
"""
import io
import json
import os
import subprocess
import sys
import tempfile
import importlib.util as _ilu

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)

# ⑩ KOL (7 Eylül 2026): pad() artık ORTAK. Bu dosyanın KENDİ pad()'i
# (`s.rjust(10,"0")`) tam bu sürümde `yemen` için 29 sahte pozitif
# üretmişti — dört ayrı alette dört ayrı yazım olmasının beşinci vakası.
# Bkz. ARAC-TARIH-0907.py.
_spec = _ilu.spec_from_file_location(
    "_tarih0907", os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                "ARAC-TARIH-0907.py"))
_tarih0907 = _ilu.module_from_spec(_spec)
_spec.loader.exec_module(_tarih0907)
pad = _tarih0907.pad
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import girdi  # noqa: E402
import renkler as R  # noqa: E402

G = "1923-10-28"
ADAY = ["hicaz", "yemen"]

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
KUN = json.loads(r.stdout.decode("utf-8"))
ID = {k["id"]: k for k in KUN}
HAR = {}
for k in KUN:
    if k.get("harita"):
        HAR.setdefault(k["harita"], []).append(k["id"])

Y = girdi.yukle(sessiz=True)


def kullanan(kim):
    out = []
    for z in Y:
        for kat in ("d", "s", "isg"):
            for q in (z.get(kat) or []):
                if q.get("d") == kim:
                    out.append((z["ad"], kat, q.get("f"), q.get("t")))
    return out


print("═══ ÜÇ KATMAN AYRI AYRI")
for a in ADAY:
    kul = kullanan(a)
    canli = [x for x in kul if x[2] <= G < x[3]]
    print("\n── `%s` — veride %d dönem · 1923'te %d"
          % (a, len(kul), len(canli)))
    # Ⓐ KÜNYE
    print("   Ⓐ KÜNYE  id olarak : %s"
          % ("🟢 VAR %s → %s" % (ID[a].get("f"), ID[a].get("t"))
             if a in ID else "🔴 YOK"))
    print("            `harita:%s` diyen künye : %s"
          % (a, HAR.get(a) or "🔴 YOK"))
    # Ⓑ BOYA
    v = R.BOYALAR.get(a)
    hx = None
    if isinstance(v, (list, tuple)):
        hx = next((x for x in v if isinstance(x, str)
                   and x.startswith("#")), None)
    elif isinstance(v, str):
        hx = v
    print("   Ⓑ BOYA   BOYALAR['%s'] : %s"
          % (a, ("🟢 " + hx) if hx else "🔴 YOK ⇒ ÇİZİLMEZ"))
    # Ⓒ ilgili künyelerin durumu
    for kid in HAR.get(a, []):
        k = ID[kid]
        # (pad artık modül seviyesinde, ARAC-TARIH-0907'den — yukarı bkz.)
        asan = [x for x in kul if pad(x[3]) > pad(k["t"])]
        once = [x for x in kul if pad(x[2]) < pad(k["f"])]
        print("   Ⓒ DENETİM `%s` penceresi %s → %s · veri AŞAN %d · ÖNCE %d"
              % (kid, k.get("f"), k.get("t"), len(asan), len(once)))
    if canli:
        print("      1923 örnek: %s"
              % ", ".join(x[0] for x in canli[:6]))

print("""
═══ HÜKÜM ÖLÇÜTÜ
   Ⓐ🔴 + Ⓑ🟢  ⇒ `harita:` KONVANSİYONU — kusur DEĞİL, çizim çalışıyor
   Ⓐ🔴 + Ⓑ🔴  ⇒ 🔴 GERÇEK KUSUR — harita DELİĞİ
   Ⓐ🟢        ⇒ zaten künyeli, soru yok
""")

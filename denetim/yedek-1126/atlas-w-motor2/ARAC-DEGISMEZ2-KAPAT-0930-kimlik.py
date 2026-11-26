# -*- coding: utf-8 -*-
"""taraflar[] içinde harita anahtarı → künye id düzeltmesi (yalnız taraflar dizisinde),
ve 1413 odağını künye dışı kimlikten İhtiman'a çevirir."""
import sys, io, re, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "data", "kronoloji_cok_senkron_0930.js")
ES = {"avusturya": "habsburg", "mehmed-celebi": "fetret-mehmed", "musa-celebi": "fetret-musa",
      "suleyman-celebi": "fetret-suleyman", "yemen": "yemen-zeydi"}
t = open(YOL, encoding="utf-8").read()
n = [0]
def duzelt(m):
    ic = m.group(1)
    for a, b in ES.items():
        ic, k = re.subn(r'"%s"' % re.escape(a), '"%s"' % b, ic)
        n[0] += k
    return "taraflar:[" + ic + "]"
t = re.sub(r"taraflar:\[([^\]]*)\]", duzelt, t)
t, k2 = re.subn(r'odak_kimlik:"musa-celebi"', 'yer_id:"İhtiman"', t)
open(YOL, "w", encoding="utf-8").write(t)
print("taraf duzeltme:", n[0], "odak duzeltme:", k2)
